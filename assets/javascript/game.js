var win = 0;
var lose = 0;
var total = 0;
var number = 0;
var diamoundBlue;
var diamoundPink;
var dimoundPruple;
var diamoundRed;

var userLoseH3 = $("#userLose");
var userWinH3 = $("#userWin");
var numberToGuessH3 = $("#numberToGuess");
var totalToGet = $("#totalToGet");

function startGame() {
    total = 0;
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

function diamoundClick(score) {
    total += score;
    if (total === number) {
        win++;
        startGame();
    }
    if (total > number) {
        lose++;
        startGame();
    }
    updateUI();

}

startGame();
updateUI();

$("#blue").on("click", function () {
    diamoundClick(diamoundBlue);
});
$("#pink").on("click", function () {
    diamoundClick(diamoundPink);

});
$("#pruple").on("click", function () {
    diamoundClick(dimoundPruple);
});
$("#red").on("click", function () {
    diamoundClick(diamoundRed);
});
