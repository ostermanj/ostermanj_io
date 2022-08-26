var ze=Object.defineProperty;var Be=(r,e,n)=>e in r?ze(r,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):r[e]=n;var fe=(r,e,n)=>(Be(r,typeof e!="symbol"?e+"":e,n),n);import{n as ue,s as Ve,S as Ke,i as Je,a as We,e as I,c as He,b as V,g as F,t as j,d as G,f as T,h as D,j as Fe,k as Ge,o as _e,l as Ye,m as Me,p as Xe,q as de,r as K,u as Ze,v as Qe,w as xe,x as q,y as x,z,A as B,B as Ae}from"./chunks/index-ffb4f659.js";import{a as et,s as tt}from"./chunks/paths-9b83c8fd.js";const M=[];function we(r,e=ue){let n;const s=new Set;function a(i){if(Ve(r,i)&&(r=i,n)){const c=!M.length;for(const l of s)l[1](),M.push(l,r);if(c){for(let l=0;l<M.length;l+=2)M[l][0](M[l+1]);M.length=0}}}function u(i){a(i(r))}function t(i,c=ue){const l=[i,c];return s.add(l),s.size===1&&(n=e(a)||ue),i(r),()=>{s.delete(l),s.size===0&&(n(),n=null)}}return{set:a,update:u,subscribe:t}}class ne{constructor(e,n){fe(this,"name","HttpError");fe(this,"stack");this.status=e,this.message=n!=null?n:`Error: ${e}`}toString(){return this.message}}class Oe{constructor(e,n){this.status=e,this.location=n}}function nt(r,e){return r==="/"||e==="ignore"?r:e==="never"?r.endsWith("/")?r.slice(0,-1):r:e==="always"&&!r.endsWith("/")?r+"/":r}function rt(r){for(const e in r)r[e]=r[e].replace(/%23/g,"#").replace(/%3[Bb]/g,";").replace(/%2[Cc]/g,",").replace(/%2[Ff]/g,"/").replace(/%3[Ff]/g,"?").replace(/%3[Aa]/g,":").replace(/%40/g,"@").replace(/%26/g,"&").replace(/%3[Dd]/g,"=").replace(/%2[Bb]/g,"+").replace(/%24/g,"$");return r}class at extends URL{get hash(){throw new Error("url.hash is inaccessible from load. Consider accessing hash from the page store within the script tag of your component.")}}function Pe(r){let e=r.baseURI;if(!e){const n=r.getElementsByTagName("base");e=n.length?n[0].href:r.URL}return e}function me(){return{x:pageXOffset,y:pageYOffset}}function Ie(r){return r.composedPath().find(n=>n instanceof Node&&n.nodeName.toUpperCase()==="A")}function je(r){return r instanceof SVGAElement?new URL(r.href.baseVal,document.baseURI):new URL(r.href)}function Te(r){const e=we(r);let n=!0;function s(){n=!0,e.update(t=>t)}function a(t){n=!1,e.set(t)}function u(t){let i;return e.subscribe(c=>{(i===void 0||n&&c!==i)&&t(i=c)})}return{notify:s,set:a,subscribe:u}}function st(){const{set:r,subscribe:e}=we(!1);let n;async function s(){clearTimeout(n);const a=await fetch(`${et}/app_/version.json`,{headers:{pragma:"no-cache","cache-control":"no-cache"}});if(a.ok){const{version:u}=await a.json(),t=u!=="1661477672535";return t&&(r(!0),clearTimeout(n)),t}else throw new Error(`Version check failed: ${a.status}`)}return{subscribe:e,check:s}}function it(r){let e=5381,n=r.length;if(typeof r=="string")for(;n;)e=e*33^r.charCodeAt(--n);else for(;n;)e=e*33^r[--n];return(e>>>0).toString(36)}const ge=window.fetch;function ot(r,e){let s=`script[sveltekit\\:data-type="data"][sveltekit\\:data-url=${JSON.stringify(typeof r=="string"?r:r.url)}]`;e&&typeof e.body=="string"&&(s+=`[sveltekit\\:data-body="${it(e.body)}"]`);const a=document.querySelector(s);if(a&&a.textContent){const{body:u,...t}=JSON.parse(a.textContent);return Promise.resolve(new Response(u,t))}return ge(r,e)}const ct=/^(\.\.\.)?(\w+)(?:=(\w+))?$/;function lt(r){const e=[],n=[];let s=!0;return{pattern:r===""?/^\/$/:new RegExp(`^${decodeURIComponent(r).split(/(?:@[a-zA-Z0-9_-]+)?(?:\/|$)/).map((u,t,i)=>{const c=/^\[\.\.\.(\w+)(?:=(\w+))?\]$/.exec(u);if(c)return e.push(c[1]),n.push(c[2]),"(?:/(.*))?";const l=t===i.length-1;return u&&"/"+u.split(/\[(.+?)\]/).map((m,S)=>{if(S%2){const A=ct.exec(m);if(!A)throw new Error(`Invalid param: ${m}. Params and matcher names can only have underscores and alphanumeric characters.`);const[,E,J,O]=A;return e.push(J),n.push(O),E?"(.*?)":"([^/]+?)"}return l&&m.includes(".")&&(s=!1),m.normalize().replace(/%5[Bb]/g,"[").replace(/%5[Dd]/g,"]").replace(/#/g,"%23").replace(/\?/g,"%3F").replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}).join("")}).join("")}${s?"/?":""}$`),names:e,types:n}}function ft(r,e,n,s){const a={};for(let u=0;u<e.length;u+=1){const t=e[u],i=n[u],c=r[u+1]||"";if(i){const l=s[i];if(!l)throw new Error(`Missing "${i}" param matcher`);if(!l(c))return}a[t]=c}return a}function ut(r,e,n){return Object.entries(e).map(([s,[a,u,t,i]])=>{const{pattern:c,names:l,types:m}=lt(s),S={id:s,exec:A=>{const E=c.exec(A);if(E)return ft(E,l,m,n)},errors:a.map(A=>r[A]),layouts:u.map(A=>r[A]),leaf:r[t],uses_server_data:!!i};return S.errors.length=S.layouts.length=Math.max(S.errors.length,S.layouts.length),S})}function dt(r,e){return new ne(r,e)}function pt(r){let e,n,s;var a=r[0][0];function u(t){return{props:{data:t[1],errors:t[4]}}}return a&&(e=new a(u(r))),{c(){e&&q(e.$$.fragment),n=I()},l(t){e&&x(e.$$.fragment,t),n=I()},m(t,i){e&&z(e,t,i),V(t,n,i),s=!0},p(t,i){const c={};if(i&2&&(c.data=t[1]),i&16&&(c.errors=t[4]),a!==(a=t[0][0])){if(e){F();const l=e;j(l.$$.fragment,1,0,()=>{B(l,1)}),G()}a?(e=new a(u(t)),q(e.$$.fragment),T(e.$$.fragment,1),z(e,n.parentNode,n)):e=null}else a&&e.$set(c)},i(t){s||(e&&T(e.$$.fragment,t),s=!0)},o(t){e&&j(e.$$.fragment,t),s=!1},d(t){t&&D(n),e&&B(e,t)}}}function ht(r){let e,n,s;var a=r[0][0];function u(t){return{props:{data:t[1],$$slots:{default:[wt]},$$scope:{ctx:t}}}}return a&&(e=new a(u(r))),{c(){e&&q(e.$$.fragment),n=I()},l(t){e&&x(e.$$.fragment,t),n=I()},m(t,i){e&&z(e,t,i),V(t,n,i),s=!0},p(t,i){const c={};if(i&2&&(c.data=t[1]),i&1053&&(c.$$scope={dirty:i,ctx:t}),a!==(a=t[0][0])){if(e){F();const l=e;j(l.$$.fragment,1,0,()=>{B(l,1)}),G()}a?(e=new a(u(t)),q(e.$$.fragment),T(e.$$.fragment,1),z(e,n.parentNode,n)):e=null}else a&&e.$set(c)},i(t){s||(e&&T(e.$$.fragment,t),s=!0)},o(t){e&&j(e.$$.fragment,t),s=!1},d(t){t&&D(n),e&&B(e,t)}}}function _t(r){let e,n,s;var a=r[0][1];function u(t){return{props:{data:t[2],errors:t[4]}}}return a&&(e=new a(u(r))),{c(){e&&q(e.$$.fragment),n=I()},l(t){e&&x(e.$$.fragment,t),n=I()},m(t,i){e&&z(e,t,i),V(t,n,i),s=!0},p(t,i){const c={};if(i&4&&(c.data=t[2]),i&16&&(c.errors=t[4]),a!==(a=t[0][1])){if(e){F();const l=e;j(l.$$.fragment,1,0,()=>{B(l,1)}),G()}a?(e=new a(u(t)),q(e.$$.fragment),T(e.$$.fragment,1),z(e,n.parentNode,n)):e=null}else a&&e.$set(c)},i(t){s||(e&&T(e.$$.fragment,t),s=!0)},o(t){e&&j(e.$$.fragment,t),s=!1},d(t){t&&D(n),e&&B(e,t)}}}function mt(r){let e,n,s;var a=r[0][1];function u(t){return{props:{data:t[2],$$slots:{default:[gt]},$$scope:{ctx:t}}}}return a&&(e=new a(u(r))),{c(){e&&q(e.$$.fragment),n=I()},l(t){e&&x(e.$$.fragment,t),n=I()},m(t,i){e&&z(e,t,i),V(t,n,i),s=!0},p(t,i){const c={};if(i&4&&(c.data=t[2]),i&1033&&(c.$$scope={dirty:i,ctx:t}),a!==(a=t[0][1])){if(e){F();const l=e;j(l.$$.fragment,1,0,()=>{B(l,1)}),G()}a?(e=new a(u(t)),q(e.$$.fragment),T(e.$$.fragment,1),z(e,n.parentNode,n)):e=null}else a&&e.$set(c)},i(t){s||(e&&T(e.$$.fragment,t),s=!0)},o(t){e&&j(e.$$.fragment,t),s=!1},d(t){t&&D(n),e&&B(e,t)}}}function gt(r){let e,n,s;var a=r[0][2];function u(t){return{props:{data:t[3]}}}return a&&(e=new a(u(r))),{c(){e&&q(e.$$.fragment),n=I()},l(t){e&&x(e.$$.fragment,t),n=I()},m(t,i){e&&z(e,t,i),V(t,n,i),s=!0},p(t,i){const c={};if(i&8&&(c.data=t[3]),a!==(a=t[0][2])){if(e){F();const l=e;j(l.$$.fragment,1,0,()=>{B(l,1)}),G()}a?(e=new a(u(t)),q(e.$$.fragment),T(e.$$.fragment,1),z(e,n.parentNode,n)):e=null}else a&&e.$set(c)},i(t){s||(e&&T(e.$$.fragment,t),s=!0)},o(t){e&&j(e.$$.fragment,t),s=!1},d(t){t&&D(n),e&&B(e,t)}}}function wt(r){let e,n,s,a;const u=[mt,_t],t=[];function i(c,l){return c[0][2]?0:1}return e=i(r),n=t[e]=u[e](r),{c(){n.c(),s=I()},l(c){n.l(c),s=I()},m(c,l){t[e].m(c,l),V(c,s,l),a=!0},p(c,l){let m=e;e=i(c),e===m?t[e].p(c,l):(F(),j(t[m],1,1,()=>{t[m]=null}),G(),n=t[e],n?n.p(c,l):(n=t[e]=u[e](c),n.c()),T(n,1),n.m(s.parentNode,s))},i(c){a||(T(n),a=!0)},o(c){j(n),a=!1},d(c){t[e].d(c),c&&D(s)}}}function Ne(r){let e,n=r[6]&&Ce(r);return{c(){e=Ye("div"),n&&n.c(),this.h()},l(s){e=Me(s,"DIV",{id:!0,"aria-live":!0,"aria-atomic":!0,style:!0});var a=Xe(e);n&&n.l(a),a.forEach(D),this.h()},h(){de(e,"id","svelte-announcer"),de(e,"aria-live","assertive"),de(e,"aria-atomic","true"),K(e,"position","absolute"),K(e,"left","0"),K(e,"top","0"),K(e,"clip","rect(0 0 0 0)"),K(e,"clip-path","inset(50%)"),K(e,"overflow","hidden"),K(e,"white-space","nowrap"),K(e,"width","1px"),K(e,"height","1px")},m(s,a){V(s,e,a),n&&n.m(e,null)},p(s,a){s[6]?n?n.p(s,a):(n=Ce(s),n.c(),n.m(e,null)):n&&(n.d(1),n=null)},d(s){s&&D(e),n&&n.d()}}}function Ce(r){let e;return{c(){e=Ze(r[7])},l(n){e=Qe(n,r[7])},m(n,s){V(n,e,s)},p(n,s){s&128&&xe(e,n[7])},d(n){n&&D(e)}}}function bt(r){let e,n,s,a,u;const t=[ht,pt],i=[];function c(m,S){return m[0][1]?0:1}e=c(r),n=i[e]=t[e](r);let l=r[5]&&Ne(r);return{c(){n.c(),s=We(),l&&l.c(),a=I()},l(m){n.l(m),s=He(m),l&&l.l(m),a=I()},m(m,S){i[e].m(m,S),V(m,s,S),l&&l.m(m,S),V(m,a,S),u=!0},p(m,[S]){let A=e;e=c(m),e===A?i[e].p(m,S):(F(),j(i[A],1,1,()=>{i[A]=null}),G(),n=i[e],n?n.p(m,S):(n=i[e]=t[e](m),n.c()),T(n,1),n.m(s.parentNode,s)),m[5]?l?l.p(m,S):(l=Ne(m),l.c(),l.m(a.parentNode,a)):l&&(l.d(1),l=null)},i(m){u||(T(n),u=!0)},o(m){j(n),u=!1},d(m){i[e].d(m),m&&D(s),l&&l.d(m),m&&D(a)}}}function yt(r,e,n){let{stores:s}=e,{page:a}=e,{components:u}=e,{data_0:t=null}=e,{data_1:i=null}=e,{data_2:c=null}=e,{errors:l}=e;Fe("__svelte__",s),Ge(s.page.notify);let m=!1,S=!1,A=null;return _e(()=>{const E=s.page.subscribe(()=>{m&&(n(6,S=!0),n(7,A=document.title||"untitled page"))});return n(5,m=!0),E}),r.$$set=E=>{"stores"in E&&n(8,s=E.stores),"page"in E&&n(9,a=E.page),"components"in E&&n(0,u=E.components),"data_0"in E&&n(1,t=E.data_0),"data_1"in E&&n(2,i=E.data_1),"data_2"in E&&n(3,c=E.data_2),"errors"in E&&n(4,l=E.errors)},r.$$.update=()=>{r.$$.dirty&768&&s.page.set(a)},[u,t,i,c,l,m,S,A,s,a]}class vt extends Ke{constructor(e){super(),Je(this,e,yt,bt,Ve,{stores:8,page:9,components:0,data_0:1,data_1:2,data_2:3,errors:4})}}const kt=function(){const e=document.createElement("link").relList;return e&&e.supports&&e.supports("modulepreload")?"modulepreload":"preload"}(),$t=function(r,e){return new URL(r,e).href},De={},H=function(e,n,s){return!n||n.length===0?e():Promise.all(n.map(a=>{if(a=$t(a,s),a in De)return;De[a]=!0;const u=a.endsWith(".css"),t=u?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${a}"]${t}`))return;const i=document.createElement("link");if(i.rel=u?"stylesheet":kt,u||(i.as="script",i.crossOrigin=""),i.href=a,document.head.appendChild(i),u)return new Promise((c,l)=>{i.addEventListener("load",c),i.addEventListener("error",()=>l(new Error(`Unable to preload CSS for ${a}`)))})})).then(()=>e())},Et={},re=[()=>H(()=>import("./chunks/0-eaa3e963.js"),["chunks/0-eaa3e963.js","components/pages/_layout.svelte-0bf2c8eb.js","assets/+layout-3b7a6131.css","chunks/index-ffb4f659.js","chunks/paths-9b83c8fd.js","chunks/Sprite-c902e0a5.js","assets/Sprite-cf769916.css","chunks/stores-865bf73c.js"],import.meta.url),()=>H(()=>import("./chunks/1-cfa7b5bf.js"),["chunks/1-cfa7b5bf.js","components/pages/_error.svelte-31e2da78.js","chunks/index-ffb4f659.js","chunks/stores-865bf73c.js","chunks/paths-9b83c8fd.js"],import.meta.url),()=>H(()=>import("./chunks/2-5d9586c9.js"),["chunks/2-5d9586c9.js","components/pages/_page.svelte-629a9ae4.js","assets/+page-0a84aa2a.css","chunks/index-ffb4f659.js","chunks/ContentCard-dcd25ad2.js","assets/ContentCard-f61f8b3d.css","chunks/paths-9b83c8fd.js"],import.meta.url),()=>H(()=>import("./chunks/3-4250dcd7.js"),["chunks/3-4250dcd7.js","components/pages/_page_/_page.svelte-6c5c2dbd.js","chunks/index-ffb4f659.js"],import.meta.url),()=>H(()=>import("./chunks/4-bff4b545.js"),[],import.meta.url),()=>H(()=>import("./chunks/5-cc609c91.js"),["chunks/5-cc609c91.js","components/pages/content/_slug_/_page.svelte-30e74cb0.js","assets/+page-4c638043.css","chunks/index-ffb4f659.js","chunks/Sprite-c902e0a5.js","assets/Sprite-cf769916.css","chunks/paths-9b83c8fd.js"],import.meta.url),()=>H(()=>import("./chunks/6-11962446.js"),["chunks/6-11962446.js","components/pages/list/_type_/_page.svelte-6c4ccbca.js","assets/+page-38a88b2a.css","chunks/index-ffb4f659.js","chunks/ContentCard-dcd25ad2.js","assets/ContentCard-f61f8b3d.css","chunks/paths-9b83c8fd.js"],import.meta.url)],Rt={"":[[1],[0],2,1],"content/[slug]":[[1],[0],5,1],"list/[type]":[[1],[0],6,1],"[page]":[[1],[0],3,1],"[type]/[year]/[month]/[day]/[slug]":[[1],[0],4,1]},qe="sveltekit:scroll",W="sveltekit:index",pe=ut(re,Rt,Et),Lt=re[0](),St=re[1]();let Q={};try{Q=JSON.parse(sessionStorage[qe])}catch{}function he(r){Q[r]=me()}function Ut({target:r,base:e,trailing_slash:n}){var Le;const s=[],a={url:Te({}),page:Te({}),navigating:we(null),updated:st()},u={id:null,promise:null},t={before_navigate:[],after_navigate:[]};let i={branch:[],error:null,session_id:0,url:null},c=!1,l=!0,m=!1,S=1,A=null,E,J=!0,O=(Le=history.state)==null?void 0:Le[W];O||(O=Date.now(),history.replaceState({...history.state,[W]:O},"",location.href));const ae=Q[O];ae&&(history.scrollRestoration="manual",scrollTo(ae.x,ae.y));let se=!1,ie,be;async function ye(o,{noscroll:h=!1,replaceState:g=!1,keepfocus:f=!1,state:d={}},k){if(typeof o=="string"&&(o=new URL(o,Pe(document))),J)return ce({url:o,scroll:h?me():null,keepfocus:f,redirect_chain:k,details:{state:d,replaceState:g},accepted:()=>{},blocked:()=>{}});await X(o)}async function ve(o){const h=Re(o);if(!h)throw new Error("Attempted to prefetch a URL that does not belong to this app");return u.promise=Ee(h),u.id=h.id,u.promise}async function ke(o,h,g,f){var b,U,R;const d=Re(o),k=be={};let _=d&&await Ee(d);if(!_&&o.origin===location.origin&&o.pathname===location.pathname&&(_=await te({status:404,error:new Error(`Not found: ${o.pathname}`),url:o,routeId:null})),!_)return await X(o),!1;if(o=(d==null?void 0:d.url)||o,be!==k)return!1;if(s.length=0,_.type==="redirect")if(h.length>10||h.includes(o.pathname))_=await te({status:500,error:new Error("Redirect loop"),url:o,routeId:null});else return J?ye(new URL(_.location,o).href,{},[...h,o.pathname]):await X(new URL(_.location,location.href)),!1;else((U=(b=_.props)==null?void 0:b.page)==null?void 0:U.status)>=400&&await a.updated.check()&&await X(o);if(m=!0,g&&g.details){const{details:L}=g,v=L.replaceState?0:1;L.state[W]=O+=v,history[L.replaceState?"replaceState":"pushState"](L.state,"",o)}if(c?(i=_.state,_.props.page&&(_.props.page.url=o),E.$set(_.props)):$e(_),g){const{scroll:L,keepfocus:v}=g;if(!v){const w=document.body,p=w.getAttribute("tabindex");w.tabIndex=-1,w.focus({preventScroll:!0}),setTimeout(()=>{var y;(y=getSelection())==null||y.removeAllRanges()}),p!==null?w.setAttribute("tabindex",p):w.removeAttribute("tabindex")}if(await Ae(),l){const w=o.hash&&document.getElementById(o.hash.slice(1));L?scrollTo(L.x,L.y):w?w.scrollIntoView():scrollTo(0,0)}}else await Ae();u.promise=null,u.id=null,l=!0,_.props.page&&(ie=_.props.page);const $=_.state.branch.at(-1);J=((R=$==null?void 0:$.node.shared)==null?void 0:R.router)!==!1,f&&f(),m=!1}function $e(o){i=o.state;const h=document.querySelector("style[data-sveltekit]");if(h&&h.remove(),ie=o.props.page,E=new vt({target:r,props:{...o.props,stores:a},hydrate:!0}),J){const g={from:null,to:new URL(location.href)};t.after_navigate.forEach(f=>f(g))}c=!0}async function ee({url:o,params:h,branch:g,status:f,error:d,routeId:k,validation_errors:_}){const $=g.filter(Boolean),b={type:"loaded",state:{url:o,params:h,branch:g,error:d,session_id:S},props:{components:$.map(v=>v.node.component),errors:_}};let U={},R=!1;for(let v=0;v<$.length;v+=1)U={...U,...$[v].data},(R||!i.branch.some(w=>w===$[v]))&&(b.props[`data_${v}`]=U,R=!0);if(!i.url||o.href!==i.url.href||i.error!==d||R){b.props.page={error:d,params:h,routeId:k,status:f,url:o,data:U};const v=(w,p)=>{Object.defineProperty(b.props.page,w,{get:()=>{throw new Error(`$page.${w} has been replaced by $page.url.${p}`)}})};v("origin","origin"),v("path","pathname"),v("query","searchParams")}return b}async function oe({node:o,parent:h,url:g,params:f,routeId:d,server_data:k}){var L,v;const _={params:new Set,url:!1,dependencies:new Set,parent:!1};function $(...w){for(const p of w){const{href:y}=new URL(p,g);_.dependencies.add(y)}}let b=null;o.server&&(_.dependencies.add(g.href),_.url=!0);const U={};for(const w in f)Object.defineProperty(U,w,{get(){return _.params.add(w),f[w]},enumerable:!0});const R=new at(g);if((L=o.shared)!=null&&L.load){const w={routeId:d,params:U,data:k,get url(){return _.url=!0,R},async fetch(p,y){let P;typeof p=="string"?P=p:(P=p.url,y={body:p.method==="GET"||p.method==="HEAD"?void 0:await p.blob(),cache:p.cache,credentials:p.credentials,headers:p.headers,integrity:p.integrity,keepalive:p.keepalive,method:p.method,mode:p.mode,redirect:p.redirect,referrer:p.referrer,referrerPolicy:p.referrerPolicy,signal:p.signal,...y});const N=new URL(P,g).href;return $(N),c?ge(N,y):ot(P,y)},setHeaders:()=>{},depends:$,get parent(){return _.parent=!0,h},get props(){throw new Error("@migration task: Replace `props` with `data` stuff https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292693")},get session(){throw new Error("session is no longer available. See https://github.com/sveltejs/kit/discussions/5883")},get stuff(){throw new Error("@migration task: Remove stuff https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292693")}};b=(v=await o.shared.load.call(null,w))!=null?v:null}return{node:o,data:b||k,uses:_}}async function Ee({id:o,url:h,params:g,route:f}){if(u.id===o&&u.promise)return u.promise;const{errors:d,layouts:k,leaf:_}=f,$=i.url&&{url:o!==i.url.pathname+i.url.search,params:Object.keys(g).filter(p=>i.params[p]!==g[p])};[...d,...k,_].forEach(p=>p==null?void 0:p().catch(()=>{}));const b=[...k,_],U=[];for(let p=0;p<b.length;p++)if(!b[p])U.push(!1);else{const y=i.branch[p],P=!y||$.url&&y.uses.url||$.params.some(N=>y.uses.params.has(N))||Array.from(y.uses.dependencies).some(N=>s.some(Z=>Z(N)))||y.uses.parent&&U.includes(!0);U.push(P)}let R=null;if(f.uses_server_data){try{const p=await ge(`${h.pathname}${h.pathname.endsWith("/")?"":"/"}__data.json${h.search}`);if(R=await p.json(),!p.ok)throw R}catch{throw new Error("TODO render fallback error page")}if(R.type==="redirect")return R}const L=R==null?void 0:R.nodes,v=b.map(async(p,y)=>Promise.resolve().then(async()=>{var Y;if(!p)return;const P=await p(),N=i.branch[y];if(U[y]||!N||P!==N.node){const C=L==null?void 0:L[y];if(C!=null&&C.status)throw dt(C.status,C.message);if(C!=null&&C.error)throw C.error;return await oe({node:P,url:h,params:g,routeId:f.id,parent:async()=>{var Ue;const Se={};for(let le=0;le<y;le+=1)Object.assign(Se,(Ue=await v[le])==null?void 0:Ue.data);return Se},server_data:(Y=C==null?void 0:C.data)!=null?Y:null})}else return N}));for(const p of v)p.catch(()=>{});const w=[];for(let p=0;p<b.length;p+=1)if(b[p])try{w.push(await v[p])}catch(y){const P=y;if(P instanceof Oe)return{type:"redirect",location:P.location};const N=y instanceof ne?y.status:500;for(;p--;)if(d[p]){let Z,Y=p;for(;!w[Y];)Y-=1;try{return Z={node:await d[p](),data:{},uses:{params:new Set,url:!1,dependencies:new Set,parent:!1}},await ee({url:h,params:g,branch:w.slice(0,Y+1).concat(Z),status:N,error:P,routeId:f.id})}catch{continue}}return await te({status:N,error:P,url:h,routeId:f.id})}else w.push(void 0);return await ee({url:h,params:g,branch:w,status:200,error:null,routeId:f.id})}async function te({status:o,error:h,url:g,routeId:f}){const d={},k=await oe({node:await Lt,url:g,params:d,routeId:f,parent:()=>Promise.resolve({}),server_data:null}),_={node:await St,data:null,uses:{params:new Set,url:!1,dependencies:new Set,parent:!1}};return await ee({url:g,params:d,branch:[k,_],status:o,error:h,routeId:f})}function Re(o){if(o.origin!==location.origin||!o.pathname.startsWith(e))return;const h=decodeURI(o.pathname.slice(e.length)||"/");for(const g of pe){const f=g.exec(h);if(f){const d=new URL(o.origin+nt(o.pathname,n)+o.search+o.hash);return{id:d.pathname+d.search,route:g,params:rt(f),url:d}}}}async function ce({url:o,scroll:h,keepfocus:g,redirect_chain:f,details:d,accepted:k,blocked:_}){const $=i.url;let b=!1;const U={from:$,to:o,cancel:()=>b=!0};if(t.before_navigate.forEach(R=>R(U)),b){_();return}he(O),k(),c&&a.navigating.set({from:i.url,to:o}),await ke(o,f,{scroll:h,keepfocus:g,details:d},()=>{const R={from:$,to:o};t.after_navigate.forEach(L=>L(R)),a.navigating.set(null)})}function X(o){return location.href=o.href,new Promise(()=>{})}return{after_navigate:o=>{_e(()=>(t.after_navigate.push(o),()=>{const h=t.after_navigate.indexOf(o);t.after_navigate.splice(h,1)}))},before_navigate:o=>{_e(()=>(t.before_navigate.push(o),()=>{const h=t.before_navigate.indexOf(o);t.before_navigate.splice(h,1)}))},disable_scroll_handling:()=>{(m||!c)&&(l=!1)},goto:(o,h={})=>ye(o,h,[]),invalidate:o=>{if(o===void 0){for(const h of i.branch)h==null||h.uses.dependencies.add("");s.push(()=>!0)}else if(typeof o=="function")s.push(o);else{const{href:h}=new URL(o,location.href);s.push(g=>g===h)}return A||(A=Promise.resolve().then(async()=>{await ke(new URL(location.href),[]),A=null})),A},prefetch:async o=>{const h=new URL(o,Pe(document));await ve(h)},prefetch_routes:async o=>{const g=(o?pe.filter(f=>o.some(d=>f.exec(d))):pe).map(f=>Promise.all([...f.layouts,f.leaf].map(d=>d==null?void 0:d())));await Promise.all(g)},_start_router:()=>{history.scrollRestoration="manual",addEventListener("beforeunload",f=>{let d=!1;const k={from:i.url,to:null,cancel:()=>d=!0};t.before_navigate.forEach(_=>_(k)),d?(f.preventDefault(),f.returnValue=""):history.scrollRestoration="auto"}),addEventListener("visibilitychange",()=>{if(document.visibilityState==="hidden"){he(O);try{sessionStorage[qe]=JSON.stringify(Q)}catch{}}});const o=f=>{const d=Ie(f);d&&d.href&&d.hasAttribute("sveltekit:prefetch")&&ve(je(d))};let h;const g=f=>{clearTimeout(h),h=setTimeout(()=>{var d;(d=f.target)==null||d.dispatchEvent(new CustomEvent("sveltekit:trigger_prefetch",{bubbles:!0}))},20)};addEventListener("touchstart",o),addEventListener("mousemove",g),addEventListener("sveltekit:trigger_prefetch",o),addEventListener("click",f=>{if(!J||f.button||f.which!==1||f.metaKey||f.ctrlKey||f.shiftKey||f.altKey||f.defaultPrevented)return;const d=Ie(f);if(!d||!d.href)return;const k=d instanceof SVGAElement,_=je(d);if(!k&&!(_.protocol==="https:"||_.protocol==="http:"))return;const $=(d.getAttribute("rel")||"").split(/\s+/);if(d.hasAttribute("download")||$.includes("external")||d.hasAttribute("sveltekit:reload")||(k?d.target.baseVal:d.target))return;const[b,U]=_.href.split("#");if(U!==void 0&&b===location.href.split("#")[0]){se=!0,he(O),a.page.set({...ie,url:_}),a.page.notify();return}ce({url:_,scroll:d.hasAttribute("sveltekit:noscroll")?me():null,keepfocus:!1,redirect_chain:[],details:{state:{},replaceState:_.href===location.href},accepted:()=>f.preventDefault(),blocked:()=>f.preventDefault()})}),addEventListener("popstate",f=>{if(f.state&&J){if(f.state[W]===O)return;ce({url:new URL(location.href),scroll:Q[f.state[W]],keepfocus:!1,redirect_chain:[],details:null,accepted:()=>{O=f.state[W]},blocked:()=>{const d=O-f.state[W];history.go(d)}})}}),addEventListener("hashchange",()=>{se&&(se=!1,history.replaceState({...history.state,[W]:++O},"",location.href))});for(const f of document.querySelectorAll("link"))f.rel==="icon"&&(f.href=f.href);addEventListener("pageshow",f=>{f.persisted&&a.navigating.set(null)})},_hydrate:async({status:o,error:h,node_ids:g,params:f,routeId:d})=>{const k=new URL(location.href);let _;try{const $=(L,v)=>{const w=document.querySelector(`script[sveltekit\\:data-type="${L}"]`);return w!=null&&w.textContent?JSON.parse(w.textContent):v},b=$("server_data",[]),U=$("validation_errors",void 0),R=g.map(async(L,v)=>{var w;return oe({node:await re[L](),url:k,params:f,routeId:d,parent:async()=>{const p={};for(let y=0;y<v;y+=1)Object.assign(p,(await R[y]).data);return p},server_data:(w=b[v])!=null?w:null})});_=await ee({url:k,params:f,branch:await Promise.all(R),status:o,error:h!=null&&h.__is_http_error?new ne(h.status,h.message):h,validation_errors:U,routeId:d})}catch($){const b=$;if(b instanceof Oe){await X(new URL($.location,location.href));return}_=await te({status:b instanceof ne?b.status:500,error:b,url:k,routeId:d})}$e(_)}}}function At(r){r.client}function jt(r){}async function Tt({paths:r,target:e,route:n,spa:s,trailing_slash:a,hydrate:u}){const t=Ut({target:e,base:r.base,trailing_slash:a});At({client:t}),tt(r),u&&await t._hydrate(u),n&&(s&&t.goto(location.href,{replaceState:!0}),t._start_router()),dispatchEvent(new CustomEvent("sveltekit:start"))}export{jt as set_public_env,Tt as start};
