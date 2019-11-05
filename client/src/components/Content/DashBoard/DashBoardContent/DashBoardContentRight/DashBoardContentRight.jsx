import React, { Component } from 'react';

class DashBoardContentRight extends Component {
    render() {
        return (
            <section className="col-lg-5 connectedSortable">
                {/* Calendar */}
                <div className="box box-solid bg-green-gradient">
                    <div className="box-header">
                        <i className="fa fa-calendar" />
                        <h3 className="box-title">Calendar</h3>
                        {/* tools box */}
                        <div className="pull-right box-tools">
                            {/* button with a dropdown */}
                            <div className="btn-group">
                                <button type="button" className="btn btn-success btn-sm dropdown-toggle" data-toggle="dropdown">
                                    <i className="fa fa-bars" /></button>
                                <ul className="dropdown-menu pull-right" role="menu">
                                    <li><a href="#abc">Add new event</a></li>
                                    <li><a href="#abc">Clear events</a></li>
                                    <li className="divider" />
                                    <li><a href="#abc">View calendar</a></li>
                                </ul>
                            </div>
                            <button type="button" className="btn btn-success btn-sm" data-widget="collapse"><i className="fa fa-minus" />
                            </button>
                            <button type="button" className="btn btn-success btn-sm" data-widget="remove"><i className="fa fa-times" />
                            </button>
                        </div>
                        {/* /. tools */}
                    </div>
                    {/* /.box-header */}
                    <div className="box-body no-padding">
                        {/*The calendar */}
                        <div id="calendar"/>
                    </div>
                    {/* /.box-body */}
                    <div className="box-footer text-black">
                        <div className="row">
                            <div className="col-sm-6">
                                {/* Progress bars */}
                                <div className="clearfix">
                                    <span className="pull-left">Task #1</span>
                                    <small className="pull-right">90%</small>
                                </div>
                                <div className="progress xs">
                                    <div className="progress-bar progress-bar-green" style={{ width: '90%' }} />
                                </div>
                                <div className="clearfix">
                                    <span className="pull-left">Task #2</span>
                                    <small className="pull-right">70%</small>
                                </div>
                                <div className="progress xs">
                                    <div className="progress-bar progress-bar-green" style={{ width: '70%' }} />
                                </div>
                            </div>
                            {/* /.col */}
                            <div className="col-sm-6">
                                <div className="clearfix">
                                    <span className="pull-left">Task #3</span>
                                    <small className="pull-right">60%</small>
                                </div>
                                <div className="progress xs">
                                    <div className="progress-bar progress-bar-green" style={{ width: '60%' }} />
                                </div>
                                <div className="clearfix">
                                    <span className="pull-left">Task #4</span>
                                    <small className="pull-right">40%</small>
                                </div>
                                <div className="progress xs">
                                    <div className="progress-bar progress-bar-green" style={{ width: '40%' }} />
                                </div>
                            </div>
                            {/* /.col */}
                        </div>
                        {/* /.row */}
                    </div>
                </div>
                {/* /.box */}
            </section>
        );
    }
}

export {DashBoardContentRight};