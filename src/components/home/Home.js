import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Home extends Component {
  render() {
    return (
      <div className="jumbotron">
        <h1>Pluralsight Administration</h1>
        <p>React, Redux and React Router</p>
        <Link to="about" className="btn btn-primary btn-lg" activeClassName="active">Learn More</Link>
      </div>
    )
  }
}
