const fs = require("fs");

fs.readFile("input2.txt", "utf8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }

  var listOfGames = data.split("\n");
  var pointsForSymbol = 0;
  var pointForOutcome = 0;
  var totalPoints = 0;

  for (var game = 0; game < listOfGames.length; game++) {
    let ourOutcome = listOfGames[game][2];
    let opponentSymbol = listOfGames[game][0];

    switch (ourOutcome) {
      case "X":
        pointForOutcome += 0;
        switch (opponentSymbol) {
          case "A":
            pointsForSymbol += 3;
            break;
          case "B":
            pointsForSymbol += 1;
            break;
          case "C":
            pointsForSymbol += 2;
            break;
          default:
            break;
        }
        break;
      case "Y":
        pointForOutcome += 3;
        switch (opponentSymbol) {
          case "A":
            pointsForSymbol += 1;
            break;
          case "B":
            pointsForSymbol += 2;
            break;
          case "C":
            pointsForSymbol += 3;
            break;
          default:
            break;
        }
        break;
      case "Z":
        pointForOutcome += 6;
        switch (opponentSymbol) {
          case "A":
            pointsForSymbol += 2;
            break;
          case "B":
            pointsForSymbol += 3;
            break;
          case "C":
            pointsForSymbol += 1;
            break;
          default:
            break;
        }
        break;
      default:
        break;
    }
  }

  var totalPoints = pointForOutcome + pointsForSymbol;
  console.log(totalPoints);
});
