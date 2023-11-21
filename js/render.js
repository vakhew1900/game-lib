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

