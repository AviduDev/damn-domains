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
	</div>
</section>

<style>
.product-img {
		width: 100%;
		aspect-ratio: 16 / 9;
	}

	.cart {
		cursor: pointer;
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

	h2 {
		background-color: #fff;
		color: black;
		padding: 1vw;
		border: solid black 2px;
		border-radius: 10px;
		text-align: center;
		margin: 10px;
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
</style>