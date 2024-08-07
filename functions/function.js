// console.log("h");
// console.log("i");
// console.log("t");


function sayMyName()
{
    console.log("h");
console.log("i");
console.log("t");
}
//sayMyName ->referece
// sayMyName()

// function addTwoNumbers(number1,number2)
// {
//     console.log(    number1+number2
//     );
    
// }
function addTwoNumbers(number1,number2)
{
    // let result=number1+number2
    // return result

    return number1+number2

}

const result=addTwoNumbers(3,5)
// console.log("result:",result);

function loginUserMessage(username="admin"){
    if(!username){ //if(username===undefined)
        console.log("Please enter the username");
        return
    }
    return `${username} just logged in`

}

// console.log(loginUserMessage("Hitesh"));
// console.log(loginUserMessage());
//... rest operator or spread operator
function calculateCartPrice(val1,val2,...num1){
    return num1

}
// console.log(calculateCartPrice(200,400,500,700));

const user={
    username:"hitesh",
    price:999
}
function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
    

}

// handleObject(user)
handleObject(
    {
        username:"sam",
        price:399
    }
)

const myNewArray=[200,400,600,1200]
function returnSecondValue(getArray){
    return getArray[1]

}
console.log(returnSecondValue(myNewArray));

