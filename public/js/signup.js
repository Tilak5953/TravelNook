// signup.js
document.getElementById("signup").addEventListener("submit", async function (e) {
    e.preventDefault();
  
    const username = document.querySelector("input[placeholder='Username']").value;
    const email = document.querySelector("input[placeholder='Email']").value;
    const password = document.querySelector("input[placeholder='Enter Password']").value;
  
    const response = await fetch('http://localhost:5000/auth/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, email, password }),
    });
  
    const result = await response.json();
    if (response.ok) {
      alert("Signup successful!");
      // You can redirect or perform other actions here.
    } else {
      alert(result.message || "Signup failed");
    }
  });
<a href="javascript:void(0)" id="goToLogin" style="cursor: pointer; color: blue; text-decoration: underline;">Already have an account? Login here.</a>
  