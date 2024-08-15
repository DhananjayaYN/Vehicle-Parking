import React from 'react';
import './OwnerCSS.css';
import './UserCSS.css';
import logo from '../Images/inner logo.svg';
import '@fortawesome/fontawesome-free/css/all.min.css';

export default function OwnerSignup() {
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
      <div className="s-right">
        <div className="s-form">
          <h1>Sign Up</h1>
          <p className="o-text">
            Already have an account? <a href="/ownerLogin">Log In</a>
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
            <input type="text" placeholder="First Name" className="input-field" />
            <input type="text" placeholder="Last Name" className="input-field" />
            <input type="email" placeholder="Email" className="input-field" />
            <input type="password" placeholder="Password" className="input-field" />
            <div className="form-actions">
              <p>By signing up you agree to uor<a href="#" className="oforgot-password">Terms of Service</a>
              and<a href="#" className="oforgot-password"> Privacy Policy</a></p>
              <button type="submit" className="o-button">Sign Up</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
