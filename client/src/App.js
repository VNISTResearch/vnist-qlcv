import React, { Component } from 'react';
import { Router as Router, Route } from "react-router-dom";
import { connect } from 'react-redux';
import { history } from '../src/helpers/History';
import { alertActions } from './redux-actions/AlertActions';
import { Routes } from './react-routes/ComebineRoutes';
class App extends Component {
  constructor(props) {
    super(props);

    history.listen((location, action) => {
      // clear alert on location change
      this.props.clearAlerts();
    });
  }
render() {
  const { alert } = this.props;
  return (
    <Router history={history}>
      {alert.message &&
        <div className={`alert ${alert.type}`}>{alert.message}</div>
      }
      <Routes/>
    </Router>
  );
}
}
function mapState(state) {
  const { alert } = state;
  return { alert };
}
const actionCreators = {
  clearAlerts: alertActions.clear
};
export default connect(mapState, actionCreators)(App);
