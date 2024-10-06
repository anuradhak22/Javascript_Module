// destructuring the objects.
const course = {
  coursename : "Javascript",
  id : 4
}
const {coursename} = course;
console.log(coursename);
// or
const {coursename:name} = course;
console.log(name);

// Math in objects
let c = Math.floor(-5.9999)  //returns nearest and smallest value.
console.log(c);
let d = Math.ceil(-5.4);
console.log(d);

console.log(Math.random());

//to generate 1 to 10 random values
let num = Math.random();
num = num+num*10
num = Math.floor(num);
console.log(num+1);

//game to guess a random number
let max = prompt("Enter the max value");
let random = Math.floor(Math.random()*10)+1;
let guess = prompt("Enter the number");
while(true){
  if(guess == "quit"){
    console.log("user quit");
    break;
  }
  if(guess == random){
    console.log("you guessed write!!, random number was",random);
    break;
  }
  else if(guess>random){
    console.log("number is too large");
    guess = prompt("Enter the number");
  }
  else{
    console.log("number is too small");
    guess = prompt("Enter the number");
  }
}