<script lang="ts">
  import { onMount } from "svelte";
  import IconAngular from "../../../icons/iconAngular.svelte";
  import IconTypescript from "../../../icons/iconTypescript.svelte";
  import IconJavascript from "../../../icons/iconJavascript.svelte";
  import IconVite from "../../../icons/iconVite.svelte";
  import IconSvelte from "../../../icons/iconSvelte.svelte";
  import type { size } from "../../../interfaces";
  import { scale } from "svelte/transition";
  import { elasticOut, quadIn } from "svelte/easing";

  export let direction: string | undefined = "column";
  export let techs: Array<string> = [];
  export let iconSize: size = { height: 64, width: 64 };
  export let inDelay:number = 1500;

  let allTechs = {
    angular: false,
    ts: false,
    js: false,
    vite: false,
    svelte: false,
  };
  onMount(() => {
    techs.forEach((element) => {
      allTechs[element] = true;
    });
  });
</script>

<div class="container" style:--direction={direction}>
  {#if true}
    <div
      in:scale={{ duration: 1500, delay: inDelay, opacity: 1, easing: elasticOut }}
      out:scale={{ duration: 250, opacity: 1, easing: quadIn }}
    >
      <IconAngular {iconSize} />
    </div>
  {/if}
  {#if allTechs["ts"]}
    <div
      in:scale={{ duration: 1500, delay: inDelay, opacity: 1, easing: elasticOut }}
      out:scale={{ duration: 250, opacity: 1, easing: quadIn }}
    >
      <IconTypescript {iconSize} />
    </div>
  {/if}
  {#if allTechs["js"]}
    <div
      in:scale={{ duration: 1500, delay: inDelay, opacity: 1, easing: elasticOut }}
      out:scale={{ duration: 250, opacity: 1, easing: quadIn }}
    >
      <IconJavascript {iconSize} />
    </div>
  {/if}
  {#if allTechs["vite"]}
    <div
      in:scale={{ duration: 1500, delay: inDelay, opacity: 1, easing: elasticOut }}
      out:scale={{ duration: 250, opacity: 1, easing: quadIn }}
    >
      <IconVite {iconSize} />
    </div>
  {/if}
  {#if allTechs["svelte"]}
    <div
      in:scale={{ duration: 1500, delay: inDelay, opacity: 1, easing: elasticOut }}
      out:scale={{ duration: 250, opacity: 1, easing: quadIn }}
    >
      <IconSvelte {iconSize} />
    </div>
  {/if}
</div>

<style>
  .container {
    display: flex;
    width: 100%;
    height: 100%;
    justify-content: space-between;
    align-items: center;
    flex-direction: var(--direction);
  }
</style>
