import React, { Component } from 'react';

class TrainingResults extends Component {
    render() {
        return (
            <div className="content-wrapper">
                {/* Content Header (Page header) */}
                <section className="content-header">
                    <h1>
                        Kết quả đào tạo
                    </h1>
                    <ol className="breadcrumb">
                        <li><a href="#abc"><i className="fa fa-dashboard" /> Home</a></li>
                        <li className="active">Quản lý đào tạo</li>
                    </ol>
                </section>
                <section className="content">
                    <div className="row">
                        <div className="col-xs-12">
                            <div className="box">
                                <div className="box-header with-border">
                                    <h3 className="box-title">Danh sách các khoá đào tạo:</h3>
                                </div>
                                {/* /.box-header */}
                                <div className="box-body">
                                    <div className="col-md-12">
                                        <table className="table table-bordered table-hover list">
                                            <thead>
                                                <tr>
                                                    <th style={{width:"25%"}}>Tên khoá đào tạo</th>
                                                    <th>Thời gian bắt đầu</th>
                                                    <th>thời gian kết thúc</th>
                                                    <th>Địa điểm đào tạo</th>
                                                    <th style={{width:"25%"}}>Đơn vị đào tạo</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>An toàn lao động</td>
                                                    <td>5/5/2018</td>
                                                    <td>9/10/2018</td>
                                                    <td>P-901</td>
                                                    <td>Công ty an toan thong tin va truyen thong Viet Nam</td>
                                                </tr>
                                                <tr>
                                                    <td>Kinh nghiệm làm viêc</td>
                                                    <td>06/5/2019</td>
                                                    <td>20/11/2019</td>
                                                    <td>P-901</td>
                                                    <td>Công ty an toan thong tin va truyen thong Viet Nam</td>
                                                </tr>
                                                <tr>
                                                    <td>Kỹ năng giao tiếp</td>
                                                    <td>06/5/2019</td>
                                                    <td>20/11/2019</td>
                                                    <td>P-901</td>
                                                    <td>Công ty an toan thong tin va truyen thong Viet Nam</td>
                                                </tr>
                                                <tr>
                                                    <td>Kỹ năng đàm phán</td>
                                                    <td>06/5/2019</td>
                                                    <td>20/11/2019</td>
                                                    <td>P-901</td>
                                                    <td>Công ty an toan thong tin va truyen thong Viet Nam</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                                {/* /.box-body */}
                            </div>
                            <div className="box">
                                <div className="box-header with-border">
                                    <h3 className="box-title">Chi tiết khoá đào tạo</h3>
                                </div>
                                <div className="nav-tabs-custom">
                                    <ul className="nav nav-tabs">
                                        <li className="active"><a data-toggle="tab" href="#ketquadaotao">Kết quả khoá đào tạo</a></li>
                                        <li style={{marginRight:0}}><a data-toggle="tab" href="#thongke">Thống kê khoá đào tạo</a></li>
                                    </ul>
                                    <div className="tab-content">
                                        <div id="ketquadaotao" className="tab-pane active">
                                            {/* /.box-header */}
                                            <div className="box-body">
                                                <div className="col-md-12">
                                                    <div className="col-md-6">
                                                        <div className="form-group" style={{ marginTop: 20 }}>
                                                            <strong>Tên khoá đào tạo:&emsp; </strong>
                                                            An toàn lao động 2019
                                                        </div>
                                                        
                                                        <div className="form-group">
                                                            <strong>Thời gian bắt đầu:&emsp; </strong>
                                                            5/5/2018
                                                        </div>
                                                        <div className="form-group">
                                                            <strong>Đơn vị đào tạo:&emsp; </strong>
                                                            Công ty An toàn thông tin và truyền thông Việt Nam
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="form-group"  style={{ marginTop: 20 }}>
                                                            <strong>Địa điểm đào tạo:&emsp; </strong>
                                                            P-901 Vnist
                                                        </div>
                                                        <div className="form-group">
                                                            <strong>Thời gian kết thúc:&emsp; </strong>
                                                            20/10/2018
                                                        </div>
                                                    </div>
                                                    <div className="box-header col-md-12">
                                                        <h3 className="box-title">Danh sách nhân viên tham gia khoá đào tạo:</h3>
                                                        
                                                    </div>
                                                    <div className="col-md-12">
                                                        <table className="table table-bordered table-hover listcourse">
                                                            <thead>
                                                                <tr>
                                                                    <th style={{width:"18%"}}>Mã nhân viên</th>
                                                                    <th>Tên nhân viên</th>
                                                                    <th>Phòng ban</th>
                                                                    <th style={{width:'20%'}}>Kết quả</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                <tr>
                                                                    <td>VN123456</td>
                                                                    <td>Nguyễn Chí Thanh</td>
                                                                    <td>phòng hành chính</td>
                                                                    <td>                          
                                                                        <div className="form-group">
                                                                            <div className="radio">
                                                                                <label>
                                                                                <input type="radio" name="optionsRadios" id="optionsRadios1" defaultValue="Hoàn thành"/>
                                                                                &emsp;Đạt&emsp;&emsp;
                                                                                </label>
                                                                            </div>
                                                                            <div className="radio">
                                                                                <label>
                                                                                <input type="radio" name="optionsRadios" id="optionsRadios2" defaultValue="Không hoàn thành" />
                                                                                &emsp;Không đạt
                                                                                </label>
                                                                            </div>
                                                                        </div>
                                                                        </td>
                                                                </tr>
                                                                <tr>
                                                                    <td>VN123456</td>
                                                                    <td>Nguyễn Chí Thanh</td>
                                                                    <td>phòng hành chính</td>
                                                                    <td></td>
                                                                </tr>
                                                                <tr>
                                                                    <td>VN123456</td>
                                                                    <td>Nguyễn Chí Thanh</td>
                                                                    <td>phòng hành chính</td>
                                                                    <td></td>
                                                                </tr>
                                                                <tr>
                                                                    <td>VN123456</td>
                                                                    <td>Nguyễn Chí Thanh</td>
                                                                    <td>phòng hành chính</td>
                                                                    <td></td>
                                                                </tr>
                                                                <tr>
                                                                    <td>VN123456</td>
                                                                    <td>Nguyễn Chí Thanh</td>
                                                                    <td>phòng hành chính</td>
                                                                    <td></td>
                                                                </tr>
                                                                
                                                            </tbody>
                                                        </table>
                                                        
                                                    </div>
                                                </div>
                                            </div>
                                            {/* /.box-body */}
                                            <div className="box-footer">
                                                <button type="submit" title="Lưu lại các thay đổi" className="btn btn-success pull-right col-md-1" id="" style={{marginRight:32}}>Lưu lại</button>
                                            </div>
                                        </div>
                                        <div id="thongke" className="tab-pane">
                                            <div className="box-body">
                                                <div className="col-md-12">
                                                        <div className="form-group" style={{ marginTop: 20 }}>
                                                            <strong>Số lượng tham gia :&emsp; </strong>
                                                            25 nhân viên
                                                        </div>
                                                        <div className="form-group">
                                                            <strong>Số lượng hoàn thành:&emsp; </strong>
                                                            20 nhân viên
                                                        </div>
                                                        <div className="form-group">
                                                            <strong>Số lượng chưa hoàn thành:&emsp; </strong>
                                                            25 nhân viên
                                                        </div>
                                                        <div className="form-group" style={{ marginTop: 20 }}></div>

                                                </div>
                                            </div>
                                            <div className="box-footer">
                                            <button type="submit" title="Lưu lại các thay đổi" className="btn btn-primary pull-right" id="" style={{marginRight:32}}>Xuất báo cáo</button>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* /.col */}
                    </div>
                </section>
            </div>
        );
    };
};

export {TrainingResults}