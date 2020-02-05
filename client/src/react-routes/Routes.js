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
    TaskManagement,
    TaskDashboard
} from '../components/Content/CombineContent';
import Privilege from '../components/Content/Privilege/Privilege';
import { ReportManagement } from '../components/Content/ReportManagement/ReportManagement';

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
    { path: '/task-management', exact: true, component: ({match}) => <TaskManagement match={match}/> },
    { path: '/task-management/dashboard', exact: true, component: ({match}) => <TaskDashboard match={match}/> },
    { path: '/kpi-unit/create', exact: true, component: ({match}) => <KPIUnitCreate match={match}/> },
    { path: '/kpi-unit/overview', exact: true, component: ({match}) => <KPIUnitOverview match={match}/> },
    { path: '/kpi-unit/evaluate', exact: true, component: ({match}) => <KPIUnitEvaluate match={match}/> },
    { path: '/kpi-personal/overview', exact: true, component: ({match}) => <KPIPersonalOverview match={match}/> },
    { path: '/kpi-personal/create', exact: true, component: ({match}) => <KPIPersonalCreate match={match}/> },
    { path: '/kpi-personal/evaluate', exact: true, component: ({match}) => <KPIPersonalEvaluate match={match}/> },
    { path: '/kpi-member/overview', exact: true, component: ({match}) => <KPIMember match={match}/> },
    { path: '/cocautochuc', exact: true, component: ({match}) => <CoCauToChuc match={match}/> },
    { path: '/privilege', exact: true, component: ({match}) => <Privilege match={match}/> },
    { path: '/organizationstructure', exact: true, component: ({match}) => <OrganizationStructure match={match}/> },
    { path: '/task-report', exact: true, component: ({match}) => <ReportManagement match={match}/> },
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