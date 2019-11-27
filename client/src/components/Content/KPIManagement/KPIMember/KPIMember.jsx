import React, { Component } from 'react';
import { ModalMemberApprove } from './ModalMemberApprove';
import { ModalMemberEvaluate } from './ModalMemberEvaluate';

class KPIMember extends Component {
    constructor(props) {
        super(props);
        this.state = {
            commenting: false,
        };
    }
    componentDidMount() {
        this.handleResizeColumn();
    }
    handleResizeColumn = () => {
        window.$(function () {
            var pressed = false;
            var start = undefined;
            var startX, startWidth;

            window.$("table thead tr th:not(:last-child)").mousedown(function (e) {
                start = window.$(this);
                pressed = true;
                startX = e.pageX;
                startWidth = window.$(this).width();
                window.$(start).addClass("resizing");
            });

            window.$(document).mousemove(function (e) {
                if (pressed) {
                    window.$(start).width(startWidth + (e.pageX - startX));
                }
            });

            window.$(document).mouseup(function () {
                if (pressed) {
                    window.$(start).removeClass("resizing");
                    pressed = false;
                }
            });
        });
    }
    UNSAFE_componentWillMount() {
        let script = document.createElement('script');
        script.src = '/main/js/Table.js';
        script.async = true;
        script.defer = true;
        document.body.appendChild(script);
    }
    render() {
        console.log(this.state);
        return (
            <div className="table-wrapper">
                <div className="content-wrapper">
                    <section className="content-header">
                        <h1>
                            Quản lý KPI nhân viên
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
                                        <span className="info-box-text">Đã thiết lập</span>
                                        <span className="info-box-number">38/40</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 col-sm-6 col-xs-12">
                                <div className="info-box">
                                    <span className="info-box-icon bg-red"><i className="fa fa-thumbs-o-up" /></span>
                                    <div className="info-box-content">
                                        <span className="info-box-text">Đang thực hiện</span>
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
                        </div>

                        <div className="row">
                            <div className="col-md-12">
                                <div className="col-md-6">
                                    <div className="box box-danger">
                                        <div className="box-header with-border">
                                            <h3 className="box-title">Nhân viên ưu tú</h3>
                                            <div className="box-tools pull-right">
                                                <span className="label label-danger">8 nhân viên xuất sắc nhất</span>
                                                <button type="button" className="btn btn-box-tool" data-widget="collapse"><i className="fa fa-minus" />
                                                </button>
                                                <button type="button" className="btn btn-box-tool" data-widget="remove"><i className="fa fa-times" />
                                                </button>
                                            </div>
                                        </div>
                                        <div className="box-body no-padding">
                                            <ul className="users-list clearfix">
                                                <li>
                                                    <img src="/adminLTE/dist/img/user1-128x128.jpg" alt="Avatar member" />
                                                    <a className="users-list-name" href="#detailKPIPersonal2" data-toggle="modal" data-target="#memberKPIApprove2">Sahara</a>
                                                    <span className="users-list-date">98</span>
                                                </li>
                                                <li>
                                                    <img src="/adminLTE/dist/img/user8-128x128.jpg" alt="Avatar member" />
                                                    <a className="users-list-name" href="#detailKPIPersonal2" data-toggle="modal" data-target="#memberKPIApprove2">Vân Anh</a>
                                                    <span className="users-list-date">97</span>
                                                </li>
                                                <li>
                                                    <img src="/adminLTE/dist/img/user7-128x128.jpg" alt="Avatar member" />
                                                    <a className="users-list-name" href="#detailKPIPersonal2" data-toggle="modal" data-target="#memberKPIApprove2">Jane</a>
                                                    <span className="users-list-date">97</span>
                                                </li>
                                                <li>
                                                    <img src="/adminLTE/dist/img/user6-128x128.jpg" alt="Avatar member" />
                                                    <a className="users-list-name" href="#detailKPIPersonal2" data-toggle="modal" data-target="#memberKPIApprove2">John</a>
                                                    <span className="users-list-date">96</span>
                                                </li>
                                                <li>
                                                    <img src="/adminLTE/dist/img/user2-160x160.jpg" alt="Avatar member" />
                                                    <a className="users-list-name" href="#detailKPIPersonal2" data-toggle="modal" data-target="#memberKPIApprove2">Alexander</a>
                                                    <span className="users-list-date">96</span>
                                                </li>
                                                <li>
                                                    <img src="/adminLTE/dist/img/user5-128x128.jpg" alt="Avatar member" />
                                                    <a className="users-list-name" href="#detailKPIPersonal2" data-toggle="modal" data-target="#memberKPIApprove2">Sarah</a>
                                                    <span className="users-list-date">95</span>
                                                </li>
                                                <li>
                                                    <img src="/adminLTE/dist/img/user4-128x128.jpg" alt="Avatar member" />
                                                    <a className="users-list-name" href="#detailKPIPersonal2" data-toggle="modal" data-target="#memberKPIApprove2">Nora</a>
                                                    <span className="users-list-date">95</span>
                                                </li>
                                                <li>
                                                    <img src="/adminLTE/dist/img/user3-128x128.jpg" alt="Avatar member" />
                                                    <a className="users-list-name" href="#detailKPIPersonal2" data-toggle="modal" data-target="#memberKPIApprove2">Nadia</a>
                                                    <span className="users-list-date">95</span>
                                                </li>
                                            </ul>
                                        </div>
                                        {/* <div className="box-footer text-center">
                                            <a href="#detailKPIPersonal2" data-toggle="modal" data-target="#memberKPIApprove2" className="uppercase">add All Users</a>
                                        </div> */}
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="box box-primary">
                                        <div className="box-header with-border">
                                            <h3 className="box-title">Yêu cầu Phê duyệt kpi nhân viên này KPI</h3>
                                            <div className="box-tools pull-right">
                                                <button type="button" className="btn btn-box-tool" data-widget="collapse"><i className="fa fa-minus" />
                                                </button>
                                            </div>
                                        </div>
                                        {/* /.box-header */}
                                        <div className="box-body">
                                            <ul className="products-list product-list-in-box">
                                                <li className="item">
                                                    <div className="product-img">
                                                        <img src="/adminLTE/dist/img/user1-128x128.jpg" alt="Avatar member" />
                                                    </div>
                                                    <div className="product-info">
                                                        <a href="#detailKPIPersonal2" data-toggle="modal" data-target="#memberKPIApprove2" className="product-title">Alexander
                                                        <span className="label label-info pull-right">Mới</span></a>
                                                        <span className="product-description">
                                                            Sếp duyệt KPI tháng tới giúp em nhé sếp!
                                                        </span>
                                                    </div>
                                                </li>
                                                <li className="item">
                                                    <div className="product-img">
                                                        <img src="/adminLTE/dist/img/user2-160x160.jpg" alt="Avatar member" />
                                                    </div>
                                                    <div className="product-info">
                                                        <a href="#detailKPIPersonal2" data-toggle="modal" data-target="#memberKPIApprove2" className="product-title">John
                                                        <span className="label label-warning pull-right">Chưa xem</span></a>
                                                        <span className="product-description">
                                                            Sếp duyệt KPI giúp em với sếp.
                                                        </span>
                                                    </div>
                                                </li>
                                                <li className="item">
                                                    <div className="product-img">
                                                        <img src="/adminLTE/dist/img/user3-128x128.jpg" alt="Avatar member" />
                                                    </div>
                                                    <div className="product-info">
                                                        <a href="#detailKPIPersonal2" data-toggle="modal" data-target="#memberKPIApprove2" className="product-title"> Sahara
                                                        <span className="label label-danger pull-right">Gấp</span></a>
                                                        <span className="product-description">
                                                            E đã sửa lại. Sếp duyệt lại giúp em nhé.
                                                        </span>
                                                    </div>
                                                </li>
                                                {/* /.item */}
                                                <li className="item">
                                                    <div className="product-img">
                                                        <img src="/adminLTE/dist/img/user4-128x128.jpg" alt="Avatar member" />
                                                    </div>
                                                    <div className="product-info">
                                                        <a href="#detailKPIPersonal2" data-toggle="modal" data-target="#memberKPIApprove2" className="product-title">Nora
                                                        <span className="label label-success pull-right">Đã xem</span></a>
                                                        <span className="product-description">
                                                            Sếp duyệt KPI giúp em nhé sếp.
                                                        </span>
                                                    </div>
                                                </li>
                                                {/* /.item */}
                                            </ul>
                                        </div>
                                        {/* /.box-body */}
                                        <div className="box-footer text-center">
                                            <a href="#detailKPIPersonal2" data-toggle="modal" data-target="#memberKPIApprove2" className="uppercase">Xem tất cả yêu cầu</a>
                                        </div>
                                        {/* /.box-footer */}
                                    </div>

                                </div>
                            </div>
                            <div className="col-md-12">
                                <div className="col-md-12">
                                    <div className="box box-info">
                                        <div className="box-header with-border">
                                            <h3 className="box-title">Bảng tổng hợp KPI nhân viên</h3>
                                            <div className="box-tools pull-right">
                                                <button type="button" className="btn btn-box-tool" data-widget="collapse"><i className="fa fa-minus" />
                                                </button>
                                            </div>
                                        </div>
                                        {/* /.box-header */}
                                        <div className="box-body">
                                            <div className="table-responsive">
                                                <table id="example1" className="table table-bordered table-striped">
                                                    <thead>
                                                        <tr>
                                                            <th style={{ width: "50px" }}>STT</th>
                                                            <th>Thời gian</th>
                                                            <th>Tên nhân viên</th>
                                                            <th>Số lượng mục tiêu</th>
                                                            <th>Trạng thái KPI</th>
                                                            <th>Kết quả</th>
                                                            <th style={{ width: "75px" }}>Hành động</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td>1</td>
                                                            <td>12-2019</td>
                                                            <td>Nguyễn Văn A</td>
                                                            <td>4</td>
                                                            <td>Đang thực hiện</td>
                                                            <td>0</td>
                                                            <td>
                                                                <a href="#detailKPIPersonal1" data-toggle="modal" data-target="#memberKPIApprove1" className="approve" title="Phê duyệt kpi nhân viên này"><i className="material-icons">done_outline</i></a>
                                                                <ModalMemberApprove id="1" name="Nguyễn Văn A"/>
                                                                <a href="#memberEvaluate1" data-toggle="modal" data-target="#memberEvaluate1" className="copy" title="Đánh giá kpi nhân viên này"><i className="material-icons">done_all</i></a>
                                                                <ModalMemberEvaluate id="1" name="Nguyễn Văn A"/>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>2</td>
                                                            <td>12-2019</td>
                                                            <td>Nguyễn Văn B</td>
                                                            <td>4</td>
                                                            <td>Chờ phê duyệt</td>
                                                            <td>0</td>
                                                            <td>
                                                                <a href="#detailKPIPersonal2" data-toggle="modal" data-target="#memberKPIApprove2" className="approve" title="Phê duyệt kpi nhân viên này"><i className="material-icons">done_outline</i></a>
                                                                <ModalMemberApprove id="2" name="Nguyễn Văn B"/>
                                                                <a href="#memberEvaluate2" data-toggle="modal" data-target="#memberEvaluate2" className="copy" title="Đánh giá kpi nhân viên này"><i className="material-icons">done_all</i></a>
                                                                <ModalMemberEvaluate id="2" name="Nguyễn Văn B"/>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>3</td>
                                                            <td>12-2019</td>
                                                            <td>Nguyễn Văn C</td>
                                                            <td>5</td>
                                                            <td>Chờ phê duyệt</td>
                                                            <td>0</td>
                                                            <td>
                                                                <a href="#detailKPIPersonal3" data-toggle="modal" data-target="#memberKPIApprove3" className="approve" title="Phê duyệt kpi nhân viên này"><i className="material-icons">done_outline</i></a>
                                                                <ModalMemberApprove id="3" name="Nguyễn Văn C"/>
                                                                <a href="#memberEvaluate3" data-toggle="modal" data-target="#memberEvaluate3" className="copy" title="Đánh giá kpi nhân viên này"><i className="material-icons">done_all</i></a>
                                                                <ModalMemberEvaluate id="3" name="Nguyễn Văn C"/>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>4</td>
                                                            <td>12-2019</td>
                                                            <td>Nguyễn Văn D</td>
                                                            <td>4</td>
                                                            <td>Chờ phê duyệt</td>
                                                            <td>0</td>
                                                            <td>
                                                                <a href="#detailKPIPersonal4" data-toggle="modal" data-target="#memberKPIApprove4" className="approve" title="Phê duyệt kpi nhân viên này"><i className="material-icons">done_outline</i></a>
                                                                <ModalMemberApprove id="4" name="Nguyễn Văn D"/>
                                                                <a href="#memberEvaluate4" data-toggle="modal" data-target="#memberEvaluate4" className="copy" title="Đánh giá kpi nhân viên này"><i className="material-icons">done_all</i></a>
                                                                <ModalMemberEvaluate id="4" name="Nguyễn Văn D"/>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>5</td>
                                                            <td>12-2019</td>
                                                            <td>Nguyễn Văn E</td>
                                                            <td>5</td>
                                                            <td>Chờ phê duyệt</td>
                                                            <td>0</td>
                                                            <td>
                                                                <a href="#detailKPIPersonal5" data-toggle="modal" data-target="#memberKPIApprove5" className="approve" title="Phê duyệt kpi nhân viên này"><i className="material-icons">done_outline</i></a>
                                                                <ModalMemberApprove id="5" name="Nguyễn Văn E"/>
                                                                <a href="#memberEvaluate5" data-toggle="modal" data-target="#memberEvaluate5" className="copy" title="Đánh giá kpi nhân viên này"><i className="material-icons">done_all</i></a>
                                                                <ModalMemberEvaluate id="5" name="Nguyễn Văn E"/>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>6</td>
                                                            <td>12-2019</td>
                                                            <td>Nguyễn Văn F</td>
                                                            <td>4</td>
                                                            <td>Chờ phê duyệt</td>
                                                            <td>0</td>
                                                            <td>
                                                                <a href="#detailKPIPersonal6" data-toggle="modal" data-target="#memberKPIApprove6" className="approve" title="Phê duyệt kpi nhân viên này"><i className="material-icons">done_outline</i></a>
                                                                <ModalMemberApprove id="6" name="Nguyễn Văn F"/>
                                                                <a href="#memberEvaluate6" data-toggle="modal" data-target="#memberEvaluate6" className="copy" title="Đánh giá kpi nhân viên này"><i className="material-icons">done_all</i></a>
                                                                <ModalMemberEvaluate id="6" name="Nguyễn Văn F"/>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>7</td>
                                                            <td>12-2019</td>
                                                            <td>Nguyễn Văn G</td>
                                                            <td>4</td>
                                                            <td>Đang thực hiện</td>
                                                            <td>0</td>
                                                            <td>
                                                                <a href="#detailKPIPersonal7" data-toggle="modal" data-target="#memberKPIApprove7" className="approve" title="Phê duyệt kpi nhân viên này"><i className="material-icons">done_outline</i></a>
                                                                <ModalMemberApprove id="7" name="Nguyễn Văn G"/>
                                                                <a href="#memberEvaluate7" data-toggle="modal" data-target="#memberEvaluate7" className="copy" title="Đánh giá kpi nhân viên này"><i className="material-icons">done_all</i></a>
                                                                <ModalMemberEvaluate id="7" name="Nguyễn Văn G"/>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>8</td>
                                                            <td>12-2019</td>
                                                            <td>Nguyễn Văn H</td>
                                                            <td>4</td>
                                                            <td>Chờ phê duyệt</td>
                                                            <td>0</td>
                                                            <td>
                                                                <a href="#detailKPIPersonal8" data-toggle="modal" data-target="#memberKPIApprove8" className="approve" title="Phê duyệt kpi nhân viên này"><i className="material-icons">done_outline</i></a>
                                                                <ModalMemberApprove id="8" name="Nguyễn Văn H"/>
                                                                <a href="#memberEvaluate8" data-toggle="modal" data-target="#memberEvaluate8" className="copy" title="Đánh giá kpi nhân viên này"><i className="material-icons">done_all</i></a>
                                                                <ModalMemberEvaluate id="8" name="Nguyễn Văn H"/>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>9</td>
                                                            <td>12-2019</td>
                                                            <td>Nguyễn Thị Y</td>
                                                            <td>5</td>
                                                            <td>Đang thực hiện</td>
                                                            <td>0</td>
                                                            <td>
                                                                <a href="#detailKPIPersonal9" data-toggle="modal" data-target="#memberKPIApprove9" className="approve" title="Phê duyệt kpi nhân viên này"><i className="material-icons">done_outline</i></a>
                                                                <ModalMemberApprove id="9" name="Nguyễn Văn Y"/>
                                                                <a href="#memberEvaluate9" data-toggle="modal" data-target="#memberEvaluate9" className="copy" title="Đánh giá kpi nhân viên này"><i className="material-icons">done_all</i></a>
                                                                <ModalMemberEvaluate id="9" name="Nguyễn Văn Y"/>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>10</td>
                                                            <td>12-2019</td>
                                                            <td>Nguyễn Văn K</td>
                                                            <td>4</td>
                                                            <td>Đang thực hiện</td>
                                                            <td>0</td>
                                                            <td>
                                                                <a href="#detailKPIPersonal10" data-toggle="modal" data-target="#memberKPIApprove10" className="approve" title="Phê duyệt kpi nhân viên này"><i className="material-icons">done_outline</i></a>
                                                                <ModalMemberApprove id="10" name="Nguyễn Văn K"/>
                                                                <a href="#memberEvaluate10" data-toggle="modal" data-target="#memberEvaluate10" className="copy" title="Đánh giá kpi nhân viên này"><i className="material-icons">done_all</i></a>
                                                                <ModalMemberEvaluate id="10" name="Nguyễn Văn K"/>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>11</td>
                                                            <td>12-2019</td>
                                                            <td>Nguyễn Văn L</td>
                                                            <td>4</td>
                                                            <td>Chờ phê duyệt</td>
                                                            <td>0</td>
                                                            <td>
                                                                <a href="#detailKPIPersonal11" data-toggle="modal" data-target="#memberKPIApprove11" className="approve" title="Phê duyệt kpi nhân viên này"><i className="material-icons">done_outline</i></a>
                                                                <ModalMemberApprove id="11" name="Nguyễn Văn L"/>
                                                                <a href="#memberEvaluate11" data-toggle="modal" data-target="#memberEvaluate11" className="copy" title="Đánh giá kpi nhân viên này"><i className="material-icons">done_all</i></a>
                                                                <ModalMemberEvaluate id="11" name="Nguyễn Văn L"/>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>12</td>
                                                            <td>12-2019</td>
                                                            <td>Nguyễn Văn M</td>
                                                            <td>4</td>
                                                            <td>Chờ phê duyệt</td>
                                                            <td>0</td>
                                                            <td>
                                                                <a href="#detailKPIPersonal12" data-toggle="modal" data-target="#memberKPIApprove12" className="approve" title="Phê duyệt kpi nhân viên này"><i className="material-icons">done_outline</i></a>
                                                                <ModalMemberApprove id="12" name="Nguyễn Văn M"/>
                                                                <a href="#memberEvaluate12" data-toggle="modal" data-target="#memberEvaluate12" className="copy" title="Đánh giá kpi nhân viên này"><i className="material-icons">done_all</i></a>
                                                                <ModalMemberEvaluate id="12" name="Nguyễn Văn M"/>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>13</td>
                                                            <td>12-2019</td>
                                                            <td>Nguyễn Văn P</td>
                                                            <td>4</td>
                                                            <td>Đang thực hiện</td>
                                                            <td>0</td>
                                                            <td>
                                                                <a href="#detailKPIPersonal13" data-toggle="modal" data-target="#memberKPIApprove13" className="approve" title="Phê duyệt kpi nhân viên này"><i className="material-icons">done_outline</i></a>
                                                                <ModalMemberApprove id="13" name="Nguyễn Văn P"/>
                                                                <a href="#memberEvaluate13" data-toggle="modal" data-target="#memberEvaluate13" className="copy" title="Đánh giá kpi nhân viên này"><i className="material-icons">done_all</i></a>
                                                                <ModalMemberEvaluate id="13" name="Nguyễn Văn P"/>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>14</td>
                                                            <td>12-2019</td>
                                                            <td>Nguyễn Văn X</td>
                                                            <td>5</td>
                                                            <td>Đang thực hiện</td>
                                                            <td>0</td>
                                                            <td>
                                                                <a href="#detailKPIPersonal14" data-toggle="modal" data-target="#memberKPIApprove14" className="approve" title="Phê duyệt kpi nhân viên này"><i className="material-icons">done_outline</i></a>
                                                                <ModalMemberApprove id="14" name="Nguyễn Văn X"/>
                                                                <a href="#memberEvaluate14" data-toggle="modal" data-target="#memberEvaluate14" className="copy" title="Đánh giá kpi nhân viên này"><i className="material-icons">done_all</i></a>
                                                                <ModalMemberEvaluate id="14" name="Nguyễn Văn X"/>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                        {/* <div className="box-footer clearfix">
                                            <a href="#detailKPIPersonal2" data-toggle="modal" data-target="#memberKPIApprove2" className="btn btn-sm btn-info btn-flat pull-left">Place New Order</a>
                                            <a href="#detailKPIPersonal2" data-toggle="modal" data-target="#memberKPIApprove2" className="btn btn-sm btn-default btn-flat pull-right">add All Orders</a>
                                        </div> */}
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3" id="chart-member">
                                <div className="box box-success direct-chat direct-chat-success collapsed-box">
                                    <div className="box-header with-border">
                                        <h3 className="box-title">Phản hồi nhân viên</h3>
                                        <div className="box-tools pull-right">
                                            <span data-toggle="tooltip" title="3 New Messages" className="badge bg-green">3</span>
                                            <button type="button" className="btn btn-box-tool" data-widget="collapse"><i className="fa fa-plus" />
                                            </button>
                                            <button type="button" className="btn btn-box-tool" data-toggle="tooltip" title="Contacts" data-widget="chat-pane-toggle">
                                                <i className="fa fa-comments" /></button>
                                            {/* <button type="button" className="btn btn-box-tool" data-widget="remove"><i className="fa fa-times" /></button> */}
                                        </div>
                                    </div>
                                    <div className="box-body" style={{ display: "none" }}>
                                        <div className="direct-chat-messages">
                                            <div className="direct-chat-msg">
                                                <div className="direct-chat-info clearfix">
                                                    <span className="direct-chat-name pull-left">Alexander Pierce</span>
                                                    <span className="direct-chat-timestamp pull-right">23 Jan 2:00 pm</span>
                                                </div>
                                                <img className="direct-chat-img" src="/adminLTE/dist/img/user1-128x128.jpg" alt="Message Avatar User" />{/* /.direct-chat-img */}
                                                <div className="direct-chat-text">
                                                    Is this template really for free? That's unbelievable!
                                                </div>
                                            </div>
                                            <div className="direct-chat-msg right">
                                                <div className="direct-chat-info clearfix">
                                                    <span className="direct-chat-name pull-right">Sarah Bullock</span>
                                                    <span className="direct-chat-timestamp pull-left">23 Jan 2:05 pm</span>
                                                </div>
                                                <img className="direct-chat-img" src="/adminLTE/dist/img/user3-128x128.jpg" alt="Message Avatar User" />{/* /.direct-chat-img */}
                                                <div className="direct-chat-text">
                                                    You better believe it!
                                                </div>
                                            </div>
                                        </div>
                                        <div className="direct-chat-contacts">
                                            <ul className="contacts-list">
                                                <li>
                                                    <a href="#detailKPIPersonal2" data-toggle="modal" data-target="#memberKPIApprove2">
                                                        <img className="contacts-list-img" src="/adminLTE/dist/img/user1-128x128.jpg" alt="Avatar User" />
                                                        <div className="contacts-list-info">
                                                            <span className="contacts-list-name">
                                                                Count Dracula
                                                                <small className="contacts-list-date pull-right">2/28/2015</small>
                                                            </span>
                                                            <span className="contacts-list-msg">How have you been? I was...</span>
                                                        </div>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#detailKPIPersonal2" data-toggle="modal" data-target="#memberKPIApprove2">
                                                        <img className="contacts-list-img" src="/adminLTE/dist/img/user1-128x128.jpg" alt="Avatar User" />
                                                        <div className="contacts-list-info">
                                                            <span className="contacts-list-name">
                                                                Count Dracula
                                                                <small className="contacts-list-date pull-right">2/28/2015</small>
                                                            </span>
                                                            <span className="contacts-list-msg">How have you been? I was...</span>
                                                        </div>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#detailKPIPersonal2" data-toggle="modal" data-target="#memberKPIApprove2">
                                                        <img className="contacts-list-img" src="/adminLTE/dist/img/user1-128x128.jpg" alt="Avatar User" />
                                                        <div className="contacts-list-info">
                                                            <span className="contacts-list-name">
                                                                Count Dracula
                                                                <small className="contacts-list-date pull-right">2/28/2015</small>
                                                            </span>
                                                            <span className="contacts-list-msg">How have you been? I was...</span>
                                                        </div>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#detailKPIPersonal2" data-toggle="modal" data-target="#memberKPIApprove2">
                                                        <img className="contacts-list-img" src="/adminLTE/dist/img/user1-128x128.jpg" alt="Avatar User" />
                                                        <div className="contacts-list-info">
                                                            <span className="contacts-list-name">
                                                                Count Dracula
                                                                <small className="contacts-list-date pull-right">2/28/2015</small>
                                                            </span>
                                                            <span className="contacts-list-msg">How have you been? I was...</span>
                                                        </div>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#detailKPIPersonal2" data-toggle="modal" data-target="#memberKPIApprove2">
                                                        <img className="contacts-list-img" src="/adminLTE/dist/img/user1-128x128.jpg" alt="Avatar User" />
                                                        <div className="contacts-list-info">
                                                            <span className="contacts-list-name">
                                                                Count Dracula
                                                                <small className="contacts-list-date pull-right">2/28/2015</small>
                                                            </span>
                                                            <span className="contacts-list-msg">How have you been? I was...</span>
                                                        </div>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#detailKPIPersonal2" data-toggle="modal" data-target="#memberKPIApprove2">
                                                        <img className="contacts-list-img" src="/adminLTE/dist/img/user1-128x128.jpg" alt="Avatar User" />
                                                        <div className="contacts-list-info">
                                                            <span className="contacts-list-name">
                                                                Count Dracula
                                                                <small className="contacts-list-date pull-right">2/28/2015</small>
                                                            </span>
                                                            <span className="contacts-list-msg">How have you been? I was...</span>
                                                        </div>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#detailKPIPersonal2" data-toggle="modal" data-target="#memberKPIApprove2">
                                                        <img className="contacts-list-img" src="/adminLTE/dist/img/user1-128x128.jpg" alt="Avatar User" />
                                                        <div className="contacts-list-info">
                                                            <span className="contacts-list-name">
                                                                Count Dracula
                                                                <small className="contacts-list-date pull-right">2/28/2015</small>
                                                            </span>
                                                            <span className="contacts-list-msg">How have you been? I was...</span>
                                                        </div>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#detailKPIPersonal2" data-toggle="modal" data-target="#memberKPIApprove2">
                                                        <img className="contacts-list-img" src="/adminLTE/dist/img/user1-128x128.jpg" alt="Avatar User" />
                                                        <div className="contacts-list-info">
                                                            <span className="contacts-list-name">
                                                                Count Dracula
                                                                <small className="contacts-list-date pull-right">2/28/2015</small>
                                                            </span>
                                                            <span className="contacts-list-msg">How have you been? I was...</span>
                                                        </div>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="box-footer" style={{ display: "none" }}>
                                        <form action="#abc" method="post">
                                            <div className="input-group">
                                                <input type="text" name="message" placeholder="Type Message ..." className="form-control" />
                                                <span className="input-group-btn">
                                                    <button type="submit" className="btn btn-success btn-flat">Send</button>
                                                </span>
                                            </div>
                                        </form>
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

export { KPIMember };