import React, { Component } from 'react';
import { connect } from 'react-redux';
import { get, create, deleteD } from '../../../redux-actions/Admin/Departments.action';
import Swal from 'sweetalert2';
import {Link} from 'react-router-dom';
import { withTranslate } from 'react-redux-multilingual';
import CreateDepartment from './CreateDepartment';

class Departments extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            name: null,
            description: null,
            dean: null,
            vice_dean: null,
            employee: null,
            deleteAlert: true
        }
        this.toggleForm = this.toggleForm.bind(this);
        this.inputChange = this.inputChange.bind(this);
        this.save = this.save.bind(this);
        this.alert = this.alert.bind(this);
    }

    toggleForm(){
        const {showForm} = this.state;
        this.setState({
            showForm: !showForm 
        });
    }

    inputChange = (e) => {
        const target = e.target;
        const name = target.name;
        const value = target.value;
        this.setState({
            [name]: value
        });
    }

    save = (e) => {
        e.preventDefault();
        var {name, description, dean, vice_dean, employee} = this.state;
        this.props.create({
            name,
            description,
            dean,
            vice_dean,
            employee
        });
    }

    alert(id, title, name){
        Swal.fire({
            title: `${title} "${name}"`,
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Delete'
        }).then((res) => {
            if(res.value){
                this.props.delete(id)
            }
        });
    }

    componentDidMount(){
        this.props.get();
    }

    render() { 
        const {aDepartments, translate} = this.props;
        console.log(this.state);
        return ( 
            <div className="content-wrapper">
                {/* Content Header (Page header) */}
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
                {/* Main content */}
                <section className="content">
                    <CreateDepartment 
                        create = { translate('manageDepartment.create') }
                        name = { translate('table.name') }
                        inputChange = { this.inputChange }
                        saveDepartment = { this.save }
                        description = { translate('manageDepartment.description') }
                        dean = { translate('manageDepartment.dean') }
                        vicedean = { translate('manageDepartment.vicedean') }
                        employee = { translate('manageDepartment.employee') }
                        close = { translate('table.close') }
                        save = { translate('table.save') }
                    />

                    <div className="box" style={{ marginTop: '20px'}}>
                        <div className="box-header">
                            <h3 className="box-title">{ translate('manageDepartment.name') }</h3>
                        </div>
                        {/* /.box-header */}
                        <div className="box-body">
                            {
                                typeof(aDepartments.list) !== 'undefined' ?
                                <table className="table table-bordered table-hover">
                                    <thead>
                                        <tr>
                                            <th>{ translate('table.name') }</th>
                                            <th style={{width: '12%'}}>{ translate('table.action') }</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                    {
                                        aDepartments.list.map( department => (
                                            <tr key={department._id}>
                                                <td>{ department.name }</td>
                                                <td>
                                                    <Link 
                                                        to={`/admin/department/detail/${department._id}`}
                                                        className="btn btn-sm btn-primary">
                                                            <i className="fa fa-edit"></i>
                                                    </Link>
                                                    <button 
                                                        className="btn btn-sm btn-danger"
                                                        onClick={() => this.alert(department._id, translate('manageDepartment.delete'), department.name)}
                                                    >
                                                        <i className="fa fa-trash"></i>
                                                    </button>
                                                </td>
                                            </tr>
                                        ))
                                    }
                                    </tbody>
                                </table> : null
                            }
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
        create: ( department ) => {
            dispatch( create(department) );
        },
        delete: (id) => {
            dispatch( deleteD(id) );
        }
    }
}

export default connect( mapStateToProps, mapDispatchToProps )( withTranslate(Departments) );