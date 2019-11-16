import React, { Component } from 'react';
import { DetailTrainingPlan } from './DetailTrainingPlan';
class TraningPlan extends Component {
    componentDidMount() {
        let script = document.createElement('script');
        script.src = 'main/js/ListEmployee.js';
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
                        Kế hoạch đào tạo
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
                                    <h3 className="box-title" style={{ marginTop: 10 }}>Danh sách các khoá đào tạo:</h3>
                                    <button type="submit" className="btn btn-success pull-right" id="" style={{ marginRight: 16 }}>Thêm khoá đào tạo</button>
                                </div>
                                {/* /.box-header */}
                                <div className="box-body">
                                    <div className="col-md-12">
                                        <table id="listexample" className="table table-bordered table-hover">
                                            <thead>
                                                <tr>
                                                    <th style={{ width: "25%" }}>Tên khoá đào tạo</th>
                                                    <th>Thời gian bắt đầu</th>
                                                    <th>thời gian kết thúc</th>
                                                    <th>Địa điểm đào tạo</th>
                                                    <th style={{ width: "25%" }}>Đơn vị đào tạo</th>
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
                            <DetailTrainingPlan></DetailTrainingPlan>
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