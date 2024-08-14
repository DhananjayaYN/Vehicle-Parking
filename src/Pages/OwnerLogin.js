import React from 'react';
import './OwnerLoginCSS.css';
import './UserCSS.css';
import logo from '../Images/inner logo.svg';
import '@fortawesome/fontawesome-free/css/all.min.css';

export default function OwnerLogin() {
  return (
    <div className="o-container">
      <div className="u-left">
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
      <div className="u-right">
        <div className="u-form">
          <h1>Log In</h1>
          <p className="o-text">
            Don't have an account? <a href="/ownerSignup">Sign up</a>
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
              <a href="#" className="oforgot-password">Forgot Password?</a>
              <button type="submit" className="o-button">Login</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
