// Organize code in (pure) functions and clearly defined tasks
// Pass data around via parameters
const REQUIRED = 'REQUIRED'
const MIN_LENGTH = 'MIN_LENGTH'

function connectForm(formId, fn){
    const form = document.getElementById(formId)
    form.addEventListener('submit', fn)
}

connectForm('user-input', signUpHandler)

function signUpHandler(e){
    e.preventDefault()

    const enteredUsername = userInput('username')
    const enteredPassword = userInput('password')
    
    try {
        let user = createUser(enteredUsername, enteredPassword)
        displayUser(user)
    } catch (error) {
        showAlert(error.message)
    }
}

function userInput(elementId){
    return document.getElementById(elementId).value
}

function validator(value, flag, len){
    if(flag === REQUIRED){
        return value.trim().length > 0
    }
    if(flag === MIN_LENGTH){
        return value.trim().length > 5
    }
}

function createUser(username, password){
    if(!validator(username, REQUIRED) && !validator(password, MIN_LENGTH, 5)){
        throw new Error('invalid username')
    }

    return {
        username, 
        password
    }
}

function displayUser(user){
    console.log(`Hi I am ${user.username}`)
}

function showAlert(msg){
    alert(msg)
}