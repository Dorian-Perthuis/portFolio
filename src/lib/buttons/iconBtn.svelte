<script lang="ts">
    import { onMount } from "svelte";
    import { quadOut } from "svelte/easing";

    //----Animation variables
    let start : DOMHighResTimeStamp | undefined = undefined;
    let previousTimeStamp : DOMHighResTimeStamp | undefined = undefined;
    let done = false;
    let enterPoint = {x:0, y:0};
    let leavePoint = {x:0, y:0};
    let isEnterAnim :boolean = false;
    let isLeaveAnim :boolean = false;
    let btn:HTMLElement;
    //Settings
    let speed: number = 0.30;
    let hoverColor : string = "rgba(0,0,0,0.15)";
    //-----

    //-----Variables
    let ready = false;
    export let color:string = "accent";

    onMount(() => {
        ready = true;
    });


    function handleMouseEnter(e){
        if(!isEnterAnim){
            initEnterAnim(e)
            window.requestAnimationFrame(enterAnim);
        }
    }

    function handleMouseLeave(e){
        if(!isLeaveAnim){
            initLeaveAnim(e)
            window.requestAnimationFrame(leaveAnim);
        }
    }

    //--------------Enter Hover--------------
    function initEnterAnim(e : MouseEvent){
        enterPoint = getMouseRelativePosition(e);
        isEnterAnim = true;
    }
    function enterAnim(timestamp : DOMHighResTimeStamp){
        if (start === undefined) {
            start = timestamp;
        }
        const elapsed = timestamp - start;
    
        if (previousTimeStamp !== timestamp) {
            const count = Math.min(speed * elapsed, 100);
            btn.style.backgroundImage = `radial-gradient(circle at ${enterPoint.x}% ${enterPoint.y}%, ${hoverColor} 0px, ${hoverColor} ${count}%, transparent ${count}%)`;
            if (count === 100) done = true;
        }
    
        if (elapsed < 1000) { // Stop the animation after 1 seconds
            previousTimeStamp = timestamp;
        if (!done) {
            window.requestAnimationFrame(enterAnim);
        }
        else{
            endEnterAnim();
        }
        }else{
            endEnterAnim();
        }
    }
  
    function endEnterAnim(){
        done = false;
        isEnterAnim = false;
        start = undefined;
        previousTimeStamp = undefined;
    }

    //--------------Leave Hover--------------
  function initLeaveAnim(e : MouseEvent){
    leavePoint = getMouseRelativePosition(e);
    isLeaveAnim = true;
  }

  function leaveAnim(timestamp : number){
    if (start === undefined) {
      start = timestamp;
    }
    const elapsed = timestamp - start;

    if (previousTimeStamp !== timestamp) {
      const count = Math.min(speed * elapsed, 100);
      btn.style.backgroundImage = `radial-gradient(circle at ${leavePoint.x}% ${leavePoint.y}%, ${hoverColor} 0px, ${hoverColor} ${100-count}%, transparent ${100-count}%)`;
      if (count === 100) done = true;
    }

    if (elapsed < 1000) { // Stop the animation after 1 seconds
      previousTimeStamp = timestamp;
      if (!done) {
        window.requestAnimationFrame(leaveAnim);
      }
      else{
        endLeaveAnim();
      }
    }else{
      endLeaveAnim();
    }
  }

  function endLeaveAnim(){
      start = undefined;
      previousTimeStamp = undefined;
      isLeaveAnim = false;
      done = false;
  }
  //------------------------------------


    function getMouseRelativePosition(e : MouseEvent){
        let rect : DOMRect = (<HTMLElement>e.target).getBoundingClientRect();
    
        return {   //relative position of the mouse in percentage
            x: ((e.clientX - rect.left)/rect.width*100),
            y: ((e.clientY - rect.top)/rect.height*100)
        }
  }

  function loadAnim(node, { duration }) {
		return {
			duration,
			css: t => {
				const eased = quadOut(t);

				return `
					opacity: ${eased};
					box-shadow: ${0.3*eased}rem ${0.3*eased}rem var(--accent-color);`
			}
		};
	}

</script>

    {#if ready}
        <button style:--color={`var(--${color}-color)`} in:loadAnim={{duration:500}} bind:this={btn} on:click on:mouseenter={handleMouseEnter} on:mouseleave={handleMouseLeave} id="btn"><slot></slot></button>
    {/if}

<style>
    button{
        height: fit-content;
        aspect-ratio: 1;
        background-color: var(--grey-color);
        box-shadow: 0.3rem 0.3rem var(--color);
        outline:transparent;
        border: transparent;
        box-sizing: content-box;
        padding: 1rem;
    }
</style>