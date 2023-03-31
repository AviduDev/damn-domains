<script>
	/** @type {import('./$types').PageData} */
	export let data;
</script>

<section>
	<!-- <img src={data.category.image.url} alt=""> -->
	<h1 class="categoryName">
		{data.category.name}
		<br />
		<span class="subTitle"> domains </span>
	</h1>

	<div class="domainContainer">
		{#each data.category.domains as domain}
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
	</div>
</section>

<style>
	/* ------------------------------------------- */

	.product-ctn {
		margin: 4vw 0 0 0;
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

	.categoryName {
		background-color: #c4fff9;
		border: solid black 2px;
		padding: 3vw;
		border-radius: 3vw;
		font-size: 10vw;
	}

	.subTitle {
		font-size: 5vw;
	}

	/* ------------------------Responsive Design--------------------- */
	/*---------------START WITH MOBILE FIRST--------------------*/

	/* Small devices (landscape phones, 576px and up) */
	@media (min-width: 576px) {
		h3 {
			font-size: 8vw;
		}

		.categoryName {
			font-size: 12vw;
		}

		.subTitle {
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
