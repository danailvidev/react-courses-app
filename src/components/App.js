import React, {Component} from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import './main-page.css';
import routes from '../routes';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import HeaderPage from './common/HeaderPage';
import FooterPage from './common/FooterPage';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="wrapper container-fluid">
          <HeaderPage loading={this.props.loading} courses={this.props.courses}/>
          <div className="main-body">
            {routes}
          </div>
          <FooterPage courses={this.props.courses} authors={this.props.authors}/>
        </div>
      </Router>
    );
  }
}

App.propTypes = {
  loading: PropTypes.bool.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    courses: state.courses,
    authors: state.authors,
    loading: state.ajaxCallsInProgress > 0
  };
}

export default connect(mapStateToProps)(App);



