const fs = require("fs");

fs.readFile("input.txt", "utf8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }

  var totalCaloriesOfEachElf = [];
  var tally = 0;
  var elfArray = data.split("\n");

  for (var currentIndex = 0; currentIndex < elfArray.length; currentIndex++) {
    if (elfArray[currentIndex] !== "") {
      var intValue = parseInt(elfArray[currentIndex]);
      tally += intValue;
      if (currentIndex == elfArray.length - 1) {
        totalCaloriesOfEachElf.push(tally);
      }
    } else {
      totalCaloriesOfEachElf.push(tally);
      tally = 0;
    }
  }

  var sortedArrayInAscendingOrder = totalCaloriesOfEachElf.sort(
    (a, b) => a - b
  );
  var highestTally = sortedArrayInAscendingOrder.pop();

  console.log("\n");
  console.log(
    "The elf with the most calories had " + highestTally + " calories"
  );
  console.log("\n");
});
