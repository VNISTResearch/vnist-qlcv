import React, { Component } from 'react';
import { Router as Router, Route } from "react-router-dom";
import { PrivateRoute} from './ComebineRoutes';
import { RegisterPage, LoginPage } from '../components/Page/CombineComponentPages';
import { CoCauToChuc, Editor, DashBoard } from '../components/Content/CombineContent';
import Layout from '../components/Layout/Layout';

class Routes extends Component {
    render() {
        return (
            <div>
                <PrivateRoute exact path="/" layout={Layout} component={DashBoard} />
                <Route exact path="/login" component={LoginPage} />
                <Route exact path="/register" component={RegisterPage} />
                <PrivateRoute path="/cocautochuc" layout={Layout} roles="Group1_2" component={CoCauToChuc} />
                <PrivateRoute path="/editor" layout={Layout} component={Editor} />
            </div>
        );
    }
}

export {Routes};