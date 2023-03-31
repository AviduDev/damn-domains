<script></script>

<main>
	<section>
		<h1>reach us</h1>
		<!-- title -->
		<!-- description -->
		<div class="description">
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita incidunt dolor ipsam
				necessitatibus ducimus distinctio nihil blanditiis quidem esse eaque!
			</p>
		</div>
	</section>
	<!-- quote and form -->
	<section class="contact">
		<h2 class="quote">
			"success usually comes to those who are too busy looking for it." <br />
			<span class="author">-Henry David Thoreau</span>
		</h2>
		<div class="form-ctn">
			<form class="form" action="https://formsubmit.co/avidu97@gmail.com" method="POST">
				<input type="text" name="name" placeholder="Name" required /> <br />
				<input type="email" name="email" placeholder="E-mail" required /> <br />
				<input type="tel" name="phone" placeholder="Phone" id="" /> <br />
				<textarea name="message" placeholder="Say something" /> <br />
				<input type="hidden" name="_captcha" value="false" />
				<input type="hidden" name="_next" value="https://yourdomain.co/thanks.html" />
				<input type="file" name="attachment" accept="" />
				<button class="form-submit" type="submit">Looks Good</button>
			</form>
		</div>
	</section>
	<!-- social media links -->
	<section class="social-sec">
		<div class="social-ctn">
			<a class="item" href="/">whatsapp</a>
			<a class="item" href="/">wechat</a>
		</div>
		<div class="social-ctn">
			<a class="item" href="/">linkedin</a>
			<a class="item" href="/">instagram</a>
			<a class="item" href="/">facebook</a>
		</div>
		<div class="social-ctn">
			<a class="item" href="tel:+94-76-75-78-127">+94-76-75-78-127</a>
			<a class="item" href="tel:+94-77-19-15-774">+94-77-19-15-774</a>
		</div>
	</section>
</main>

<style>
	h1 {
		text-align: center;
		padding: 1vw;
		font-size: 9vw;
		font-weight: 900;
		border: solid black 3px;
		border-radius: 10px;
		margin: 4vw 0 4vw 0;
	}

	.description p {
		font-weight: lighter;
		background-color: #fff;
		padding: 5vw;
		border: solid black 3px;
		border-radius: 10px;
		margin: 10px 0 0 0;
	}

	.contact,
	.quote,
	.form-ctn,
	.author {
		background-color: #ffeb80;
	}

	.contact {
		border: solid black 3px;
		border-radius: 10px;
		margin: 4vw 0 0 0;
		overflow: hidden;
		padding: 5vw;
	}

	form {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		width: 100%;
		border: solid black 2px;
		padding: 10px;
		background-color: #c4fff9;
		border-radius: 10px;
	}

	form input,
	textarea {
		background-color: #c4fff9;
		width: 100%;
		border: solid black 2px;
		border-radius: 10px;
		padding: 3vw;
	}

	textarea:active {
		border: solid black 2px;
	}

	input::file-selector-button {
		background-color: transparent;
		border: none;
		font-weight: bold;
	}

	input::placeholder {
		text-align: center;
		font-weight: bold;
	}

	textarea::placeholder {
		text-align: center;
		font-weight: bold;
	}

	.form-submit {
		width: 100%;
		background-color: #3596ff;
		border: solid black 2px;
		border-radius: 10px;
		padding: 4vw;
		color: white;
		font-weight: 900;
		font-size: 6vw;
		margin: 3vw 0 0 0;
	}

	.quote {
		margin: 3vw 0 3vw 0;
		font-weight: 900;
	}
	.author {
		font-size: 5vw;
		font-weight: 700;
	}

	.item {
		background-color: #c4fff9;
		padding: 3vw;
		margin: 1vw;
		text-align: center;
		border: solid black 2px;
		border-radius: 10px;
	}

	.social-sec,
	.social-ctn {
		display: flex;
		flex-direction: column;
	}

	.social-sec {
		border: solid black 3px;
		border-radius: 10px;
		overflow: hidden;
		margin: 4vw 0 0 0;
	}

	/* ------------------------Responsive Design--------------------- */
	/*---------------START WITH MOBILE FIRST--------------------*/

	/* Small devices (landscape phones, 576px and up) */
	@media (min-width: 576px) {
		h1 {
			font-size: 12vw;
		}
		p, a {
			font-size: 4vw;
		}

		input::placeholder {
			font-size: 4vw;
		}

		textarea::placeholder {
			font-size: 4vw;
		}
		input::file-selector-button {
			font-size: 4vw;
		}

		h2 {
			font-size: 10vw;
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
