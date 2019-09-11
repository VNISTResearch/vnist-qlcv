import React, { Component } from 'react';
import HomeHeader from './HomeHeader/HomeHeader';
import HomeLeft from './HomeLeft/HomeLeft';
import HomeRight from './HomeRight/HomeRight';

class Home extends Component {
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
                        <li><a href="#abc"><i className="fa fa-dashboard" /> Home</a></li>
                        <li className="active">Dashboard</li>
                    </ol>
                </section>
                {/* Main content */}
                <section className="content">
                    {/* Small boxes (Stat box) */}
                    <HomeHeader/>
                    {/* /.row */}
                    {/* Main row */}
                    <div className="row">
                        {/* Left col */}
                        <HomeLeft/>
                        {/* /.Left col */}
                        {/* right col (We are only adding the ID to make the widgets sortable)*/}
                        <HomeRight/>
                        {/* right col */}
                    </div>
                    {/* /.row (main row) */}
                </section>
                {/* /.content */}
            </div>
        );
    }
}

export default Home;