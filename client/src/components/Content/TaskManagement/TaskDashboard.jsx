import React, { Component } from 'react';

class TaskDashboard extends Component {
    render() {
        return (
            <div className="table-wrapper">
                <div className="content-wrapper">
                    <section className="content-header">
                        <h1>
                            Dashboard công việc
                        </h1>
                        <ol className="breadcrumb">
                            <li><a href="/"><i className="fa fa-dashboard" /> Home</a></li>
                            <li><a href="/">Forms</a></li>
                            <li className="active">Advanced Elements</li>
                        </ol>
                    </section>
                    <section className="content">
                        <div className="row">
                            <div className="col-md-3 col-sm-6 col-xs-12">
                                <div className="info-box">
                                    <span className="info-box-icon bg-aqua"><i className="ion ion-ios-gear-outline" /></span>
                                    <div className="info-box-content">
                                        <span className="info-box-text">Đã tạo</span>
                                        <span className="info-box-number">7/7</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 col-sm-6 col-xs-12">
                                <div className="info-box">
                                    <span className="info-box-icon bg-green"><i className="ion ion-ios-people-outline" /></span>
                                    <div className="info-box-content">
                                        <span className="info-box-text">Cần thực hiện</span>
                                        <span className="info-box-number">7/7</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 col-sm-6 col-xs-12">
                                <div className="info-box">
                                    <span className="info-box-icon bg-red"><i className="fa fa-thumbs-o-up" /></span>
                                    <div className="info-box-content">
                                        <span className="info-box-text">Cần phê duyệt</span>
                                        <span className="info-box-number">0/7</span>
                                    </div>
                                </div>
                            </div>
                            <div className="clearfix visible-sm-block" />
                            <div className="col-md-3 col-sm-6 col-xs-12">
                                <div className="info-box">
                                    <span className="info-box-icon bg-yellow"><i className="fa fa-comments-o" /></span>
                                    <div className="info-box-content">
                                        <span className="info-box-text">Cần hỗ trợ</span>
                                        <span className="info-box-number">0/7</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xs-6">
                                <div className="box box-primary">
                                    <div className="box-header">
                                        <i className="ion ion-clipboard" />
                                        <h3 className="box-title">Danh sách công việc</h3>
                                        <div className="box-tools pull-right">
                                            <ul className="pagination pagination-sm inline">
                                                <li><a href="#">«</a></li>
                                                <li><a href="#">1</a></li>
                                                <li><a href="#">2</a></li>
                                                <li><a href="#">3</a></li>
                                                <li><a href="#">»</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    {/* /.box-header */}
                                    <div className="box-body">
                                        {/* See dist/js/pages/dashboard.js to activate the todoList plugin */}
                                        <ul className="todo-list">
                                            <li>
                                                {/* drag handle */}
                                                <span className="handle">
                                                    <i className="fa fa-ellipsis-v" />
                                                    <i className="fa fa-ellipsis-v" />
                                                </span>
                                                {/* checkbox */}
                                                <input type="checkbox" defaultValue />
                                                {/* todo text */}
                                                <span className="text">Hoàn thành kế hoạch kiểm thử</span>
                                                {/* Emphasis label */}
                                                <small className="label label-danger"><i className="fa fa-clock-o" /> 2 mins</small>
                                                {/* General tools such as edit or delete*/}
                                                <div className="tools">
                                                    <i className="fa fa-edit" />
                                                    <i className="fa fa-trash-o" />
                                                </div>
                                            </li>
                                            <li>
                                                <span className="handle">
                                                    <i className="fa fa-ellipsis-v" />
                                                    <i className="fa fa-ellipsis-v" />
                                                </span>
                                                <input type="checkbox" defaultValue />
                                                <span className="text">Hoàn thành báo cáo kiểm thử</span>
                                                <small className="label label-info"><i className="fa fa-clock-o" /> 4 hours</small>
                                                <div className="tools">
                                                    <i className="fa fa-edit" />
                                                    <i className="fa fa-trash-o" />
                                                </div>
                                            </li>
                                            <li>
                                                <span className="handle">
                                                    <i className="fa fa-ellipsis-v" />
                                                    <i className="fa fa-ellipsis-v" />
                                                </span>
                                                <input type="checkbox" defaultValue />
                                                <span className="text">Phê duyệt công việc cho tổ kiểm thử</span>
                                                <small className="label label-warning"><i className="fa fa-clock-o" /> 1 day</small>
                                                <div className="tools">
                                                    <i className="fa fa-edit" />
                                                    <i className="fa fa-trash-o" />
                                                </div>
                                            </li>
                                            <li>
                                                <span className="handle">
                                                    <i className="fa fa-ellipsis-v" />
                                                    <i className="fa fa-ellipsis-v" />
                                                </span>
                                                <input type="checkbox" defaultValue />
                                                <span className="text">Hỗ trợ đội kiểm thử</span>
                                                <small className="label label-success"><i className="fa fa-clock-o" /> 3 days</small>
                                                <div className="tools">
                                                    <i className="fa fa-edit" />
                                                    <i className="fa fa-trash-o" />
                                                </div>
                                            </li>
                                            <li>
                                                <span className="handle">
                                                    <i className="fa fa-ellipsis-v" />
                                                    <i className="fa fa-ellipsis-v" />
                                                </span>
                                                <input type="checkbox" defaultValue />
                                                <span className="text">Phân công công việc cho nhân viên</span>
                                                <small className="label label-primary"><i className="fa fa-clock-o" /> 1 week</small>
                                                <div className="tools">
                                                    <i className="fa fa-edit" />
                                                    <i className="fa fa-trash-o" />
                                                </div>
                                            </li>
                                            <li>
                                                <span className="handle">
                                                    <i className="fa fa-ellipsis-v" />
                                                    <i className="fa fa-ellipsis-v" />
                                                </span>
                                                <input type="checkbox" defaultValue />
                                                <span className="text">Hoàn thành chương trình kiểm thử sản phẩm theo lô</span>
                                                <small className="label label-default"><i className="fa fa-clock-o" /> 1 month</small>
                                                <div className="tools">
                                                    <i className="fa fa-edit" />
                                                    <i className="fa fa-trash-o" />
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                    {/* /.box-body */}
                                    <div className="box-footer clearfix no-border">
                                        <button type="button" className="btn btn-default pull-right"><i className="fa fa-plus" /> Thêm công việc</button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xs-6">
                                <div className="box box-primary">
                                    <div className="box-header with-border">
                                        <h3 className="box-title">Danh sách các thông báo</h3>
                                        <div className="box-tools pull-right">
                                            <button type="button" className="btn btn-box-tool" data-widget="collapse"><i className="fa fa-minus" />
                                            </button>
                                            <button type="button" className="btn btn-box-tool" data-widget="remove"><i className="fa fa-times" /></button>
                                        </div>
                                    </div>
                                    {/* /.box-header */}
                                    <div className="box-body">
                                        <ul className="products-list product-list-in-box">
                                            <li className="item">
                                                <div className="product-img">
                                                    <img src="/adminLTE/dist/img/user1-128x128.jpg" alt="Product Image" />
                                                </div>
                                                <div className="product-info">
                                                    <a href="javascript:void(0)" className="product-title">Hoàn thành kế hoạch kiểm thử
                                                    <span className="label label-warning pull-right">today</span></a>
                                                    <span className="product-description">
                                                        Em cần sửa lại phần quy trình cho đảm bảo ...
                                                    </span>
                                                </div>
                                            </li>
                                            {/* /.item */}
                                            <li className="item">
                                                <div className="product-img">
                                                    <img src="/adminLTE/dist/img/user2-160x160.jpg" alt="Product Image" />
                                                </div>
                                                <div className="product-info">
                                                    <a href="javascript:void(0)" className="product-title">Kiểm thử lô hàng số 18
                                                        <span className="label label-info pull-right">week</span></a>
                                                    <span className="product-description">
                                                        Sếp ơi duyệt hộ em công việc này với ạ
                                                    </span>
                                                </div>
                                            </li>
                                            {/* /.item */}
                                            <li className="item">
                                                <div className="product-img">
                                                    <img src="/adminLTE/dist/img/user4-128x128.jpg" alt="Product Image" />
                                                </div>
                                                <div className="product-info">
                                                    <a href="javascript:void(0)" className="product-title">Xbox One <span className="label label-danger pull-right">$350</span></a>
                                                    <span className="product-description">
                                                        Xbox One Console Bundle with Halo Master Chief Collection.
                                                    </span>
                                                </div>
                                            </li>
                                            {/* /.item */}
                                            <li className="item">
                                                <div className="product-img">
                                                    <img src="/adminLTE/dist/img/user6-128x128.jpg" alt="Product Image" />
                                                </div>
                                                <div className="product-info">
                                                    <a href="javascript:void(0)" className="product-title">PlayStation 4
                                                        <span className="label label-success pull-right">$399</span></a>
                                                    <span className="product-description">
                                                        PlayStation 4 500GB Console (PS4)
                                                    </span>
                                                </div>
                                            </li>
                                            {/* /.item */}
                                        </ul>
                                    </div>
                                    {/* /.box-body */}
                                    <div className="box-footer text-center">
                                        <a href="javascript:void(0)" className="uppercase">View All Products</a>
                                    </div>
                                    {/* /.box-footer */}
                                </div>

                            </div>
                            <div className="col-xs-12">
                                <div className="box">
                                    <div className="box-header">
                                        <h3 className="box-title">Bảng danh sách kpi đơn vị hàng tháng</h3>
                                    </div>
                                    <div className="box-body">
                                        <table id="example1" className="table table-bordered table-striped">
                                            <thead>
                                                <tr>
                                                    <th style={{ width: "50px" }}>Tháng</th>
                                                    <th>Mục tiêu số 1</th>
                                                    <th>Mục tiêu số 2</th>
                                                    <th>Mục tiêu số 3</th>
                                                    <th>Mục tiêu số 4</th>
                                                    <th style={{ width: "50px" }}>Điểm</th>
                                                    <th style={{ width: "80px" }}>Hành động</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>1-2019</td>
                                                    <td>Thực hiện đúng quy định chung của công ty</td>
                                                    <td>Đảm bảo chất lượng sản phẩm theo lô</td>
                                                    <td>Đảm bảo chất lượng sản phẩm theo lô</td>
                                                    <td>Đảm bảo chất lượng sản phẩm theo lô</td>
                                                    <td>95</td>
                                                    <td>
                                                        <a href="#myModalHorizontal1" data-toggle="modal" className="view" title="View" data-target="#myModalHorizontal1"><i className="material-icons">visibility</i></a>
                                                        <a href="#abc" className="copy" title="Copy" data-toggle="tooltip"><i className="material-icons">content_copy</i></a>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>1-2019</td>
                                                    <td>Thực hiện đúng quy định chung của công ty</td>
                                                    <td>Đảm bảo chất lượng sản phẩm theo lô</td>
                                                    <td>Đảm bảo chất lượng sản phẩm theo lô</td>
                                                    <td>Đảm bảo chất lượng sản phẩm theo lô</td>
                                                    <td>93</td>
                                                    <td>
                                                        <a href="#myModalHorizontal1" data-toggle="modal" className="view" title="View" data-target="#myModalHorizontal1"><i className="material-icons">visibility</i></a>
                                                        <a href="#abc" className="copy" title="Copy" data-toggle="tooltip"><i className="material-icons">content_copy</i></a>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>1-2019</td>
                                                    <td>Thực hiện đúng quy định chung của công ty</td>
                                                    <td>Đảm bảo chất lượng sản phẩm theo lô</td>
                                                    <td>Đảm bảo chất lượng sản phẩm theo lô</td>
                                                    <td>Đảm bảo chất lượng sản phẩm theo lô</td>
                                                    <td>95</td>
                                                    <td>
                                                        <a href="#myModalHorizontal1" data-toggle="modal" className="view" title="View" data-target="#myModalHorizontal1"><i className="material-icons">visibility</i></a>
                                                        <a href="#abc" className="copy" title="Copy" data-toggle="tooltip"><i className="material-icons">content_copy</i></a>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>1-2019</td>
                                                    <td>Thực hiện đúng quy định chung của công ty</td>
                                                    <td>Đảm bảo chất lượng sản phẩm theo lô</td>
                                                    <td>Đảm bảo chất lượng sản phẩm theo lô</td>
                                                    <td>Đảm bảo chất lượng sản phẩm theo lô</td>
                                                    <td>95</td>
                                                    <td>
                                                        <a href="#myModalHorizontal1" data-toggle="modal" className="view" title="View" data-target="#myModalHorizontal1"><i className="material-icons">visibility</i></a>
                                                        <a href="#abc" className="copy" title="Copy" data-toggle="tooltip"><i className="material-icons">content_copy</i></a>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>1-2019</td>
                                                    <td>Thực hiện đúng quy định chung của công ty</td>
                                                    <td>Đảm bảo chất lượng sản phẩm theo lô</td>
                                                    <td>Đảm bảo chất lượng sản phẩm theo lô</td>
                                                    <td>Đảm bảo chất lượng sản phẩm theo lô</td>
                                                    <td>95</td>
                                                    <td>
                                                        <a href="#myModalHorizontal1" data-toggle="modal" className="view" title="View" data-target="#myModalHorizontal1"><i className="material-icons">visibility</i></a>
                                                        <a href="#abc" className="copy" title="Copy" data-toggle="tooltip"><i className="material-icons">content_copy</i></a>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>1-2019</td>
                                                    <td>Thực hiện đúng quy định chung của công ty</td>
                                                    <td>Đảm bảo chất lượng sản phẩm theo lô</td>
                                                    <td>Đảm bảo chất lượng sản phẩm theo lô</td>
                                                    <td>Đảm bảo chất lượng sản phẩm theo lô</td>
                                                    <td>95</td>
                                                    <td>
                                                        <a href="#myModalHorizontal1" data-toggle="modal" className="view" title="View" data-target="#myModalHorizontal1"><i className="material-icons">visibility</i></a>
                                                        <a href="#abc" className="copy" title="Copy" data-toggle="tooltip"><i className="material-icons">content_copy</i></a>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>1-2019</td>
                                                    <td>Thực hiện đúng quy định chung của công ty</td>
                                                    <td>Đảm bảo chất lượng sản phẩm theo lô</td>
                                                    <td>Đảm bảo chất lượng sản phẩm theo lô</td>
                                                    <td>Đảm bảo chất lượng sản phẩm theo lô</td>
                                                    <td>95</td>
                                                    <td>
                                                        <a href="#myModalHorizontal1" data-toggle="modal" className="view" title="View" data-target="#myModalHorizontal1"><i className="material-icons">visibility</i></a>
                                                        <a href="#abc" className="copy" title="Copy" data-toggle="tooltip"><i className="material-icons">content_copy</i></a>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>1-2019</td>
                                                    <td>Thực hiện đúng quy định chung của công ty</td>
                                                    <td>Đảm bảo chất lượng sản phẩm theo lô</td>
                                                    <td>Đảm bảo chất lượng sản phẩm theo lô</td>
                                                    <td>Đảm bảo chất lượng sản phẩm theo lô</td>
                                                    <td>95</td>
                                                    <td>
                                                        <a href="#myModalHorizontal1" data-toggle="modal" className="view" title="View" data-target="#myModalHorizontal1"><i className="material-icons">visibility</i></a>
                                                        <a href="#abc" className="copy" title="Copy" data-toggle="tooltip"><i className="material-icons">content_copy</i></a>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>1-2019</td>
                                                    <td>Thực hiện đúng quy định chung của công ty</td>
                                                    <td>Đảm bảo chất lượng sản phẩm theo lô</td>
                                                    <td>Đảm bảo chất lượng sản phẩm theo lô</td>
                                                    <td>Đảm bảo chất lượng sản phẩm theo lô</td>
                                                    <td>95</td>
                                                    <td>
                                                        <a href="#myModalHorizontal1" data-toggle="modal" className="view" title="View" data-target="#myModalHorizontal1"><i className="material-icons">visibility</i></a>
                                                        <a href="#abc" className="copy" title="Copy" data-toggle="tooltip"><i className="material-icons">content_copy</i></a>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>1-2019</td>
                                                    <td>Thực hiện đúng quy định chung của công ty</td>
                                                    <td>Đảm bảo chất lượng sản phẩm theo lô</td>
                                                    <td>Đảm bảo chất lượng sản phẩm theo lô</td>
                                                    <td>Đảm bảo chất lượng sản phẩm theo lô</td>
                                                    <td>95</td>
                                                    <td>
                                                        <a href="#myModalHorizontal1" data-toggle="modal" className="view" title="View" data-target="#myModalHorizontal1"><i className="material-icons">visibility</i></a>
                                                        <a href="#abc" className="copy" title="Copy" data-toggle="tooltip"><i className="material-icons">content_copy</i></a>
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

export { TaskDashboard };