$squares.forEach(function ($square, index) {
    $square.addEventListener('click', function () {
        var $innerSquare = $square.querySelector('span.inner-square');

        for (var i = 0; i < playerClasses.length; i++) {
            if ($innerSquare.classList.contains(playerClasses[i])) {
                alert('Case déjà remplie');

                return;
            }
        }

        $innerSquare.classList.add(playerClasses[currentPlayerIndex]);

        var isFinished = isGameFinished();

        if (isFinished) {
            alert(getCurrentPlayerName() + ' a gagné');
            initGame();
        } else if (null === isFinished) {
            alert('Match nul');
            initGame();
        } else {
            nextTurn();
        }
    });
});

$resetBtn.addEventListener('click', function () {
    initGame();
});

$playerInputs.forEach(function ($playerInput) {
    $playerInput.addEventListener('change', function () {
        playerTurnUpdate();
    });

    $playerInput.addEventListener('keydown', function () {
        playerTurnUpdate();
    });
});
