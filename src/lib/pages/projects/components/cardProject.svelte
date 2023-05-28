<script lang="ts">
    import { slide } from "svelte/transition";
    import ConveyorBeltWord from "../../../animated/conveyorBeltWord.svelte";
    import { createEventDispatcher } from "svelte";
    import type { project } from "../../../interfaces";
  import { quadInOut } from "svelte/easing";

    export let project:project;

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
        dispatch("cardEvent", {openDialog:true, domRect:domRect ,project:project});
        window.setTimeout(() => {
            curtain = false;
        }, 1250);
    }
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div bind:this={container} on:mouseenter={mouseEnterHandle} on:mouseleave={mouseLeaveHandle} on:click={clickHandle} class="container">
    <p class="project-name">{project.name}</p>
    
    {#if curtain}
        <div transition:slide={{duration:1000}} class="curtain"></div>
    {/if}
    
    {#if banner}
        <div transition:slide={{duration:1000, easing:quadInOut}} class="title">
            <ConveyorBeltWord time={7} nb={5} space={25} word={project.name}></ConveyorBeltWord>
        </div>
    {/if}
    <hr>
</div>

<style lang="scss">
    .container{
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: end;
        align-items: end;
        height: fit-content;
        width: 50%;
        overflow: hidden;
        isolation: isolate;
        flex-grow: 1;

        & > img{
            height: 100%;
            width: 100%;
            object-fit: cover;
        }
        & > .curtain{
            position: absolute;
            width: 100%;
            height: 100%;
            background-color: var(--accent-color);
        }
        & > .title{
            position:absolute;
            display: flex;
            justify-content: center;
            align-items: center;
            color:var(--white-color);
            width: 100%;
            height: 100%;
            font-size: var(--font-size-medium);
            background-color: var(--black-color);
            box-sizing: border-box;
            z-index: 1;
        }

        & > .project-name{
            height: 100%;
            display: flex;
            align-items: center;
            font-size: var(--font-size-large);
        }

        & > hr{
          border: 1px solid black;
          width: 100%;
        }
    }
</style>