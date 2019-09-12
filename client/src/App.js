import React from 'react';
import Routes from './routes/Routes';
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes/>
    </Router>
  );
}

export default App;
