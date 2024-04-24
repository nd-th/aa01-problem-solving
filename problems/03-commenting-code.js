/*
Commenting Someone Else's Code

Replace variables using the example input in code comments. Then fix the bug
in the code so that the example input matches the expected output.
*/

function charactersNotQuiteAtTheEdge(str) { // str = "fringe"
  let char1 = str[1];                       // char1 = "r"
  let char2 = str[str.length - 2];          // char2 = "g"
  return char1 + char2;                     // "rg"
}

console.log(charactersNotQuiteAtTheEdge('fringe')); // expected output: 'rg'


/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = charactersNotQuiteAtTheEdge;
