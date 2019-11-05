import React, { Component } from 'react';
import { connect } from 'react-redux';
import { PrivateRoute, AuthRoute } from './ComebineRoutes';
import { Home } from '../components/Content/CombineContent';
import Layout from '../components/Layout/Layout';
import Users from '../components/Admin/Users/index';
import LoginPage from '../components/Page/LoginPage/LoginPage'
import Departments from '../components/Admin/Departments';
import DepartmentDetail from '../components/Admin/Departments/Details';
import Role from '../components/Admin/Role';
import Resources from '../components/Admin/Resources';
import EditLink from '../components/Admin/Resources/EditLink';
import TaskTemplate from '../components/Content/TaskTemplate';

const privatePage = [
    { path: '/', exact: true, component: () => <Home/> },
    { path: '/home', exact: true, component: () => <Home/> },
    { path: '/admin/user', exact: true, component: () => <Users/> },
    { path: '/admin/department', exact: true, component: () => <Departments/> },
    { path: '/admin/department/detail/:id', exact: true, component: ({match}) => <DepartmentDetail match={match}/> },
    { path: '/admin/role', exact: true, component: () => <Role/> },
    { path: '/admin/resource', exact: true, component: () => <Resources/> },
    { path: '/admin/resource/link/edit/:id', exact: true, component: ({match}) => <EditLink match={match}/> },
    { path: '/task-template', exact: true, component: ({match}) => <TaskTemplate match={match}/> },
]

class Routes extends Component {
    
    render() {
        const { auth} = this.props;
        return (
            <React.Fragment>
                <AuthRoute auth={ auth } exact path="/login" component={LoginPage} />
                {
                    privatePage.map( page => (
                        <PrivateRoute 
                            key={ page.path }
                            auth={ auth }
                            exact={ page.exact }
                            path={ page.path } 
                            layout={ Layout } 
                            component={ page.component } 
                        />
                    ))
                }
            </React.Fragment>
        );
    }
}

const mapStateToProps = state => {
    return state;
}

export default connect(mapStateToProps, null)(Routes);