import React from 'react';
// import Login from './components/Login/Login';
// import Home from './components/Home/Home';
import MainHeader from './components/MainHeader/MainHeader';
import MainSideBar from './components/MainSideBar/MainSideBar';
import MainFooter from './components/MainFooter/MainFooter';
import Routes from './routes/Routes';
import { BrowserRouter as Router} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="hold-transition skin-blue sidebar-mini">
        <div className="wrapper">
          {/* <Login/> */}
          <MainHeader />
          <MainSideBar />
          <Routes />
          <MainFooter />
        </div>
      </div>
    </Router>
  );
}

export default App;
