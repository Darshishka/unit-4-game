// crystal imade buttons on the page 
    //(each has a random value between 1 and 12)
//random number (between 19 and 120) shown to player 
    //at start
//player goal is to score (crystal press) to equal
    //number at start
//player lose if goes over

//updates win or lossses
//resets random number and player score to zero

var blueGem = Math.floor(Math.random() * 12) + 1;
var greenGem = Math.floor(Math.random() * 12) + 1;
var redGem = Math.floor(Math.random() * 12) + 1;
var yellowGem = Math.floor(Math.random() * 12) + 1;



$(document).ready(function() {
    var goalNumber = Math.floor(Math.random() * 120) + 19;
    var totalNumber = 0;
    document.getElementById("goalNum").innerHTML = goalNumber;
    document.getElementById("totalNum").innerHTML = totalNumber;

    

    function reset(){
        
    }

    $("#blueGem").click(function() {
        totalNumber = totalNumber + blueGem;
        document.getElementById("totalNum").innerHTML = totalNumber;
        return totalNumber;
    });

    $("#greenGem").click(function() {
        totalNumber = totalNumber + greenGem;
        document.getElementById("totalNum").innerHTML = totalNumber;
    });

    $("#redGem").click(function() {
        totalNumber = totalNumber + redGem;
        document.getElementById("totalNum").innerHTML = totalNumber;
    });

    $("#yellowGem").click(function() {
        totalNumber = totalNumber + yellowGem;
        document.getElementById("totalNum").innerHTML = totalNumber;
    });



});