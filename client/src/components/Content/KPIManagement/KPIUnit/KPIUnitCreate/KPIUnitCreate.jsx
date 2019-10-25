import React, { Component } from 'react';
import { connect } from 'react-redux';
import { departmentActions, kpiUnitActions } from '../../../../../redux-actions/CombineActions';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class KPIUnitCreate extends Component {
    componentDidMount() {
        this.props.getDepartment();
        this.props.getAllTarget(this.state.kpiunit.unit);
    }
    constructor(props) {
        super(props);
        this.state = {
            kpiunit: {
                unit: '5da6c65a2add902300313be0',
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
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleCancel = () => {
        this.setState({
            kpiunit: {
                unit: '5da6c65a2add902300313be0',
                name: '',
                time: '',
                parent: '',
                weight: '',
                criteria: ''
            }
        });
    }

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

    notify = (message) => toast(message);

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
        if (kpiunit.name && kpiunit.weight && kpiunit.unit && kpiunit.criteria) {
            this.setState(state => {
                // const list = [...state.list, state.kpiunit];
                this.props.createTarget(state.kpiunit);
                return {
                    // list,
                    kpiunit: {
                        unit: '5da6c65a2add902300313be0',
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
    handleSubmit(event) {
        event.preventDefault();

        this.setState({ submitted: true });
        const { user } = this.state;
        if (user.name && user.email && user.password && user.password2) {
            this.props.register(user);
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
                this.props.editTarget(state.idTarget,state.kpiunit);
                return {
                    // list,
                    kpiunit: {
                        unit: '5da6c65a2add902300313be0',
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
        console.log(this.state);
        var unitList, root, list;
        const { kpiunit, adding, editing } = this.state;
        const { departments, kpiunits } = this.props;
        if (departments.items) unitList = departments.items;
        if(kpiunits.items) list = kpiunits.items;
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
                                                    <label>Chọn đơn vị:</label>
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
                                                            <select className="form-control" id="selparent" name="parent" onChange={this.handleChange}>
                                                                <option>--Hãy chọn mục tiêu cha--</option>
                                                                <option value="1">Mục tiêu 1</option>
                                                                <option value="2">Mục tiêu 2</option>
                                                                <option value="3">Mục tiêu 3</option>
                                                                <option value="4">Mục tiêu 4</option>
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
                                        <h3 className="box-title">Danh sách KPI đơn vị</h3>
                                    </div>
                                    <div className="box-body">
                                        <form>
                                            <div className="row">
                                                <div className="col-xs-12">
                                                    <table className="table table-bordered">
                                                        <thead>
                                                            <tr>
                                                                <th>Stt</th>
                                                                <th>Tên mục tiêu</th>
                                                                <th>Tiêu chí đánh giá</th>
                                                                <th>Thời gian</th>
                                                                <th>Trọng số</th>
                                                                <th>Trạng thái</th>
                                                                <th>Hành động</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            {
                                                                (typeof list === 'undefined' || list.length === 0)?<tr><td colSpan={7}>No data</td></tr> :
                                                                    list.map((item, index) =>
                                                                        <tr key={item._id}>
                                                                            <td>{index + 1}</td>
                                                                            <td>{item.name}</td>
                                                                            <td>{item.criteria}</td>
                                                                            <td>{item.time}</td>
                                                                            <td>{item.weight}</td>
                                                                            <td>{item.confirm?"Đã kích hoạt":"Chưa kích hoạt"}</td>
                                                                            <td>
                                                                                {/* <a className="add" title="Add" data-toggle="tooltip"><i className="material-icons"></i></a> */}
                                                                                <a href="#abc" className="edit" title="Edit" data-toggle="tooltip" onClick={() => this.edit(item, item._id)}><i className="material-icons"></i></a>
                                                                                <a href="#abc" className="delete" title="Delete" data-toggle="tooltip" onClick={() => this.delete(item._id)}><i className="material-icons"></i></a>
                                                                            </td>
                                                                        </tr>
                                                                    )
                                                            }
                                                        </tbody>
                                                        {
                                                            (typeof list !== 'undefined' && list.length !== 0) &&
                                                            <tfoot>
                                                                <tr>
                                                                    <td colSpan={1}><b>Số mục tiêu:</b></td>
                                                                    <td colSpan={1}><b>{list.reduce(sum => sum +1,0)} mục tiêu</b></td>
                                                                    <td colSpan={2}><b>Tổng trọng số:</b></td>
                                                                    <td colSpan={1}><b>{list.map(item => parseInt(item.weight)).reduce((sum, number) => sum + number, 0)}</b></td>
                                                                    <td colSpan={2}><b>*Ghi chú:</b>{list.map(item => parseInt(item.weight)).reduce((sum, number) => sum + number, 0) !== 100?" Trọng số chưa thỏa mãn":" Trọng số đã thỏa mãn"}</td>
                                                                </tr>
                                                            </tfoot>
                                                        }

                                                    </table>
                                                </div>
                                                <div className="col-xs-8 col-xs-offset-9">
                                                    <button type="submit" className="btn btn-success col-md-2">Kích hoạt</button>
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
    getDepartment: departmentActions.getAll,
    createTarget: kpiUnitActions.addTarget, 
    getAllTarget: kpiUnitActions.getAllTargetByUnitId,
    editTarget: kpiUnitActions.editTarget,
    deleteTarget: kpiUnitActions.delete
};
const connectedKPIUnitCreate = connect(mapState, actionCreators)(KPIUnitCreate);
export { connectedKPIUnitCreate as KPIUnitCreate };