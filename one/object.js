// const tinderUser=new Object()   //singleton
const tinderUser={} //non-singleton
 tinderUser.id="123abc"
 tinderUser.name="Sammy"
 tinderUser.isLoggedIn=false

// console.log(tinderUser);

const regularUser={
    email:"some@gmail.com",
    fullname:{
        userfullname:{
            firstname:"Hitesh",
            lastname:"chaudhary"
        }
    }
}

// console.log(regularUser.fullname.userfullname.lastname);

const obj1={
    1:"a",2:"b",
}

const obj2={
    3:"a",4:"b",
}

// const obj3=Object.assign({},obj1,obj2)
// console.log(obj3);

const obj3={...obj1,...obj2}
// console.log(obj3);

const user=[
    {
        id:1,
        email:"H@gmail.com"
    },
    {
        id:1,
        email:"H@gmail.com"
    },
    {
        id:1,
        email:"H@gmail.com"
    }
]

user[1].email
// console.log(tinderUser)

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLogged'));


const course={
    coursename:"js in hindi",
    price:"999",
    courseinstructor:"ramesh"
}

// course.courseinstructor
//destructuring
const {courseinstructor:instructor}=course

// console.log(courseinstructor);
console.log(instructor);

// const navbar=({company}) =>{

// }
// navbar(company="Hitesh")

//json
// {
//     "name":"hitesh",
//     "coursename":"js in hindi",
//     "prince":"free"
// }