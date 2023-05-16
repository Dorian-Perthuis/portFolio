<script lang="ts">
  import HamburgerMenu from "./lib/hamburgerMenu.svelte";
import HeroBanner from "./lib/heroBanner.svelte";
</script>

<main>
    <HamburgerMenu></HamburgerMenu>
</main>

<style>
  .heroBanner{
    position: absolute;
    top:0;
    left:0;
  }
  .slide{
    height: 100vh;
    width: 100vw;
    box-sizing: border-box;
  }
  main{
    position:relative;
    box-sizing: border-box;
    overflow: none;
  }

</style>
