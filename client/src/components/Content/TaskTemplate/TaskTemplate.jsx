import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ModalAddTaskTemplate } from './ModalAddTaskTemplate';
import { taskTemplateActions, departmentActions } from '../../../redux-actions/CombineActions';
import { ModalViewTaskTemplate } from './ModalViewTaskTemplate';
import { ModalEditTaskTemplate } from './ModalEditTaskTemplate';

class TaskTemplate extends Component {
    componentDidMount() {
        this.props.getDepartment(localStorage.getItem('id'));
        this.props.getTaskTemplateByUser(localStorage.getItem('id'), 1, "[]");
        //get department of current user
        this.loadJSMultiSelect();
        let script = document.createElement('script');
        script.src = 'main/js/defindMultiSelect.js';
        script.async = true;
        script.defer = true;
        document.body.appendChild(script);
        this.handleResizeColumn();
        // this.handleHideColumn();
    }
    constructor(props) {
        super(props);
        this.state = {
            status: 'start',
            currentPage: 1,
            perPage: 15,
            unit: []
        };
        this.handleUpdateData = this.handleUpdateData.bind(this);
    }

    handleSetting = async () => {
        console.log("àdgfhgfhfg");
        // Cập nhật cột muốn ấn
        var test = window.$("#multiSelectShowColumn").val();
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
        element.setAttribute("aria-expanded","false");
    }


    loadJSMultiSelect = () => {
        window.$(document).ready(function () {
            window.$('#multiSelectShowColumn').multiselect({
                buttonWidth: '160px',
                //   includeSelectAllOption : true,
                nonSelectedText: 'Chọn cột muốn ẩn'
            });
        });
    }
    // getSelectedValues = () => {
    //     var selectedVal = window.$("#multiSelectUnit").val();
    //     for (var i = 0; i < selectedVal.length; i++) {
    //         //abc
    //     }
    //     console.log(selectedVal);
    // }
    //

    // pressed: Nhập dữ liệu
    // started
    // startX
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
    myFunction = () => {
        var input, filter, table, tr, td, i, txtValue;
        input = document.getElementById("myInput");
        filter = input.value.toLowerCase();
        table = document.getElementById("myTable");
        tr = table.getElementsByTagName("tr");
        for (i = 0; i < tr.length; i++) {
            td = tr[i].getElementsByTagName("td")[0];
            if (td) {
                txtValue = td.textContent || td.innerText;
                if (txtValue.toLowerCase().indexOf(filter) > -1) {
                    tr[i].style.display = "";
                } else {
                    tr[i].style.display = "none";
                }
            }
        }
    }

    updateCurrentPage = (number) => {
        this.setState(state => {
            return {
                ...state,
                currentPage: number
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
        var test = window.$("#multiSelectUnit").val();
        console.log(test);
        this.props.getTaskTemplateByUser(localStorage.getItem('id'), 1, test);
        this.setState(state => {
            return {
                ...state,
                currentPage: 1
            }
        })
    }
    render() {
        var list, pageTotal, units;
        const { tasktemplates, departments } = this.props;
        const { currentPage } = this.state;
        if (tasktemplates.items) list = tasktemplates.items;
        if (tasktemplates.pageTotal) pageTotal = tasktemplates.pageTotal;
        if (departments.unitofuser) units = departments.unitofuser;
        const items = [];
        if (pageTotal > 5) {
            if (currentPage < 3) {
                for (let i = 0; i < 5; i++) {
                    items.push(<li key={i + 1} className={currentPage === i + 1 ? "active" : ""}><a href="#abc" onClick={() => this.handleGetDataPagination(i + 1)}>{i + 1}</a></li>);
                }
                items.push(<li className="disable" key={pageTotal}><a href="#abc">...</a></li>);
            } else if (currentPage >= pageTotal - 3) {
                items.push(<li className="disable" key={0}><a href="#abc">...</a></li>);
                for (let i = pageTotal - 5; i < pageTotal; i++) {
                    items.push(<li key={i + 1} className={currentPage === i + 1 ? "active" : ""}><a href="#abc" onClick={() => this.handleGetDataPagination(i + 1)}>{i + 1}</a></li>);
                }
            } else {
                items.push(<li className="disable" key={0}><a href="#abc">...</a></li>);
                for (let i = currentPage - 2; i < currentPage + 3; i++) {
                    items.push(<li key={i + 1} className={currentPage === i + 1 ? "active" : ""}><a href="#abc" onClick={() => this.handleGetDataPagination(i + 1)}>{i + 1}</a></li>);
                }
                items.push(<li className="disable" key={pageTotal + 1}><a href="#abc">...</a></li>);
            }
        } else {
            for (let i = 0; i < pageTotal; i++) {
                items.push(<li key={i + 1} className={currentPage === i + 1 ? "active" : ""}><a href="#abc" onClick={() => this.handleGetDataPagination(i + 1)}>{i + 1}</a></li>);
            }
        }
        return (
            <div className="content-wrapper">
                <section className="content-header">
                    <h1>
                        Quản lý mẫu công việc
                    </h1>
                    <ol className="breadcrumb">
                        <li><a href="#abc"><i className="fa fa-dashboard" /> Home</a></li>
                        <li><a href="#abc">TaskTemplate</a></li>
                        <li className="active">Data tables</li>
                    </ol>
                </section>
                {/* Main content */}
                <section className="content">
                    <div className="row">
                        <div className="col-xs-12">
                            <div className="box">
                                <div className="box-header">
                                    <div className="row">
                                        <div className="col-xs-10">
                                            <h3 className="box-title">Bảng danh sách mẫu công việc</h3>
                                        </div>
                                    </div>
                                </div>
                                {/* /.box-header */}
                                <div className="box-body">
                                    <div className="row">
                                        <div className="col-xs-3 item-container">
                                            <label>Tên mẫu:</label>
                                            <input className="form-control" type="text" placeholder="Tìm kiếm theo tên" />
                                        </div>
                                        <div className="col-xs-3  item-container">
                                            <label style={{ marginLeft: "-5%", marginRight: "-6%" }}>Đơn vị:</label>
                                            {units &&
                                                <select id="multiSelectUnit" multiple="multiple" defaultValue={units.map(item => item._id)}>
                                                    {units.map(item => {
                                                        return <option key={item._id} value={item._id}>{item.name}</option>
                                                    })}
                                                </select>
                                            }
                                        </div>
                                        <div className="col-xs-2" style={{ marginLeft: "-5%" }}>
                                            <button type="button" className="btn btn-success" onClick={this.handleUpdateData}>Tìm kiếm</button>
                                        </div>
                                        <div className="col-xs-2 col-xs-offset-2">
                                            {/* {
                                                this.getPermision().createForm && */}
                                            <button type="button" className="btn btn-success" data-toggle="modal" data-target="#addTaskTemplate" data-backdrop="static" data-keyboard="false">Thêm 1 mẫu công việc</button>
                                            {/* } */}
                                            <ModalAddTaskTemplate />
                                        </div>
                                        <div className="setting-table">
                                            <button type="button" data-toggle="collapse" data-target="#setting-table" className="btn btn-default"><i className="fa fa-gears"></i></button>
                                        </div>
                                        <div id="setting-table" className="row collapse">
                                            <fieldset className="scheduler-border">
                                                <legend className="scheduler-border">Bảng cấu hình</legend>
                                                <div className="col-xs-12">
                                                    <label style={{ marginRight: "15px" }}>Ẩn cột:</label>
                                                    <select id="multiSelectShowColumn" multiple="multiple">
                                                        <option value="1">Tên mẫu</option>
                                                        <option value="2">Mô tả</option>
                                                        <option value="3">Số lần sử dụng</option>
                                                        <option value="4">Người tạo</option>
                                                        <option value="5">Đơn vị</option>
                                                        <option value="6">Hoạt động</option>
                                                    </select>
                                                </div>
                                                <div className="col-xs-12" style={{ marginTop: "10px" }}>
                                                    <label style={{ marginRight: "15px" }}>Số dòng/trang:</label>
                                                    <input className="form-control" type="text" defaultValue={20} ref={input => this.perPage = input} />
                                                </div>
                                                <div className="col-xs-2 col-xs-offset-6 update" >
                                                    <button type="button" className="btn btn-success" onClick={this.handleSetting}>Cập nhật</button>
                                                </div>
                                            </fieldset>
                                        </div>
                                    </div>
                                    <table className="table table-bordered table-striped" id="myTable">
                                        <thead>
                                            <tr>
                                                <th>Tên mẫu công việc</th>
                                                <th>Mô tả</th>
                                                <th>Số lần sử dụng</th>
                                                <th>Người tạo mẫu</th>
                                                <th>Đơn vị</th>
                                                <th style={{ width: "120px" }}>Hoạt động</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                (typeof list !== 'undefined' && list.length !== 0) ?
                                                    list.map(item =>
                                                        item.resource && <tr key={item.resource._id}>
                                                            <td>{item.resource.name}</td>
                                                            <td>{item.resource.description}</td>
                                                            <td>{item.resource.count}</td>
                                                            <td>{item.resource.creator.name}</td>
                                                            <td>{item.resource.unit.name}</td>
                                                            <td>
                                                                <a href={`#viewTaskTemplate${item.resource._id}`} data-toggle="modal" className="view" title="Xem chi tiết mẫu công việc này"><i className="material-icons">view_list</i></a>
                                                                <ModalViewTaskTemplate id={item.resource._id} />
                                                                <a href={`#editTaskTemplate${item.resource._id}`} data-toggle="modal" className="edit" title="Sửa mẫu công việc này"><i className="material-icons"></i></a>
                                                                <ModalEditTaskTemplate id={item.resource._id} />
                                                                <a href="#abc" className="delete" title="Xóa mẫu công việc này"><i className="material-icons"></i></a>
                                                            </td>
                                                        </tr>
                                                    ) : <tr><td colSpan={6}><center>Không có dữ liệu</center></td></tr>
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
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div >
        );
    }
}

function mapState(state) {
    const { tasktemplates, departments } = state;
    return { tasktemplates, departments };
}

const actionCreators = {
    getTaskTemplateByUser: taskTemplateActions.getAllTaskTemplateByUser,
    getDepartment: departmentActions.getDepartmentOfUser
};
const connectedTaskTemplate = connect(mapState, actionCreators)(TaskTemplate);
export { connectedTaskTemplate as TaskTemplate };