const GameWrapper = document.getElementById("game-wrapper");
for(let i = 0; i < 9; i++){
    GameWrapper.innerHTML += `<div class="tile"></div>`
}

const Tiles = document.getElementsByClassName("tile");

const WinningConditions = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [1, 5, 9], [3, 5, 7], [1, 4, 7], [2, 5, 8], [3, 6, 9]]
function checkForWins(){
    let tempTab = [];
    let tempChar = "";
    for(let i = 0; i < WinningConditions.length; i++){
        for(let j = 0; j < 3; j++){
            Tiles[WinningConditions[i][j]]
        }
    }
}

let Turn = "O";
for(let i = 0; i < Tiles.length; i++){
    const Tile = Tiles[i];
    Tile.addEventListener("click", function handleClick(){
        Tile.textContent = Turn;
        Turn = Turn == "O" ? "X" : "O";

        Tile.removeEventListener("click", handleClick);
    });
}