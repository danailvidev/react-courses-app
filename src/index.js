import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/configureStore';
import {Provider} from 'react-redux';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from "./components/App";

const store = configureStore();

ReactDOM.render(
  <Provider store={store}><App/></Provider>,
  document.getElementById('root'));
registerServiceWorker();
