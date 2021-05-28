import React from 'react'
import './Navigation.css'
import logo from './logos/logo-iridium-goes-telegram.svg'

export const Navigation = () => (
  <nav className="container-navigation">
    <img
      src={logo}
      alt="Iridium Goes Telegram"
      className="logo"
    />
    <ul className="list-link">
      <li>
        <a href="">About</a>
      </li>
      <li>
        <a href="">Documentation</a>
      </li>
      <li>
        <a href="">Pricing</a>
      </li>
      <li>
        <a href="">Contact</a>
      </li>
    </ul>
    <div className="container-login-buttons">
      <a href="">Log in</a>
      <a className="button-primary" href="">Register</a>
    </div>
  </nav>
);
