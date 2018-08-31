import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Home from './components/home/Home';
import About from './components/about/About';

export default (
    <Switch>
        <Route exact={true} path="/" component={Home} />
        <Route path='/about' component={About} />
    </Switch>
)