import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from '../components/Home/Home';
import CoCauToChuc from '../components/CoCauToChuc/CoCauToChuc';
import Editor from '../components/Editor/Editor';

class Routes extends Component {
    render() {
        return (
            <div>
                <Route exact path="/" component={Home} />
                <Route path="/cocautochuc" component={CoCauToChuc} />
                <Route path="/editor" component={Editor} />
            </div>
        );
    }
}

export default Routes;