import React, { Component } from 'react';
import { ModalAddEmployeeSabbatical } from './ModalAddEmployeeSabbatical';
import { ModalEditEmployeeSabbatical } from './ModalEditEmployeeSabbatical';
import { ModalDeleteEmployeeSabbatical } from './ModalDeleteEmployeeSabbatical';

class Sabbatical extends Component {
    render() {
        return (
            <div className="content-wrapper">
                {/* Content Header (Page header) */}
                <section className="content-header">
                    <h1>
                        Quản lý nghỉ phép
                </h1>
                    <ol className="breadcrumb">
                        <li><a href="#abc"><i className="fa fa-dashboard" /> Home</a></li>
                        <li className="active">Quản lý nhân sự</li>
                    </ol>
                </section>
                <section className="content">
                    <div className="row">
                        <div className="box box-info">
                            <div className="box-body">
                                <div className="col-md-12">
                                    <div className="box-header col-md-12" style={{ paddingLeft: 0 }}>
                                        <h3 className="box-title">Danh sách đơn xin nghỉ:</h3>
                                    </div>
                                    <div className="col-md-3">
                                        <div className="form-group col-md-4" style={{ paddingLeft: 0, paddingRight: 0 }}>
                                            <label style={{ paddingTop: 5 }}>Đơn vị:</label>
                                        </div>
                                        <div className="form-group col-md-8" style={{ paddingLeft: 0, paddingRight: 0 }}>
                                            <select className="form-control">
                                                <option>Phòng nhân sự</option>
                                                <option>Phòng hành chính</option>
                                                <option>Phòng kinh doanh</option>
                                                <option>Phòng Marketing</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-md-3">
                                        <div className="form-group col-md-4" style={{ paddingLeft: 0, paddingRight: 0 }}>
                                            <label style={{ paddingTop: 5 }}>Chức vụ:</label>
                                        </div>
                                        <div className="form-group col-md-8" style={{ paddingLeft: 0, paddingRight: 0 }}>
                                            <select className="form-control">
                                                <option>--Tất cả--</option>
                                                <option>Trưởng phòng</option>
                                                <option>Phó trưởng phòng</option>
                                                <option>Nhân viên</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-md-3">
                                        <div className="form-group col-md-4" style={{ paddingLeft: 0, paddingRight: 0 }}>
                                            <label style={{ paddingTop: 5 }}>Trạng thái:</label>
                                        </div>
                                        <div className="form-group col-md-8" style={{ paddingLeft: 0, paddingRight: 0 }}>
                                            <select className="form-control">
                                                <option>--Tất cả--</option>
                                                <option>Đã chấp nhận</option>
                                                <option>Chờ phê duyệt</option>
                                                <option>Không chấp nhận</option>
                                            </select>
                                        </div>
                                    </div></div>
                                <div className="col-md-12">
                                    <div className="col-md-3">
                                        <div className="form-group col-md-4" style={{ paddingLeft: 0, paddingRight: 0 }}>
                                            <label htmlFor="fullname" style={{ paddingTop: 5 }}>Mã NV:</label>
                                        </div>
                                        <div className="form-group col-md-8" style={{ paddingLeft: 0, paddingRight: 0 }}>
                                            <input type="text" className="form-control" name="employeeNumber" />
                                        </div>
                                    </div>
                                    <div className="col-md-3">
                                        <div className="form-group col-md-4" style={{ paddingLeft: 0, paddingRight: 0 }}>
                                            <label htmlFor="fullname">Tổng số ngày nghỉ:</label>
                                        </div>
                                        <div className="form-group col-md-8" style={{ paddingLeft: 0, paddingRight: 0 }}>
                                            <input type="number" className="form-control" name="employeeNumber" />
                                        </div>
                                    </div>
                                    <div className="col-md-3">
                                        <div className="form-group" style={{ paddingLeft: 0, paddingRight: 0 }}>
                                            <center>
                                                <button type="submit" className="btn btn-success" title="Tìm kiếm" >Tìm kiếm</button></center>
                                        </div>
                                    </div>
                                    <div className="col-md-3" style={{ paddingRight: 0 }}>
                                        <button type="submit" style={{ marginBottom: 15 }} className="btn btn-success pull-right" id="" data-toggle="modal" data-target="#modal-addEmployeeSabbatical">Thêm đơn xin nghỉ</button>
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <table className="table table-bordered table-hover listcourse">
                                        <thead>
                                            <tr>
                                                <th style={{ width: "8%" }}>Mã NV</th>
                                                <th style={{ width: "16%" }}>Tên nhân viên</th>
                                                <th style={{ width: "8%" }}>Từ ngày</th>
                                                <th style={{ width: "8%" }}>Đến ngày</th>
                                                <th style={{ width: "10%" }}>Tổng số ngày nghỉ</th>
                                                <th>Lý do</th>
                                                <th style={{ width: "12%" }}>Đơn vị</th>
                                                <th style={{ width: "10%" }}>Chức vụ</th>
                                                <th style={{ width: "11%" }}>Trạng thái</th>
                                                <th style={{ width: "9%" }}>Hành động</th>

                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>102566</td>
                                                <td>Nguyễn Hoàng Quân</td>
                                                <td>20/5/2019</td>
                                                <td>22/5/2019</td>
                                                <td>2</td>
                                                <td>Về quê</td>
                                                <td>P KTTT ViaVet</td>
                                                <td>Nhân viên</td>
                                                <td>Được chấp nhận</td>
                                                <td>
                                                    <center>
                                                        <a href="#abc" className="edit" title="Chỉnh sửa đơn xin nghi" data-toggle="modal" data-target="#modal-editEmployeeSabbatical" ><i className="material-icons"></i></a>
                                                        <a href="#abc" className="delete" title="Xoá đơn xin nghỉ" data-toggle="modal" data-target="#modal-deleteemployeeSabbatical"><i className="material-icons"></i></a>
                                                    </center>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>102567</td>
                                                <td>Lê Thị Phúc</td>
                                                <td>20/5/2019</td>
                                                <td>22/5/2019</td>
                                                <td>2</td>
                                                <td>Đi du lịch</td>
                                                <td>PKD ViaVet</td>
                                                <td>Nhân viên</td>
                                                <td>Được chấp nhận</td>
                                                <td>
                                                    <center>
                                                        <a href="#abc" className="edit" title="Chỉnh sửa đơn xin nghi" data-toggle="modal" data-target="#modal-editEmployeeSabbatical"><i className="material-icons"></i></a>
                                                        <a href="#abc" className="delete" title="Xoá đơn xin nghỉ" data-toggle="modal" data-target="#modal-deleteemployeeSabbatical"><i className="material-icons"></i></a>
                                                    </center>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <ModalAddEmployeeSabbatical />
                <ModalEditEmployeeSabbatical />
                <ModalDeleteEmployeeSabbatical />
            </div>
        );
    }
};

export { Sabbatical };