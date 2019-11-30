import React, { Component } from 'react';

class ModalEditTrainingPlan extends Component {
    render() {
        return (
            <div className="modal modal-full fade" id="modal-editTrainingPlan" tabIndex={-1} role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                <div className="modal-dialog-full">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">×</span></button>
                            <h4 className="modal-title">Chỉnh sửa khoá đào tạo: An toàn lao động 2019</h4>
                        </div>
                        <div className="modal-body" style={{ paddingTop: 0 }}>
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
                                                    <th style={{ width: "18%" }}>Mã nhân viên</th>
                                                    <th>Tên nhân viên</th>
                                                    <th>Đơn vị</th>
                                                    <th style={{ width: '20%' }}>Kết quả</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>VN123456</td>
                                                    <td>Nguyễn Chí Thanh</td>
                                                    <td>phòng hành chính</td>
                                                    <td>
                                                        <div className="">
                                                            <div className="radio" style={{ marginTop: 0 }}>
                                                                <label>
                                                                    <input type="radio" name="optionsRadios" id="optionsRadios1" defaultValue="Hoàn thành" />
                                                                    &nbsp;Đạt&emsp;&emsp;
                                                                                </label>
                                                                <label>
                                                                    <input type="radio" name="optionsRadios" id="optionsRadios2" defaultValue="Không hoàn thành" />
                                                                    &nbsp;Không đạt
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
                        </div>
                        <div className="modal-footer">
                            <button style={{ marginRight: 45 }} type="button" className="btn btn-default pull-right" data-dismiss="modal">Đóng</button>
                            <button style={{ marginRight: 15 }} type="button" title="Lưu lại các thay đổi" className="btn btn-success pull-right">Lưu thay đổi</button>
                        </div>
                    </div>
                </div>
            </div >
        );
    }
};

export { ModalEditTrainingPlan };