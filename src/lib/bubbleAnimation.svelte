<script lang="ts">
    export let delay:string = "0";
</script>

<div style:--delay={delay} class="bubble"><slot></slot></div>

<style>
    .bubble{
        font-size: 2rem;
        animation: anim 1.25s var(--delay) ease-in-out both;
    }

    @keyframes anim{
        0%{
            scale:0;
        }
        80%{
            scale:1.2;
        }
        100%{
            scale:1;
        }
    }
</style>