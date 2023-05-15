<script lang="ts">
    export let delay:number = 0;

    let delayAnim1 = `${delay}ms`;
    let delayAnim2 = `${delay+500}ms`;
    let delayAnim3 = `${delay+250}ms`;
</script>
<div class="container">
    <div style:--delay={delayAnim1} class="heart anim1">💜</div>
    <div style:--delay={delayAnim2} class="heart anim2">🧡</div>
    <div style:--delay={delayAnim3} class="heart anim3">🤍</div>
</div>


<style>

    .container{
        height: 100%;
        position: relative;
        background-color: red;
        isolation: isolate;
        transform: translateX(-0.5rem) translateY(-1.5rem) rotate(25deg);
    }

    .heart{
        position: absolute;
        bottom: -35%;
        font-size: 2.2rem;
    }

    .anim1{
        transform-origin: -0.5rem 50%;
        animation: anim-1 1.5s var(--delay) ease-in-out both;
    }

    .anim2{
        z-index: 1;
        animation: anim-2 1.5s var(--delay) ease-in-out both;
    }

    .anim3{
        transform-origin: 2.5rem 50%;
        animation: anim-3 1.5s var(--delay) ease-in-out both;
    }

    @keyframes anim-1{
        0%{
            scale:0;
            transform: rotate(25deg);
        }

        60%{
            scale:1.2;

        }

        100%{
            scale:0.7;
            transform: rotate(-35deg) translateX(0.4rem) translateY(-2.1rem);
        }
    }

    @keyframes anim-2{
        0%{
            scale:0;
        }

        60%{
            scale:1.2;

        }

        100%{
            scale:0.95;
            transform: translateY(-2.5rem);
        }
    }

    @keyframes anim-3{
        0%{
            scale:0;
            transform: rotate(-25deg);
        }

        60%{
            scale:1.2;

        }

        100%{
            scale:0.7;
            transform: rotate(35deg) translateX(-0.4rem) translateY(-2.7rem);
        } 
    }
</style>