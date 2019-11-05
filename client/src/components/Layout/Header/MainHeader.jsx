import React, { Component } from 'react';
import MainHeaderMenu from './MainHeaderMenu/MainHeaderMenu';

class MainHeader extends Component {
    render() {
        return (
            <header className="main-header">
                {/* Logo */}
                <a href="index2.html" className="logo">
                    {/* mini logo for sidebar mini 50x50 pixels */}
                    <span className="logo-mini">QLCV</span>
                    {/* logo for regular state and mobile devices */}
                    <span className="logo-lg"><img src="/main/image/logo.png" alt="Logo" style={{width: "40px", marginTop: "-5px", marginLeft: "-15px"}}></img>VNIST-Việc</span>
                </a>
                {/* Header Navbar: style can be found in header.less */}
                <nav className="navbar navbar-static-top">
                    {/* Sidebar toggle button*/}
                    <a href="#abc" className="sidebar-toggle" data-toggle="push-menu" role="button">
                        <span className="sr-only">Toggle navigation</span>
                    </a>
                    <MainHeaderMenu/>
                </nav>
            </header>
        );
    }
}

export {MainHeader};