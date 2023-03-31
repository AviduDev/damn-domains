<script>
	/** @type {import('./$types').PageData} */
	export let data;
</script>

<section>
	<div class="ttlContainer">
		<img class="image" src={data.domain.image.url} alt={data.domain.name} />
		<h1 class="title">
			{data.domain.name}
		</h1>
	</div>

	<div class="priceContainer">
		<h2 class="price">{data.domain.price}$</h2>
		<button class="cart"><h2>ADD TO CART</h2></button>
	</div>

	<div class="detailContainer">
		<h2>use cases</h2>
		<div class="detail">
			<p>{data.domain.details}</p>
		</div>

		<ul class="categoryContainer">
			{#each data.domain.categories as category}
				<li class="categoryItem">
					<p><a href={`/categories/${category.slug}`}>#{category.name}</a></p>
				</li>
			{/each}
		</ul>
	</div>
</section>

<style>
	img {
		border-radius: 3vw;
		object-fit: cover;
		object-position: center;
		filter: blur(1px);
	}

	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		max-width: 100%;
		width: 100%;
	}

	.title {
		position: absolute;
		border-radius: 3vw;
		text-align: center;
		padding: 1vw;
		display: inline-block;
		color: antiquewhite;
	}

	.image {
		position: relative;
		margin: 3vw 0 3vw 0;
	}

	.ttlContainer {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		overflow: hidden;
	}

	.priceContainer {
		display: flex;
		flex-direction: column;
		width: 100%;
		align-items: center;
	}

	.price {
		background-color: #c4fff9;
		border: solid black 2px;
		border-radius: 3vw;
		width: 100%;
		text-align: center;
		padding: 3vw;
		margin: 1vw 0 3vw 0;
	}

	.cart {
		background-color: #3596ff;
		border: 2px solid black;
		color: white;
		border-radius: 3vw;
		width: 100%;
		padding: 3vw;
		margin: 1vw 0 3vw 0;
	}

	.detailContainer {
		border: solid black 2px;
		border-radius: 3vw;
		padding: 3vw;
		margin: 3vw 0 3vw 0;
	}

	.detail {
		border: solid black 2px;
		padding: 3vw;
		border-radius: 3vw;
		background-color: #c4fff9;
		margin: 2vw 0 6vw 0;
	}

	li {
		list-style: none;
	}

	.categoryItem a {
		background-color: #3596ff;
		padding: 3vw;
		/* border: solid black 2px; */
		border-radius: 3vw;
		color: white;
		margin: 1vw;
	}

	.categoryContainer {
		display: flex;
		flex-wrap: wrap;
	}

	/* ------------------------Responsive Design--------------------- */
	/*---------------START WITH MOBILE FIRST--------------------*/

	/* Small devices (landscape phones, 576px and up) */
	@media (min-width: 576px) {
		h1 {
			font-size: 12vw;
		}

		h2 {
			font-size: 10vw;
		}

		p {
			font-size: 6vw;
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
