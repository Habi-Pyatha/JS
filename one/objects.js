//singleton
//Object.create
//object literals
const mySym=Symbol("key1")
const JsUser={
    name:"Hitesh",
    "full name":"Hitesh Chaudhary",
    [mySym]:"myKey1",
    age:"15",
    location:"Jaipur",
    email:"hitsh@gmail.com",
    isLoggedIn:false,
    lastLoginDays:["Monday","Saturday"]
}


// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(typeof JsUser[mySym]);


JsUser.email="hitesh@chatgpt.com"
// Object.freeze(JsUser)

JsUser.email="hitesh@microsoft.com"
// console.log(JsUser);

JsUser.greeting=function(){
    console.log("Hello JS user");
    
}
JsUser.greetingTwo=function(){
    console.log(`Hello JS user, ${this.name}`);
    
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
