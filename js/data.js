
let globalId = 1000

const games = [
    {
        id: 540,
        title: "Overwatch 2",
        thumbnail: "https://www.freetogame.com/g/540/thumbnail.jpg",
        short_description: "A hero-focused first-person team shooter from Blizzard Entertainment.",
    },
    {
        id: 521,
        title: "Diablo Immortal",
        thumbnail: "https://www.freetogame.com/g/521/thumbnail.jpg",
        short_description: "Built for mobile and also released on PC, Diablo Immortal fills in the gaps between Diablo II and III in an MMOARPG environment.",
    },
    {
        id: 517,
        title: "Lost Ark",
        thumbnail: "https://www.freetogame.com/g/517/thumbnail.jpg",
        short_description: "Smilegate’s free-to-play multiplayer ARPG is a massive adventure filled with lands waiting to be explored, people waiting to be met, and an ancient evil waiting to be destroyed.",
    },
    {
        id: 516,
        title: "PUBG: BATTLEGROUNDS",
        thumbnail: "https://www.freetogame.com/g/516/thumbnail.jpg",
        short_description: "Get into the action in one of the longest running battle royale games PUBG Battlegrounds.",
    },
    {
        id: 508,
        title: "Enlisted",
        thumbnail: "https://www.freetogame.com/g/508/thumbnail.jpg",
        short_description: "Get ready to command your own World War II military squad in Gaijin and Darkflow Software’s MMO squad-based shooter Enlisted. ",
    },
    {
        id: 345,
        title: "Forge of Empires",
        thumbnail: "https://www.freetogame.com/g/345/thumbnail.jpg",
        short_description: "A free to play 2D browser-based online strategy game, become the leader and raise your city.",
    },
    {
        id: 427,
        title: "Drakensang Online",
        thumbnail: "https://www.freetogame.com/g/427/thumbnail.jpg",
        short_description: "A free to play browser-based top-down hack-and-slash 3D MMORPG similar to games in the Diablo series.",
    },
    {
        id: 525,
        title: "MultiVersus",
        thumbnail: "https://www.freetogame.com/g/525/thumbnail.jpg",
        short_description: "The Warner Bros lineup meets Smash in Player First Games’ MultiVersus.",
    },
    {
        id: 475,
        title: "Genshin Impact",
        thumbnail: "https://www.freetogame.com/g/475/thumbnail.jpg",
        short_description: "If you’ve been looking for a game to scratch that open-world action RPG itch, one with perhaps a bit of Asian flair, then you’re going to want to check out miHoYo’s Genshin Impact.",
    },
    {
        id: 523,
        title: "Fall Guys",
        thumbnail: "https://www.freetogame.com/g/523/thumbnail.jpg",
        short_description: "Play the most competitive massively multiplayer party royale game featuring beans ever for free on a variety of platforms. ",
    },
    {
        id: 340,
        title: "Game Of Thrones Winter Is Coming",
        thumbnail: "https://www.freetogame.com/g/340/thumbnail.jpg",
        short_description: "A free-to-play browser-based RTS based on the George R.R. Martin novels and popular HBO series.",
    },
    {
        id: 347,
        title: "Elvenar",
        thumbnail: "https://www.freetogame.com/g/347/thumbnail.jpg",
        short_description: "A browser based city-building strategy MMO set in the fantasy world of Elvenar.",
    },
    {
        id: 11,
        title: "Neverwinter",
        thumbnail: "https://www.freetogame.com/g/11/thumbnail.jpg",
        short_description: "A free-to-play 3D action MMORPG based on the acclaimed Dungeons & Dragons fantasy roleplaying game. ",
    },
    {
        id: 380,
        title: "Dark Orbit Reloaded",
        thumbnail: "https://www.freetogame.com/g/380/thumbnail.jpg",
        short_description: "A browser-based 3D space-combat MMO with a massive playerbase!",
    },
    {
        id: 515,
        title: "Halo Infinite",
        thumbnail: "https://www.freetogame.com/g/515/thumbnail.jpg",
        short_description: "For the first time ever, a free-to-play Halo experience is available in the form of Halo Infinite’s multiplayer.",
    },
    {
        id: 455,
        title: "Eternal Fury",
        thumbnail: "https://www.freetogame.com/g/455/thumbnail.jpg",
        short_description: "A free-to-play ARPG from R2 Games!",
    },
    {
        id: 522,
        title: "Flyff Universe",
        thumbnail: "https://www.freetogame.com/g/522/thumbnail.jpg",
        short_description: "Get the full Flyff experience on any platform with the free-to-play browser-based MMORPG Flyff Universe.",
    },
    {
        id: 511,
        title: "Phantasy Star Online 2 New Genesis",
        thumbnail: "https://www.freetogame.com/g/511/thumbnail.jpg",
        short_description: "The legacy of Phantasy Star Online 2 continues a thousand years later!",
    },
    {
        id: 5,
        title: "Crossout",
        thumbnail: "https://www.freetogame.com/g/5/thumbnail.jpg",
        short_description: "A post-apocalyptic MMO vehicle combat game! ",
    },
    {
        id: 9,
        title: "World of Warships",
        thumbnail: "https://www.freetogame.com/g/9/thumbnail.jpg",
        short_description: "A 3D free to play naval action-themed MMO from the creators of World of Tanks! ",
    },
    {
        id: 12,
        title: "War Thunder",
        thumbnail: "https://www.freetogame.com/g/12/thumbnail.jpg",
        short_description: "A MMO shooter that puts you in command of hundreds of the finest combat vehicles of World War II.",
    },
    {
        id: 2,
        title: "World of Tanks",
        thumbnail: "https://www.freetogame.com/g/2/thumbnail.jpg",
        short_description: "If you like blowing up tanks, with a quick and intense game style you will love this game!",
    },
    {
        id: 560,
        title: "Palia",
        thumbnail: "https://www.freetogame.com/g/560/thumbnail.jpg",
        short_description: "A cozy MMO with homebuilding and some adventure.",
    },
    {
        id: 529,
        title: "Tower of Fantasy",
        thumbnail: "https://www.freetogame.com/g/529/thumbnail.jpg",
        short_description: "Tower of Fantasy is a 3D open-world RPG, anime-style sci-fi MMO RPG game with unique characters and beautiful open vistas!",
    },
    {
        id: 466,
        title: "Valorant",
        thumbnail: "https://www.freetogame.com/g/466/thumbnail.jpg",
        short_description: "Test your mettle in Riot Games’ character-based FPS shooter Valorant.",
    }

]





export function getById(id, games) {

    let res = null;
    for (let game of games) {
        res = (game.id == id) ? game : res;
    }

    return res;
}

export function createGame(title, thumbnail, short_description) {
    const game = {
        id: globalId++,
        title: title,
        thumbnail: thumbnail,
        short_description: short_description
    }

    const games = getAllGame()
    games.push(game)
    localStorage.setItem("games", JSON.stringify(games));
    console.log(games)

    return game
}

export function updateGame(id, title, short_description) {

    let res = false;
    const games = getAllGame()
    const game = getById(id, games);

    if (game != null) {
        game.title = title;
        game.short_description = short_description;
        res = true;
        console.log(games)
        localStorage.setItem("games", JSON.stringify(games));
    }

    
    return res;
}

export function deleteGame(id){
    
    let res = false;

    const games = getAllGame();
    const game = getById(id, games);

    if (game != null){
        const index = games.indexOf(game);
        games.splice(index, 1);
        console.log(games)
        localStorage.setItem("games", JSON.stringify(games));
        res = true;
    }
}

export function getAllGame(){


    if(localStorage.getItem("games") == null || localStorage.getItem("games") == undefined)
    {
    localStorage.setItem("games", JSON.stringify(games));
    }

    return JSON.parse(localStorage.getItem("games"));
    
} 


export function getGamesByText(text)
{
    let retGames = []

    const games = getAllGame();
    for(let game of games){
        
        if (game.title.toLowerCase().indexOf(text.toLowerCase()) >= 0 || game.short_description.toLowerCase().indexOf(text.toLowerCase()) >= 0)
        {
            retGames.push(game)
        }
    }

    return retGames
}

