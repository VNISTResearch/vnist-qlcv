import React, { Component } from 'react';
import EditorContent from './EditorContent/EditorContent';
import MainHeader from '../MainHeader/MainHeader';
import MainSideBar from '../MainSideBar/MainSideBar';
import MainFooter from '../MainFooter/MainFooter';

class Editor extends Component {
    render() {
        return (
            <div className="hold-transition skin-blue sidebar-mini">
                <div className="wrapper">
                    <MainHeader />
                    <MainSideBar />
                    <EditorContent />
                    <MainFooter />
                </div>
            </div>
        );
    }
}

export default Editor;