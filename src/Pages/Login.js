import React from 'react';
import './LoginCSS.css';
import logo from '../Images/inner logo.svg';
import home_img from '../Images/Home image.svg';
import '@fortawesome/fontawesome-free/css/all.min.css';


export default function Login() {
  return (
    <div className="login-container">
      <div className="login-left">
        <div className="content">
          <img src={logo} alt="Logo" className="logo" />
          <h2>What You <span>Gain</span></h2>
          <ul className="benefits-list">
            <li>Hustle free parking</li>
            <li>Extra free protection</li>
            <li>Value for Money</li>
            <li>Time Efficient</li>
          </ul>
        </div>
      </div>
      <div className="login-right">
        <div className="login-form">
          <h1>Log In</h1>
          <p className="signup-text">
            Don't have an account? <a href="#">Sign up</a>
          </p>
          <div className="social-login">
            <button className="social-button google">
              <i className="fab fa-google"></i> Google
            </button>
            <button className="social-button facebook">
              <i className="fab fa-facebook"></i> Facebook
            </button>
            <button className="social-button github">
              <i className="fab fa-github"></i> GitHub
            </button>
            <button className="social-button ios">
              <i className="fab fa-apple"></i> IOS
            </button>
          </div>

          <p className="or-divider">OR</p>
          <form>
            <input type="email" placeholder="email" className="input-field" />
            <input type="password" placeholder="password" className="input-field" />
            <div className="form-actions">
              <a href="#" className="forgot-password">Forgot Password?</a>
              <button type="submit" className="login-button">Login</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
