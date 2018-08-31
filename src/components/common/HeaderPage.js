import React from 'react';
import {NavLink} from "react-router-dom";
import './header.css';

const HeaderPage = () => {
  return (

    <nav>
      <NavLink exact to="/" activeClassName="active">Home</NavLink>
      {" | "}
      <NavLink to="/about" activeClassName="active">About</NavLink>
    </nav>

  );
};

export default HeaderPage;

