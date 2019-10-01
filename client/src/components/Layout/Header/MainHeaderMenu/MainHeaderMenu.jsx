import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { userService } from '../../../../service/UserService';
import { userActions } from '../../../../redux-actions/CombineActions';
import "./MainHeaderMenu.css";

class MainHeaderMenu extends Component {
    constructor(props) {
        super(props);

        this.state = {
            currentRole: ''
        };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        const user = {...(userService.currentUserValue), currentRole: e.target.value};
        this.props.roleEdit(user);
    }

    render() {
        const currentUser = userService.currentUserValue;
        return (
            <div className="navbar-custom-menu">
                <ul className="nav navbar-nav">
                    {/* Messages: style can be found in dropdown.less*/}
                    <li className="dropdown messages-menu">
                        <a href="#abc" className="dropdown-toggle" data-toggle="dropdown">
                            <i className="fa fa-envelope-o" />
                            <span className="label label-success">4</span>
                        </a>
                        <ul className="dropdown-menu">
                            <li className="header">You have 4 messages</li>
                            <li>
                                {/* inner menu: contains the actual data */}
                                <ul className="menu">
                                    <li>{/* start message */}
                                        <a href="#abc">
                                            <div className="pull-left">
                                                <img src="adminLTE/dist/img/user2-160x160.jpg" className="img-circle" alt="User" />
                                            </div>
                                            <h4>
                                                Support Team
                <small><i className="fa fa-clock-o" /> 5 mins</small>
                                            </h4>
                                            <p>Why not buy a new awesome theme?</p>
                                        </a>
                                    </li>
                                    {/* end message */}
                                    <li>
                                        <a href="#abc">
                                            <div className="pull-left">
                                                <img src="adminLTE/dist/img/user3-128x128.jpg" className="img-circle" alt="User Avatar" />
                                            </div>
                                            <h4>
                                                AdminLTE Design Team
                <small><i className="fa fa-clock-o" /> 2 hours</small>
                                            </h4>
                                            <p>Why not buy a new awesome theme?</p>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#abc">
                                            <div className="pull-left">
                                                <img src="adminLTE/dist/img/user4-128x128.jpg" className="img-circle" alt="User Avatar" />
                                            </div>
                                            <h4>
                                                Developers
                <small><i className="fa fa-clock-o" /> Today</small>
                                            </h4>
                                            <p>Why not buy a new awesome theme?</p>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#abc">
                                            <div className="pull-left">
                                                <img src="adminLTE/dist/img/user3-128x128.jpg" className="img-circle" alt="User Avatar" />
                                            </div>
                                            <h4>
                                                Sales Department
                <small><i className="fa fa-clock-o" /> Yesterday</small>
                                            </h4>
                                            <p>Why not buy a new awesome theme?</p>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#abc">
                                            <div className="pull-left">
                                                <img src="adminLTE/dist/img/user4-128x128.jpg" className="img-circle" alt="User Avatar" />
                                            </div>
                                            <h4>
                                                Reviewers
                <small><i className="fa fa-clock-o" /> 2 days</small>
                                            </h4>
                                            <p>Why not buy a new awesome theme?</p>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li className="footer"><a href="#abc">See All Messages</a></li>
                        </ul>
                    </li>
                    {/* Notifications: style can be found in dropdown.less */}
                    <li className="dropdown notifications-menu">
                        <a href="#abc" className="dropdown-toggle" data-toggle="dropdown">
                            <i className="fa fa-bell-o" />
                            <span className="label label-warning">10</span>
                        </a>
                        <ul className="dropdown-menu">
                            <li className="header">You have 10 notifications</li>
                            <li>
                                {/* inner menu: contains the actual data */}
                                <ul className="menu">
                                    <li>
                                        <a href="#abc">
                                            <i className="fa fa-users text-aqua" /> 5 new members joined today
            </a>
                                    </li>
                                    <li>
                                        <a href="#abc">
                                            <i className="fa fa-warning text-yellow" /> Very long description here that may not fit into the
                                            page and may cause design problems
            </a>
                                    </li>
                                    <li>
                                        <a href="#abc">
                                            <i className="fa fa-users text-red" /> 5 new members joined
            </a>
                                    </li>
                                    <li>
                                        <a href="#abc">
                                            <i className="fa fa-shopping-cart text-green" /> 25 sales made
            </a>
                                    </li>
                                    <li>
                                        <a href="#abc">
                                            <i className="fa fa-user text-red" /> You changed your username
            </a>
                                    </li>
                                </ul>
                            </li>
                            <li className="footer"><a href="#abc">View all</a></li>
                        </ul>
                    </li>
                    {/* Tasks: style can be found in dropdown.less */}
                    <li className="dropdown tasks-menu">
                        <a href="#abc" className="dropdown-toggle" data-toggle="dropdown">
                            <i className="fa fa-flag-o" />
                            <span className="label label-danger">9</span>
                        </a>
                        <ul className="dropdown-menu">
                            <li className="header">You have 9 tasks</li>
                            <li>
                                {/* inner menu: contains the actual data */}
                                <ul className="menu">
                                    <li>{/* Task item */}
                                        <a href="#abc">
                                            <h3>
                                                Design some buttons
                <small className="pull-right">20%</small>
                                            </h3>
                                            <div className="progress xs">
                                                <div className="progress-bar progress-bar-aqua" style={{ width: '20%' }} role="progressbar" aria-valuenow={20} aria-valuemin={0} aria-valuemax={100}>
                                                    <span className="sr-only">20% Complete</span>
                                                </div>
                                            </div>
                                        </a>
                                    </li>
                                    {/* end task item */}
                                    <li>{/* Task item */}
                                        <a href="#abc">
                                            <h3>
                                                Create a nice theme
                <small className="pull-right">40%</small>
                                            </h3>
                                            <div className="progress xs">
                                                <div className="progress-bar progress-bar-green" style={{ width: '40%' }} role="progressbar" aria-valuenow={20} aria-valuemin={0} aria-valuemax={100}>
                                                    <span className="sr-only">40% Complete</span>
                                                </div>
                                            </div>
                                        </a>
                                    </li>
                                    {/* end task item */}
                                    <li>{/* Task item */}
                                        <a href="#abc">
                                            <h3>
                                                Some task I need to do
                <small className="pull-right">60%</small>
                                            </h3>
                                            <div className="progress xs">
                                                <div className="progress-bar progress-bar-red" style={{ width: '60%' }} role="progressbar" aria-valuenow={20} aria-valuemin={0} aria-valuemax={100}>
                                                    <span className="sr-only">60% Complete</span>
                                                </div>
                                            </div>
                                        </a>
                                    </li>
                                    {/* end task item */}
                                    <li>{/* Task item */}
                                        <a href="#abc">
                                            <h3>
                                                Make beautiful transitions
                <small className="pull-right">80%</small>
                                            </h3>
                                            <div className="progress xs">
                                                <div className="progress-bar progress-bar-yellow" style={{ width: '80%' }} role="progressbar" aria-valuenow={20} aria-valuemin={0} aria-valuemax={100}>
                                                    <span className="sr-only">80% Complete</span>
                                                </div>
                                            </div>
                                        </a>
                                    </li>
                                    {/* end task item */}
                                </ul>
                            </li>
                            <li className="footer">
                                <a href="#abc">View all tasks</a>
                            </li>
                        </ul>
                    </li>
                    {/* User Account: style can be found in dropdown.less */}
                    <li className="dropdown user user-menu">
                        <a href="#abc" className="dropdown-toggle" data-toggle="dropdown">
                            <img src="adminLTE/dist/img/user2-160x160.jpg" className="user-image" alt="User Avatar" />
                            <span className="hidden-xs">Huy BV </span>
                        </a>
                        <ul className="dropdown-menu">
                            {/* User image */}
                            <li className="user-header">
                                <img src="adminLTE/dist/img/user2-160x160.jpg" className="img-circle" alt="User Avatar" />
                                <p>
                                    HuyBV - Web Developer
                                    <small>Member since Nov. 2012</small>
                                </p>
                            </li>
                            {/* Menu Body */}
                            <li className="user-body">
                                <div className="row">
                                    <div className="col-xs-4 text-center">
                                        <a href="#abc">Followers</a>
                                    </div>
                                    <div className="col-xs-4 text-center">
                                        <a href="#abc">Sales</a>
                                    </div>
                                    <div className="col-xs-4 text-center">
                                        <a href="#abc">Friends</a>
                                    </div>
                                </div>
                                {/* /.row */}
                            </li>
                            {/* Menu Footer*/}
                            <li className="user-footer">
                                <div className="pull-left">
                                    <a href="#abc" className="btn btn-default btn-flat">Profile</a>
                                </div>
                                <div className="pull-right">
                                    <a href="/login" className="btn btn-default btn-flat">Sign out</a>
                                </div>
                            </li>
                        </ul>
                    </li>
                    {/* Control Sidebar Toggle Button */}
                    <li>
                        <select className="selectRole" defaultValue={currentUser.currentRole} onChange={this.handleChange}>
                            {currentUser.user.has.map(x => {
                                 return <option key={x.role._id} value={x.role._id}>{x.chucdanh.name}</option>
                            })}
                        </select>
                    </li>
                </ul>
            </div>
        );
    }
}
function mapState(state) {
    const { loggingIn } = state.authentication;
    return { loggingIn };
}

const actionCreators = {
    roleEdit: userActions.currentRoleEdit
};

const connectedMainHeaderMenu = connect(mapState, actionCreators)(MainHeaderMenu);
export { connectedMainHeaderMenu as MainHeaderMenu};
