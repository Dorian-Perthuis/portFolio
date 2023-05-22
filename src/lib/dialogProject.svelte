<script lang="ts">
    import { onMount } from "svelte";
    import { type Inset } from "./interfaces";
    import { elasticOut, quadInOut } from "svelte/easing";
    import ConveyorBeltWord from "./animated/conveyorBeltWord.svelte";
    import { clickOutside } from "./scripts/clickOutside.js";
    import { createEventDispatcher } from "svelte";
    import { scale } from "svelte/transition";
    import IconClose from "./icons/iconClose.svelte";

    const dispatch = createEventDispatcher();

    export let inDelay:number = 0;
    export let initInset:Inset;

    let container:HTMLElement;
    let closeBtn:HTMLElement;
    let showCloseButton:boolean;


    onMount(() => {
        setInset(container, initInset)
        window.setTimeout(() => {
            setInset(container, {top:20, right:20, bottom:20, left:20, metric:"%"})
        },inDelay);
    });

    function closeDialog(){
        dispatch("closeDialog", {openDialog:false});
        setInset(container, initInset);
    }

    //Event handler
    function mouseLeaveHandler(e){
        showCloseButton = true;
    }

    function mouseEnterHandler(e){
        showCloseButton = false;
    }

    function mouseMoveHandler(e:MouseEvent){
        if(showCloseButton){
            closeBtn.style.left = `${e.clientX}px`;
            closeBtn.style.top = `${e.clientY}px`;
        }
    }

    function outClickHandler(){
        closeDialog();
    }

    //Transitions
    function open(node, {duration, delay}){
        return {
			duration,
            delay,
			css: t => {
				const eased = quadInOut(t);

				return `
                    grid-template-columns: ${40*eased}% ${100-40*eased}%;
					`
			}
		};
    }

    function close(node, {duration, delay}){
        return {
			duration,
            delay,
			css: t => {
				const eased = 1-quadInOut(t);

				return `
                    grid-template-columns: ${40+60*eased}% ${60-60*eased}%;
					`
			}
		};
    }

    function delay(node, {duration}){
        return {
            duration: duration,
            css: (t) => `
                visibility:hidden;
            `
        };
    };

    //Setter and getter
    function setInset(node:HTMLElement, inset:Inset){
        let metric = inset.metric ?? "px";
        node.style.inset = `${inset.top}${metric} ${inset.right}${metric} ${inset.bottom}${metric} ${inset.left}${metric}`;
    }

</script>

<svelte:window on:mousemove={mouseMoveHandler}></svelte:window>

{#if showCloseButton}
    <div transition:scale={{duration:1500, opacity:1, easing:elasticOut}} bind:this={closeBtn} class="close-button">
        <IconClose height={20} width={20}></IconClose>
    </div>
{/if}

<div on:mouseleave={mouseLeaveHandler} on:mouseenter={mouseEnterHandler} use:clickOutside on:outclick={() => outClickHandler()} in:delay={{duration:inDelay}}>
    <div in:open="{{duration:750, delay:1000}}" out:close="{{duration:750, delay:0}}" bind:this={container} class="container">
        <div id="img-container">
            <div class="img">

            </div>
        </div>
        <div id="description">
            <div class="title">
                <ConveyorBeltWord word="Project" space={15} nb={6} lenght={141.63} time={7}></ConveyorBeltWord>
            </div>
        </div>
    </div>
</div>



<style lang="scss">
    .container{
        position:absolute;
        display:grid;
        grid-template-areas: "img-container description";
        grid-template-columns: 40% 60%;
        z-index: 5;
        transition: inset 750ms ease-in-out;
    }

    .img{
        height: 100%;
        width: 100%;
        background-color: lightpink;
    }

    #description{
        background-color: var(--accent-color);


        & .title{
            height: fit-content;
            width: 100%;
            padding: 0.5rem;
            font-size: var(--font-size-medium);
            box-sizing: border-box;
            color: var(--white-color);
            
        }
    }

    .close-button{
        position:absolute;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 50px;
        aspect-ratio: 1;
        background-color: var(--white-color);
        border-radius: 50%;
        z-index: 50;
        transform: translate(-50%, -50%);
        pointer-events: none;


    }
</style>