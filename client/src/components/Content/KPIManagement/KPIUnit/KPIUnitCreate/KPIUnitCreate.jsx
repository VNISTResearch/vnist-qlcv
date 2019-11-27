import React, { Component } from 'react';
import { connect } from 'react-redux';
import { departmentActions, kpiUnitActions } from '../../../../../redux-actions/CombineActions';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class KPIUnitCreate extends Component {
    componentDidMount() {
        // get department list of company
        this.props.getDepartment(localStorage.getItem('id'));
        // get all target of unit
        this.props.getAllTarget(this.state.kpiunit.unit);
        // get all parent target of unit
        this.props.getParentTarget(this.state.kpiunit.unit);
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
            kpiunit: {
                unit: '5dcadf02f0343012f09c1193',
                creater: '',
                name: '',
                parent: '',
                time: '',
                weight: '',
                criteria: ''
            },
            // list: [],
            adding: false,
            editing: false,
            submitted: false
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
    // function: reset all data fields of a target of unit kpi
    handleCancel = () => {
        this.setState({
            kpiunit: {
                unit: '5dcadf02f0343012f09c1193',
                creater: '',
                name: '',
                time: '',
                parent: '',
                weight: '',
                criteria: ''
            }
        });
    }
    // function: save data of all fields of the target of unit kpi
    handleChange(event) {
        const { name, value } = event.target;
        const { kpiunit } = this.state;
        this.setState({
            kpiunit: {
                ...kpiunit,
                [name]: value
            }
        });
    }
    // function: notification the result of an action
    notify = (message) => toast(message);
    // function: create new target of unit kpi
    onAddItem = (event) => {
        event.preventDefault();
        const { kpiunit } = this.state;
        this.setState({
            adding: true,
            kpiunit: {
                ...kpiunit,
                time: this.time.value
            }
        });
        // function check: all filled fields => update database
        if (kpiunit.name && kpiunit.weight && kpiunit.unit && kpiunit.criteria) {
            this.setState(state => {
                // const list = [...state.list, state.kpiunit];
                this.props.createTarget(state.kpiunit);
                return {
                    // list,
                    kpiunit: {
                        unit: '5dcadf02f0343012f09c1193',
                        creater: '',
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
    }

    handleConfirm(list) {
        var checkTime = true;
        var weight = 0;
        if(typeof list !== 'undefined' && list.length !== 0) {
            var time = list[0].time;
            list.map(index => {
                if(index.time !== time) checkTime = false;
                return index;
            })
            weight = list.map(item => parseInt(item.weight)).reduce((sum, number) => sum + number, 0);
        }
        if(!checkTime) {
            this.notify("Thời gian thực hiện KPI phải đồng nhất và chưa được thiết lập");
        } else if (weight !== 100) {
            this.notify("Tổng trọng số phải bằng 100");
        } else {
            this.props.confirmKPI(this.state.kpiunit.unit);
            this.notify("Kích hoạt thành công KPI đơn vị");
        }
    }

    edit = (item, idTarget) => {
        this.setState({
            kpiunit: {
                unit: item.unit,
                name: item.name,
                parent: item.parent,
                time: item.time,
                weight: item.weight,
                criteria: item.criteria
            },
            editing: true,
            idTarget: idTarget
        });
    }

    saveEdit = (event) => {
        event.preventDefault();
        const { kpiunit } = this.state;
        this.setState({
            editing: true,
            kpiunit: {
                ...kpiunit,
                time: this.time.value
            }
        });
        if (kpiunit.name && kpiunit.weight && kpiunit.unit && kpiunit.criteria) {
            this.setState(state => {
                // const list = [...state.list, state.kpiunit];
                this.props.editTarget(state.idTarget, state.kpiunit);
                return {
                    // list,
                    kpiunit: {
                        unit: '5dcadf02f0343012f09c1193',
                        creater: '',
                        name: '',
                        parent: '',
                        time: '',
                        weight: '',
                        criteria: ''
                    },
                    editing: false
                };
            });
            this.notify("Sửa thành công");
        }
        this.handleCancel();
    }

    delete = (id) => {
        this.props.deleteTarget(id);
    }

    render() {
        var unitList, root, list, parentTargets;
        var confirm = false;
        const { kpiunit, adding, editing } = this.state;
        const { departments, kpiunits } = this.props;
        if (departments.unitofuser) unitList = departments.unitofuser;
        if (kpiunits.items) list = kpiunits.items;
        if (kpiunits.parents) parentTargets = kpiunits.parents;
        if(typeof list !== 'undefined' && list.length !== 0) {
            confirm = list[0].confirm;
        }
        return (
            <div className="table-wrapper">
                <div className="content-wrapper">
                    <section className="content-header">
                        <h1>
                            <b>KPI đơn vị</b>
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
                                        <h3 className="box-title"><b>Thiết lập KPI đơn vị</b></h3>
                                    </div>
                                    {/* /.box-header */}
                                    <div className="box-body">
                                        <div className="row">
                                            <div className="col-md-12">
                                                <div className="form-group">
                                                    <label>Đơn vị:</label>
                                                    <div className={'form-group has-feedback' + (adding && !kpiunit.unit ? ' has-error' : '')}>
                                                        <select className="form-control" id="selunit" name="unit" value={kpiunit.unit} onChange={this.handleChange} disabled>
                                                            <option>--Hãy chọn đơn vị--</option>
                                                            {unitList &&
                                                                unitList.map(x => {
                                                                    if (x.parents === "a00000000000000000000001") root = x._id;
                                                                    return <option key={x._id} value={x._id}>{x.name}</option>
                                                                })}
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="form-group">
                                                    <label>Tên mục tiêu:</label>
                                                    <div className={'form-group has-feedback' + (adding && !kpiunit.name ? ' has-error' : '')}>
                                                        <input type="text" className="form-control" id="inputname" value={kpiunit.name} placeholder="Tên mục tiêu" name="name" onChange={this.handleChange} />
                                                    </div>
                                                </div>
                                                {
                                                    (kpiunit.unit !== '' && kpiunit.unit !== root) &&
                                                    <div className="form-group">
                                                        <label>Thuộc mục tiêu:</label>
                                                        <div className={'form-group has-feedback' + (adding && !kpiunit.parent ? ' has-error' : '')}>
                                                            <select className="form-control" id="selparent" value={kpiunit.parent} name="parent" onChange={this.handleChange}>
                                                                <option>--Hãy chọn mục tiêu cha--</option>
                                                                {(typeof parentTargets !== 'undefined' && parentTargets.length !== 0) &&
                                                                    parentTargets.map(x => {
                                                                        return <option key={x._id} value={x._id}>{x.name}</option>
                                                                    })
                                                                }
                                                                {/* <option value="1">Mục tiêu 1</option>
                                                                <option value="2">Mục tiêu 2</option>
                                                                <option value="3">Mục tiêu 3</option>
                                                                <option value="4">Mục tiêu 4</option> */}
                                                            </select>
                                                        </div>
                                                    </div>
                                                }
                                                <div className="form-group">
                                                    <label>Mô tả tiêu chí đánh giá:</label>
                                                    <div className={'form-group has-feedback' + (adding && !kpiunit.criteria ? ' has-error' : '')}>
                                                        <textarea type="text" className='form-control' id="inputname" value={kpiunit.criteria} placeholder="Đánh giá mức độ hoàn thành dựa trên tiêu chí nào?" name="criteria" onChange={this.handleChange} />
                                                    </div>
                                                </div>
                                                <div className="form-group">
                                                    <label>Trọng số:</label>
                                                    <div className={'form-group has-feedback' + (adding && !kpiunit.weight ? ' has-error' : '')} id="inputname">
                                                        <input type="number" min="0" max="100" className="form-control pull-right" value={kpiunit.weight} placeholder="Trọng số của mục tiêu" name="weight" onChange={this.handleChange} />
                                                    </div>
                                                </div>
                                                <div className="form-group" >
                                                    <label style={{ marginTop: "15px" }}>Tháng:</label>
                                                    <div className={'input-group date has-feedback' + (adding && !kpiunit.time ? ' has-error' : '')}>
                                                        <div className="input-group-addon">
                                                            <i className="fa fa-calendar" />
                                                        </div>
                                                        <input type="text" className="form-control pull-right" ref={input => this.time = input} value={kpiunit.time} name="time" id="datepicker2" data-date-format="mm-yyyy" onChange={this.handleChange} />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-8 col-md-offset-9" style={{ marginTop: '15px' }}>
                                                {
                                                    editing === false ?
                                                        <button className="btn btn-success col-md-2" onClick={this.onAddItem} disabled={confirm}>Thêm mục tiêu</button>
                                                        : <button className="btn btn-info col-md-2" onClick={this.saveEdit} disabled={confirm}>Lưu thay đổi</button>
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
                                        <h3 className="box-title">Danh sách KPI đơn vị</h3>
                                    </div>
                                    <div className="box-body">
                                        <form>
                                            <div className="row">
                                                {
                                                    (typeof list !== 'undefined' && list.length !== 0) &&
                                                    <div className="col-xs-12">
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
                                                                <th titl="Số thứ tự" style={{ width: "40px" }}>Stt</th>
                                                                <th title="Tên mục tiêu" style={{ width: "180px" }}>Tên mục tiêu</th>
                                                                <th title="Tiêu chí đánh giá">Tiêu chí đánh giá</th>
                                                                <th title="Thời gian" style={{ width: "120px" }}>Thời gian</th>
                                                                <th title="Trọng số" style={{ width: "100px" }}>Trọng số</th>
                                                                <th title="Trạng thái" style={{ width: "120px" }}>Trạng thái</th>
                                                                <th>Hành động</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            {
                                                                (typeof list === 'undefined' || list.length === 0) ? <tr><td colSpan={7}><center>No data</center></td></tr> :
                                                                    list.map((item, index) =>
                                                                        <tr key={item._id}>
                                                                            <td>{index + 1}</td>
                                                                            <td title={item.name}>{item.name}</td>
                                                                            <td title={item.criteria}>{item.criteria}</td>
                                                                            <td title={item.time}>{item.time}</td>
                                                                            <td title={item.weight}>{item.weight}</td>
                                                                            <td title={item.confirm ? "Đã kích hoạt" : "Chưa kích hoạt"}>{item.confirm ? "Đã kích hoạt" : "Chưa kích hoạt"}</td>
                                                                            <td>
                                                                                {/* <a className="add" title="Add" data-toggle="tooltip"><i className="material-icons"></i></a> */}
                                                                                <a href="#abc" className="edit" title="Edit" data-toggle="tooltip" onClick={() => this.edit(item, item._id)}><i className="material-icons"></i></a>
                                                                                <a href="#abc" className="delete" title="Delete" data-toggle="tooltip" onClick={() => this.delete(item._id)}><i className="material-icons"></i></a>
                                                                            </td>
                                                                        </tr>
                                                                    )
                                                            }
                                                        </tbody>
                                                    </table>
                                                </div>
                                                <div className="col-xs-8 col-xs-offset-9">
                                                    <button type="submit" className="btn btn-success col-md-2" onClick={() => this.handleConfirm(list)} disabled={confirm}>Kích hoạt</button>
                                                    <button className="btn btn-primary col-md-2" style={{ marginLeft: "15px" }}>Bỏ kích hoạt</button>
                                                </div>
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
    const { departments, kpiunits } = state;
    return { departments, kpiunits };
}

const actionCreators = {
    getDepartment: departmentActions.getDepartmentOfUser,
    createTarget: kpiUnitActions.addTarget,
    getAllTarget: kpiUnitActions.getAllTargetByUnitId,
    getParentTarget: kpiUnitActions.getAllParentTargetByUnitId,
    editTarget: kpiUnitActions.editTarget,
    deleteTarget: kpiUnitActions.delete,
    confirmKPI: kpiUnitActions.confirm
};
const connectedKPIUnitCreate = connect(mapState, actionCreators)(KPIUnitCreate);
export { connectedKPIUnitCreate as KPIUnitCreate };