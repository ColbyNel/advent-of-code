const fs = require("fs");

fs.readFile("input.txt", "utf8", (err, data) => {
    if (err) {
        console.error(err);
        return;
      }
    
    var rucksackArray = data.split("\n");





})