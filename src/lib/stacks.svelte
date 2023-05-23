<script lang="ts">
  import { onMount } from "svelte";
  import IconAngular from "./icons/iconAngular.svelte";
  import IconTypescript from "./icons/iconTypescript.svelte";
  import IconJavascript from "./icons/iconJavascript.svelte";
  import IconVite from "./icons/iconVite.svelte";

    export let direction:string|undefined = "column";
    export let techs:Array<string>;
    
    let allTechs = {
        angular:false,
        ts:false,
        js:false,
        vite:false,
        svelte:false
    };
    onMount(() => {
        techs.forEach((element) => {
            allTechs[element] = true;
        });
    });

</script>

<div class="container" style:--direction={direction}>
    {#if allTechs["angular"]}
        <IconAngular/>
    {/if}
    {#if allTechs["ts"]}
        <IconTypescript/>
    {/if}
    {#if allTechs["js"]}
        <IconJavascript/>
    {/if}
    {#if allTechs["vite"]}
        <IconVite/>
    {/if}
    {#if allTechs["svelte"]}
    <IconVite/>
{/if}
</div>

<style>
    .container{
        display: flex;
        width: 100%;
        height: 100%;
        justify-content: space-between;
        align-items: center;
        flex-direction: var(--direction);
    }
</style>