import React from 'react'
import "./Header.css"

export default 
function Header() {
  return (
    <header className="header">

      <div className="logo">
        GlowCart
      </div>

      <nav>
        <ul className="nav-links">
          <li>Home</li>
          <li>Products</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>

    </header>
  );
}