<script lang="ts">
    import Word from "./Word.svelte";
    import { onMount } from "svelte";

    export let value:string = "";
    export let visible:boolean = false;
    export let delay:number = 0;

    export let delayBetweenWord:number = 300;
    let words = value.split(" ");

    onMount(() => {
        setTimeout(() => {
            visible = true;
        }, delay);
    })
</script>

<div class:expand="{visible}">
    {#each words as word, index}
        <Word delay={index*delayBetweenWord} bind:visible={visible}>{word}</Word>          
    {/each}

    <slot></slot>
</div>

<style>
    div{
        display: flex;
        width: fit-content;
        max-height: 0;
        align-items: center;
        transition: max-height 1.5s cubic-bezier(0.49, 0.88, 0.34, 1);
        font: inherit;
    }

    div.expand{
        max-height: 75px;
    }
</style>