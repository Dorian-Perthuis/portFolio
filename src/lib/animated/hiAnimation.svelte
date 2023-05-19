<script lang="ts">
    export let delay:string = "0";


</script>

<div style:--delay={delay} class="hand">🖐</div>


<style>
    .hand{
        font-size: 2.5rem;
        transform-origin: 0 4rem;
        animation: anim 1.25s var(--delay) ease-out both;
    }
    @keyframes anim{
        0%  { scale:0; rotate: 90deg; opacity: 0.5; }
        50% { scale:1; ; }
        65% { rotate: -10deg }
        80% { rotate:5deg;  }
        95% { rotate:-2deg; opacity: 1}
    }
</style>