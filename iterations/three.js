// for of ///array specific

const arr=[1,2,3,4,5]

for (const num of arr) {
    // console.log(num);
    
    
}

const greeting="Hello World!"
for (const element of greeting) {
    if(element==" ")break;
    // console.log(`Each char is ${element}`);
    
    
}

//Maps

const map=new Map()
map.set('IN',"India")
map.set("usa","United States of america")
map.set('IN',"India")
console.log(map);

for (const [key,value] of map) {
    console.log(key,'=',value);
    // console.log();
    
}

const myObj={
    "Game1":"NFS",
    'game2':'Spiderman'
}

// for (const [key,value] of myObj) {
//     console.log(key,'=',value);

// }
// for of not working on objects
