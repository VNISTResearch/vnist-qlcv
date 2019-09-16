import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { CoCauToChucPage, RegisterPage, EditorPage, LoginPage } from '../components/Page/CombineComponentPages';
// import MainPage from '../components/MainPage/MainPage';


class Routes extends Component {
    render() {
        return (
            <div>
                <Route exact path="/login" component={LoginPage} />
                <Route exact path="/register" component={RegisterPage} />
                <Route path="/cocautochuc" component={CoCauToChucPage} />
                <Route path="/editor" component={EditorPage} />
            </div>
        );
    }
}

export {Routes};