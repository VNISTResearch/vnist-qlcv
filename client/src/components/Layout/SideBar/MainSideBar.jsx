import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { userService } from '../../../service/CombineService';

class MainSideBar extends Component {

    checkURL = (url) => {
        var result = false;
        userService.currentUserValue.user.has.map((u) => {
            if (u.role._id === userService.currentUserValue.currentRole) {
                u.role.perlink.url.map((link) => {
                    if (url === link)
                        result = true;
                    return true;
                })
            }
            return true;
        });
        return result;
    }

    render() {
        return (
            <React.Fragment>
                <aside className="main-sidebar">
                    {/* sidebar: style can be found in sidebar.less */}
                    <section className="sidebar">
                        {/* Sidebar user panel */}
                        <div className="user-panel">
                            <div className="pull-left image">
                                <img src="adminLTE/dist/img/user2-160x160.jpg" className="img-circle" alt="User avatar" />
                            </div>
                            <div className="pull-left info">
                                <p>Huy BV</p>
                                <a href="#abc"><i className="fa fa-circle text-success" /> Online</a>
                            </div>
                        </div>
                        {/* search form */}
                        <form action="#" method="get" className="sidebar-form">
                            <div className="input-group">
                                <input type="text" name="q" className="form-control" placeholder="Search..." />
                                <span className="input-group-btn">
                                    <button type="submit" name="search" id="search-btn" className="btn btn-flat"><i className="fa fa-search" />
                                    </button>
                                </span>
                            </div>
                        </form>
                        {/* /.search form */}
                        {/* sidebar menu: : style can be found in sidebar.less */}
                        <ul className="sidebar-menu" data-widget="tree">
                            <li className="header">MAIN NAVIGATION</li>
                            <li className="active treeview">
                                {
                                    this.checkURL("/") &&
                                    <Link to="/">
                                        <i className="fa fa-dashboard" /> <span>Home</span>
                                        <span className="pull-right-container">
                                            <i className="fa fa-angle-left pull-right" />
                                        </span>
                                    </Link>
                                }
                            </li>
                            <li>
                                {
                                    this.checkURL("/cocautochuc") &&
                                    <Link to="/cocautochuc">
                                        <i className="fa fa-th" /> <span>Cơ cấu tổ chức</span>
                                        <span className="pull-right-container">
                                            <i className="fa fa-angle-left pull-right" />
                                        </span>
                                    </Link>
                                }
                            </li>
                            <li>
                                {
                                    this.checkURL("/tasktemplate") &&
                                    <Link to="/tasktemplate">
                                        <i className="fa fa-th" /> <span>WorkTemplate</span>
                                        <span className="pull-right-container">
                                            <i className="fa fa-angle-left pull-right" />
                                        </span>
                                    </Link>
                                }
                            </li>
                            <li className="treeview">
                                {
                                    this.checkURL("/target") &&
                                    <Link to="/target">
                                        <i className="fa fa-dashboard" /> <span>Quản lý mục tiêu</span>
                                        <span className="pull-right-container">
                                            <i className="fa fa-angle-left pull-right" />
                                        </span>
                                    </Link>
                                }
                            </li>
                            <li className="treeview">
                                {
                                    this.checkURL("/organizationstructure") &&
                                    <Link to="/organizationstructure">
                                        <i className="fa fa-dashboard" /> <span>Organization Structure</span>
                                        <span className="pull-right-container">
                                            <i className="fa fa-angle-left pull-right" />
                                        </span>
                                    </Link>
                                }
                            </li>
                            {
                                this.checkURL("/privilege") &&
                                <li className="treeview">
                                    <Link to="/privilege">
                                        <i className="fa fa-dashboard" /> <span>Phân quyền</span>
                                    </Link>
                                    <ul className="treeview-menu">
                                        <li><a href="pages/tables/simple.html"><i className="fa fa-circle-o" /> Role</a></li>
                                        <li><a href="pages/tables/data.html"><i className="fa fa-circle-o" /> Data tables</a></li>
                                    </ul>
                                </li>
                            }
                            {/* <li className="treeview">
                                <a href="#abc">
                                    <i className="fa fa-edit" /> <span>Forms</span>
                                    <span className="pull-right-container">
                                        <i className="fa fa-angle-left pull-right" />
                                    </span>
                                </a>
                                <ul className="treeview-menu">
                                    <li><a href="pages/forms/general.html"><i className="fa fa-circle-o" /> General Elements</a></li>
                                    <li><a href="pages/forms/advanced.html"><i className="fa fa-circle-o" /> Advanced Elements</a></li>
                                    <li><a href="pages/forms/editors.html"><i className="fa fa-circle-o" /> Editors</a></li>
                                </ul>
                            </li>
                            <li className="treeview">
                                <a href="#abc">
                                    <i className="fa fa-table" /> <span>Tables</span>
                                    <span className="pull-right-container">
                                        <i className="fa fa-angle-left pull-right" />
                                    </span>
                                </a>
                                <ul className="treeview-menu">
                                    <li><a href="pages/tables/simple.html"><i className="fa fa-circle-o" /> Simple tables</a></li>
                                    <li><a href="pages/tables/data.html"><i className="fa fa-circle-o" /> Data tables</a></li>
                                </ul>
                            </li>
                            <li>
                                <a href="pages/calendar.html">
                                    <i className="fa fa-calendar" /> <span>Calendar</span>
                                    <span className="pull-right-container">
                                        <small className="label pull-right bg-red">3</small>
                                        <small className="label pull-right bg-blue">17</small>
                                    </span>
                                </a>
                            </li>
                            <li>
                                <a href="pages/mailbox/mailbox.html">
                                    <i className="fa fa-envelope" /> <span>Mailbox</span>
                                    <span className="pull-right-container">
                                        <small className="label pull-right bg-yellow">12</small>
                                        <small className="label pull-right bg-green">16</small>
                                        <small className="label pull-right bg-red">5</small>
                                    </span>
                                </a>
                            </li>
                            <li className="treeview">
                                <a href="#abc">
                                    <i className="fa fa-folder" /> <span>Examples</span>
                                    <span className="pull-right-container">
                                        <i className="fa fa-angle-left pull-right" />
                                    </span>
                                </a>
                                <ul className="treeview-menu">
                                    <li><a href="pages/examples/invoice.html"><i className="fa fa-circle-o" /> Invoice</a></li>
                                    <li><a href="pages/examples/profile.html"><i className="fa fa-circle-o" /> Profile</a></li>
                                    <li><a href="pages/examples/login.html"><i className="fa fa-circle-o" /> Login</a></li>
                                    <li><a href="pages/examples/register.html"><i className="fa fa-circle-o" /> Register</a></li>
                                    <li><a href="pages/examples/lockscreen.html"><i className="fa fa-circle-o" /> Lockscreen</a></li>
                                    <li><a href="pages/examples/404.html"><i className="fa fa-circle-o" /> 404 Error</a></li>
                                    <li><a href="pages/examples/500.html"><i className="fa fa-circle-o" /> 500 Error</a></li>
                                    <li><a href="pages/examples/blank.html"><i className="fa fa-circle-o" /> Blank Page</a></li>
                                    <li><a href="pages/examples/pace.html"><i className="fa fa-circle-o" /> Pace Page</a></li>
                                </ul>
                            </li>
                            <li className="treeview">
                                <a href="#abc">
                                    <i className="fa fa-share" /> <span>Multilevel</span>
                                    <span className="pull-right-container">
                                        <i className="fa fa-angle-left pull-right" />
                                    </span>
                                </a>
                                <ul className="treeview-menu">
                                    <li><a href="#abc"><i className="fa fa-circle-o" /> Level One</a></li>
                                    <li className="treeview">
                                        <a href="#abc"><i className="fa fa-circle-o" /> Level One
                    <span className="pull-right-container">
                                                <i className="fa fa-angle-left pull-right" />
                                            </span>
                                        </a>
                                        <ul className="treeview-menu">
                                            <li><a href="#abc"><i className="fa fa-circle-o" /> Level Two</a></li>
                                            <li className="treeview">
                                                <a href="#abc"><i className="fa fa-circle-o" /> Level Two
                        <span className="pull-right-container">
                                                        <i className="fa fa-angle-left pull-right" />
                                                    </span>
                                                </a>
                                                <ul className="treeview-menu">
                                                    <li><a href="#abc"><i className="fa fa-circle-o" /> Level Three</a></li>
                                                    <li><a href="#abc"><i className="fa fa-circle-o" /> Level Three</a></li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>
                                    <li><a href="#abc"><i className="fa fa-circle-o" /> Level One</a></li>
                                </ul>
                            </li> */}
                        </ul>
                    </section>
                    {/* /.sidebar */}
                </aside>
            </React.Fragment>
        );
    }
}

export { MainSideBar };