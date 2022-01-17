let editedPlayer = 0;
let activePlayer = 0;
let currentRound = 1;
let gameIsOver = false;

const gameData = [
    [0,0,0],
    [0,0,0],
    [0,0,0],
];

const players = [
    {
        name :'',
        symbol: 'X'
    },
    {
        name :'',
        symbol: 'O'

    },

];

const startGameBtnElement = document.getElementById('start-game-btn');
const playerConfigOverlayElement = document.getElementById('config-overlay');
const backdropElement = document.getElementById('backdrop');
const gameAreaElement = document.getElementById('active-game');
const activePlayerNameElement = document.getElementById('active-player');
const gameOverElement = document.getElementById('game-over');



const editPlayer1Btn = document.getElementById('edit-player-1-btn');
const editPlayer2Btn = document.getElementById('edit-player-2-btn');
const cancelConfigBtnElement = document.getElementById('cancel-config-btn');
const gameBoardElement = document.getElementById('game-board');

const formElement = document.querySelector('form');
const errrorsOutputElement = document.getElementById('config-errors');


startGameBtnElement.addEventListener('click', startNewGame)

editPlayer1Btn.addEventListener('click',openPlayerConfig);
editPlayer2Btn.addEventListener('click',openPlayerConfig);
cancelConfigBtnElement.addEventListener('click',closePlayerConfig);
backdropElement.addEventListener('click',closePlayerConfig);
formElement.addEventListener('submit',savePlayerConfig);



gameBoardElement.addEventListener('click',selectGameField);

