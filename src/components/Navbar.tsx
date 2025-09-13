import React from "react";
import "../styles/Navbar.scss";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <div className="logo">शिल्पकार</div>
      <ul className="nav-links">
        <li>Home</li>
        <li>Categories</li>
        <li>About</li>
        <li>Contacts</li>
      </ul>
      <div className="actions">
        <select className="lang-select">
          <option value="en">EN</option>
        </select>

        <Link to="/login">Login</Link>
        <Link to="/signup">Sign Up</Link>
      </div>
    </nav>
  );
};

export default Navbar;
