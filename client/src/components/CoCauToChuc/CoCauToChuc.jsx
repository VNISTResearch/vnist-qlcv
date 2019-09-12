import React, { Component } from 'react';
import CoCauToChucContent from './CoCauToChucContent/CoCauToChucContent';
import MainHeader from '../MainHeader/MainHeader';
import MainSideBar from '../MainSideBar/MainSideBar';
import MainFooter from '../MainFooter/MainFooter';

class CoCauToChuc extends Component {
    render() {
        return (
            <div className="hold-transition skin-blue sidebar-mini">
                <div className="wrapper">
                    <MainHeader />
                    <MainSideBar />
                    <CoCauToChucContent />
                    <MainFooter />
                </div>
            </div>
        );
    }
}

export default CoCauToChuc;