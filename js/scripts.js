let nameInput = document.getElementById('name');
let emailInput = document.getElementById('email');
let phoneInput = document.getElementById('contact');
let commentInput = document.getElementById('comment');
let submitButton = document.getElementById('submit');
let resetButton = document.getElementById('reset');
let contactForm = document.getElementById('contactform');

let nameError = document.getElementById('nameerror');
let emailError = document.getElementById('emailerror');
let phoneError =document.getElementById('contacterror');

document.addEventListener('DOMContentLoaded', load);

function load () {
    nameError.style.display = 'none';
    emailError.style.display = 'none';
    phoneError.style.display = 'none';

    nameInput.value = "";
    emailInput.value = "";
    phoneInput.value = "";
}

function validation () {
        let name = nameInput.value.trim();
        let nameRegex = /^[a-zA-Z\s]+$/;

        let isValidName = nameRegex.test(name);

        if(isValidName){
            nameerror.style.display = 'none';
        }
        else {
            nameerror.style.display = 'block';
            return true;
        }
    
            let email = emailInput.value.trim();
            let emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

            let isValidEmail = emailPattern.test(email);

            if(isValidEmail){
				emailerror.style.display = 'none';
			}
			else {
				emailerror.style.display = 'block';
				return true;
			}

            

            let contact = phoneInput.value.trim();
            let contactpattern = /^\d{10}$/;

            let isValidContact = contactpattern.test(contact);

            if(isValidContact){
                phoneError.style.display = 'none';
            }
            else{
                phoneError.style.display = 'block';
                return true;
            }

}

submitButton.addEventListener("click", function (event) {
    if (validation()) {
        event.preventDefault();
    }
    else{
        window.location.href = "index.html";
    }
});

resetButton.addEventListener("click", function () {
    // Clear error messages and fields on reset
    nameError.style.display = "none";
    emailError.style.display = "none";
    contactError.style.display = "none";
    nameInput.value = "";
    emailInput.value = "";
    phoneInput.value = "";
});