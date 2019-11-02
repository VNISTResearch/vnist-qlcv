import React, { Component } from 'react';
// import { userService } from '../../../service/CombineService';
// import axios from 'axios';
import {ModalAddTaskTemplate} from './ModalAddTaskTemplate';

class TaskTemplate extends Component {

    constructor(props) {
        super(props);
        this.state = {
            forms: [],
        };
    }

    // componentDidMount() {
    //     // var id = this.getChucDanh()
    //     const URL = 'http://localhost:5000/api/forms/manage/' + this.getChucDanh();
    //     axios.get(URL)
    //         .then(res => {
    //             this.setState({ forms: res.data });
    //         });
    // }

    // getChucDanh = () => {
    //     var user = userService.currentUserValue.user;
    //     console.log(user);
    //     var role = userService.currentUserValue.currentRole;
    //     console.log(role);
    //     var result = role;
    //     user.has.map(a => {

    //         if (a.role._id === role) {
    //             console.log(a.role._id);
    //             result = a.chucdanh._id;
    //         }
    //         return true;
    //     });

    //     return result;
    // }

    // getPermision = () => {
    //     var user = userService.currentUserValue.user;
    //     var role = userService.currentUserValue.currentRole;
    //     var data = {};
    //     user.has.map(a => {
    //         if (a.role._id === role) {
    //             data = a.chucdanh.percom.can;
    //         }
    //         return true;
    //     });

    //     return data;
    // }

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
                    <div className="row">
                        <div className="col-xs-12">
                            <div className="box">
                                <div className="box-header">
                                    <div className="row">
                                        <div className="col-xs-10">
                                            <h3 className="box-title">Bảng danh sách mẫu công việc</h3>
                                        </div>
                                        <div className="col-xs-2">
                                            {/* {
                                                this.getPermision().createForm && */}
                                                <button type="button" className="btn btn-success" data-toggle="modal" data-target="#myModalHorizontal">Thêm 1 mẫu công việc</button>
                                            {/* } */}
                                            <ModalAddTaskTemplate />
                                        </div>
                                    </div>
                                </div>
                                {/* /.box-header */}
                                <div className="box-body">
                                    <table id="example2" className="table table-bordered table-hover">
                                        <thead>
                                            <tr>
                                                <th>ID Form</th>
                                                <th>Name of FormCV</th>
                                                <th>Creator</th>
                                                <th>Description</th>
                                                <th>Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {/* {
                                                this.state.forms.length === 0 ? <tr><td colSpan={5}>No data</td></tr> :
                                                    this.state.forms.map(form =>
                                                        <tr key={form._id}>
                                                            <td>{form._id}</td>
                                                            <td>{form.name}</td>
                                                            <td>{form.creator.name}</td>
                                                            <td>{form.description}</td>
                                                            <td>
                                                                {this.getPermision().editForm && <button className="btn btn-primary">Edit</button>}
                                                                {this.getPermision().deleteForm && <button className="btn btn-danger">Delete</button>}
                                                            </td>
                                                        </tr>
                                                    )
                                            } */}
                                        </tbody>
                                        {/* <tfoot>
                            <tr>
                            <th>ID Form</th>
                            <th>Name of FormCV</th>
                            <th>Creator</th>
                            <th>Description</th>
                            <th>Action</th>
                            </tr>
                        </tfoot> */}
                                    </table>
                                </div>
                                {/* /.box-body */}
                            </div>
                            {/* /.box */}
                        </div>
                        {/* /.col */}
                    </div>
                    {/* /.row */}
                </section>
                {/* /.content */}
            </div>
        );
    }
}

export { TaskTemplate };