// Primitive datatypes ...call by values

//7 types :string,  Number, Boolean, null, undefined, Symbol, BigInt

//
const score=100 

const isLoggedIn= true
const scoreValue=100.3
const outsideTemp=null
let userEmail;

const id= Symbol("123")
const anotherId=Symbol('123')
console.log(id==anotherId);

const bigNumber=23424323432234234232323132n
console.log(typeof bigNumber);

//Reference type (Non primitive)


// Array, Objects, Functions 

const heros=["shaktiman","superman","spiderman"]//array
let myObj={//object
    name:"hitesh",
    age:22,

}

const myFunction= function(){
    console.log("Hello World")
}

console.log(typeof heros);

///----------------memory types-----------


//stack (Primitive), heap(non-primitive)

let myYoutubename="gamininggodly.com"
let anothername=myYoutubename
anothername="chaiaurcode"
console.log(anothername);
console.log(myYoutubename);

let user={
    email:"user@gmail.com",
    upi:"user@yub"
}

let userTwo=user
userTwo.email="anime@gmail.com"

console.log(user.email);
console.log(userTwo.email);

