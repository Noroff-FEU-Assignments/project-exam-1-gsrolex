const form = document.querySelector("#formContact");
const formValidated = document.querySelector("#formValidated");
const myName = document.querySelector("#myName");
const myNameError = document.querySelector("#myNameError");
const subject = document.querySelector("#subject");
const subjectError = document.querySelector("#subjectError");
const email = document.querySelector("#email");
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
    if (checkLength(myName.value, 0) === true) {
        nameValid = true;
        myNameError.style.display = "none";
    } else {
        myNameError.style.display = "block";
    }

    var subjectValid = false;
    if (checkLength(subject.value, 24) === true) {
        subjectValid = true;
        subjectError.style.display = "none";
    } else {
        subjectError.style.display = "block";
    }

    var emailValid = false;
    if (validateEmail(email.value) === true) {
        emailValid = true;
        emailError.style.display = "none";
    } else {
        emailError.style.display = "block";
    }

    const isFormValid = nameValid === true && subjectValid === true && emailValid === true;

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
        subjectError.style.display = "none";
        emailError.style.display = "none";
    }
}

function intializeListeners() {
    form.addEventListener("submit", validateForm);
    formValidated.style.display = "none";
    myName.addEventListener("keyup", keyEvent);
    subject.addEventListener("keyup", keyEvent);
    email.addEventListener("keyup", keyEvent);
}

intializeListeners();
