import React, { Component } from 'react';

class MemberApprove extends Component {
    constructor(props) {
        super(props);
        this.state = {
            editing: false
        };
    };
    UNSAFE_componentWillMount() {
        let script = document.createElement('script');
        script.src = '/main/js/Table.js';
        script.async = true;
        script.defer = true;
        document.body.appendChild(script);
    }
    render() {
        return (
            <div className="table-wrapper">
                <div className="content-wrapper">
                    <section className="content-header">
                        <h1>
                            Đánh giá KPI nhân viên
                        </h1>
                        <ol className="breadcrumb">
                            <li><a href="/"><i className="fa fa-dashboard" /> Home</a></li>
                            <li><a href="/">Forms</a></li>
                            <li className="active">Advanced Elements</li>
                        </ol>
                    </section>
                    <section className="content">
                        {/* <div className="row">
                            <div className="col-md-3 col-sm-6 col-xs-12">
                                <div className="info-box">
                                    <span className="info-box-icon bg-aqua"><i className="ion ion-ios-gear-outline" /></span>
                                    <div className="info-box-content">
                                        <span className="info-box-text">Đã thiết lập</span>
                                        <span className="info-box-number">38/40</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 col-sm-6 col-xs-12">
                                <div className="info-box">
                                    <span className="info-box-icon bg-red"><i className="fa fa-thumbs-o-up" /></span>
                                    <div className="info-box-content">
                                        <span className="info-box-text">Đã đánh giá</span>
                                        <span className="info-box-number">20/40</span>
                                    </div>
                                </div>
                            </div>
                            <div className="clearfix visible-sm-block" />
                            <div className="col-md-3 col-sm-6 col-xs-12">
                                <div className="info-box">
                                    <span className="info-box-icon bg-green"><i className="fa fa-comments-o" /></span>
                                    <div className="info-box-content">
                                        <span className="info-box-text">Số lượng yêu cầu</span>
                                        <span className="info-box-number">760</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 col-sm-6 col-xs-12">
                                <div className="info-box">
                                    <span className="info-box-icon bg-yellow"><i className="ion ion-ios-people-outline" /></span>
                                    <div className="info-box-content">
                                        <span className="info-box-text">Số nhân viên</span>
                                        <span className="info-box-number">200</span>
                                    </div>
                                </div>
                            </div>
                        </div> */}

                        <div className="row">
                            <div className="col-md-12">
                                <div className="col-md-12">
                                    <div className="box box-info">
                                        <div className="box-header with-border">
                                            <h3 className="box-title">Bảng kết quả đánh giá nhân viên tháng 11</h3>
                                            {/* <div className="box-tools pull-right">
                                                <button type="button" className="btn btn-box-tool" data-widget="collapse"><i className="fa fa-minus" />
                                                </button>
                                            </div> */}
                                        </div>
                                        {/* /.box-header */}
                                        <div className="box-body">
                                            <div className="table-responsive">
                                                <table id="example1" className="table table-bordered table-striped">
                                                    <thead>
                                                        <tr>
                                                            <th style={{ width: "50px" }}>STT</th>
                                                            <th>Tên nhân viên</th>
                                                            <th>Trạng thái KPI</th>
                                                            <th>Kết quả đánh giá</th>
                                                            <th style={{ width: "75px" }}>Hành động</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td>1</td>
                                                            <td>Nguyễn Văn A</td>
                                                            <td>Đã đánh giá</td>
                                                            <td>90</td>
                                                            <td>
                                                                <a href="#abc" className="approve" title="Đánh giá nhân viên này"><i className="material-icons">playlist_add_check</i></a>
                                                                {/* <a href="#abc" className="copy" title="Phản hồi" data-toggle="tooltip" ><i className="material-icons">reply</i></a> */}
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>2</td>
                                                            <td>Nguyễn Văn B</td>
                                                            <td>Chưa đánh giá</td>
                                                            <td>0</td>
                                                            <td>
                                                                <a href="#abc" className="approve" title="Đánh giá nhân viên này"><i className="material-icons">playlist_add_check</i></a>
                                                                {/* <a href="#abc" className="copy" title="Phản hồi" data-toggle="tooltip"><i className="material-icons">reply</i></a> */}
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>3</td>
                                                            <td>Nguyễn Văn C</td>
                                                            <td>Chưa đánh giá</td>
                                                            <td>0</td>
                                                            <td>
                                                                <a href="#abc" className="approve" title="Đánh giá nhân viên này"><i className="material-icons">playlist_add_check</i></a>
                                                                {/* <a href="#abc" className="copy" title="Phản hồi" data-toggle="tooltip"><i className="material-icons">reply</i></a> */}
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>4</td>
                                                            <td>Nguyễn Văn D</td>
                                                            <td>Chưa đánh giá</td>
                                                            <td>0</td>
                                                            <td>
                                                                <a href="#abc" className="approve" title="Đánh giá nhân viên này"><i className="material-icons">playlist_add_check</i></a>
                                                                {/* <a href="#abc" className="copy" title="Phản hồi" data-toggle="tooltip"><i className="material-icons">reply</i></a> */}
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>5</td>
                                                            <td>Nguyễn Văn E</td>
                                                            <td>Chưa đánh giá</td>
                                                            <td>0</td>
                                                            <td>
                                                                <a href="#abc" className="approve" title="Đánh giá nhân viên này"><i className="material-icons">playlist_add_check</i></a>
                                                                {/* <a href="#abc" className="copy" title="Phản hồi" data-toggle="tooltip"><i className="material-icons">reply</i></a> */}
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>6</td>
                                                            <td>Nguyễn Văn F</td>
                                                            <td>Chưa đánh giá</td>
                                                            <td>0</td>
                                                            <td>
                                                                <a href="#abc" className="approve" title="Đánh giá nhân viên này"><i className="material-icons">playlist_add_check</i></a>
                                                                {/* <a href="#abc" className="copy" title="Phản hồi" data-toggle="tooltip"><i className="material-icons">reply</i></a> */}
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>7</td>
                                                            <td>Nguyễn Văn G</td>
                                                            <td>Chưa đánh giá</td>
                                                            <td>0</td>
                                                            <td>
                                                                <a href="#abc" className="approve" title="Đánh giá nhân viên này"><i className="material-icons">playlist_add_check</i></a>
                                                                {/* <a href="#abc" className="copy" title="Phản hồi" data-toggle="tooltip"><i className="material-icons">reply</i></a> */}
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>8</td>
                                                            <td>Nguyễn Văn H</td>
                                                            <td>Chưa đánh giá</td>
                                                            <td>0</td>
                                                            <td>
                                                                <a href="#abc" className="approve" title="Đánh giá nhân viên này"><i className="material-icons">playlist_add_check</i></a>
                                                                {/* <a href="#abc" className="copy" title="Phản hồi" data-toggle="tooltip"><i className="material-icons">reply</i></a> */}
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>9</td>
                                                            <td>Nguyễn Thị Y</td>
                                                            <td>Chưa đánh giá</td>
                                                            <td>0</td>
                                                            <td>
                                                                <a href="#abc" className="approve" title="Đánh giá nhân viên này"><i className="material-icons">playlist_add_check</i></a>
                                                                {/* <a href="#abc" className="copy" title="Phản hồi" data-toggle="tooltip"><i className="material-icons">reply</i></a> */}
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>10</td>
                                                            <td>Nguyễn Văn K</td>
                                                            <td>Đã đánh giá</td>
                                                            <td>80</td>
                                                            <td>
                                                                <a href="#abc" className="approve" title="Đánh giá nhân viên này"><i className="material-icons">playlist_add_check</i></a>
                                                                {/* <a href="#abc" className="copy" title="Phản hồi" data-toggle="tooltip"><i className="material-icons">reply</i></a> */}
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>11</td>
                                                            <td>Nguyễn Văn L</td>
                                                            <td>Chưa đánh giá</td>
                                                            <td>0</td>
                                                            <td>
                                                                <a href="#abc" className="approve" title="Đánh giá nhân viên này"><i className="material-icons">playlist_add_check</i></a>
                                                                {/* <a href="#abc" className="copy" title="Phản hồi" data-toggle="tooltip"><i className="material-icons">reply</i></a> */}
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>12</td>
                                                            <td>Nguyễn Văn M</td>
                                                            <td>Chưa đánh giá</td>
                                                            <td>0</td>
                                                            <td>
                                                                <a href="#abc" className="approve" title="Đánh giá nhân viên này"><i className="material-icons">playlist_add_check</i></a>
                                                                {/* <a href="#abc" className="copy" title="Phản hồi" data-toggle="tooltip"><i className="material-icons">reply</i></a> */}
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>13</td>
                                                            <td>Nguyễn Văn P</td>
                                                            <td>Đã đánh giá</td>
                                                            <td>90</td>
                                                            <td>
                                                                <a href="#abc" className="approve" title="Đánh giá nhân viên này"><i className="material-icons">playlist_add_check</i></a>
                                                                {/* <a href="#abc" className="copy" title="Phản hồi" data-toggle="tooltip"><i className="material-icons">reply</i></a> */}
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>14</td>
                                                            <td>Nguyễn Văn X</td>
                                                            <td>Đã đánh giá</td>
                                                            <td>95</td>
                                                            <td>
                                                                <a href="#abc" className="approve" title="Đánh giá nhân viên này"><i className="material-icons">playlist_add_check</i></a>
                                                                {/* <a href="#abc" className="copy" title="Phản hồi" data-toggle="tooltip"><i className="material-icons">reply</i></a> */}
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                        {/* <div className="box-footer clearfix">
                                            <a href="#abc" className="btn btn-sm btn-info btn-flat pull-left">Place New Order</a>
                                            <a href="#abc" className="btn btn-sm btn-default btn-flat pull-right">View All Orders</a>
                                        </div> */}
                                    </div>
                                </div>
                                {/* <div className="col-md-12">
                                    <div className="box box-info" id="data-kpi-member">
                                        <div className="box-header with-border">
                                            <h3 className="box-title">Thông tin KPI nhân viên Nguyễn Văn A</h3>
                                            <div className="box-tools pull-right">
                                                <button type="button" className="btn btn-box-tool" data-widget="collapse"><i className="fa fa-minus" />
                                                </button>
                                            </div>
                                        </div>
                                        <div className="box-body">
                                            <div className="model-item">
                                                <div className="header-item" style={{ border: "solid 1px #F8F8F8", background: "#F8F8F8" }}>
                                                    <h4><a data-toggle="collapse" href="#mt1" aria-expanded="false" aria-controls="mt1">
                                                        Mục tiêu số 1: Hoàn thành quy định của công ty
                                                    <small>(30%, 4cv, 4 cvht)</small></a>
                                                    </h4>
                                                </div>
                                                <div id="mt1" className="collapse">
                                                    <table className="table table-bordered table-striped">
                                                        <thead>
                                                            <tr>
                                                                <th>Tên công việc</th>
                                                                <th>Vai trò</th>
                                                                <th>Thời gian</th>
                                                                <th>Trạng thái</th>
                                                                <th>Mức độ hoàn thành(%)</th>
                                                                <th>Hành động</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr>
                                                                <td>Công việc số 1</td>
                                                                <td>Người thực hiện</td>
                                                                <td>3/10-25/10</td>
                                                                <td>Đã hoàn thành</td>
                                                                <td>100</td>
                                                                <td>
                                                                    <a href="#myModalHorizontal1" data-toggle="modal" className="view" title="View" data-target="#myModalHorizontal1"><i className="material-icons">visibility</i></a>
                                                                    <a href="#abc" className="delete" title="Delete" data-toggle="tooltip"><i className="material-icons"></i></a>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>Công việc số 2</td>
                                                                <td>Người thực hiện</td>
                                                                <td>2/10-15/10</td>
                                                                <td>Đã hoàn thành</td>
                                                                <td>100</td>
                                                                <td>
                                                                    <a href="#myModalHorizontal2" data-toggle="modal" data-target="#myModalHorizontal2" className="view" title="View"><i className="material-icons">visibility</i></a>
                                                                    <a href="#abc" className="delete" title="Delete" data-toggle="tooltip"><i className="material-icons"></i></a>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>Công việc số 3</td>
                                                                <td>Người phê duyệt</td>
                                                                <td>29/10-30/10</td>
                                                                <td>Đã hoàn thành</td>
                                                                <td>100</td>
                                                                <td>
                                                                    <a href="#myModalHorizontal3" data-toggle="modal" data-target="#myModalHorizontal3" className="view" title="View"><i className="material-icons">visibility</i></a>
                                                                    <a href="#abc" className="delete" title="Delete" data-toggle="tooltip"><i className="material-icons"></i></a>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>Công việc số 4</td>
                                                                <td>Người góp ý</td>
                                                                <td>29/10-30/10</td>
                                                                <td>Đã hoàn thành</td>
                                                                <td>100</td>
                                                                <td>
                                                                    <a href="#myModalHorizontal4" data-toggle="modal" data-target="#myModalHorizontal4" className="view" title="View"><i className="material-icons">visibility</i></a>
                                                                    <a href="#abc" className="delete" title="Delete" data-toggle="tooltip"><i className="material-icons"></i></a>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td><b>Điểm tính tự động</b></td>
                                                                <td>{editing ? <input defaultValue="20" style={{ width: "100%" }}></input> : 20}</td>
                                                                <td><b>Tự đánh giá</b></td>
                                                                <td>{editing ? <input defaultValue="20" style={{ width: "100%" }}></input> : 20}</td>
                                                                <td><b>Quản lý đánh giá</b></td>
                                                                <td>{editing ? <input defaultValue="20" style={{ width: "100%" }}></input> : 20}</td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                            <div className="model-item">
                                                <div className="header-item" style={{ border: "solid 1px #F8F8F8", background: "#F8F8F8" }}>
                                                    <h4><a data-toggle="collapse" href="#mt2" aria-expanded="false" aria-controls="mt2">
                                                        Mục tiêu số 2: Đảm bảo chất lượng đầu ra của sản phẩm
                                                    <small>(30%, 4cv, 4 cvht)</small></a>
                                                    </h4>
                                                </div>
                                                <div id="mt2" className="collapse">
                                                    <table className="table table-bordered table-striped">
                                                        <thead>
                                                            <tr>
                                                                <th>Tên công việc</th>
                                                                <th>Vai trò</th>
                                                                <th>Thời gian</th>
                                                                <th>Trạng thái</th>
                                                                <th>Kết quả</th>
                                                                <th>Hành động</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr>
                                                                <td>Công việc số 1</td>
                                                                <td>Người thực hiện</td>
                                                                <td>3/10-25/10</td>
                                                                <td>Đã hoàn thành</td>
                                                                <td>80</td>
                                                                <td>
                                                                    <a href="#myModalHorizontal1" data-toggle="modal" className="view" title="View" data-target="#myModalHorizontal1"><i className="material-icons">visibility</i></a>
                                                                    <a href="#abc" className="delete" title="Delete" data-toggle="tooltip"><i className="material-icons"></i></a>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>Công việc số 2</td>
                                                                <td>Người thực hiện</td>
                                                                <td>2/10-15/10</td>
                                                                <td>Đã hoàn thành</td>
                                                                <td>80</td>
                                                                <td>
                                                                    <a href="#myModalHorizontal2" data-toggle="modal" data-target="#myModalHorizontal2" className="view" title="View"><i className="material-icons">visibility</i></a>
                                                                    <a href="#abc" className="delete" title="Delete" data-toggle="tooltip"><i className="material-icons"></i></a>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>Công việc số 3</td>
                                                                <td>Người phê duyệt</td>
                                                                <td>29/10-30/10</td>
                                                                <td>Đã hoàn thành</td>
                                                                <td>100</td>
                                                                <td>
                                                                    <a href="#myModalHorizontal3" data-toggle="modal" data-target="#myModalHorizontal3" className="view" title="View"><i className="material-icons">visibility</i></a>
                                                                    <a href="#abc" className="delete" title="Delete" data-toggle="tooltip"><i className="material-icons"></i></a>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>Công việc số 4</td>
                                                                <td>Người góp ý</td>
                                                                <td>29/10-30/10</td>
                                                                <td>Đã hoàn thành</td>
                                                                <td>100</td>
                                                                <td>
                                                                    <a href="#myModalHorizontal4" data-toggle="modal" data-target="#myModalHorizontal4" className="view" title="View"><i className="material-icons">visibility</i></a>
                                                                    <a href="#abc" className="delete" title="Delete" data-toggle="tooltip"><i className="material-icons"></i></a>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td><b>Điểm tính tự động</b></td>
                                                                <td>{editing ? <input defaultValue="20" style={{ width: "100%" }}></input> : 20}</td>
                                                                <td><b>Tự đánh giá</b></td>
                                                                <td>{editing ? <input defaultValue="25" style={{ width: "100%" }}></input> : 25}</td>
                                                                <td><b>Quản lý đánh giá</b></td>
                                                                <td>{editing ? <input defaultValue="25" style={{ width: "100%" }}></input> : 25}</td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                            <div className="modal-item">
                                                <div className="header-item" style={{ border: "solid 1px #F8F8F8", background: "#F8F8F8" }}>
                                                    <h4><a data-toggle="collapse" href="#mt3" aria-expanded="false" aria-controls="mt3">
                                                        Mục tiêu số 3: Đảm bảo chất lượng đầu vao của nguyên liệu
                                                    <small>(30%, 4cv, 4 cvht)</small></a>
                                                    </h4>
                                                </div>
                                                <div id="mt3" className="collapse">
                                                    <table className="table table-bordered table-striped">
                                                        <thead>
                                                            <tr>
                                                                <th>Tên công việc</th>
                                                                <th>Vai trò</th>
                                                                <th>Thời gian</th>
                                                                <th>Trạng thái</th>
                                                                <th>Mức độ hoàn thành(%)</th>
                                                                <th>Hành động</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr>
                                                                <td>Công việc số 1</td>
                                                                <td>Người thực hiện</td>
                                                                <td>3/10-25/10</td>
                                                                <td>Đã hoàn thành</td>
                                                                <td>80</td>
                                                                <td>
                                                                    <a href="#myModalHorizontal1" data-toggle="modal" className="view" title="View" data-target="#myModalHorizontal1"><i className="material-icons">visibility</i></a>
                                                                    <a href="#abc" className="delete" title="Delete" data-toggle="tooltip"><i className="material-icons"></i></a>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>Công việc số 2</td>
                                                                <td>Người thực hiện</td>
                                                                <td>2/10-15/10</td>
                                                                <td>Đã hoàn thành</td>
                                                                <td>80</td>
                                                                <td>
                                                                    <a href="#myModalHorizontal2" data-toggle="modal" data-target="#myModalHorizontal2" className="view" title="View"><i className="material-icons">visibility</i></a>
                                                                    <a href="#abc" className="delete" title="Delete" data-toggle="tooltip"><i className="material-icons"></i></a>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>Công việc số 3</td>
                                                                <td>Người phê duyệt</td>
                                                                <td>29/10-30/10</td>
                                                                <td>Đã hoàn thành</td>
                                                                <td>100</td>
                                                                <td>
                                                                    <a href="#myModalHorizontal3" data-toggle="modal" data-target="#myModalHorizontal3" className="view" title="View"><i className="material-icons">visibility</i></a>
                                                                    <a href="#abc" className="delete" title="Delete" data-toggle="tooltip"><i className="material-icons"></i></a>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>Công việc số 4</td>
                                                                <td>Người góp ý</td>
                                                                <td>29/10-30/10</td>
                                                                <td>Đã hoàn thành</td>
                                                                <td>100</td>
                                                                <td>
                                                                    <a href="#myModalHorizontal4" data-toggle="modal" data-target="#myModalHorizontal4" className="view" title="View"><i className="material-icons">visibility</i></a>
                                                                    <a href="#abc" className="delete" title="Delete" data-toggle="tooltip"><i className="material-icons"></i></a>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td><b>Điểm tính tự động</b></td>
                                                                <td>{editing ? <input defaultValue="25" style={{ width: "100%" }}></input> : 25}</td>
                                                                <td><b>Tự đánh giá</b></td>
                                                                <td>{editing ? <input defaultValue="30" style={{ width: "100%" }}></input> : 30}</td>
                                                                <td><b>Quản lý đánh giá</b></td>
                                                                <td>{editing ? <input defaultValue="30" style={{ width: "100%" }}></input> : 30}</td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                            <div className="modal-item">
                                                <div className="header-item" style={{ border: "solid 1px #F8F8F8", background: "#F8F8F8" }}>
                                                    <h4><a data-toggle="collapse" href="#mt4" aria-expanded="false" aria-controls="mt4">
                                                        Mục tiêu số 4: Hợp tác với các phòng ban
                                                    <small>(30%, 4cv, 4 cvht)</small></a>
                                                    </h4>
                                                </div>
                                                <div id="mt4" className="collapse">
                                                    <table className="table table-bordered table-striped">
                                                        <thead>
                                                            <tr>
                                                                <th>Tên công việc</th>
                                                                <th>Vai trò</th>
                                                                <th>Thời gian</th>
                                                                <th>Trạng thái</th>
                                                                <th>Mức độ hoàn thành</th>
                                                                <th>Hành động</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr>
                                                                <td>Công việc số 1</td>
                                                                <td>Người thực hiện</td>
                                                                <td>3/10-25/10</td>
                                                                <td>Đã hoàn thành</td>
                                                                <td>90</td>
                                                                <td>
                                                                    <a href="#myModalHorizontal1" data-toggle="modal" className="view" title="View" data-target="#myModalHorizontal1"><i className="material-icons">visibility</i></a>
                                                                    <a href="#abc" className="delete" title="Delete" data-toggle="tooltip"><i className="material-icons"></i></a>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>Công việc số 2</td>
                                                                <td>Người thực hiện</td>
                                                                <td>2/10-15/10</td>
                                                                <td>Đã hoàn thành</td>
                                                                <td>100</td>
                                                                <td>
                                                                    <a href="#myModalHorizontal2" data-toggle="modal" data-target="#myModalHorizontal2" className="view" title="View"><i className="material-icons">visibility</i></a>
                                                                    <a href="#abc" className="delete" title="Delete" data-toggle="tooltip"><i className="material-icons"></i></a>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>Công việc số 3</td>
                                                                <td>Người phê duyệt</td>
                                                                <td>29/10-30/10</td>
                                                                <td>Đã hoàn thành</td>
                                                                <td>100</td>
                                                                <td>
                                                                    <a href="#myModalHorizontal3" data-toggle="modal" data-target="#myModalHorizontal3" className="view" title="View"><i className="material-icons">visibility</i></a>
                                                                    <a href="#abc" className="delete" title="Delete" data-toggle="tooltip"><i className="material-icons"></i></a>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>Công việc số 4</td>
                                                                <td>Người góp ý</td>
                                                                <td>29/10-30/10</td>
                                                                <td>Đã hoàn thành</td>
                                                                <td>100</td>
                                                                <td>
                                                                    <a href="#myModalHorizontal4" data-toggle="modal" data-target="#myModalHorizontal4" className="view" title="View"><i className="material-icons">visibility</i></a>
                                                                    <a href="#abc" className="delete" title="Delete" data-toggle="tooltip"><i className="material-icons"></i></a>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td><b>Điểm tính tự động</b></td>
                                                                <td>{editing ? <input defaultValue="15" style={{ width: "100%" }}></input> : 15}</td>
                                                                <td><b>Tự đánh giá</b></td>
                                                                <td>{editing ? <input defaultValue="15" style={{ width: "100%" }}></input> : 15}</td>
                                                                <td><b>Quản lý đánh giá</b></td>
                                                                <td>{editing ? <input defaultValue="20" style={{ width: "100%" }}></input> : 20}</td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                            <div className="modal-footer">
                                                {editing ? <button type="button" className="btn btn-success" data-dismiss="modal" onClick={this.handleSubmit}>Save</button>
                                                    : <button type="button" className="btn btn-success" onClick={this.handleEdit}>Edit</button>}
                                                <button type="button" className="btn btn-primary" data-dismiss="modal">Cancel</button>
                                            </div>
                                        </div>
                                    </div>
                                </div> */}
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        );
    }
}

export { MemberApprove };