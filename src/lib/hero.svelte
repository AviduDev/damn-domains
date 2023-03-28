<section>
	<div class="hero-heading">
		<h1>HUMAN READABLE DOMAIN NAMES</h1>
	</div>
	<div class="btn-ctn">
		<div class="buy-btn-ctn">
			<button class="buy-btn">BUY DOMAINS</button>
		</div>
		<div class="navContainer">
			<a class="navLink" href="/"><button class="navBtn">CONTACT</button></a>
			<a class="navLink" href="/"><button class="navBtn">ABOUT</button></a>
			<a class="navLink" href="/"><button class="navBtn">CART</button></a>
		</div>
	</div>
</section>

<style>
	/* * {
        font-family: 'inter';
    } */


	/* -------------------------nav links----------------------------- */

	.navBtn {
		background-color: white;
		border: 2px solid black;
		border-radius: 3vw;
		padding: 2vw;
		margin: 1vw;
		color: #023E8A;
		width: 100%;
	}

	.navContainer {
		display: grid;
		gap: 1vw;
		grid-template-columns: 1fr 1fr 1fr;
		justify-content: space-between;
		width: 100%;
	}

	/* -------------------------nav links----------------------------- */

	h1 {
		font-size: 10vw;
		text-align: center;
		font-weight: 900;
	}

	.hero-heading {
		background-color: #ffeb80;
		padding: 1vw;
		border: solid 3px black;
		border-radius: 3vw;
	}

	.buy-btn {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100%;
		background-color: #3596ff;
		color: antiquewhite;
		border: solid 2px black;
		border-radius: 3vw;
		font-size: 9vw;
		font-weight: 900;
		padding: 1vw;
		margin: 0px 10px 10px 10px;
	}




	.btn-ctn {
		display: flex;
		flex-direction: column;
		align-items: center;
		margin: 20px 0px 20px 0px;
	}

	.buy-btn-ctn {
		display: flex;
		width: 100vw;
	}

	/* --------Responsive Design-------- */

	/* Small devices (landscape phones, 576px and up) */
	@media (min-width: 576px) {
		h1 {
			font-size: 10vw;
			text-align: center;
			color: blueviolet;
		}
	}
	/* Medium devices (tablets, 768px and up) */
	@media (min-width: 768px) {
		h1 {
			font-size: 10vw;
			text-align: center;
			color: rgb(43, 168, 226);
		}
	}
	/* Large devices (desktops, 992px and up) */
	@media (min-width: 992px) {
	}
	/* Extra large devices (large desktops, 1200px and up) */
	@media (min-width: 1200px) {
		h1 {
			font-size: 10vw;
			text-align: center;
			color: rgb(0, 116, 10);
		}
	}
</style>
