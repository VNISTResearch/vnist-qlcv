import React, { Component } from 'react';
import { connect } from 'react-redux';
import { get } from '../../../redux-actions/Admin/Departments.action';
import { withTranslate } from 'react-redux-multilingual';
import DepartmentTable from './DepartmentTable';
import DepartmentTree from './DepartmentTree';

class Departments extends Component {
    constructor(props) {
        super(props);
        this.state = { }
    }

    componentDidMount(){
        this.props.get();
    }

    render() { 
        const {aDepartments, translate} = this.props;
        return ( 
            <div className="content-wrapper">
                <section className="content-header">
                    <h1>
                        { translate('manageDepartment.name') }
                        <small><i className="fa fa-building"></i></small>
                    </h1>
                    <ol className="breadcrumb">
                        <li><a href="/admin"><i className="fa fa-dashboard" /> Admin</a></li>
                        <li className="active">{ translate('manageDepartment.name') }</li>
                    </ol>
                </section>
                <section className="content">
                    <div className="nav-tabs-custom">
                        <ul className="nav nav-tabs">
                            <li className="active"><a href="#tab_1" data-toggle="tab">{ translate('manageDepartment.tableDepartment') }</a></li>
                            <li className=""><a href="#tab_2" data-toggle="tab">{ translate('manageDepartment.relationDepartment') }</a></li>
                        </ul>
                        <div className="tab-content">
                            <div className="tab-pane active" id="tab_1">
                                <DepartmentTable/>
                            </div>
                            <div className="tab-pane" id="tab_2">
                                <DepartmentTree
                                    tree={ aDepartments.tree !== undefined ? aDepartments.tree : null}
                                />
                            </div>
                        </div>
                    </div>
                </section>
            </div>
         );
    }
}
 
const mapStateToProps = state => {
    return state;
}

const mapDispatchToProps = (dispatch, props) => {
    return{
        get: () => {
            dispatch( get() );
        },
    }
}

export default connect( mapStateToProps, mapDispatchToProps )( withTranslate(Departments) );