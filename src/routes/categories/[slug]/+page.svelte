<script>
    /** @type {import('./$types').PageData} */
export let data;
</script>

<section>
<!-- <img src={data.category.image.url} alt=""> -->
<h1>
    {data.category.name}
</h1>

<div>
    {#each data.category.domains as domain}
    <p class="projectTag">{domain.name}</p>
{/each}
</div>
</section>
