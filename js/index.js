import { createGame, deleteGame, updateGame } from "./data.js";
import { initCustomEvents } from "./event-handler.js";
import { events } from "./events.js";
import { changeTheme } from "./theme.js";


const themeIcon = document.querySelector('.theme-icon');
themeIcon.addEventListener('click', (event) => changeTheme())

function start(){
    initCustomEvents()
    initGamesLib()

}

function initGamesLib(){
    document.dispatchEvent(new Event(events.showAllGames))
}

start()