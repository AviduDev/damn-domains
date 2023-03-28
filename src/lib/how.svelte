<script></script>

<section class="container">
    <h2>
        how it works
    </h2>
    <div class="grid">
        <div class="item">
            <p class="number">1</p>
            <h3>receives order</h3>
            <img class="mark" src="mark.svg" alt="">
        </div>
        <div class="item">
            <p class="number">2</p>
            <h3>transfer domain</h3>
            <img class="mark" src="mark.svg" alt="">
        </div>
        <div class="item">
            <p class="number">3</p>
            <h3>accept domain</h3>
            <img class="mark" src="mark.svg" alt="">
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
        background-color: #FFEB80;
        padding: 10px;
        margin: 10px;
        border: solid black 3px;
        border-radius: 3vw;
    }

    .number {
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: black;
        color: antiquewhite;
        padding: 2vw;
        width: 5vw;
        height: 5vw;
        border-radius: 50%;
    }

    .mark {
        align-self: flex-end;
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
</style>