// Write sequential series of execution steps/tasks
// top to bottom code execution


const form = document.getElementById('user-input')
const userNameInput = document.getElementById('username')
const passwordInput = document.getElementById('password')

function signUpHandler(e){
    e.preventDefault()

    const enteredUsername = userNameInput.value
    const enteredPassword = passwordInput.value

    if(enteredUsername.trim().length === 0){
        alert('invalid input - username required')
        return
    }
    if(enteredPassword.trim().length <= 5){
        alert('invalid input - password is not valid')
        return
    }

    let user = {
        username: enteredUsername,
        password: enteredPassword
    }

    console.log(`Hi I am ${user.username}`)
}

form.addEventListener('submit', signUpHandler)