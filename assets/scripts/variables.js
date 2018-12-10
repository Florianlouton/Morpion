var counter = 0;

var currentPlayerIndex = 0;

var playerClasses = [
    'inner-square-circle',
    'inner-square-cross'
];


var $squares = document.querySelectorAll('.square');

var $resetBtn = document.querySelector('#reset-btn');

var $currentPlayerName = document.querySelector('#current-player-name');

var $playerInputs = document.querySelectorAll('[id^="player-"]');
