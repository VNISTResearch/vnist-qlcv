import React, { Component } from 'react';
import { Router as Router, Route } from "react-router-dom";
import { PrivateRoute} from './ComebineRoutes';
import { RegisterPage, LoginPage } from '../components/Page/CombineComponentPages';
import { CoCauToChuc, WorkTemplate, DashBoard } from '../components/Content/CombineContent';
import Layout from '../components/Layout/Layout';
import MucTieu from '../components/Content/MucTieu/MucTieu';

class Routes extends Component {
    render() {
        return (
            <React.Fragment>
                <PrivateRoute exact path="/" layout={Layout} component={DashBoard} />
                <Route exact path="/login" component={LoginPage} />
                <Route exact path="/register" component={RegisterPage} />
                <PrivateRoute exact path="/muctieu" layout={Layout} component={MucTieu} />
                <PrivateRoute path="/cocautochuc" layout={Layout} roles="TP" component={CoCauToChuc} />
                <PrivateRoute path="/WorkTemplate" layout={Layout} component={WorkTemplate} />
            </React.Fragment>
        );
    }
}

export {Routes};