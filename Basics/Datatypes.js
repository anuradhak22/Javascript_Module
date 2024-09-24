/*
primitive and non primitive
7 types : number string boolean null undefined bigInt symbol.
null is just empty not 0.
non primitive : Array objects functions  .....reference
*/
const id = Symbol('123');
const anotherid = Symbol('123');
console.log(id===anotherid);  //false..symbol contains unique value only

// typeof null = object


// *************************************************************************************
// stack(primitive) and heap(non primitive).

let channelname = "anuradhakarule"
channelname2 = channelname
channelname2 = "anishaK"
console.log(channelname);
console.log(channelname2);

let obj = {
    email :"anuradha@google.com",
    id :4
}
obj2 = obj
obj2.email = "anuradha@gmail.com";
console.log(obj);
console.log(obj2);
