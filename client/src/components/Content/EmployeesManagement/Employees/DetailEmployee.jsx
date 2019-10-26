import React, { Component } from 'react';
import {InfoEmployee} from './../../CombineContent';
class DetailEmployee extends Component {
    render() {
        return (
            <div className="content-wrapper">
                {/* Content Header (Page header) */}
                <section className="content-header">
                    <h1>
                        Thông tin nhân viên
                    </h1>
                    <ol className="breadcrumb">
                        <li><a href="#"><i className="fa fa-dashboard" /> Home</a></li>
                        <li className="active">Quản lý nhân sự</li>
                    </ol>
                </section>
                <section className="content">
                    <InfoEmployee/>
                </section>
            </div >
        );
    };
}

export { DetailEmployee };