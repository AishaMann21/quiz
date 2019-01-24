/* global $ */

$(document).ready(function() {
    $("button").click(function() {
        var name = $("#name").val();
        var finalAnswer = "TBD";
        var imgSrc = "https://media.giphy.com/media/22zgHX8aop488/giphy.gif";
        var q1Input = $("#question1").val();
        var q2Input = $("#question2").val();
        var q3Input = $("#question3").val();
        var q4Input = $("#question4").val();
        var q1Value = getQ1Value(q1Input)
        var q2Value = getQ2Value(q2Input)
        var q3Value = getQ3Value(q3Input)
        var q4Value = getQ4Value(q4Input)
        var house= getHouse(q1Value, q2Value, q3Value,q4Value);
        var houseImg= getHouseImg(q1Value, q2Value, q3Value,q4Value);
        
        $("#houses").text(house);
         $("#houses").append(houseImg);
    });

});
function getQ1Value(input){
    input = input.toLowerCase()
    if (input === " a sword") {
        return 1;
    } else if (input === "armor") {
        return 3;
    } else if (input === "wine") {
        return 5;
    } else {
        return 7;
    }
}

function getQ2Value(input){
    input = input.toLowerCase()
    if (input === "honesty") {
        return 1;
    } else if (input === "loyalty") {
        return 3;
    } else if (input === "strength") {
        return 5;
    } else {
        return 7;
    }
}
function getQ3Value(input){
    input = input.toLowerCase()
    if (input === "sassy") {
        return 1;
    } else if (input === "emotional") {
        return 3;
    } else if (input === "wild") {
        return 5;
    } else {
        return 7;
    }
}
function getQ4Value(input){
    input = input.toLowerCase()
    if (input === "white walkers") {
        return 1;
    } else if (input === "direwolf") {
        return 3;
    } else if (input === "giants") {
        return 5;
    } else {
        return 7;
    }
}
 function getHouse(q1Value,q2Value, q3Value, q4Value){
     var sum = q1Value + q2Value + q3Value +q4Value;
    if (sum > 19) {
        return "You belong to House Stark!";
    } else if (sum > 15) {
        return "You belong to House Lannister!"
    } else if (sum > 10) {
        return "You belong to The Night's Watch!"
    } else if (sum > 4) {
        return "You belong to House Targaryen!"
    } else {
        return "You belong to the Wildlings!"
    }
 }
function getHouseImg(q1Value,q2Value, q3Value, q4Value){
     var sum = q1Value + q2Value + q3Value +q4Value;
    if (sum > 19) {
        return "<img src='https://cdnb.artstation.com/p/assets/images/images/006/129/073/large/tobi-wolf-housestark-render7.jpg?1496243907'>";
    } else if (sum > 15) {
        return "<img src= 'http://www.tvseriesreviews.com/wp-content/uploads/2018/08/House-Lannister-2.jpg'>";
    } else if (sum > 10) {
        return "<img src= 'http://rfabiano.weebly.com/uploads/2/3/6/9/23691331/1379557800.jpg'>";
    } else if (sum > 4) {
        return "<img src='https://i.ytimg.com/vi/D6EDrPC3oeA/maxresdefault.jpg'>";
    } else {
        return "<img src= 'https://ih0.redbubble.net/image.516956457.1541/flat,550x550,075,f.jpg'>";
    }
 }