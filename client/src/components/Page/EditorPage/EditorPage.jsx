import React, { Component } from 'react';
import { Editor} from '../../Content/CombineContent';
import {MainHeader, MainSideBar, MainFooter} from '../../Layout/CombineMainLayout';


class EditorPage extends Component {
    render() {
        return (
            <div className="hold-transition skin-blue sidebar-mini">
                <div className="wrapper">
                    <MainHeader />
                    <MainSideBar />
                    <Editor />
                    <MainFooter />
                </div>
            </div>
        );
    }
}

export {EditorPage};