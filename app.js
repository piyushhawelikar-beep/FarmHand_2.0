// app.js

function registerUser(event) {
  event.preventDefault();
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;

  // Save in browser localStorage (temporary demo only)
  localStorage.setItem("userEmail", email);
  localStorage.setItem("userPassword", password);
  alert("Registration successful! Please login.");
  window.location.href = "login.html";
  return false;
}

function loginUser(event) {
  event.preventDefault();
  let email = document.getElementById("loginEmail").value;
  let password = document.getElementById("loginPassword").value;

  let savedEmail = localStorage.getItem("userEmail");
  let savedPassword = localStorage.getItem("userPassword");

  if (email === savedEmail && password === savedPassword) {
    alert("Login successful! Welcome to FarmHand.");
    window.location.href = "index.html";
  } else {
    alert("Invalid email or password. Please try again.");
  }
  return false;
}
