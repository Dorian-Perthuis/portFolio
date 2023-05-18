<script lang="ts">

    let close:boolean = false;

</script>

<div on:keyup on:click class="container">
    <div id="l1" class="line"></div>
    <div id="l2" class="line"></div>
    <div id="l3" class="line"></div>
</div>

<style lang="scss">
    .container{
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: stretch;
        width: 3em;
        height: 2.5rem;
    }

    .container:hover > .line{
        box-shadow: 0.15rem 0.15rem var(--accent-color);
    }

    .line{
        height: 0.35rem;
        width: 100%;
        background-color: var(--black-color);
    }

    @for $i from 1 through 3{
        #l#{$i}{
            transition: box-shadow 200ms ease-out calc(#{$i}*40ms);
        }
    }
</style>