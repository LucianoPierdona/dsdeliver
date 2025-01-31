import React from 'react';
import './styles.css';
import { ReactComponent as Logo } from '../Assets/logo.svg';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="main-navbar">
      <Logo />
      <Link to="/" className="logo-text">
        DS Delivery
      </Link>
    </nav>
  );
};

export default Navbar;
