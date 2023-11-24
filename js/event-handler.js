import { createGame, deleteGame, getAllGame, getById, updateGame } from "./data.js";
import { events, on } from "./events.js";
import { addStringToRoot, clearRoot, renderCard, renderForm } from "./render.js";


function getAllGameEventHandler() {
    const games = getAllGame()

    let cardsHtml = ''

    for (let game of games) {
        const tmp = renderCard(game)
        cardsHtml += tmp;
    }

    clearRoot(1)
    renderForm()
    addStringToRoot('game-card-container', cardsHtml, 'div')
    document.querySelector('.game-card-container').addEventListener('click', (event) => {
        const curCard = event.target.closest('.game-card');
        document.dispatchEvent(new CustomEvent(events.showEditForm, {detail: curCard.getAttribute('id')}))
    })

    document.querySelector('.create-btn').addEventListener('click', (event) => {
      event.preventDefault()
      const formData = new FormData(document.querySelector('.game-form'))
      document.dispatchEvent(new CustomEvent(events.createGame, {detail: {title : formData.get('title'), short_description: formData.get('description')}}))
    })

    document.querySelector('.cancel-btn').addEventListener('click', (event) => {
      event.preventDefault()
      document.querySelectorAll('.game-input-txt').forEach((input) => {console.log(input); input.value = ""; })
    })

}


function createGameHandler({title, short_description})
{   
   console.log(title + short_description)

   if(title == "" || short_description == "")
   {
      return
   }

   const link = 'https://n1s1.hsmedia.ru/5c/a9/92/5ca9922dcd2f2a2304a3851c058f020f/1585x951_0xac120003_9986014371588926575.jpg'
   const game = createGame(title, link, short_description);
   const gameCard = renderCard(game)

   document.querySelector('.game-card-container').insertAdjacentHTML('beforeend', gameCard)

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

      document.querySelector('.delete-btn').addEventListener('click', (event) => {
        event.preventDefault()
        const formData = new FormData(document.querySelector('.game-form'))
        document.dispatchEvent(new CustomEvent(events.deleteGame, {detail: formData.get('game-id')}))
      })      
      
    }
}

function deleteGameHandler(id)
{
    deleteGame(id)
    document.dispatchEvent(new Event(events.showAllGames))
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
    on(events.deleteGame, deleteGameHandler)
    on(events.createGame, createGameHandler)
}

