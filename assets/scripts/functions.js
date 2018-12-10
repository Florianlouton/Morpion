function clearGrid() {
    $squares.forEach(function ($square, index) {
        var $innerSquare = $square.querySelector('span.inner-square');

        $innerSquare.classList.remove('inner-square-cross');
        $innerSquare.classList.remove('inner-square-circle');
    });
}

function switchPlayers() {
    var playerNames = [];

    $playerInputs.forEach(function ($playerInput) {
        playerNames.push($playerInput.value);
    });

    playerNames = playerNames.reverse();

    $playerInputs.forEach(function ($playerInput, index) {
        $playerInput.value = playerNames[index];
    });
}

function toggleResetBtnEnable(enable) {
    $resetBtn.disabled = !enable;
}

function playerTurnUpdate() {
    $currentPlayerName.innerHTML = getCurrentPlayerName();
}

function getCurrentPlayerName() {
    var currentPlayerName = $playerInputs[currentPlayerIndex].value;

    if ('' === currentPlayerName) {
        return 'Joueur ' + (currentPlayerIndex+1);
    } else {
        return currentPlayerName;
    }
}

function nextTurn() {
    currentPlayerIndex++;
    counter++;

    if (currentPlayerIndex >= $playerInputs.length) {
        currentPlayerIndex = 0;
    }

    playerTurnUpdate();
    if (1 === counter) {
        toggleResetBtnEnable(true);
    }
}

function initGame() {
    counter = 0;
    currentPlayerIndex = 0;
    clearGrid();
    switchPlayers();
    toggleResetBtnEnable(false);
    playerTurnUpdate();
}

function isGameFinished() {
    var classToCheck = playerClasses[currentPlayerIndex];
    var winMatrix = getWinMatrix();

    for (var i = 0; i < $squares.length; i++) {
        var $innerSquare = $squares[i].querySelector('span.inner-square');

        if ($innerSquare.classList.contains(classToCheck)) {
            for (var j = 0; j < winMatrix.length; j++) {
                var winCase = winMatrix[j];
                var hasWinIndex = winCase.indexOf(i);

                if (-1 !== hasWinIndex) {
                    winCase.splice(hasWinIndex, hasWinIndex + 1);

                    if (0 === winCase.length) {
                        return true;
                    }

                    winMatrix[j] = winCase;
                }
            }
        }
    }

    if (counter === $squares.length - 1) {
        return null;
    }

    return false;
}

function getWinMatrix() {
    return [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],

        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],

        [0, 4, 8],
        [2, 4, 6]
    ];
}
