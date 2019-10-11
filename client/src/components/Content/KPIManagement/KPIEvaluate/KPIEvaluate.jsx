import React, { Component } from 'react';

class KPIEvaluate extends Component {

    componentWillMount() {

    }

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
                                        <h3 className="box-title">Bảng danh dữ liệu KPI</h3>
                                        <div className="row">
                                            <div className="col-sm-3" style={{ paddingTop: "15px", width: "23%" }}>
                                                <label>Nhân viên:</label>
                                                <select className="form-control" id="sel1" name="namemember" defaultValue="1" style={{ display: "inline", width: "auto", marginLeft: "5px" }}>
                                                    <option value="1">TP Kinh doanh</option>
                                                    <option value="2">Nguyễn Văn A</option>
                                                    <option value="3">Bùi Văn B</option>
                                                    <option value="4">Lê Thị C</option>
                                                </select>
                                            </div>
                                            <div className="col-sm-1" style={{ paddingTop: "23px", width: "5%" }}>
                                                <label>Tháng:</label>
                                            </div>
                                            <div className="col-sm-3" style={{ paddingTop: "15px" }}>
                                                <div className="input-group date">
                                                    <div className="input-group-addon">
                                                        <i className="fa fa-calendar" />
                                                    </div>
                                                    <input type="text" className="form-control pull-right" id="datepicker2" data-date-format="mm-yyyy"/>
                                                </div>
                                            </div>
                                            <div name="action" className="col-sm-5" style={{ paddingTop: "15px" }}>
                                                <div className="col-sm-3 col-xs-offset-3">
                                                    <button type="check" className="btn btn-success btn-block btn-flat">Duyệt</button>
                                                </div>
                                                <div className="col-sm-6">
                                                    <button type="viewdata" className="btn btn-success btn-block btn-flat">Xem kết quả thực hiện</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* /.box-header */}
                                    <div className="box-body">
                                        <table className="table table-bordered">
                                            <thead>
                                                <tr>
                                                    <th>Stt</th>
                                                    <th>Tên mục tiêu</th>
                                                    <th>Trọng số</th>
                                                    <th>Chỉ tiêu</th>
                                                    <th>Kết quả</th>
                                                    <th>Hệ số hoàn thành</th>
                                                    <th>Điểm</th>
                                                    <th>Xu hướng</th>
                                                    <th>Điểm theo trọng số</th>
                                                    <th>Hành động</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>1</td>
                                                    <td>Doanh thu tăng 350 triệu</td>
                                                    <td>10</td>
                                                    <td>500</td>
                                                    <td>400</td>
                                                    <td>80</td>
                                                    <td>3</td>
                                                    <td>Đạt</td>
                                                    <td>0.3</td>
                                                    <td>
                                                        <a href="abc" className="add" title="Add" data-toggle="tooltip"><i className="material-icons"></i></a>
                                                        <a href="abc" className="edit" title="Edit" data-toggle="tooltip"><i className="material-icons"></i></a>
                                                        <a href="abc" className="delete" title="Delete" data-toggle="tooltip"><i className="material-icons"></i></a>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>2</td>
                                                    <td>Tăng lượng khách hàng</td>
                                                    <td>20</td>
                                                    <td>30</td>
                                                    <td>30</td>
                                                    <td>100</td>
                                                    <td>5</td>
                                                    <td>Tốt</td>
                                                    <td>1</td>
                                                    <td>
                                                        <a href="abc" className="add" title="Add" data-toggle="tooltip"><i className="material-icons"></i></a>
                                                        <a href="abc" className="edit" title="Edit" data-toggle="tooltip"><i className="material-icons"></i></a>
                                                        <a href="abc" className="delete" title="Delete" data-toggle="tooltip"><i className="material-icons"></i></a>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>3</td>
                                                    <td>Fran Wilson</td>
                                                    <td>Human Resources</td>
                                                    <td>(503) 555-9931</td>
                                                    <td>(503) 555-9931</td>
                                                    <td>(503) 555-9931</td>
                                                    <td>(503) 555-9931</td>
                                                    <td>(503) 555-9931</td>
                                                    <td>(503) 555-9931</td>
                                                    <td>
                                                        <a href="abc" className="add" title="Add" data-toggle="tooltip"><i className="material-icons"></i></a>
                                                        <a href="abc" className="edit" title="Edit" data-toggle="tooltip"><i className="material-icons"></i></a>
                                                        <a href="abc" className="delete" title="Delete" data-toggle="tooltip"><i className="material-icons"></i></a>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                                <div className="box">
                                    <div className="box-header">
                                        <h3 className="box-title">Bảng kết quả thực hiện</h3>
                                    </div>
                                    {/* /.box-header */}
                                    <div className="box-body">
                                        <table className="table table-bordered">
                                            <thead>
                                                <tr>
                                                    <th>Stt</th>
                                                    <th>Tên mục tiêu</th>
                                                    <th>Trọng số</th>
                                                    <th>Chỉ tiêu</th>
                                                    <th>Kết quả</th>
                                                    <th>Hệ số hoàn thành</th>
                                                    <th>Điểm</th>
                                                    <th>Xu hướng</th>
                                                    <th>Điểm theo trọng số</th>
                                                    <th>Hành động</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>1</td>
                                                    <td>Doanh thu tăng 350 triệu</td>
                                                    <td>10</td>
                                                    <td>500</td>
                                                    <td>400</td>
                                                    <td>80</td>
                                                    <td>3</td>
                                                    <td>Đạt</td>
                                                    <td>0.3</td>
                                                    <td>
                                                        <a href="abc" className="add" title="Add" data-toggle="tooltip"><i className="material-icons"></i></a>
                                                        <a href="abc" className="edit" title="Edit" data-toggle="tooltip"><i className="material-icons"></i></a>
                                                        <a href="abc" className="delete" title="Delete" data-toggle="tooltip"><i className="material-icons"></i></a>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>2</td>
                                                    <td>Tăng lượng khách hàng</td>
                                                    <td>20</td>
                                                    <td>30</td>
                                                    <td>30</td>
                                                    <td>100</td>
                                                    <td>5</td>
                                                    <td>Tốt</td>
                                                    <td>1</td>
                                                    <td>
                                                        <a href="abc" className="add" title="Add" data-toggle="tooltip"><i className="material-icons"></i></a>
                                                        <a href="abc" className="edit" title="Edit" data-toggle="tooltip"><i className="material-icons"></i></a>
                                                        <a href="abc" className="delete" title="Delete" data-toggle="tooltip"><i className="material-icons"></i></a>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>3</td>
                                                    <td>Fran Wilson</td>
                                                    <td>Human Resources</td>
                                                    <td>(503) 555-9931</td>
                                                    <td>(503) 555-9931</td>
                                                    <td>(503) 555-9931</td>
                                                    <td>(503) 555-9931</td>
                                                    <td>(503) 555-9931</td>
                                                    <td>(503) 555-9931</td>
                                                    <td>
                                                        <a href="abc" className="add" title="Add" data-toggle="tooltip"><i className="material-icons"></i></a>
                                                        <a href="abc" className="edit" title="Edit" data-toggle="tooltip"><i className="material-icons"></i></a>
                                                        <a href="abc" className="delete" title="Delete" data-toggle="tooltip"><i className="material-icons"></i></a>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
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