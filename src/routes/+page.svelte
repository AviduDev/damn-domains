<script>
	import Categories from "$lib/categories.svelte";
	import Contact from "$lib/contact.svelte";
	import Faqs from "$lib/faqs.svelte";
    import Hero from "$lib/hero.svelte";
    import How from "$lib/how.svelte";
    import Why from "$lib/why.svelte";
</script>

<main>
    <!-- hero -->
    <Hero />
    <!-- catagories -->
    <Categories />
    <!-- how it works -->
    <How />
    <!-- why us -->
    <Why />
    <!-- faqs -->
    <Faqs />
    <!-- link to -->
    <Contact />
</main>


<style>
    * {
        text-transform: uppercase;
        background-color: #FEFAE0;
        /* overflow: hidden; */
    }

    * {
        scroll-behavior: smooth;
    }

    button {
        cursor: pointer;
    }


</style>