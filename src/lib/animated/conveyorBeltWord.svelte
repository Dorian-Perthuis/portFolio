<script lang="ts">
  import { onMount } from "svelte";

    export let word:string = "";
    export let separator:string = "-";
    export let space:number = 5;
    export let nb:number = 1;
    export let time:number = 3;
    let lenght:number;

    let container:HTMLElement;
    let wordWidth:number;
    let sepWidth:number;
    
    onMount(()=>{
        lenght = wordWidth+sepWidth+2*space;
        container.style.cssText += `
            --space:${space}px;
            --time:${time}s;
            --lenght:${lenght}px;
        `;
    });

    function hoverHandle(e){
        console.log(wordWidth);
        console.log(sepWidth);
    }
    
</script>

    <div on:mouseenter={hoverHandle} class="container" bind:this={container}>
        <div class="text">
            <span bind:offsetWidth={wordWidth}>{word}</span><span bind:offsetWidth={sepWidth}>{separator} </span>
            {#each Array(nb-1) as _, index (index)}
               <span id={`w-${index}`}>{word}</span><span id={`s-${index}`}>{separator} </span>
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