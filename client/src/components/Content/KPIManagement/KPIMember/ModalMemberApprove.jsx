import React, { Component } from 'react';
import { connect } from 'react-redux';
import { kpiPersonalActions } from '../../../../redux-actions/CombineActions';

class ModalMemberApprove extends Component {
    constructor(props) {
        super(props);
        this.state = {
            edit: "",
            compare: false,
            checkInput: false
        };
    }
    componentDidMount() {
        this.props.getKPIPersonalById(this.props.id);
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
                edit: state.edit === "" ? id : ""
            }
        })
    }
    handleCompare = async (id) => {
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
        if (id) {
            this.props.getKPIMemberByMonth(id, this.time.value);
        }
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
    formatDateBack(date) {
        var d = new Date(date),
            month = '' + (d.getMonth()),
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
    checkStatusTarget = (status) => {
        if (status === null) {
            return "Chưa phê duyệt";
        } else if (status === 0) {
            return "Yêu cầu chỉnh sửa";
        } else if (status === 1) {
            return "Đã kích hoạt";
        } else if (status === 2) {
            return "Đã kết thúc"
        }
    }
    searchKPIPersonalByMonth = async (id, currentTime) => {
        await this.setState(state=>{
            return{
                ...state,
                checkInput: false
            }
        })
        var time = this.time.value;
        var searchtime = time.split("-");
        var time = new Date(searchtime[1], searchtime[0], 0);
        if ((Date.parse(time) >= Date.parse(currentTime)) || this.time.value==="") {
            await this.setState(state => {
                return {
                    ...state,
                    checkInput: true
                }
            })
        } else {
            this.props.getKPIMemberByMonth(id, this.time.value);
        }
    }
    render() {
        var kpipersonal, kpimember;
        const { kpipersonals } = this.props;
        const { checkInput } = this.state;
        if (kpipersonals.kpipersonal) kpipersonal = kpipersonals.kpipersonal;
        if (kpipersonals.kpimember) kpimember = kpipersonals.kpimember;
        return (
            <div className="modal modal-full fade" id={"memberKPIApprove" + this.props.id} tabIndex={-1} role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                <div className="modal-dialog-full">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button type="button" className="close" data-dismiss="modal" onClick={() => this.handleCloseModal(this.props.id)}>
                                <span aria-hidden="true">×</span>
                                <span className="sr-only">Close</span>
                            </button>
                            <div className="col-sm-6">
                                <h3 className="modal-title" id="myModalLabel">Phê duyệt KPI nhân viên {kpipersonal && kpipersonal.creater.name}</h3>
                            </div>
                            <div className="col-sm-5" style={{ marginTop: "-5px", marginLeft: "7%" }}>
                                {this.state.compare ? <button className="col-sm-3 btn btn-success" style={{ marginLeft: "48%" }} onClick={() => this.handleCompare()}>Tắt so sánh</button>
                                    : <button className="col-sm-3 btn btn-success" style={{ marginLeft: "48%" }} onClick={() => this.handleCompare(kpipersonal.creater._id)}>So sánh với KPI cũ</button>}
                                <button className="col-sm-3 btn btn-success" style={{ marginLeft: "10px" }}>Lưu thông tin</button>
                            </div>
                        </div>
                        <div className="modal-body modal-body-perform-task" >
                            <div className="col-xs-12" style={{ marginLeft: "-30px" }}>
                                <div className="col-xs-12">
                                    <label className="col-sm-2"><b>Người thực hiện:</b></label>
                                    <label className="col-sm-10">{kpipersonal && kpipersonal.creater.name}</label>
                                </div>
                                <div className="col-xs-12">
                                    <label className="col-sm-2"><b>Thời gian:</b></label>
                                    <label className="col-sm-10">{kpipersonal && this.formatDate(kpipersonal.time)}</label>
                                </div>
                                <div className="col-xs-12" style={{ marginBottom: "10px" }}>
                                    <label className="col-sm-2">Số mục tiêu:</label>
                                    <label className="col-sm-2">{kpipersonal && kpipersonal.listtarget.length}</label>
                                </div>
                            </div>
                            {this.state.compare &&
                                <div className="col-xs-12">
                                    <div className="col-xs-12" style={{ marginLeft: "-30px" }}>
                                        <div className="col-xs-4">
                                            <label className="col-xs-4" style={{ marginLeft: "-15px" }}>Từ tháng:</label>
                                            <div className={'input-group col-sm-4 date has-feedback' + (checkInput ? ' has-error' : '')} style={{ display: "inline-table", marginLeft: "5px", marginTop: "-8px", width: "55%" }}>
                                                <div className="input-group-addon">
                                                    <i className="fa fa-calendar" />
                                                </div>
                                                <input type="text" className="form-control pull-right" ref={input => this.time = input} defaultValue={this.formatDateBack(Date.now())} name="time" id="datepicker7" data-date-format="mm-yyyy" />
                                            </div>
                                            {checkInput &&
                                                <div className="col-sm-10 help-block" style={{marginLeft: "-14px", color: "red"}}>Thời gian tìm kiếm phải trước thời gian hiện tại và không rỗng</div>
                                            }
                                        </div>
                                        <div className="col-xs-4" style={{ marginTop: "-8px", marginLeft: "-5%" }}>
                                            <button className="btn btn-success" onClick={() => this.searchKPIPersonalByMonth(kpipersonal.creater._id, kpipersonal.time)}>Tìm kiếm</button>
                                        </div>
                                    </div>
                                    <table className="table table-bordered table-striped">
                                        <thead>
                                            <tr>
                                                <th title="Tên mục tiêu" style={{ width: "280px" }}>Tên mục tiêu</th>
                                                <th title="Mục tiêu đơn vị" style={{ width: "316px" }}>Mục tiêu đơn vị</th>
                                                <th title="Tiêu chí đánh giá" style={{ width: "373px" }}>Tiêu chí đánh giá</th>
                                                <th title="Trọng số" style={{ width: "173px" }}>Trọng số</th>
                                                <th title="Kết quả đánh giá">Kết quả đánh giá</th>
                                            </tr>
                                        </thead>
                                        <tbody >
                                            {typeof kpimember !== "undefined" ?
                                                kpimember.listtarget.map(item =>
                                                    <tr key={item._id}>
                                                        <td>{item.name}</td>
                                                        <td>{item.parent.name}</td>
                                                        <td>{item.criteria}</td>
                                                        <td>{this.state.edit === item._id ? <input min="0" max="100" defaultValue={item.weight} style={{ width: "60px" }} /> : item.weight}</td>
                                                        <td>{item.approverpoint}</td>
                                                    </tr>
                                                ) : <tr><td colSpan={5}>Không có dữ liệu phù hợp</td></tr>
                                            }
                                        </tbody>
                                    </table>
                                </div>}
                            <div className="col-xs-12">
                                {this.state.compare && <div className="col-xs-12" style={{ marginLeft: "-15px" }}>
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
                                            <th title="Hành động" style={{ width: "107px" }}>Hành động</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {typeof kpipersonal !== "undefined" &&
                                            kpipersonal.listtarget.map(item =>
                                                <tr key={item._id}>
                                                    <td>{item.name}</td>
                                                    <td>{item.parent.name}</td>
                                                    <td>{item.criteria}</td>
                                                    <td>{this.state.edit === item._id ? <input min="0" max="100" defaultValue={item.weight} style={{ width: "60px" }} /> : item.weight}</td>
                                                    <td>{this.checkStatusTarget(item.status)}</td>
                                                    <td>
                                                        <a href="#edit" className="edit" title="Chỉnh sửa mục tiêu này" onClick={() => this.handleEdit(item._id)}><i className="material-icons">edit</i></a>
                                                        <a href="#edit" className="add" title="Phê duyệt mục tiêu này"><i className="material-icons">check_circle</i></a>
                                                        <a href="#delete" className="delete" title="Không đạt"><i className="material-icons">cancel</i></a>
                                                    </td>
                                                </tr>
                                            )
                                        }
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

function mapState(state) {
    const { kpipersonals } = state;
    return { kpipersonals };
}

const actionCreators = {
    getKPIPersonalById: kpiPersonalActions.getKPIPersonalById,
    getKPIMemberByMonth: kpiPersonalActions.getKPIMemberByMonth
};
const connectedModalMemberApprove = connect(mapState, actionCreators)(ModalMemberApprove);
export { connectedModalMemberApprove as ModalMemberApprove };