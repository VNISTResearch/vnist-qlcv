import React, { Component } from 'react';
import {connect} from 'react-redux';
import { withTranslate } from 'react-redux-multilingual';
import AdminManager from './AdminManager';
import RolesManager from './RolesManager';

class Role extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() { 
        const {translate} = this.props;
        return ( 
            <div className="content-wrapper">
                <section className="content-header">
                    <h1>
                        { translate('manageRole.name') }
                        <small><i className="fa fa-file"></i></small>
                    </h1>
                    <ol className="breadcrumb">
                        <li><a href="/admin"><i className="fa fa-dashboard" /> Admin</a></li>
                        <li className="active">{ translate('manageRole.name') }</li>
                    </ol>
                </section>
                {/* Main content */}
                <section className="content">
                    <div className="box">
                        <div className="box-header">
                        { translate('manageRole.name') }
                        </div>
                        <div className="box-content">
                            <div className="nav-tabs-custom">
                                <ul className="nav nav-tabs">
                                    <li className="active"><a href="#tab_1" data-toggle="tab">{ translate('manageRole.admins') }</a></li>
                                    <li className=""><a href="#tab_2" data-toggle="tab">{ translate('manageRole.roles') }</a></li>
                                </ul>
                                <div className="tab-content">
                                    <div className="tab-pane active" id="tab_1">
                                        <AdminManager/>
                                    </div>
                                    <div className="tab-pane" id="tab_2">
                                        <RolesManager/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
         
        );
    }
}

const mapState = state => {
    return state;
}

export default connect(mapState, null)(withTranslate(Role));