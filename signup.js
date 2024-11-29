// Event listener for the signup form submission
document.getElementById("signupForm").addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent the default form submission behavior

    // Get form input values
    const name = document.getElementById("signup_name").value.trim();
    const email = document.getElementById("signup_email").value.trim();
    const password = document.getElementById("signup_password").value.trim();
    const confirmPassword = document.getElementById("signup_confirm_password").value.trim();

    // Validation checks
    if (!validateName(name)) {
        alert("Name must be at least 3 characters long and contain only alphabets.");
        return;
    }

    if (!validateEmail(email)) {
        alert("Please enter a valid email address.");
        return;
    }

    if (!validatePassword(password)) {
        alert(
            "Password must be at least 8 characters long and include at least:\n" +
            "- 1 uppercase letter\n" +
            "- 1 lowercase letter\n" +
            "- 1 number\n" +
            "- 1 special character"
        );
        return;
    }

    if (password !== confirmPassword) {
        alert("Passwords do not match!");
        return;
    }

    // Check for duplicate email and save user data
    const users = JSON.parse(localStorage.getItem("users")) || []; // Retrieve existing users from localStorage
    if (users.some((user) => user.email.toLowerCase() === email.toLowerCase())) {
        alert("Email is already registered. Please log in.");
        return;
    }

    // Add new user to localStorage
    users.push({ name, email, password });
    localStorage.setItem("users", JSON.stringify(users));

    alert("Signup successful! Please log in.");
    window.location.href = "login.html"; // Redirect to login page
});

// Helper function to validate name
function validateName(name) {
    const nameRegex = /^[A-Za-z\s]{3,}$/; // Name must be at least 3 characters long and only contain alphabets and spaces
    return nameRegex.test(name);
}

// Helper function to validate email
function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Standard email format
    return emailRegex.test(email);
}

// Helper function to validate password strength
function validatePassword(password) {
    const passwordRegex =
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    // Password must be at least 8 characters long and include:
    // - 1 uppercase letter
    // - 1 lowercase letter
    // - 1 digit
    // - 1 special character
    return passwordRegex.test(password);
}
