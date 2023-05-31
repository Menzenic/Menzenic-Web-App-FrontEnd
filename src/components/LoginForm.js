import React, { useState } from "react";
import { FiX } from "react-icons/fi";
import "../styles/LoginForm.css";

const LoginForm = ({ onClose }) => {
  const [isSignUp, setSignUp] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here (e.g., calling API, validating credentials)
    console.log("Form submitted!");
  };

  const handleToggleForm = () => {
    setSignUp(!isSignUp);
    // Reset email and password fields
    setEmail("");
    setPassword("");
  };

  const handleGoogleLogin = () => {
    // Implement Google login logic here
    console.log("Logging in with Google...");
  };

  const handleFacebookLogin = () => {
    // Implement Facebook login logic here
    console.log("Logging in with Facebook...");
  };

  return (
    <div className="login-form-container">
      <div className="form-header">
        <h2>{isSignUp ? "Sign Up" : "Login"}</h2>
        <button className="form-close" onClick={onClose}>
          <FiX />
        </button>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">{isSignUp ? "Sign Up" : "Login"}</button>
      </form>
      <p className="toggle-form-link" onClick={handleToggleForm}>
        {isSignUp
          ? "Already have an account? Login"
          : "Don't have an account? Sign Up"}
      </p>
      <div className="social-login">
        <button className="google-login" onClick={handleGoogleLogin}>
          Login with Google
        </button>
        <button className="facebook-login" onClick={handleFacebookLogin}>
          Login with Facebook
        </button>
      </div>
    </div>
  );
};

export default LoginForm;
