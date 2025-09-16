// Simple validation for login and register

// Login form
const loginForm = document.getElementById("loginForm");
if (loginForm) {
  loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const email = document.getElementById("loginEmail").value;
    const password = document.getElementById("loginPassword").value;

    if (email && password) {
      alert("Login Successful!");
      // Here you can redirect: window.location.href = "shop.html";
    } else {
      alert("Please enter valid details.");
    }
  });
}

// Register form
const registerForm = document.getElementById("registerForm");
if (registerForm) {
  registerForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("regName").value;
    const email = document.getElementById("regEmail").value;
    const password = document.getElementById("regPassword").value;
    const confirm = document.getElementById("regConfirm").value;

    if (password !== confirm) {
      alert("Passwords do not match!");
      return;
    }

    if (name && email && password) {
      alert("Registration Successful!");
      window.location.href = "login.html";
    } else {
      alert("Please fill all fields correctly.");
    }
  });
}
