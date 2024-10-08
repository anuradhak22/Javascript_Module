//1.forEach
let arr = [2,34,4,6,7]
let printe = function(el){
    console.log(el);
}
arr.forEach(printe);

//using objects
let arr1= [
{
    name:"Anuradha",
    marks:92
},

{
    name:"kartik",
    marks:98
}
]
arr1.forEach((student)=>{
console.log(student.name);

})

//2.map
let num = [1,2,3,4]
let pr = num.map((el)=>{
console.log(el*2);

})

//3.filter : if condition is trye then only it adds in ner Array
let num1 = [1,2,3,4,5,6,7,8]
let num2 = num1.filter((el)=>{
    return el%2==0    //returns even number only.
})
console.log(num2);


