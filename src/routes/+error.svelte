<script>
  import { page } from '$app/stores';
  import { base } from '$app/paths';
  console.error('Original error:', $page.error);
  const status = $page.status == 400 ? 404 : $page.status;
</script>
<svelte:head>
  <meta name="robots" content="noindex, nofollow" />
</svelte:head>
<h1><span style="float:none;" class="first-letter">{status}</span></h1>
{#if status == 404}
<p>The page you requested does not exist. Please try again or navigate back to the <a href="{base}/">homepage</a>.</p>
{/if}
