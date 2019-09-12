import React, { Component } from 'react';
import MainHeader from '../MainHeader/MainHeader';
import MainSideBar from '../MainSideBar/MainSideBar';
import MainFooter from '../MainFooter/MainFooter';
import Home from '../Home/Home';

class MainPage extends Component {
    render() {
        return (
            <div className="hold-transition skin-blue sidebar-mini">
                <div className="wrapper">
                    <MainHeader />
                    <MainSideBar />
                    <Home/>
                    <MainFooter />
                </div>
            </div>
        );
    }
}

export default MainPage;