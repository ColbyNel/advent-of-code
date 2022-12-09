// const fs = require("fs");

// fs.readFile("input1.txt", "utf8", (err, data) => {
//   if (err) {
//     console.error(err);
//     return;
//   }

//   var myArray = data.split("\n")
//   console.log(myArray)



// })

const data = 'A Y\nB X\nC Z';
const array = Array.from(data.split('\n'));
console.log(array)
var tally = 0


function totalPoints(gameArray) {
  for(var i=0; i < gameArray.length; i++){
    if (gameArray[i] = "A X"){
       tally += 4
    } else if (gameArray[i] = "A Y"){
       tally += 8
    } else if (gameArray[i] = "A Z"){
       tally += 3
    } else if (gameArray[i] = "B X"){
       tally += 1
    } else if (gameArray[i] = "B Y"){
       tally += 5
    } else if (gameArray[i] = "B Z"){
       tally += 9
    } else if (gameArray[i] = "C X"){
       tally += 7
    } else if (gameArray[i] = "C Y"){
       tally += 2
    } else if (gameArray[i] = "C Z"){
       tally += 6
    } else {
      console.log("Please input a complete array")
    }
  }
  return tally;
}

var allPoints = totalPoints(array)
console.log(allPoints)