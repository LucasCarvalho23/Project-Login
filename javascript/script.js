let inputEmailId = document.querySelector ("#inputEmailId")
let inputPassId = document.querySelector ("#inputPassId")
let buttonLoginId = document.querySelector ("#buttonLoginId")
let buttonForgotId = document.querySelector ("#buttonForgotId")

let regexEmail = /([a-z,_,#,&]+)@([a-z]+).com(.br)?/g 
let regexPass = /\d+/g

buttonLoginId.addEventListener('click', validation)
buttonForgotId.addEventListener ('click', forgotPass)


function validation() {

    if (inputEmailId.value.length == 0 || inputPassId.value.length == 0) {
        alert ('Error')
    } else if ((regexEmail.test(inputEmailId.value) != true) || (regexPass.test(inputPassId.value) != true)) {    
        alert ('Error. Invalid Data.')
    } else {
        window.location.href = 'http://127.0.0.1:5500/Exerc%C3%ADcios%20HTML%20+%20CSS/26.%20Forms/009.ProjectLogin/html/finish.html'
    }

}


function forgotPass() {
    if (inputEmailId.value.length == 0) {
        alert ('Error')
    } else if (regexEmail.test(inputEmailId.value) != true) {
        alert ('Error. Invalid Data.')
    } else {
        window.location.href = 'http://127.0.0.1:5500/Exerc%C3%ADcios%20HTML%20+%20CSS/26.%20Forms/009.ProjectLogin/html/forgot.html'
    }
}
