import React, { Component } from 'react';
import MainHeaderMenu from './MainHeaderMenu/MainHeaderMenu';
import {connect} from 'react-redux';
import { withTranslate } from 'react-redux-multilingual';

class MainHeader extends Component {
    render() {
        return (
        <React.Fragment>
            <header className="main-header">
                {/* Logo */}
                <a href="index2.html" className="logo">
                    {/* mini logo for sidebar mini 50x50 pixels */}
                    <span className="logo-mini">QLCV</span>
                    {/* logo for regular state and mobile devices */}
                    <span className="logo-lg"><b>QLCV-</b>VNIST</span>
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
            <div className="modal fade" id="modal-profile">
                <div className="modal-dialog">
                    <div className="modal-content">
                    <div className="modal-header">
                        <button type="button" className="close" data-dismiss="modal" aria-hidden="true">×</button>
                        <h4 className="modal-title">Profile of user</h4>
                    </div>
                    <div className="modal-body">
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                        <button type="button" className="btn btn-primary">Save changes</button>
                    </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
        );
    }
}

const mapState = state => state;
 
export default connect(mapState, null) (withTranslate(MainHeader));
