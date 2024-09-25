let name = "Anuradha";
let repoCount = 50;
console.log(`hey my name is ${name} and my repository count is ${repoCount}`);
// or
console.log("hey my name is " + name +" and my repository count is "+ repoCount);
// to declare a string we can also use
let str = new String("hello");
console.log(str);
console.log(str[0]) //h
console.log(str.length);
console.log(str.toUpperCase());
console.log(str.charAt(2));
console.log(str.indexOf('o'));

const str2 = str.substring(0,2);   //neg indexing is not allowed
console.log(str2);
const str3 = str.slice(0,2);
console.log(str3);


const str4 = "  anuradha   "
console.log(str4.trim());  // remove extra spaces

const str5 = "anuradha";
console.log(str5.replace("radha","shka"))
console.log(str5.includes("anu"));  //true

 


