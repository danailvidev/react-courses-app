import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './HomePage.css';

class HomePage extends Component {
  render() {
    return (
      <div className="jumbotron">
        <h1>Pluralsight Administration</h1>
        <p>React, Redux and React Router</p>
        <NavLink to="about" className="btn btn-primary btn-lg" activeClassName="active">Learn More</NavLink>
      </div>
    )
  }
}

export default HomePage
