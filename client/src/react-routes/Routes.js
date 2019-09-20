import React, { Component } from 'react';
import { Router as Router, Route } from "react-router-dom";
import { PrivateRoute} from './ComebineRoutes';
import { CoCauToChucPage, RegisterPage, EditorPage, LoginPage, DashBoardPage } from '../components/Page/CombineComponentPages';

class Routes extends Component {
    render() {
        return (
            <div>
                <PrivateRoute exact path="/" component={DashBoardPage} />
                <Route exact path="/login" component={LoginPage} />
                <Route exact path="/register" component={RegisterPage} />
                <PrivateRoute path="/cocautochuc" roles="Group1_2" component={CoCauToChucPage} />
                <PrivateRoute path="/editor" component={EditorPage} />
            </div>
        );
    }
}

export {Routes};