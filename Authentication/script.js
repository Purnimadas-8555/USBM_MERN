document.getElementById("SignUp-form").addEventListener("submit",function(event) {
    event.preventDefault();       //prevent form from submitting

    //get form values
    const username = document.getElementById("username").values;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    //basic validation

    if(username && email && password)
    {
        document.getElementById("message").textContent = "Sign Up Successful !";
        document.getElementById("message").style.color = "green";
    } else {
        document.getElementById("message").textContent = "Please fill out all fields !";
        document.getElementById("message").style.color = "red";
    }

    //Reset form
    document.getElementById("SignUp-form").reset();

});