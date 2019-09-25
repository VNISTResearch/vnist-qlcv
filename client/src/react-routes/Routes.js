import React, { Component } from 'react';
import { Router as Router, Route } from "react-router-dom";
import { PrivateRoute} from './ComebineRoutes';
import { RegisterPage, LoginPage } from '../components/Page/CombineComponentPages';
import { CoCauToChuc, WorkTemplate, DashBoard } from '../components/Content/CombineContent';
import Layout from '../components/Layout/Layout';

class Routes extends Component {
    render() {
        return (
            <div>
                <PrivateRoute exact path="/" layout={Layout} component={DashBoard} />
                <Route exact path="/login" component={LoginPage} />
                <Route exact path="/register" component={RegisterPage} />
                <PrivateRoute path="/cocautochuc" layout={Layout} access="/cocautochuc" component={CoCauToChuc} />
                <PrivateRoute path="/WorkTemplate" layout={Layout} component={WorkTemplate} />
            </div>
        );
    }
}

export {Routes};