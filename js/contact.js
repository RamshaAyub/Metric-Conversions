document.getElementById('contact-form').addEventListener('submit' , function(event){
    event.preventDefault();
    validateForm();
});

function validateForm(){
    var isValid = true;


    // Validate Name
    var name = document.getElementById('username').value.trim();
    var nameError = document.getElementById('nameError');

    if(name === ""){
        nameError.textContent = "Username is required"
        nameError.style.display = "block";
        isValid = false;
    }else {
        nameError.textContent = "";
        nameError.style.display = "none";
    }



    // Validate Contact
    var number = document.getElementById('phone').value.trim();
    var numberError = document.getElementById('numberError');
    var contactNumberPattern = /^(?:\+92|03)[0-9]{9,10}$/;

    if(number === ""){
        numberError.textContent = "Contact number is required"
        numberError.style.display = "block";
        isValid = false;
        }else if(!contactNumberPattern.test(number)){
            numberError.textContent = "Invalid contact number format"
            numberError.style.display = "block";
            isValid = false;
            }
    else {
        numberError.textContent = "";
        numberError.style.display = "none";
    }



    // Validate Message
    var message = document.getElementById('message').value.trim();
    var messageError = document.getElementById('messageError');

    if(message === ""){
        messageError.textContent = "Message is required"
        messageError.style.display = "block";
        isValid = false;
    }else {
        messageError.textContent = "";
        messageError.style.display = "none";
    }



    // Validate Email
    var email = document.getElementById('email').value.trim();
    var emailError = document.getElementById('emailError');
    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if(email === ""){
        emailError.textContent = "Username is required"
        emailError.style.display = "block";
        isValid = false;
        }else if(!emailPattern.test(email)){
            emailError.textContent = "Invalid email format"
            emailError.style.display = "block";
            isValid = false;
            }
    else {
        emailError.textContent = "";
        emailError.style.display = "none";
    }

    if (isValid) {
        alert("Form submitted successfully");
        document.getElementById('contact-form').reset();
    }
}