<script>
	import Categories from '$lib/categories.svelte';

	export let data;
</script>

<main class="main">
	<h1>✦domains✦</h1>

	<!-- -------------------categories----------------------- -->
	<div class="grid">
		{#each data.categories as category}
			<a href={`/categories/${category.slug}`} class="categoryLink">
				<!-- <img src={category.image.url} alt={category.name} /> -->
				<h3 class="cat-name">
					{category.name}
				</h3>
			</a>
		{/each}
	</div>

	<!-- -------------------------domains-------------------------- -->

	{#each data.domains as domain}
		<a href={`/domains/${domain.slug}`} class="domain" id={domain.id}>
			<div class="product-ctn">
				<img class="product-img" src={domain.image.url} alt={domain.name} />
				<div class="name detail">
					<h3>{domain.name}</h3>
				</div>
				<div class="price detail">
					<h3>{domain.price}$</h3>
				</div>
			</div>
		</a>
	{/each}
</main>

<style>
	/* --------------------------------------------- */
	.grid {
		background-color: #3596ff;
		border-radius: 3vw;
		border: 2px solid black;
		padding: 1vw;
		display: flex;
		flex-wrap: wrap;
		margin: 3vw 0 3vw 0;
	}

	.categoryLink {
		margin: 1vw;
		padding: 1vw;
		border: 1px solid black;
		border-radius: 3vw;
		background-color: #c4fff9;
		font-size: 5vw;
	}
	/* --------------------------------------------- */
	main {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
	h1 {
		text-align: center;
		font-size: 12vw;
	}

	.domain {
		margin: 2vw 0 2vw 0;
	}

	.product-img {
		width: 100%;
		aspect-ratio: 16 / 9;
		object-fit: cover;
		object-position: center;
		border: solid black 2px;
		border-radius: 100px;
		margin: 3vw 0 3vw 0;
	}

	.product-ctn {
		background-color: #ffeb80;
		border: solid black 3px;
		border-radius: 10px;
	}

	.product-ctn {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		padding: 10px;
	}

	.detail {
		display: flex;
		width: 100%;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		margin: 1vw 0 1vw 0;
		padding: 1vw 0 1vw 0;
		border-radius: 3vw;
		border: solid black 2px;
	}

	.name {
		background-color: #fff;
	}

	.price {
		background-color: #c4fff9;
		font-size: 8vw;
	}
	/* -------------------cate------------------- */
	/* ------------------------Responsive Design--------------------- */
	/*---------------START WITH MOBILE FIRST--------------------*/

	/* Small devices (landscape phones, 576px and up) */
	@media (min-width: 576px) {
		h1 {
			font-size: 12vw;
		}

		h3 {
			font-size: 8vw;
		}
	}

	/* Medium devices (tablets, 768px and up) */
	@media (min-width: 768px) {
	}

	/* Large devices (desktops, 992px and up) */
	@media (min-width: 992px) {
	}

	/* Extra large devices (large desktops, 1200px and up) */
	@media (min-width: 1200px) {
	}
</style>
