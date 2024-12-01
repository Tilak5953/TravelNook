// login.js
document.getElementById("login").addEventListener("submit", async function (e) {
    e.preventDefault();
  
    const username = document.querySelector("input[placeholder='Username']").value;
    const password = document.querySelector("input[placeholder='Enter Password']").value;
  
    const response = await fetch('http://localhost:5000/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    });
  
    const result = await response.json();
    if (response.ok) {
      alert("Login successful");
      // You can redirect the user or handle session here.
    } else {
      alert(result.message || "Login failed");
    }
  });
<a href="javascript:void(0)" id="goToLogin" style="cursor: pointer; color: blue; text-decoration: underline;">Already have an account? Login here.</a>
