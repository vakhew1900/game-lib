import {darkThemeIcon, headerLogoIcon} from './icon.js'

export function addStringToRoot(className, code, type){
    const root = document.querySelector('.root');
    const div = document.createElement(type);
    if(className != undefined && className != null && className != "")
    {
        div.className = className;
    }
    div.innerHTML = code;
    root.append(div)
}



export function clearRoot(rootSize){
    const root = document.querySelector('.root');
    while(root.children.length > rootSize)
    {   
        console.log(root.lastElementChild)
        root.removeChild(root.lastElementChild);
    }

}


export function renderHeader(){

    const header = `
    <div class="header-container container">
      <div class="header-logo btn">
       ${headerLogoIcon()}
      </div>
      <div class="header-title">
        <h3>GameLib</h3>
      </div>
      <div class="theme-icon btn">
        <!-- theme-icon -->
        ${darkThemeIcon()}
      </div>
    </div>
    `
    addStringToRoot("", header, 'header')
}


export function renderForm()
{
  const form = `
        <form class="game-form" action="">
        <input type="hidden", name = "game-id" value="">
        <div class="input-container">
          <div class="label-wrap">
            <label for="title">title:</label>
          </div>
          <input class="game-input-txt" type="text" name="title" value = "">
          <div class="label-wrap">
          <label for="description">description:</label>
          </div>
          <input class="game-input-txt" type="text" name="description" value = "">
        </div>

        <div class="btn-container">
          <button class="create-btn btn std-btn"> Create </button>
          <button class="cancel-btn btn std-btn"> Cancel </button>
        </div> 
      </form>`

      addStringToRoot('add-game-field', form, 'div');
}


export function renderCard(game)
{
    return`<div class="game-card" id = "${game.id}">
        <div class="img-game-card-container">
          <img class="game-card-img сontain-img" src="${game.thumbnail}" alt="">
        </div>

        <div class="game-card-title">
          ${game.title}
        </div>
        <div class="game-card-text-container"> 
          <div class="game-card-text">
            ${game.short_description}
          </div>
        </div>
      </div>`;

}

export function renderSearch(){
    const search = `
      <form >
        <input type="text" placeholder="search" name="search">
        <button class="btn std-btn search-btn">Search</button>
      </form>
    `
    addStringToRoot('search-form', search, 'div');

    
}
