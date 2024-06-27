let score="33abc"
let valueInScore= Number(score)
// console.log(typeof score);
// console.log(typeof (valueInScore));
// console.log(valueInScore);
// we us capital version of datatypes(ex. Number,String) to convert datatypes
// "33" -> 33
// "33abc" -> NaN(Not a Number)
// true->1 ; false->0
//"abc" ->NaN
// ***************** operations *******************

/*
console.log(2+2)
console.log(2-2)
console.log(2*2)
console.log(2**2)
console.log(2/3)
console.log(2%3)
*/

let str1="hello"
let str2=" world"

// console.log(str1+str2);  //concatenation

// console.log(1 + "2");
// console.log("1" + "2");
// console.log("1" + 2 + 2);
// console.log(1 + 2 +"2");

// console.log(+true);
// console.log(+false);
// *************** comparisons ****************

// console.log("2" > 1);
// console.log(null > 0);
// console.log(null == 0);
// console.log(null >= 0);

// this is because the comparison signs(>,<,>=,<=) convert the null to treat it as a number, while equality doesn't
// same occurs in case of "undefined" but it returns false in every case

console.log("2" === 2);// "===" also checks the datatype