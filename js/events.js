export const themeChanged = new CustomEvent('themeChanged')


export const events = {
  showAllGames : "showAllGames",
  editGame: "editGame",
  deleteGame: "deleteGame",
  createGame: "createGame"
};


export function on(eventName, callback) {
    document.addEventListener(eventName, (event) => {
      callback(event.detail);
    });
  }
  
