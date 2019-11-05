import React, { Component } from 'react';
import { withTranslate } from 'react-redux-multilingual';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class TaskTemplate extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="content-wrapper">
                {/* Content Header (Page header) */}
                <section className="content-header">
                    <h1>
                        Mẫu Công việc
                        <small>sample</small>
                    </h1>
                    <ol className="breadcrumb">
                        <li><a href="#abc"><i className="fa fa-dashboard" /> Trang Chủ</a></li>
                        <li className="active">Mẫu Công Việc</li>
                    </ol>
                </section>
                {/* Main content */}
                <section className="content">
                    <button className="btn btn-success" onClick={this.toggleForm}>
                        <i className="fa fa-plus"/>
                        <span> Tạo mẫu công việc </span>
                    </button>
                </section>
            </div>
         );
    }
}

const mapState = state => state;
 
export default connect(mapState, null)(withTranslate(TaskTemplate));