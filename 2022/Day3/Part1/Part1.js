var exampleArray = ["WrThewTs","sThVzT","qwEpLFdqol","AskA","qwASWQrasW"]
var commonLetter = []
var alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",
"A","B","C","D","E","F","G","H","I","J","K","L","M","O","P","Q","R","S","T","U","V","X","Y","Z"];


for (var rucksack = 0; rucksack < exampleArray.length; rucksack++){
  problemSolver(exampleArray[rucksack])
}


function problemSolver(inputArray){
  var splitArray1 = inputArray.slice(0, Math.ceil(inputArray.length / 2))
  var splitArray2 = inputArray.slice(Math.ceil(inputArray.length / 2),inputArray.length)

  for (var i=0; i < splitArray1.length; i++){
    for (var j=0; j<splitArray2.length; j++){
      if (splitArray1[i] === splitArray2[j]){
         commonLetter.push(splitArray1[i])
      }
      else {
        console.log("Incorrect")
      }
    }
  }
  return commonLetter
}

console.log(commonLetter)