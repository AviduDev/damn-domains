<script></script>

<section class="container">
	<h2>why us</h2>
	<div class="grid">
		<div class="item">
			<div>
				<img src="placeholder.svg" alt="" />
			</div>
			<div>
				<h3 class="title">trustable</h3>
			</div>
			<p class="details">Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, iure.</p>
		</div>
		<div class="item">
			<div>
				<img src="placeholder.svg" alt="" />
			</div>
			<div>
				<h3 class="title">customizable</h3>
			</div>
			<p class="details">Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, iure.</p>
		</div>
		<div class="item">
			<div>
				<img src="placeholder.svg" alt="" />
			</div>
			<div>
				<h3 class="title">reachable</h3>
			</div>
			<p class="details">Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, iure.</p>
		</div>
	</div>
</section>

<style>
	img {
		width: 150px;
	}

	/* * {
        font-family: 'inter';
    } */

	.item {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		background-color: #c4fff9;
		margin: 2vw 1vw 2vw 1vw;
		border: solid black 3px;
		border-radius: 3vw;
		text-align: center;
		padding: 0 0 3vw 0;
	}

	.grid {
		display: grid;
		grid-auto-flow: row;
		padding: 3vw 0 3vw 0;
	}

	.container {
		border: solid black 3px;
		border-radius: 3vw;
		margin-top: 5vw;
		padding: 3vw 1vw 3vw 1vw;
	}

	.title {
		text-align: center;
		margin: 3vw;
	}
	h2 {
		text-align: center;
	}

	/* ------------------------Responsive Design--------------------- */
	/*---------------START WITH MOBILE FIRST--------------------*/

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
