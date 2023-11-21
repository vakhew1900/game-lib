export const themeChanged = new CustomEvent('themeChanged')


export const events = {
  showAllGames : "showAllGames",
  editGame: "editGame",
  deleteGame: "deleteGame",
  createGame: "createGame",
  showEditForm: "showEditForm",
};


export function on(eventName, callback) {
    document.addEventListener(eventName, (event) => {
      console.log(event)
      callback(event.detail);
    });
  }
  


