const cells = document.querySelectorAll('.cell');
const statusText = document.getElementById('status');
const restartBtn = document.getElementById('restart');
let currentPlayer = 'X';
let board = ['', '', '', '', '', '', '', '', ''];
let isGameActive = true;

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

function handleCellClick(event) {
    const cell = event.target;
    const index = cell.getAttribute('data-index');

    if (board[index] !== '' || !isGameActive) return;

    board[index] = currentPlayer;
    cell.textContent = currentPlayer;
    checkWinner();
}

function checkWinner() {
    let roundWon = false;

    for (let i = 0; i < winningConditions.length; i++) {
        const winCondition = winningConditions[i];
        const a = board[winCondition[0]];
        const b = board[winCondition[1]];
        const c = board[winCondition[2]];

        if (a === '' || b === '' || c === '') continue;

        if (a === b && b === c) {
            roundWon = true;
            break;
        }
    }

    if (roundWon) {
        console.log("won");
        statusText.textContent = `${currentPlayer} Wins!`;
        isGameActive = false;
        return;
    }

    if (!board.includes('')) {
        statusText.textContent = 'Draw!';
        isGameActive = false;
        return;
    }

    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
}

function restartGame() {
    board.fill('');
    cells.forEach(cell => (cell.textContent = ''));
    currentPlayer = 'X';
    isGameActive = true;
    statusText.textContent = '';
}

cells.forEach(cell => cell.addEventListener('click', handleCellClick));
restartBtn.addEventListener('click', restartGame);
// // iCertainly! Let’s dive deeper into the JavaScript code for the Tic-Tac-Toe game and break it down even more, especially focusing on each part and explaining it as if you are new to JavaScript.

// ### JavaScript Overview

// JavaScript is a programming language that can be used to make web pages interactive. In our Tic-Tac-Toe game, JavaScript handles the game logic: determining whose turn it is, updating the game board, checking if someone has won, and allowing the game to restart.

// ### Key Concepts in the JS Code

// #### 1. **Variables**

// Variables are like containers that hold information. In our Tic-Tac-Toe game, we have several important variables:

// ```javascript
// let board = ['', '', '', '', '', '', '', '', ''];
// let currentPlayer = 'X';
// let gameActive = true;
// ```

// - **board**: This is an array (a list) with 9 elements. Each element corresponds to a cell in the Tic-Tac-Toe grid. Initially, all cells are empty (`''`).
// - **currentPlayer**: This keeps track of whose turn it is. It starts with `'X'`, which means player X goes first.
// - **gameActive**: This is a boolean (true/false value) that tells us whether the game is still ongoing. If `true`, the game continues; if `false`, the game has ended (either someone won or it's a draw).

// #### 2. **querySelectorAll**

// ```javascript
// document.querySelectorAll('.cell')
// ```

// - **document**: This refers to the entire web page (the HTML document).
// - **querySelectorAll**: This is a method (a function that belongs to an object) that selects all elements on the page that match a specific CSS selector. 

// In this case, `.cell` is the CSS selector. The `.` before "cell" indicates that we're selecting elements by their class name. So, `document.querySelectorAll('.cell')` selects all elements on the page with the class `cell`.

// - **Returns**: It returns something called a **NodeList**, which is a collection (like an array) of all the selected elements. Each item in the NodeList corresponds to a `<div>` with the class `cell` in our Tic-Tac-Toe grid.

// #### 3. **Event Listeners**

// An event listener is a way to run a specific block of code (a function) whenever a certain event happens. In this case, the event is a "click" on a cell.

// ```javascript
// document.querySelectorAll('.cell').forEach(cell => {
//     cell.addEventListener('click', handleCellClick);
// });
// ```

// - **forEach**: This is a method that runs a function for each item in a collection. Here, it goes through each `cell` in the NodeList.
// - **cell.addEventListener('click', handleCellClick)**: This attaches an event listener to each cell. The event listener listens for a "click" event, and when a cell is clicked, it runs the `handleCellClick` function.

// #### 4. **handleCellClick Function**

// This function handles what happens when a cell is clicked.

// ```javascript
// function handleCellClick(event) {
//     const clickedCell = event.target;
//     const clickedCellIndex = clickedCell.getAttribute('data-index');

//     if (board[clickedCellIndex] !== '' || !gameActive) {
//         return;
//     }

//     board[clickedCellIndex] = currentPlayer;
//     clickedCell.textContent = currentPlayer;

//     checkResult();
// }
// ```

// - **event.target**: When an event happens, like a click, information about that event is stored in an `event` object. `event.target` is the specific element that was clicked.
// - **clickedCell**: This stores the element (cell) that was clicked.
// - **clickedCellIndex**: This gets the `data-index` attribute of the clicked cell. The `data-index` tells us which cell was clicked (0 for the first cell, 1 for the second, etc.).
// - **if statement**: This checks if the cell is already filled or if the game is no longer active. If either condition is true, it simply returns (exits the function), preventing any further action.
// - **board[clickedCellIndex] = currentPlayer**: This updates the `board` array with the current player's symbol ("X" or "O").
// - **clickedCell.textContent = currentPlayer**: This updates the content of the cell in the HTML to display the current player's symbol.
// - **checkResult()**: This function is called to check if the game has been won or if it's a draw.

// #### 5. **checkResult Function**

// This function checks if there's a winner or if the game is a draw.

// ```javascript
// const winningCombinations = [
//     [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
//     [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
//     [0, 4, 8], [2, 4, 6]  // Diagonals
// ];

// function checkResult() {
//     let roundWon = false;

//     for (let i = 0; i < winningCombinations.length; i++) {
//         const [a, b, c] = winningCombinations[i];
//         if (board[a] && board[a] === board[b] && board[a] === board[c]) {
//             roundWon = true;
//             break;
//         }
//     }

//     if (roundWon) {
//         alert(`Player ${currentPlayer} wins!`);
//         gameActive = false;
//         return;
//     }

//     if (!board.includes('')) {
//         alert('It\'s a draw!');
//         gameActive = false;
//         return;
//     }

//     currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
// }
// ```

// - **winningCombinations**: This is an array of arrays, where each inner array represents a combination of indices that would result in a win (three in a row, column, or diagonal).
// - **for loop**: This loop goes through each possible winning combination.
// - **Destructuring**: `const [a, b, c] = winningCombinations[i]` is a way of quickly accessing the three elements of each combination.
// - **if statement**: This checks if all three cells in a winning combination are the same and not empty. If so, `roundWon` is set to `true`, indicating a win.
// - **alert(`Player ${currentPlayer} wins!`)**: If there is a winner, it shows a message declaring the winner.
// - **gameActive = false**: This stops the game since there's a winner.
// - **if (!board.includes(''))**: If the board has no empty cells left (`''`), it's a draw.
// - **currentPlayer = currentPlayer === 'X' ? 'O' : 'X'**: If no one has won and the game isn’t a draw, it switches the current player from "X" to "O" or vice versa.

// #### 6. **Restarting the Game**

// Finally, we might want to restart the game, so we can add a function to reset everything:

// ```javascript
// function restartGame() {
//     board = ['', '', '', '', '', '', '', '', ''];
//     gameActive = true;
//     currentPlayer = 'X';
//     document.querySelectorAll('.cell').forEach(cell => cell.textContent = '');
// }
// ```

// - **restartGame Function**: This resets the `board` array to be empty, sets `gameActive` to `true`, resets the `currentPlayer` to "X", and clears the content of all cells.

// ### Conclusion

// This detailed explanation should give you a solid understanding of how each part of the JavaScript code works in the Tic-Tac-Toe game. The code uses variables to track the game state, event listeners to respond to user interactions, and functions to manage the game logic, like checking for a winner or restarting the game. 

// Understanding concepts like `querySelectorAll`, event listeners, and how arrays and loops work is key to mastering JavaScript and building interactive web applications.