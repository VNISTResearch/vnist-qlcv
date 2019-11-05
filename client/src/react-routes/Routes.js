import React, { Component } from 'react';
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
        return (
            <React.Fragment>
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

export {Routes};