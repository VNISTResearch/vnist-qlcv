import React, { Component } from 'react';

class MainFooter extends Component {
    render() {
        return (
            <footer className="main-footer">
                <div className="pull-right hidden-xs">
                    <b>Version</b> 2.4.18
                </div>
                <strong>Create @ 2019-2020 <a href="/">VNIST</a>.</strong> All rights reserved.
            </footer>
        );
    }
}

export {MainFooter};