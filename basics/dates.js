let myDate= new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleDateString());

// console.log(typeof myDate);

// let myCreatedDate=new Date(2020,0,24)
let myCreatedDate=new Date("01-16-2020")
// console.log(myCreatedDate.toString());

// console.log(myCreatedDate.toLocaleDateString());

let myTimeStamp= Date.now()
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Date.now()/1000);
// console.log(Math.floor(Date.now()/1000));

let newDate=new Date()
console.log(newDate);
console.log(newDate.getMonth());
console.log(newDate.getDay());


newDate.toLocaleDateString('default',{
    weekday:"long",
    
})