import React, { Component } from 'react';

class KPIUnitOverview extends Component {
    render() {
        return (
            <div className="table-wrapper">
                <div className="content-wrapper">
                    <section className="content-header">
                        <h1>
                            Tổng quan KPI đơn vị
                        </h1>
                        <ol className="breadcrumb">
                            <li><a href="/"><i className="fa fa-dashboard" /> Home</a></li>
                            <li><a href="/">Forms</a></li>
                            <li className="active">Advanced Elements</li>
                        </ol>
                    </section>
                    <section className="content">
                        <div className="row">
                            <div className="col-xs-6">
                                {/* Bar chart */}
                                <div className="box box-primary">
                                    <div className="box-header with-border">
                                        <i className="fa fa-bar-chart-o" />
                                        <h3 className="box-title">Kết quả KPI 6 tháng đầu năm</h3>
                                        <div className="box-tools pull-right">
                                            <button type="button" className="btn btn-box-tool" data-widget="collapse"><i className="fa fa-minus" />
                                            </button>
                                        </div>
                                    </div>
                                    <div className="box-body">
                                        <div id="bar-chart" style={{ height: 300 }} />
                                    </div>
                                    {/* /.box-body*/}
                                </div>
                                {/* /.box */}
                            </div>
                            <div className="col-xs-6">
                                {/* Donut chart */}
                                <div className="box box-primary">
                                    <div className="box-header with-border">
                                        <i className="fa fa-bar-chart-o" />
                                        <h3 className="box-title">Phân bố mục tiêu của KPI hiện tại</h3>
                                        <div className="box-tools pull-right">
                                            <button type="button" className="btn btn-box-tool" data-widget="collapse"><i className="fa fa-minus" />
                                            </button>
                                        </div>
                                    </div>
                                    <div className="box-body">
                                        <div id="donut-chart" style={{ height: 300 }} />
                                    </div>
                                    {/* /.box-body*/}
                                </div>
                                {/* /.box */}
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

export { KPIUnitOverview };