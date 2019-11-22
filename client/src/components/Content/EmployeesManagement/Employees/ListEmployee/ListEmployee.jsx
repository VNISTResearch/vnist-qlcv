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
    click = () => {
        var { employees } = this.props;
        this.setState({
            chiefSelected: employees.chiefDepartment,
        })
    }
    handleSubmit(event) {
        var { employees } = this.props;
        this.setState({
            chiefSelected: employees.chiefDepartment,
        })
    }
    render() {
        console.log(this.state)
        var lists, chief = "", deputy = "", listAll, display = "";
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
                                        <div className="col-md-4">
                                            <div className="form-group">
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
                                        </div>
                                        <button style={{ marginBottom: 10 }} type="submit" className="btn btn-success pull-right" id="" title="Thêm nhân viên mới" data-toggle="modal" data-target="#modal-addEmployee">Thêm nhân viên</button>
                                        <div className={this.state.show} >
                                            <div className="col-md-12">
                                                <div className="col-md-4" style={{ paddingLeft: 0, paddingRight: 20 }}>
                                                    <div className="form-group" style={{ marginBottom: 0 }}>
                                                        <label style={{ marginBottom: 0 }}>Trưởng {department.toLowerCase()}:</label>
                                                    </div>
                                                    {(typeof chief === 'undefined' || chief.length === 0) ?
                                                        <div className="user-panel" style={{ paddingTop: 5, marginTop: 5, background: "#eaeae8" }}>
                                                            <div className="pull-left image">
                                                                <img src="adminLTE/dist/img/avatar5.png" className="img-circle" alt="User Image" />
                                                            </div>
                                                            <div className="pull-left info">
                                                                <p style={{ fontSize: 14, height: 20, marginTop: 10 }}>Thêm trưởng {department.toLocaleLowerCase()}</p>
                                                            </div>
                                                            <div className="pull-right" style={{ marginTop: 10 }}>
                                                                <a href="#abc" className="delete" title="Thêm nhân sự" style={{ fontSize: 20, color: "#008d4c" }} >
                                                                    <i className="glyphicon glyphicon-plus-sign"></i>
                                                                </a>
                                                            </div>
                                                        </div> :
                                                        chief.map((x, index) => (
                                                            <div key={index} className="user-panel" style={{ paddingTop: 5, marginTop: 5, background: "#eaeae8" }}>
                                                                <div className="pull-left image">
                                                                    <img src="adminLTE/dist/img/avatar5.png" className="img-circle" alt="User Image" />
                                                                </div>
                                                                <div className="pull-left info">
                                                                    <p style={{ fontSize: 16, height: 20 }}>{x.fullName}</p>
                                                                    <span>Mã NV:{x.employeeNumber}</span>
                                                                </div>
                                                                <div className="pull-right" style={{ marginTop: 15 }}>
                                                                    <a href="#abc" className="edit" title="Thay đổi chức vụ" ><i className="material-icons"></i></a>
                                                                </div>
                                                            </div>
                                                        ))
                                                    }

                                                </div>
                                                <div className="col-md-8" style={{ paddingRight: 0 }}>
                                                    <div className="form-group" style={{ marginBottom: 0, marginLeft: 15 }}>
                                                        <label style={{ marginBottom: 0 }}>Phó {department.toLowerCase()}:</label>
                                                    </div>
                                                    {deputy && deputy.map((x, index) => (
                                                        <div key={index} className="col-md-6" style={{ paddingRight: 0, marginTop: 5 }}>
                                                            <div className="user-panel" style={{ paddingTop: 5, background: "#eaeae8" }}>
                                                                <div className="pull-left image">
                                                                    <img src="adminLTE/dist/img/avatar5.png" className="img-circle" alt="User Image" />
                                                                </div>
                                                                <div className="pull-left info">
                                                                    <p style={{ fontSize: 16, height: 20 }}>{x.fullName}</p>
                                                                    <span>Mã NV:{x.employeeNumber}</span>
                                                                </div>
                                                                <div className="pull-right" style={{ marginTop: 15 }}>
                                                                    <a href="#abc" className="delete" title="Xoá chức vụ" style={{ color: "#E34724" }}><i className="material-icons"></i></a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    ))}
                                                    <div className="col-md-6" style={{ paddingRight: 0, marginTop: 5 }}>
                                                        <div className="user-panel" style={{ paddingTop: 5, background: "#eaeae8" }}>
                                                            <div className="pull-left image">
                                                                <img src="adminLTE/dist/img/avatar5.png" className="img-circle" alt="User Image" />
                                                            </div>
                                                            <div className="pull-left info">
                                                                <p style={{ fontSize: 14, height: 20, marginTop: 10 }}>Thêm phó {department.toLocaleLowerCase()}</p>
                                                            </div>
                                                            <div className="pull-right" style={{ marginTop: 10 }}>
                                                                <a href="#abc" className="delete" title="Thêm nhân sự" style={{ fontSize: 20, color: "#008d4c" }} ><i className="glyphicon glyphicon-plus-sign"></i></a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    {/* <div className="col-md-6 pull-right" style={{ paddingRight: 0, marginTop: 5 }}>
                                                        <button type="submit" className="btn btn-success pull-right" id="" title={"Thêm phó " + department.toLowerCase()}><i className="glyphicon glyphicon-plus"></i></button>
                                                    </div> */}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="col-md-12" style={{ paddingLeft: 0, paddingRight: 0 }}>
                                            <div className="box-header col-md-6" style={{ paddingLeft: 0 }}>
                                                <h3 className="box-title">Danh sách nhân viên {department.toLowerCase()}:</h3>
                                            </div>
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
                                                    <th style={{ width: "13%" }}>
                                                        <center>
                                                            <button type="submit" className="btn btn-success" title="Thêm nhân viên vào đơn vị" style={{ paddingTop: 3, paddingBottom: 3, paddingLeft: 6, paddingRight: 6 }}>
                                                                <i className="glyphicon glyphicon-plus"></i>
                                                            </button>
                                                        </center>
                                                    </th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {(typeof lists === 'undefined' || lists.length === 0) ? <tr><td colSpan={6}><center> Không có dữ liệu</center></td></tr> :
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
                        <div className="row">
                            {/* left column */}
                            <div className="col-md-12">
                                <div className="box box-info">
                                    <div className="box-header with-border">
                                        <h3 className="box-title">Thông tin chi tiết nhân viên</h3>
                                        <div className="box-tools pull-right">
                                            <button type="button" className="btn btn-box-tool" data-widget="collapse"><i className="fa fa-minus" /></button>
                                        </div>
                                        <button type="submit" className="btn btn-primary pull-right" id="" style={{ marginRight: 10 }} data-toggle="modal" data-target="#modal-editEmployee">Cập nhật thông tin</button>
                                    </div>
                                    <InfoEmployee employee={employee} employeeContact={employeeContact} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <ModalEditOrganizational department={department} listAll={listAll} />
                    <ModalAddEmployee state={this.state} department={department} />
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