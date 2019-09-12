import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from '../components/Home/Home';
import CoCauToChuc from '../components/CoCauToChuc/CoCauToChuc';
import Editor from '../components/Editor/Editor';
import Login from '../components/Login/Login';
import MainPage from '../components/MainPage/MainPage';

class Routes extends Component {
    render() {
        return (
            <div>
                <Route exact path="/login" component={Login} />
                <Route exact path="/" component={MainPage} />
                <Route path="/cocautochuc" component={CoCauToChuc} />
                <Route path="/editor" component={Editor} />
            </div>
        );
    }
}

export default Routes;