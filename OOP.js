// Organize data and logic in objects (properties and methods)
// Organize code in logical entities

class Validator{
    static REQUIRED = 'REQUIRED'
    static MIN_LENGTH = 'MIN_LENGTH'
    static validate(value, flag, validatorLen){
        if(flag === this.REQUIRED){
            return value.trim().length > 0
        }

        if(flag === this.MIN_LENGTH){
            return value.trim().length >= validatorLen
        }
    }
}

class DisplayUser{
    constructor(uName, uPassword){
        this.uName = uName
        this.uPassword = uPassword
    }

    greeting(){
        console.log(`I am ${this.uName}`)
    }
}

class UserInput{
    constructor(){
        this.form = document.getElementById('form')
        this.usernameInput = document.getElementById('username')
        this.passwordInput = document.getElementById('password')

        this.form.addEventListener('submit', this.signUpHandler.bind(this))
    }

    signUpHandler(e){
        e.preventDefault()

        const enteredUsername = this.usernameInput.value
        const enteredPassword = this.passwordInput.value
        if(!Validator.validate(enteredUsername, Validator.REQUIRED) && !Validator.validate(enteredPassword, Validator.MIN_LENGTH, 5)){
            alert('invalid input')
            return
        }

        let newUser = new DisplayUser(enteredUsername, enteredPassword)
        newUser.greeting()
        console.log(newUser);
    }
}