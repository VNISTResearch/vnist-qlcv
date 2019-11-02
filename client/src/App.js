import React, { Component } from 'react';
import { Router } from "react-router-dom";
// import { connect } from 'react-redux';
import { history } from '../src/helpers/History';
// import { alertActions } from './redux-actions/AlertActions';
import { Routes } from './react-routes/ComebineRoutes';
// import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
class App extends Component {
  // constructor(props) {
  //   super(props);

    // history.listen((location, action) => {
    //   // clear alert on location change
    //   this.props.clearAlerts();
    // });
  // }
  
render() {
  // const { alert } = this.props;
  return (
    <Router history={history}>
      <Routes/>
    </Router>
    // <div>
    //       <button onClick={this.notify}>Notify !</button>
    //       <ToastContainer />
    //     </div>
  );
}
}
export default App;
// function mapState(state) {
//   const { alert } = state;
//   return { alert };
// }
// const actionCreators = {
//   clearAlerts: alertActions.clear
// };
// export default connect(mapState, actionCreators)(App);
