// document.querySelectorAll('.tile').forEach(item => {
//     item.addEventListener('click', event => {
//       item.classList.add(i)
//     })
//   })
// let arr = ["fill-o", "fill-y", "fill-x", "fill-y", "fill-x", "fill-y", "fill-x"]
let currentplayer ='x'
document.querySelectorAll('.tile').forEach(item => {
    item.addEventListener("click",() =>{
        
        if (currentplayer=='x') {
         item.classList.add('fill-x')
         currentplayer='o'
         
        }else if(currentplayer=='o'){
         item.classList.add('fill-o')
         currentplayer='x'
        }
        console.log(currentplayer)
    })
})
function clickedcelladd(callback){
    item.classList.add('fill-x')
    let currentplayer ='x'
   if (true) {
    item.classList.add('fill-x')
   }else{
    item.classList.add('fill-o')
   }
}
const winningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];
let gameState = ["", "", "", "", "", "", "", "", ""];

function handleResultValidation() {
    let roundWon = false;
    for (let i = 0; i <= 7; i++) {
        const winCondition = winningConditions[i];
        let a = gameState[winCondition[0]];
        let b = gameState[winCondition[1]];
        let c = gameState[winCondition[2]];
        if (a === '' || b === '' || c === '') {
            continue;
        }
        if (a === b && b === c) {
            roundWon = true;
            break
        }
    }
    if (roundWon) {
        document.getElementsByClassName('board').classList.add('win-x')
        gameActive = false;
        return;
    }
    let roundDraw = !gameState.includes("");
    if (roundDraw) {
        document.getElementsByClassName('board').classList.add('draw')
        gameActive = false;
        return;
    }
}

// const statusDisplay = document.querySelector('.game--status');

// let gameActive = true;

// let currentPlayer = "X";

// let gameState = ["", "", "", "", "", "", "", "", ""];

// const winningMessage = () => `Player ${currentPlayer} has won!`;
// const drawMessage = () => `Game ended in a draw!`;
// // const currentPlayerTurn = () => `It's ${currentPlayer}'s turn`;

// // statusDisplay.innerHTML = currentPlayerTurn();


// document.querySelectorAll('.tile').forEach(cell => cell.addEventListener('click', handleCellClick));
// document.querySelector('.game--restart').addEventListener('click', handleRestartGame);
// function handleCellClick(clickedCellEvent) {

//     const clickedCell = clickedCellEvent.target;

//     const clickedCellIndex = parseInt(
//         clickedCell.getAttribute('data-cell-index')
//     );

//     if (gameState[clickedCellIndex] !== "" || !gameActive) {
//         return;
//     }

//     handleCellPlayed(clickedCell, clickedCellIndex);
//     handleResultValidation();
// }
// function handleCellPlayed(clickedCell, clickedCellIndex) {

//     gameState[clickedCellIndex] = currentPlayer;
//     clickedCell.innerHTML = currentPlayer;
// }

// const winningConditions = [
//     [0, 1, 2],
//     [3, 4, 5],
//     [6, 7, 8],
//     [0, 3, 6],
//     [1, 4, 7],
//     [2, 5, 8],
//     [0, 4, 8],
//     [2, 4, 6]
// ];

//     handlePlayerChange();
// }
// function handlePlayerChange() {
//     currentPlayer = currentPlayer === "X" ? "O" : "X";
//     statusDisplay.innerHTML = currentPlayerTurn();
// }
// function handleRestartGame() {
//     gameActive = true;
//     currentPlayer = "X";
//     gameState = ["", "", "", "", "", "", "", "", ""];
//     statusDisplay.innerHTML = currentPlayerTurn();
//     document.querySelectorAll('.tile')
//         .forEach(cell => cell.innerHTML = "");
// }