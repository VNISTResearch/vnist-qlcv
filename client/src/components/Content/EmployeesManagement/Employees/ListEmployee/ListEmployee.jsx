import React, { Component } from 'react';
import { connect } from 'react-redux';
import { employeeActions } from '../../../../../redux-actions/EmployeeActions';
import { InfoEmployee } from './InfoEmployee';
import './listemployee.css';

class ListEmployee extends Component {
    constructor(props) {
        super(props);
        this.state = {
            department: "-- Tất cả --"
        }
    }
    UNSAFE_componentWillMount() {
        let script = document.createElement('script');
        script.src = 'main/js/ListEmployee.js';
        script.async = true;
        script.defer = true;
        document.body.appendChild(script);
    }
    componentDidMount() {
        this.props.getAllEmployee();
    }

    handleClick = (employeeNumber) => {
        this.props.getInformationEmployee(employeeNumber);
    }
    render() {
        var lists;
        const { employees } = this.props;
        console.log(employees);
        
        if (employees.items) lists = employees.items;
        var { employee, employeeContact } = this.props.employees;
        return (
            <div className="content-wrapper">
                {/* Content Header (Page header) */}
                <section className="content-header">
                    <h1>
                        Danh sách nhân viên
                    </h1>
                    <ol className="breadcrumb">
                        <li><a href="#abc"><i className="fa fa-dashboard" /> Home</a></li>
                        <li className="active">Quản lý nhân sự</li>
                    </ol>
                </section>
                <section className="content">
                    <div className="row">
                        <div className="col-xs-12">
                            <div className="box">
                                {/* /.box-header */}
                                <div className="box-body">
                                    <div className="col-md-4">
                                        <div className="form-group">
                                            <label>Phòng ban:</label>
                                            <select className="form-control" id="department">
                                                <option>-- Tất cả --</option>
                                                <option>Phòng nhân sự</option>
                                                <option>Phòng hành chính</option>
                                                <option>Phòng kinh doanh</option>
                                                <option>Phòng Marketing</option>
                                            </select>
                                        </div>
                                        <div className="box-header" style={{ paddingLeft: 0 }}>
                                            <h3 className="box-title">Danh sách nhân viên:</h3>
                                        </div>
                                    </div>

                                    <div className="col-md-12" style={{ paddingLeft: 20 }}>
                                        <table id="listexample" className="table table-bordered" >
                                            <thead>
                                                <tr>
                                                    <th>Mã nhân viên</th>
                                                    <th>Họ và tên</th>
                                                    <th>Giới tính</th>
                                                    <th>Ngày sinh</th>
                                                    <th>Chức vụ</th>
                                                    <th style={{ width: "18%" }}>Phòng ban</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {lists &&
                                                    lists.map((x, index) => (
                                                        <tr key={index} onClick={() => this.handleClick(x.employeeNumber)}>
                                                            <td>{x.employeeNumber}</td>
                                                            <td>{x.fullName}</td>
                                                            <td>{x.gender}</td>
                                                            <td>{x.brithday}</td>
                                                            <td>nhân viên</td>
                                                            <td>{x.department}</td>
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
                                                    <th>Phòng ban</th>
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
                    <div id="detailEmployee" className="display">
                        <InfoEmployee employee={employee} employeeContact={employeeContact} />
                    </div>
                </section>
            </div>
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