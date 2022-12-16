
const form = document.querySelector("form"); 

const nameInput = document.querySelector('input[name="name"]');
const validationMessageForName = document.getElementById("nameValidation");

const emailInput = document.querySelector('input[name="email"]');
const validationMessageForEmail = document.getElementById("emailValidation");
const validationMessageForEmailRegex = document.getElementById("emailValidationHiddenRegex");

const bodyInput = document.querySelector('textarea[name="textarea"]');
const validationMessageForBody = document.getElementById("bodyValidation");

const regexPattern="[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{1,63}$";

const validateInputsName = () => {
    if(nameInput.value === ""){
        validationMessageForName.classList.remove("hidden");
    }
    else{
        validationMessageForName.classList.add("hidden");
    }  
}

const validateInputsBody = () => {
    if(bodyInput.value === ""){
        validationMessageForBody.classList.remove("hidden");
    }
    else{
        validationMessageForBody.classList.add("hidden");
    }  
}

const regexEmail= () => {
    if(!emailInput.value.match(regexPattern)){
        validationMessageForEmailRegex.classList.remove("hiddenRegex");
    }
    else{
        validationMessageForEmailRegex.classList.add("hiddenRegex");
    }
}

const validateInputsEmail= () => {
    if(emailInput.value === ""){
        validationMessageForEmail.classList.remove("hidden");
        validationMessageForEmailRegex.classList.add("hiddenRegex");
    }
    else{
        validationMessageForEmail.classList.add("hidden");
    }
}



form.addEventListener("submit", (e) => {
      e.preventDefault();
      validateInputsName();
      validateInputsBody();
      regexEmail();
      validateInputsEmail();
     
});




