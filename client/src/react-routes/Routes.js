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
// import TaskTemplate from '../components/Content/TaskTemplate';

import { Route } from "react-router-dom";
import { RegisterPage } from '../components/Page/CombineComponentPages';
import { 
    CoCauToChuc, 
    DashBoard, 
    OrganizationStructure, 
    Target, 
    TaskTemplate, 
    KPIUnitCreate, 
    KPIUnitEvaluate, 
    KPIUnitOverview, 
    KPIPersonalOverview,
    KPIPersonalCreate,
    KPIPersonalEvaluate,
    KPIMember,
    MemberApprove,
    TaskManagement
} from '../components/Content/CombineContent';
import Privilege from '../components/Content/Privilege/Privilege';

const privatePage = [
    { path: '/', exact: true, component: () => <DashBoard/> },
    { path: '/home', exact: true, component: () => <Home/> },
    { path: '/admin/user', exact: true, component: () => <Users/> },
    { path: '/admin/department', exact: true, component: () => <Departments/> },
    { path: '/admin/department/detail/:id', exact: true, component: ({match}) => <DepartmentDetail match={match}/> },
    { path: '/admin/role', exact: true, component: () => <Role/> },
    { path: '/admin/resource', exact: true, component: () => <Resources/> },
    { path: '/admin/resource/link/edit/:id', exact: true, component: ({match}) => <EditLink match={match}/> },

    { path: '/task-template', exact: true, component: ({match}) => <TaskTemplate match={match}/> },
    { path: '/target', exact: true, component: ({match}) => <Target match={match}/> },
    { path: '/taskmanagement', exact: true, component: ({match}) => <TaskManagement match={match}/> },
    { path: '/kpiunitcreate', exact: true, component: ({match}) => <KPIUnitCreate match={match}/> },
    { path: '/kpiunitoverview', exact: true, component: ({match}) => <KPIUnitOverview match={match}/> },
    { path: '/kpiunitevaluate', exact: true, component: ({match}) => <KPIUnitEvaluate match={match}/> },
    { path: '/kpipersonaloverview', exact: true, component: ({match}) => <KPIPersonalOverview match={match}/> },
    { path: '/kpipersonalcreate', exact: true, component: ({match}) => <KPIPersonalCreate match={match}/> },
    { path: '/kpipersonalevaluate', exact: true, component: ({match}) => <KPIPersonalEvaluate match={match}/> },
    { path: '/kpimemberoverview', exact: true, component: ({match}) => <KPIMember match={match}/> },
    { path: '/kpimemberapprove', exact: true, component: ({match}) => <MemberApprove match={match}/> },
    { path: '/cocautochuc', exact: true, component: ({match}) => <CoCauToChuc match={match}/> },
    { path: '/privilege', exact: true, component: ({match}) => <Privilege match={match}/> },
    { path: '/organizationstructure', exact: true, component: ({match}) => <OrganizationStructure match={match}/> },
]

class Routes extends Component {
    
    render() {
        const { auth} = this.props;
        return (
            <React.Fragment>
                <AuthRoute auth={ auth } exact path="/login" component={LoginPage} />
                <Route exact path="/register" component={RegisterPage} />
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