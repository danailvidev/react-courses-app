import React from 'react';
import {Route, Switch} from 'react-router-dom';
import HomePage from './components/home/HomePage';
import AboutPage from './components/about/AboutPage';
import CoursesPage from "./components/course/CoursesPage";
import ManageCoursePage from './components/course/ManageCoursePage';

export default (
  <Switch>
    <Route exact={true} path="/" component={HomePage}/>
    <Route path="/home" component={HomePage}/>
    <Route path="/course/:id" component={ManageCoursePage}/>
    <Route path="/course" component={ManageCoursePage}/>
    <Route path='/courses' component={CoursesPage}/>
    <Route path='/about' component={AboutPage}/>
  </Switch>
)
