import React, { Component } from 'react';
import './timekeeping.css';

class Timekeeping extends Component {
    componentDidMount() {
        let script = document.createElement('script');
        script.src = 'main/js/AddEmployee.js';
        script.async = true;
        script.defer = true;
        document.body.appendChild(script);
    }
    render() {
        return (
            <div className="content-wrapper">
                {/* Content Header (Page header) */}
                <section className="content-header">
                    <h1>
                        Bảng chấm công nhân viên
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
                                {/* <div className="box-header with-border">
                                    <h3 class="box-title">Bảng lương nhân viên</h3>
                                    <button type="submit" className="btn btn-success pull-right" id="" title="Thêm mới bảng lương">Thêm bảng lương</button>
                                </div> */}

                                {/* /.box-header */}
                                <div className="box-body">
                                    <div className="col-md-12">
                                        <div className="form-group col-md-3" style={{ paddingLeft: 0, paddingRight: 30 }}>
                                            <label htmlFor="fullname">Họ và tên:</label>
                                            <input type="text" className="form-control" name="fullName" />
                                        </div>
                                        <div className="form-group col-md-3" style={{ paddingLeft: 0, paddingRight: 30 }}>
                                            <label htmlFor="employeeNumber">Mã nhân viên:</label>
                                            <input type="text" className="form-control" name="employeeNumber" />
                                        </div>
                                        <div className="form-group col-md-3" style={{ paddingLeft: 0, paddingRight: 30 }}>
                                            <label htmlFor="month">Tháng:</label>
                                            <input type="text" className="form-control" name="month" id="datepicker2" data-date-format="mm-yyyy" />
                                        </div>
                                        <div className="form-group col-md-3" style={{ paddingTop: 25, paddingLeft: 0 }}>
                                            <button type="submit" className="btn btn-success" title="Tìm kiếm" >Tìm kiếm</button>
                                            <button type="button" className="btn btn-primary pull-right dropdown-toggle" data-toggle="dropdown" aria-expanded="true" title="Chấm công nhân viên" >Chấm công</button>
                                            <ul className="dropdown-menu pull-right">
                                                <li><a href="#abc">Import file Excel</a></li>
                                                <li><a href="#abc">Chấm bằng tay</a></li>
                                            </ul>
                                        </div>
                                        <div className="col-md-12" style={{ paddingLeft: 0 }}>
                                            <div className="form-group">
                                                <label>Ký hiệu: &emsp; &emsp; </label><i style={{ color: "#08b30e", fontSize: 19 }} className="glyphicon glyphicon-ok"></i><span> -- Có đi làm </span>
                                                &emsp;&emsp;&emsp;<i style={{ color: "red", fontSize: 19 }} className="glyphicon glyphicon-remove"></i><span> -- Nghỉ làm</span>

                                            </div>



                                        </div>
                                        {/* <div class="input-group-btn open">

                                            <button type="button" className="btn btn-warning dropdown-toggle" data-toggle="dropdown" aria-expanded="true"></button> */}





                                        <div className="col-md-4" style={{ padding: 0 }}>
                                            <table className="keeping table table-bordered">
                                                <thead>
                                                    <tr>
                                                        <th style={{ width: "55%" }}>Tên nhân viên</th>
                                                        <th >mã nhân viên</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td style={{ paddingTop: 20 }}>Nguyen khanh linh</td>
                                                        <td style={{ paddingTop: 20 }}>mã nhân viên</td>
                                                    </tr>
                                                    <tr>
                                                        <td style={{ paddingTop: 20 }}>Nguyen van hung </td>
                                                        <td style={{ paddingTop: 20 }}>mã nhân viên</td>
                                                    </tr>
                                                </tbody>

                                            </table>
                                        </div>
                                        <div className="timekeeping col-md-8" style={{ padding: 0 }}>
                                            <table className="timekeeping table table-bordered">
                                                <thead>
                                                    <tr>
                                                        <th>1</th>
                                                        <th>2</th>
                                                        <th>3</th>
                                                        <th>4</th>
                                                        <th>5</th>
                                                        <th>6</th>
                                                        <th>7</th>
                                                        <th>8</th>
                                                        <th>9</th>
                                                        <th>10</th>
                                                        <th>11</th>
                                                        <th>12</th>
                                                        <th>13</th>
                                                        <th>14</th>
                                                        <th>15</th>
                                                        <th>16</th>
                                                        <th>17</th>
                                                        <th>18</th>
                                                        <th>19</th>
                                                        <th>20</th>
                                                        <th>21</th>
                                                        <th>22</th>
                                                        <th>23</th>
                                                        <th>24</th>
                                                        <th>25</th>
                                                        <th>26</th>
                                                        <th>27</th>
                                                        <th>28</th>
                                                        <th>29</th>
                                                        <th>30</th>
                                                        <th style={{ width: 45 }}>31</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td><i style={{ color: "#08b30e" }} className="glyphicon glyphicon-ok"></i></td>
                                                        <td><i style={{ color: "#08b30e" }} className="glyphicon glyphicon-ok"></i></td>
                                                        <td><i style={{ color: "red" }} className="glyphicon glyphicon-remove"></i></td>
                                                        <td><i style={{ color: "#08b30e" }} className="glyphicon glyphicon-ok"></i></td>
                                                        <td><i style={{ color: "#08b30e" }} className="glyphicon glyphicon-ok"></i></td>
                                                        <td><i style={{ color: "#08b30e" }} className="glyphicon glyphicon-ok"></i></td>
                                                        <td><i style={{ color: "#08b30e" }} className="glyphicon glyphicon-ok"></i></td>
                                                        <td><i style={{ color: "#08b30e" }} className="glyphicon glyphicon-ok"></i></td>
                                                        <td><i style={{ color: "red" }} className="glyphicon glyphicon-remove"></i></td>
                                                        <td><i style={{ color: "#08b30e" }} className="glyphicon glyphicon-ok"></i></td>
                                                        <td><i style={{ color: "#08b30e" }} className="glyphicon glyphicon-ok"></i></td>
                                                        <td><i style={{ color: "red" }} className="glyphicon glyphicon-remove"></i></td>
                                                        <td><i style={{ color: "#08b30e" }} className="glyphicon glyphicon-ok"></i></td>
                                                        <td><i style={{ color: "#08b30e" }} className="glyphicon glyphicon-ok"></i></td>
                                                        <td><i style={{ color: "#08b30e" }} className="glyphicon glyphicon-ok"></i></td>
                                                        <td><i style={{ color: "#08b30e" }} className="glyphicon glyphicon-ok"></i></td>
                                                        <td><i style={{ color: "#08b30e" }} className="glyphicon glyphicon-ok"></i></td>
                                                        <td><i style={{ color: "#08b30e" }} className="glyphicon glyphicon-ok"></i></td>
                                                        <td><i style={{ color: "red" }} className="glyphicon glyphicon-remove"></i></td>
                                                        <td><i style={{ color: "#08b30e" }} className="glyphicon glyphicon-ok"></i></td>
                                                        <td><i style={{ color: "#08b30e" }} className="glyphicon glyphicon-ok"></i></td>
                                                        <td><i style={{ color: "red" }} className="glyphicon glyphicon-remove"></i></td>
                                                        <td><i style={{ color: "#08b30e" }} className="glyphicon glyphicon-ok"></i></td>
                                                        <td><i style={{ color: "#08b30e" }} className="glyphicon glyphicon-ok"></i></td>
                                                        <td><i style={{ color: "#08b30e" }} className="glyphicon glyphicon-ok"></i></td>
                                                        <td><i style={{ color: "#08b30e" }} className="glyphicon glyphicon-ok"></i></td>
                                                        <td><i style={{ color: "#08b30e" }} className="glyphicon glyphicon-ok"></i></td>
                                                        <td><i style={{ color: "#08b30e" }} className="glyphicon glyphicon-ok"></i></td>
                                                        <td><i style={{ color: "red" }} className="glyphicon glyphicon-remove"></i></td>
                                                        <td><i style={{ color: "#08b30e" }} className="glyphicon glyphicon-ok"></i></td>
                                                        <td><i style={{ color: "#08b30e" }} className="glyphicon glyphicon-ok"></i></td>
                                                    </tr>
                                                    <tr>
                                                        <td><i style={{ color: "#08b30e" }} className="glyphicon glyphicon-ok"></i></td>
                                                        <td><i style={{ color: "#08b30e" }} className="glyphicon glyphicon-ok"></i></td>
                                                        <td><i style={{ color: "red" }} className="glyphicon glyphicon-remove"></i></td>
                                                        <td><i style={{ color: "#08b30e" }} className="glyphicon glyphicon-ok"></i></td>
                                                        <td><i style={{ color: "#08b30e" }} className="glyphicon glyphicon-ok"></i></td>
                                                        <td><i style={{ color: "#08b30e" }} className="glyphicon glyphicon-ok"></i></td>
                                                        <td><i style={{ color: "#08b30e" }} className="glyphicon glyphicon-ok"></i></td>
                                                        <td><i style={{ color: "#08b30e" }} className="glyphicon glyphicon-ok"></i></td>
                                                        <td><i style={{ color: "red" }} className="glyphicon glyphicon-remove"></i></td>
                                                        <td><i style={{ color: "#08b30e" }} className="glyphicon glyphicon-ok"></i></td>
                                                        <td><i style={{ color: "#08b30e" }} className="glyphicon glyphicon-ok"></i></td>
                                                        <td><i style={{ color: "#08b30e" }} className="glyphicon glyphicon-ok"></i></td>
                                                        <td><i style={{ color: "#08b30e" }} className="glyphicon glyphicon-ok"></i></td>
                                                        <td><i style={{ color: "#08b30e" }} className="glyphicon glyphicon-ok"></i></td>
                                                        <td><i style={{ color: "#08b30e" }} className="glyphicon glyphicon-ok"></i></td>
                                                        <td><i style={{ color: "#08b30e" }} className="glyphicon glyphicon-ok"></i></td>
                                                        <td><i style={{ color: "#08b30e" }} className="glyphicon glyphicon-ok"></i></td>
                                                        <td><i style={{ color: "#08b30e" }} className="glyphicon glyphicon-ok"></i></td>
                                                        <td><i style={{ color: "#08b30e" }} className="glyphicon glyphicon-ok"></i></td>
                                                        <td><i style={{ color: "#08b30e" }} className="glyphicon glyphicon-ok"></i></td>
                                                        <td><i style={{ color: "#08b30e" }} className="glyphicon glyphicon-ok"></i></td>
                                                        <td><i style={{ color: "red" }} className="glyphicon glyphicon-remove"></i></td>
                                                        <td><i style={{ color: "#08b30e" }} className="glyphicon glyphicon-ok"></i></td>
                                                        <td><i style={{ color: "#08b30e" }} className="glyphicon glyphicon-ok"></i></td>
                                                        <td><i style={{ color: "#08b30e" }} className="glyphicon glyphicon-ok"></i></td>
                                                        <td><i style={{ color: "#08b30e" }} className="glyphicon glyphicon-ok"></i></td>
                                                        <td><i style={{ color: "#08b30e" }} className="glyphicon glyphicon-ok"></i></td>
                                                        <td><i style={{ color: "#08b30e" }} className="glyphicon glyphicon-ok"></i></td>
                                                        <td><i style={{ color: "#08b30e" }} className="glyphicon glyphicon-ok"></i></td>
                                                        <td><i style={{ color: "#08b30e" }} className="glyphicon glyphicon-ok"></i></td>
                                                        <td><i style={{ color: "#08b30e" }} className="glyphicon glyphicon-ok"></i></td>
                                                    </tr>

                                                    <tr>
                                                        <td><i style={{ color: "#08b30e" }} className="glyphicon glyphicon-ok"></i></td>
                                                        <td><i style={{ color: "#08b30e" }} className="glyphicon glyphicon-ok"></i></td>
                                                        <td><i style={{ color: "red" }} className="glyphicon glyphicon-remove"></i></td>
                                                        <td><i style={{ color: "#08b30e" }} className="glyphicon glyphicon-ok"></i></td>
                                                        <td><i style={{ color: "#08b30e" }} className="glyphicon glyphicon-ok"></i></td>
                                                        <td><i style={{ color: "#08b30e" }} className="glyphicon glyphicon-ok"></i></td>
                                                        <td><i style={{ color: "#08b30e" }} className="glyphicon glyphicon-ok"></i></td>
                                                        <td><i style={{ color: "#08b30e" }} className="glyphicon glyphicon-ok"></i></td>
                                                        <td><i style={{ color: "red" }} className="glyphicon glyphicon-remove"></i></td>
                                                        <td><i style={{ color: "#08b30e" }} className="glyphicon glyphicon-ok"></i></td>
                                                        <td><i style={{ color: "#08b30e" }} className="glyphicon glyphicon-ok"></i></td>
                                                        <td><i style={{ color: "red" }} className="glyphicon glyphicon-remove"></i></td>
                                                        <td><i style={{ color: "#08b30e" }} className="glyphicon glyphicon-ok"></i></td>
                                                        <td><i style={{ color: "#08b30e" }} className="glyphicon glyphicon-ok"></i></td>
                                                        <td><i style={{ color: "#08b30e" }} className="glyphicon glyphicon-ok"></i></td>
                                                        <td><i style={{ color: "#08b30e" }} className="glyphicon glyphicon-ok"></i></td>
                                                        <td><i style={{ color: "#08b30e" }} className="glyphicon glyphicon-ok"></i></td>
                                                        <td><i style={{ color: "#08b30e" }} className="glyphicon glyphicon-ok"></i></td>
                                                        <td><i style={{ color: "red" }} className="glyphicon glyphicon-remove"></i></td>
                                                        <td><i style={{ color: "#08b30e" }} className="glyphicon glyphicon-ok"></i></td>
                                                        <td><i style={{ color: "#08b30e" }} className="glyphicon glyphicon-ok"></i></td>
                                                        <td><i style={{ color: "red" }} className="glyphicon glyphicon-remove"></i></td>
                                                        <td><i style={{ color: "#08b30e" }} className="glyphicon glyphicon-ok"></i></td>
                                                        <td><i style={{ color: "#08b30e" }} className="glyphicon glyphicon-ok"></i></td>
                                                        <td><i style={{ color: "#08b30e" }} className="glyphicon glyphicon-ok"></i></td>
                                                        <td><i style={{ color: "#08b30e" }} className="glyphicon glyphicon-ok"></i></td>
                                                        <td><i style={{ color: "#08b30e" }} className="glyphicon glyphicon-ok"></i></td>
                                                        <td><i style={{ color: "#08b30e" }} className="glyphicon glyphicon-ok"></i></td>
                                                        <td><i style={{ color: "red" }} className="glyphicon glyphicon-remove"></i></td>
                                                        <td><i style={{ color: "#08b30e" }} className="glyphicon glyphicon-ok"></i></td>
                                                        <td><i style={{ color: "#08b30e" }} className="glyphicon glyphicon-ok"></i></td>
                                                    </tr>
                                                    <tr>
                                                        <td><i style={{ color: "#08b30e" }} className="glyphicon glyphicon-ok"></i></td>
                                                        <td><i style={{ color: "#08b30e" }} className="glyphicon glyphicon-ok"></i></td>
                                                        <td><i style={{ color: "red" }} className="glyphicon glyphicon-remove"></i></td>
                                                        <td><i style={{ color: "#08b30e" }} className="glyphicon glyphicon-ok"></i></td>
                                                        <td><i style={{ color: "#08b30e" }} className="glyphicon glyphicon-ok"></i></td>
                                                        <td><i style={{ color: "#08b30e" }} className="glyphicon glyphicon-ok"></i></td>
                                                        <td><i style={{ color: "#08b30e" }} className="glyphicon glyphicon-ok"></i></td>
                                                        <td><i style={{ color: "#08b30e" }} className="glyphicon glyphicon-ok"></i></td>
                                                        <td><i style={{ color: "red" }} className="glyphicon glyphicon-remove"></i></td>
                                                        <td><i style={{ color: "#08b30e" }} className="glyphicon glyphicon-ok"></i></td>
                                                        <td><i style={{ color: "#08b30e" }} className="glyphicon glyphicon-ok"></i></td>
                                                        <td><i style={{ color: "#08b30e" }} className="glyphicon glyphicon-ok"></i></td>
                                                        <td><i style={{ color: "#08b30e" }} className="glyphicon glyphicon-ok"></i></td>
                                                        <td><i style={{ color: "#08b30e" }} className="glyphicon glyphicon-ok"></i></td>
                                                        <td><i style={{ color: "#08b30e" }} className="glyphicon glyphicon-ok"></i></td>
                                                        <td><i style={{ color: "#08b30e" }} className="glyphicon glyphicon-ok"></i></td>
                                                        <td><i style={{ color: "#08b30e" }} className="glyphicon glyphicon-ok"></i></td>
                                                        <td><i style={{ color: "#08b30e" }} className="glyphicon glyphicon-ok"></i></td>
                                                        <td><i style={{ color: "#08b30e" }} className="glyphicon glyphicon-ok"></i></td>
                                                        <td><i style={{ color: "#08b30e" }} className="glyphicon glyphicon-ok"></i></td>
                                                        <td><i style={{ color: "#08b30e" }} className="glyphicon glyphicon-ok"></i></td>
                                                        <td><i style={{ color: "red" }} className="glyphicon glyphicon-remove"></i></td>
                                                        <td><i style={{ color: "#08b30e" }} className="glyphicon glyphicon-ok"></i></td>
                                                        <td><i style={{ color: "#08b30e" }} className="glyphicon glyphicon-ok"></i></td>
                                                        <td><i style={{ color: "#08b30e" }} className="glyphicon glyphicon-ok"></i></td>
                                                        <td><i style={{ color: "#08b30e" }} className="glyphicon glyphicon-ok"></i></td>
                                                        <td><i style={{ color: "#08b30e" }} className="glyphicon glyphicon-ok"></i></td>
                                                        <td><i style={{ color: "#08b30e" }} className="glyphicon glyphicon-ok"></i></td>
                                                        <td><i style={{ color: "#08b30e" }} className="glyphicon glyphicon-ok"></i></td>
                                                        <td><i style={{ color: "#08b30e" }} className="glyphicon glyphicon-ok"></i></td>
                                                        <td><i style={{ color: "#08b30e" }} className="glyphicon glyphicon-ok"></i></td>
                                                    </tr>

                                                </tbody>

                                            </table>
                                        </div>

                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export { Timekeeping };