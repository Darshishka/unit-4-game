var blueGem = Math.floor(Math.random() * 12) + 1;
var greenGem = Math.floor(Math.random() * 12) + 1;
while (greenGem == blueGem) {
    greenGem = Math.floor(Math.random() * 12) + 1;
}
var redGem = Math.floor(Math.random() * 12) + 1;
while (redGem == greenGem || redGem == blueGem){
    redGem = Math.floor(Math.random() * 12) + 1;
}
var yellowGem = Math.floor(Math.random() * 12) + 1;
while (yellowGem == redGem || yellowGem == greenGem || yellowGem == blueGem) {
    yellowGem = Math.floor(Math.random() * 12) + 1;
}

var goalNumber = Math.floor(Math.random() * 101) + 19;

var totalNumber = 0;
var winNum = 0;
var loseNum = 0;

function testWin() {
    if (totalNumber == goalNumber) {
        winNum++;
        document.getElementById("winNum").innerHTML = "Wins: " + winNum;
        reset();
    }
    else if (totalNumber > goalNumber) {
        loseNum++;
        document.getElementById("loseNum").innerHTML = "Losses: " + loseNum;
        reset();
    }
}

function reset(){
    blueGem = Math.floor(Math.random() * 12) + 1;
    greenGem = Math.floor(Math.random() * 12) + 1;
    while (greenGem == blueGem) {
        greenGem = Math.floor(Math.random() * 12) + 1;
    }
    redGem = Math.floor(Math.random() * 12) + 1;
    while (redGem == greenGem || redGem == blueGem){
        redGem = Math.floor(Math.random() * 12) + 1;
    }
    yellowGem = Math.floor(Math.random() * 12) + 1;
    while (yellowGem == redGem || yellowGem == greenGem || yellowGem == blueGem) {
        yellowGem = Math.floor(Math.random() * 12) + 1;
    }
    totalNumber = 0;
    goalNumber = Math.floor(Math.random() * 101) + 19;
    document.getElementById("goalNum").innerHTML = goalNumber;
    document.getElementById("totalNum").innerHTML = totalNumber;
}

$(document).ready(function() {
    document.getElementById("goalNum").innerHTML = goalNumber;
    document.getElementById("totalNum").innerHTML = totalNumber;

    $("#blueGem").click(function() {
        totalNumber = totalNumber + blueGem;
        document.getElementById("totalNum").innerHTML = totalNumber;
        testWin();
    });

    $("#greenGem").click(function() {
        totalNumber = totalNumber + greenGem;
        document.getElementById("totalNum").innerHTML = totalNumber;
        testWin();
    });

    $("#redGem").click(function() {
        totalNumber = totalNumber + redGem;
        document.getElementById("totalNum").innerHTML = totalNumber;
        testWin();
    });

    $("#yellowGem").click(function() {
        totalNumber = totalNumber + yellowGem;
        document.getElementById("totalNum").innerHTML = totalNumber;
        testWin();
    });
});