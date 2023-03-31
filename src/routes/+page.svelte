<script>
	import Categories from '$lib/categories.svelte';
	import Contact from '$lib/contact.svelte';
	import Faqs from '$lib/faqs.svelte';
	import Hero from '$lib/hero.svelte';
	import How from '$lib/how.svelte';
	import Why from '$lib/why.svelte';

	export let data;
</script>

<main>
	<!-- hero -->
	<Hero />
	<!-- catagories -->
	<div class="grid">
		{#each data.categories as category}
			<a href={`/categories/${category.slug}`} class="grid-item">
				<img class="categoryImage" src={category.image.url} alt={category.name} />
				<h2 class="cat-name"><span class="bold">{category.name}</span><br />domains</h2>
			</a>
		{/each}
	</div>
	<!-- <Categories /> -->
	<!-- how it works -->
	<How />
	<!-- why us -->
	<Why />
	<!-- faqs -->
	<Faqs />
	<!-- link to -->
	<Contact />
</main>

<style>
	* {
		text-transform: uppercase;

		/* overflow: hidden; */
	}

	* {
		scroll-behavior: smooth;
	}

	/* ----------------------category------------------------ */

	.grid {
		display: grid;
		grid-template-columns: 1fr;
		grid-template-rows: 1fr 1fr 1fr 1fr;
		grid-auto-flow: row;
		width: 100%;
		justify-items: center;
	}

	.grid-item {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: space-between;
		text-align: center;
		background-color: #c4fff9;
		margin-top: 10px;
		padding: 20px;
		border: solid black 3px;
		border-radius: 3vw;
		width: 100%;
	}

	.categoryImage {
	}

	.bold {
		font-weight: 900;
		font-size: 10vw;
	}

	.cat-name {
		font-size: 5vw;
	}
</style>
