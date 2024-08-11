class User{
    constructor(username){
        this.username=username
    }
    logMe(){
        console.log("username:",this.username);
        
    }
}

class Teacher extends User{
    constructor(username,email,password){
       super(username)
        this.email=email
        this.password=password
    }

    addCourse(){
        console.log(`new course was added by  ${this.username}`);
        
    }
}

const chai=new Teacher("cahi","chai@gmail.com","5235")
chai.addCourse()

const tea=new User("masala tea")
tea.logMe()
chai.logMe()
console.log(chai instanceof Teacher);
console.log(chai instanceof User);

