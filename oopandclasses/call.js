function SetUsername(username){
    //compolex DB call
    this.username=username
}

function createUser(username,email,password){
    SetUsername.call(this,username) //only reference se()

    this.email=email
    this.password=password
}

const chai=new createUser("chai","chai@gmail.com","123")
const bhai=new createUser("bhai","bhai@gmail.com","123")
console.log(chai);
console.log(bhai);
console.log(createUser);

