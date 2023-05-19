<script lang="ts">
    import { fade } from "svelte/transition";
    import Phrase from "./animated/Phrase.svelte";

    let info;
    let hover:boolean = false;

    
    function mouseEnterHandle(){
        hover = true;
    }

    function mouseLeaveHandle(){
        hover = false;
    }

</script>

<div on:mouseenter={mouseEnterHandle} on:mouseleave={mouseLeaveHandle} class="container">

    {#if hover}
        <div transition:fade={{duration:250}} class="title">
            <Phrase delayBetweenWord={100} value="Game of life"></Phrase>
        </div>
    {/if}
</div>

<style lang="scss">
    .container{
        position: relative;
        min-width: 200px;
        min-height: 200px;
        max-width: 400px;
        max-height: 400px;
        background-color: lightpink;
        resize: both;
        overflow: auto;

        & > .title{
            position: absolute;
            display: flex;
            justify-content: start;
            align-items: end;
            color:white;
            padding: 0.6rem;
            height: 25%;
            width: 100%;
            bottom:0;
            background-image: linear-gradient(0deg, rgba(0,0,0,0.45) 0%, rgba(255,255,255,0) 100%);
            box-sizing: border-box;
        }
    }
</style>