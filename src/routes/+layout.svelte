<script>
    import Header from '$components/Header.svelte';
    import Footer from '$components/Footer.svelte';
    import SpriteFile from '$components/SpriteFile.svelte';
    import SVGFilters from '$components/SVGFilters.svelte';
    import { page } from '$app/stores';
    import { firstParagraphStripped } from '$src/scripts';
    function metaImage(){
        return $page.data?.heroImage?.fields.file.url ||
        'https://images.ctfassets.net/3qr5d6sj491p/3hsUVFnQRMUJBECqvgw7y1/55fdac88ce3fd3159a506f119625a982/Screen_Shot_2022-08-23_at_11.53.20_AM.png';
    }
    function fallbackMetaDescription(){
        if (!$page.data.fields){
            if ($page.data.type == 'blogPost'){
                return 'Blog posts by John Osterman'
            }
            if ($page.data.type == 'project'){
                return 'Projects by John Osterman';
            }
            return 'John Osterman';
        }
    }
    function metaDescription(){
        return $page.data.fields?.overview 
        || $page.data.overview 
        || $page.data.fields?.snippet 
        || $page.data.snippet 
        || ($page.data.fields?.body ? firstParagraphStripped($page.data.fields.body) : undefined) 
        || ($page.data.body ? firstParagraphStripped($page.data.body) : undefined) 
        || $page.data.fields?.title 
        || $page.data.title 
        || fallbackMetaDescription();
    }
    function fallbackMetaTitle(){
        if ($page.data.type == 'blogPost'){
                return 'Blog posts'
            }
        if ($page.data.type == 'project'){
            return 'Projects';
        }
        return 'John Osterman';
    }
    function metaTitle(){
        return  $page.data.title || ( $page.data.page ? $page.data.page.charAt(0).toUpperCase() + $page.data.page.slice(1) : undefined) || fallbackMetaTitle();
    }
</script>
<style>
    @import 'normalize.css';
    @import '$static/global.css';
    .skip-nav {
        position: absolute;
        left: 50%;
        top: 5px;
        transform: translateX(-50%);
    }
    .skip-nav:focus {
        z-index: 1;
    }
</style>
<svelte:head>
    {#if import.meta.env.PROD }
        <!-- Google tag (gtag.js) -->
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-8P9T7XMGMD"></script>
        <script>
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-8P9T7XMGMD');
        </script>
    {/if}
    <title>{metaTitle()} | John Osterman</title>
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:site" content="@johnaosterman" />
    <meta name="twitter:url" content="https://osterman.io{$page.url.pathname}" />
    <meta name="twitter:description" content="{metaDescription()}" />
    <meta name="twitter:title" content="{metaTitle()}" />    
    <meta name="twitter:image" content="{metaImage()}" />
    <meta property="og:title" content="{metaTitle()}" />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://osterman.io{$page.url.pathname}" />
    <meta property="og:image" content="{metaImage()}" />
    <meta property="og:site_name" content="John Osterman" />
    <meta property="og:description" content="{metaDescription()}" />
</svelte:head>
<a tabindex="0" class="skip-nav" href="#main-content">Skip to main content</a>
<Header />
<main class="wrapper" id="main-content">
    <slot></slot>
</main>
<Footer />
<SpriteFile />
<SVGFilters />
