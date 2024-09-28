import React from 'react';
import '../App.css';
import logo from './photo/logo.png'

function Navbar() {
  return (
    <div className="Navbar-container">
      <header>
        <a href="#Home"><img src={logo} alt="Logo" className='logo'/></a>
        <nav>
            <ul class="nav_links">
                <li><a href="#Home">Home</a></li>
                <li><a href="#About">About</a></li>
            </ul>
        </nav>
        </header>
    </div>
  );
}

export default Navbar;
