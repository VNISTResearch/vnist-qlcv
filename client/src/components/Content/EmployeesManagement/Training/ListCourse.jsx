import React, { Component } from 'react';

class ListCourse extends Component {
    render() {
        return (
            <div className="content-wrapper">
                {/* Content Header (Page header) */}
                <section className="content-header">
                    <h1>
                        Chương trình đào tạo bắt buộc
                    </h1>
                    <ol className="breadcrumb">
                        <li><a href="#abc"><i className="fa fa-dashboard" /> Home</a></li>
                        <li className="active">Quản lý Đào tạo</li>
                    </ol>
                </section>
                <section className="content">
                    <div className="row">
                        <div className="col-xs-12">
                            <div className="box">
                                {/* /.box-header */}
                                <div className="box-body">
                                    <div className="col-md-4">
                                        <div className="form-group">
                                            <label>Phòng ban:</label>
                                            <select className="form-control">
                                                <option>Phòng nhân sự</option>
                                                <option>Phòng hành chính</option>
                                                <option>Phòng kinh doanh</option>
                                                <option>Phòng Marketing</option>
                                            </select>
                                        </div>
                                        <div className="form-group">
                                            <label>Vị trí:</label>
                                            <select className="form-control">
                                                <option>--Tất cả--</option>
                                                <option>Trưởng phòng</option>
                                                <option>Phó trưởng phòng</option>
                                                <option>Nhân viên</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="box-header col-md-6" style={{ paddingLeft: 0 }}>
                                            <h3 className="box-title">Danh sách chương trình đào tạo bắt buộc:</h3>
                                        </div>
                                        <button type="submit" className="btn btn-success pull-right" id="">Thêm khoá đào tạo</button>
                                        <table className="table table-bordered table-hover listcourse">
                                            <thead>
                                                <tr>
                                                    <th>Tên chương trình đào tạo</th>
                                                    <th>Phòng ban</th>
                                                    <th>Vị trí</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>An toàn lao động</td>
                                                    <td>Phòng sản xuất</td>
                                                    <td>Nhân viên</td>
                                                </tr>
                                                <tr>
                                                    <td>Kinh nghiệm làm viêc</td>
                                                    <td>Phòng hành chính</td>
                                                    <td>Nhân viên</td>
                                                </tr>
                                                <tr>
                                                    <td>Kỹ năng giao tiếp</td>
                                                    <td>Phòng hành chính</td>
                                                    <td>Nhân viên</td>
                                                </tr>
                                                <tr>
                                                    <td>Kỹ năng đàm phán</td>
                                                    <td>Phòng marketing</td>
                                                    <td>Nhân viên</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                                {/* /.box-body */}
                            </div>
                            {/* /.box */}
                        </div>
                        {/* /.col */}
                    </div>
                </section>
            </div>
        );
    };
};

export { ListCourse };