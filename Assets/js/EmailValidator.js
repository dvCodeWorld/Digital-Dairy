 // Email Field Validation 

 function ValidateEmail(email) {

    let errorMsg = document.getElementById("errorEmail");

    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (email.match(validRegex)) {

        errorMsg.style.color = "Green";
        errorMsg.innerHTML = "Valid Email Bro";
        //console.log("Valid email");
        document.getElementById("password").disabled = false;
        document.getElementById("bulb-icon").style.pointerEvents = "unset";
        
        return true;

    } else {

        errorMsg.style.color = "Red";
        errorMsg.innerHTML = "Invalid Email h bahi !";
        document.getElementById("password").disabled = true;
        document.getElementById("bulb-icon").style.pointerEvents = "none";
       // console.log("InValid email !!!!!!!!!!!!!");

        return false;
    }

}