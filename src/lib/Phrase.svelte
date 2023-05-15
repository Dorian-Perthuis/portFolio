<script lang="ts">
    import Word from "./Word.svelte"
    export let value:string = "";
    export let visible:boolean = false;
    export let delay:number = 0;

    let delayBetweenWord:number = 300;


    let words = value.split(" ");

    function handleLoad(event){
        window.setTimeout(()=>{
            visible=!visible;
        }, delay);
    }
</script>

<svelte:window on:load={handleLoad}/>

<div>
    {#each words as word, index}
        <Word delay={index*delayBetweenWord} bind:visible={visible}>{word}</Word>          
    {/each}

    <slot></slot>
</div>

<style>
    div{
        display: flex;
        width: fit-content;
        height: fit-content;
        align-items: center;
    }
</style>