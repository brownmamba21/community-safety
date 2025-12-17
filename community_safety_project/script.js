// ================================
// Community Safety Portal Script
// ================================

// Wait until the page is fully loaded
document.addEventListener("DOMContentLoaded", function () {

    // -----------------------------
    // Signup Form
    // -----------------------------
    const signupForm = document.getElementById("signupForm");
    const signupMessage = document.getElementById("signupMessage");

    if (signupForm) {
        signupForm.addEventListener("submit", function (e) {
            e.preventDefault();

            const name = document.getElementById("signupName").value;
            const email = document.getElementById("signupEmail").value;
            const password = document.getElementById("signupPassword").value;

            fetch("backend/signup.php", {
                method: "POST",
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded"
                },
                body: `name=${encodeURIComponent(name)}&email=${encodeURIComponent(email)}&password=${encodeURIComponent(password)}`
            })
            .then(response => response.text())
            .then(data => {
                signupMessage.textContent = data;
                signupMessage.style.color = "green";
                signupForm.reset();
            })
            .catch(() => {
                signupMessage.textContent = "Error creating account.";
                signupMessage.style.color = "red";
            });
        });
    }

    // -----------------------------
    // Login Form
    // -----------------------------
    const loginForm = document.getElementById("loginForm");
    const loginMessage = document.getElementById("loginMessage");

    if (loginForm) {
        loginForm.addEventListener("submit", function (e) {
            e.preventDefault();

            const email = document.getElementById("loginEmail").value;
            const password = document.getElementById("loginPassword").value;

            fetch("backend/login.php", {
                method: "POST",
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded"
                },
                body: `email=${encodeURIComponent(email)}&password=${encodeURIComponent(password)}`
            })
            .then(response => response.text())
            .then(data => {
                loginMessage.textContent = data;
                loginMessage.style.color = data.includes("successful") ? "green" : "red";
                loginForm.reset();
            })
            .catch(() => {
                loginMessage.textContent = "Login failed.";
                loginMessage.style.color = "red";
            });
        });
    }

    // -----------------------------
    // Incident Report Form
    // -----------------------------
    const reportForm = document.getElementById("reportForm");
    const formMessage = document.getElementById("formMessage");

    if (reportForm) {
        reportForm.addEventListener("submit", function (e) {
            e.preventDefault();

            const location = document.getElementById("location").value;
            const emergency = document.getElementById("emergency").value;
            const description = document.getElementById("issue").value;

            fetch("backend/report.php", {
                method: "POST",
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded"
                },
                body:
                    `location=${encodeURIComponent(location)}` +
                    `&emergency=${encodeURIComponent(emergency)}` +
                    `&description=${encodeURIComponent(description)}`
            })
            .then(response => response.text())
            .then(data => {
                formMessage.textContent = data;
                formMessage.style.color = "green";
                reportForm.reset();
            })
            .catch(() => {
                formMessage.textContent = "Error submitting report.";
                formMessage.style.color = "red";
            });
        });
    }

});
