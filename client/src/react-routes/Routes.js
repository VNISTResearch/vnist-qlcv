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

import { Route } from "react-router-dom";
import { PrivateRoute} from './ComebineRoutes';
import { RegisterPage, LoginPage } from '../components/Page/CombineComponentPages';
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
import Layout from '../components/Layout/Layout';
import Privilege from '../components/Content/Privilege/Privilege';
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
                <PrivateRoute exact path="/" layout={Layout} component={DashBoard} />
                <Route exact path="/login" component={LoginPage} />
                <Route exact path="/register" component={RegisterPage} />
                <PrivateRoute exact path="/target" layout={Layout} component={Target} />
                <PrivateRoute exact path="/taskmanagement" layout={Layout} component={TaskManagement} />
                <PrivateRoute exact path="/kpiunitcreate" layout={Layout} component={KPIUnitCreate} />
                <PrivateRoute exact path="/kpiunitoverview" layout={Layout} component={KPIUnitOverview} />
                <PrivateRoute exact path="/kpiunitevaluate" layout={Layout} component={KPIUnitEvaluate} />
                <PrivateRoute exact path="/kpipersonaloverview" layout={Layout} component={KPIPersonalOverview} />
                <PrivateRoute exact path="/kpipersonalcreate" layout={Layout} component={KPIPersonalCreate} />
                <PrivateRoute exact path="/kpipersonalevaluate" layout={Layout} component={KPIPersonalEvaluate} />
                <PrivateRoute exact path="/kpimemberoverview" layout={Layout} component={KPIMember} />
                <PrivateRoute exact path="/kpimemberapprove" layout={Layout} component={MemberApprove} />
                <PrivateRoute path="/cocautochuc" layout={Layout} component={CoCauToChuc} />
                <PrivateRoute path="/tasktemplate" layout={Layout} component={TaskTemplate} />
                <PrivateRoute path="/privilege" layout={Layout} component={Privilege} />
                <PrivateRoute path="/organizationstructure" layout={Layout} component={OrganizationStructure} />
            </React.Fragment>
        );
    }
}

const mapStateToProps = state => {
    return state;
}

export default connect(mapStateToProps, null)(Routes);