import React from 'react';
import {NavLink} from "react-router-dom";
import './header.css';

const HeaderPage = () => {
  return (

    <nav className="nav nav-masthead justify-content-center">
      <NavLink exact to="/" activeClassName="active" className="nav-link">Home</NavLink>
      <NavLink to="/courses" activeClassName="active" className="nav-link">Courses</NavLink>
      <NavLink to="/about" activeClassName="active" className="nav-link">About</NavLink>
    </nav>

  );
};

export default HeaderPage;

