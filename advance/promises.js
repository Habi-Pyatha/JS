// fetch('https://smthg.com').then().catch().finally()

const promiseOne=new Promise(function(resolve,reject){
    //Do an sync task
    //DB calls,crptography,network,
    setTimeout(function(){
        console.log('Async task is complete');
        resolve()
    },1000)
})

promiseOne.then(function(){
    console.log("Promise consumed");
    
})//have connection with resolve

new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Asunc Task 2");
        resolve()
        
    },1000)
}).then(function(){
    console.log("Asyn2 Resolved");
    
})

const promiseThree=new Promise(function(resolve,reject){
    setTimeout(function(){
    resolve({username:"chai",email:"chai@gmail.com"})
    },1000)
})
promiseThree.then(function(user){
    console.log(user);
    

})

const promiseFour=new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=true
        if (!error) {
            resolve({username:'habi Pyatha',password:"easy"})
        }
        else{
            reject("ERROR: Something went wrong")
        }
    },1000)
})

// promiseFour.then().catch()
promiseFour
.then((user)=>{
    console.log(user);
    return user.username
    
})
.then((username)=>{
    console.log(username);
    
})
.catch(function(error){
    console.log(error);
    
})
.finally(()=>{
    console.log("The Promise is either resolved or rejected");
    
})

const promiseFive=new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=true
        if (!error) {
            resolve({username:'javascript',password:"1234"})
        }
        else{
            reject("ERROR: JS went wrong")
        }
    },1000) 
})

// promiseFive.then(()=>{}) let use another approach
 async function consumePromiseFive(){
    try {
        const response=await promiseFive
    console.log(response);
    } catch (error) {
        console.log(error);
        
    }
    
 }
 consumePromiseFive()

//  async function getAllUsers(){
//     try {
//         const response=await fetch('https://jsonplaceholder.typicode.com/users')
//         // console.log(response);
        
//     const data=await response.json()
//     console.log(data);
//     } catch (error) {
//         console.log("E:",error);
        
//     }
    

//  }


//  getAllUsers()

 fetch('https://jsonplaceholder.typicode.com/users')
 .then((response)=>{
    return response.json()
 })
 .then((data)=>console.log(data)
)
.catch((error)=>console.log(error))
 