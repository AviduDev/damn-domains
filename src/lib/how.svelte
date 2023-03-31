<script></script>

<section class="container">
	<h2>how it works</h2>
	<div class="grid">
		<div class="item">
			<img
				class="mark"
				src="https://res.cloudinary.com/avidu/image/upload/v1680168030/receive_order_omyifs.svg"
				alt="receives order"
			/>
			<h3 class="title">receives order</h3>
			<p class="details">
				Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt adipisci nostrum
				provident labore alias saepe.
			</p>
			<div class="bottom-row">
				<p class="number">1</p>
				<hr />
				<span class="arrow down">↘</span>
				<span class="arrow right">🡒</span>
			</div>
		</div>
		<div class="item">
			<img
				class="mark"
				src="https://res.cloudinary.com/avidu/image/upload/v1680168030/getting_information_fakojb.svg"
				alt="getting information"
			/>
			<h3 class="title">getting information</h3>
			<p class="details">
				Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt adipisci nostrum
				provident labore alias saepe.
			</p>
			<div class="bottom-row">
				<p class="number">2</p>
				<hr />
				<span class="arrow down">↘</span>
				<span class="arrow right">🡒</span>
			</div>
		</div>
		<div class="item">
			<img
				class="mark"
				src="https://res.cloudinary.com/avidu/image/upload/v1680168030/transfer_domain_atpzpi.svg"
				alt="transfering domain"
			/>
			<h3 class="title">transfering domain</h3>
			<p class="details">
				Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt adipisci nostrum
				provident labore alias saepe.
			</p>
			<div class="bottom-row">
				<p class="number">3</p>
				<hr />
				<span class="arrow">✦</span>
			</div>
		</div>
	</div>
</section>

<style>
	/* * {
        font-family: 'inter';
    } */
	img {
		width: 30px;
		height: 30px;
	}

	.item {
		display: flex;
		flex-direction: column;
		align-items: center;
		background-color: #ffeb80;
		padding: 10px;
		margin: 10px;
		border: solid black 3px;
		border-radius: 3vw;
	}

	/* .number {
		display: flex;
		align-items: center;
		justify-content: center;
		background-color: black;
		color: antiquewhite;
		padding: 2vw;
		width: 5vw;
		height: 5vw;
		border-radius: 50%;
	} */

	.title {
		margin: 3vw 0 3vw 0;
	}

	.details {
		margin: 3vw 0 3vw 0;
	}
	.mark {
		align-self: center;
		height: 30vw;
		width: 30vw;
		margin: 3vw 0 3vw 0;
	}
	.container {
		border: solid 3px black;
		margin-top: 20px;
		border-radius: 3vw;
	}

	.grid {
		display: grid;
		grid-auto-flow: row;
	}

	h2 {
		font-weight: 900;
		text-align: center;
	}

	.bottom-row {
		display: flex;
		flex-direction: row;
		width: 100%;
		justify-content: space-between;
		align-items: center;
	}

	hr {
		margin: 0 1vw 0 1vw;
		width: 100%;
		border: solid black 1px;
		height: 1px;
	}

	.details {
		text-align: center;
	}

	.right {
		display: none;
	}

	/* ------------------------Responsive Design--------------------- */

	/* Small devices (landscape phones, 576px and up) */
	@media (min-width: 576px) {
		h2 {
			font-size: 10vw;
		}
		.title {
			font-size: 8vw;
		}

		.details {
			font-size: 4vw;
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
