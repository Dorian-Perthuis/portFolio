<script lang="ts">
    import Phrase from "./Phrase.svelte";
    import { fade, fly } from "svelte/transition";
    import { cubicInOut } from "svelte/easing";
    import { onMount } from 'svelte';

    let isLoaded:boolean = false;

    onMount(() => {
        isLoaded = true;
    })


</script>
{#if isLoaded}
    <div class="menu">
        
        <div  on:keyup on:click class="btn">
            <div transition:fly={{duration:1500, delay:250, x:'25'}} id="l1" class="line">
            </div>
            <div transition:fly={{duration:1500, delay:750, x:'-25'}} id="l2" class="line">
            </div>
        </div>

        <div class="container">
            <h1><Phrase delay={500} value="Projects"></Phrase></h1>
            <hr in:fade={{duration:800, delay:300}}>
            <h1><Phrase delay={800} value="Curiculum-Vitae"></Phrase></h1>
            <hr in:fade={{duration:800, delay:600}}>

            <h1><Phrase delay={1200} value="Contact"></Phrase></h1>
        </div>
    </div>
{/if}

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

    .btn{
        position: absolute;
        top: 5rem;
        right: 5rem;
        height: 3rem;
        aspect-ratio: 1;
    }

    .line{
        position: absolute;
        height: 0.25rem;
        width: 100%;
        background-color: var(--white-color);
    }

    #l1{
        transform-origin: 50% 50%;
        rotate: 45deg;
        top:0;
    }

    #l2{
        transform-origin: 50% 50%;
        rotate: -45deg;
    }

</style>