<script lang="ts">
    import { fly } from 'svelte/transition';
    export let visible:boolean = true;
    export let delay: number = 0;
</script>

<div>
    {#if visible}
    <p transition:fly="{{y:80, duration:450, delay}}"><slot></slot></p>
    {/if}
</div>

<style>
    div{
        width: fit-content;
        height: fit-content;
        overflow: hidden;
    }
    p{
        font-size: clamp(1rem, 4vw ,3rem);
        padding-inline: 0.5rem;
    }
</style>