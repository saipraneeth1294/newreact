import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Loading from './Layout1/Common/Loading'
import 'bootstrap/dist/css/bootstrap.min.css';
import * as serviceWorker from './serviceWorker';
import configureStore from './Layout2/Redux/configureStore';
import {Provider as ReactProvider} from 'react-redux';


const store=configureStore();

ReactDOM.render(
  <ReactProvider store={store}>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </ReactProvider>,
  document.getElementById('root')
);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
