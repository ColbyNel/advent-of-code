const fs = require("fs");

fs.readFile("input1.txt", "utf8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }

  var myArray = data.split("\n");

  var pointsForSymbol = 0;
  var pointForOutcome = 0;
  var totalPoints = 0;

  for (var counter = 0; counter < myArray.length; counter++) {
    let ourSymbol = myArray[counter][2];
    let opponentSymbol = myArray[counter][0];

    switch (ourSymbol) {
      case "X":
        pointsForSymbol += 1;
        break;
      case "Y":
        pointsForSymbol += 2;
        break;
      case "Z":
        pointsForSymbol += 3;
        break;
      default:
        pointsForSymbol += 0;
        break;
    }

    if (
      (opponentSymbol == "A" && ourSymbol == "X") ||
      (opponentSymbol == "B" && ourSymbol == "Y") ||
      (opponentSymbol == "C" && ourSymbol == "Z")
    ) {
      pointForOutcome += 3;
    } else if (
      (opponentSymbol == "A" && ourSymbol == "Y") ||
      (opponentSymbol == "B" && ourSymbol == "Z") ||
      (opponentSymbol == "C" && ourSymbol == "X")
    ) {
      pointForOutcome += 6;
    } else pointForOutcome += 0;
  }

  totalPoints = pointsForSymbol + pointForOutcome;
  console.log(totalPoints);
});

// var tally = 0;

// function totalPoints(gameArray) {
//   for (var i = 0; i < gameArray.length; i++) {
//     if (gameArray[i] === "A X") {
//        tally += 4;
//        gameArray[i].
//     } else if (gameArray[i] === "A Y") {
//       tally += 8;
//     } else if (gameArray[i] === "A Z") {
//       tally += 3;
//     } else if (gameArray[i] === "B X") {
//       tally += 1;
//     } else if (gameArray[i] === "B Y") {
//       tally += 5;
//     } else if (gameArray[i] === "B Z") {
//       tally += 9;
//     } else if (gameArray[i] === "C X") {
//       tally += 7;
//     } else if (gameArray[i] === "C Y") {
//       tally += 2;
//     } else if (gameArray[i] === "C Z") {
//       tally += 6;
//     } else {
//       console.log("Please input a complete array");
//     }
//   }
//   return tally;
// }

// var allPoints = totalPoints(myArray);
// console.log(allPoints);
