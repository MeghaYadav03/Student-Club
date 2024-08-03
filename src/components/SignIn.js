import React from 'react';
import './SignIn.css';

const SignIn = () => {
  return (
    <div className="container">
      <div className="form-container">
        <h2>Sign in Your Account</h2>
        <form>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" className="form-input" />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" className="form-input" />
          </div>
          <div className="form-footer">
            <div>
              <input type="checkbox" id="remember" />
              <label htmlFor="remember">Remember my preference</label>
            </div>
            <a href="#" className="forgot-password">Forgot Password?</a>
          </div>
          <button type="submit" className="submit-button">Sign In</button>
        </form>
        <p className="signup-text">
          Don't have an account? <a href="#" className="signup-link">Sign up</a>
        </p>
      </div>
    </div>
  );
};

export default SignIn;