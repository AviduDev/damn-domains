<script>

	export let data;
</script>

<main class="main">
	<h1>categories</h1>

	{#each data.categories as category}

		<div class="project" id={category.id}>
			<section class="section">
				<div class="product-ctn">				
					<a href={`/categories/${category.slug}`}><h2>{category.name}</h2></a>
				</div>
			</section>
		</div>
	{/each}
</main>
