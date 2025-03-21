const login=document.getElementById("btn-login")
login.addEventListener("click",()=>{
    mine()
})

var authorised = false

var screen = document.getElementById("mainContainer")


function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

let mailerror = document.getElementById('mailerror')



let email = document.getElementById('email')
let password = document.getElementById('password')
let error = document.getElementById('error')
let perror = document.getElementById('ptext')
function handleForm() {
    let text =
    (email.value == "" || password.value == "")
        ? "Please fill all of the fields" : ""
    let merror = (isValidEmail(email.value))? "" : "invalid email"
  
    error.innerText = text
    perror.innerText = (password.value.length < 6)? "must be at least 7 chatacters" : ""
    mailerror.innerText = merror

    if(isValidEmail(email.value) && password.value.length > 6){
            mailerror.innerText = ""
            perror.innerText = ""
            alert("Login succesful")
            mine()
    }
  }


function mine(){
    screen.style.display = authorised? "flex" : "none"
    authorised = !authorised
}