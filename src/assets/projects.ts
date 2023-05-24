import gameOfLigePicture from "./pictures/jeu-de-la-vie.png";
import portFolioPicture from "./pictures/portfolio.png";
import hoverEffetPicture from "./pictures/wikihoax.png";
import laubaProPicture from "./pictures/laubapro.png";
import ProteorPicture from "./pictures/proteor.png";
import wikiHoaxPicture from "./pictures/wikihoax.png";

let gameOfLifeDescription:string = `
A website that simulates the game of life create by John Horton Conway a British mathematician. The game of life is a zero-player game, only the initial state determines the entire evolution of the game. <br>
<br>
It’s a cellular automaton, it’s a grid of cells that can be alive or dead and there are all governed by the same rules which define if a cell is alive or dead. The only variable used by the rules is the number of cell’s neighbors.<br>
<br>
A website is single threaded that why I challenge myself to find ways to render a maximum of cells at the maximum framerate. 
For more technical detail I let you check the GitHub repository.
`;



export let projects = [
        {
            name:"Game Of Life",
            stack:["vite", "ts"],
            github_url:"https://github.com/Dorian-Perthuis/jeu-de-la-vie",
            live_url:"https://ubiquitous-scone-1283a5.netlify.app/",
            picture:gameOfLigePicture,
            description:gameOfLifeDescription
        },
        {
            name:"PortFolio",
            stack:["vite", "svelte", "ts", "scss"],
            github_url:"",
            live_url:"",
            picture:portFolioPicture,
            description:"PortFolio"
        },
        {
            name:"Hover Effect",
            stack:["vite", "typescript"],
            github_url:"",
            live_url:"",
            picture:hoverEffetPicture,
            description:"Hover Effect"
        },
        {
            name:"LaubaPro Prototype",
            stack:["figma"],
            github_url:"",
            live_url:"",
            picture:laubaProPicture,
            description:"Laubapro"
        },
        {
            name:"Proteor Prototype",
            stack:["figma"],
            github_url:"",
            live_url:"",
            picture:ProteorPicture,
            description:"Proteor"
        },
        {
            name:"WikiHoax",
            stack:["angular"],
            github_url:"",
            live_url:"",
            picture:wikiHoaxPicture,
            description:"wikiHoax"
        }
];
