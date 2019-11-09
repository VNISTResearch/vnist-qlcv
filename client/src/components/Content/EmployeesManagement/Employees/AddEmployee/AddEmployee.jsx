import React, { Component } from 'react';
import { connect } from 'react-redux';
import { employeeActions } from '../../../../../redux-actions/EmployeeActions';
import { ToastContainer, toast } from 'react-toastify';
import './addemployee.css';
import 'react-toastify/dist/ReactToastify.css';
class AddEmployee extends Component {
    componentDidMount() {

    }
    constructor(props) {
        super(props);
        this.state = {
            adding: false,
            employeeNew: {
                avatar: 'adminLTE/dist/img/avatar5.png',
                gender: "Nam",
                relationship: "Độc thân",
                department: "Phòng nhân sự",
                cultural: "12/12",
                nameBank: "Techcombank"
            }

        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleUpload = this.handleUpload.bind(this);
        this.handleChangeEmployeeNumber = this.handleChangeEmployeeNumber.bind(this);
    }

    // function upload avatar 
    handleUpload(event) {
        var avatar = event.target.value
        this.setState({
            employeeNew: {
                avatar: avatar,
            }

        })
    }

    // function save data of all fields of the target of employee
    handleChange(event) {
        const { name, value } = event.target;
        const { employeeNew } = this.state;
        this.setState({
            employeeNew: {
                ...employeeNew,
                [name]: value
            }
        });
    }
    // 
    handleChangeEmployeeNumber(e) {
        const { name, value } = e.target;
        const { employeeNew } = this.state;
        this.props.getInformationEmployee(value);
        this.setState({
            employeeNew: {
                ...employeeNew,
                [name]: value
            }
        });

    }

    // function: notification the result of an action
    notifysuccess = (message) => toast(message);
    notifyerror = (message) => toast.error(message);
    notifywarning = (message) => toast.warning(message);

    // function add new employee
    handleSubmit(events) {
        events.preventDefault();
        var { employee } = this.props.employees;
        var employeeNumber = employee.map(x => x.employeeNumber).toString();
        const { employeeNew } = this.state;

        // kiểm tra việc nhập các trường bắt buộc
        if (!employeeNew.employeeNumber) {
            this.notifyerror("Bạn chưa nhập mã nhân viên");
        } else if (employeeNumber) {
            this.notifyerror("Mã nhân viên đã tồn tại");
        } else if (!employeeNew.fullName) {
            this.notifyerror("Bạn chưa nhập tên nhân viên");
        } else if (!employeeNew.MSCC) {
            this.notifyerror("Bạn chưa nhập mã chấm công");
        } else if (!employeeNew.phoneNumber) {
            this.notifyerror("Bạn chưa nhập số điện thoại");
        } else if (!employeeNew.nowAddress) {
            this.notifyerror("Bạn chưa nhập nơi ở hiện tại");
        } else if (!employeeNew.MST) {
            this.notifyerror("Bạn chưa nhập mã số thuế");
        } else if (!employeeNew.ATM) {
            this.notifyerror("Bạn chưa nhập số tài khoản");
        } else if (!employeeNew.CMND) {
            this.notifyerror("Bạn chưa nhập số CMND/ Hộ chiếu");
        } else if (!employeeNew.dateCMND) {
            this.notifyerror("Bạn chưa nhập ngày cấp CMND/ Hộ chiếu");
        } else if (!employeeNew.addressCMND) {
            this.notifyerror("Bạn chưa nhập nơi cấp CMND/ Hộ chiếu");
        } else {
            this.props.addNewEmployee(employeeNew);
            this.notifysuccess("Thêm thành công");
        }
    }

    render() {
        console.log(this.state);

        return (
            <div className="content-wrapper">
                {/* Content Header (Page header) */}
                <section className="content-header">
                    <h1>
                        Thêm nhân viên
                    </h1>
                    <ol className="breadcrumb">
                        <li><a href="#abc"><i className="fa fa-dashboard" /> Home</a></li>
                        <li className="active">Quản lý nhân sự</li>
                    </ol>
                </section>
                <section className="content">
                    <div className="row">
                        {/* left column */}
                        <div className="col-md-12">
                            <form id="form">
                                {/* general form elements */}
                                <div className="box box-default">
                                    <div className="box-body">
                                        <div className="col-md-12">
                                            {/* <p>(<span className="required">&#42;</span>) là các thông tin bắt buộc phải nhập</p> */}
                                            <h3 className="box-title">Thông tin cơ bản</h3>
                                            <hr className="hr" />
                                            <div className="col-md-3">
                                                <div className="form-group">
                                                    <img className="attachment-img avarta" src={this.state.employeeNew.avatar} alt="Attachment" />
                                                    <div className="upload btn btn-default" style={{ marginLeft: 55 }}>
                                                        Chọn ảnh
                                                        <input className="upload" type="file" name="file" onChange={this.handleUpload} />
                                                    </div>


                                                </div>
                                            </div>
                                            <div className=" col-md-4">
                                                <div className="form-group">
                                                    <label htmlFor="employeeNumber">Mã nhân viên:<span className="required">&#42;</span></label>
                                                    <input type="text" className="form-control" id="employeeNumber" name="employeeNumber" placeholder="Mã số nhân viên" onChange={this.handleChangeEmployeeNumber} />
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="fullname">Họ và tên:<span className="required">&#42;</span></label>
                                                    <input type="text" className="form-control" name="fullName" id="fullname" placeholder="Họ và tên" onChange={this.handleChange} />
                                                </div>
                                                <div className="form-group">
                                                    <label style={{ display: 'block', paddingBottom: 4 }}>Giới tính:<span className="required">&#42;</span></label>
                                                    <input type="radio" name="gender" value="Nam" className="" defaultChecked style={{ marginLeft: 30, marginRight: 5 }} onChange={this.handleChange} />
                                                    <label>Nam</label>
                                                    <input type="radio" name="gender" value="Nữ" className="" style={{ marginLeft: 90, marginRight: 5 }} onChange={this.handleChange} />
                                                    <label>Nữ</label>
                                                </div>
                                                <div className="form-group" style={{ paddingTop: 3 }}>
                                                    <label htmlFor="phoneNumber">Số điện thoại:<span className="required">&#42;</span></label>
                                                    <input type="number" className="form-control" id="phoneNumber" name="phoneNumber" onChange={this.handleChange} />

                                                </div>
                                            </div>
                                            <div className=" col-md-4">
                                                <div className="form-group">
                                                    <label htmlFor="MSCC">Mã số chấm công:<span className="required">&#42;</span></label>
                                                    <input type="text" className="form-control" id="MSCC" placeholder="Mã số chấm công" name="MSCC" onChange={this.handleChange} />
                                                </div>
                                                <div className="form-group">
                                                    <label>Bộ phận:<span className="required">&#42;</span></label>
                                                    <select className="form-control" name="department" onChange={this.handleChange}>
                                                        <option>Phòng nhân sự</option>
                                                        <option>Phòng hành chính</option>
                                                        <option>Phòng kinh doanh</option>
                                                        <option>Phòng Marketing</option>
                                                    </select>
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="emailCompany">Email:</label>
                                                    <input type="email" className="form-control" id="emailCompany" placeholder="Email công ty" name="emailCompany" onChange={this.handleChange} />
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="nowAddress">Nơi ở hiện tại:<span className="required">&#42;</span></label>
                                                    <input type="text" className="form-control" id="nowAddress" name="nowAddress" onChange={this.handleChange} />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <h3 className="box-title">Thông tin cá nhân</h3>
                                            <hr className="hr" />
                                            <div className="col-md-4">
                                                <div className="form-group">
                                                    <label htmlFor="MST">Mã số thuế:<span className="required">&#42;</span></label>
                                                    <input type="number" className="form-control" id="MST" name="MST" onChange={this.handleChange} />
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="ATM">Số tài khoản ngân hàng:<span className="required">&#42;</span></label>
                                                    <input type="text" className="form-control" id="ATM" name="ATM" onChange={this.handleChange} />
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="CMND">Số CMND/Hộ chiếu:<span className="required">&#42;</span></label>
                                                    <input type="number" className="form-control" id="CMND" name="CMND" onChange={this.handleChange} />
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="brithday">Ngày sinh:</label>
                                                    <input type="Date" className="form-control" id="brithday" name="brithday" onChange={this.handleChange} />
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="localAddress">Hộ khẩu thường trú:</label>
                                                    <input type="text" className="form-control" id="localAddress" name="localAddress" onChange={this.handleChange} />
                                                </div>
                                            </div>
                                            <div className="col-md-4">
                                                <div className="form-group">
                                                    <label htmlFor="numberBHYT">Mã số thẻ BHYT:</label>
                                                    <input type="text" className="form-control" id="numberBHYT" name="numberBHYT" onChange={this.handleChange} />
                                                </div>
                                                <div className="form-group">
                                                    <label>Tên ngân hàng:<span className="required">&#42;</span></label>
                                                    <select className="form-control" name="nameBank" onChange={this.handleChange}>
                                                        <option>Techcombank</option>
                                                        <option>Vietinbank</option>
                                                        <option>Vietcombank</option>
                                                        <option>BIDV</option>
                                                        <option>TPBank</option>
                                                        <option>VPBank</option>
                                                        <option>Sacombank</option>
                                                        <option>Agribank </option>
                                                        <option>ABBANK</option>
                                                        <option>VIB</option>
                                                        <option>MB</option>
                                                        <option>ACB</option>
                                                        <option>MSB</option>
                                                    </select>
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="dateCMND">Ngày cấp:<span className="required">&#42;</span></label>
                                                    <input type="Date" className="form-control" id="dateCMND" name="dateCMND" onChange={this.handleChange} />
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="birthplace">Nơi sinh:</label>
                                                    <input type="text" className="form-control" id="birthplace" name="birthplace" onChange={this.handleChange} />
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="national">Dân tộc:</label>
                                                    <input type="text" className="form-control" id="national" name="national" onChange={this.handleChange} />
                                                </div>
                                            </div>
                                            <div className="col-md-4">
                                                <div className="form-group" style={{ marginTop: "49%", paddingTop: 1 }}>
                                                    <label htmlFor="addressCMND">Nơi cấp:<span className="required">&#42;</span></label>
                                                    <input type="text" className="form-control" id="addressCMND" name="addressCMND" onChange={this.handleChange} />
                                                </div>
                                                <div className="form-group">
                                                    <label style={{ display: 'block', paddingBottom: 7 }}>Tình trạng hôn nhân:</label>
                                                    <input type="radio" name="relationship" value="Độc thân" className="" defaultChecked style={{ marginLeft: 30, marginRight: 5 }} onChange={this.handleChange} />
                                                    <label> Độc thân</label>
                                                    <input type="radio" name="relationship" value="Đã kết hôn" className="" style={{ marginLeft: 90, marginRight: 5 }} onChange={this.handleChange} />
                                                    <label> Đã kết hôn</label>
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="religion">Tôn giáo:</label>
                                                    <input type="text" className="form-control" id="religion" name="religion" onChange={this.handleChange} />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <h3 className="box-title">Trình độ học vấn</h3>
                                            <hr className="hr" />
                                            <div className="form-group">
                                                <label>Trình độ văn hoá:<span className="required">&#42;</span></label>
                                                <select className="form-control" name="cultural" onChange={this.handleChange}>
                                                    <option>12/12</option>
                                                    <option>11/12</option>
                                                    <option>10/12</option>
                                                    <option>9/12</option>
                                                </select>
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="foreignLanguage ">Trình độ ngoại ngữ:</label>
                                                <input type="text" className="form-control" id="foreignLanguage" name="foreignLanguage" onChange={this.handleChange} />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="educational ">Trình độ chuyên môn:</label>
                                                <input type="text" className="form-control" id="educational" name="educational" onChange={this.handleChange} />
                                            </div>
                                            <div className="form-group">
                                                <label>Bằng cấp/Chứng chỉ:</label>
                                                <table className="table" id="certificate" style={{ marginBottom: 0 }}>
                                                    <thead>
                                                        <tr>
                                                            <th>Tên bằng cấp( chứng chỉ)</th>
                                                            <th>File đính kèm</th>
                                                            <th style={{ width: '12%' }}>Hoạt động</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                    </tbody>
                                                    <tfoot>
                                                        <tr>
                                                            <td colSpan={2} />
                                                            <td><button type="button" title="Thêm mới" className="btn btn-success add-new1"><i className="fa fa-plus" /></button></td>
                                                        </tr>
                                                    </tfoot>
                                                </table>
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <h3 className="box-title">Kinh nghiệm làm việc</h3>
                                            <hr className="hr" />
                                            <table className="table" id="experience" style={{ marginBottom: 0 }}>
                                                <thead>
                                                    <tr>
                                                        <th style={{ width: '14%' }}>Từ tháng/năm</th>
                                                        <th style={{ width: '14%' }}>Đến tháng/năm</th>
                                                        <th>Đơn vị công tác</th>
                                                        <th>Chức vụ</th>
                                                        <th style={{ width: '12%' }}>Hoạt động</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                </tbody>
                                                <tfoot>
                                                    <tr>
                                                        <td colSpan={4} />
                                                        <td><button type="button" title="Thêm mới" className="btn btn-success add-new2"><i className="fa fa-plus" /></button></td>
                                                    </tr>
                                                </tfoot>
                                            </table>
                                        </div>
                                    </div>
                                    <div className="box-footer col-md-12">
                                        <button type="submit" title="xoá tất cả các trường" className="btn btn-primary col-md-2 pull-right btnuser"  >Xoá trắng</button>
                                        <button type="submit" title="Thêm nhân viên mới" className="btn btn-success col-md-2 pull-right btnuser" onClick={this.handleSubmit} htmlFor="form">Thêm nhân viên</button>
                                    </div>
                                </div>
                            </form>
                            <ToastContainer />
                        </div>
                    </div>
                </section></div>
        );
    };
}

function mapState(state) {
    const { employees } = state;
    return { employees };
};

const actionCreators = {
    addNewEmployee: employeeActions.addNewEmployee,
    getInformationEmployee: employeeActions.getInformationEmployee,
};

const connectedAddEmplyee = connect(mapState, actionCreators)(AddEmployee);
export { connectedAddEmplyee as AddEmployee };