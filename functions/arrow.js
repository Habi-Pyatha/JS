const user={
    username:"hitesh",
    price:999,
    welcomeMessage:function(){
            console.log(`${this.username}, welcome to website`);
          console.log(this);
            
    }

}

// user.welcomeMessage()

// user.username="sam"
// user.welcomeMessage()

// console.log(this);

// function chai(){
//     let username="hitesh"
//     console.log(this.username);
    
// }
// chai()

// const chai=function(){
    //     let username="hitesh"
//     console.log(this.username);
// }

//  function chai(){}
// const chat=function(){}
const chai=()=>{
        let username="hitesh"
  console.log(this);
}
// chai()
//arrowfunction
// const addTwo=(num1,num2) => {
//     return num1 + num2  //basic
// }
// const addTwo=(num1,num2) =>  num1 + num2 // implicit
// const addTwo=(num1,num2) =>  (num1 + num2 )
const addTwo=(num1,num2) =>  ({username:"hitesh"})

console.log(addTwo(2,4));


// const myArray=[2,5,6,7,3]

// myArray.forEach(()=>())