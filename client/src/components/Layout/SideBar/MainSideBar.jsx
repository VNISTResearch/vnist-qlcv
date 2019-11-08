import React, { Component } from 'react';
import Item from './Item';
import { getLinkOfRole } from '../../../redux-actions/User/User.action';
import { connect } from 'react-redux';
import { withTranslate } from 'react-redux-multilingual';

const menu = [
    {
        name: 'user',
        path: '/admin/user',
        icon: 'fa fa-users'
    },{
        name: 'department',
        path: '/admin/department',
        icon: 'fa fa-building'
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
    }
];

class MainSideBar extends Component {

    componentDidMount(){
        if(localStorage.getItem('currentRole')){
            this.props.getLinkOfRole();
        }
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
