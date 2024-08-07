const name="hitesh"
const repoCount=50

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName=new String('hitesh-hc-gaming')
// console.log(gameName[0]);

// console.log(gameName.__proto__);
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf("t"));

const newString=gameName.substring(0,4)
console.log(newString);

const anotherString=gameName.slice(-8,4)
console.log(anotherString);

const newString1="    hitesh       "
console.log(newString1);

console.log(newString1.trim());


const url="https://youtube.com/hitesh%20choudary"

console.log(url.replace("%20","-"));
console.log(url.includes('youtube'));
console.log(url.includes('youtu67be'));


console.log(gameName.split('-'));
