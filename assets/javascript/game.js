var win = 0;
var lose = 0;
var total = 0;
var number = 0;

var userLoseH3 = document.$("userLose");
var userWinH3 = document.$("userWin");
var numberToGuessH3 = document.$("numberToGuess");

function startGame(){
    number = 19 + [Math.floor(Math.random() * [0 , 101])];
    for (var i = 0; i < number.length; i++) {
     console.log(i);
    }
}
            

function updateUI() {
    userLoseH3.innerHTML = lose;
    userWinH3.innerHTML = win;
}
$(".blue-image").on("click" , function(){

});
$(".pink-image").on("click" , function(){

});
$(".pruple-image").on("click" , function(){

});
$(".red-image").on("click" , function(){

});