function validateForm() {
    let name = document.getElementById("fname").value.trim();
    let username = document.getElementById("un").value.trim();
    let email = document.getElementById("em").value.trim();
    let password = document.getElementById("pass").value;
    let confirmPassword = document.getElementById("cpass").value;

    if (name === "") {
        alert("Please enter your full name");
        return false;
    }

    if (username === "") {
        alert("Please enter a valid username");
        return false;
    }

    if (!email.includes("@") || !email.includes(".")) {
        alert("Please enter a valid email");
        return false;
    }

    if (password.length < 10 || password.length > 30) {
        alert("Password length should be between 10 and 30 characters");
        return false;
    }

    if (password !== confirmPassword) {
        alert("Passwords don't match");
        return false;
    }

    return true;
}