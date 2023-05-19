<script lang="ts">
  import { onMount } from "svelte";

    export let word:string = "";
    export let separator:string = "-";
    export let space:number = 5;
    export let nb:number = 1;
    export let time:number = 3;
    export let lenght:number = 50;

    let container:HTMLElement;

    
    onMount(()=>{
        container.style.cssText += `
            --space:${space}px;
            --time:${time}s;
            --lenght:${lenght}px;
        `;
    });
    
</script>

    <div class="container" bind:this={container}>
        <div class="text">
            {#each Array(nb) as _, index (index)}
               <span>{word}</span><pan>{separator} </pan>
            {/each}
        </div>
    </div>
    


<style>
    .container{
        display: flex;
        justify-content: center;
        align-items: center;
        width: inherit;
        height: fit-content;
        overflow: hidden;

    }

    .text{
        display:flex;
        gap: var(--space);
        height: fit-content;
        width: fit-content;
        white-space: nowrap;
        animation: anim var(--time) linear infinite both;
    }


    @keyframes anim {
        from{
            transform: translateX(0);
        }
        to{
            transform: translateX(var(--lenght));
        }
    }
</style>