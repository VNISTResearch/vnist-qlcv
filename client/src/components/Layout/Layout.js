import React, { Component } from 'react';
import { MainHeader } from './Header/MainHeader';
import { MainSideBar } from './SideBar/MainSideBar';
import { MainFooter } from './Footer/MainFooter';

class Layout extends Component {
    render() {
        return (
            <div className="wrapper">
                <MainHeader/>
                <MainSideBar/>
                {this.props.children}
                <MainFooter/>
            </div>
        );
    }
}

export default Layout;