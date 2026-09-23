const form = document.getElementById("signupForm");
const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const emailOrMobile = document.getElementById("emailOrMobile");
const newPassword = document.getElementById("newPassword");

const firstNameError = document.getElementById("firstNameError");
const lastNameError = document.getElementById("lastNameError");
const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");

// (Submit)
form.addEventListener("submit", function (e) {
  // Reload
  e.preventDefault();

  let isValid = true; // is valid or No

  // --- First Name ---
  if (firstName.value.trim() === "") {
    firstNameError.textContent = "What's your name?";
    firstName.classList.add("input-error");
    isValid = false;
  } else {
    firstNameError.textContent = "";
    firstName.classList.remove("input-error");
  }

  // --- lastName ---
  if (lastName.value.trim() === "") {
    lastNameError.textContent = "What's your name?";
    lastName.classList.add("input-error");
    isValid = false;
  } else {
    lastNameError.textContent = "";
    lastName.classList.remove("input-error");
  }

  // --- emailOrMobile ---
  if (emailOrMobile.value.trim() === "") {
    emailError.textContent = "You'll need this when you reset your password.";
    emailOrMobile.classList.add("input-error");
    isValid = false;
  } else {
    emailError.textContent = "";
    emailOrMobile.classList.remove("input-error");
  }

  // newPassword ---
  if (newPassword.value.trim().length < 6) {
    passwordError.textContent =
      "Enter a combination of at least 6 numbers, letters and punctuation marks.";
    newPassword.classList.add("input-error");
    isValid = false;
  } else {
    passwordError.textContent = "";
    newPassword.classList.remove("input-error");
  }

  // isValid
  if (isValid) {
    alert("Account created successfully! Redirecting to Facebook...");

    window.location.href = "index.html";
  }
});
