//control flow or logic flow
//<,>,<=,>=,!=,==,===,!==
//if
const isUserLoggedIn=true
if(isUserLoggedIn){

}

const temperature =41

// if(temperature<50){
//     console.log("less than 50");
    
// }
// else{
// console.log("temp is greater than 50");
// }

// const score=200
// if(score>100){
//     const power="fly"
//     console.log(`user power ${power}`);
    
// }

const balance =1000
// if(balance>500)console.log("test"),
// console.log("test2");
//dont do like this even if it is possible

// if(balance<500){
//  console.log("less than 500 ");
 
// }
// else if(balance < 750){
//     console.log("less than 750");
    
// }
// else{
//     console.log("less than 12000");
    
// }

const userLoggedIn =true
const debitCard=true
const loggedInFromGoogle=false
const loggedInFromEmail=true
if(userLoggedIn && debitCard){
    console.log("Allow to buy courses");
    
}
if(loggedInFromEmail || loggedInFromGoogle)
{
    console.log("userlogged in");
    
}
