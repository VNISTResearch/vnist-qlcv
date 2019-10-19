import React, { Component } from 'react';
import { ModalDataResultTask } from './ModalDataResultTask';

class KPIEvaluate extends Component {
    render() {
        return (
            <div className="table-wrapper">
                <div className="content-wrapper">
                    <section className="content-header">
                        <h1>
                            Dữ liệu KPI
                            <small>Preview</small>
                        </h1>
                        <ol className="breadcrumb">
                            <li><a href="/"><i className="fa fa-dashboard" /> Home</a></li>
                            <li><a href="/">Forms</a></li>
                            <li className="active">Advanced Elements</li>
                        </ol>
                    </section>
                    <section className="content">
                        <div className="row">
                            <div className="col-xs-12">
                                <div className="box">
                                    <div className="box-header">
                                        <h3 className="box-title">Bảng danh sách dữ liệu KPI</h3>
                                        <div className="form-group" style={{ paddingTop: "15px" }}>
                                            <label>Nhân viên:</label>
                                            <select className="form-control" name="namemember" defaultValue="1" style={{ display: "inline", width: "25%", marginLeft: "10px" }}>
                                                <option value="1">Trưởng BP đảm bảo chất lượng </option>
                                                <option value="2">NV001-Nguyễn Văn A</option>
                                                <option value="3">NV002-Bùi Văn B</option>
                                                <option value="4">NV003-Lê Thị C</option>
                                            </select>
                                        </div>
                                        <div className="form-group">
                                            <label className="col-xs-1" style={{ paddingLeft: "0px", width: "7.5%", paddingTop: "10px" }}>Tháng:</label>
                                            <div className="input-group date col-xs-3">
                                                <div className="input-group-addon">
                                                    <i className="fa fa-calendar" />
                                                </div>
                                                <input type="text" className="form-control pull-right" id="datepicker2" defaultValue="10-2019" data-date-format="mm-yyyy" />
                                            </div>
                                        </div>
                                    </div>
                                    {/* /.box-header */}
                                    <div className="box-body">
                                        <table className="table table-bordered">
                                            <thead>
                                                <tr>
                                                    <th style={{ width: "5%" }}>Stt</th>
                                                    <th>Tên mục tiêu</th>
                                                    <th>Trọng số</th>
                                                    <th>Kết quả</th>
                                                    <th>Điểm</th>
                                                    <th>Điểm theo trọng số</th>
                                                    <th>Xu hướng</th>
                                                    <th>Hành động</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>1</td>
                                                    <td>Doanh thu tăng 350 triệu</td>
                                                    <td>30</td>
                                                    <td>80%</td>
                                                    <td>4</td>
                                                    <td>1.2</td>
                                                    <td>Đạt</td>
                                                    <td>
                                                        <a href="#myModalHorizontal1" data-toggle="modal" className="view" title="View" data-target="#myModalHorizontal1"><i className="material-icons">visibility</i></a>
                                                        <a href="#abc" className="delete" title="Delete" data-toggle="tooltip"><i className="material-icons"></i></a>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>2</td>
                                                    <td>Tăng lượng khách hàng</td>
                                                    <td>20</td>
                                                    <td>100%</td>
                                                    <td>5</td>
                                                    <td>1</td>
                                                    <td>Tốt</td>
                                                    <td>
                                                        <a href="#myModalHorizontal2" data-toggle="modal" data-target="#myModalHorizontal2" className="view" title="View"><i className="material-icons">visibility</i></a>
                                                        <a href="#abc" className="delete" title="Delete" data-toggle="tooltip"><i className="material-icons"></i></a>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>3</td>
                                                    <td>Hoàn thành quy trình đánh giá sản phẩm</td>
                                                    <td>30</td>
                                                    <td>90%</td>
                                                    <td>4</td>
                                                    <td>1.2</td>
                                                    <td>Đạt</td>
                                                    <td>
                                                        <a href="#myModalHorizontal3" data-toggle="modal" data-target="#myModalHorizontal3" className="view" title="View"><i className="material-icons">visibility</i></a>
                                                        <a href="#abc" className="delete" title="Delete" data-toggle="tooltip"><i className="material-icons"></i></a>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>3</td>
                                                    <td>Hoàn thành nội quy công ty</td>
                                                    <td>20</td>
                                                    <td>100%</td>
                                                    <td>5</td>
                                                    <td>1</td>
                                                    <td>Tốt</td>
                                                    <td>
                                                        <a href="#myModalHorizontal4" data-toggle="modal" data-target="#myModalHorizontal4" className="view" title="View"><i className="material-icons">visibility</i></a>
                                                        <a href="#abc" className="delete" title="Delete" data-toggle="tooltip"><i className="material-icons"></i></a>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td colSpan={2}><b>Tổng</b></td>
                                                    <td><b>100</b></td>
                                                    <td><b>x</b></td>
                                                    <td><b>x</b></td>
                                                    <td><b>4.4</b></td>
                                                    <td><b>Đạt</b></td>
                                                </tr>
                                            </tbody>
                                        </table>
                                        <ModalDataResultTask index="1" />
                                        <ModalDataResultTask index="2" />
                                        <ModalDataResultTask index="3" />
                                        <ModalDataResultTask index="4" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        );
    }
}

export { KPIEvaluate };