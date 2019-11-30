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
    AddEmployee,
    ListEmployee,
    DetailEmployee,
    UpdateEmployee,
    SalaryEmployee,
    TraningPlan,
    ListCourse,
    Timekeeping,
    Sabbatical,
    DashBoardEmployees
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
                <PrivateRoute exact path = "/addemployee" layout = {Layout} component = {AddEmployee}/>
                <PrivateRoute exact path = "/listemployee" layout = {Layout} component = {ListEmployee}/>
                <PrivateRoute exact path = "/detailemployee" layout = {Layout} component = {DetailEmployee}/>
                <PrivateRoute exact path = "/updateemployee" layout = {Layout} component = {UpdateEmployee}/>
                <PrivateRoute exact path = "/salaryemployee" layout = {Layout} component = {SalaryEmployee}/>
                <PrivateRoute exact path = "/timekeeping" layout = {Layout} component = {Timekeeping}/>
                <PrivateRoute exact path = "/trainingplan" layout = {Layout} component = {TraningPlan}/>
                <PrivateRoute exact path = "/listcourse" layout = {Layout} component = {ListCourse}/>
                <PrivateRoute exact path = "/sabbatical" layout = {Layout} component = {Sabbatical}/>
                <PrivateRoute exact path = "/dashboardemployees" layout = {Layout} component = {DashBoardEmployees}/>
            </React.Fragment>
        );
    }
}

export {Routes};