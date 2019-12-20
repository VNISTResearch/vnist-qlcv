import React, { Component } from 'react';

class ModalMemberApprove extends Component {
    constructor(props) {
        super(props);
        this.state = {
            edit: "",
            compare: false
        };
    }
    componentDidUpdate() {
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
    handleEdit = async (id) => {
        await this.setState(state => {
            return {
                ...state,
                edit: id
            }
        })
    }
    handleCompare = async () => {
        let script = document.createElement('script');
        script.src = '/main/js/CoCauToChuc.js';
        script.async = true;
        script.defer = true;
        document.body.appendChild(script);
        await this.setState(state => {
            return {
                ...state,
                compare: !state.compare
            }
        })
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

        return [month, year].join('-');
    }
    handleCloseModal = (id) => {
        var element = document.getElementsByTagName("BODY")[0];
        element.classList.remove("modal-open");
        var modal = document.getElementById(`memberKPIApprove${id}`);
        modal.classList.remove("in");
        modal.style = "display: none;";
    }
    render() {
        const { kpimember } = this.props;
        return (
            <div className="modal modal-full fade" id={"memberKPIApprove" + kpimember._id} tabIndex={-1} role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                <div className="modal-dialog-full">
                    <div className="modal-content">
                        {/* Modal Header */}
                        <div className="modal-header">
                            <button type="button" className="close" data-dismiss="modal" onClick={()=>this.handleCloseModal(kpimember._id)}>
                                <span aria-hidden="true">×</span>
                                <span className="sr-only">Close</span>
                            </button>
                            <h3 className="modal-title" id="myModalLabel">Phê duyệt KPI nhân viên {kpimember && kpimember.creater.name}</h3>
                        </div>
                        {/* Modal Body */}
                        <div className="modal-body modal-body-perform-task" >
                            <div className="col-xs-12">
                                <div className="col-xs-12">
                                    <label className="col-sm-2"><b>Người thực hiện:</b></label>
                                    <label className="col-sm-10">{this.props.name}</label>
                                </div>
                                <div className="col-xs-12">
                                    <label className="col-sm-2"><b>Thời gian:</b></label>
                                    <label className="col-sm-10">12-2019</label>
                                </div>
                                <div className="col-xs-12" style={{ marginBottom: "10px" }}>
                                    <label className="col-sm-2">Số mục tiêu:</label>
                                    <label className="col-sm-2">4</label>
                                    <button className="col-sm-2 col-sm-offset-3 btn btn-success" style={{ marginLeft: "32%" }}>Lưu thông tin</button>
                                    <button className="col-sm-2 btn btn-success" style={{ marginLeft: "10px" }} onClick={this.handleCompare}>So sánh với KPI tháng trước</button>
                                </div>
                            </div>
                            {this.state.compare &&
                                <div className="col-xs-12">
                                    <div className="col-xs-12">
                                        <div className="col-xs-4">
                                            <label className="col-xs-4" style={{ marginLeft: "-15px" }}>Từ tháng:</label>
                                            <div className='input-group col-sm-4 date has-feedback' style={{ display: "inline-table", marginLeft: "5px", marginTop: "-8px", width: "55%" }}>
                                                <div className="input-group-addon">
                                                    <i className="fa fa-calendar" />
                                                </div>
                                                <input type="text" className="form-control pull-right" ref={input => this.time = input} defaultValue={this.formatDate(Date.now())} name="time" id="datepicker7" data-date-format="mm-yyyy" />
                                            </div>
                                        </div>
                                        <div className="col-xs-4"  style={{ marginTop: "-8px", marginLeft: "-5%" }}>
                                            <button className="btn btn-success">Tìm kiếm</button>
                                        </div>
                                    </div>
                                    <table className="table table-bordered table-striped">
                                        <thead>
                                            <tr>
                                                <th title="Tên mục tiêu" style={{ width: "150px" }}>Tên mục tiêu</th>
                                                <th title="Mục tiêu đơn vị" style={{ width: "160px" }}>Mục tiêu đơn vị</th>
                                                <th title="Tiêu chí đánh giá" style={{ width: "194px" }}>Tiêu chí đánh giá</th>
                                                <th title="Trọng số" style={{ width: "55px" }}>Trọng số</th>
                                                <th title="Kết quả đánh giá">Kết quả đánh giá</th>
                                            </tr>
                                        </thead>
                                        <tbody >
                                            <tr>
                                                <td title="Hoàn thành quy trình kiểm thử">Hoàn thành quy trình kiểm thử</td>
                                                <td title="">Đảm bảo quy trình nội bộ</td>
                                                <td title="Hoàn thành đủ số lượng và đúng quy trình">Hoàn thành đủ số lượng và đúng quy trình</td>
                                                <td title="30">30</td>
                                                <td>20</td>
                                            </tr>
                                            <tr>
                                                <td title="Hoàn thành quy trình kiểm thử">Hoàn thành khóa đào tạo nghiệp vụ</td>
                                                <td title="">Đảm bảo quá trình học hỏi và phát triển không ngừng</td>
                                                <td title="Hoàn thành đủ số lượng và đúng quy trình">Hoàn thành đủ số lượng và đúng quy trình</td>
                                                <td title="30">30</td>
                                                <td>20</td>
                                            </tr>
                                            <tr>
                                                <td title="Hoàn thành quy trình kiểm thử">Hỗ trợ phòng kinh doanh kiểm tra lại các sản phẩm có lỗi</td>
                                                <td title="">Đảm bảo sự hài lòng của khách hàng</td>
                                                <td title="Hoàn thành đủ số lượng và đúng quy trình">Hoàn thành đủ số lượng và đúng quy trình</td>
                                                <td title="30">30</td>
                                                <td>25</td>
                                            </tr>
                                            <tr>
                                                <td title="Hoàn thành quy trình kiểm thử">Hỗ trợ hoàn thành hồ sơ nhân viên</td>
                                                <td title="">Đảm bảo quy trình nội bộ</td>
                                                <td title="Hoàn thành đủ số lượng và đúng quy trình">Cung cấp đủ thông tin</td>
                                                <td title="10">10</td>
                                                <td>10</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>}
                            <div className="col-xs-12">
                                {this.state.compare && <div className="col-xs-12">
                                    <h4><b>KPI tháng này</b></h4>
                                </div>}
                                <table className="table table-bordered table-striped">
                                    <thead>
                                        <tr>
                                            <th title="Tên mục tiêu" style={{ width: "252px" }}>Tên mục tiêu</th>
                                            <th title="Mục tiêu đơn vị" style={{ width: "281px" }}>Mục tiêu đơn vị</th>
                                            <th title="Tiêu chí đánh giá" style={{ width: "336px" }}>Tiêu chí đánh giá</th>
                                            <th title="Trọng số" style={{ width: "71px" }}>Trọng số</th>
                                            <th title="Trạng thái" style={{ width: "95px" }}>Trạng thái</th>
                                            <th title="Hành động" style={{ width: "107" }}>Hành động</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td title="Hoàn thành quy trình kiểm thử">Hoàn thành quy trình kiểm thử</td>
                                            <td title="">Đảm bảo quy trình nội bộ</td>
                                            <td title="Hoàn thành đủ số lượng và đúng quy trình">Hoàn thành đủ số lượng và đúng quy trình</td>
                                            <td title="30">{this.state.edit === "1" ? <input min="0" max="100" value="30" style={{ width: "60px" }} /> : 30}</td>
                                            <td title="Chờ phê duyệt">Chờ phê duyệt</td>
                                            <td>
                                                <a href="#edit" className="edit" title="Chỉnh sửa mục tiêu này" onClick={() => this.handleEdit("1")}><i className="material-icons">edit</i></a>
                                                <a href="#edit" className="add" title="Phê duyệt mục tiêu này"><i className="material-icons">check_circle</i></a>
                                                <a href="#delete" className="delete" title="Không đạt"><i className="material-icons">cancel</i></a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td title="Hoàn thành quy trình kiểm thử">Hoàn thành khóa đào tạo nghiệp vụ</td>
                                            <td title="">Đảm bảo quá trình học hỏi và phát triển không ngừng</td>
                                            <td title="Hoàn thành đủ số lượng và đúng quy trình">Hoàn thành đủ số lượng và đúng quy trình</td>
                                            <td title="30">{this.state.edit === "2" ? <input min="0" max="100" style={{ width: "60px" }} value="30" /> : 30}</td>
                                            <td title="Chờ phê duyệt">Chờ phê duyệt</td>
                                            <td>
                                                <a href="#edit" className="edit" title="Chỉnh sửa mục tiêu này" onClick={() => this.handleEdit("2")}><i className="material-icons">edit</i></a>
                                                <a href="#edit" className="add" title="Phê duyệt mục tiêu này"><i className="material-icons">check_circle</i></a>
                                                <a href="#delete" className="delete" title="Không đạt"><i className="material-icons">cancel</i></a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td title="Hoàn thành quy trình kiểm thử">Hỗ trợ phòng kinh doanh kiểm tra lại các sản phẩm có lỗi</td>
                                            <td title="">Đảm bảo sự hài lòng của khách hàng</td>
                                            <td title="Hoàn thành đủ số lượng và đúng quy trình">Hoàn thành đủ số lượng và đúng quy trình</td>
                                            <td title="30">{this.state.edit === "3" ? <input min="0" max="100" style={{ width: "60px" }} value="30" /> : 30}</td>
                                            <td title="Chờ phê duyệt">Chờ phê duyệt</td>
                                            <td>
                                                <a href="#edit" className="edit" title="Chỉnh sửa mục tiêu này" onClick={() => this.handleEdit("3")}><i className="material-icons">edit</i></a>
                                                <a href="#edit" className="add" title="Phê duyệt mục tiêu này"><i className="material-icons">check_circle</i></a>
                                                <a href="#delete" className="delete" title="Không đạt"><i className="material-icons">cancel</i></a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td title="Hoàn thành quy trình kiểm thử">Hoàn thành quy trình kiểm thử</td>
                                            <td title="">Đảm bảo quy trình nội bộ</td>
                                            <td title="Hoàn thành đủ số lượng và đúng quy trình">Hoàn thành đủ số lượng và đúng quy trình</td>
                                            <td title="10">{this.state.edit === "4" ? <input type="number" min="0" max="100" style={{ width: "60px" }} value="10" /> : 10}</td>
                                            <td title="Chờ phê duyệt">Chờ phê duyệt</td>
                                            <td>
                                                <a href="#edit" className="edit" title="Chỉnh sửa mục tiêu này" onClick={() => this.handleEdit("4")}><i className="material-icons">edit</i></a>
                                                <a href="#edit" className="add" title="Phê duyệt mục tiêu này"><i className="material-icons">check_circle</i></a>
                                                <a href="#delete" className="delete" title="Không đạt"><i className="material-icons">cancel</i></a>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        );
    }
}

export { ModalMemberApprove };