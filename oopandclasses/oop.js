//object literal

const user={
    username:"Ramesh",
    loginCount:8,
    signedIn:true,
    getUserDetails:function(){
        // console.log("Got user details from database");
        // console.log(`username:${this.username}`);
        console.log(this);
        // console.log("cheeck:",user.username);
        
        
        
        
    }
}
// console.log(user.username);
// console.log(user.getUserDetails());
// console.log(this);
// const user2={
//     username:"Suresh",
//     loginCount:8,
//     signedIn:true,
//     getUserDetails:function(){
//         // console.log("Got user details from database");
//         // console.log(`username:${this.username}`);
//         console.log(this);
//         // console.log("cheeck:",user.username);
        
        
        
        
//     }
// }

function User(username,loginCount,isLoggedIn){
    this.username=username //last one is given to use
    this.loginCount=loginCount
    this.isLoggedIn=isLoggedIn
    this.greeting=function(){
        console.log(`Welcome ${username}`);
        
    }
    return this // return this happens even if return is not written in this case

}

const userOne=new User("hitesh",12,true)
const userTwo=new User("Chai",11,false)
console.log(userOne.constructor);
// console.log(userTwo.username);
