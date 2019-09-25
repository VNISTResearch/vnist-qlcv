import React, { Component } from 'react';

class DashBoardContentLeft extends Component {
    render() {
        return (
            <section className="col-lg-7 connectedSortable">
                {/* TO DO List */}
                <div className="box box-primary">
                    <div className="box-header">
                        <i className="ion ion-clipboard" />
                        <h3 className="box-title">To Do List</h3>
                        <div className="box-tools pull-right">
                            <ul className="pagination pagination-sm inline">
                                <li><a href="#abc">«</a></li>
                                <li><a href="#abc">1</a></li>
                                <li><a href="#abc">2</a></li>
                                <li><a href="#abc">3</a></li>
                                <li><a href="#abc">»</a></li>
                            </ul>
                        </div>
                    </div>
                    {/* /.box-header */}
                    <div className="box-body">
                        {/* See adminLTE/dist/js/pages/dashboard.js to activate the todoList plugin */}
                        <ul className="todo-list">
                            <li>
                                {/* drag handle */}
                                <span className="handle">
                                    <i className="fa fa-ellipsis-v" />
                                    <i className="fa fa-ellipsis-v" />
                                </span>
                                {/* checkbox */}
                                <input type="checkbox" defaultValue />
                                {/* todo text */}
                                <span className="text">Design a nice theme</span>
                                {/* Emphasis label */}
                                <small className="label label-danger"><i className="fa fa-clock-o" /> 2 mins</small>
                                {/* General tools such as edit or delete*/}
                                <div className="tools">
                                    <i className="fa fa-edit" />
                                    <i className="fa fa-trash-o" />
                                </div>
                            </li>
                            <li>
                                <span className="handle">
                                    <i className="fa fa-ellipsis-v" />
                                    <i className="fa fa-ellipsis-v" />
                                </span>
                                <input type="checkbox" defaultValue />
                                <span className="text">Make the theme responsive</span>
                                <small className="label label-info"><i className="fa fa-clock-o" /> 4 hours</small>
                                <div className="tools">
                                    <i className="fa fa-edit" />
                                    <i className="fa fa-trash-o" />
                                </div>
                            </li>
                            <li>
                                <span className="handle">
                                    <i className="fa fa-ellipsis-v" />
                                    <i className="fa fa-ellipsis-v" />
                                </span>
                                <input type="checkbox" defaultValue />
                                <span className="text">Let theme shine like a star</span>
                                <small className="label label-warning"><i className="fa fa-clock-o" /> 1 day</small>
                                <div className="tools">
                                    <i className="fa fa-edit" />
                                    <i className="fa fa-trash-o" />
                                </div>
                            </li>
                            <li>
                                <span className="handle">
                                    <i className="fa fa-ellipsis-v" />
                                    <i className="fa fa-ellipsis-v" />
                                </span>
                                <input type="checkbox" defaultValue />
                                <span className="text">Let theme shine like a star</span>
                                <small className="label label-success"><i className="fa fa-clock-o" /> 3 days</small>
                                <div className="tools">
                                    <i className="fa fa-edit" />
                                    <i className="fa fa-trash-o" />
                                </div>
                            </li>
                            <li>
                                <span className="handle">
                                    <i className="fa fa-ellipsis-v" />
                                    <i className="fa fa-ellipsis-v" />
                                </span>
                                <input type="checkbox" defaultValue />
                                <span className="text">Check your messages and notifications</span>
                                <small className="label label-primary"><i className="fa fa-clock-o" /> 1 week</small>
                                <div className="tools">
                                    <i className="fa fa-edit" />
                                    <i className="fa fa-trash-o" />
                                </div>
                            </li>
                            <li>
                                <span className="handle">
                                    <i className="fa fa-ellipsis-v" />
                                    <i className="fa fa-ellipsis-v" />
                                </span>
                                <input type="checkbox" defaultValue />
                                <span className="text">Let theme shine like a star</span>
                                <small className="label label-default"><i className="fa fa-clock-o" /> 1 month</small>
                                <div className="tools">
                                    <i className="fa fa-edit" />
                                    <i className="fa fa-trash-o" />
                                </div>
                            </li>
                        </ul>
                    </div>
                    {/* /.box-body */}
                    <div className="box-footer clearfix no-border">
                        <button type="button" className="btn btn-default pull-right"><i className="fa fa-plus" /> Add item</button>
                    </div>
                </div>
                {/* /.box */}
                {/* Chat box */}
                <div className="box box-success">
                    <div className="box-header">
                        <i className="fa fa-comments-o" />
                        <h3 className="box-title">Chat</h3>
                        <div className="box-tools pull-right" data-toggle="tooltip" title="Status">
                            <div className="btn-group" data-toggle="btn-toggle">
                                <button type="button" className="btn btn-default btn-sm active"><i className="fa fa-square text-green" />
                                </button>
                                <button type="button" className="btn btn-default btn-sm"><i className="fa fa-square text-red" /></button>
                            </div>
                        </div>
                    </div>
                    <div className="box-body chat" id="chat-box">
                        {/* chat item */}
                        <div className="item">
                            <img src="adminLTE/dist/img/user4-128x128.jpg" alt="user Avatar" className="online" />
                            <p className="message">
                                <a href="#abc" className="name">
                                    <small className="text-muted pull-right"><i className="fa fa-clock-o" /> 2:15</small>
                                    Mike Doe
                      </a>
                                I would like to meet you to discuss the latest news about
                                the arrival of the new theme. They say it is going to be one the
                                best themes on the market
                    </p>
                            <div className="attachment">
                                <h4>Attachments:</h4>
                                <p className="filename">
                                    Theme-thumbnail-image.jpg
                      </p>
                                <div className="pull-right">
                                    <button type="button" className="btn btn-primary btn-sm btn-flat">Open</button>
                                </div>
                            </div>
                            {/* /.attachment */}
                        </div>
                        {/* /.item */}
                        {/* chat item */}
                        <div className="item">
                            <img src="adminLTE/dist/img/user3-128x128.jpg" alt="user Avatar" className="offline" />
                            <p className="message">
                                <a href="#abc" className="name">
                                    <small className="text-muted pull-right"><i className="fa fa-clock-o" /> 5:15</small>
                                    Alexander Pierce
                      </a>
                                I would like to meet you to discuss the latest news about
                                the arrival of the new theme. They say it is going to be one the
                                best themes on the market
                    </p>
                        </div>
                        {/* /.item */}
                        {/* chat item */}
                        <div className="item">
                            <img src="adminLTE/dist/img/user2-160x160.jpg" alt="user Avatar" className="offline" />
                            <p className="message">
                                <a href="#abc" className="name">
                                    <small className="text-muted pull-right"><i className="fa fa-clock-o" /> 5:30</small>
                                    Susan Doe
                      </a>
                                I would like to meet you to discuss the latest news about
                                the arrival of the new theme. They say it is going to be one the
                                best themes on the market
                    </p>
                        </div>
                        {/* /.item */}
                    </div>
                    {/* /.chat */}
                    <div className="box-footer">
                        <div className="input-group">
                            <input className="form-control" placeholder="Type message..." />
                            <div className="input-group-btn">
                                <button type="button" className="btn btn-success"><i className="fa fa-plus" /></button>
                            </div>
                        </div>
                    </div>
                </div>
                {/* /.box (chat box) */}
            </section>
        );
    }
}

export {DashBoardContentLeft};