import React, { Component } from 'react';
import { connect } from 'react-redux';
import { departmentActions } from '../../../redux-actions/CombineActions';
import { ModalViewReport } from './ModalViewReport';
import { ModalAddReport } from './ModalAddReport';

class ReportManagement extends Component {
    componentDidMount() {
        this.props.getDepartment(localStorage.getItem('id'));
        //get department of current user
        this.loadJSMultiSelect();
        let script = document.createElement('script');
        script.src = 'main/js/defindMultiSelect.js';
        script.async = true;
        script.defer = true;
        document.body.appendChild(script);
        this.handleResizeColumn();
    }
    constructor(props) {
        super(props);
        this.state = {
            currentPage: 1,
            perPage: 15,
            unit: [],
            currentRole: localStorage.getItem("currentRole"),
            showView: "",
            showEdit: "",
        };
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
    handleSetting = async () => {
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
    render() {
        var units;
        const { departments } = this.props;
        if (departments.unitofuser) {
            units = departments.unitofuser;
            // currentUnit = units.filter(item =>
            //     item.dean === localStorage.getItem("currentRole")
            //     || item.vice_dean === localStorage.getItem("currentRole")
            //     || item.employee === localStorage.getItem("currentRole"));
        }
        return (
            <div className="content-wrapper">
                <section className="content-header">
                    <h1>
                        Quản lý báo cáo công việc
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
                                {/* /.box-header */}
                                <div className="box-body">
                                    <div className="row">
                                        <div className="col-xs-12">
                                            <div className="col-xs-4 item-container">
                                                <label>Tên báo cáo:</label>
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
                                                <button type="button" className="btn btn-success" title="Tìm tiếm mẫu công việc" onClick={this.handleUpdateData}>Tìm kiếm</button>
                                            </div>
                                            <div className="col-xs-1" style={{ marginLeft: "20%" }}>
                                                <button type="button" className="btn btn-success" data-toggle="modal" title="Thêm mới một báo cáo" data-target="#addNewReport" data-backdrop="static" data-keyboard="false">Thêm mới</button>
                                                <ModalAddReport/>
                                            </div>
                                        </div>
                                        <div className="col-xs-12">
                                            <table className="table table-bordered table-striped" id="myTable">
                                                <thead>
                                                    <tr>
                                                        <th title="Tên báo cáo">Tên báo cáo</th>
                                                        <th title="Mô tả">Mô tả</th>
                                                        <th title="Số lượt xem" style={{width: "102px"}}>Số lượt xem</th>
                                                        <th title="Người tạo báo cáo" style={{width: "136px"}}>Người tạo</th>
                                                        <th title="Đơn vị" style={{width: "188px"}}>Đơn vị</th>
                                                        <th style={{ width: "121px" }}>
                                                            Hoạt động
                                                        <button type="button" data-toggle="collapse" data-target="#setting-table" style={{ border: "none", background: "none" }}><i className="fa fa-gear"></i></button>
                                                            <div id="setting-table" className="row collapse" style={{ width: "26%" }}>
                                                                <span className="pop-arw arwTop L-auto" style={{ right: "13px" }}></span>
                                                                <div className="col-xs-12">
                                                                    <label style={{ marginRight: "15px" }}>Ẩn cột:</label>
                                                                    <select id="multiSelectShowColumn" multiple="multiple">
                                                                        <option value="1">Tên báo cáo</option>
                                                                        <option value="2">Mô tả</option>
                                                                        <option value="3">Số lượt xem</option>
                                                                        <option value="4">Người tạo</option>
                                                                        <option value="5">Đơn vị</option>
                                                                        <option value="6">Hoạt động</option>
                                                                    </select>
                                                                </div>
                                                                <div className="col-xs-12" style={{ marginTop: "10px" }}>
                                                                    <label style={{ marginRight: "15px" }}>Số dòng/trang:</label>
                                                                    <input className="form-control" type="text" defaultValue={20} ref={input => this.perPage = input} />
                                                                </div>
                                                                <div className="col-xs-2 col-xs-offset-6" style={{ marginTop: "10px" }}>
                                                                    <button type="button" className="btn btn-success" onClick={this.handleSetting}>Cập nhật</button>
                                                                </div>
                                                            </div>
                                                        </th>
                                                    </tr>
                                                </thead>
                                                <tbody className="task-table">
                                                    <tr>
                                                        <td title="Báo cáo kiểm thử sản phẩm thuốc nước">Báo cáo kiểm thử sản phẩm thuốc nước</td>
                                                        <td title="Báo cáo kiểm thử sản phẩm thuốc nước">Báo cáo kiểm thử sản phẩm thuốc nước</td>
                                                        <td>15</td>
                                                        <td>Phan Thanh Hùng</td>
                                                        <td>Phòng đảm bảo chất lượng</td>
                                                        <td>
                                                            <a href="#abc" data-toggle="modal" data-target="#viewreporttask" data-backdrop="static" data-keyboard="false" title="Xem chi tiết mẫu công việc này"><i className="material-icons">view_list</i></a>
                                                            <ModalViewReport id=""/>
                                                            <a href="#abc" data-toggle="modal" data-target="#viewreporttask" data-backdrop="static" data-keyboard="false" className="edit" title="Sửa mẫu công việc này"><i className="material-icons"></i></a>
                                                            <a href="#abc" className="delete" title="Xóa mẫu công việc này"><i className="material-icons"></i></a>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td title="Báo cáo kiểm thử sản phẩm thuốc viên tháng 12">Báo cáo kiểm thử sản phẩm thuốc viên tháng 12</td>
                                                        <td title="Báo cáo kiểm thử sản phẩm thuốc viên tháng 12">Báo cáo kiểm thử sản phẩm thuốc viên tháng 12</td>
                                                        <td>20</td>
                                                        <td>Nguyễn Thị Thư</td>
                                                        <td>Phòng đảm bảo chất lượng</td>
                                                        <td>
                                                            <a href="#abc" data-toggle="modal" data-target="#viewreporttask" data-backdrop="static" data-keyboard="false" title="Xem chi tiết mẫu công việc này"><i className="material-icons">view_list</i></a>
                                                            <a href="#abc" data-toggle="modal" data-target="#viewreporttask" data-backdrop="static" data-keyboard="false" className="edit" title="Sửa mẫu công việc này"><i className="material-icons"></i></a>
                                                            <a href="#abc" className="delete" title="Xóa mẫu công việc này"><i className="material-icons"></i></a>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td title="Báo cáo kiểm thử sản phẩm lỗi cho bên khách hàng Viavet">Báo cáo kiểm thử sản phẩm lỗi cho bên khách hàng Viavet</td>
                                                        <td title="Báo cáo kiểm thử sản phẩm lỗi cho bên khách hàng Viavet">Báo cáo kiểm thử sản phẩm lỗi cho bên khách hàng Viavet </td>
                                                        <td>80</td>
                                                        <td>Nguyễn Viết Thái</td>
                                                        <td>Phòng đảm bảo chất lượng</td>
                                                        <td>
                                                            <a href="#abc" data-toggle="modal" data-target="#viewreporttask" data-backdrop="static" data-keyboard="false" title="Xem chi tiết mẫu công việc này"><i className="material-icons">view_list</i></a>
                                                            <a href="#abc" data-toggle="modal" data-target="#viewreporttask" data-backdrop="static" data-keyboard="false" className="edit" title="Sửa mẫu công việc này"><i className="material-icons"></i></a>
                                                            <a href="#abc" className="delete" title="Xóa mẫu công việc này"><i className="material-icons"></i></a>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td title="Báo cáo kiểm thử sản phẩm lỗi cho bên khách hàng Sanfovet">Báo cáo kiểm thử sản phẩm lỗi cho bên khách hàng Sanfovet</td>
                                                        <td title="Báo cáo kiểm thử sản phẩm lỗi cho bên khách hàng Sanfovet">Báo cáo kiểm thử sản phẩm lỗi cho bên khách hàng Sanfovet</td>
                                                        <td>50</td>
                                                        <td>Trần Hùng Cường</td>
                                                        <td>Phòng đảm bảo chất lượng</td>
                                                        <td>
                                                            <a href="#abc" data-toggle="modal" data-target="#viewreporttask" data-backdrop="static" data-keyboard="false" title="Xem chi tiết mẫu công việc này"><i className="material-icons">view_list</i></a>
                                                            <a href="#abc" data-toggle="modal" data-target="#viewreporttask" data-backdrop="static" data-keyboard="false" className="edit" title="Sửa mẫu công việc này"><i className="material-icons"></i></a>
                                                            <a href="#abc" className="delete" title="Xóa mẫu công việc này"><i className="material-icons"></i></a>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td title="Báo cáo kiểm thử sản phẩm lỗi cho bên khách hàng Dufafarm">Báo cáo kiểm thử sản phẩm lỗi cho bên khách hàng Dufafarm</td>
                                                        <td title="Báo cáo kiểm thử sản phẩm lỗi cho bên khách hàng Dufafarm">Báo cáo kiểm thử sản phẩm lỗi cho bên khách hàng Dufafarm</td>
                                                        <td>35</td>
                                                        <td>Nguyễn Viết Thái</td>
                                                        <td>Phòng đảm bảo chất lượng</td>
                                                        <td>
                                                            <a href="#abc" data-toggle="modal" data-target="#viewreporttask" data-backdrop="static" data-keyboard="false" title="Xem chi tiết mẫu công việc này"><i className="material-icons">view_list</i></a>
                                                            <a href="#abc" data-toggle="modal" data-target="#viewreporttask" data-backdrop="static" data-keyboard="false" className="edit" title="Sửa mẫu công việc này"><i className="material-icons"></i></a>
                                                            <a href="#abc" className="delete" title="Xóa mẫu công việc này"><i className="material-icons"></i></a>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td title="Báo cáo kiểm thử sản phẩm lỗi cho bên khách hàng Sanford Pharma">Báo cáo kiểm thử sản phẩm lỗi cho bên khách hàng Sanford Pharma</td>
                                                        <td title="Báo cáo kiểm thử sản phẩm lỗi cho bên khách hàng Sanford Pharma">Báo cáo kiểm thử sản phẩm lỗi cho bên khách hàng Sanford Pharma</td>
                                                        <td>45</td>
                                                        <td>Trần Hùng Cường</td>
                                                        <td>Phòng đảm bảo chất lượng</td>
                                                        <td>
                                                            <a href="#abc" data-toggle="modal" data-target="#viewreporttask" data-backdrop="static" data-keyboard="false" title="Xem chi tiết mẫu công việc này"><i className="material-icons">view_list</i></a>
                                                            <a href="#abc" data-toggle="modal" data-target="#viewreporttask" data-backdrop="static" data-keyboard="false" className="edit" title="Sửa mẫu công việc này"><i className="material-icons"></i></a>
                                                            <a href="#abc" className="delete" title="Xóa mẫu công việc này"><i className="material-icons"></i></a>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td title="Báo cáo kiểm thử sản phẩm lỗi cho bên xuất khẩu">Báo cáo kiểm thử sản phẩm lỗi cho bên xuất khẩu</td>
                                                        <td title="Báo cáo kiểm thử sản phẩm lỗi cho bên xuất khẩu">Báo cáo kiểm thử sản phẩm lỗi cho bên xuất khẩu</td>
                                                        <td>28</td>
                                                        <td>Nguyễn Thị Thư</td>
                                                        <td>Phòng đảm bảo chất lượng</td>
                                                        <td>
                                                            <a href="#abc" data-toggle="modal" data-target="#viewreporttask" data-backdrop="static" data-keyboard="false" title="Xem chi tiết mẫu công việc này"><i className="material-icons">view_list</i></a>
                                                            <a href="#abc" data-toggle="modal" data-target="#viewreporttask" data-backdrop="static" data-keyboard="false" className="edit" title="Sửa mẫu công việc này"><i className="material-icons"></i></a>
                                                            <a href="#abc" className="delete" title="Xóa mẫu công việc này"><i className="material-icons"></i></a>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td title="Báo cáo kiểm thử sản phẩm lỗi cho bên nhập khẩu NPL">Báo cáo kiểm thử sản phẩm lỗi cho bên nhập khẩu NPL</td>
                                                        <td title="Báo cáo kiểm thử sản phẩm lỗi cho bên nhập khẩu NPL">Báo cáo kiểm thử sản phẩm lỗi cho bên nhập khẩu NPL</td>
                                                        <td>75</td>
                                                        <td>Bùi Văn Huy</td>
                                                        <td>Phòng đảm bảo chất lượng</td>
                                                        <td>
                                                            <a href="#abc" data-toggle="modal" data-target="#viewreporttask" data-backdrop="static" data-keyboard="false" title="Xem chi tiết mẫu công việc này"><i className="material-icons">view_list</i></a>
                                                            <a href="#abc" data-toggle="modal" data-target="#viewreporttask" data-backdrop="static" data-keyboard="false" className="edit" title="Sửa mẫu công việc này"><i className="material-icons"></i></a>
                                                            <a href="#abc" className="delete" title="Xóa mẫu công việc này"><i className="material-icons"></i></a>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td title="Báo cáo kiểm thử sản phẩm lỗi cho bên nhập khẩu Premix">Báo cáo kiểm thử sản phẩm lỗi cho bên nhập khẩu Premix</td>
                                                        <td title="Báo cáo kiểm thử sản phẩm lỗi cho bên nhập khẩu Premix">Báo cáo kiểm thử sản phẩm lỗi cho bên nhập khẩu Premix</td>
                                                        <td>85</td>
                                                        <td>Bùi Văn Huy</td>
                                                        <td>Phòng đảm bảo chất lượng</td>
                                                        <td>
                                                            <a href="#abc" data-toggle="modal" data-target="#viewreporttask" data-backdrop="static" data-keyboard="false" title="Xem chi tiết mẫu công việc này"><i className="material-icons">view_list</i></a>
                                                            <a href="#abc" data-toggle="modal" data-target="#viewreporttask" data-backdrop="static" data-keyboard="false" className="edit" title="Sửa mẫu công việc này"><i className="material-icons"></i></a>
                                                            <a href="#abc" className="delete" title="Xóa mẫu công việc này"><i className="material-icons"></i></a>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td title="Báo cáo kiểm thử sản phẩm lỗi cho bên dựa án nhà nước">Báo cáo kiểm thử sản phẩm lỗi cho bên dựa án nhà nước</td>
                                                        <td title="Báo cáo kiểm thử sản phẩm lỗi cho bên dựa án nhà nước">Báo cáo kiểm thử sản phẩm lỗi cho bên dựa án nhà nước</td>
                                                        <td>55</td>
                                                        <td>Nguyễn Thị Thư</td>
                                                        <td>Phòng đảm bảo chất lượng</td>
                                                        <td>
                                                            <a href="#abc" data-toggle="modal" data-target="#viewreporttask" data-backdrop="static" data-keyboard="false" title="Xem chi tiết mẫu công việc này"><i className="material-icons">view_list</i></a>
                                                            <a href="#abc" data-toggle="modal" data-target="#viewreporttask" data-backdrop="static" data-keyboard="false" className="edit" title="Sửa mẫu công việc này"><i className="material-icons"></i></a>
                                                            <a href="#abc" className="delete" title="Xóa mẫu công việc này"><i className="material-icons"></i></a>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                    <div className="row pagination-new">
                                        <ul className="pagination" style={{ margin: "auto" }}>
                                            <li><a href="#abc">«</a></li>
                                            <li><a href="#abc">1</a></li>
                                            <li><a href="#abc">...</a></li>
                                            <li><a href="#abc">3</a></li>
                                            <li><a href="#abc">4</a></li>
                                            <li><a href="#abc">5</a></li>
                                            <li><a href="#abc">6</a></li>
                                            <li><a href="#abc">7</a></li>
                                            <li><a href="#abc">...</a></li>
                                            <li><a href="#abc">15</a></li>
                                            <li><a href="#abc">»</a></li>
                                        </ul>
                                        {/* <div id="search-page" className="col-sm-12 collapse" style={{ width: "26%" }}>
                                            <input className="col-sm-6 form-control" type="number" min="1" max={pageTotal} style={{ width: "60%" }} ref={input => this.newCurrentPage = input} />
                                            <button className="col-sm-4 btn btn-success" style={{ width: "35%", marginLeft: "5%" }} onClick={() => this.handleSearchPage()}>Tìm kiếm</button>
                                        </div> */}
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
    getDepartment: departmentActions.getDepartmentOfUser
};
const connectedReportManagement = connect(mapState, actionCreators)(ReportManagement);
export { connectedReportManagement as ReportManagement };