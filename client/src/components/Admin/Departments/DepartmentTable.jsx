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
            deleteAlert: true
        }
        
        this.alert = this.alert.bind(this);
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
        return ( 
            <React.Fragment>
                <div className="box-body">
                    <CreateDepartment 
                        parent = { aDepartments.list }
                    />
                    {
                        aDepartments.success !== null && aDepartments.success !== undefined &&
                        <div className="alert alert-success" style={{ marginTop: '20px'}}>
                            <button type="button" className="close" data-dismiss="alert" aria-hidden="true">&times;</button>
                            <p>{ aDepartments.success }</p>
                        </div>
                    }
                    {
                        typeof(aDepartments.list) !== 'undefined' ?
                        <table className="table table-bordered table-hover" style={{ marginTop: '20px'}}>
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
            </React.Fragment>
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