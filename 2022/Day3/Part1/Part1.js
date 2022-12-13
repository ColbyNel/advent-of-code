const fs = require("fs");

var commonLetter = [];
var duplicateValue = 0;
var alphabet = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "X",
  "Y",
  "Z",
];

//---------------------------
//MAIN FUNCTIONS BELOW
//---------------------------
fs.readFile("input.txt", "utf8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }

  var rucksackArray = data.split("\n");

  for (var rucksack = 0; rucksack < rucksackArray.length; rucksack++) {
    problemSolver(rucksackArray[rucksack]);
  }

  console.log(commonLetter);
  convertArray(commonLetter);
  console.log(rucksackArray.pop());
});

//---------------------------
//HELPER FUNCTIONS BELOW
//---------------------------

function convertArray(commonLetter) {
  for (var letter = 0; letter < commonLetter.length; letter++) {
    // console.log(letter);
    // console.log(commonLetter[letter]);

    duplicateValue += alphabet.indexOf(commonLetter[letter]) + 1;
  }
  console.log(duplicateValue);
}

function problemSolver(inputArray) {
  var splitArray1 = inputArray.slice(0, inputArray.length / 2);
  var splitArray2 = inputArray.slice(inputArray.length / 2, inputArray.length);

  for (var i = 0; i < splitArray1.length; i++) {
    for (var j = 0; j < splitArray2.length; j++) {
      if (
        splitArray1[i] === splitArray2[j] &&
        !commonLetter.includes(splitArray1[i])
      ) {
        commonLetter.push(splitArray1[i]);
        // break;
      }
      //break;
    }
  }
  //return commonLetter;
  // convertArray(commonLetter);
}
