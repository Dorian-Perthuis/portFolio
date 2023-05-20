<script lang="ts">
    import { slide } from "svelte/transition";
    import ConveyorBeltWord from "./animated/conveyorBeltWord.svelte";
    import { createEventDispatcher } from "svelte";

    const dispatch = createEventDispatcher();

    export let info;
    let hover:boolean = false;
    let click:boolean = false;
    
    function mouseEnterHandle(){
        hover = true;
    }

    function mouseLeaveHandle(){
        hover = false;
        click = false;
    }

    function clickHandle(){
        click=!click;
        dispatch("dialogEvent", {open:click, info:info});
    }

</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div on:mouseenter={mouseEnterHandle} on:mouseleave={mouseLeaveHandle} on:click={clickHandle} class="container">
    {#if hover}
        {#if click}
        <div transition:slide={{duration:250}} class="curtain"></div>
        {/if}
        
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
        }
    }
</style>