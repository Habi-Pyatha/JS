function multiplyBy5(num){
    return num*5
}
// multiplyBy5(6)

multiplyBy5.power=2
console.log(multiplyBy5(5));
console.log(multiplyBy5.power);
console.log(multiplyBy5.prototype);

function createUser(username,score){
    this.username=username
    this.score=score
    //return this

}

createUser.prototype.increment=function(){
    this.score++
}
createUser.prototype.printMe=function(){
    console.log(`Score is ${this.score}`);
    
}
const chai=new createUser("Chai",24)
const tea=new createUser('Tea',250)

chai.printMe()
