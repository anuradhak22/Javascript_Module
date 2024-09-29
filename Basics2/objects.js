// Declare an object

const sym = Symbol("Key1");

const obj = {
    name: "Anuradha",
    // sym:"Mykey",   //it is not used as symbol its datatype is key.
    [sym] : "MyKey",  //its datatype is symbol.
    Age: 19,
    location: "Pune",
    isLoggedin : false,
    lastLogged :["Monday","Tuesday"]
}
console.log(obj.name);
console.log(obj["name"]);
// console.log(typeof obj.sym);  //string
console.log(obj[sym]);

obj.name = "Anushka Lonkar";
// Object.freeze(obj); //now the value cannot be changed.
obj.name = "Anushka";
console.log(obj);


obj.greeting = function(){
    console.log("hello");

}
console.log(obj.greeting);
console.log(obj.greeting());
 
obj.greeting2 = function(){
    console.log(`Hey Hello ${this.name}`);
}
console.log(obj);



