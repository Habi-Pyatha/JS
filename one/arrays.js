//array

const myArr=[0,1,2,3,4,5] 
// const myArr=[0,1,2,3,4,5,true,"himal"] 
console.log(myArr[0])

const myHeors=["ram","spiderman","batman"]

const myArr2=new Array(1,2,2,3)
console.log(myArr2[2]);

//Array methods 
//  myArr.push(6)
//  myArr.push(7)
// myArr.unshift(12)
// myArr.pop();
//  console.log(myArr);

// console.log(myArr.indexOf(3));
const newArr=myArr.join()
console.log(myArr);
console.log(typeof newArr);

//slice, splice
console.log("a ",myArr);
const myn1=myArr.slice(1,3)
console.log(myn1);
console.log("b ",myArr);

const myn2=myArr.splice(1,3)
console.log("c ",myArr);
console.log(myn2);

 