import React from 'react';
import {Route, Switch} from 'react-router-dom';
import HomePage from './components/home/HomePage';
import AboutPage from './components/about/AboutPage';

export default (
  <Switch>
    <Route exact={true} path="/" component={HomePage}/>
    <Route path="/home" component={HomePage}/>
    <Route path='/about' component={AboutPage}/>
  </Switch>
)
