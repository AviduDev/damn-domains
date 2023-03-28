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
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, iure.</p>
        </div>
        <div class="item">
            <div>
                <img src="placeholder.svg" alt="" />
            </div>
            <div>
                <h3 class="title">customizable</h3>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, iure.</p>
        </div>
        <div class="item">
            <div>
                <img src="placeholder.svg" alt="" />
            </div>
            <div>
                <h3 class="title">reachable</h3>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, iure.</p>
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
        background-color: #C4FFF9;
        margin: 10px 10px 10px 10px;
        padding: 5vw;
        border: solid black 3px;
        border-radius: 3vw;
    }

    .grid {
        display: grid;
        grid-auto-flow: row;
    }

    .container {
        border: solid black 3px;
        border-radius: 3vw;
        margin-top: 20px;
    }

    .title {
        text-align: center;
    }
    h2 {
        text-align: center;
    }

</style>
