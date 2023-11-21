import { getAllGame } from "./data.js";
import { events, on } from "./events.js";
import { addStringToRoot, clearRoot } from "./render.js";


function getAllGameEventHandler() {
    const games = getAllGame()

    let cardsHtml = ''

    for (let game of games) {
        const tmp = `<div class="game-card" id = "${game.id}">
        <div class="img-game-card-container">
          <img class="game-card-img сontain-img" src="${game.thumbnail}" alt="">
        </div>

        <div class="game-card-title">
          ${game.title}
        </div>

        <div class="game-card-text">
          ${game.short_description}
        </div>
      </div>`;

      cardsHtml += tmp;
    }

    clearRoot(1)
    addStringToRoot('game-card-container', cardsHtml)
}

export function initCustomEvents(){
    on(events.showAllGames, getAllGameEventHandler)
}

