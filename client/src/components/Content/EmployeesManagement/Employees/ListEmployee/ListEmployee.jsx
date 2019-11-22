import React, { Component } from 'react';
import { connect } from 'react-redux';
import { employeeActions } from '../../../../../redux-actions/EmployeeActions';
import { InfoEmployee } from './InfoEmployee';
import { ModalEditOrganizational } from './ModalEditOrganizational ';
import { ModalAddEmployee } from './ModalAddEmployee';
import { ModalEditEmployee } from './ModalEditEmployee';
import './listemployee.css';
import { from } from 'rxjs';

class ListEmployee extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: "display",
            view: "display",
            department: "các đơn vị",
            chiefSelected: "",
            deputySelected: [],
            unit: "Đơn vị",
        }
        this.handleChangeUnit = this.handleChangeUnit.bind(this);
        // this.handleChangeChief = this.handleChangeChief.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    componentDidMount() {
        let script = document.createElement('script');
        script.src = 'main/js/ListEmployee.js';
        script.async = true;
        script.defer = true;
        document.body.appendChild(script);
        this.props.getAllEmployee();

    }
    // function click a employee in table list employee
    view = (employeeNumber) => {
        this.props.getInformationEmployee(employeeNumber);
        this.setState({
            view: "",
        })
    }
    edit = (employeeNumber) => {
        this.props.getInformationEmployee(employeeNumber);
    }

    // function click edit information a employee

    // function change unit show 
    handleChangeUnit(event) {
        var { value } = event.target;
        this.setState({
            department: value
        })
        if (value !== "các đơn vị") {
            this.props.getListEmployee(value, "Trưởng phòng", "Phó phòng");
            this.setState({
                show: ""
            })
        } else {
            this.props.getListEmployee("", "", "");
            this.setState({
                show: "display"
            })
        }
        let script = document.createElement('script');
        script.src = 'main/js/ListEmployee.js';
        script.async = true;
        script.defer = true;
        document.body.appendChild(script);
    }

    handleSubmit(event) {
    }
    render() {
        var lists, chief, deputy, listAll;
        var option = [], chiefs = [], deputys = [];
        var { employees } = this.props;
        var { department } = this.state;
        if (employees.allEmployee) {
            listAll = employees.allEmployee;
        }
        if (employees.listEmployee && employees.listEmployee !== []) {
            lists = employees.listEmployee;
        } else {
            if (employees.allEmployee) {
                lists = employees.allEmployee;
            }
        }
        if (employees.chiefDepartment && employees.chiefDepartment !== []) {
            chief = employees.chiefDepartment;
        }
        if (employees.deputyDepartment && employees.deputyDepartment !== []) {
            deputy = employees.deputyDepartment;
        }
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
                                                <option value="các đơn vị">-- Tất cả --</option>
                                                <option value="Phòng nhân sự">Phòng nhân sự</option>
                                                <option value="Phòng hành chính">Phòng hành chính</option>
                                                <option value="Phòng kinh doanh">Phòng kinh doanh</option>
                                                <option value="Phòng Marketing">Phòng Marketing</option>
                                                <option value="Ban hành chính">Ban hành chính</option>
                                            </select>
                                        </div>
                                        <div className={this.state.show} >
                                            <div className="col-md-12" style={{ paddingLeft: 0 }}>
                                                <div className="form-group col-md-6">
                                                    <label>Trưởng {department.toLowerCase()}:</label>
                                                    {chief &&
                                                        <select className="form-control select2" style={{ width: '100%' }} disabled>
                                                            {chief.map((x, index) => (
                                                                <option key={index} value={x.employeeNumber} style={{ height: 30 }}>{x.fullName} - {x.employeeNumber}</option>
                                                            ))}
                                                        </select>
                                                    }
                                                </div>
                                            </div>
                                            <div className="col-md-12" style={{ paddingLeft: 0 }}>
                                                <div className="form-group col-md-6">
                                                    <label>Phó {department.toLowerCase()}:</label>
                                                    {deputy &&
                                                        <select className="form-control select2" multiple="multiple" value={deputy.map(x => x.employeeNumber)} style={{ width: '100%' }} disabled>
                                                            {deputy.map((x, index) => (
                                                                <option key={index} value={x.employeeNumber} style={{ height: 30 }}>{x.fullName} - {x.employeeNumber}</option>
                                                            ))}
                                                        </select>
                                                    }
                                                </div>
                                                <div className="form-group col-md-6" style={{ paddingLeft: 0 }} >
                                                    <button style={{ marginTop: 25 }} type="submit" className="btn btn-primary pull-left" data-toggle="modal" data-target="#modal-editOrganizational" title="Thay đổi cơ cấu đơn vị">Thay đổi</button>
                                                </div>
                                            </div>
                                        </div>

                                        {/* <div className="col-md-12" style={{ paddingLeft: 0 }}>
                                            <div className="form-group col-md-6" >
                                                <label>Thêm nhân viên vào {department.toLowerCase()}:</label>
                                                {listAll &&

                                                    <select className="form-control select2" multiple="multiple" style={{ width: '100%' }}>
                                                        {listAll.map((x, index) => (
                                                            <option key={index} value={x.employeeNumber} style={{ height: 30 }}>{x.fullName} - {x.employeeNumber}</option>
                                                        ))}
                                                    </select>
                                                }
                                            </div>
                                            <button style={{ marginTop: 25 }} type="submit" className="btn btn-primary" id="" title="Lưu các thay đổi" onClick={this.handleSubmit}>Lưu lại</button>

                                        </div> */}
                                    </div>
                                    <div className="col-md-12">
                                        <div className="col-md-12" style={{ paddingLeft: 0, paddingRight: 0 }}>
                                            <div className="box-header col-md-6" style={{ paddingLeft: 0 }}>
                                                <h3 className="box-title">Danh sách nhân viên {department.toLowerCase()}:</h3>
                                            </div>
                                            <button style={{ marginBottom: 10 }} type="submit" className="btn btn-success pull-right" id="" title="Thêm nhân viên mới" data-toggle="modal" data-target="#modal-addEmployee">Thêm nhân viên</button>
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
                                                    <th style={{ width: "13%" }}>Hành động</th>
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
                                                                    <a href="#view" className="view" title="Xem chi tiết nhân viên" data-toggle="tooltip" onClick={() => this.view(x.employeeNumber)}><i className="material-icons">visibility</i></a>
                                                                    <a href="#abc" className="edit" title="Chỉnh sửa thông tin nhân viên " data-toggle="modal" data-target="#modal-editEmployee" onClick={() => this.edit(x.employeeNumber)} ><i className="material-icons"></i></a>
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
                    <ModalEditOrganizational department={department.toLowerCase()} />
                    <ModalAddEmployee />
                    <ModalEditEmployee employee={employee} employeeContact={employeeContact} />
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
    getListEmployee: employeeActions.getListEmployee,
};
const connectedEmplyee = connect(mapState, actionCreators)(ListEmployee);

export { connectedEmplyee as ListEmployee };