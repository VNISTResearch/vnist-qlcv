import React, { Component } from 'react';
import {DashBoard} from '../../Content/CombineContent';
import {MainHeader, MainSideBar, MainFooter} from '../../Layout/CombineMainLayout';

class DashBoardPage extends Component {
    render() {
        return (
            <div>
                <div className="wrapper">
                    <MainHeader />
                    <MainSideBar />
                    <DashBoard/>
                    <MainFooter />
                </div>
            </div>
        );
    }
}

export {DashBoardPage};