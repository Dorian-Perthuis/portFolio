<script lang="ts">
    import Phrase from "./Phrase.svelte";
    import { fade } from "svelte/transition";
    import { onMount } from 'svelte';

    let isLoaded:boolean = false;

    onMount(() => {
        isLoaded = true;
    })


</script>

    <div class="menu">
        <div class="container">
            <h1><Phrase delay={500} value="Projects"></Phrase></h1>
            {#if isLoaded}
            <hr in:fade={{duration:800, delay:300}}>
            {/if}
            <h1><Phrase delay={800} value="Curiculum-Vitae"></Phrase></h1>
            {#if isLoaded}
            <hr in:fade={{duration:800, delay:600}}>
            {/if}
            <h1><Phrase delay={1200} value="Contact"></Phrase></h1>
        </div>
    </div>


<style>
    .menu{
        display:flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
        width: 100vw;
        backdrop-filter: blur(20px) saturate(200%);
        -webkit-backdrop-filter: blur(20px) saturate(200%);
        background-color: rgba(28, 28, 28, 0.437);
        padding: 5rem;
        box-sizing: border-box;
    }
    .container{
        height: 100%;
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: start;
        
        align-items: stretch;
    }
    h1{ 
        display: flex;
        align-items: center;
        font-family: 'MinionPro';
        font-size: var(--font-size-big);
        color: var(--white-color);
        flex-grow: 1;
    }  

</style>