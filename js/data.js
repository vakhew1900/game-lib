
export function getGameData() {
    fetch('https://www.freetogame.com/api/games', {
         mode: 'no-cors',
         
    })
        .then(response => response)
        .then(data => {
            console.log(data);
            // do something with the data
        })
        .catch(error => console.log(error));
}