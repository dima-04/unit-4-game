var win = 0;
var lose = 0;
var total = 0;
var number = 0;

var userLoseH3 = $("#userLose");
var userWinH3 = $("#userWin");
var numberToGuessH3 = $("#numberToGuess");
var totalToGet = $("#totalToGet");

function startGame() {
    number = 19 + Math.floor(Math.random() * 101);
    diamoundBlue = 1 + Math.floor(Math.random() * 11);
    diamoundPink = 1 + Math.floor(Math.random() * 11);
    dimoundPruple = 1 + Math.floor(Math.random() * 11);
    diamoundRed = 1 + Math.floor(Math.random() * 11);
}

function updateUI() {
    userLoseH3.text(lose);
    userWinH3.text(win);
    numberToGuessH3.text(number);
    totalToGet.text(total);
}
startGame();
updateUI();

$("#blue").on("click", function () {
    total += diamoundBlue;
    updateUI();
});
$("#pink").on("click", function () {
    total += diamoundPink;
    updateUI();
});
$("#pruple").on("click", function () {
    total += dimoundPruple;
    updateUI();
});
$("#red").on("click", function () {
    total += diamoundRed;
    updateUI();
});
