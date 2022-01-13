let editedPlayer = 0;

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

const playerConfigOverlayElement = document.getElementById('config-overlay');
const backdropElement = document.getElementById('backdrop');
const editPlayer1Btn = document.getElementById('edit-player-1-btn');
const editPlayer2Btn = document.getElementById('edit-player-2-btn');
const cancelConfigBtnElement = document.getElementById('cancel-config-btn');

const formElement = document.querySelector('form');
const errrorsOutputElement = document.getElementById('config-errors');




editPlayer1Btn.addEventListener('click',openPlayerConfig);
editPlayer2Btn.addEventListener('click',openPlayerConfig);
cancelConfigBtnElement.addEventListener('click',closePlayerConfig);
backdropElement.addEventListener('click',closePlayerConfig);
formElement.addEventListener('submit',savePlayerConfig);