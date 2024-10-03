//Immediately Invoked Function Expression  (IIFE).
// to avoid the global scope pollution we use IIFE. 
(function one(){
    console.log("DB connected");    //name IIFE***
    
}) ()   ; //whole function must be in () and followed by () to invoke immediately  

//using arraow function
(() => {               // unnamed IIFE****
    console.log("HI")
})();
//also can be used as
((name) => { 
    console.log(`DB connected ${name}`); 
})("Kanika");
