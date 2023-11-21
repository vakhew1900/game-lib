import { createGame, deleteGame, updateGame } from "./data.js";
import { changeTheme } from "./theme.js";


const themeIcon = document.querySelector('.theme-icon');
themeIcon.addEventListener('click', (event) => changeTheme())