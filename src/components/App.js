import React, {Component} from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import './main-page.css';
import routes from '../routes';
import HeaderPage from './common/HeaderPage';
import FooterPage from './common/FooterPage';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="wrapper container-fluid">
          <HeaderPage/>
          <div className="main-body">
            {routes}
          </div>

          <FooterPage/>
        </div>
      </Router>
    );
  }
}

export default App



