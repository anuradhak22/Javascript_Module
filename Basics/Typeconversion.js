let score =" 33"
console.log(typeof score);
// converting the score string to a number.
let change = Number(score)
console.log(typeof change);
console.log(change);
// Now we consider the following
let a = "33abc"
let change2 = Number(a);
console.log(typeof change2);
console.log(change2); // the output will be NaN bcz 33abc is not pure a number.
/*
33 - number
"33abc" - NaN
null - 0
undefined - NaN
true - 1; false - 0
*/
let a2 = 1;
let change3 = Boolean(a2);
console.log(change3)

/*
1 - true
0 - false
"" - false
"Anuradha" - true
*/