<script>
    	/** @type {import('./$types').PageData} */
	export let data;
</script>

<section>
    <img src={data.domain.image.url} alt="">
    <h1>
        {data.domain.name}
    </h1>
</section>

<style>
    img {
        max-width: 100%;
    }
</style>