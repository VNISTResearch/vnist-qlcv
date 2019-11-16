import React, { Component } from 'react';
import { connect } from 'react-redux';
import { employeeActions } from '../../../../../redux-actions/EmployeeActions';
import { InfoEmployee } from './InfoEmployee';
import './listemployee.css';

class ListEmployee extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: "display",
            view: "display",
            department: " các đơn vị",
            truong: "",
            pho: [],
            unit: "Đơn vị",
        }
        this.handleChangeUnit = this.handleChangeUnit.bind(this)
    }
    componentDidMount() {
        let script = document.createElement('script');
        script.src = 'main/js/ListEmployee.js';
        script.async = true;
        script.defer = true;
        document.body.appendChild(script);
        this.props.getAllEmployee();
    }
    // function click a row in table list employee
    view = (employeeNumber) => {
        this.props.getInformationEmployee(employeeNumber);
        this.setState({
            view: "",
        })
    }
    // function change unit show 
    handleChangeUnit(event) {
        var lists, truong = "", pho = [];
        var { value } = event.target;
        const { employees } = this.props;
        if (employees.items) {
            lists = employees.items;
            lists.map(function (x, index) {
                x.department.map(function (y) {
                    if (y.nameDepartment === value && y.position === "Trưởng phòng") {
                        truong = x.employeeNumber
                    }
                    if (y.nameDepartment === value && y.position === "Phó phòng") {
                        pho[index] = x.fullName + " - " + x.employeeNumber
                    }
                })
            })
            this.setState({
                truong: truong,
                pho: [...pho]
            })
        }
        if (value !== "-- Tất cả --") {
            this.setState({
                show: "",
                department: value,
            })
        } else {
            this.setState({
                show: "display",
            })
        }
    }
    render() {
        var lists;
        const { employees } = this.props;
        var { department, truong, pho } = this.state;
        console.log(this.state);

        if (employees.items) lists = employees.items;
        var { employee, employeeContact } = this.props.employees;
        return (
            <div className="content-wrapper">
                {/* Content Header (Page header) */}
                <section className="content-header">
                    <h1>
                        Nhân sự các đơn vị
                    </h1>
                    <ol className="breadcrumb">
                        <li><a href="/"><i className="fa fa-dashboard" /> Home</a></li>
                        <li className="active">Quản lý nhân sự</li>
                    </ol>
                </section>
                <section className="content">
                    <div className="row">
                        <div className="col-xs-12">
                            <div className="box box-info">
                                {/* /.box-header */}
                                <div className="box-body">
                                    <div className="col-md-12" style={{ paddingLeft: 0 }}>
                                        <div className="form-group col-md-6">
                                            <label>Tên đơn vị:</label>
                                            <select className="form-control" id="department" onChange={this.handleChangeUnit}>
                                                <option>-- Tất cả --</option>
                                                <option>Phòng nhân sự</option>
                                                <option>Phòng hành chính</option>
                                                <option>Phòng kinh doanh</option>
                                                <option>Phòng Marketing</option>
                                                <option>Ban hành chính</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className={this.state.show} >
                                        <div className="col-md-12" style={{ paddingLeft: 0 }}>
                                            <div className="form-group col-md-6">
                                                <label>Trưởng {department.toLowerCase()}:</label>
                                                <select className="form-control select2" style={{ width: '100%' }} >
                                                    {lists &&
                                                        lists.map(function (x, index) {
                                                            if (x.employeeNumber === truong) {
                                                                return <option key={index} selected="selected">{x.fullName} - {x.employeeNumber}</option>
                                                            }
                                                        })}
                                                    {lists &&
                                                        lists.map(function (x, index) {
                                                            if (x.employeeNumber !== truong) {
                                                                return <option key={index}>{x.fullName} - {x.employeeNumber}</option>
                                                            }
                                                        })}
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-md-12" style={{ paddingLeft: 0 }}>
                                            <div className="form-group col-md-6">
                                                <label>Phó {department.toLowerCase()}:</label>
                                                <select className="form-control select2" multiple="multiple" style={{ width: '100%' }}>
                                                    {pho &&
                                                        pho.map((x, index) => (
                                                            <option key={index} selected="selected">{x}</option>
                                                        ))
                                                    }
                                                    {lists &&
                                                        lists.map(function (x, index) {
                                                            return <option key={index} value={x.employeeNumber}>{x.fullName} - {x.employeeNumber}</option>
                                                        })
                                                    })}
                                                </select>
                                            </div>

                                        </div>
                                        <div className="col-md-12" style={{ paddingLeft: 0 }}>
                                            <div className="form-group col-md-6" >
                                                <label>Thêm nhân viên vào {department.toLowerCase()}:</label>
                                                <select className="form-control select2" multiple="multiple" style={{ width: '100%' }}>
                                                    {lists &&
                                                        lists.map((x, index) => (
                                                            <option key={index}>{x.fullName} - {x.employeeNumber}</option>
                                                        ))}
                                                </select>
                                            </div>
                                            <button style={{ marginTop: 25 }} type="submit" className="btn btn-primary" id="" title="Lưu các thay đổi">Lưu lại</button>

                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="col-md-12" style={{ paddingLeft: 0, paddingRight: 0 }}>
                                            <div className="box-header col-md-6" style={{ paddingLeft: 0 }}>
                                                <h3 className="box-title">Danh sách nhân viên {department.toLowerCase()}:</h3>
                                            </div>
                                            <button style={{ marginBottom: 10 }} type="submit" className="btn btn-success pull-right" id="" title="Thêm một nhân viên mới">Thêm nhân viên</button>
                                        </div>

                                        <table id="listexample" className="table table-bordered" >
                                            <thead>
                                                <tr>
                                                    <th style={{ width: "15%" }}>Mã nhân viên</th>
                                                    <th>Họ và tên</th>
                                                    <th style={{ width: "10%" }}>Giới tính</th>
                                                    <th style={{ width: "12%" }}>Ngày sinh</th>
                                                    <th style={{ width: "12%" }}>Chức vụ</th>
                                                    <th style={{ width: "13%" }}>Đơn vị</th>
                                                    <th style={{ width: "12%" }}>Hành động</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {lists &&
                                                    lists.map((x, index) => (
                                                        <tr key={index}>
                                                            <td>{x.employeeNumber}</td>
                                                            <td>{x.fullName}</td>
                                                            <td>{x.gender}</td>
                                                            <td>{x.brithday}</td>
                                                            <td>nhân viên</td>
                                                            <td></td>
                                                            <td>
                                                                <center>
                                                                    <a href="#view" className="view" title="Xem chi tiết" data-toggle="tooltip" onClick={() => this.view(x.employeeNumber)}><i className="material-icons">visibility</i></a>
                                                                    <a href="#abc" className="edit" title="Chỉnh sửa thông tin " data-toggle="tooltip"><i className="material-icons"></i></a>
                                                                    <a href="#abc" className="delete" title="Xoá nhân viên khỏi đơn vị" data-toggle="tooltip"><i className="material-icons"></i></a>
                                                                </center>
                                                            </td>
                                                        </tr>
                                                    )
                                                    )}
                                            </tbody>
                                            <tfoot>
                                                <tr>
                                                    <th>Mã nhân viên</th>
                                                    <th>Họ và tên</th>
                                                    <th>Giới tính</th>
                                                    <th>Ngày sinh</th>
                                                    <th>Chức vụ</th>
                                                    <th>Đơn vị</th>
                                                    <th>Hành động</th>
                                                </tr>
                                            </tfoot>
                                        </table>
                                    </div>
                                </div>
                                {/* /.box-body */}
                            </div>
                            {/* /.box */}
                        </div>
                        {/* /.col */}
                    </div>
                    <div id="view" className={this.state.view}>
                        <InfoEmployee employee={employee} employeeContact={employeeContact} />
                    </div>
                </section>
            </div >
        );
    };
}

function mapState(state) {
    const { employees } = state;
    return { employees };
}

const actionCreators = {
    getAllEmployee: employeeActions.getAllEmployee,
    getInformationEmployee: employeeActions.getInformationEmployee,
};
const connectedEmplyee = connect(mapState, actionCreators)(ListEmployee);

export { connectedEmplyee as ListEmployee };