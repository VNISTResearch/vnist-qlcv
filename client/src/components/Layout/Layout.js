import React, { Component } from 'react';
import MainHeader from './Header/MainHeader';
import MainSideBar from './SideBar/MainSideBar';
import MainFooter from './Footer/MainFooter';
import Middleware from './Middleware';

class Layout extends Component {
    render() {
        return (
            <div className="wrapper">
                <MainHeader/>
                <MainSideBar/>
                <Middleware> {this.props.children} </Middleware>
                <MainFooter/>
            </div>
        );
    }
}

export default Layout;