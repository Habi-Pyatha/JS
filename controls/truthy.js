const userEmail=[]
if (userEmail) {
console.log("Got user email");

}
else{
    console.log("Dont have user email");
    
}

//falsy values

// false, 0,-0,BigInt 0n,"",null,undefined,NaN

//truthy values

// "0",'false'," ",[],{},function(){}

if(userEmail.length===0){
    console.log("Array is empty");
    
}

const empyObj={}

if (Object.keys(empyObj).length===0) {
    console.log("Object is empty");
    
}