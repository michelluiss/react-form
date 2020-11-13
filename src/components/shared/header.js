import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/image/logo.png';

const Header = () => (
  <header className="header-app">
    <div className="container">
      <div className="content-header">
        <div className="logo">
          <Link to="/"><img src={logo} alt="Logo" /></Link>
        </div>
        <div className="list-menu">
          <ul>
            <li>
              <Link to="/about">About us</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </header>
);

export default Header
