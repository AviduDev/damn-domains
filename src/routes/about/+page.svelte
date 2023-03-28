<script>
	import Contact from '$lib/contact.svelte';
	import Team from '$lib/team.svelte';
</script>

<main>
	<section>
		<h1>who we are</h1>
		<!-- title -->
		<!-- description -->
		<p class="description">
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet soluta rem velit. Mollitia ea
			est rem voluptatem placeat iste veniam.
		</p>
	</section>
	<!-- our approach -->
	<section>
		<div class="item">
			<h2>our approach</h2>
			<p>
				Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore, sequi cum? Quam fugiat
				temporibus perferendis nulla architecto aliquid rem qui.
			</p>
		</div>
	</section>
	<!-- our values -->
	<section>
		<div class="item">
			<h2>our values</h2>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic totam quasi temporibus
				voluptates suscipit commodi doloribus ipsum. Reprehenderit, saepe animi!
			</p>
		</div>
	</section>
	<!-- our team -->
	<section class="team-sec">
		<h2>our team</h2>
		<div class="item">
			<img class="user-icon" src="user.svg" alt="name of the user" />
			<p><b>Avidu</b></p>
			<p>position</p>
			<div>
				<a href="www.linkedin.com">
					<img class="social-icon" src="linkedin.svg" alt="name of the social network" />
				</a>
				<a href="www.github.com">
					<img class="social-icon" src="github.svg" alt="name of the social network" />
				</a>
				<a href="www.facebook.com">
					<img class="social-icon" src="facebook.svg" alt="name of the social network" />
				</a>
				<a href="www.instagram.com">
					<img class="social-icon" src="instagram.svg" alt="name of the social network" />
				</a>
			</div>
		</div>
	</section>
	<!-- <Team /> -->
	<!-- link to contact -->
	<Contact />
</main>

<style>
	.user-icon {
		width: 100px;
	}
	.social-icon {
		width: 50px;
	}

	h1 {
		text-align: center;
		font-weight: 900;
		padding: 5vw;
		border: solid black 3px;
		border-radius: 10px;
	}

	h2 {
		text-align: center;
	}
	main {
		background-color: #FEFAE0;
	}

	.description {
		background-color: #C4FFF9;
	}

	.item, .description {
		background-color: #C4FFF9;
		margin: 20px 0 0 0;
		border: solid black 2px;
		border-radius: 10px;
		padding: 3vw;
	}

	.item h2 {
		text-align: left;
		margin: 0 0 20px 0;
	}

	.team-sec {
		background-color: #FFEB80;
		border: solid black 3px;
		border-radius: 10px;
		padding: 10px;
		margin: 20px 0 0 0;
	}

	.item {
		display: flex;
		flex-direction: column;
		align-items: center;
	}
</style>
