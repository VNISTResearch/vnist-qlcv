import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ModalPerformTask } from './ModalPerformTask';
import { ModalAddTask } from './ModalAddTask';
import { taskManagementActions, departmentActions } from '../../../redux-actions/CombineActions';
import Swal from 'sweetalert2';
class TabTaskContent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            perPage: 10,
            extendProperties: false,
            startTimer: false,
            currentTimer: "",
            currentPage: 1,
            showModal: ""
        };
        // this.loadJS();
    }
    componentDidMount() {
        this.props.getDepartment(localStorage.getItem('id'));
        this.props.getResponsibleTaskByUser(localStorage.getItem('id'), "[]", 1, 10, "[]", "[]", "[]", null);
        this.defindMultiSelect();
        this.loadJS();
        this.handleResizeColumn();
    }
    componentWillUpdate() {
        let script = document.createElement('script');
        script.src = 'main/js/GridTableVers1.js';
        script.async = true;
        script.defer = true;
        document.body.appendChild(script);
    }
    loadJS = () => {
        let script1 = document.createElement('script');
        script1.src = 'main/js/defindMultiSelect.js';
        script1.async = true;
        script1.defer = true;
        document.body.appendChild(script1);
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
                list[map[node.parent._id]].children.push(node);
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
    handleGetDataPagination = async (index) => {
        var test = window.$("#multiSelectUnit").val();
        var oldCurrentPage = this.state.currentPage;
        await this.updateCurrentPage(index);
        if (oldCurrentPage !== index) this.props.getTaskTemplateByUser(localStorage.getItem('id'), index, test);
    }
    nextPage = async (pageTotal) => {
        var test = window.$("#multiSelectUnit").val();
        var oldCurrentPage = this.state.currentPage;
        await this.setState(state => {
            return {
                ...state,
                currentPage: state.currentPage === pageTotal ? pageTotal : state.currentPage + 1
            }
        })
        var newCurrentPage = this.state.currentPage;
        if (oldCurrentPage !== newCurrentPage) this.props.getTaskTemplateByUser(localStorage.getItem('id'), this.state.currentPage, test);
    }
    backPage = async () => {
        var test = window.$("#multiSelectUnit").val();
        var oldCurrentPage = this.state.currentPage;
        await this.setState(state => {
            return {
                ...state,
                currentPage: state.currentPage === 1 ? 1 : state.currentPage - 1
            }
        })
        var newCurrentPage = this.state.currentPage;
        if (oldCurrentPage !== newCurrentPage) this.props.getTaskTemplateByUser(localStorage.getItem('id'), this.state.currentPage, test);
    }
    handleUpdateData = () => {
        var unit = window.$("#multiSelectUnit1").val();
        var status = window.$("#multiSelectStatus").val();
        this.props.getResponsibleTaskByUser(localStorage.getItem('id'), unit, 1, 10, status, "[]", "[]", null);
        this.setState(state => {
            return {
                ...state,
                currentPage: 1
            }
        })
        // this.loadJS();
    }
    convertTime = (duration) => {
        // var milliseconds = parseInt((duration % 1000) / 100),
        var seconds = Math.floor((duration / 1000) % 60),
            minutes = Math.floor((duration / (1000 * 60)) % 60),
            hours = Math.floor((duration / (1000 * 60 * 60)) % 24);

        hours = (hours < 10) ? "0" + hours : hours;
        minutes = (minutes < 10) ? "0" + minutes : minutes;
        seconds = (seconds < 10) ? "0" + seconds : seconds;

        return hours + ":" + minutes + ":" + seconds;
    }
    handleShowModal = async (id) => {
        this.props.getTaskById(id);
        await this.setState(state => {
            return {
                ...state,
                showModal: id
            }
        })
        var element = document.getElementsByTagName("BODY")[0];
        element.classList.add("modal-open");
        var modal = document.getElementById(`modelPerformTask${id}`);
        modal.classList.add("in");
        modal.style = "display: block; padding-right: 17px;";
    }
    render() {
        var taskResponsibles, units, pageTotal;
        var pageTotalResponsibles;
        const { tasks, departments } = this.props;
        const { extendProperties, startTimer, currentTimer, currentPage } = this.state;
        if (tasks.taskResponsibles) {
            taskResponsibles = tasks.taskResponsibles;
            pageTotalResponsibles = tasks.pageTotalResponsibles
        }
        if (departments.unitofuser) units = departments.unitofuser;
        const items = [];
        if (pageTotalResponsibles > 5) {
            if (currentPage < 3) {
                for (let i = 0; i < 5; i++) {
                    items.push(<li key={i + 1} className={currentPage === i + 1 ? "active" : ""}><a href="#abc" onClick={() => this.handleGetDataPagination(i + 1)}>{i + 1}</a></li>);
                }
                items.push(<li className="disable" key={pageTotalResponsibles}><a href="#abc">...</a></li>);
            } else if (currentPage >= pageTotalResponsibles - 3) {
                items.push(<li className="disable" key={0}><a href="#abc">...</a></li>);
                for (let i = pageTotalResponsibles - 5; i < pageTotalResponsibles; i++) {
                    items.push(<li key={i + 1} className={currentPage === i + 1 ? "active" : ""}><a href="#abc" onClick={() => this.handleGetDataPagination(i + 1)}>{i + 1}</a></li>);
                }
            } else {
                items.push(<li className="disable" key={0}><a href="#abc">...</a></li>);
                for (let i = currentPage - 2; i < currentPage + 3; i++) {
                    items.push(<li key={i + 1} className={currentPage === i + 1 ? "active" : ""}><a href="#abc" onClick={() => this.handleGetDataPagination(i + 1)}>{i + 1}</a></li>);
                }
                items.push(<li className="disable" key={pageTotalResponsibles + 1}><a href="#abc">...</a></li>);
            }
        } else {
            for (let i = 0; i < pageTotalResponsibles; i++) {
                items.push(<li key={i + 1} className={currentPage === i + 1 ? "active" : ""}><a href="#abc" onClick={() => this.handleGetDataPagination(i + 1)}>{i + 1}</a></li>);
            }
        }
        return (
            <React.Fragment>
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
                        <select id="multiSelectStatus" style={{ marginLeft: "0" }} multiple="multiple" defaultValue={["Đang chờ", "Đang thực hiện"]}>
                            <option value="Đang chờ">Đang chờ</option>
                            <option value="Đang thực hiện">Đang thực hiện</option>
                            <option value="Quá hạn">Quá hạn</option>
                            <option value="Chờ phê duyệt">Chờ phê duyệt</option>
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
                    <div className="col-xs-3 item-container">
                        <button type="button" className="btn btn-success" onClick={this.handleUpdateData} style={{ width: "135%" }}>Tìm kiếm</button>
                    </div>
                    <div className="col-xs-3 item-container">
                        <button type="button" className="btn btn-primary" onClick={this.handleUpdateData} style={{ width: "135%" }}>Trở về mặc định</button>
                    </div>
                    <div className="col-xs-8" style={{ marginLeft: "-12px" }}>
                        <button className="btn btn-default" style={{ background: "none", border: "none", marginTop: "-5%" }} onClick={this.handleExtendProperties}>{extendProperties ? "Cơ bản " : "Nâng cao "}<i className="fa fa-angle-double-down"></i></button>
                    </div>
                </div>
                <div className="col-xs-2 col-xs-offset-3" style={{ marginTop: "4.5%" }}>
                    <button type="button" className="btn btn-success" data-toggle="modal" data-target="#addNewTask" data-backdrop="static" data-keyboard="false" style={{ width: "100%" }}>Thêm công việc</button>
                    <ModalAddTask id="" />
                </div>
                <table id="tree-table" className="table table-hover table-bordered">
                    <thead>
                        <tr id="task">
                            <th style={{ width: "9%" }} title="Tên công việc">Tên công việc</th>
                            <th style={{ width: "14%" }} title="Đơn vị">Đơn vị</th>
                            <th style={{ width: "7%" }} title="Độ ưu tiên">Độ ưu tiên</th>
                            <th style={{ width: "7%" }} title="Ngày bắt đầu">Bắt đầu</th>
                            <th style={{ width: "7%" }} title="Ngày kết thúc">Kết thúc</th>
                            <th style={{ width: "8%" }} title="Trạng thái">Trạng thái</th>
                            <th style={{ width: "6%" }} title="Tiến độ">Tiến độ</th>
                            <th style={{ width: "7%" }} title="Thời gian thực hiện">Thời gian</th>
                            <th style={{ width: "9%" }}>
                                Hành động
                                                <button type="button" data-toggle="collapse" data-target="#setting-table" style={{ border: "none", background: "none" }}><i className="fa fa-gear"></i></button>
                                <div id="setting-table" className="row collapse">
                                    <span className="pop-arw arwTop L-auto R10"></span>
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
                                    <div className="col-xs-2 col-xs-offset-6" style={{ marginTop: "10px" }}>
                                        <button type="button" className="btn btn-success" onClick={this.handleSetting}>Cập nhật</button>
                                    </div>
                                </div>
                            </th>
                        </tr>
                    </thead>
                    <tbody id="taskTable">
                        {
                            (typeof taskResponsibles !== 'undefined' && taskResponsibles.length !== 0) ?
                                this.list_to_tree(taskResponsibles).map(item =>
                                    <tr key={item._id} data-id={item._id} data-parent={item.parent === null ? item.parent : item.parent._id} data-level={item.level}>
                                        <td title={item.name} data-column="name">{item.name}</td>
                                        <td title={item.unit.name}>{item.unit.name}</td>
                                        <td title={item.priority}>{item.priority}</td>
                                        <td title={this.formatDate(item.startdate)}>{this.formatDate(item.startdate)}</td>
                                        <td title={this.formatDate(item.enddate)}>{this.formatDate(item.enddate)}</td>
                                        <td title={item.status}>{item.status}</td>
                                        <td title={item.progress + "%"}>{item.progress + "%"}</td>
                                        <td title={this.convertTime(item.time)}>{this.convertTime(item.time)}</td>
                                        <td >
                                            <a href={`#modelPerformTask${item._id}`} className="edit" data-toggle="modal" onClick={() => this.handleShowModal(item._id)} title={"Bắt đầu" + item.name}><i className="material-icons">edit</i></a>
                                            {this.state.showModal === item._id ? <ModalPerformTask id={item._id} /> : null}
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
                <div className="row pagination-new">
                    <ul className="pagination" style={{ margin: "auto" }}>
                        <li><a href="#abc" onClick={() => this.backPage()}>«</a></li>
                        {items}
                        <li><a href="#abc" onClick={() => this.nextPage(pageTotal)}>»</a></li>
                    </ul>
                </div>
            </React.Fragment>
        );
    }
}

function mapState(state) {
    const { tasks, departments } = state;
    return { tasks, departments };
}

const actionCreators = {
    getResponsibleTaskByUser: taskManagementActions.getResponsibleTaskByUser,
    getDepartment: departmentActions.getDepartmentOfUser,
    getTaskById: taskManagementActions.getTaskById
};
const connectedTabTaskContent = connect(mapState, actionCreators)(TabTaskContent);
export { connectedTabTaskContent as TabTaskContent };