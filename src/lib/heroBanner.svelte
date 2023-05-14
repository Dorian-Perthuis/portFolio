<script lang="ts">
    import profilPicture from "../assets/profilPicture.png";
    import Phrase from "./Phrase.svelte";
</script>

<div class=container>
    <img id="profilPicture" alt="dorian perthuis" src={profilPicture}>
    <div id="description">
        <Phrase>Hi !</Phrase>
        <Phrase>My name is Dorian, a French Guy,</Phrase>
        <Phrase>a future software engineer.</Phrase>
        <Phrase>I am creative developer lover.</Phrase>
        <Phrase>Let me show you my works...</Phrase>
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
        display: flex;
        flex-direction: column;
    }

</style>