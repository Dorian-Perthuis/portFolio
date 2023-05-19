<script>
    import ConveyorBeltWord from "../animated/conveyorBeltWord.svelte";
</script>

<div class="container">
    <div id="title">
        <h1><ConveyorBeltWord nb={8} space={25} time={10} lenght={364.01} word="Contact"></ConveyorBeltWord></h1></div>
    <div id="main">
        
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
        height: 100%;
        width: 100%;
    }
</style>