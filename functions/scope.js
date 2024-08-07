let a=10
const b=20
var c=30// give global scopoe and cause unnecessary erros

// console.log(a);



// console.log(b);
// console.log(c);

function one(){
    const username="hitesh"
    function two(){
        const website="Youtuebe"
        console.log(username);
        

    }
    // console.log(website);
    two()
    
}
// one()

if(true)
{
    const username="Ramesh"
    if(username==="Ramesh")
    {
        const website=" youtube"
        // console.log(username+website);
        
    }
    // console.log(website);
    
}
// console.log(username);


////=================intereseting=========

console.log(addone(5)
);

function addone(num){
    return num+1
}


addTwo(2) //there is error here move it after function to remove the error
const addTwo=function(num){ //sometimes called expression instead of function
    return num+2
}
