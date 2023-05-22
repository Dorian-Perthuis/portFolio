<script lang="ts">
    import { slide } from "svelte/transition";
    import ConveyorBeltWord from "./animated/conveyorBeltWord.svelte";
    import { createEventDispatcher } from "svelte";

    export let info = "";

    const dispatch = createEventDispatcher();

    let container:HTMLElement;
    let banner:boolean = false;
    let curtain:boolean = false;
    
    function mouseEnterHandle(){
        banner = true;
    }

    function mouseLeaveHandle(){
        banner = false;
    }

    function clickHandle(){
        let domRect = container.getBoundingClientRect();
        curtain=true;
        banner=false;
        dispatch("cardEvent", {openDialog:true, domRect:domRect ,info:info});
        window.setTimeout(() => {
            curtain = false;
        }, 1000);
    }
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div bind:this={container} on:mouseenter={mouseEnterHandle} on:mouseleave={mouseLeaveHandle} on:click={clickHandle} class="container">
    
    {#if curtain}
        <div transition:slide={{duration:1000}} class="curtain"></div>
    {/if}
    
    {#if banner}
        <div transition:slide={{duration:250}} class="title">
            <ConveyorBeltWord time={3.5} lenght={152.91} nb={5} word="Game of Life"></ConveyorBeltWord>
        </div>
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