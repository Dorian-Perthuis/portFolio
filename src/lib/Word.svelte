<script>
    import { fly } from 'svelte/transition';
    export let visible = true;

    function handleClick(event){
        visible = !visible;
    }
</script>

<div on:click={handleClick}>
    {#if visible}
    <div transition:fly="{{y:10, duration:300}}"><slot></slot></div>
    {/if}
</div>

<style>
    div{
        position: relative;
        width: fit-content;
        height: fit-content;
        overflow: hidden;
    }

    p{
        position: absolute;
    }
</style>