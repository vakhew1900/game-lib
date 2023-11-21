import { createGame, deleteGame, updateGame } from "./data.js";
import { initCustomEvents } from "./event-handler.js";
import { events } from "./events.js";
import { renderHeader } from "./render.js";
import { changeTheme } from "./theme.js";


function addIconListener() {
    const themeIcon = document.querySelector('.theme-icon');
    themeIcon.addEventListener('click', (event) => changeTheme())
}

function start() {
    initCustomEvents()
    initGamesLib()

}

function initGamesLib() {
    renderHeader()
    document.dispatchEvent(new Event(events.showAllGames))
    addIconListener()
}

start()