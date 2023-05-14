<script lang="ts">
    import profilPicture from "../assets/pictures/profilPicture.png";
    import Phrase from "./Phrase.svelte";
</script>

<div class=container>
    <img id="profilPicture" alt="dorian perthuis" src={profilPicture}>
    <div id="description">
        <Phrase delay={100} value="Hi !"></Phrase>
        <Phrase delay={1500} value="My name is Dorian, a French Guy,"></Phrase>
        <Phrase delay={3000} value="a future software engineer."></Phrase>
        <Phrase delay={4500} value="I am a creative developer lover."></Phrase>
        <Phrase delay={6000} value="Let me show you my works..."></Phrase>
    </div>
</div>


<style>
    .container{
        display: grid;
        grid-template-areas: "profilPicture description end";
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

</style>