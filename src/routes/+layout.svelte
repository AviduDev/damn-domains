<script>
// @ts-nocheck
    import "./styles.css"

    import Footer from "$lib/footer.svelte";
    import Header from "$lib/header.svelte";
</script>

<Header />

<main>
    <slot></slot>
</main>

<Footer />

<style>
    main {
        max-width: 100vw;
    }
</style>