import React, { Component } from 'react';
import { CoCauToChuc}  from '../../Content/CombineContent';
import { MainHeader, MainSideBar, MainFooter } from '../../Layout/CombineMainLayout';

class CoCauToChucPage extends Component {
    render() {
        return (
            <div>
                <div className="wrapper">
                    <MainHeader />
                    <MainSideBar />
                    <CoCauToChuc />
                    <MainFooter />
                </div>
            </div>
        );
    }
}

export {CoCauToChucPage};