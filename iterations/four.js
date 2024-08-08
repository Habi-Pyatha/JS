const myObj={
    js:"javascript",
    cpp:"C++",
    rb:"Ruby",
    swift:"Swift by apple"
}

for (const key in myObj) {
//    console.log(myObj[key]);
   console.log(`${key} shortcut is for${myObj[key]}`);
   
   
}

const programming=["js","java","ruby"]
for (const key in programming) {
console.log(programming[key]);

}

// const map=new Map()
// map.set('IN',"India")
// map.set("usa","United States of america")
// map.set('IN',"India")

// for (const key in map) {
//     console.log(key);
    
// }