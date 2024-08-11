// let myName="Ramesh     "
// console.log(myName.truelength);
// // console.log(myName.trim().length);

let myHeros=["thor","spiderman"]
let heroPower={
    thor:"hammer",
    spiderman:"sling",
    getSpiderPower:function(){
        console.log(`Spidy power is ${this.spiderman}`);
        
    }
}
Object.prototype.hitesh=function(){/// shares to others array object string
    console.log(`hitesh is present in all objects`);
    
}
Array.prototype.heyHitesh=function(){       //does not share powers to others
    console.log("I am saying array babay");
    
}
// heroPower.hitesh()
// myHeros.hitesh()

// myHeros .heyHitesh()
// heroPower.heyHitesh()


//inheritance
const User={
    name:"chai",
    username:"goog@google.com"
}
const Teacher={
    makeVideo:true,

}
const TeachingSupport={
    isAvailable:false
}
const TASupport={
    makeAssignment:'JS Assignment',
    fullTime:true,
    __proto__:TeachingSupport
}
Teacher.__proto__=User


//modern syntax
Object.setPrototypeOf(TeachingSupport,Teacher) 

let anotherUsername="ChaiAurCode          "
String.prototype.trueLength=function(){
    // console.log(`${this.name}`);
    console.log(`${this}`);
    console.log(`The length is:${this.trim().length}`);
    
}
anotherUsername.trueLength()
"hitesh".trueLength()
"iceT   ea       ".trueLength()