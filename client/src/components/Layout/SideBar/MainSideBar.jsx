import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { userService } from '../../../service/CombineService';

class MainSideBar extends Component {

    checkURL = (url) => {
        var result = true;
        // userService.currentUserValue.user.has.map((u) => {
        //     if (u.role._id === userService.currentUserValue.currentRole) {
        //         u.role.perlink.url.map((link) => {
        //             if (url === link)
        //                 result = true;
        //             return true;
        //         })
        //     }
        //     return true;
        // });
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
                            {
                                this.checkURL("/") &&
                                <li className="active">
                                    <a href="/">
                                        <i className="fa fa-dashboard" /> <span>Home</span>
                                    </a>
                                </li>
                            }
                            {
                                this.checkURL("/tasktemplate") &&
                                <li>
                                    <a href="/tasktemplate">
                                        <i className="fa fa-th" /> <span>WorkTemplate</span>
                                    </a>
                                </li>
                            }
                            {
                                this.checkURL("/target") &&
                                <li className="treeview">
                                    <a href="#abc">
                                        <i className="fa fa-dashboard" /> <span>Quản lý KPI</span>
                                        <span className="pull-right-container">
                                            <i className="fa fa-angle-left pull-right" />
                                        </span>
                                    </a>
                                    <ul className="treeview-menu">
                                        <li><a href="/kpiunit"><i className="fa fa-circle-o" /> KPI đơn vị</a></li>
                                        <li><a href="/kpipersonal"><i className="fa fa-circle-o" /> KPI cá nhân</a></li>
                                        <li><a href="/kpievaluate"><i className="fa fa-circle-o" /> Dữ liệu KPI</a></li>
                                        <li><a href="pages/tables/data.html"><i className="fa fa-circle-o" /> Thống kê KPI</a></li>
                                    </ul>
                                </li>
                            }
                            {
                                this.checkURL("/organizationstructure") &&
                                <li>
                                    <Link to="/organizationstructure">
                                        <i className="fa fa-dashboard" /> <span>Organization Structure</span>
                                    </Link>
                                </li>
                            }
                            {
                                this.checkURL("/cocautochuc") &&
                                <li>
                                    <Link to="/cocautochuc">
                                        <i className="fa fa-th" /> <span>Cơ cấu tổ chức</span>
                                    </Link>
                                </li>
                            }
                            {
                                this.checkURL("/privilege") &&
                                <li className="treeview">
                                    <Link to="#abc">
                                        <i className="fa fa-dashboard" /> <span>Phân quyền</span>
                                        <span className="pull-right-container">
                                            <i className="fa fa-angle-left pull-right" />
                                        </span>
                                    </Link>
                                    <ul className="treeview-menu">
                                        <li><Link to="/privilege"><i className="fa fa-circle-o" /> Quyền trên sản phẩm</Link></li>
                                        <li><Link to="pages/tables/data.html"><i className="fa fa-circle-o" /> Data tables</Link></li>
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