// Sign-Up Form Handler
document.getElementById('SignUpForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const newusername = document.getElementById('newusername').value;
    const newpassword = document.getElementById('newpassword').value;

    // Simple validation for empty fields
    if (newusername === "" || newpassword === "") {
        displayErrorMessage('SignUp-Error-Message', "Please fill in all fields!");
        return;
    }

    // Save username and password in localStorage (Note: This is insecure for passwords!)
    localStorage.setItem('username', newusername);
    localStorage.setItem('password', newpassword);

    alert("Sign Up Successfully! You can now login.");
    window.location.href = "login.html"; // Redirect to login page
});

// Login Form Handler
document.getElementById('LoginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    const storedusername = localStorage.getItem('username');
    const storedpassword = localStorage.getItem('password');

    if (username === storedusername && password === storedpassword) {
        alert("Login Successful!");
        window.location.href = "Welcome.html"; // Redirect to welcome page
    } else {
        displayErrorMessage('Login-Error-Message', "Invalid username or password!");
    }
});

// Function to display error messages
function displayErrorMessage(elementId, message) {
    const errorMessageElement = document.getElementById(elementId);
    if (errorMessageElement) {
        errorMessageElement.textContent = message;
    }
}
