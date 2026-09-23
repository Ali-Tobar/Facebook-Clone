const loginForm = document.getElementById("loginForm");
const emailOrMobile = document.getElementById("emailOrMobile");
const password = document.getElementById("password");

const emailError = document.getElementById("emailOrMobile-error");
const passwordError = document.getElementById("password-error");

loginForm.addEventListener("submit", function (e) {
  //(Prevent Default)
  e.preventDefault();

  let isValid = true;

  if (emailOrMobile.value.trim() === "") {
    emailError.textContent = "Please enter your email or mobile number.";
    emailOrMobile.classList.add("input-error");
    isValid = false;
  } else {
    emailError.textContent = "";
    emailOrMobile.classList.remove("input-error");
  }

  if (password.value.trim() === "") {
    passwordError.textContent = "Please enter your password.";
    password.classList.add("input-error");
    isValid = false;
  } else {
    passwordError.textContent = "";
    password.classList.remove("input-error");
  }

  if (isValid) {
    console.log("Login Successful! Redirecting...");
    window.location.href = "index.html";
  }
});
