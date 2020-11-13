import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/image/logo.png';

const Header = () => (
  <header className="header-app">
    <div className="container">
      <div className="content-header">
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>
        <div className="list-menu">
          <ul>
            <li>
              <Link to="/">About</Link>
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
