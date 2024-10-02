
var c = 300;
if(true){
    let a = 10;
    const b = 20;
    var c = 30;
}
// console.log(a);   error defined inside the block
// console.log(b);   error
console.log(c);   //no error ..so do not use var.
 

// scope using two functions...nested scope.

function one(){
    const name = "Anuradha";

    function two(){
        console.log(name);  
        const web = "chrome";

    }
    // console.log(web);   error called from outside it is declared inside.

    two()
}
one()


// declaring function another way

add(5);  //error we cannot call at above but we can call in simple fuction declartion. 
const add = function(num ){
return num+1;
}



console.log(addtwo(5));  //7 no error
function addtwo(num1){
    return num1+2;
}
