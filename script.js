const loginForm = document.getElementById("loginForm");
const registerForm = document.getElementById("registerForm");
const showRegisterForm = document.getElementById("showRegisterForm");
const showLoginForm = document.getElementById("showLoginForm");

// Show Register Form
showRegisterForm.addEventListener("click", () => {
  loginForm.style.display = "none";
  registerForm.style.display = "block";
});

// Show Login Form
showLoginForm.addEventListener("click", () => {
  registerForm.style.display = "none";
  loginForm.style.display = "block";
});
