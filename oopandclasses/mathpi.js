const descripter=Object.getOwnPropertyDescriptor(Math,"PI")
// console.log(descripter);


// console.log(Math.PI);

const chai={
    name:"ginger chai",
    prince:666,
    isAvailable:true,
    orderChai:function(){
        console.log("no tea");
        
    }
}
Object.defineProperty(chai,"name",{
    writable:false,
    enumerable:false,
})
console.log(Object.getOwnPropertyDescriptor(chai,"name"));
console.log(Object.getOwnPropertyDescriptor(chai,"name"));
for (let [key,value] of Object.entries(chai)) {
    if(typeof value!=='function'){

        console.log(`${key}:${value}`);
    }
    
    
}

