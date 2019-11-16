import React, { Component } from 'react';

class DetailTrainingPlan extends Component {
    render() {
        return (
            <div className="box">
                <div className="box-header with-border">
                    <h3 className="box-title" style={{ marginTop: 10 }}>Thông tin chi tiết khoá đào tạo</h3>
                    <button type="submit" className="btn btn-primary pull-right" id="" style={{ marginRight: 16 }}>Cập nhật khoá đào tạo</button>
                </div>
                {/* /.box-header */}
                <div className="box-body">
                    <div className="col-md-12">
                        <div className="col-md-6">
                            <div className="form-group" style={{ marginTop: 20 }}>
                                <strong>Tên khoá đào tạo:&emsp; </strong>
                                An toàn lao động 2019
                        </div>

                            <div className="form-group" style={{ marginTop: 20 }}>
                                <strong>Thời gian bắt đầu:&emsp; </strong>
                                5/5/2018
                        </div>
                            <div className="form-group" style={{ marginTop: 20 }}>
                                <strong>Chi phí đào tạo:&emsp; </strong>
                                100.000.000 VND
                        </div>
                            <div className="form-group" style={{ marginTop: 20 }}>
                                <strong>Thuộc chương trình đào tạo:&emsp; </strong>
                                An toàn lao động
                        </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group" style={{ marginTop: 20 }}>
                                <strong>Địa điểm đào tạo:&emsp; </strong>
                                P-901 Vnist
                        </div>
                            <div className="form-group" style={{ marginTop: 20 }}>
                                <strong>Thời gian kết thúc:&emsp; </strong>
                                20/10/2018
                        </div>
                            <div className="form-group" style={{ marginTop: 20 }}>
                                <strong>Đơn vị đào tạo:&emsp; </strong>
                                Công ty An toàn thông tin và truyền thông Việt Nam
                        </div>
                        </div>
                        <div className="box-header col-md-12">
                            <h3 className="box-title">Danh sách nhân viên tham gia khoá đào tạo:</h3>
                        </div>
                        <div className="col-md-12">
                            <table className="table table-bordered table-hover listcourse">
                                <thead>
                                    <tr>
                                        <th style={{ width: "30%" }}>Mã nhân viên</th>
                                        <th >Tên nhân viên</th>
                                        <th style={{ width: "30%" }}>Phòng ban</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>VN123456</td>
                                        <td>Nguyễn Chí Thanh</td>
                                        <td>phòng hành chính</td>
                                    </tr>
                                    <tr>
                                        <td>VN123456</td>
                                        <td>Nguyễn Chí Thanh</td>
                                        <td>phòng hành chính</td>
                                    </tr>
                                    <tr>
                                        <td>VN123456</td>
                                        <td>Nguyễn Chí Thanh</td>
                                        <td>phòng hành chính</td>
                                    </tr>
                                    <tr>
                                        <td>VN123456</td>
                                        <td>Nguyễn Chí Thanh</td>
                                        <td>phòng hành chính</td>
                                    </tr>
                                    <tr>
                                        <td>VN123456</td>
                                        <td>Nguyễn Chí Thanh</td>
                                        <td>phòng hành chính</td>
                                    </tr>

                                    <tr>
                                        <td>VN123456</td>
                                        <td>Nguyễn Chí Thanh</td>
                                        <td>phòng hành chính</td>
                                    </tr>
                                    <tr>
                                        <td>VN123456</td>
                                        <td>Nguyễn Chí Thanh</td>
                                        <td>phòng hành chính</td>
                                    </tr>

                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                {/* /.box-body */}
            </div>
        );
    }
}

export { DetailTrainingPlan };