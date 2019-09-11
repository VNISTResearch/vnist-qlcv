import React from 'react';
// import Login from './components/Login/Login';
import Home from './components/Home/Home';
import MainHeader from './components/MainHeader/MainHeader';
import MainSideBar from './components/MainSideBar/MainSideBar';
import MainFooter from './components/MainFooter/MainFooter';

function App() {
  return (
    <div className="hold-transition skin-blue sidebar-mini">
      <div className="wrapper">
        {/* <Login/> */}
        <MainHeader />
        <MainSideBar />
        <Home />
        <MainFooter />
      </div>
    </div>
  );
}

export default App;
