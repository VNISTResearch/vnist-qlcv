import React, { Component } from 'react';
import './Privilege.css';
import ModalAddPrivilege from './ModalAddPrivilege';

class Privilege extends Component {
    render() {
        return (
            <div className="content-wrapper">
                {/* Content Header (Page header) */}
                <section className="content-header">
                    <h1>
                        Quản lý quyền truy cập
                    </h1>
                </section>
                {/* Main content */}
                <section className="content">
                    <div className="row">
                        <div className="col-xs-12">
                            <div className="box">
                                <div className="box-header row">
                                    <div className="col-xs-10">
                                        <h3 className="box-title">Bảng phân quyền theo sản phẩm</h3>
                                    </div>
                                    <div className="col-xs-2">
                                        <button type="button" className="btn btn-success" data-toggle="modal" data-target="#myModalHorizontal"><i class="fa fa-plus" aria-hidden="true"></i>Thêm quyền</button>
                                        <ModalAddPrivilege />
                                    </div>
                                </div>
                                {/* /.box-header */}
                                <div className="box-body">
                                    <table id="example1" className="table table-bordered table-striped">
                                        <thead>
                                            <tr>
                                                <th>Phòng ban</th>
                                                <th>Chức vụ</th>
                                                <th>Tài sản</th>
                                                <th>Nhóm quyền</th>
                                                <th>Hành Động</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>Trident</td>
                                                <td>Internet Explorer 7</td>
                                                <td>Win XP SP2+</td>
                                                <td>7</td>
                                                <td>
                                                    <button type="button" className="action_table edit"><i className="fa fa-pencil" aria-hidden="true" /></button>
                                                    <button type="reset" className="action_table delete"><i className="fa fa-trash-o" aria-hidden="true" /></button>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>Trident</td>
                                                <td>Internet Explorer 7</td>
                                                <td>Win XP SP2+</td>
                                                <td>7</td>
                                                <td>
                                                    <button type="button" className="action_table edit"><i className="fa fa-pencil" aria-hidden="true" /></button>
                                                    <button type="reset" className="action_table delete"><i className="fa fa-trash-o" aria-hidden="true" /></button>
                                                </td>
                                            </tr>
                                        </tbody>
                                        <tfoot>
                                            <tr>
                                                <th>Phòng ban</th>
                                                <th>Chức vụ</th>
                                                <th>Tài sản</th>
                                                <th>Nhóm quyền</th>
                                                <th>Hành Động</th>
                                            </tr>
                                        </tfoot>
                                    </table>
                                </div>
                                {/* /.box-body */}
                            </div>
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

export default Privilege;