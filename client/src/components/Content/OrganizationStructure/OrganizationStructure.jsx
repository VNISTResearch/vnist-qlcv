import React, { Component } from 'react';
import './OrganizationStructure.css'
class OrganizationStructure extends Component {
    UNSAFE_componentWillMount() {
        // loadjs('js/home.js');
        let script = document.createElement('script');
        script.src = 'main/js/OrganizationStructure.js';
        script.async = true;
        script.defer = true;
        document.body.appendChild(script);
    }
    render() {
        return (
            <div className="content-wrapper">
                {/* Content Header (Page header) */}
                <section className="content-header">
                    <h1>
                        Quản lý mẫu công việc
                        <small>mẫu công việc</small>
                    </h1>
                    <ol className="breadcrumb">
                        <li><a href="#abc"><i className="fa fa-dashboard" /> Home</a></li>
                        <li><a href="#abc">TaskTemplate</a></li>
                        <li className="active">Data tables</li>
                    </ol>
                </section>
                {/* Main content */}
                <section className="content">
                    <div id="orgChartContainer">
                        <div id="orgChart" />
                    </div>
                    {/* <div id="consoleOutput">
                    </div> */}
                </section>
                {/* /.content */}
            </div>
        );
    }
}

export { OrganizationStructure };