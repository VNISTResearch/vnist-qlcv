import React, {Component} from 'react';

class TraningPlan extends Component {
    render() {
        return (
            <div className="content-wrapper">
                {/* Content Header (Page header) */}
                <section className="content-header">
                    <h1>
                        Kế hoạch đào tạo
                    </h1>
                    <ol className="breadcrumb">
                        <li><a href="#"><i className="fa fa-dashboard" /> Home</a></li>
                        <li className="active">Quản lý đào tạo</li>
                    </ol>
                </section>
                <section className="content">
                    <div className="row">
                        <div className="col-xs-12">
                            <div className="box">
                                <div class="box-header with-border">
                                    <h3 class="box-title">Danh sách các khoá đào tạo:</h3>
                                    <button type="submit" className="btn btn-success pull-right" id="" style={{marginRight:16}}>Thêm khoá đào tạo</button>
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
                                <div class="box-header with-border">
                                    <h3 class="box-title">Thông tin chi tiết khoá đào tạo</h3>
                                    <button type="submit" className="btn btn-primary pull-right" id="" style={{marginRight:16}}>Cập nhật khoá đào tạo</button>
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
                                                <strong>Đơn vị đào tạo:&emsp; </strong>
                                                Công ty An toàn thông tin và truyền thông Việt Nam
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
                                        </div>
                                        <div class="box-header col-md-12">
                                            <h3 class="box-title">Danh sách nhân viên tham gia khoá đào tạo</h3>
                                        </div>
                                        <div className="col-md-12">
                                            <table className="table table-bordered table-hover listcourse">
                                                <thead>
                                                    <tr>
                                                        <th>Mã nhân viên</th>
                                                        <th>Tên nhân viên</th>
                                                        <th>Phòng ban</th>
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
                                                    
                                                </tbody>
                                            </table>
                                        </div>
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

export { TraningPlan };