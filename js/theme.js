import {darkThemeIcon, lightThemeIcon} from './icon.js'

const dark = 'dark'
const light = 'light'

function themeIcon(theme){

    let res = lightThemeIcon();
    if(theme == dark)
    {
        res = darkThemeIcon();
    }    

    return res;
}

export function changeTheme()
{
    const body = document.querySelector('body');
    let removeClass = dark;
    let addClass = light;
    if (body.classList.contains(light))
    {
        removeClass = light
        addClass = dark
    }

    body.classList.remove(removeClass)
    body.classList.add(addClass)

    const themeIconEl = document.querySelector('.theme-icon');
    themeIconEl.insertAdjacentHTML('beforeend', themeIcon(addClass));
    themeIconEl.removeChild(themeIconEl.firstElementChild)
}


