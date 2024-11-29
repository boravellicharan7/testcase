// Event listener for login form submission
document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent default form submission

    // Retrieve input values
    const email = document.getElementById("login_email").value.trim();
    const password = document.getElementById("login_password").value.trim();

    // Basic validation to check if fields are not empty
    if (!email || !password) {
        alert("Both fields are required!");
        return;
    }

    // Retrieve users from localStorage
    const users = JSON.parse(localStorage.getItem("users")) || [];

    // Check if the provided email and password match a user in localStorage
    const user = users.find((user) => user.email === email && user.password === password);

    if (user) {
        alert(`Welcome back, ${user.name}!`);
        // Redirect the user to the dashboard or home page
        window.location.href = "home.html";
    } else {
        // Show error if no match is found
        alert("Invalid email or password!");
    }
});
