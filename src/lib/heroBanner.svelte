<script lang="ts">
    import profilPicture from "../assets/pictures/profilPicture.png";
    import Phrase from "./Phrase.svelte";
    import BubbleAnimation from "./bubbleAnimation.svelte";
    import HeartAnimation from "./heartAnimation.svelte";
    import HiAnimation from "./hiAnimation.svelte";
    import IconBtn from "./iconBtn.svelte";
    import IconArrow from "./icons/iconArrow.svelte";
</script>

<div class=container>
    <img id="profilPicture" alt="dorian perthuis" src={profilPicture}>
    <div id="description">
        <Phrase delay={100} value="Hi !"> <HiAnimation delay="500ms"></HiAnimation></Phrase>
        <Phrase delay={2000}  value="My name is Dorian, a French Guy,"> 
            <BubbleAnimation delay="3500ms">🔵</BubbleAnimation>
            <BubbleAnimation delay="3600ms">⚪</BubbleAnimation>
            <BubbleAnimation delay="3700ms">🔴</BubbleAnimation>
        </Phrase>
        <Phrase delay={5000} value="and a future software engineer."></Phrase>
        <Phrase delay={8000} value="I am a creative developer lover.">
            <HeartAnimation delay={9500}></HeartAnimation>
        </Phrase>
        <Phrase delay={11000} value="Let me show you my works..."></Phrase>
    </div>
    <div id='right'>
        <IconBtn><IconArrow/></IconBtn>
    </div>
</div>


<style>
    .container{
        display: grid;
        grid-template-areas: "profilPicture description right";
        grid-template-columns: 20% auto 10%;
        padding: 2rem;
        gap: 2rem; 
        height: 100vh;
        width: 100vw;
        box-sizing: border-box;
    }


    #profilPicture{
        width: 100%;
        aspect-ratio: 1;
        align-self: center;
    }

    #description{
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: end;
        align-items: start; 
        padding-bottom: 25%;
        font-family: "MinionPro";
        color:var(--black-color);
    }
    #description::before{
        position: absolute;
        top:0;
        content:"";
        background: linear-gradient(180deg, rgb(255, 255, 255) 0%, rgba(255,255,255,0) 100%);
        width: 100% ;
        height: 65%;
        z-index: 1;
    }

    #right{
        justify-self: center;
        align-self: end;
    }

</style>