//reduce

const myNums=[1,2,3]


// const myTotal=myNums.reduce(function (acc,currval) {
//     console.log(`acc:${acc} and currval:${curval}`);
    
//     return acc+currval
// },0 )

const myTotal=myNums.reduce( (acc,cur)=>acc+cur,0)
console.log(myTotal);

const shoppingCart=[
    {
        itemname:"js course",
        price:555
    },
    {
        itemname:"py course",
        price:5555
    },
    {
        itemname:"java course",
        price:1000
    },
]

const priceToPay=shoppingCart.reduce((acc,item)=>{return acc+item.price},0)
console.log(priceToPay);
