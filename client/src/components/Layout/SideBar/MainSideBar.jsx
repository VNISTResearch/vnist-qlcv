import React, { Component } from 'react';
import Item from './Item';
import { getLinkOfRole } from '../../../redux-actions/User/User.action';
import { connect } from 'react-redux';
import { withTranslate } from 'react-redux-multilingual';

const menu = [
    {
        name: 'company',
        path: '/system-admin/companies',
        icon: 'fa fa-building'
    },{
        name: 'user',
        path: '/admin/user',
        icon: 'fa fa-users'
    },{
        name: 'department',
        path: '/admin/department',
        icon: 'fa fa-sitemap'
    },{
        name: 'resource',
        path: '/admin/resource',
        icon: 'fa fa-file'
    },{
        name: 'role',
        path: '/admin/role',
        icon: 'fa fa-key'
    },{
        name: 'tasktemplate',
        path: '/task-template',
        icon: 'fa fa-tasks'
    },{
        name: 'cocautochuc',
        path: '/cocautochuc',
        icon: 'fa fa-th'
    },{
        name: 'manageDocumentType',
        path: '/manage-document-type',
        icon: 'fa fa-file-text-o'
    },{
        name: 'manageDocument',
        path: '/manage-document',
        icon: 'fa fa-file'
    }
];

class MainSideBar extends Component {

    constructor(props) {
        super(props);
        this.state = { 
            qlcv: (window.location.pathname === '/taskmanagement' || window.location.pathname === '/kpimemberapprove') ? true : false ,
            qlKPI: (window.location.pathname === '/kpiunitoverview' || window.location.pathname === '/kpiunitcreate' || window.location.pathname === '/kpiunitevaluate' || window.location.pathname === '/kpipersonaloverview' || window.location.pathname === '/kpipersonalcreate' || window.location.pathname === '/kpipersonalevaluate') ? true : false,
            kpidv: (window.location.pathname === '/kpiunitoverview' || window.location.pathname === '/kpiunitcreate' || window.location.pathname === '/kpiunitevaluate' ) ? true : false,
            kpicn: (window.location.pathname === '/kpipersonaloverview' || window.location.pathname === '/kpipersonalcreate' || window.location.pathname === '/kpipersonalevaluate') ? true : false,
        }
        this.clickedQLCV = this.clickedQLCV.bind(this);
        this.clickedQLKPI = this.clickedQLKPI.bind(this);
        this.clickedKPIdv = this.clickedKPIdv.bind(this);
        this.clickedKPIcn = this.clickedKPIcn.bind(this);
    }

    componentDidMount(){
        if(localStorage.getItem('currentRole')){
            this.props.getLinkOfRole();
        }
    }

    clickedQLCV(){
        this.setState({
            qlcv: true,
            qlKPI: false,
            kpidv: false
        })
    }

    clickedQLKPI(){
        this.setState({
            qlcv: false,
            qlKPI: true,
            kpidv: false
        })
    }

    clickedKPIdv(){
        this.setState({
            qlcv: false,
            qlKPI: true,
            kpidv: true,
            kpicn: false
        })
    }

    clickedKPIcn(){
        this.setState({
            qlcv: false,
            qlKPI: true,
            kpidv: false,
            kpicn: true
        })
    }

    render() {
        const { user, translate } = this.props;
        return (
            <React.Fragment>
                <aside className="main-sidebar">
                    <section className="sidebar">
                        {/* Sidebar user panel */}
                        <div className="user-panel">
                            <div className="pull-left image">
                                <img src="/adminLTE/dist/img/user2-160x160.jpg" className="img-circle" alt="User avatar" />
                            </div>
                            <div className="pull-left info">
                                <p>User</p>
                                <a href="#abc"><i className="fa fa-circle text-success" /> Online</a>
                            </div>
                        </div>
                        {/* search form */}
                        <form action="#" method="get" className="sidebar-form">
                            <div className="input-group">
                                <input type="text" name="q" className="form-control" placeholder={ translate('mainSideBar.search') } />
                                <span className="input-group-btn">
                                    <button type="submit" name="search" id="search-btn" className="btn btn-flat"><i className="fa fa-search" />
                                    </button>
                                </span>
                            </div>
                        </form>
                        <ul className="sidebar-menu" data-widget="tree">
                            <li className="header">MENU</li>
                            <li>
                                <a href="/">
                                    <i className="fa fa-home" /> <span>{ translate('mainSideBar.home') }</span>
                                </a>
                            </li>
                            {
                                typeof(user.links) !== 'undefined' ? 
                                (
                                    user.links.map( link => (
                                        menu.map( item => 
                                            (link.resource.url === item.path) ?
                                            <Item
                                                key={ item.name }
                                                name={ translate('mainSideBar.'+item.name) }
                                                path={ item.path }
                                                icon={ item.icon }
                                            /> : null
                                        )
                                    ))
                                ) : null
                            }
                            {
                                <li className={ this.state.qlcv ? "treeview active" : "treeview" }>
                                    <a onClick={ this.clickedQLCV }>
                                        <i className="fa fa-dashboard" /> <span>Quản lý công việc</span>
                                        <span className="pull-right-container">
                                            <i className="fa fa-angle-left pull-right" />
                                        </span>
                                    </a>
                                    <ul className="treeview-menu">
                                        <li className={window.location.pathname === '/taskmanagement' ? "active" : ""}><a href="/taskmanagement"> Xem danh sách công việc</a></li>
                                        <li className={window.location.pathname === '/kpimemberapprove' ? "active" : ""}><a href="/kpimemberapprove"> Thực hiện công việc</a></li>
                                    </ul>
                                </li>
                            }
                            {
                                <li className={ this.state.qlKPI ? "treeview active" : "treeview"}>
                                    <a onClick={ this.clickedQLKPI }>
                                        <i className="fa fa-dashboard" /> <span>Quản lý KPI</span>
                                        <span className="pull-right-container">
                                            <i className="fa fa-angle-left pull-right" />
                                        </span>
                                    </a>
                                    <ul className="treeview-menu">
                                        <li className={ this.state.kpidv ? "treeview active" : "treeview"}>
                                            <a onClick={ this.clickedKPIdv }> KPI đơn vị
                                                <span className="pull-right-container">
                                                    <i className="fa fa-angle-left pull-right" />
                                                </span>
                                            </a>
                                            <ul className="treeview-menu">
                                                <li className={window.location.pathname === '/kpiunitoverview' ? "active" : ""}><a href="/kpiunitoverview">Tổng quan KPI đơn vị</a></li>
                                                <li className={window.location.pathname === '/kpiunitcreate' ? "active" : ""}><a href="/kpiunitcreate">Thiết lập KPI đơn vị</a></li>
                                                <li className={window.location.pathname === '/kpiunitevaluate' ? "active" : ""}><a href="/kpiunitevaluate">Dữ liệu KPI đơn vị</a></li>
                                            </ul>
                                        </li>
                                        <li className={ this.state.kpicn ? "treeview active" : "treeview"}>
                                            <a onClick={ this.clickedKPIcn }>KPI cá nhân
                                                <span className="pull-right-container">
                                                    <i className="fa fa-angle-left pull-right" />
                                                </span>
                                            </a>
                                            <ul className="treeview-menu">
                                                <li className={window.location.pathname === '/kpipersonaloverview' ? "active" : ""}><a href="/kpipersonaloverview">Tổng quan KPI cá nhân</a></li>
                                                <li className={window.location.pathname === '/kpiunitoverkpipersonalcreateview' ? "active" : ""}><a href="/kpipersonalcreate">Thiết lập KPI cá nhân</a></li>
                                                <li className={window.location.pathname === '/kpipersonalevaluate' ? "active" : ""}><a href="/kpipersonalevaluate">Dữ liệu KPI cá nhân</a></li>
                                            </ul>
                                        </li>
                                        <li><a href="/kpimemberoverview">Phê duyệt kpi nhân viên</a></li>
                                        <li><a href="/kpimemberapprove">Đánh giá kpi nhân viên</a></li>
                                        <li><a href="pages/tables/data.html">Thống kê KPI</a></li>
                                    </ul>
                                </li>
                            }
                        </ul>
                    </section>
                </aside>
            </React.Fragment>
        );
    }
}

const mapStates = state => {
    return state;
}

const dispatchStateToProps = (dispatch, props) => {
    return {
        getLinkOfRole: () => {
            dispatch(getLinkOfRole());
        },
    }
}

export default connect(mapStates, dispatchStateToProps) ( withTranslate(MainSideBar) );
