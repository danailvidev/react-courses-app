import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/configureStore';
import {Provider} from 'react-redux';
import registerServiceWorker from './registerServiceWorker';
import { loadCourses} from "./actions/courseActions";
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from "./components/App";

const store = configureStore();
store.dispatch(loadCourses());

ReactDOM.render(
  <Provider store={store}><App/></Provider>,
  document.getElementById('root'));
registerServiceWorker();
