import React, { Component } from 'react';

class KPIMember extends Component {
    constructor(props) {
        super(props);
        this.state = {
            commenting: false
        };
    }
    handleRequestEdit = () => {
        this.setState({
            commenting: true
        });
    }
    handleSubmitComment = () => {
        this.setState({
            commenting: false
        });
    }
    render() {
        const {commenting} = this.state;
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
                                        <span className="info-box-text">Đã phê duyệt</span>
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
                                                    <img src="adminLTE/dist/img/user1-128x128.jpg" alt="Avatar member" />
                                                    <a className="users-list-name" href="#abc">Sahara</a>
                                                    <span className="users-list-date">98</span>
                                                </li>
                                                <li>
                                                    <img src="adminLTE/dist/img/user8-128x128.jpg" alt="Avatar member" />
                                                    <a className="users-list-name" href="#abc">Vân Anh</a>
                                                    <span className="users-list-date">97</span>
                                                </li>
                                                <li>
                                                    <img src="adminLTE/dist/img/user7-128x128.jpg" alt="Avatar member" />
                                                    <a className="users-list-name" href="#abc">Jane</a>
                                                    <span className="users-list-date">97</span>
                                                </li>
                                                <li>
                                                    <img src="adminLTE/dist/img/user6-128x128.jpg" alt="Avatar member" />
                                                    <a className="users-list-name" href="#abc">John</a>
                                                    <span className="users-list-date">96</span>
                                                </li>
                                                <li>
                                                    <img src="adminLTE/dist/img/user2-160x160.jpg" alt="Avatar member" />
                                                    <a className="users-list-name" href="#abc">Alexander</a>
                                                    <span className="users-list-date">96</span>
                                                </li>
                                                <li>
                                                    <img src="adminLTE/dist/img/user5-128x128.jpg" alt="Avatar member" />
                                                    <a className="users-list-name" href="#abc">Sarah</a>
                                                    <span className="users-list-date">95</span>
                                                </li>
                                                <li>
                                                    <img src="adminLTE/dist/img/user4-128x128.jpg" alt="Avatar member" />
                                                    <a className="users-list-name" href="#abc">Nora</a>
                                                    <span className="users-list-date">95</span>
                                                </li>
                                                <li>
                                                    <img src="adminLTE/dist/img/user3-128x128.jpg" alt="Avatar member" />
                                                    <a className="users-list-name" href="#abc">Nadia</a>
                                                    <span className="users-list-date">95</span>
                                                </li>
                                            </ul>
                                        </div>
                                        {/* <div className="box-footer text-center">
                                            <a href="#abc" className="uppercase">View All Users</a>
                                        </div> */}
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="box box-primary">
                                        <div className="box-header with-border">
                                            <h3 className="box-title">Yêu cầu phê duyệt KPI</h3>
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
                                                        <img src="adminLTE/dist/img/user1-128x128.jpg" alt="Avatar member" />
                                                    </div>
                                                    <div className="product-info">
                                                        <a href="#abc" className="product-title">Alexander
                                                        <span className="label label-info pull-right">Mới</span></a>
                                                        <span className="product-description">
                                                            Sếp duyệt KPI tháng tới giúp em nhé sếp!
                                                        </span>
                                                    </div>
                                                </li>
                                                <li className="item">
                                                    <div className="product-img">
                                                        <img src="adminLTE/dist/img/user2-160x160.jpg" alt="Avatar member" />
                                                    </div>
                                                    <div className="product-info">
                                                        <a href="#abc" className="product-title">John
                                                        <span className="label label-warning pull-right">Chưa xem</span></a>
                                                        <span className="product-description">
                                                            Sếp duyệt KPI giúp em với sếp.
                                                        </span>
                                                    </div>
                                                </li>
                                                <li className="item">
                                                    <div className="product-img">
                                                        <img src="adminLTE/dist/img/user3-128x128.jpg" alt="Avatar member" />
                                                    </div>
                                                    <div className="product-info">
                                                        <a href="#abc" className="product-title"> Sahara
                                                        <span className="label label-danger pull-right">Gấp</span></a>
                                                        <span className="product-description">
                                                            E đã sửa lại. Sếp duyệt lại giúp em nhé.
                                                        </span>
                                                    </div>
                                                </li>
                                                {/* /.item */}
                                                <li className="item">
                                                    <div className="product-img">
                                                        <img src="adminLTE/dist/img/user4-128x128.jpg" alt="Avatar member" />
                                                    </div>
                                                    <div className="product-info">
                                                        <a href="#abc" className="product-title">Nora
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
                                            <a href="#abc" className="uppercase">Xem tất cả yêu cầu</a>
                                        </div>
                                        {/* /.box-footer */}
                                    </div>

                                </div>
                            </div>
                            <div className="col-md-12">
                                <div className="col-md-12">
                                    <div className="box box-info">
                                        <div className="box-header with-border">
                                            <h3 className="box-title">Bảng trạng thái hoạt động của KPI nhân viên</h3>
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
                                                            <th>Tên nhân viên</th>
                                                            <th>Trạng thái KPI</th>
                                                            <th style={{ width: "120px" }}>Hành động</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td>1</td>
                                                            <td>Nguyễn Văn A</td>
                                                            <td>Đã phê duyệt</td>
                                                            <td>
                                                                <a href="#data-member" className="view" title="Xem chi tiết"><i className="material-icons">visibility</i></a>
                                                                <a href="#abc" className="approve" title="Phê duyệt"><i className="material-icons">playlist_add_check</i></a>
                                                                {/* <a href="#abc" className="copy" title="Phản hồi" data-toggle="tooltip" ><i className="material-icons">reply</i></a> */}
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>2</td>
                                                            <td>Nguyễn Văn B</td>
                                                            <td>Chưa thiết lập</td>
                                                            <td>
                                                                <a href="#data-member" className="view" title="Xem chi tiết"><i className="material-icons">visibility</i></a>
                                                                <a href="#abc" className="approve" title="Phê duyệt"><i className="material-icons">playlist_add_check</i></a>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>3</td>
                                                            <td>Nguyễn Văn C</td>
                                                            <td>Chưa thiết lập</td>
                                                            <td>
                                                                <a href="#data-member" className="view" title="Xem chi tiết"><i className="material-icons">visibility</i></a>
                                                                <a href="#abc" className="approve" title="Phê duyệt"><i className="material-icons">playlist_add_check</i></a>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>4</td>
                                                            <td>Nguyễn Văn D</td>
                                                            <td>Chưa thiết lập</td>
                                                            <td>
                                                                <a href="#data-member" className="view" title="Xem chi tiết"><i className="material-icons">visibility</i></a>
                                                                <a href="#abc" className="approve" title="Phê duyệt"><i className="material-icons">playlist_add_check</i></a>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>5</td>
                                                            <td>Nguyễn Văn E</td>
                                                            <td>Chưa thiết lập</td>
                                                            <td>
                                                                <a href="#data-member" className="view" title="Xem chi tiết"><i className="material-icons">visibility</i></a>
                                                                <a href="#abc" className="approve" title="Phê duyệt"><i className="material-icons">playlist_add_check</i></a>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>6</td>
                                                            <td>Nguyễn Văn F</td>
                                                            <td>Chưa thiết lập</td>
                                                            <td>
                                                                <a href="#data-member" className="view" title="Xem chi tiết"><i className="material-icons">visibility</i></a>
                                                                <a href="#abc" className="approve" title="Phê duyệt"><i className="material-icons">playlist_add_check</i></a>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>7</td>
                                                            <td>Nguyễn Văn G</td>
                                                            <td>Đang thiết lập</td>
                                                            <td>
                                                                <a href="#data-member" className="view" title="Xem chi tiết"><i className="material-icons">visibility</i></a>
                                                                <a href="#abc" className="approve" title="Phê duyệt"><i className="material-icons">playlist_add_check</i></a>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>8</td>
                                                            <td>Nguyễn Văn H</td>
                                                            <td>Chưa thiết lập</td>
                                                            <td>
                                                                <a href="#data-member" className="view" title="Xem chi tiết"><i className="material-icons">visibility</i></a>
                                                                <a href="#abc" className="approve" title="Phê duyệt"><i className="material-icons">playlist_add_check</i></a>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>9</td>
                                                            <td>Nguyễn Thị Y</td>
                                                            <td>Đang thiết lập</td>
                                                            <td>
                                                                <a href="#data-member" className="view" title="Xem chi tiết"><i className="material-icons">visibility</i></a>
                                                                <a href="#abc" className="approve" title="Phê duyệt"><i className="material-icons">playlist_add_check</i></a>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>10</td>
                                                            <td>Nguyễn Văn K</td>
                                                            <td>Chưa phê duyệt</td>
                                                            <td>
                                                                <a href="#data-member" className="view" title="Xem chi tiết"><i className="material-icons">visibility</i></a>
                                                                <a href="#abc" className="approve" title="Phê duyệt"><i className="material-icons">playlist_add_check</i></a>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>11</td>
                                                            <td>Nguyễn Văn L</td>
                                                            <td>Chưa thiết lập</td>
                                                            <td>
                                                                <a href="#data-member" className="view" title="Xem chi tiết"><i className="material-icons">visibility</i></a>
                                                                <a href="#abc" className="approve" title="Phê duyệt"><i className="material-icons">playlist_add_check</i></a>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>12</td>
                                                            <td>Nguyễn Văn M</td>
                                                            <td>Chưa thiết lập</td>
                                                            <td>
                                                                <a href="#data-member" className="view" title="Xem chi tiết"><i className="material-icons">visibility</i></a>
                                                                <a href="#abc" className="approve" title="Phê duyệt"><i className="material-icons">playlist_add_check</i></a>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>13</td>
                                                            <td>Nguyễn Văn P</td>
                                                            <td>Chưa phê duyệt</td>
                                                            <td>
                                                                <a href="#data-member" className="view" title="Xem chi tiết"><i className="material-icons">visibility</i></a>
                                                                <a href="#abc" className="approve" title="Phê duyệt"><i className="material-icons">playlist_add_check</i></a>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>14</td>
                                                            <td>Nguyễn Văn X</td>
                                                            <td>Đã phê duyệt</td>
                                                            <td>
                                                                <a href="#data-member" className="view" title="Xem chi tiết"><i className="material-icons">visibility</i></a>
                                                                <a href="#abc" className="approve" title="Phê duyệt"><i className="material-icons">playlist_add_check</i></a>
                                                                <button className="btn btn-primary col-md-2" style={{ marginLeft: "15px" }} onClick={this.handleRequestEdit}>Yêu cầu làm lại</button>
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
                                <div className="col-md-12">
                                    <div className="box box-info" id="data-member">
                                        <div className="box-header with-border">
                                            <h3 className="box-title">Bảng mục tiêu KPI nhân viên Nguyễn Văn A</h3>
                                            <div className="box-tools pull-right">
                                                <button type="button" className="btn btn-box-tool" data-widget="collapse"><i className="fa fa-minus" />
                                                </button>
                                            </div>
                                        </div>
                                        {/* /.box-header */}
                                        <div className="box-body">
                                            <div className="table-responsive">
                                                <table className="table table-bordered">
                                                    <thead>
                                                        <tr>
                                                            <th style={{ width: "40px" }}>Stt</th>
                                                            <th>Tên mục tiêu</th>
                                                            <th>Mục tiêu cha</th>
                                                            <th>Tiêu chí đánh giá</th>
                                                            <th>Thời gian</th>
                                                            <th>Trọng số</th>
                                                            <th>Trạng thái</th>
                                                            <th>Hành động</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td colSpan={8}><center>Chưa có dữ liệu</center></td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                            <div className="col-xs-9 col-xs-offset-8">
                                                <button type="submit" className="btn btn-success col-md-2">Phê duyệt tất cả</button>
                                                {commenting?<button className="btn btn-primary col-md-2" style={{ marginLeft: "15px" }} onClick={this.handleSubmitComment}>Gửi nhận xét</button>
                                                :<button className="btn btn-primary col-md-2" style={{ marginLeft: "15px" }} onClick={this.handleRequestEdit}>Yêu cầu làm lại</button>}
                                            </div>
                                            { commenting && <div className="col-xs-12">
                                                <form>
                                                    <div className="form-group">
                                                        <label>Phản hồi:</label>
                                                        <div className='form-group'>
                                                            <textarea type="text" className='form-control' id="inputname" name="reason"/>
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>}
                                        </div>
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
                                                <img className="direct-chat-img" src="adminLTE/dist/img/user1-128x128.jpg" alt="Message Avatar User" />{/* /.direct-chat-img */}
                                                <div className="direct-chat-text">
                                                    Is this template really for free? That's unbelievable!
                                                </div>
                                            </div>
                                            <div className="direct-chat-msg right">
                                                <div className="direct-chat-info clearfix">
                                                    <span className="direct-chat-name pull-right">Sarah Bullock</span>
                                                    <span className="direct-chat-timestamp pull-left">23 Jan 2:05 pm</span>
                                                </div>
                                                <img className="direct-chat-img" src="adminLTE/dist/img/user3-128x128.jpg" alt="Message Avatar User" />{/* /.direct-chat-img */}
                                                <div className="direct-chat-text">
                                                    You better believe it!
                                                </div>
                                            </div>
                                        </div>
                                        <div className="direct-chat-contacts">
                                            <ul className="contacts-list">
                                                <li>
                                                    <a href="#abc">
                                                        <img className="contacts-list-img" src="adminLTE/dist/img/user1-128x128.jpg" alt="Avatar User" />
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
                                                    <a href="#abc">
                                                        <img className="contacts-list-img" src="adminLTE/dist/img/user1-128x128.jpg" alt="Avatar User" />
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
                                                    <a href="#abc">
                                                        <img className="contacts-list-img" src="adminLTE/dist/img/user1-128x128.jpg" alt="Avatar User" />
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
                                                    <a href="#abc">
                                                        <img className="contacts-list-img" src="adminLTE/dist/img/user1-128x128.jpg" alt="Avatar User" />
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
                                                    <a href="#abc">
                                                        <img className="contacts-list-img" src="adminLTE/dist/img/user1-128x128.jpg" alt="Avatar User" />
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
                                                    <a href="#abc">
                                                        <img className="contacts-list-img" src="adminLTE/dist/img/user1-128x128.jpg" alt="Avatar User" />
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
                                                    <a href="#abc">
                                                        <img className="contacts-list-img" src="adminLTE/dist/img/user1-128x128.jpg" alt="Avatar User" />
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
                                                    <a href="#abc">
                                                        <img className="contacts-list-img" src="adminLTE/dist/img/user1-128x128.jpg" alt="Avatar User" />
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