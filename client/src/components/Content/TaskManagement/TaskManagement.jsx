import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ModalAddTask } from './ModalAddTask';
import { taskManagementActions, departmentActions } from '../../../redux-actions/CombineActions';
import { ModalPerformTask } from './ModalPerformTask';
import Swal from 'sweetalert2';

class TaskManagement extends Component {
    componentDidMount() {
        this.props.getDepartment(localStorage.getItem('id'));
        this.props.getTaskByUser(localStorage.getItem('id'), "[]", 1);
        this.defindMultiSelect();
        this.loadJS();
        this.handleResizeColumn();
        // this.showModal();
        // this.handleDisableOnClickFisrtLast();
    }
    constructor(props) {
        super(props);
        this.state = {
            perPage: 10,
            extendProperties: false,
            startTimer: false,
            currentTimer: "",
        };
    }
    showModal = (id) => {
        // window.$('#taskTable').on('click', 'td:not(last-child),td:not(first-child)', function (e) {
        // var id = e.target.getAttribute("data-id");
        // console.log(id);
        window.$(`#modelPerformTask${id}`).modal('show');
        // });
    }
    loadJS = () => {
        let script = document.createElement('script');
        script.src = 'main/js/GridTableVers2.js';
        script.async = true;
        script.defer = true;
        document.body.appendChild(script);
        let script1 = document.createElement('script');
        script1.src = 'main/js/defindMultiSelect.js';
        script1.async = true;
        script1.defer = true;
        document.body.appendChild(script1);
        let script2 = document.createElement('script');
        script2.src = 'main/js/uploadfile/custom.js';
        script2.async = true;
        script2.defer = true;
        document.body.appendChild(script2);
        let script3 = document.createElement('script');
        script3.src = 'main/js/CoCauToChuc.js';
        script3.async = true;
        script3.defer = true;
        document.body.appendChild(script3);
    }
    handleResizeColumn = () => {
        window.$(function () {
            var pressed = false;
            var start = undefined;
            var startX, startWidth;

            window.$("table thead tr th").mousedown(function (e) {
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
    formatDate(date) {
        var d = new Date(date),
            month = '' + (d.getMonth() + 1),
            day = '' + d.getDate(),
            year = d.getFullYear();

        if (month.length < 2)
            month = '0' + month;
        if (day.length < 2)
            day = '0' + day;

        return [day, month, year].join('-');
    }
    defindMultiSelect = () => {
        window.$(document).ready(function () {
            window.$('#multiSelectShowColumn1').multiselect({
                buttonWidth: '160px',
                //   includeSelectAllOption : true,
                nonSelectedText: 'Chọn cột muốn ẩn',
                allSelectedText: 'Ẩn tất cả các cột'
            });
        });
        window.$(document).ready(function () {
            window.$('#multiSelectStatus').multiselect({
                buttonWidth: '160px',
                //   includeSelectAllOption : true,
                nonSelectedText: 'Chọn trạng thái',
                allSelectedText: 'Tất cả trạng thái'
            });
        });
        window.$(document).ready(function () {
            window.$('#multiSelectPriority').multiselect({
                buttonWidth: '160px',
                //   includeSelectAllOption : true,
                nonSelectedText: 'Chọn độ ưu tiên',
                allSelectedText: 'Tất cả độ ưu tiên'
            });
        });
        window.$(document).ready(function () {
            window.$('#multiSelectCharacteristic').multiselect({
                buttonWidth: '160px',
                //   includeSelectAllOption : true,
                nonSelectedText: 'Chọn đặc tính',
                allSelectedText: 'Tất cả đặc tính'
            });
        });
    }
    list_to_tree = (list) => {
        var map = {}, node, roots = [], i, newarr = [];
        for (i = 0; i < list.length; i += 1) {
            map[list[i]._id] = i; // initialize the map
            list[i].children = []; // initialize the children
        }
        // console.log(map);
        for (i = 0; i < list.length; i += 1) {
            node = list[i];
            if (node.parent !== null) {
                // if you have dangling branches check that map[node.parentId] exists
                list[map[node.parent]].children.push(node);
            } else {
                roots.push(node);
            }
        }
        let change = (arr) => {
            arr.map(item => {
                newarr.push(item);
                change(item.children);
                return true;
            });
            return newarr;
        }
        let flat = change(roots).map(x => delete x.children && x);
        console.log(flat);
        return flat;
    }
    handleCheckClick = (event) => {
        if (event.stopPropagation) {
            event.stopPropagation();
        }
        event.catteryBubble = true;
        return true;
    }
    handleDisableOnClickFisrtLast = () => {
        window.$('#taskTable').on('click', 'td:first-child, td:last-child', function (e) {
            e.stopPropagation();
        });
    }
    handleSetting = async () => {
        console.log("àdgfhgfhfg");
        // Cập nhật cột muốn ấn
        var test = window.$("#multiSelectShowColumn1").val();
        window.$("td").show();
        window.$("th").show();
        for (var j = 0, len = test.length; j < len; j++) {
            window.$('td:nth-child(' + test[j] + ')').hide();
            window.$('th:nth-child(' + test[j] + ')').hide();
        }
        // Cập nhật số dòng trang trên một trang hiển thị
        await this.setState(state => {
            return {
                ...state,
                perPage: this.perPage.value
            }
        })
        // Đóng cửa sổ cài đặt
        var element = document.getElementById("setting-table");
        element.classList.remove("in");
        element.setAttribute("aria-expanded", "false");
    }
    handleExtendProperties = async () => {
        await this.defindMultiSelect();
        await this.setState(state => {
            return {
                ...state,
                extendProperties: !state.extendProperties
            }
        })
    }
    handleCountTime = async (id) => {
        const { startTimer } = this.state;
        if (startTimer) {
            Swal.fire({
                title: "Thời gian đã làm: 120'",
                type: 'success',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Lưu'
            }).then((res) => {
                console.log("okokokok");
            });
        }
        await this.setState(state => {
            return {
                ...state,
                startTimer: !state.startTimer,
                currentTimer: id
            }
        })
    }
    render() {
        var taskCreators, taskResponsibles, taskAccounatables, taskConsulteds, taskInformeds, units;
        const { tasks, departments } = this.props;
        const { extendProperties, startTimer, currentTimer } = this.state;
        if (tasks.taskCreators) taskCreators = tasks.taskCreators;
        if (tasks.taskResponsibles) taskResponsibles = tasks.taskResponsibles;
        if (tasks.taskAccounatables) taskAccounatables = tasks.taskAccounatables;
        if (tasks.taskConsulteds) taskConsulteds = tasks.taskConsulteds;
        if (tasks.taskInformeds) taskInformeds = tasks.taskInformeds;
        if (departments.unitofuser) units = departments.unitofuser;
        return (
            <div className="content-wrapper">
                <section className="content-header">
                    <h1>
                        Danh sách công việc
                    </h1>
                    <ol className="breadcrumb">
                        <li><a href="/"><i className="fa fa-dashboard" /> Trang chủ</a></li>
                        <li><a href="/task-management">Quản lý công việc</a></li>
                    </ol>
                </section>
                <section className="content">
                    <div className="nav-tabs-custom">
                        <ul className="nav nav-tabs">
                            <li className="active"><a href="#responsible" data-toggle="tab">Thực hiện chính</a></li>
                            <li><a href="#accountable" data-toggle="tab">Phê duyệt</a></li>
                            <li><a href="#consulted " data-toggle="tab">Hỗ trợ thực hiện</a></li>
                            <li><a href="#creator" data-toggle="tab">Thiết lập</a></li>
                            <li><a href="#informed" data-toggle="tab">Quan sát</a></li>
                        </ul>
                        <div className="tab-content">
                            <div className="active tab-pane" id="responsible">
                                <div className="col-xs-7">
                                    <div className="col-xs-6 item-container">
                                        <label>Đơn vị:</label>
                                        {units &&
                                            <select id="multiSelectUnit1" multiple="multiple" defaultValue={units.map(item => item._id)}>
                                                {units.map(item => {
                                                    return <option key={item._id} value={item._id}>{item.name}</option>
                                                })}
                                            </select>
                                        }
                                    </div>
                                    <div className="col-xs-6 item-container">
                                        <label style={{ width: "48%" }}>Tên công việc:</label>
                                        <input className="form-control" type="text" placeholder="Tìm kiếm theo tên" />
                                    </div>
                                    <div className="col-xs-6 item-container">
                                        <label>Trạng thái:</label>
                                        <select id="multiSelectStatus" style={{ marginLeft: "0" }} multiple="multiple" defaultValue={["Đang chờ", "Đang thực hiện", "Quá hạn", "Đã hoàn thành", "Đã hủy", "Tạm dừng"]}>
                                            <option value="Đang chờ">Đang chờ</option>
                                            <option value="Đang thực hiện">Đang thực hiện</option>
                                            <option value="Quá hạn">Quá hạn</option>
                                            <option value="Đã hoàn thành">Đã hoàn thành</option>
                                            <option value="Đã hủy">Đã hủy</option>
                                            <option value="Tạm dừng">Tạm dừng</option>
                                        </select>
                                    </div>
                                    {extendProperties &&
                                        <React.Fragment>
                                            <div className="col-xs-6 item-container">
                                                <label style={{ marginRight: "9%" }}>Độ ưu tiên:</label>
                                                <select id="multiSelectPriority" style={{ marginLeft: "0" }} multiple="multiple" defaultValue={["Đang chờ", "Đang thực hiện", "Quá hạn", "Đã hoàn thành", "Đã hủy", "Tạm dừng"]}>
                                                    <option value="Cao">Cao</option>
                                                    <option value="Trung bình">Trung bình</option>
                                                    <option value="Thấp">Thấp</option>
                                                </select>
                                            </div>
                                            <div className="col-xs-6 item-container">
                                                <label>Đặc tính:</label>
                                                <select id="multiSelectCharacteristic" style={{ marginLeft: "0" }} multiple="multiple" defaultValue={["Đang chờ", "Đang thực hiện", "Quá hạn", "Đã hoàn thành", "Đã hủy", "Tạm dừng"]}>
                                                    <option value="1">Lưu trong kho</option>
                                                    <option value="2">Tháng hiện tại</option>
                                                </select>
                                            </div>
                                        </React.Fragment>}
                                    <div className="col-xs-6 item-container">
                                        <button type="button" className="btn btn-success" onClick={this.handleUpdateData} style={{ width: "135%" }}>Tìm kiếm</button>
                                    </div>

                                    <div className="col-xs-8 col-xs-offset-2">
                                        <button className="btn btn-default" style={{ background: "none", border: "none", marginTop: "-5%" }} onClick={this.handleExtendProperties}><i className="fa fa-chevron-circle-down"></i>{extendProperties ? "Rút gọn" : "Mở rộng"}</button>
                                    </div>
                                </div>
                                <div className="col-xs-3" style={{ marginTop: "4.5%", marginLeft: "13%" }}>
                                    <button type="button" className="btn btn-success" data-toggle="modal" data-target="#addNewTask" data-backdrop="static" data-keyboard="false" style={{ width: "100%" }}>Thêm công việc</button>
                                    <ModalAddTask id="" />
                                </div>
                                <div className="setting-table">
                                    <button type="button" data-toggle="collapse" data-target="#setting-table" className="btn btn-default" style={{ marginTop: "4.5%", marginLeft: "-1%" }}><i className="fa fa-gears"></i></button>
                                </div>
                                <div id="setting-table" className="row collapse" style={{ right: "30px", width: "23%" }}>
                                    <fieldset className="scheduler-border">
                                        <legend className="scheduler-border">Bảng cấu hình</legend>
                                        <div className="col-xs-12">
                                            <label style={{ marginRight: "15px" }}>Ẩn cột:</label>
                                            <select id="multiSelectShowColumn1" multiple="multiple">
                                                <option value="1">Tên công việc</option>
                                                <option value="2">Đơn vị</option>
                                                <option value="3">Độ ưu tiên</option>
                                                <option value="4">Thời gian bắt đầu</option>
                                                <option value="5">Thời gian kết thúc</option>
                                                <option value="6">Trạng thái</option>
                                                <option value="7">Tiến độ</option>
                                                <option value="8">Thời gian</option>
                                                <option value="9">Hành động</option>
                                            </select>
                                        </div>
                                        <div className="col-xs-12" style={{ marginTop: "10px" }}>
                                            <label style={{ marginRight: "15px" }}>Số dòng/trang:</label>
                                            <input className="form-control" type="text" defaultValue={10} ref={input => this.perPage = input} />
                                        </div>
                                        <div className="col-xs-2 col-xs-offset-6 update" >
                                            <button type="button" className="btn btn-success" onClick={this.handleSetting}>Cập nhật</button>
                                        </div>
                                    </fieldset>
                                </div>

                                <table id="tree-table" className="table table-hover table-bordered">
                                    <thead>
                                        <tr id="task">
                                            <th style={{ width: "15%" }} title="Tên công việc">Tên công việc</th>
                                            <th style={{ width: "16%" }} title="Đơn vị">Đơn vị</th>
                                            <th style={{ width: "8%" }} title="Độ ưu tiên">Độ ưu tiên</th>
                                            <th style={{ width: "8%" }} title="Ngày bắt đầu">Bắt đầu</th>
                                            <th style={{ width: "8%" }} title="Ngày kết thúc">Kết thúc</th>
                                            <th style={{ width: "8%" }} title="Trạng thái">Trạng thái</th>
                                            <th style={{ width: "6%" }} title="Tiến độ">Tiến độ</th>
                                            <th style={{ width: "7%" }} title="Thời gian thực hiện">Thời gian</th>
                                            <th style={{ width: "9%" }}><center>Hành động</center></th>
                                        </tr>
                                    </thead>
                                    <tbody id="taskTable">
                                        {
                                            (typeof taskResponsibles !== 'undefined' && taskResponsibles.length !== 0) ?
                                                this.list_to_tree(taskResponsibles).map(item =>
                                                    <tr key={item._id} data-id={item._id} data-parent={item.parent} data-level={item.level}>
                                                        <td title={item.name} data-column="name">{item.name}</td>
                                                        <td title={item.unit.name}>{item.unit.name}</td>
                                                        <td title={item.priority}>{item.priority}</td>
                                                        <td title={this.formatDate(item.startdate)}>{this.formatDate(item.startdate)}</td>
                                                        <td title={this.formatDate(item.enddate)}>{this.formatDate(item.enddate)}</td>
                                                        <td title={item.status}>{item.status}</td>
                                                        <td title="0%">0%</td>
                                                        <td title="0">0</td>
                                                        <td >
                                                            <a href={`#modelPerformTask${item._id}`} data-toggle="modal" title="Bắt đầu thực hiện"><i className="material-icons">play_arrow</i></a>
                                                            <ModalPerformTask id={item._id} />
                                                            <a href="#abc" className={startTimer && currentTimer === item._id ? "edit" : "timer"} id="task-timer" title="Bắt đầu bấm giờ" onClick={() => this.handleCountTime(item._id)}><i className="material-icons">timer</i></a>
                                                            <button type="button" data-toggle="collapse" data-target={`#actionTask${item._id}`} style={{ border: "none", background: "none" }}><i className="fa fa-ellipsis-v"></i></button>
                                                            <div id={`actionTask${item._id}`} className="collapse action-template">
                                                                <a href={`#addNewTask${item._id}`} onClick={this.handleCheckClick} data-toggle="modal" className="add_circle" title="Thêm công việc con cho công việc này"><i className="material-icons">add_circle</i></a>
                                                                <a href="#abc" className="all_inbox" title="Lưu công việc này vào kho"><i className="material-icons">all_inbox</i></a>
                                                                <a href="#abc" className="delete" onClick={() => this.handleAction(item._id)} title="Xóa mẫu công việc này"><i className="material-icons"></i></a>
                                                            </div>
                                                            <ModalAddTask id={item._id} />
                                                        </td>
                                                    </tr>
                                                ) : null
                                        }
                                    </tbody>
                                </table>
                            </div>
                            <div className="tab-pane" id="accountable">
                                {/* Post */}
                                <div className="post">
                                    <div className="user-block">
                                        <img className="img-circle img-bordered-sm" src="adminLTE/dist/img/user1-128x128.jpg" alt="user avatar" />
                                        <span className="username">
                                            <a href="#abc">Jonathan Burke Jr.</a>
                                            <a href="#abc" className="pull-right btn-box-tool"><i className="fa fa-times" /></a>
                                        </span>
                                        <span className="description">Shared publicly - 7:30 PM today</span>
                                    </div>
                                    {/* /.user-block */}
                                    <p>
                                        Lorem ipsum represents a long-held tradition for designers,
                                        typographers and the like. Some people hate it and argue for
                                        its demise, but others ignore the hate as they create awesome
                                        tools to help create filler text for everyone from bacon lovers
                                        to Charlie Sheen fans.
        </p>
                                    <ul className="list-inline">
                                        <li><a href="#abc" className="link-black text-sm"><i className="fa fa-share margin-r-5" /> Share</a></li>
                                        <li><a href="#abc" className="link-black text-sm"><i className="fa fa-thumbs-o-up margin-r-5" /> Like</a>
                                        </li>
                                        <li className="pull-right">
                                            <a href="#abc" className="link-black text-sm"><i className="fa fa-comments-o margin-r-5" /> Comments
              (5)</a></li>
                                    </ul>
                                    <input className="form-control input-sm" type="text" placeholder="Type a comment" />
                                </div>
                                {/* /.post */}
                                {/* Post */}
                                <div className="post clearfix">
                                    <div className="user-block">
                                        <img className="img-circle img-bordered-sm" src="adminLTE/dist/img/user7-128x128.jpg" alt="user avatar" />
                                        <span className="username">
                                            <a href="#abc">Sarah Ross</a>
                                            <a href="#abc" className="pull-right btn-box-tool"><i className="fa fa-times" /></a>
                                        </span>
                                        <span className="description">Sent you a message - 3 days ago</span>
                                    </div>
                                    {/* /.user-block */}
                                    <p>
                                        Lorem ipsum represents a long-held tradition for designers,
                                        typographers and the like. Some people hate it and argue for
                                        its demise, but others ignore the hate as they create awesome
                                        tools to help create filler text for everyone from bacon lovers
                                        to Charlie Sheen fans.
        </p>
                                    <form className="form-horizontal">
                                        <div className="form-group margin-bottom-none">
                                            <div className="col-sm-9">
                                                <input className="form-control input-sm" placeholder="Response" />
                                            </div>
                                            <div className="col-sm-3">
                                                <button type="submit" className="btn btn-danger pull-right btn-block btn-sm">Send</button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                                {/* /.post */}
                                {/* Post */}
                                <div className="post">
                                    <div className="user-block">
                                        <img className="img-circle img-bordered-sm" src="adminLTE/dist/img/user6-128x128.jpg" alt="user avatar" />
                                        <span className="username">
                                            <a href="#abc">Adam Jones</a>
                                            <a href="#abc" className="pull-right btn-box-tool"><i className="fa fa-times" /></a>
                                        </span>
                                        <span className="description">Posted 5 photos - 5 days ago</span>
                                    </div>
                                    {/* /.user-block */}
                                    <div className="row margin-bottom">
                                        <div className="col-sm-6">
                                            <img className="img-responsive" src="adminLTE/dist/img/photo1.png" alt="hình ảnh" />
                                        </div>
                                        {/* /.col */}
                                        <div className="col-sm-6">
                                            <div className="row">
                                                <div className="col-sm-6">
                                                    <img className="img-responsive" src="adminLTE/dist/img/photo2.png" alt="hình ảnh" />
                                                    <br />
                                                    <img className="img-responsive" src="adminLTE/dist/img/photo3.jpg" alt="hình ảnh" />
                                                </div>
                                                {/* /.col */}
                                                <div className="col-sm-6">
                                                    <img className="img-responsive" src="adminLTE/dist/img/photo4.jpg" alt="hình ảnh" />
                                                    <br />
                                                    <img className="img-responsive" src="adminLTE/dist/img/photo1.png" alt="hình ảnh" />
                                                </div>
                                                {/* /.col */}
                                            </div>
                                            {/* /.row */}
                                        </div>
                                        {/* /.col */}
                                    </div>
                                    {/* /.row */}
                                    <ul className="list-inline">
                                        <li><a href="#abc" className="link-black text-sm"><i className="fa fa-share margin-r-5" /> Share</a></li>
                                        <li><a href="#abc" className="link-black text-sm"><i className="fa fa-thumbs-o-up margin-r-5" /> Like</a>
                                        </li>
                                        <li className="pull-right">
                                            <a href="#abc" className="link-black text-sm"><i className="fa fa-comments-o margin-r-5" /> Comments
              (5)</a></li>
                                    </ul>
                                    <input className="form-control input-sm" type="text" placeholder="Type a comment" />
                                </div>
                                {/* /.post */}
                            </div>
                            <div className="tab-pane" id="consulted">
                                <ul className="timeline timeline-inverse">
                                    <li className="time-label">
                                        <span className="bg-red">
                                            10 Feb. 2014
                                        </span>
                                    </li>
                                    <li>
                                        <i className="fa fa-envelope bg-blue" />
                                        <div className="timeline-item">
                                            <span className="time"><i className="fa fa-clock-o" /> 12:05</span>
                                            <h3 className="timeline-header"><a href="#abc">Support Team</a> sent you an email</h3>
                                            <div className="timeline-body">
                                                Etsy doostang zoodles disqus groupon greplin oooj voxy zoodles,
                                                weebly ning heekya handango imeem plugg dopplr jibjab, movity
                                                jajah plickers sifteo edmodo ifttt zimbra. Babblely odeo kaboodle
                                                quora plaxo ideeli hulu weebly balihoo...
            </div>
                                            <div className="timeline-footer">
                                                <a href="#abc" className="btn btn-primary btn-xs">Read more</a>
                                                <a href="#abc" className="btn btn-danger btn-xs">Delete</a>
                                            </div>
                                        </div>
                                    </li>
                                    {/* END timeline item */}
                                    {/* timeline item */}
                                    <li>
                                        <i className="fa fa-user bg-aqua" />
                                        <div className="timeline-item">
                                            <span className="time"><i className="fa fa-clock-o" /> 5 mins ago</span>
                                            <h3 className="timeline-header no-border"><a href="#abc">Sarah Young</a> accepted your friend request
            </h3>
                                        </div>
                                    </li>
                                    {/* END timeline item */}
                                    {/* timeline item */}
                                    <li>
                                        <i className="fa fa-comments bg-yellow" />
                                        <div className="timeline-item">
                                            <span className="time"><i className="fa fa-clock-o" /> 27 mins ago</span>
                                            <h3 className="timeline-header"><a href="#abc">Jay White</a> commented on your post</h3>
                                            <div className="timeline-body">
                                                Take me to your leader!
                                                Switzerland is small and neutral!
                                                We are more like Germany, ambitious and misunderstood!
            </div>
                                            <div className="timeline-footer">
                                                <a href="#abc" className="btn btn-warning btn-flat btn-xs">View comment</a>
                                            </div>
                                        </div>
                                    </li>
                                    {/* END timeline item */}
                                    {/* timeline time label */}
                                    <li className="time-label">
                                        <span className="bg-green">
                                            3 Jan. 2014
          </span>
                                    </li>
                                    {/* /.timeline-label */}
                                    {/* timeline item */}
                                    <li>
                                        <i className="fa fa-camera bg-purple" />
                                        <div className="timeline-item">
                                            <span className="time"><i className="fa fa-clock-o" /> 2 days ago</span>
                                            <h3 className="timeline-header"><a href="#abc">Mina Lee</a> uploaded new photos</h3>
                                            <div className="timeline-body">
                                                <img src="http://placehold.it/150x100" alt="..." className="margin" />
                                                <img src="http://placehold.it/150x100" alt="..." className="margin" />
                                                <img src="http://placehold.it/150x100" alt="..." className="margin" />
                                                <img src="http://placehold.it/150x100" alt="..." className="margin" />
                                            </div>
                                        </div>
                                    </li>
                                    {/* END timeline item */}
                                    <li>
                                        <i className="fa fa-clock-o bg-gray" />
                                    </li>
                                </ul>
                            </div>
                            <div className="tab-pane" id="creator">
                                <form className="form-horizontal">
                                    <div className="form-group">
                                        <label htmlFor="inputName" className="col-sm-2 control-label">Name</label>
                                        <div className="col-sm-10">
                                            <input type="email" className="form-control" id="inputName" placeholder="Name" />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="inputEmail" className="col-sm-2 control-label">Email</label>
                                        <div className="col-sm-10">
                                            <input type="email" className="form-control" id="inputEmail" placeholder="Email" />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="inputName" className="col-sm-2 control-label">Name</label>
                                        <div className="col-sm-10">
                                            <input type="text" className="form-control" id="inputName" placeholder="Name" />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="inputExperience" className="col-sm-2 control-label">Experience</label>
                                        <div className="col-sm-10">
                                            <textarea className="form-control" id="inputExperience" placeholder="Experience" defaultValue={""} />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="inputSkills" className="col-sm-2 control-label">Skills</label>
                                        <div className="col-sm-10">
                                            <input type="text" className="form-control" id="inputSkills" placeholder="Skills" />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <div className="col-sm-offset-2 col-sm-10">
                                            <div className="checkbox">
                                                <label>
                                                    <input type="checkbox" /> I agree to the <a href="#abc">terms and conditions</a>
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <div className="col-sm-offset-2 col-sm-10">
                                            <button type="submit" className="btn btn-danger">Submit</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <div className="tab-pane" id="informed">
                                <form className="form-horizontal">
                                    <div className="form-group">
                                        <label htmlFor="inputName" className="col-sm-2 control-label">Name</label>
                                        <div className="col-sm-10">
                                            <input type="email" className="form-control" id="inputName" placeholder="Name" />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="inputEmail" className="col-sm-2 control-label">Email</label>
                                        <div className="col-sm-10">
                                            <input type="email" className="form-control" id="inputEmail" placeholder="Email" />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="inputName" className="col-sm-2 control-label">Name</label>
                                        <div className="col-sm-10">
                                            <input type="text" className="form-control" id="inputName" placeholder="Name" />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="inputExperience" className="col-sm-2 control-label">Experience</label>
                                        <div className="col-sm-10">
                                            <textarea className="form-control" id="inputExperience" placeholder="Experience" defaultValue={""} />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="inputSkills" className="col-sm-2 control-label">Skills</label>
                                        <div className="col-sm-10">
                                            <input type="text" className="form-control" id="inputSkills" placeholder="Skills" />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <div className="col-sm-offset-2 col-sm-10">
                                            <div className="checkbox">
                                                <label>
                                                    <input type="checkbox" /> I agree to the <a href="#abc">terms and conditions</a>
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <div className="col-sm-offset-2 col-sm-10">
                                            <button type="submit" className="btn btn-danger">Submit</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

function mapState(state) {
    const { tasks, departments } = state;
    return { tasks, departments };
}

const actionCreators = {
    getTaskByUser: taskManagementActions.getAllTaskByUser,
    getDepartment: departmentActions.getDepartmentOfUser
};
const connectedTaskManagement = connect(mapState, actionCreators)(TaskManagement);
export { connectedTaskManagement as TaskManagement };