<script lang="ts">
  import ConveyorBeltWord from "../animated/conveyorBeltWord.svelte";
  import CardProject from "../cardProject.svelte";
  import DialogProject from "../dialogProject.svelte";
  import { type Inset } from "../interfaces";

  let dialogOpen:boolean = false;
  let initDialogInset:Inset;
  let windowHeight:number;
  let windowWidth:number;

  function toggleDialog(e){
    dialogOpen = e.detail.openDialog;
    if(dialogOpen){
        setInitDialogInset(e.detail.domRect, windowWidth, windowHeight);
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
<DialogProject inDelay={1000} initInset={initDialogInset} on:closeDialog={closeDialogHandler}></DialogProject>
{/if}

<div class="container" class:dialogOpen={dialogOpen}>
    <div id="title">
        <h1><ConveyorBeltWord nb={8} space={25} time={10} lenght={364.38} word="Projects"></ConveyorBeltWord></h1></div>
    <div id="main">

        <CardProject on:cardEvent={cardEventHandler}></CardProject>
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
        transition: filter 750ms ease-in-out 1000ms;
        &.dialogOpen{
            filter:brightness(0.75);
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
        justify-content: center;
        align-items: center;

        height: 100%;
        width: 100%;
    }
</style>

