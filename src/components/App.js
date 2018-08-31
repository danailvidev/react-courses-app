import React, {Component} from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import './main-page.css';
import routes from '../routes';

export default class App extends Component {
  render() {
    return (
      <Router>
        <div className="container-fluid">
          <p>Header here....</p>
          {routes}
        </div>
      </Router>
    );
  }
}


