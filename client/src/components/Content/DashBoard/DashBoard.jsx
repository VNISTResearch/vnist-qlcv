import React, { Component } from 'react';
import { DashBoardHeader} from './DashBoardHeader/DashBoardHeader';
import { DashBoardContentLeft, DashBoardContentRight} from './DashBoardContent/CombineDashBoardContent';

class DashBoard extends Component {
    componentWillMount(){
        // loadjs('js/home.js');
            let script = document.createElement('script');
            script.src = 'js/DashBoard.js';
            script.async = true;
            script.defer = true;
            document.body.appendChild(script);
    }
    render() {
        return (
            <div className="content-wrapper">
                {/* Content Header (Page header) */}
                <section className="content-header">
                    <h1>
                        Dashboard
                        <small>Control panel</small>
                    </h1>
                    <ol className="breadcrumb">
                        <li><a href="#abc"><i className="fa fa-dashboard" /> DashBoard</a></li>
                        <li className="active">Dashboard</li>
                    </ol>
                </section>
                {/* Main content */}
                <section className="content">
                    {/* Small boxes (Stat box) */}
                    <DashBoardHeader/>
                    {/* /.row */}
                    {/* Main row */}
                    <div className="row">
                        {/* Left col */}
                        <DashBoardContentLeft/>
                        {/* /.Left col */}
                        {/* right col (We are only adding the ID to make the widgets sortable)*/}
                        <DashBoardContentRight/>
                        {/* right col */}
                    </div>
                    {/* /.row (main row) */}
                </section>
                {/* /.content */}
            </div>
        );
    }
}

export {DashBoard};