// Edit functionality to stop alerts and clicks after game has been over

function resetGameStatus() {
  gameIsOver = false;
  activePlayer = 0;
  currentRound = 1;
  gameOverElement.firstElementChild.innerHTML =
    'you won, <span id="winner-name">PLAYERNAME</span>!';
  gameOverElement.style.display = "none";

  let gameBoardElementIndex = 0;
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      gameData[i][j] = 0;
      gameBoardElement.children[gameBoardElementIndex].textContent = "";

      gameBoardElement.children[gameBoardElementIndex].classList.remove(
        "disabled"
      );
      gameBoardElementIndex++;
    }
  }
}

function startNewGame() {
  if (players[0].name === "" || players[1].name === "") {
    alert("please set custom names for players");
    return;
  }
  resetGameStatus();

  activePlayerNameElement.textContent = players[activePlayer].name;
  gameAreaElement.style.display = "block";
}

function switchPlayer() {
  if (activePlayer === 0) {
    activePlayer = 1;
  } else {
    activePlayer = 0;
  }
  activePlayerNameElement.textContent = players[activePlayer].name;
}

function selectGameField(event) {
  if (event.target.tagName !== "LI" || gameIsOver) {
    return;
  }
  const selectedField = event.target;
  const selectedCol = selectedField.dataset.col - 1;
  const selectedRow = selectedField.dataset.row - 1;

  if (gameData[selectedRow][selectedCol] > 0) {
    alert("please select an Empty Field!");
    return;
  }

  selectedField.textContent = players[activePlayer].symbol;
  selectedField.classList.add("disabled");

  gameData[selectedRow][selectedCol] = activePlayer + 1;
  const winnerId = checkForGameOver();
  console.log(winnerId);
  if (winnerId != 0) {
    endGame(winnerId);
  }

  switchPlayer();
  currentRound++;
  
}

function checkForGameOver() {
  // Checking for rows Equality

  for (let i = 0; i < 3; i++) {
    if (
      gameData[i][0] > 0 &&
      gameData[i][0] === gameData[i][1] &&
      gameData[i][1] === gameData[i][2]
    ) {
      return gameData[i][0];
    }
  }

  // Checking for Columns Equality
  for (let i = 0; i < 3; i++) {
    if (
      gameData[0][i] > 0 &&
      gameData[0][i] === gameData[1][i] &&
      gameData[1][i] === gameData[2][i]
    ) {
      return gameData[0][i];
    }
  }
  // top left to bottom right diagonal check
  if (
    gameData[0][0] > 0 &&
    gameData[0][0] === gameData[1][1] &&
    gameData[1][1] == gameData[2][2]
  ) {
    return gameData[0][0];
  }

  // bottom left to top right diagonal check
  if (
    gameData[0][0] > 0 &&
    gameData[2][0] === gameData[1][1] &&
    gameData[1][1] == gameData[0][2]
  ) {
    return gameData[2][0];
  }

  if (currentRound === 9) {
    return -1;
  }
  return 0;
}

function endGame(winnerId) {
  gameIsOver = true;
  gameOverElement.style.display = "block";

  if (winnerId > 0) {
    const winnerName = players[winnerId - 1].name;
    gameOverElement.firstElementChild.firstElementChild.textContent =
      winnerName;
  } else {
    gameOverElement.firstElementChild.innerHTML =
    '<h3>Game Over!<span id="winner-name"> It\'s a draw!</span></h3>';
  }
}
