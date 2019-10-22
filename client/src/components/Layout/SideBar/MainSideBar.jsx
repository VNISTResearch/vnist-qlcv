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
                                        <li className="treeview">
                                            <a href="#kpiunit"> KPI đơn vị
                                                <span className="pull-right-container">
                                                    <i className="fa fa-angle-left pull-right" />
                                                </span>
                                            </a>
                                            <ul className="treeview-menu">
                                                <li><a href="/kpiunitoverview">Tổng quan KPI đơn vị</a></li>
                                                <li><a href="/kpiunitcreate">Thiết lập KPI đơn vị</a></li>
                                                <li><a href="/kpiunitevaluate">Dữ liệu KPI đơn vị</a></li>
                                            </ul>
                                        </li>
                                        <li className="treeview">
                                            <a href="#kpipersonnal">KPI cá nhân
                                                <span className="pull-right-container">
                                                    <i className="fa fa-angle-left pull-right" />
                                                </span>
                                            </a>
                                            <ul className="treeview-menu">
                                                <li><a href="/kpipersonaloverview">Tổng quan KPI cá nhân</a></li>
                                                <li><a href="/kpipersonalcreate">Thiết lập KPI cá nhân</a></li>
                                                <li><a href="/kpipersonalevaluate">Dữ liệu KPI cá nhân</a></li>
                                            </ul>
                                        </li>
                                        <li><a href="pages/tables/data.html">Thống kê KPI</a></li>
                                    </ul>
                                </li>
                            }
                            {
                                this.checkURL("/organizationstructure") &&
                                <li>
                                    <a href="/organizationstructure">
                                        <i className="fa fa-dashboard" /> <span>Organization Structure</span>
                                    </a>
                                </li>
                            }
                            {
                                this.checkURL("/cocautochuc") &&
                                <li>
                                    <a href="/cocautochuc">
                                        <i className="fa fa-th" /> <span>Cơ cấu tổ chức</span>
                                    </a>
                                </li>
                            }
                            {
                                this.checkURL("/privilege") &&
                                <li className="treeview">
                                    <a href="#abc">
                                        <i className="fa fa-dashboard" /> <span>Phân quyền</span>
                                        <span className="pull-right-container">
                                            <i className="fa fa-angle-left pull-right" />
                                        </span>
                                    </a>
                                    <ul className="treeview-menu">
                                        <li><a href="/privilege"> Quyền trên sản phẩm</a></li>
                                        <li><a href="pages/tables/data.html"> Data tables</a></li>
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
                                    <li><a href="pages/forms/general.html"> General Elements</a></li>
                                    <li><a href="pages/forms/advanced.html"> Advanced Elements</a></li>
                                    <li><a href="pages/forms/editors.html"> Editors</a></li>
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
                                    <li><a href="pages/tables/simple.html"> Simple tables</a></li>
                                    <li><a href="pages/tables/data.html"> Data tables</a></li>
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
                                    <li><a href="pages/examples/invoice.html"> Invoice</a></li>
                                    <li><a href="pages/examples/profile.html"> Profile</a></li>
                                    <li><a href="pages/examples/login.html"> Login</a></li>
                                    <li><a href="pages/examples/register.html"> Register</a></li>
                                    <li><a href="pages/examples/lockscreen.html"> Lockscreen</a></li>
                                    <li><a href="pages/examples/404.html"> 404 Error</a></li>
                                    <li><a href="pages/examples/500.html"> 500 Error</a></li>
                                    <li><a href="pages/examples/blank.html"> Blank Page</a></li>
                                    <li><a href="pages/examples/pace.html"> Pace Page</a></li>
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
                                    <li><a href="#abc"> Level One</a></li>
                                    <li className="treeview">
                                        <a href="#abc"> Level One
                                            <span className="pull-right-container">
                                                <i className="fa fa-angle-left pull-right" />
                                            </span>
                                        </a>
                                        <ul className="treeview-menu">
                                            <li><a href="#abc"> Level Two</a></li>
                                            <li className="treeview">
                                                <a href="#abc"> Level Two
                                                    <span className="pull-right-container">
                                                        <i className="fa fa-angle-left pull-right" />
                                                    </span>
                                                </a>
                                                <ul className="treeview-menu">
                                                    <li><a href="#abc"> Level Three</a></li>
                                                    <li><a href="#abc"> Level Three</a></li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>
                                    <li><a href="#abc"> Level One</a></li>
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