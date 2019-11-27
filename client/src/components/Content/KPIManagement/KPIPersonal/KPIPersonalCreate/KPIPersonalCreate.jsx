import React, { Component } from 'react';
import { connect } from 'react-redux';
import { departmentActions } from '../../../../../redux-actions/CombineActions';
import { kpiPersonalActions } from '../../../../../redux-actions/CombineActions';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class KPIPersonalCreate extends Component {
    componentDidMount() {
        this.props.getDepartment(localStorage.getItem('id'));
        this.props.getAllTarget(this.state.kpipersonal.creater);
        this.props.getParentTarget(this.state.kpipersonal.unit);
        this.handleResizeColumn();
        let script = document.createElement('script');
        script.src = '/main/js/CoCauToChuc.js';
        script.async = true;
        script.defer = true;
        document.body.appendChild(script);
    }
    constructor(props) {
        super(props);
        this.state = {
            kpipersonal: {
                unit: '5dcadf02f0343012f09c1193',
                creater: localStorage.getItem("id"),
                approver: '',
                name: '',
                parent: '',
                time: '',
                weight: '',
                criteria: ''
            },
            approverlist: [
                {
                    _id: "abcdef123456789987654321",
                    name: "Trần Văn Dũng",
                    parent: ""
                },
                {
                    _id: "abcdef123456789987654322",
                    name: "Lê Việt Anh",
                    parent: "abcdef123456789987654321"
                },
                {
                    _id: "abcdef123456789987654323",
                    name: "Nguyễn Việt Anh",
                    parent: "abcdef123456789987654321"
                },
                {
                    _id: "abcdef123456789987654324",
                    name: "Bùi Việt Anh",
                    parent: "abcdef123456789987654321"
                }
            ],
            adding: false,
            editing: false,
            submitted: false,
            commenting: false
        };

        this.handleChange = this.handleChange.bind(this);
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
    handleCancel = () => {
        this.setState({
            kpipersonal: {
                unit: '5dcadf02f0343012f09c1193',
                creater: localStorage.getItem("id"),
                approver: '',
                name: '',
                parent: '',
                time: '',
                weight: '',
                criteria: ''
            }
        });
    }

    handleChange(event) {
        const { name, value } = event.target;
        const { kpipersonal } = this.state;
        this.setState({
            kpipersonal: {
                ...kpipersonal,
                [name]: value
            }
        });
    }
    // function: notification the result of an action
    notify = (message) => toast(message);

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

    // function: create new target of personal kpi
    onAddItem = (event) => {
        event.preventDefault();
        const { kpipersonal } = this.state;
        this.setState({
            adding: true,
            kpipersonal: {
                ...kpipersonal,
                time: this.time.value,
                approver: this.approver.value
            }
        });
        if (kpipersonal.approver && kpipersonal.parent && kpipersonal.name && kpipersonal.weight && kpipersonal.criteria) {
            this.setState(state => {
                // const list = [...state.list, state.kpipersonal];
                this.props.createTarget(state.kpipersonal);
                return {
                    // list,
                    kpipersonal: {
                        unit: '5dcadf02f0343012f09c1193',
                        creater: localStorage.getItem("id"),
                        approver: '',
                        name: '',
                        parent: '',
                        time: '',
                        weight: '',
                        criteria: ''
                    },
                    adding: false
                };
            });
            this.notify("Thêm thành công");
        }
        console.log(this.state.kpipersonal);
    }

    edit = (item) => {
        this.setState({
            kpipersonal: {
                unit: item.unit,
                creater: item.creater,
                approver: item.approver,
                name: item.name,
                parent: item.parent,
                time: this.formatDate(item.time),
                weight: item.weight,
                criteria: item.criteria
            },
            editing: true,
            idTarget: item._id
        });
    }

    saveEdit = (event) => {
        event.preventDefault();
        const { kpipersonal } = this.state;
        this.setState({
            editing: false,
            kpipersonal: {
                ...kpipersonal,
                time: this.time.value
            }
        });
        if (kpipersonal.approver && kpipersonal.parent && kpipersonal.name && kpipersonal.weight && kpipersonal.criteria) {
            this.setState(state => {
                // const list = [...state.list, state.kpipersonal];
                this.props.editTarget(state.idTarget, state.kpipersonal);
                return {
                    // list,
                    kpipersonal: {
                        unit: '5dcadf02f0343012f09c1193',
                        creater: localStorage.getItem("id"),
                        approver: '',
                        name: '',
                        parent: '',
                        time: '',
                        weight: '',
                        criteria: ''
                    },
                    adding: false
                };
            });
            this.notify("Sửa thành công");
        }
        this.handleCancel();
    }

    delete = (id) => {
        this.props.deleteTarget(id);
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
        var unitList, list, parentTargets, approver;
        const { kpipersonal, approverlist, adding, editing, commenting } = this.state;
        const { departments, kpipersonals } = this.props;
        if (departments.unitofuser) unitList = departments.unitofuser;
        if (kpipersonals.items) list = kpipersonals.items;
        if (kpipersonals.parents) parentTargets = kpipersonals.parents;
        if (typeof list !== 'undefined' && list.length !== 0) {
            approver = list[0].approver;
        }
        return (
            <div className="table-wrapper">
                <div className="content-wrapper">
                    <section className="content-header">
                        <h1>
                            <b>KPI cá nhân</b>
                        </h1>
                        <ol className="breadcrumb">
                            <li><a href="/"><i className="fa fa-dashboard" /> Home</a></li>
                            <li><a href="/">Forms</a></li>
                            <li className="active">Advanced Elements</li>
                        </ol>
                    </section>
                    <section className="content">
                        <div className="row">
                            <div className="col-xs-12">
                                <div className="box">
                                    <div className="box-header">
                                        <h3 className="box-title"><b>Thiết lập KPI cá nhân</b></h3>
                                    </div>
                                    {/* /.box-header */}
                                    <div className="box-body">
                                        <div className="row">
                                            <div className="col-md-12">
                                                <div className="form-group">
                                                    <label>Đơn vị:</label>
                                                    <div className={'form-group has-feedback' + (adding && !kpipersonal.unit ? ' has-error' : '')}>
                                                        <select className="form-control" id="selunit" name="unit" value={kpipersonal.unit} onChange={this.handleChange} disabled>
                                                            <option>--Hãy chọn đơn vị--</option>
                                                            {unitList &&
                                                                unitList.map(x => {
                                                                    return <option key={x._id} value={x._id}>{x.name}</option>
                                                                })}
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="form-group">
                                                    <label>Người thực hiện:</label>
                                                    <div className={'form-group has-feedback' + (adding && !kpipersonal.creater ? ' has-error' : '')}>
                                                        <input type="text" className="form-control" id="inputname" value="Lê Thị Phương - Trưởng P.ĐBCL" name="name" disabled />
                                                    </div>
                                                </div>
                                                <div className="form-group">
                                                    <label>Người phê duyệt:</label>
                                                    <div className={'form-group has-feedback' + (adding && !kpipersonal.name ? ' has-error' : '')}>
                                                        <select className="form-control" id="selparent" ref={input => this.approver = input} name="approver" value={approver ? approver : kpipersonal.approver} disabled={approver} onChange={this.handleChange}>
                                                            <option>--Hãy chọn người phê duyệt--</option>
                                                            <optgroup label="Giám đốc">
                                                                {
                                                                    approverlist && approverlist.map(item => {
                                                                        if (item.parent === "") return <option key={item._id} value={item._id}>{item.name}</option>;
                                                                        return true;
                                                                    })
                                                                }
                                                            </optgroup>
                                                            <optgroup label="Phó giám đốc">
                                                                {
                                                                    approverlist && approverlist.map(item => {
                                                                        if (item.parent !== "") return <option key={item._id} value={item._id}>{item.name}</option>;
                                                                        return true;
                                                                    })
                                                                }
                                                            </optgroup>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="form-group">
                                                    <label>Tên mục tiêu:</label>
                                                    <div className={'form-group has-feedback' + (adding && !kpipersonal.name ? ' has-error' : '')}>
                                                        <input type="text" className="form-control" id="inputname" value={kpipersonal.name} placeholder="Tên mục tiêu" name="name" onChange={this.handleChange} />
                                                    </div>
                                                </div>
                                                <div className="form-group">
                                                    <label>Thuộc mục tiêu:</label>
                                                    <div className={'form-group has-feedback' + (adding && !kpipersonal.parent ? ' has-error' : '')}>
                                                        <select className="form-control" id="selparent" name="parent" value={kpipersonal.parent} onChange={this.handleChange}>
                                                            <option>--Hãy chọn mục tiêu cha--</option>
                                                            {parentTargets &&
                                                                parentTargets.map(x => {
                                                                    return <option key={x._id} value={x._id}>{x.name}</option>
                                                                })}
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="form-group">
                                                    <label>Mô tả tiêu chí đánh giá:</label>
                                                    <div className={'form-group has-feedback' + (adding && !kpipersonal.criteria ? ' has-error' : '')}>
                                                        <textarea type="text" className='form-control' id="inputname" value={kpipersonal.criteria} placeholder="Đánh giá mức độ hoàn thành dựa trên tiêu chí nào?" name="criteria" onChange={this.handleChange} />
                                                    </div>
                                                </div>
                                                <div className="form-group">
                                                    <label>Trọng số:</label>
                                                    <div className={'form-group has-feedback' + (adding && !kpipersonal.weight ? ' has-error' : '')} id="inputname">
                                                        <input type="number" min="0" max="100" className="form-control pull-right" value={kpipersonal.weight} placeholder="Trọng số của mục tiêu" name="weight" onChange={this.handleChange} />
                                                    </div>
                                                </div>
                                                <div className="form-group" >
                                                    <label style={{ marginTop: "15px" }}>Tháng:</label>
                                                    <div className={'input-group date has-feedback' + (adding && !kpipersonal.time ? ' has-error' : '')}>
                                                        <div className="input-group-addon">
                                                            <i className="fa fa-calendar" />
                                                        </div>
                                                        <input type="text" className="form-control pull-right" ref={input => this.time = input} value={kpipersonal.time} name="time" id="datepicker2" data-date-format="mm-yyyy" onChange={this.handleChange} />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-10 col-md-offset-8" style={{ marginTop: '15px' }}>
                                                {
                                                    editing === false ?
                                                        <button className="btn btn-success col-md-2" onClick={this.onAddItem}>Thêm mục tiêu</button>
                                                        : <button className="btn btn-info col-md-2" onClick={this.saveEdit}>Lưu thay đổi</button>
                                                }
                                                <button type="cancel" className="btn btn-primary col-md-2" style={{ marginLeft: "15px" }} onClick={this.handleCancel}>Xóa trắng</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xs-12">
                                <div className="box">
                                    <div className="box-header">
                                        <h3 className="box-title">Danh sách KPI cá nhân</h3>
                                    </div>
                                    <div className="box-body">
                                        <form>
                                            <div className="row">
                                                {
                                                    (typeof list !== 'undefined' && list.length !== 0) &&
                                                    <div className="col-xs-12">
                                                        <div className="form-group">
                                                            <label className="col-sm-2">- Thời gian</label>
                                                            <label className="col-sm-10">: {this.formatDate(list[0].time)}</label>
                                                        </div>
                                                        <div className="form-group">
                                                            <label className="col-sm-2">- Người phê duyệt</label>
                                                            <label className="col-sm-10">:&nbsp;
                                                            {typeof approverlist !== 'undefined' && approverlist.length !== 0 && approverlist.map(x => {
                                                                if (list[0].approver === x._id) return x.name;
                                                                return true;
                                                            })}</label>
                                                        </div>
                                                        <div className="form-group">
                                                            <label className="col-sm-2">- Số mục tiêu</label>
                                                            <label className="col-sm-10">: {list.reduce(sum => sum + 1, 0)}</label>
                                                        </div>
                                                        <div className="form-group">
                                                            <label className="col-sm-2"><b>- Tổng trọng số</b></label>
                                                            <label className="col-sm-10">: {list.map(item => parseInt(item.weight)).reduce((sum, number) => sum + number, 0)}</label>
                                                        </div>
                                                        <div className="form-group">
                                                            <label className="col-sm-2"><b>- Ghi chú</b></label>
                                                            <label className="col-sm-10">: {list.map(item => parseInt(item.weight)).reduce((sum, number) => sum + number, 0) !== 100 ? " Trọng số chưa thỏa mãn" : " Trọng số đã thỏa mãn"}</label>
                                                        </div>
                                                    </div>}
                                                <div className="col-xs-12">
                                                    <table className="table table-bordered">
                                                        <thead>
                                                            <tr>
                                                                <th title="Số thứ tự" style={{ width: "40px" }}>Stt</th>
                                                                <th title="Tên mục tiêu">Tên mục tiêu</th>
                                                                <th title="Mục tiêu cha">Mục tiêu cha</th>
                                                                <th title="Tiêu chí đánh giá">Tiêu chí đánh giá</th>
                                                                <th title="Trọng số">Trọng số</th>
                                                                <th title="Trạng thái">Trạng thái</th>
                                                                <th title="Hành động">Hành động</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            {
                                                                (typeof list === 'undefined' || list.length === 0) ? <tr><td colSpan={7}><center>No data</center></td></tr> :
                                                                    list.map((item, index) =>
                                                                        <tr key={index + 1}>
                                                                            <td title={index + 1}>{index + 1}</td>
                                                                            <td title={item.name}>{item.name}</td>
                                                                            <td title={parentTargets && parentTargets.map(x => {
                                                                                if (item.parent === x._id) return x.name;
                                                                                return "";
                                                                            })}>{parentTargets && parentTargets.map(x => {
                                                                                if (item.parent === x._id) return x.name;
                                                                                return "";
                                                                            })}</td>
                                                                            <td title={item.criteria}>{item.criteria}</td>
                                                                            <td title={item.weight}>{item.weight}</td>
                                                                            <td title={item.approve ? "Đã phê duyệt" : "Chờ phê duyệt"}>{item.approve ? "Đã phê duyệt" : "Chờ phê duyệt"}</td>
                                                                            <td>
                                                                                <a href="#edit" className="edit" title="Edit" data-toggle="tooltip" onClick={() => this.edit(item)}><i className="material-icons"></i></a>
                                                                                <a href="#delete" className="delete" title="Delete" data-toggle="tooltip" onClick={() => this.delete(item._id)}><i className="material-icons"></i></a>
                                                                            </td>
                                                                        </tr>
                                                                    )
                                                            }
                                                        </tbody>
                                                    </table>
                                                </div>
                                                <div className="col-xs-10 col-xs-offset-8">
                                                    <button type="submit" className="btn btn-success col-md-2">Yêu cầu phê duyệt</button>
                                                    {commenting ? <button className="btn btn-primary col-md-2" style={{ marginLeft: "15px" }} onClick={this.handleSubmitComment}>Gửi phản hồi</button>
                                                        : <button className="btn btn-primary col-md-2" style={{ marginLeft: "15px" }} onClick={this.handleRequestEdit}>Viết bình luận</button>}
                                                </div>
                                                {commenting && <div className="col-xs-12">
                                                    <form>
                                                        <div className="form-group">
                                                            <label>Phản hồi:</label>
                                                            <div className='form-group'>
                                                                <textarea type="text" className='form-control' id="inputname" name="reason" />
                                                            </div>
                                                        </div>
                                                    </form>
                                                </div>}
                                            </div>
                                        </form>
                                        <ToastContainer />
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

function mapState(state) {
    const { departments, kpipersonals } = state;
    return { departments, kpipersonals };
}

const actionCreators = {
    getDepartment: departmentActions.getDepartmentOfUser,
    getParentTarget: kpiPersonalActions.getAllParentTarget,
    getAllTarget: kpiPersonalActions.getAllTargetByUser,
    createTarget: kpiPersonalActions.addTarget,
    editTarget: kpiPersonalActions.editTarget,
    deleteTarget: kpiPersonalActions.delete,
    confirmKPI: kpiPersonalActions.confirm
};
const connectedKPIPersonalCreate = connect(mapState, actionCreators)(KPIPersonalCreate);
export { connectedKPIPersonalCreate as KPIPersonalCreate };