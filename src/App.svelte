<script lang="ts">
  import HamburgerBtn from "./lib/buttons/hamburgerBtn.svelte";
  import HamburgerMenu from "./lib/pages/hamburgerMenu.svelte";
  import HeroBanner from "./lib/pages/heroBanner.svelte";
  import CvPage from "./lib/pages/CVPage.svelte";
  import ContactPage from "./lib/pages/contactPage.svelte";
  import ProjectsPage from "./lib/pages/projects/projetsPage.svelte";
  
  let hamMenuActive:boolean = false;
  let pageDisplay:string = "projects";

  function hamMenuToggle(){
    hamMenuActive = !hamMenuActive;
  }

  function switchPage(e){
    hamMenuToggle();
    pageDisplay = e.detail.page;
  }
</script>

<div class="frontContainer">
  <HeroBanner></HeroBanner>
</div>

<div class="frontContainer">
  {#if hamMenuActive}
  <HamburgerMenu on:navigate={switchPage} on:open={hamMenuToggle}></HamburgerMenu>
  {/if}
</div>


<main>
  <header>
    <HamburgerBtn on:click={hamMenuToggle}></HamburgerBtn>
  </header>

  <div class="headline"></div>
    {#if pageDisplay=="projects"}
      <ProjectsPage></ProjectsPage>
    {:else if pageDisplay=="CV"}
      <CvPage></CvPage>
    {:else if pageDisplay=="contact"}
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
