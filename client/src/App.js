import React, { Component } from 'react';
import Routes from './routes/Routes';
import { BrowserRouter as Router, Route } from "react-router-dom"; 
import { connect } from 'react-redux';

class App extends Component {
  render(){
    return (
      <div>
        <Router>
          <Routes/>
        </Router>
      </div>
    );
  }
}
