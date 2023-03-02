import React, { useState } from 'react';
import './Login.css';
import { useNavigate } from "react-router-dom";
const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [forgotPassword, setForgotPassword] = useState(false);

  const handleEmailChange = (event) => {
    const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const temporaryEmailRegex = /@example.com$/; // replace with your temporary email domain
    const invalidEmailRegex = /@fake.com$/; // replace with your invalid email domain
    const email = event.target.value;
    setEmail(email);
    if (!emailRegex.test(email)) {
      setEmailError('Invalid email');
    } else if (temporaryEmailRegex.test(email)) {
      setEmailError('Cannot use temporary email');
    } else if (invalidEmailRegex.test(email)) {
      setEmailError('Email does not exist');
    } else {
      setEmailError('');
    }
  };

  const handlePasswordChange = (event) => {
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    const password = event.target.value;
    setPassword(password);
    if (!passwordRegex.test(password)) {
      setPasswordError('Password must be at least 8 characters long and contain at least one letter and one number');
    } else {
      setPasswordError('');
    }
  };

  const handleForgotPassword = () => {
    setForgotPassword(true);
    // Add code to handle forgot password flow here
  };

  const handleResetPassword = (event) => {
    event.preventDefault();
    // Add code to reset user's password and send email with new temporary password
    alert('Your password has been reset. Please check your email for your new temporary password.');
    
    setForgotPassword(false);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(`Email: ${email} Password: ${password}`);
    
      // Redirect to homepage
      navigate("/dashboard");
     
  };
  
 

  if (forgotPassword) {
    return (
      <div>
        <h1>Forgot Password</h1>
        <p>Enter your email to receive a temporary password:</p>
        <form onSubmit={handleResetPassword}>
          <div>
            <label htmlFor="email">Email: </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={handleEmailChange}
            />
            {emailError && <p>{emailError}</p>}
          </div>
          <button className="link-btn">Reset Password</button>
          <button className="link-btn" onClick={() => setForgotPassword(false)}>
            Cancel
          </button>
        </form>
      </div>
    );
  }

  return (
    <div className="auth-form-container">
      <h1>Sign Up</h1>
      <form className="login-form" onSubmit={handleSubmit}>
        
          <label htmlFor="email">Email:</label>
          <input type="email" id="email"value={email}
            onChange={handleEmailChange} placeholder="youremail@gmail.com"  name="email"
          />
          {emailError && <p>{emailError}</p>}
        <label htmlFor="password">Password: </label>
          <input value={password}
            onChange={handlePasswordChange} type="password" placeholder="********" id="password" name="password"
          />
          {passwordError && <p>{passwordError}</p>}
        
          
      <button type='submit' onClick={handleSubmit}>Login</button>
      
    </form>
      <button className="link-btn" onClick={handleForgotPassword}>Forgot Password</button>
    </div>
  );
};

export default Login;
