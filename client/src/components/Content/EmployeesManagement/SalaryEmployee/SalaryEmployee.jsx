import React, { Component } from 'react';

class SalaryEmployee extends Component {
    componentDidMount() {
        let script = document.createElement('script');
        script.src = 'main/js/AddEmployee.js';
        script.async = true;
        script.defer = true;
        document.body.appendChild(script);
    }
    render() {
        return (
            <div className="content-wrapper">
                {/* Content Header (Page header) */}
                <section className="content-header">
                    <h1>
                        Quản lý lương nhân viên
                    </h1>
                    <ol className="breadcrumb">
                        <li><a href="/"><i className="fa fa-dashboard" /> Home</a></li>
                        <li className="active">Quản lý nhân sự</li>
                    </ol>
                </section>
                <section className="content">
                    <div className="row">
                        <div className="col-xs-12">
                            <div className="box box-info">
                                <div className="box-header with-border">
                                    <h3 className="box-title">Danh sách bảng lương nhân viên</h3>
                                    <button type="submit" className="btn btn-success pull-right" id="" title="Thêm mới bảng lương">Thêm bảng lương</button>
                                </div>
                                {/* /.box-header */}
                                <div className="box-body">
                                    <div className="col-md-12">
                                        <div className="col-md-3">
                                            <div className="form-group" style={{ paddingLeft: 0, paddingRight: 30 }}>
                                                <label htmlFor="fullname">Họ và tên:</label>
                                                <input type="text" className="form-control" name="fullName" />
                                            </div>

                                        </div>
                                        <div className="col-md-3">
                                            <div className="form-group" style={{ paddingLeft: 0, paddingRight: 30 }}>
                                                <label htmlFor="employeeNumber">Mã nhân viên:</label>
                                                <input type="text" className="form-control" name="employeeNumber" />
                                            </div>

                                        </div>
                                        <div className="col-md-3">
                                            <div className="form-group" style={{ paddingLeft: 0, paddingRight: 30, }}>
                                                <label htmlFor="employeeNumber">Bộ phận:</label>
                                                {/* <input type="text" className="form-control" name="employeeNumber" /> */}
                                                <select className="form-group" defaultValue="1" style={{ height: 32, width: 178 }}>
                                                    <option value="2">Phòng hành chính</option>
                                                    <option value="3">Phòng nhân sự</option>
                                                    <option value="4"></option>
                                                    <option value="5">Phòng kinh doanh</option>
                                                    <option value="1"></option>
                                                </select>
                                            </div>

                                        </div>



                                    </div>
                                    <div className="col-md-12">
                                        <div className="col-md-3">
                                            <div className="form-group" style={{ paddingLeft: 0, paddingRight: 30 }}>
                                                <label htmlFor="employeeNumber">Chức vụ:</label>
                                                {/* <input type="text" className="form-control" name="employeeNumber" /> */}
                                                <select className="form-group" defaultValue="1" style={{ height: 32, width: 178 }}>
                                                    <option value="2">Nhân viên</option>
                                                    <option value="4">Trưởng phòng</option>
                                                    <option value="5">Phó phòng</option>
                                                    <option value="1"></option>
                                                </select>
                                            </div>

                                        </div>
                                        <div className="col-md-3">
                                            <div className="form-group" style={{ paddingLeft: 0, paddingRight: 30 }}>
                                                <label htmlFor="month">Từ tháng:</label>
                                                <input type="text" className="form-control" name="month" id="datepicker2" data-date-format="mm-yyyy" />
                                            </div>
                                        </div>
                                        <div className="col-md-3">
                                            <div className="form-group" style={{ paddingLeft: 0, paddingRight: 30 }}>
                                                <label htmlFor="month">Đến tháng:</label>
                                                <input type="text" className="form-control" name="month" id="datepicker3" data-date-format="mm-yyyy" />
                                            </div>
                                        </div>
                                        <div className="form-group col-md-3" style={{ paddingTop: 25, paddingLeft: 0 }}>
                                            <button type="submit" className="btn btn-success" title="Tìm kiếm" >Tìm kiếm</button>
                                        </div>
                                        <table className="table table-bordered">
                                            <thead>
                                                <tr>
                                                    <th style={{width:"20%"}}>Tên nhân viên</th>
                                                    <th style={{width:"13%"}}>Mã nhân viên</th>
                                                    <th style={{width:"13%"}}>Ngày áp dụng</th>
                                                    <th style={{width:"15%"}}>Bộ phận</th>
                                                    <th style={{width:"12%"}}>Chức vụ</th>
                                                    <th style={{width:"13%"}}>Tiền lương</th>
                                                    <th style={{width:"13%"}}>Hành động</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>Trần Hùng Cường</td>
                                                    <td>20152369</td>
                                                    <td>01/05/2019</td>
                                                    <td>Phòng nhân sự</td>
                                                    <td>Nhân viên</td>
                                                    <td>10.000.000 VND</td>
                                                    <td>
                                                        <center>
                                                            <a href="#view" className="view" title="Xem chi tiết nhân viên" data-toggle="tooltip" style={{fontSize:14}} ><i className="material-icons">visibility</i></a>
                                                            <a href="#abc" className="edit" title="Chỉnh sửa thông tin nhân viên " ><i className="material-icons"></i></a>
                                                            <a href="#abc" className="delete" title="Xoá nhân viên khỏi đơn vị" data-toggle="tooltip"><i className="material-icons"></i></a>
                                                        </center>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>Trần Văn Hùng</td>
                                                    <td>20152369</td>
                                                    <td>01/05/2019</td>
                                                    <td>Phòng nhân sự</td>
                                                    <td>Nhân viên</td>
                                                    <td>10.000.000 VND</td>
                                                    <td>
                                                        <center>
                                                            <a href="#view" className="view" title="Xem chi tiết nhân viên" data-toggle="tooltip" ><i className="material-icons">visibility</i></a>
                                                            <a href="#abc" className="edit" title="Chỉnh sửa thông tin nhân viên " ><i className="material-icons"></i></a>
                                                            <a href="#abc" className="delete" title="Xoá nhân viên khỏi đơn vị" data-toggle="tooltip"><i className="material-icons"></i></a>
                                                        </center>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export { SalaryEmployee };