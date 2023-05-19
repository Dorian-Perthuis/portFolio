<script lang="ts">
    import { fly } from 'svelte/transition';
    export let visible:boolean = true;
    export let delay: number = 0;
</script>

<div class="container">
    {#if visible}
    <p in:fly="{{y:80, duration:450, delay}}"><slot></slot></p>
    {/if}
</div>

<style>
    .container{
        width: fit-content;
        height: fit-content;
        overflow: hidden;
        font:inherit;
    }
    p{
        font-size: clamp(var(--font-size-small), 4vw ,var(--font-size-medium));
        padding-inline: 0.2em;
        font:inherit;
    }
</style>