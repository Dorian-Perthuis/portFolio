<script lang="ts">
  import { onMount } from "svelte";
  import IconAngular from "./icons/iconAngular.svelte";
  import IconTypescript from "./icons/iconTypescript.svelte";
  import IconJavascript from "./icons/iconJavascript.svelte";
  import IconVite from "./icons/iconVite.svelte";
  import IconSvelte from "./icons/iconSvelte.svelte";
  import type { size } from "./interfaces";

    export let direction:string|undefined = "column";
    export let techs:Array<string>;
    export let iconSize:size = {height:64, width:64};

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
        <IconAngular iconSize={iconSize}/>
    {/if}
    {#if allTechs["ts"]}
        <IconTypescript iconSize={iconSize}/>
    {/if}
    {#if allTechs["js"]}
        <IconJavascript iconSize={iconSize}/>
    {/if}
    {#if allTechs["vite"]}
        <IconVite iconSize={iconSize}/>
    {/if}
    {#if allTechs["svelte"]}
        <IconSvelte iconSize={iconSize}/>
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