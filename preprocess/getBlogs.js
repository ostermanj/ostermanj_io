import contentful from 'contentful';
import slugify from 'slugify';
import fs from 'fs';
import path from 'path';
import url from 'url';

const entrySlugsToId = {};
const client = contentful.createClient({
    space: process.env.C_SPACE,
    //environment: 'master',
    accessToken: process.env.C_TOKEN
});
async function getPaginatedCollection(content_type = "blogPost", skip = 0, limit = 100){
    return client.getEntries({
        content_type,
        skip,
        limit,
        order: '-fields.datePublished'
    }).then(response => {
        response.items.forEach(blog => {
            mapSlugToId(blog);
        })
        if ( response.total > skip + response.limit ){
            return getPaginatedCollection(skip + response.limit)
        }
    }).catch(console.error);
}
function reverse(obj){
    const newObj = {};
    Object.keys(obj).forEach(key => {
        newObj[obj[key]] = key;
    });
    return newObj;
}
function mapSlugToId(blog, attempt = 0){
    const slug = slugify(blog.fields.title, {strict: true, lower: true});
    if (entrySlugsToId[attempt > 0 ? `${slug}-${attempt}` : attempt] === undefined){
        entrySlugsToId[slug + (attempt > 0 ? `-${attempt}` : '')] = blog.sys.id;
    } else {
        mapSlugToId(blog, ++attempt)
    }
}
function writeToFile(){
    fs.writeFileSync(path.join(path.dirname(url.fileURLToPath(import.meta.url)), '/../utils/bloglist.json'), JSON.stringify(entrySlugsToId, null, 2));
    fs.writeFileSync(path.join(path.dirname(url.fileURLToPath(import.meta.url)), '/../src/idlist.json'), JSON.stringify(reverse(entrySlugsToId), null, 2));
}
Promise.all([getPaginatedCollection(), getPaginatedCollection('project')]).then(() => {
     writeToFile();
     process.exit(0);
});