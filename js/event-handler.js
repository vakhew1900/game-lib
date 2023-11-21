import { getAllGame, getById, updateGame } from "./data.js";
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
    addStringToRoot('game-card-container', cardsHtml, 'div')
    document.querySelector('.game-card-container').addEventListener('click', (event) => {
        const curCard = event.target.closest('.game-card');
        document.dispatchEvent(new CustomEvent(events.showEditForm, {detail: curCard.getAttribute('id')}))
    })
}

function showEditFormHandler(id) {
    console.log(id)
    const game = getById(id);
    if (game != null) {

        const form = `
        <form class="game-form" action="">
        <input type="hidden", name = "game-id" value="${game.id}">
        <div class="input-container">
          <div class="label-wrap">
            <label for="title">title:</label>
          </div>
          <input class="game-input-txt" type="text" name="title" value = "${game.title}">
          <div class="label-wrap">
          <label for="description">description:</label>
          </div>
          <input class="game-input-txt" type="text" name="description" value = "${game.short_description}">
        </div>

        <div class="btn-container">
          <button class="update-btn btn std-btn"> Update </button>
          <button class="delete-btn btn std-btn"> Delete</button>
        </div> 
      </form>`

      clearRoot(1);
      addStringToRoot('redactor-game-field', form, 'div')
     
      document.querySelector('.update-btn').addEventListener('click', (event) => {
        event.preventDefault()
        const formData = new FormData(document.querySelector('.game-form'))
        document.dispatchEvent(new CustomEvent(events.editGame, {detail: {id : formData.get('game-id'), title : formData.get('title'), short_description: formData.get('description')}}))
      })

    }
}

function editGameHandler(game){
    console.log(game)
    updateGame(game.id, game.title, game.short_description);
    document.dispatchEvent(new Event(events.showAllGames))
}

export function initCustomEvents() {
    on(events.showAllGames, getAllGameEventHandler)
    on(events.showEditForm, showEditFormHandler)
    on(events.editGame, editGameHandler)
}

