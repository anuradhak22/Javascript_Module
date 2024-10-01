// Declare a function
function name(){
    console.log("Anu");
    console.log("Radha");
}
name()

function ADdNumbers(num1 , num2){   //parameters  when we declare
console.log(num1+num2);
}
ADdNumbers(3,4)   //Arguments /..when we call 
const result = ADdNumbers(3,4) 
console.log(result);   //undefined ...the console.log can be stored we have to return something

// or

function AddNumbers(n1,n2){
return n1+n2;
}
const res = AddNumbers(4,5);
console.log(res);


// Another type to write function

function User(username){
  return `${username} has logged in`
}
console.log(User("Anuradha"));
console.log(User());  //undefined.

// to insert n numbers of parameters in function
function add(...num){
return num;
}
console.log(add(3,4,5));  //return a array [ 3, 4, 5 ]

// to convert object into function
const userName = {
    Name:"Anuradha",
    Email:"anuradha@gmail.com"
}
function handleobject(anyobj){
    console.log(`MY name is ${anyobj.Name} and email is ${anyobj.Email}`);
    
}
handleobject(userName);
// or
handleobject({
    Name:"Anushka",
    Email:"anushka@gmail.com"
})   //make obj in the call sec itself.

// funnction using Array


let arr = [10,20,304,40];
function func(getArray){
return getArray[1];
}
console.log(func(arr))