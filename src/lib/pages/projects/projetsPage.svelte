<script lang="ts">
  import ConveyorBeltWord from "../../animated/conveyorBeltWord.svelte";
  import CardProject from "./components/cardProject.svelte";
  import DialogProject from "./components/dialogProject.svelte";
  import { type Inset, type project } from "../../interfaces";
  import { projects } from "../../../assets/projects";
  
  let dialogOpen:boolean = false;
  let initDialogInset:Inset;
  let windowHeight:number;
  let windowWidth:number;
  let project:project;

  function toggleDialog(e){
    dialogOpen = e.detail.openDialog;
    if(dialogOpen){
        setInitDialogInset(e.detail.domRect, windowWidth, windowHeight);
        project = e.detail.project;
    }    
  }

  //Event Handler
  function closeDialogHandler(e){
    toggleDialog(e);
  }

  function cardEventHandler(e){
    toggleDialog(e);
  }

  //Getter and setter
  function setInitDialogInset(domRect:DOMRect, windowWidth:number, windowHeight:number){
    let top = domRect.top;
    let right = windowWidth - domRect.right;
    let bottom = windowHeight - domRect.bottom;
    let left = domRect.left;
    initDialogInset = {top, right, bottom, left};
  }

</script>

<svelte:window bind:innerHeight={windowHeight} bind:innerWidth={windowWidth}></svelte:window>

{#if dialogOpen}
  <DialogProject inDelay={1000} project={project} initInset={initDialogInset} on:closeDialog={closeDialogHandler}></DialogProject>
{/if}

<div class="container" class:dialogOpen={dialogOpen}>
  <div id="title">
      <h1><ConveyorBeltWord nb={6} space={25} time={10} word="Projects"></ConveyorBeltWord></h1></div>
  <div id="main">
    {#each projects as project}
      <CardProject project={project} on:cardEvent={cardEventHandler}></CardProject>
    {/each}
  </div>
</div>

<style lang="scss">
    .container{
        display: grid;
        grid-template-areas: "title main";
        grid-template-columns: 7% 93%;
        height: 100vh;
        width: 100vw;
        background-color: white;
        box-sizing: border-box;
        transition: filter 750ms ease-in-out 500ms;
        &.dialogOpen{
          transition: filter 750ms ease-in-out 1000ms;
          filter:brightness(0.75);
          pointer-events: none;
        }
    }

    #title{
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
        width: 100%;
        overflow: hidden;
        & > h1{
            font-size: var(--font-size-big);
            rotate: -90deg;
        }
    }

    #main{
        position: absolute;
        display: flex;
        justify-content: space-between;
        align-items: start;
        flex-wrap: wrap;
        gap: 2.5rem;
        padding: 7rem 10rem;
        height: 100%;
        width: 100%;
        box-sizing: border-box;
    }
</style>

