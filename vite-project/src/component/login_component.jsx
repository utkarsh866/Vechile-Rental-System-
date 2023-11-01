import { useState } from "react";
import { Link } from 'react-router-dom';
import './login.css';
export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    console.log(email, password);
    fetch("http://localhost:5000/login-user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "userLogin");
        if (data.status === "ok") {
          //alert("Login successful");
          // Handle successful login, e.g., redirect to the user's dashboard
          window.localStorage.setItem("token", data.token); // You should have a token returned from the server
          window.localStorage.setItem("loggedIn", true);
          window.location.href = "./userDetails";
         
        } else {
          // Handle login failure, e.g., display an error message
          alert("Login failed. Please check your credentials.");
        }
      })
      .catch((error) => {
        // Handle any network or unexpected errors
        console.error("Error during login:", error);
        alert("An error occurred during login.");
      });
  }
  

  return (
    <div className="auth-wrapper custom-background">
      <div className="auth-inner SBOX">
        <form onSubmit={handleSubmit}>
          <h3>Sign In</h3>

          <div className="mb-3 ">
            <label className="sign-in">Email address</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="mb-3 sign-in">
            <div className="custom-control custom-checkbox">
              <input
                type="checkbox"
                className="custom-control-input"
                id="customCheck1"
              />
              <label className="custom-control-label" htmlFor="customCheck1">
                Remember me
              </label>
            </div>
          </div>

          <div className="d-grid">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
          <p className="forgot-password text-right">
          <Link to="/sign-up">Sign Up</Link>
          </p>
        </form>
      </div>
    </div>
  );
}
