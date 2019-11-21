import React, { Component } from 'react';
import { connect } from 'react-redux';
import { get, create, deleteD } from '../../../redux-actions/Admin/Departments.action';
import Swal from 'sweetalert2';
import {Link} from 'react-router-dom';
import { withTranslate } from 'react-redux-multilingual';
import CreateDepartment from './CreateDepartment';
import DepartmentDetail from './DepartmentDetail';

class Departments extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            name: null,
            description: null,
            dean: null,
            vice_dean: null,
            employee: null,
            parent: null, 
            deleteAlert: true,
            notification: false,
        }
        this.alert = this.alert.bind(this);
        this.inputChange = this.inputChange.bind(this);
        this.save = this.save.bind(this);
        this.thongbao = this.thongbao.bind(this);
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

    thongbao(content){
        this.setState({ notification: false });
        Swal.fire({
            type: 'success',
            title: content,
            showConfirmButton: false,
            timer: 1800
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
        this.setState({ notification: true });
        var {name, description, dean, vice_dean, employee, parent} = this.state;
        const department = {name, description, dean, vice_dean, employee, parent};
        this.props.create(department);
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
                        inputChange = { this.inputChange }
                        save = { this.save }
                    />
                    { aDepartments.success !== null && this.state.notification && this.thongbao(aDepartments.success) }
                    {
                        typeof(aDepartments.list) !== 'undefined' ?
                        <table className="table table-bordered table-hover" style={{ marginTop: '20px'}}>
                            <thead>
                                <tr>
                                    <th>{ translate('table.name') }</th>
                                    <th>{ translate('table.description') }</th>
                                    <th style={{width: '12%'}}>{ translate('table.action') }</th>
                                </tr>
                            </thead>
                            <tbody>
                            {
                                aDepartments.list.map( department => (
                                    <tr key={department._id}>
                                        <td>{ department.name }</td>
                                        <td>{ department.description }</td>
                                        <td>
                                            {/* <Link 
                                                to={`/admin/department/detail/${department._id}`}
                                                className="btn btn-sm btn-primary">
                                                    <i className="fa fa-edit"></i>
                                            </Link> */}
                                            <a className="btn btn-sm btn-primary" data-toggle="modal" href={`#modal-id-department-${department._id}`}><i className="fa fa-edit"></i></a>
                                            <button 
                                                className="btn btn-sm btn-danger"
                                                onClick={() => this.alert(department._id, translate('manageDepartment.delete'), department.name)}
                                            >
                                                <i className="fa fa-trash"></i>
                                            </button>
                                            <DepartmentDetail 
                                                idDepartment={department._id}
                                                nameDepartment={department.name}
                                                descriptionDepartment={department.description}
                                            />
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