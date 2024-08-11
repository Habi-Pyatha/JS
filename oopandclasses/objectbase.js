const User={
    _email:'h@ho.com',
    _password:"abc",

    get email(){
        return this._email.toUpperCase()
    },
    set email(value){
        this._email=value
    }

}

const rea=Object.create(User)
console.log(rea.email);
