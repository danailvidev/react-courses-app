import React from 'react';
import {NavLink} from "react-router-dom";
import './header.css';
import LoadingDots from './LoadingDots';
import PropTypes from 'prop-types';
import {bindActionCreators} from "redux";
import * as courseActions from "../../actions/courseActions";
import connect from "react-redux/es/connect/connect";

const HeaderPage = ({loading, courses}) => {

  return (

    <nav className="nav nav-masthead justify-content-center">
      <NavLink exact to="/" activeClassName="active" className="nav-link">Home</NavLink>
      <NavLink to="/courses" activeClassName="active" className="nav-link">Courses <span
        className="badge badge-light">{courses.length}</span></NavLink>
      <NavLink to="/about" activeClassName="active" className="nav-link">About</NavLink>
      {loading && <LoadingDots interval={100} dots={20}/>}
    </nav>

  );
};

HeaderPage.propTypes = {
  loading: PropTypes.bool.isRequired
};

export default HeaderPage;


