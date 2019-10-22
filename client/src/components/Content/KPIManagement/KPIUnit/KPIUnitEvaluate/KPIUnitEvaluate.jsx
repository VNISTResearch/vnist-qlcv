import React, { Component } from 'react';
import { ModalDataResultTask } from './ModalDataResultTask';

class KPIUnitEvaluate extends Component {
    render() {
        return (
            <div className="table-wrapper">
                <div className="content-wrapper">
                    <section className="content-header">
                        <h1>
                            <b>Dữ liệu KPI đơn vị</b>
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
                                        <h3 className="box-title"><b>Bảng danh sách dữ liệu KPI đơn vị</b></h3>
                                    </div>
                                    <div className="box-body">
                                        <table id="example1" className="table table-bordered table-striped">
                                            <thead>
                                                <tr>
                                                    <th>Stt</th>
                                                    <th>Tên nhân viên</th>
                                                    <th>Mục tiêu số 1</th>
                                                    <th>Mục tiêu số 2</th>
                                                    <th>Mục tiêu số 3</th>
                                                    <th>Mục tiêu số 4</th>
                                                    <th>Tổng</th>
                                                    <th>Hành động</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>1</td>
                                                    <td>Nguyễn Văn A</td>
                                                    <td>20</td>
                                                    <td>25</td>
                                                    <td>30</td>
                                                    <td>20</td>
                                                    <td>95</td>
                                                    <td>
                                                        <a href="#myModalHorizontal1" data-toggle="modal" className="view" title="View" data-target="#myModalHorizontal1"><i className="material-icons">visibility</i></a>
                                                        <a href="#abc" className="delete" title="Delete" data-toggle="tooltip"><i className="material-icons"></i></a>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>2</td>
                                                    <td>Bùi Văn B</td>
                                                    <td>20</td>
                                                    <td>20</td>
                                                    <td>30</td>
                                                    <td>20</td>
                                                    <td>90</td>
                                                    <td>
                                                        <a href="#myModalHorizontal2" data-toggle="modal" className="view" title="View" data-target="#myModalHorizontal2"><i className="material-icons">visibility</i></a>
                                                        <a href="#abc" className="delete" title="Delete" data-toggle="tooltip"><i className="material-icons"></i></a>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>3</td>
                                                    <td>Lê Thị C</td>
                                                    <td>15</td>
                                                    <td>20</td>
                                                    <td>30</td>
                                                    <td>20</td>
                                                    <td>85</td>
                                                    <td>
                                                        <a href="#myModalHorizontal3" data-toggle="modal" className="view" title="View" data-target="#myModalHorizontal3"><i className="material-icons">visibility</i></a>
                                                        <a href="#abc" className="delete" title="Delete" data-toggle="tooltip"><i className="material-icons"></i></a>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>4</td>
                                                    <td>Phan Thanh D</td>
                                                    <td>15</td>
                                                    <td>30</td>
                                                    <td>30</td>
                                                    <td>20</td>
                                                    <td>95</td>
                                                    <td>
                                                        <a href="#myModalHorizontal4" data-toggle="modal" className="view" title="View" data-target="#myModalHorizontal4"><i className="material-icons">visibility</i></a>
                                                        <a href="#abc" className="delete" title="Delete" data-toggle="tooltip"><i className="material-icons"></i></a>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>5</td>
                                                    <td>Nguyễn Thị E</td>
                                                    <td>15</td>
                                                    <td>30</td>
                                                    <td>30</td>
                                                    <td>20</td>
                                                    <td>95</td>
                                                    <td>
                                                        <a href="#myModalHorizontal5" data-toggle="modal" className="view" title="View" data-target="#myModalHorizontal5"><i className="material-icons">visibility</i></a>
                                                        <a href="#abc" className="delete" title="Delete" data-toggle="tooltip"><i className="material-icons"></i></a>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>6</td>
                                                    <td>Đinh Thanh F</td>
                                                    <td>15</td>
                                                    <td>20</td>
                                                    <td>30</td>
                                                    <td>20</td>
                                                    <td>85</td>
                                                    <td>
                                                        <a href="#myModalHorizontal6" data-toggle="modal" className="view" title="View" data-target="#myModalHorizontal6"><i className="material-icons">visibility</i></a>
                                                        <a href="#abc" className="delete" title="Delete" data-toggle="tooltip"><i className="material-icons"></i></a>
                                                    </td>
                                                </tr>
                                            </tbody>
                                            {/* <tfoot>
                                                <tr>
                                                    <th>Stt</th>
                                                    <th>Tên nhân viên</th>
                                                    <th>Mục tiêu số 1</th>
                                                    <th>Mục tiêu số 2</th>
                                                    <th>Mục tiêu số 3</th>
                                                    <th>Mục tiêu số 4</th>
                                                    <th>Tổng</th>
                                                    <th>Hành động</th>
                                                </tr>
                                            </tfoot> */}
                                        </table>
                                        <ModalDataResultTask index="1" />
                                        <ModalDataResultTask index="2" />
                                        <ModalDataResultTask index="3" />
                                        <ModalDataResultTask index="4" />
                                        <ModalDataResultTask index="5" />
                                        <ModalDataResultTask index="6" />
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

export { KPIUnitEvaluate };