function signup() {
  let user = document.getElementById("signupUser").value;
  let pass = document.getElementById("signupPass").value;

  if (user === "" || pass === "") {
    alert("Please fill all fields");
    return;
  }

  localStorage.setItem("username", user);
  localStorage.setItem("password", pass);

  document.getElementById("message").innerText = "Signup successful!";
}

function login() {
  let user = document.getElementById("loginUser").value;
  let pass = document.getElementById("loginPass").value;

  let storedUser = localStorage.getItem("username");
  let storedPass = localStorage.getItem("password");

  if (user === storedUser && pass === storedPass) {
    document.getElementById("message").innerText = "Login successful 🎉";
  } else {
    document.getElementById("message").innerText = "Invalid credentials";
  }
}
