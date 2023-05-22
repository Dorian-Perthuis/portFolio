<script lang="ts">
    import { slide } from "svelte/transition";
    import ConveyorBeltWord from "./animated/conveyorBeltWord.svelte";
    import { createEventDispatcher } from "svelte";

    export let info = "";

    const dispatch = createEventDispatcher();

    let container:HTMLElement;
    let hover:boolean = false;
    let click:boolean = false;
    
    function mouseEnterHandle(){
        hover = true;
    }

    function mouseLeaveHandle(){
        hover = false;
    }

    function clickHandle(){
        let domRect = container.getBoundingClientRect();
        click=!click;
        dispatch("cardEvent", {openDialog:click, domRect:domRect ,info:info});
    }
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div bind:this={container} on:mouseenter={mouseEnterHandle} on:mouseleave={mouseLeaveHandle} on:click={clickHandle} class="container">
    {#if hover}
        {#if click}
        <div transition:slide={{duration:1000}} class="curtain"></div>
        {:else}
        <div transition:slide={{duration:250}} class="title">
            <ConveyorBeltWord time={3.5} lenght={152.91} nb={5} word="Game of Life"></ConveyorBeltWord>
        </div>
        {/if}
    {/if}
</div>

<style lang="scss">
    .container{
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: end;
        min-width: 200px;
        min-height: 200px;
        max-width: 400px;
        max-height: 400px;
        background-color: lightpink;
        resize: both;
        overflow: auto;
        isolation: isolate;
        & > .curtain{
            position: absolute;
            width: 100%;
            height: 100%;
            background-color: var(--accent-color);
        }
        & > .title{
            position:absolute;
            display: flex;
            justify-content: start;
            align-items: end;
            color:var(--white-color);
            padding: 0.6rem;
            width: 100%;
            font-size: 1.5rem;
            background-color: var(--accent-color);
            box-sizing: border-box;
            z-index: 1;
        }
    }
</style>