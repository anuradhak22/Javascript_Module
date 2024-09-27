let mydate = new Date;
console.log(mydate.toDateString()); // Fri Sep 27 2024
console.log(mydate.toString()); //Fri Sep 27 2024 15:44:41 GMT+0000 (Coordinated Universal Time)
console.log(mydate.toISOString()); //2024-09-27T15:44:41.560Z
console.log(mydate.toJSON()); //2024-09-27T15:44:41.560Z
console.log(mydate.toLocaleDateString()); //9/27/2024
console.log(mydate.toLocaleString()); // 9/27/2024, 3:44:41 PM


console.log(typeof mydate);  //object.

let date2 = new Date(2024, 8 ,22);
console.log(date2.toDateString());  //Sun Sep 22 2024

let date3 = new Date("2025-1-14");
console.log(date3.toDateString());  //Tue Jan 14 2025

let myTimeStamp =  Date.now();
console.log(myTimeStamp);
console.log(Math.floor(Date.now()/1000)); //convert in second


let Date4 = new Date();
console.log(Date4.getMonth() +1);
console.log(Date4.getDay());
Date4.toLocaleString('default',{
    weekday:"long"

})




