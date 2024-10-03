const user = {
    username : "Anuradha",
    email : "anuradhakarule@gmail.com",
    wel : function(){
          console.log(`${this.username}, Welcome to home page`);   //this refers to the current content. anuradha -> anushka
    }
}
user.wel();
user.username = "Anushka";
user.wel();
// this cannot be used in only function
function one(){
    username = "Kanika";   //if we write let it will give undefined.
    console.log(this.username);
    
    
}
one();
one.username = "Anuradha"   //kanika.
one();

// const two = (num1,num2) =>{   if we use {} then we have to write return keyword.
//     return num1+num2;
// }
// or

const two = (num1,num2) =>( num1+num2);  //if we use () then no need of return keyword.

console.log(two(3,4));

const three = () =>({username:"Anuradha"})  //if we want to write object in function then wrap it into ().
console.log(three());
