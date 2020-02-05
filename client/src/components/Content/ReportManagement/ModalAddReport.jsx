import React, { Component } from 'react';
import { connect } from 'react-redux';
import { taskTemplateActions, userActions } from '../../../redux-actions/CombineActions';
// import { ModalViewReport } from './ModalViewReport';

class ModalAddReport extends Component {
    componentDidMount() {
        // get id current role
        this.props.getTaskTemplateByUser(localStorage.getItem('id'), 1, "[]");
        // Lấy tất cả nhân viên trong công ty
        this.props.getAllUserSameDepartment(localStorage.getItem("currentRole"));
        // load js for form
        this.handleLoadjs();
    }

    // Load js for form
    handleLoadjs = () => {
        let script = document.createElement('script');
        script.src = 'main/js/CoCauToChuc.js';
        script.async = true;
        script.defer = true;
        document.body.appendChild(script);
    }
    constructor(props) {
        super(props);
        this.state = {
            newReport: {
                name: "",
                description: ""
            },
            submitted: false,
            currentRole: localStorage.getItem('currentRole'),
        };
    }
    render() {
        var userdepartments, listTaskTemplate;
        const { newReport, submitted } = this.state;
        const { tasktemplates, user } = this.props;
        if (tasktemplates.items) {
            listTaskTemplate = tasktemplates.items;
        }
        if (user.userdepartments) userdepartments = user.userdepartments;
        return (
            <div className="modal modal-full fade" id={`addNewReport`} tabIndex={-1} role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                <div className="modal-dialog-full">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button type="button" className="close" data-dismiss="modal">
                                <span aria-hidden="true">×</span>
                                <span className="sr-only">Close</span>
                            </button>
                            <h3 className="modal-title" id="myModalLabel"><b>Thêm báo cáo mới</b></h3>
                        </div>
                        <div className="modal-body" >
                            <form className="form-horizontal">
                                <label style={{ width: '100%', textAlign: 'left', fontSize: "medium" }}>Thông tin chung</label>
                                <div className="col-sm-8">
                                    <div className={'form-group has-feedback'}>
                                        <label className="col-sm-4 control-label" style={{ width: '100%', textAlign: 'left' }}>Tên báo cáo*</label>
                                        <div className="col-sm-10" style={{ width: '100%' }}>
                                            <input type="Name" className="form-control" placeholder="Tên công việc" ref={input => this.name = input} />
                                        </div>
                                        {submitted && !newReport.name &&
                                            <div className="col-sm-4 help-block">Hãy điền tên báo cáo</div>
                                        }
                                    </div>
                                    <div className={'form-group has-feedback'}>
                                        <label className="col-sm-4 control-label" style={{ width: '100%', textAlign: 'left' }}>Mô tả báo cáo</label>
                                        <div className="col-sm-10" style={{ width: '100%' }}>
                                            <textarea type="Description" className="form-control" name="Mô tả công việc" placeholder="Mô tả công việc" ref={input => this.description = input} />
                                        </div>
                                        {submitted && !newReport.description &&
                                            <div className="col-sm-4 help-block">Hãy điền mô tả báo cáo</div>
                                        }
                                    </div>
                                </div>
                                <label style={{ width: '100%', textAlign: 'left', fontSize: "medium" }}>Điều kiện lọc</label>
                                <div className="col-sm-6">
                                    <div className={'form-group has-feedback'}>
                                        <label className="col-sm-4 control-label" style={{ width: '100%', textAlign: 'left' }}>Người thực hiện*</label>
                                        <div className="col-sm-8" style={{ width: '100%' }}>
                                            <select multiline="true" className="form-control select2" multiple="multiple" ref="responsible" data-placeholder="Chọn người thực hiện" style={{ width: '100%' }}>
                                                {userdepartments &&
                                                    userdepartments.map(item =>
                                                        <optgroup label={item.id_role.name} key={item.id_role._id}>
                                                            {item.id_user.map(x => {
                                                                return <option key={x._id} value={x._id}>{x.name}</option>
                                                            })}
                                                        </optgroup>)
                                                }
                                            </select>
                                        </div>
                                        {/* {submitted && newTask.responsible.length === 0 &&
                                                <div className="col-sm-4 help-block">Hãy chọn người thực hiện</div>
                                            } */}
                                    </div>
                                    <div className={'form-group has-feedback'}>
                                        <label className="col-sm-5 control-label" style={{ width: '100%', textAlign: 'left' }}>Người phê duyệt*</label>
                                        <div className="col-sm-10" style={{ width: '100%' }}>
                                            <select className="form-control select2" multiple="multiple" ref="accounatable" data-placeholder="Chọn người thực hiện" style={{ width: '100%' }}>
                                                {userdepartments &&
                                                    userdepartments.map(item =>
                                                        <optgroup label={item.id_role.name} key={item.id_role._id}>
                                                            {item.id_user.map(x => {
                                                                return <option key={x._id} value={x._id}>{x.name}</option>
                                                            })}
                                                        </optgroup>)
                                                }
                                            </select>
                                        </div>
                                    </div>
                                    <div className="form-group  has-feedback">
                                        <label className="col-sm-4 control-label" style={{ width: '100%', textAlign: 'left' }}>Đặc thù công việc</label>
                                        <div className="col-sm-10" style={{ width: '100%' }}>
                                            <select className="form-control" style={{ width: '100%' }}>
                                                <option>Tất cả</option>
                                                <option>Đã hoàn thành</option>
                                                <option>Đang thực hiện</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="form-group has-feedback">
                                        <label className="col-sm-4 control-label" style={{ width: '100%', textAlign: 'left' }}>Tính thời gian theo ngày:</label>
                                        <div className="col-sm-10" style={{ width: '100%' }}>
                                            <select className="form-control" style={{ width: '100%' }}>
                                                <option>Bắt đầu công việc</option>
                                                <option>Kết thúc công việc</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="form-group has-feedback" style={{ width: '100%', marginLeft: "0px" }}>
                                        <label className="col-sm-4 control-label" style={{ width: '100%', textAlign: 'left', marginLeft: "-14px" }}>Thống kê từ ngày:</label>
                                        <div className={'input-group date has-feedback col-sm-10'} style={{ width: '100%' }}>
                                            <div className="input-group-addon">
                                                <i className="fa fa-calendar" />
                                            </div>
                                            <input type="text" className="form-control" autoComplete="off" ref={input => this.startdate = input} name="time" id="datepicker1" data-date-format="dd-mm-yyyy" />
                                        </div>
                                    </div>
                                    <div className="form-group has-feedback">
                                        <label className="col-sm-4 control-label" style={{ width: '100%', textAlign: 'left' }}>Tần suất:</label>
                                        <div className="col-sm-10" style={{ width: '100%' }}>
                                            <select className="form-control" style={{ width: '100%' }}>
                                                <option>1 tuần</option>
                                                <option>2 tuần</option>
                                                <option>3 tuần</option>
                                                <option>Tháng</option>
                                                <option>Quý</option>
                                                <option>Năm</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <label style={{ width: '100%', textAlign: 'left', fontSize: "medium" }}>Cấu hình báo cáo</label>
                                <div className="col-sm-12">
                                    <div className="form-group has-feedback">
                                        <label className="col-sm-4 control-label" style={{ width: '100%', textAlign: 'left' }}>Mẫu công việc</label>
                                        <div className="col-sm-10" style={{ width: '100%' }}>
                                            {
                                                (typeof listTaskTemplate !== "undefined" && listTaskTemplate.length !== 0) ?
                                                    <select className="form-control" style={{ width: '100%' }} ref={input => this.tasktemplate = input}>
                                                        <option value="">--Hãy chọn mẫu công việc--</option>
                                                        {
                                                            listTaskTemplate.map(item => {
                                                                return <option key={item.resource._id} value={item.resource._id}>{item.resource.name}</option>
                                                            })
                                                        }
                                                    </select> : null
                                            }
                                        </div>
                                    </div>
                                    <div className="col-sm-12">
                                        <table className="table table-bordered table-striped" id="myTable">
                                            <thead>
                                                <tr>
                                                    <th>Trường thông tin</th>
                                                    <th>Kiểu dữ liệu</th>
                                                    <th>Điều kiện lọc</th>
                                                    <th>Hiển thị trong báo cáo?</th>
                                                    <th>Hệ số</th>
                                                    <th>Tên mới</th>
                                                    <th>Cách tính</th>
                                                    <th>Dạng biểu đồ</th>
                                                </tr>
                                            </thead>
                                            <tbody className="task-table">
                                                <tr>
                                                    <td>ĐTĐG</td>
                                                    <td>Số</td>
                                                    <td><input placeholder="ĐTĐG>=30" style={{ width: "100%" }}></input></td>
                                                    <td style={{ textAlign: "center" }}><input type="checkbox" /></td>
                                                    <td><input placeholder="0.01" style={{ width: "100%" }}></input></td>
                                                    <td><input placeholder="Điểm tự đánh giá" style={{ width: '100%' }}></input></td>
                                                    <td>
                                                        <select className="form-control" style={{ width: '100%' }}>
                                                            <option>Tổng</option>
                                                            <option>Trung bình</option>
                                                        </select>
                                                    </td>
                                                    <td>
                                                        <select className="form-control" style={{ width: '100%' }}>
                                                            <option>Tròn</option>
                                                            <option>Cột</option>
                                                            <option>Đường</option>
                                                        </select>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>ĐTĐ</td>
                                                    <td>Số</td>
                                                    <td><input placeholder="ĐTĐ>=30" style={{ width: "100%" }}></input></td>
                                                    <td style={{ textAlign: "center" }}><input type="checkbox" /></td>
                                                    <td><input placeholder="0.01" style={{ width: "100%" }}></input></td>
                                                    <td><input placeholder="Điểm hệ thống tính" style={{ width: '100%' }}></input></td>
                                                    <td>
                                                        <select className="form-control" style={{ width: '100%' }}>
                                                            <option>Tổng</option>
                                                            <option>Trung bình</option>
                                                        </select>
                                                    </td>
                                                    <td>
                                                        <select className="form-control" style={{ width: '100%' }}>
                                                            <option>Tròn</option>
                                                            <option>Cột</option>
                                                            <option>Đường</option>
                                                        </select>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>ĐCV</td>
                                                    <td>Số</td>
                                                    <td><input placeholder="ĐTĐG>=30" style={{ width: "100%" }}></input></td>
                                                    <td style={{ textAlign: "center" }}><input type="checkbox" /></td>
                                                    <td><input placeholder="0.01" style={{ width: "100%" }}></input></td>
                                                    <td><input placeholder="Điểm quản lý đánh giá" style={{ width: '100%' }}></input></td>
                                                    <td>
                                                        <select className="form-control" style={{ width: '100%' }}>
                                                            <option>Tổng</option>
                                                            <option>Trung bình</option>
                                                        </select>
                                                    </td>
                                                    <td>
                                                        <select className="form-control" style={{ width: '100%' }}>
                                                            <option>Tròn</option>
                                                            <option>Cột</option>
                                                            <option>Đường</option>
                                                        </select>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button className="btn btn-success">Lưu</button>
                            <button type="cancel" data-toggle="modal" data-target="#viewreporttask" data-backdrop="static" data-keyboard="false" className="btn btn-success">Xem</button>
                            {/* <ModalViewReport id=""/> */}
                        </div>
                    </div>
                </div>
            </div >
        );
    }
}

function mapState(state) {
    const { tasktemplates, tasks, user } = state;
    return { tasktemplates, tasks, user };
}

const actionCreators = {
    getTaskTemplateByUser: taskTemplateActions.getAllTaskTemplateByUser,
    getAllUserSameDepartment: userActions.getAllUserSameDepartment
};

const connectedModalAddReport = connect(mapState, actionCreators)(ModalAddReport);
export { connectedModalAddReport as ModalAddReport };