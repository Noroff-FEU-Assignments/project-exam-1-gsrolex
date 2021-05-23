const form = document.querySelector("#formContact");
const formValidated = document.querySelector("#formValidated");
const myName = document.querySelector("#myName");
const myNameError = document.querySelector("#myNameError");
const mySubject = document.querySelector("#mySubject");
const mySubjectError = document.querySelector("#mySubjectError");
const message = document.querySelector("#message");
const messageError = document.querySelector("#messageError");
const myEmail = document.querySelector("#myEmail");
const emailError = document.querySelector("#emailError");


function checkLength(value, len) {
    return value.trim().length > len;
}

function validateEmail(email) {
    const regEx = /\S+@\S+\.\S+/;
    const patternMatches = regEx.test(email);
    return patternMatches;
}

function keyEvent(event) {
    if (event.isComposing || event.keyCode === 229) {
        return;
    }

    if (validateForm(event) === true) {
        formValidated.style.display = "block";
    } else {
        formValidated.style.display = "none";
    }
}

function validateForm(event) {
    event.preventDefault();

    var nameValid = false;
    if (checkLength(myName.value, 4) === true) {
        nameValid = true;
        myNameError.style.display = "none";
    } else {
        myNameError.style.display = "block";
    }
    var mySubjectValid = false;
    if (checkLength(mySubject.value, 14) === true) {
        mySubjectValid = true;
        mySubjectError.style.display = "none";
    } else {
        mySubjectError.style.display = "block";
    }

    var messageValid = false;
    if (checkLength(message.value, 24) === true) {
        messageValid = true;
        messageError.style.display = "none";
    } else {
        messageError.style.display = "block";
    }

    var emailValid = false;
    if (validateEmail(myEmail.value) === true) {
        emailValid = true;
        emailError.style.display = "none";
    } else {
        emailError.style.display = "block";
    }

    const isFormValid = nameValid === true && mySubjectValid === true && messageValid === true && emailValid === true;

    if (isFormValid) {
        console.log("it works");
        return true;
    } else {
        console.log("it works not");
        return false;
    }
}

function submitForm() {
    if (validateForm(event) === true) {
        document.getElementById("formContact").reset();
        myNameError.style.display = "none";
        mySubjectError.style.display = "none";
        messageError.style.display = "none";
        emailError.style.display = "none";
    }
}

function intializeListeners() {
    form.addEventListener("submit", validateForm);
    formValidated.style.display = "none";
    myName.addEventListener("keyup", keyEvent);
    mySubject.addEventListener("keyup", keyEvent);
    message.addEventListener("keyup", keyEvent);
    email.addEventListener("keyup", keyEvent);
}

intializeListeners();
