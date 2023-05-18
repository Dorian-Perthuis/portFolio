<script lang="ts">
  import HamburgerBtn from "./lib/buttons/hamburgerBtn.svelte";
  import HamburgerMenu from "./lib/hamburgerMenu.svelte";
  import HeroBanner from "./lib/heroBanner.svelte";
  import CvPage from "./lib/pages/CVPage.svelte";
  import ContactPage from "./lib/pages/contactPage.svelte";
  import ProjectsPage from "./lib/pages/projetsPage.svelte";
  
  let hamMenuActive:boolean = false;

  function hamMenuToggle(){
    hamMenuActive = !hamMenuActive;
  }

  let pageDisplay:string = "projects";
</script>

<div class="frontContainer">
  <HeroBanner></HeroBanner>
</div>

<div class="frontContainer">
  {#if hamMenuActive}
  <HamburgerMenu on:click={hamMenuToggle} on:keyup={hamMenuToggle}></HamburgerMenu>
  {/if}
</div>


<main>
  <header>
    <HamburgerBtn on:click={hamMenuToggle} on:keyup={hamMenuToggle}></HamburgerBtn>
  </header>

  {#if pageDisplay="projects"}
    <ProjectsPage></ProjectsPage>
  {:else if pageDisplay="CV"}
    <CvPage></CvPage>
  {:else if pageDisplay="contact"}
    <ContactPage></ContactPage>
  {/if}
    
</main>

<footer>

</footer>

<style>

  header{
    position: absolute;
    top: 2rem;
    inset-inline: 2rem;
    height: fit-content;
    display: flex;
    flex-direction: row-reverse;
    z-index : 5;
  }
  .frontContainer{
    position: absolute;
    top:0;
    left:0;
    z-index: 5;
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
    isolation: isolate;
  }

</style>
