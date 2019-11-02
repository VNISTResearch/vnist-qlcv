import React, { Component } from 'react';
import {InfoEmployee} from './../../CombineContent';
class ListEmployee extends Component {
    render() {
        return (
            <div className="content-wrapper">
                {/* Content Header (Page header) */}
                <section className="content-header">
                    <h1>
                        Danh sách nhân viên
                    </h1>
                    <ol className="breadcrumb">
                        <li><a href="#"><i className="fa fa-dashboard" /> Home</a></li>
                        <li className="active">Quản lý nhân sự</li>
                    </ol>
                </section>
                <section className="content">
                    <div className="row">
                        <div className="col-xs-12">
                            <div className="box">
                                {/* /.box-header */}
                                <div className="box-body">
                                    <table id="" className="table table-bordered table-hover list">
                                        <thead>
                                            <tr>
                                                <th>Mã nhân viên</th>
                                                <th>Họ và tên</th>
                                                <th>Giới tính</th>
                                                <th>Ngày sinh</th>
                                                <th>Chức vụ</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>VN00156</td>
                                                <td>Nguyễn Văn thuận</td>
                                                <td>Nam</td>
                                                <td>17/03/1996</td>
                                                <td>Nhân viên</td>
                                            </tr>
                                            <tr>
                                                <td>VN00154</td>
                                                <td>Ngô Thị Oanh</td>
                                                <td>Nữ</td>
                                                <td>20/05/1997</td>
                                                <td>Phó phòng</td>
                                            </tr>
                                            <tr>
                                                <td>VN00155</td>
                                                <td>Nguyễn Phi Hùng</td>
                                                <td>Nam</td>
                                                <td>15/08/1996</td>
                                                <td>Trưởng phòng</td>
                                            </tr>
                                            <tr>
                                                <td>VN001256</td>
                                                <td>Lê Văn Việt</td>
                                                <td>Nam</td>
                                                <td>15/06/1996</td>
                                                <td>Nhân viên</td>
                                            </tr>
                                            <tr>
                                                <td>VN00157</td>
                                                <td>Nguyễn Khánh Linh</td>
                                                <td>Nữ</td>
                                                <td>17/05/1996</td>
                                                <td>Nhân viên</td>
                                            </tr>
                                            <tr>
                                                <td>VN00785</td>
                                                <td>Bùi Văn Huy</td>
                                                <td>Nam</td>
                                                <td>18/10/1996</td>
                                                <td>Nhân viên</td>
                                            </tr>
                                            <tr>
                                                <td>VN00158</td>
                                                <td>Nguyễn Văn Hùng</td>
                                                <td>Nam</td>
                                                <td>17/03/1996</td>
                                                <td>Nhân viên</td>
                                            </tr>
                                        </tbody>
                                        <tfoot>
                                            <tr>
                                                <th>Mã nhân viên</th>
                                                <th>Họ và tên</th>
                                                <th>Giới tính</th>
                                                <th>Ngày sinh</th>
                                                <th>Chức vụ</th>
                                            </tr>
                                        </tfoot>
                                    </table>
                                </div>
                                {/* /.box-body */}
                            </div>
                            {/* /.box */}
                        </div>
                        {/* /.col */}
                    </div>
                    <div >
                    <InfoEmployee/>
                    </div>
                    
                </section>
            </div>
        );
    };
}

export { ListEmployee };