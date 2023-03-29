<script>
	import Categories from '$lib/categories.svelte';
	import DomainCard from '$lib/domainCard.svelte';

	export let data;
</script>

<main class="main">
	<h1>✦domains✦</h1>

	<!-- -------------------categories----------------------- -->
	<div class="grid">
		{#each data.categories as category}
			<div class="grid-item">
				<li class="categoryItem">
					<!-- <img src={category.image.url} alt={category.name} /> -->
					<h2 class="cat-name">
						<a href={`/categories/${category.slug}`} class="bold">{category.name}</a>
					</h2>
				</li>
			</div>
		{/each}
	</div>

	<!-- -------------------------domains-------------------------- -->

	{#each data.domains as domain}
		<div class="project" id={domain.id}>
			<section class="section">
				<div class="product-ctn">
					<img class="product-img" src={domain.image.url} alt="" />
					<a href={`/domains/${domain.slug}`}><h2>{domain.name}</h2></a>

					<div class="btn-ctn">
						<p>{domain.price}$</p>
						<img class="cart-icon" src="cart.svg" alt="add to cart button" />
					</div>
				</div>
			</section>
		</div>
	{/each}
</main>

<style>
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

	.categoryItem {
		list-style: none;
	}
	.product-img {
		width: 100%;
		aspect-ratio: 16 / 9;
	}

	.cart-icon {
		width: 50px;
	}

	.product-ctn {
		background-color: #ffeb80;
		border: solid black 3px;
		border-radius: 10px;
	}

	.product-img {
		border: solid black 2px;
		border-radius: 100px;
	}

	.btn-ctn {
		display: grid;
		grid-template-columns: 1fr 1fr;
		justify-items: flex-end;
		width: 100%;
		height: 100%;
	}

	.product-ctn {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		padding: 10px;
	}

	.btn-ctn p {
		display: flex;
		justify-content: center;
		align-items: center;
		border: solid black 2px;
		border-radius: 10px;
		background-color: #c4fff9;
		width: 100%;
		height: 100%;
		text-align: center;
	}

	.btn-ctn img {
		border: solid black 2px;
		border-radius: 10px;
		background-color: #3596ff;
	}

	/* -------------------cate------------------- */

	img {
		width: 100%;
	}

	.grid {
		display: grid;
		grid-template-columns: 1fr;
		grid-template-rows: 1fr auto;
		grid-auto-flow: row;
		justify-items: center;
	}

	.grid-item {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		text-align: center;
		background-color: #c4fff9;
		margin: 1vw 0 1vw 0;
		padding: 4vw;
		border: solid black 3px;
		border-radius: 3vw;
		width: 90%;
	}

	img {
		border: solid 2px black;
		border-radius: 3vw;
	}

	.bold {
		font-weight: 900;
		font-size: 8vw;
	}

	.cat-name {
		padding: 1vw;
	}
</style>
