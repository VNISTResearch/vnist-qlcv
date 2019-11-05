import React, { Component } from 'react';
import { Router } from "react-router-dom";
import Routes from './react-routes/Routes';
import 'react-toastify/dist/ReactToastify.css';
import { createBrowserHistory } from 'history';

const history = createBrowserHistory();
class App extends Component {
  
render() {
  return (
    <Router history={history}>
      <Routes/>
    </Router>
  );
}
}
export default App;
