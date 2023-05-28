import gameOfLigePicture from "./pictures/jeu-de-la-vie.webp";
import portFolioPicture from "./pictures/portfolio.webp";
import hoverEffetPicture from "./pictures/wikihoax.webp";
import laubaProPicture from "./pictures/laubapro.webp";
import ProteorPicture from "./pictures/proteor.webp";
import wikiHoaxPicture from "./pictures/wikihoax.webp";

let gameOfLifeDescription:string = `
A website that simulates the game of life create by John Horton Conway a British mathematician. The game of life is a zero-player game, only the initial state determines the entire evolution of the game. <br>
<br>
It’s a cellular automaton, it’s a grid of cells that can be alive or dead and there are all governed by the same rules which define if a cell is alive or dead. The only variable used by the rules is the number of cell’s neighbors.<br>
<br>
A website is single threaded that why I challenge myself to find ways to render a maximum of cells at the maximum framerate. 
For more technical detail I let you check the GitHub repository.
`;

let portfolioDescription:string = `
My first portfolio! I wanted to make a portfolio that try to follow the code of creative developer portfolio, use good transition, animation and motion to create a real and unique user experience. <br>
<br>
I take my inspiration from the sites of the day of the awwwards website. I love how developers try to innovate with new animation, plays with colors and now, the new meta, 3D shapes. 
`;

let hoverEffectDescription:string = `
It’s one of my first solo project with a real idea. I wanted to make new types of hover effect for buttons. My mojo was “reusable, flexibility and simplicity”, I try to make seperated blocks that can be combined to create unique hover animation. 
<br><br>
Still in developement.
`;

let laubaproDescription:string = `
This was a renumerate project, I applied to the mission deliver by the junior enterprise of my engineer school in France.<br>
<br> 
I was committed to create a Figma prototype that you can view from the link and developed it with HTML, CSS and JavaScript. The focus of the mission was only the user interface, the header and the form to let user to input data and make it responsive.

`;

let proteorDescription:string = `
The most complicated project I was committed to do. This project is from my internship at Proteor for three and half months in 2022. I had the responsibility to developed from scratch a web application to replace Proteor’s workshops paper organization. <br>
<br>
Here is the Figma prototype that you can view live from the link. My main guideline was simplicity and make sure to match at most the business flow that already in place so to make sure the curve learning was the smoothest possible. <br>
<br>
This was the first time I was confront by UI/UX and Figma, so I learned the main concepts in the same time.
`;

let wikiHoax:string = `
Its a school project that I want to develop. This is a game that take inspiration from pedantix, a game that you need to guest words to try to find the title of a Wikipedia page. <br>
<br>
We take this concept and twist it so instead of Wikipedia it is WikiHow’s title page that you must find.

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
            description: portfolioDescription
        },
        {
            name:"Hover Effect",
            stack:["vite", "typescript"],
            github_url:"",
            live_url:"",
            picture:hoverEffetPicture,
            description: hoverEffectDescription
        },
        {
            name:"LaubaPro Prototype",
            stack:["figma"],
            github_url:"",
            live_url:"",
            picture:laubaProPicture,
            description: laubaproDescription
        },
        {
            name:"Proteor Prototype",
            stack:["figma"],
            github_url:"",
            live_url:"",
            picture:ProteorPicture,
            description:proteorDescription
        },
        {
            name:"WikiHoax",
            stack:["angular"],
            github_url:"",
            live_url:"",
            picture:wikiHoaxPicture,
            description:wikiHoax
        }
];
