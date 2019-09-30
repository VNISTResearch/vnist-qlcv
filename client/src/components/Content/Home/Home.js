import React, { Component } from 'react';

class Home extends Component {

    render() {
        return (
            <div className="content-wrapper">
                {/* Content Header (Page header) */}
                <section className="content-header">
                    <h1>
                        Calendar
                        <small>Control panel</small>
                    </h1>
                    <ol className="breadcrumb">
                        <li><a href="#abc"><i className="fa fa-dashboard" /> Home</a></li>
                        <li className="active">Calendar</li>
                    </ol>
                </section>
                {/* Main content */}
                <section className="content">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="box box-primary">
                                <div className="box-body no-padding">
                                    {/* THE CALENDAR */}
                                    <div id="calendar" />
                                </div>
                                {/* /.box-body */}
                            </div>
                            {/* /. box */}
                        </div>
                        {/* /.col */}
                    </div>
                    {/* /.row */}
                </section>
                {/* /.content */}
            </div>
        );
    }
}

export { Home };