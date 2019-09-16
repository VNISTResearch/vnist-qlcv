import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { connect } from 'react-redux';
import { history } from '../src/helpers/History';
import { alertActions } from './redux-actions/AlertActions';
import { PrivateRoute, Routes } from './react-routes/ComebineRoutes';
import {DashBoardPage} from './components/Page/CombineComponentPages';
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
    <div>
      {alert.message &&
        <div className={`alert ${alert.type}`}>{alert.message}</div>
      }
      <Router history={history}>
        <PrivateRoute exact path="/" component={DashBoardPage} />
        <Routes />
      </Router>
    </div>
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
