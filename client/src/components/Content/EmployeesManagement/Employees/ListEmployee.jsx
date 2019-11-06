import React, { Component } from 'react';
import { connect } from 'react-redux';
import { employeeActions } from '../../../../redux-actions/CombineActions';
import { InfoEmployee } from './../../CombineContent';
class ListEmployee extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this)
    }
    componentDidMount() {
        let script = document.createElement('script');
        script.src = 'main/js/ListEmployee.js';
        script.async = true;
        script.defer = true;
        document.body.appendChild(script);
        this.props.getAllEmployee();

    }
    handleClick(event) {
      
    }

    render() {
        var list;
        const { employees } = this.props;
        if (employees.items) list = employees.items;
        console.log(list);
        
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
                                            <select className="form-control" onChange={() => this.getAll()}>
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
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {
                                                    (typeof list === 'undefined' || list.length === 0) ? <tr><td colSpan={5}>No data</td></tr> :
                                                        list.map((x,index) =>(
                                                            <tr key={index} onClick={this.handleClick} >
                                                                <td>{x.employeeNumber}</td>
                                                                <td>{x.fullName}</td>
                                                                <td>{x.gender}</td>
                                                                <td>{x.brithday}</td>
                                                                <td>nhân viên</td>
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
                    <div >
                        <InfoEmployee />
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
};
const connectedEmplyee = connect(mapState, actionCreators)(ListEmployee);

export { connectedEmplyee as ListEmployee };