import React from 'react';
import logo from './logo.svg';
import './App.css';
import MainTesting from './Layout/MainTesting';
import MainPage from './Layout1/MainPage';
import MainLayout2 from './Layout2/MainLayout2'
import 'bootstrap/dist/css/bootstrap.min.css' ;
// import configureStore from './Layout2/Redux/configureStore';
// import {Provider as ReactProvider} from 'react-redux';

// const store=configureStore();

function App() {
  return (
    // <ReactProvider store={store}>
    <div className="App">
      {/* <MainTesting/> */}
      {/* <MainPage/> */}
      <MainLayout2/>
    </div>
    // </ReactProvider>
  );
}

export default App;
