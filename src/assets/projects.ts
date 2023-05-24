import gameOfLigePicture from "./pictures/jeu-de-la-vie.png";
import portFolioPicture from "./pictures/portfolio.png";
import hoverEffetPicture from "./pictures/wikihoax.png";
import laubaProPicture from "./pictures/laubapro.png";
import ProteorPicture from "./pictures/proteor.png";
import wikiHoaxPicture from "./pictures/wikihoax.png";

export let projects = [
        {
            name:"Game Of Life",
            stack:["vite", "ts"],
            github_url:"https://github.com/Dorian-Perthuis/jeu-de-la-vie",
            live_url:"https://ubiquitous-scone-1283a5.netlify.app/",
            picture:gameOfLigePicture,
            description:"Game of Life"
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
]