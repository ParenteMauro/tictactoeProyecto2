import Game from "./Game.js";
import GameView from "./GameView.js";
let accountantX = document.getElementById("victoryX")
let accountantO = document.getElementById("victoryO") 
let countVictoryX = 0;
let countVictoryO = 0;
let game = new Game();
let gameView = new GameView(document.getElementById("app"));

function victoryCount(){ 

if(game.turn==="X"){
    countVictoryX++
    accountantX.innerText = countVictoryX
}
else if(game.turn==="O"){
    countVictoryO++
    accountantO.innerText = countVictoryO
}
}

gameView.onTileClick = function (i) {
    game.makeMove(i);
    gameView.update(game);
};

gameView.onRestartClick = function () {
    game = new Game();
    gameView.update(game);
};

gameView.update(game);

export default victoryCount