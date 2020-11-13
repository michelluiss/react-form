import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => (
  <div>
    <header className="header-app">
      <div className="logo">
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
    </header>
  </div>
);

export default Header
