<script lang="ts">
  import { onMount } from "svelte";
  import { type Inset, type project } from "../../../interfaces";
  import { elasticOut, quadInOut, quintOut } from "svelte/easing";
  import ConveyorBeltWord from "../../../animated/conveyorBeltWord.svelte";
  import { clickOutside } from "../../../scripts/clickOutside.js";
  import { createEventDispatcher } from "svelte";
  import { fly, scale } from "svelte/transition";
  import IconClose from "../../../icons/iconClose.svelte";
  import Stacks from "./stacks.svelte";
  import Btn from "../../../buttons/btn.svelte";
  import IconGitHub from "../../../icons/iconGitHub.svelte";

  const dispatch = createEventDispatcher();

  export let inDelay: number = 0;
  export let initInset: Inset;
  export let project:project;

  let container: HTMLElement;
  let closeBtn: HTMLElement;
  let showCloseButton: boolean;

  onMount(() => {
    setInset(container, initInset);

    window.setTimeout(() => {
      setInset(container, {
        top: 20,
        right: 20,
        bottom: 20,
        left: 20,
        metric: "%",
      });
    }, inDelay);
  });

  function closeDialog() {
    dispatch("closeDialog", { openDialog: false });
    setInset(container, initInset);
  }

  //Event handler
  function mouseLeaveHandler(e) {
    showCloseButton = true;
  }

  function mouseEnterHandler(e) {
    showCloseButton = false;
  }

  function mouseMoveHandler(e: MouseEvent) {
    if (showCloseButton) {
      closeBtn.style.left = `${e.clientX}px`;
      closeBtn.style.top = `${e.clientY}px`;
    }
  }

  function outClickHandler() {
    closeDialog();
  }

  //Transitions
  function open(node, { duration, delay }) {
    return {
      duration,
      delay,
      css: (t) => {
        const eased = quadInOut(t);

        return `
                grid-template-columns: ${40 * eased}% ${100 - 40 * eased}%;
					`;
      },
    };
  }

  function close(node, { duration, delay }) {
    return {
      duration,
      delay,
      css: (t) => {
        const eased = 1 - quadInOut(t);

        return `
                    grid-template-columns: ${40 + 60 * eased}% ${
          60 - 60 * eased
        }%;
					`;
      },
    };
  }

  function delay(node, { duration }) {
    return {
      duration: duration,
      css: (t) => `
                visibility:hidden;
            `,
    };
  }

  //Setter and getter
  function setInset(node: HTMLElement, inset: Inset) {
    let metric = inset.metric ?? "px";
    node.style.inset = `${inset.top}${metric} ${inset.right}${metric} ${inset.bottom}${metric} ${inset.left}${metric}`;
  }
</script>

<svelte:window on:mousemove={mouseMoveHandler} />

{#if showCloseButton}
  <div
    transition:scale={{ duration: 1500, opacity: 1, easing: elasticOut }}
    bind:this={closeBtn}
    class="close-button"
  >
    <IconClose height={20} width={20} />
  </div>
{/if}

<div
  on:mouseleave={mouseLeaveHandler}
  on:mouseenter={mouseEnterHandler}
  use:clickOutside
  on:outclick={() => outClickHandler()}
  in:delay={{ duration: inDelay }}
>
  <div
    in:open={{ duration: 750, delay: 1000 }}
    out:close={{ duration: 750, delay: 0 }}
    bind:this={container}
    class="container"
  >
    <div id="img-container">
      <img src={project.picture} alt={`${project.name}`}/>
    </div>
    <div id="description">
      <div
        id="title"
        in:fly={{ duration: 1500, delay: 1500, x: -150, easing: quintOut }}
      >
        <ConveyorBeltWord
          word={project.name}
          space={15}
          nb={6}
          time={7}
        />
      </div>

      <div id="stacks">
        <Stacks
          inDelay={2150}
          iconSize={{ height: 32, width: 32 }}
          techs={project.stack}
        />
      </div>

      <p
        id="text"
        in:fly={{ duration: 750, delay: 1750, y: 20 }}
        out:fly={{ duration: 250, y: 20 }}
      >
        {@html project.description}
      </p>

      <div
        id="buttons"
        in:fly={{ duration: 750, delay: 2000, y: 20 }}
        out:fly={{ duration: 250, y: 20 }}
      >
        <IconGitHub iconSize={{ height: 32, width: 32 }} />
        <Btn size={"small"} color={"accent"} variant={"normal"}>Go live !</Btn>
      </div>
    </div>
  </div>
</div>

<style lang="scss">
  .container {
    position: absolute;
    display: grid;
    grid-template-areas: "img-container description";
    grid-template-columns: 40% 60%;
    z-index: 5;
    transition: inset 750ms ease-in-out;
  }

  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
    background-color: lightpink;
  }

  #description {
    overflow: hidden;
    display: grid;
    grid-template-columns: 20% 80%;
    grid-template-rows: 10% auto 20%;
    background-color: var(--accent-color);
    row-gap: 2rem;
    & > #title {
      height: fit-content;
      grid-column: 1 / 3;
      grid-row: 1 / 2;
      width: 100%;
      padding: 0.5rem;
      font-size: var(--font-size-medium);
      box-sizing: border-box;
      color: var(--white-color);
    }

    & > #text {
      grid-column: 2 / 3;
      grid-row: 2 / 3;
      color: var(--white-color);
      padding-right: 2rem;
    }

    & > #buttons {
      display: flex;
      justify-content: end;
      gap: 3rem;
      align-items: center;
      grid-column: 1 / 3;
      grid-row: 3 / 4;
      padding-inline: 2rem;
    }

    & > #stacks {
      grid-column: 1 / 2;
      grid-row: 2 / 3;
    }
  }

  .close-button {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 50px;
    aspect-ratio: 1;
    background-color: var(--white-color);
    border-radius: 50%;
    z-index: 50;
    transform: translate(-50%, -50%);
    pointer-events: none;
  }
</style>
