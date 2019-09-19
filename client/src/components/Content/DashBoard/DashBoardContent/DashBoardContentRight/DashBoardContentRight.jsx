import React, { Component } from 'react';

class DashBoardContentRight extends Component {
    render() {
        return (
            <section className="col-lg-5 connectedSortable">
                {/* Map box */}
                <div className="box box-solid bg-light-blue-gradient">
                    <div className="box-header">
                        {/* tools box */}
                        <div className="pull-right box-tools">
                            <button type="button" className="btn btn-primary btn-sm daterange pull-right" data-toggle="tooltip" title="Date range">
                                <i className="fa fa-calendar" /></button>
                            <button type="button" className="btn btn-primary btn-sm pull-right" data-widget="collapse" data-toggle="tooltip" title="Collapse" style={{ marginRight: '5px' }}>
                                <i className="fa fa-minus" /></button>
                        </div>
                        {/* /. tools */}
                        <i className="fa fa-map-marker" />
                        <h3 className="box-title">
                            Visitors
                  </h3>
                    </div>
                    <div className="box-body">
                        <div id="world-map" style={{ height: '250px', width: '100%' }} />
                    </div>
                    {/* /.box-body*/}
                    <div className="box-footer no-border">
                        <div className="row">
                            <div className="col-xs-4 text-center" style={{ borderRight: '1px solid #f4f4f4' }}>
                                <div id="sparkline-1" />
                                <div className="knob-label">Visitors</div>
                            </div>
                            {/* ./col */}
                            <div className="col-xs-4 text-center" style={{ borderRight: '1px solid #f4f4f4' }}>
                                <div id="sparkline-2" />
                                <div className="knob-label">Online</div>
                            </div>
                            {/* ./col */}
                            <div className="col-xs-4 text-center">
                                <div id="sparkline-3" />
                                <div className="knob-label">Exists</div>
                            </div>
                            {/* ./col */}
                        </div>
                        {/* /.row */}
                    </div>
                </div>
                {/* /.box */}
                {/* solid sales graph */}
                <div className="box box-solid bg-teal-gradient">
                    <div className="box-header">
                        <i className="fa fa-th" />
                        <h3 className="box-title">Sales Graph</h3>
                        <div className="box-tools pull-right">
                            <button type="button" className="btn bg-teal btn-sm" data-widget="collapse"><i className="fa fa-minus" />
                            </button>
                            <button type="button" className="btn bg-teal btn-sm" data-widget="remove"><i className="fa fa-times" />
                            </button>
                        </div>
                    </div>
                    <div className="box-body border-radius-none">
                        <div className="chart" id="line-chart" style={{ height: '250px' }} />
                    </div>
                    {/* /.box-body */}
                    <div className="box-footer no-border">
                        <div className="row">
                            <div className="col-xs-4 text-center" style={{ borderRight: '1px solid #f4f4f4' }}>
                                <input type="text" className="knob" data-readonly="true" defaultValue={20} data-width={60} data-height={60} data-fgcolor="#39CCCC" />
                                <div className="knob-label">Mail-Orders</div>
                            </div>
                            {/* ./col */}
                            <div className="col-xs-4 text-center" style={{ borderRight: '1px solid #f4f4f4' }}>
                                <input type="text" className="knob" data-readonly="true" defaultValue={50} data-width={60} data-height={60} data-fgcolor="#39CCCC" />
                                <div className="knob-label">Online</div>
                            </div>
                            {/* ./col */}
                            <div className="col-xs-4 text-center">
                                <input type="text" className="knob" data-readonly="true" defaultValue={30} data-width={60} data-height={60} data-fgcolor="#39CCCC" />
                                <div className="knob-label">In-Store</div>
                            </div>
                            {/* ./col */}
                        </div>
                        {/* /.row */}
                    </div>
                    {/* /.box-footer */}
                </div>
                {/* /.box */}
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
                        <div id="calendar" style={{ width: '100%' }} />
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