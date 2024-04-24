/*
Pseudocode With Polya's

Write pseudocode for Step 1 and 2 of Polya's Problem Solving framework for the
given problem statement. Then execute Step 3 of Polya's Problem Solving
framework. Finally, test your code in Step 4 of Polya's Problem Solving
framework.
*/

/*
Problem Statement:
Given a number, write a function called within5Of100 to return true if the given
number is within 5 of 100.
*/

// goal: create a function that check if given number is in between 5 and 100 including 5 and 100 and return true else false
// input: number
// output: boolean

// create a function within5Of100 with one parameter.
function within5Of100(num){
//use if statement to check if the number is greater than or equal to 5 and less than or equal to 100.
// return boolean
    if(num >= 5 && num <= 100){
        return true;
    }
    return false;

}

// test number less 5.
console.log(within5Of100(4)); //=> false
// test number betwen 5 and 100.
console.log(within5Of100(94));  //=> true
console.log(within5Of100(95));  //=> true

// test 5 and 100
console.log(within5Of100(100)); //=> true
console.log(within5Of100(5)); //=> true

//test numbers greater than 100.
console.log(within5Of100(105)); //=> false
 console.log(within5Of100(106)); //=> false

// CHALLENGE: Can you design a function that would return true if a given number
// is within X of another given number Y?

console.log("------------------------------------------------------------------------------------");

//create a function checkNumbetweenXandY that take three parameter x and y and a number to be check.
function checkNumbetweenXandY(start, end, num){
    // use condition to search from to start end for the number
    if(num >= start && num <= end){
    // return true else return false
        return true;
    }
    return false;
}

//test
console.log(checkNumbetweenXandY(5,100, 94)); // => true
console.log(checkNumbetweenXandY(1, 1000, 1001)); // => false
console.log(checkNumbetweenXandY(5, 100, 5)); // => true
console.log(checkNumbetweenXandY(5,100, 100)); // => true


/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = within5Of100;
