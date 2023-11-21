import {headerLogoIcon} from './icon.js'

export function addStringToRoot(className, code){
    const root = document.querySelector('.root');
    const div = document.createElement('div');
    div.className = className;
    div.innerHTML = code;
    console.log(code)
    root.append(div)
}

export function clearRoot(rootSize){
    const root = document.querySelector('.root');
    while(root.children.length > rootSize)
    {
        root.removeChild(root.children[rootSize]);
    }

}


export function renderHeader(){

}

`
<header>
<div class="header-container container">
  <div class="header-logo">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-joystick">
      <path d="M21 17a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-2Z" />
      <path d="M6 15v-2" />
      <path d="M12 15V9" />
      <circle cx="12" cy="6" r="3" />
    </svg>
  </div>
  <div class="header-title">
    <h3>GameLib</h3>
  </div>
  <div class="theme-icon btn">
    <!-- theme-icon -->
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-moon">
      <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
    </svg>
  </div>
</div>
</header>
`