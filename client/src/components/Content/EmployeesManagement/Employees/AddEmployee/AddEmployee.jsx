import React, { Component } from 'react';
import { connect } from 'react-redux';
import { employeeActions } from '../../../../../redux-actions/EmployeeActions';
import { ToastContainer, toast } from 'react-toastify';
import './addemployee.css';
import 'react-toastify/dist/ReactToastify.css';
class AddEmployee extends Component {
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
                nameBank: "Techcombank",
                certificate: [],
                experience: [],
                contract: [],
                insurrance: [],
                course: []
            }

        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleUpload = this.handleUpload.bind(this);
        this.handleChangeEmployeeNumber = this.handleChangeEmployeeNumber.bind(this);
        this.handleAddNew = this.handleAddNew.bind(this);
        this.handleChangeCertificate = this.handleChangeCertificate.bind(this);
        this.handleChangeExperience = this.handleChangeExperience.bind(this);
        this.handleChangeContract = this.handleChangeContract.bind(this);
        this.handleChangeInsurrance = this.handleChangeInsurrance.bind(this);
        this.handleChangeCourse = this.handleChangeCourse.bind(this);
    }

    // function: notification the result of an action
    notifysuccess = (message) => toast(message);
    notifyerror = (message) => toast.error(message);
    notifywarning = (message) => toast.warning(message);

    // function upload avatar 
    handleUpload(event) {
        var file = event.target.files[0];
        var fileLoad = new FileReader();
        const { employeeNew } = this.state;
        fileLoad.readAsDataURL(file);
        fileLoad.onload = () => {
            this.setState({
                employeeNew: {
                    ...employeeNew,
                    avatar: fileLoad.result
                }
            })
        };
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
    // function save EmployeeNumber
    handleChangeEmployeeNumber(event) {
        const { name, value } = event.target;
        const { employeeNew } = this.state;
        this.props.getInformationEmployee(value);
        this.setState({
            employeeNew: {
                ...employeeNew,
                [name]: value
            }
        });

    }
    // function add new fields certificate, experience, contract, insurrance, course
    handleAddNew(event) {
        var check;
        const { employeeNew } = this.state;
        event.preventDefault();
        if (event.target.id === "certificate") {
            if (this.state.employeeNew.certificate !== []) {
                check = this.state.employeeNew.certificate.map(function (x, check) {
                    if (x.nameCertificate === "" || x.urlCertificate === "") check = true;
                    return check;
                })
                if (check.toString() !== 'true') {
                    this.setState({
                        employeeNew: {
                            ...employeeNew,
                            certificate: [...employeeNew.certificate, { nameCertificate: "", urlCertificate: "" }]
                        }
                    })
                } else this.notifywarning("Hãy nhập đủ các trường Bằng cấp/ Chứng chỉ");
            } else {
                this.setState({
                    employeeNew: {
                        ...employeeNew,
                        certificate: [...employeeNew.certificate, { nameCertificate: "", urlCertificate: "" }]
                    }
                })
            }
        }
        if (event.target.id === "experience") {
            if (this.state.employeeNew.experience !== []) {
                check = this.state.employeeNew.experience.map(function (x, check) {
                    if (x.startDate === "" || x.endDate === "" || x.unit === "" || x.position === "") check = true;
                    return check;
                })
                if (check.toString() !== 'true') {
                    this.setState({
                        employeeNew: {
                            ...employeeNew,
                            experience: [...employeeNew.experience, { startDate: "", endDate: "", unit: "", position: "" }]
                        }
                    })
                } else this.notifywarning("Hãy nhập đủ các trường Kinh nghiệm làm việc");
            } else {
                this.setState({
                    employeeNew: {
                        ...employeeNew,
                        experience: [...employeeNew.experience, { startDate: "", endDate: "", unit: "", position: "" }]
                    }
                })
            }
        }
        if (event.target.id === "contract") {
            if (this.state.employeeNew.contract !== []) {
                check = this.state.employeeNew.contract.map(function (x, check) {
                    if (x.startDate === "" || x.endDate === "" || x.urlContract === "") check = true;
                    return check;
                })
                if (check.toString() !== 'true') {
                    this.setState({
                        employeeNew: {
                            ...employeeNew,
                            contract: [...employeeNew.contract, { startDate: "", endDate: "", urlContract: "" }]
                        }
                    })
                } else this.notifywarning("Hãy nhập đủ các trường Hợp đồng lao động");
            } else {
                this.setState({
                    employeeNew: {
                        ...employeeNew,
                        contract: [...employeeNew.contract, { startDate: "", endDate: "", urlContract: "" }]
                    }
                })
            }
        }
        if (event.target.id === "insurrance") {
            if (this.state.employeeNew.insurrance !== []) {
                check = this.state.employeeNew.insurrance.map(function (x, check) {
                    if (x.startDate === "" || x.endDate === "" || x.cost === "") check = true;
                    return check;
                })
                if (check.toString() !== 'true') {
                    this.setState({
                        employeeNew: {
                            ...employeeNew,
                            insurrance: [...employeeNew.insurrance, { startDate: "", endDate: "", cost: "" }]
                        }
                    })
                } else this.notifywarning("Hãy nhập đủ các trường Bảo hiểm y tế");
            } else {
                this.setState({
                    employeeNew: {
                        ...employeeNew,
                        insurrance: [...employeeNew.insurrance, { startDate: "", endDate: "", cost: "" }]
                    }
                })
            }
        }
        if (event.target.id === "course") {
            if (this.state.employeeNew.course !== []) {
                check = this.state.employeeNew.course.map(function (x, check) {
                    if (x.nameCourse === "" || x.startDate === "" || x.endDate === "" || x.unit === "" || x.status === "") check = true;
                    return check;
                })
                if (check.toString() !== 'true') {
                    this.setState({
                        employeeNew: {
                            ...employeeNew,
                            course: [...employeeNew.course, { nameCourse: "", startDate: "", endDate: "", unit: "", status: "" }]
                        }
                    })
                } else this.notifywarning("Hãy nhập đủ các trường Quá trình đào tạo");
            } else {
                this.setState({
                    employeeNew: {
                        ...employeeNew,
                        course: [...employeeNew.course, { nameCourse: "", startDate: "", endDate: "", unit: "", status: "" }]
                    }
                })
            }
        }
    }

    // function save change certificate
    handleChangeCertificate(event) {
        var { name, value, className, type } = event.target;
        if (type === "file") {
            value = value.slice(12);
        }
        const { employeeNew } = this.state;
        var certificate = employeeNew.certificate;
        certificate[className] = { ...certificate[className], [name]: value }
        this.setState({
            employeeNew: {
                ...employeeNew,
                certificate: certificate
            }
        })




    }
    // function save change experience
    handleChangeExperience(event) {
        var { name, value, className } = event.target;
        const { employeeNew } = this.state;
        var experience = employeeNew.experience;
        experience[className] = { ...experience[className], [name]: value }
        this.setState({
            employeeNew: {
                ...employeeNew,
                experience: experience
            }
        })
    }
    // function save change contract
    handleChangeContract(event) {
        var { name, value, className, type } = event.target;
        if (type === "file") {
            value = value.slice(12);
        }
        const { employeeNew } = this.state;
        var contract = employeeNew.contract;
        contract[className] = { ...contract[className], [name]: value }
        this.setState({
            employeeNew: {
                ...employeeNew,
                contract: contract
            }
        })
    }
    // function save change insurrance
    handleChangeInsurrance(event) {
        var { name, value, className } = event.target;
        const { employeeNew } = this.state;
        var insurrance = employeeNew.insurrance;
        insurrance[className] = { ...insurrance[className], [name]: value }
        this.setState({
            employeeNew: {
                ...employeeNew,
                insurrance: insurrance
            }
        })
    }
    //function save change course 
    handleChangeCourse(event) {
        var { name, value, className } = event.target;
        const { employeeNew } = this.state;
        var course = employeeNew.course;
        course[className] = { ...course[className], [name]: value }
        this.setState({
            employeeNew: {
                ...employeeNew,
                course: course
            }
        })
    }
    // function delete fields certificate, experience, contract, insurrance, course
    delete = (key, index) => {
        const { employeeNew } = this.state;
        if (key === "certificate") {
            var certificate = employeeNew.certificate;
            certificate.splice(index, 1);
            this.setState({
                employeeNew: {
                    ...employeeNew,
                    certificate: [...certificate]
                }
            })
        };
        if (key === "experience") {
            var experience = employeeNew.experience;
            experience.splice(index, 1);
            this.setState({
                employeeNew: {
                    ...employeeNew,
                    experience: [...experience]
                }
            })
        };
        if (key === "contract") {
            var contract = employeeNew.contract;
            contract.splice(index, 1);
            this.setState({
                employeeNew: {
                    ...employeeNew,
                    contract: [...contract]
                }
            })
        };
        if (key === "insurrance") {
            var insurrance = employeeNew.insurrance;
            insurrance.splice(index, 1);
            this.setState({
                employeeNew: {
                    ...employeeNew,
                    insurrance: [...insurrance]
                }
            })
        };
        if (key === "course") {
            var course = employeeNew.course;
            course.splice(index, 1);
            this.setState({
                employeeNew: {
                    ...employeeNew,
                    course: [...course]
                }
            })
        };
    }

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
        console.log(this.state)
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
                                <div className="box box-info">
                                    <div className="box-body">

                                        <div className="col-md-12">
                                            <fieldset className="scheduler-border">
                                                <legend className="scheduler-border"><h4 className="box-title">Thông tin cơ bản</h4></legend>
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
                                                        <label htmlFor="brithday">Ngày sinh:</label>
                                                        <input type="Date" className="form-control" id="brithday" name="brithday" onChange={this.handleChange} autoComplete="off" />
                                                    </div>
                                                    <div className="form-group">
                                                        <label htmlFor="national">Dân tộc:</label>
                                                        <input type="text" className="form-control" id="national" name="national" onChange={this.handleChange} />
                                                    </div>
                                                    <div className="form-group" style={{ paddingTop: 3 }}>
                                                        <label htmlFor="phoneNumber">Số điện thoại:<span className="required">&#42;</span></label>
                                                        <input type="number" className="form-control" id="phoneNumber" name="phoneNumber" onChange={this.handleChange} />
                                                    </div>
                                                    <div className="form-group">
                                                        <label htmlFor="emailCompany">Email:</label>
                                                        <input type="email" className="form-control" id="emailCompany" placeholder="Email công ty" name="emailCompany" onChange={this.handleChange} />
                                                    </div>
                                                </div>
                                                <div className=" col-md-4 ">
                                                    <div className="form-group">
                                                        <label htmlFor="MSCC">Mã số chấm công:<span className="required">&#42;</span></label>
                                                        <input type="text" className="form-control" id="MSCC" placeholder="Mã số chấm công" name="MSCC" onChange={this.handleChange} />
                                                    </div>
                                                    <div className="form-group">
                                                        <label style={{ display: 'block', paddingBottom: 4 }}>Giới tính:<span className="required">&#42;</span></label>
                                                        <input type="radio" name="gender" value="Nam" className="" defaultChecked style={{ marginLeft: 30, marginRight: 5 }} onChange={this.handleChange} />
                                                        <label>Nam</label>
                                                        <input type="radio" name="gender" value="Nữ" className="" style={{ marginLeft: 90, marginRight: 5 }} onChange={this.handleChange} />
                                                        <label>Nữ</label>
                                                    </div>
                                                    <div className="form-group">
                                                        <label htmlFor="birthplace">Nơi sinh:</label>
                                                        <input type="text" className="form-control" id="birthplace" name="birthplace" onChange={this.handleChange} />
                                                    </div>
                                                    <div className="form-group">
                                                        <label htmlFor="religion">Tôn giáo:</label>
                                                        <input type="text" className="form-control" id="religion" name="religion" onChange={this.handleChange} />
                                                    </div>
                                                    <div className="form-group">
                                                        <label style={{ display: 'block', paddingBottom: 7 }}>Tình trạng hôn nhân:</label>
                                                        <input type="radio" name="relationship" value="Độc thân" className="" defaultChecked style={{ marginLeft: 30, marginRight: 5 }} onChange={this.handleChange} />
                                                        <label> Độc thân</label>
                                                        <input type="radio" name="relationship" value="Đã kết hôn" className="" style={{ marginLeft: 80, marginRight: 5 }} onChange={this.handleChange} />
                                                        <label> Đã kết hôn</label>
                                                    </div>

                                                </div>
                                            </fieldset>
                                            <fieldset className="scheduler-border">
                                                <legend className="scheduler-border"><h4 className="box-title">Thông tin liên hệ</h4></legend>

                                                <div className="col-md-4">
                                                    <div className="form-group">
                                                        <label htmlFor="phoneNumberAddress">Số điện thoại nhà riêng:</label>
                                                        <input type="text" className="form-control" id="phoneNumberAddress" name="phoneNumberAddress" onChange={this.handleChange} />
                                                    </div>
                                                </div>
                                                <div className="col-md-4">
                                                    <div className="form-group">
                                                        <label htmlFor="emailPersonal">Email cá nhân<span className="required">&#42;</span></label>
                                                        <input type="text" className="form-control" id="emailPersonal" name="emailPersonal" onChange={this.handleChange} />
                                                    </div>
                                                </div>
                                                <div className="col-md-12">
                                                    <fieldset className="scheduler-border">
                                                        <legend className="scheduler-border"><h4 className="box-title">Liên hệ khẩn cấp</h4></legend>
                                                        <div className="col-md-4">
                                                            <div className="form-group">
                                                                <label htmlFor="friendName">Họ và tên:</label>
                                                                <input type="text" className="form-control" id="friendName" name="friendName" onChange={this.handleChange} />
                                                            </div>
                                                            <div className="form-group">
                                                                <label htmlFor="friendPhone">Điện thoại di động:</label>
                                                                <input type="text" className="form-control" id="friendPhone" name="friendPhone" onChange={this.handleChange} />
                                                            </div>

                                                        </div>
                                                        <div className="col-md-4">
                                                            <div className="form-group">
                                                                <label htmlFor="relation">Quan hệ:</label>
                                                                <input type="text" className="form-control" id="relation" name="relation" onChange={this.handleChange} />
                                                            </div>
                                                            <div className="form-group">
                                                                <label htmlFor="friendPhoneAddress">Điện thoại nhà riêng:</label>
                                                                <input type="text" className="form-control" id="friendPhoneAddress" name="friendPhoneAddress" onChange={this.handleChange} />
                                                            </div>
                                                        </div>
                                                        <div className="col-md-4">
                                                            <div className="form-group">
                                                                <label htmlFor="friendAddress">Địa chỉ:</label>
                                                                <input type="text" className="form-control" id="friendAddress" name="friendAddress" onChange={this.handleChange} />
                                                            </div>
                                                            <div className="form-group">
                                                                <label htmlFor="friendEmail">Email:</label>
                                                                <input type="text" className="form-control" id="friendEmail" name="friendEmail" onChange={this.handleChange} />
                                                            </div>
                                                        </div>
                                                    </fieldset>
                                                </div>
                                                <div className="col-md-6">
                                                    <fieldset className="scheduler-border">
                                                        <legend className="scheduler-border">Hộ khẩu thường trú</legend>
                                                        <div className="form-group">
                                                            <label htmlFor="localAddress">Địa chỉ:</label>
                                                            <input type="text" className="form-control " name="localAddress" id="localAddress" onChange={this.handleChange} />
                                                        </div>
                                                        <div className="form-group">
                                                            <label htmlFor="localNational">Quốc gia:</label>

                                                            <input type="text" className="form-control " name="localNational" id="localNational" onChange={this.handleChange} />
                                                        </div>
                                                        <div className="form-group">
                                                            <label htmlFor="localCity">
                                                                Tỉnh/Thành phố:</label>
                                                            <input type="text" className="form-control " name="localCity" id="localCity" onChange={this.handleChange} />
                                                        </div>
                                                        <div className="form-group">
                                                            <label htmlFor="localDistrict">
                                                                Quận/Huyện:</label>
                                                            <input type="text" className="form-control " name="localDistrict" id="localDistrict" onChange={this.handleChange} />
                                                        </div>
                                                        <div className="form-group">
                                                            <label htmlFor="localCommune">
                                                                Xã/Phường:</label>
                                                            <input type="text" className="form-control " name="localCommune" id="localCommune" onChange={this.handleChange} />
                                                        </div>
                                                    </fieldset>
                                                </div>
                                                <div className="col-md-6">
                                                    <fieldset className="scheduler-border">
                                                        <legend className="scheduler-border">
                                                            Chỗ ở hiện tại</legend>
                                                        <div className="form-group">
                                                            <label htmlFor="nowAddress">
                                                                Địa chỉ:</label>
                                                            <input type="text" className="form-control " name="nowAddress" id="nowAddress" onChange={this.handleChange} />
                                                        </div>
                                                        <div className="form-group">
                                                            <label htmlFor="nowNational">
                                                                Quốc gia:</label>
                                                            <input type="text" className="form-control " name="nowNational" id="nowNational" onChange={this.handleChange} />
                                                        </div>
                                                        <div className="form-group">
                                                            <label htmlFor="nowCity">
                                                                Tỉnh/Thành phố:</label>
                                                            <input type="text" className="form-control " name="nowCity" id="nowCity" onChange={this.handleChange} />
                                                        </div>
                                                        <div className="form-group">
                                                            <label htmlFor="nowDistrict">
                                                                Quận/Huyện:</label>
                                                            <input type="text" className="form-control " name="nowDistrict" id="nowDistrict" onChange={this.handleChange} />
                                                        </div>
                                                        <div className="form-group">
                                                            <label htmlFor="nowCommune">
                                                                Xã/Phường:</label>
                                                            <input type="text" className="form-control " name="nowCommune" id="nowCommune" onChange={this.handleChange} />
                                                        </div>
                                                    </fieldset>
                                                </div>
                                            </fieldset>
                                            <fieldset className="scheduler-border">
                                                <legend className="scheduler-border"><h4 className="box-title">Mã số - Tài khoản</h4></legend>

                                                <div className="col-md-4">
                                                    <div className="form-group">
                                                        <label htmlFor="MST">Mã số thuế:<span className="required">&#42;</span></label>
                                                        <input type="number" className="form-control" id="MST" name="MST" onChange={this.handleChange} />
                                                    </div>
                                                    <div className="form-group">
                                                        <label htmlFor="CMND">Số CMND/Hộ chiếu:<span className="required">&#42;</span></label>
                                                        <input type="number" className="form-control" id="CMND" name="CMND" onChange={this.handleChange} />
                                                    </div>
                                                </div>
                                                <div className="col-md-4">
                                                    <div className="form-group">
                                                        <label htmlFor="ATM">Số tài khoản ngân hàng:<span className="required">&#42;</span></label>
                                                        <input type="text" className="form-control" id="ATM" name="ATM" onChange={this.handleChange} />
                                                    </div>
                                                    <div className="form-group">
                                                        <label htmlFor="dateCMND">Ngày cấp:<span className="required">&#42;</span></label>
                                                        <input type="Date" className="form-control" id="dateCMND" name="dateCMND" onChange={this.handleChange} />
                                                    </div>
                                                </div>
                                                <div className="col-md-4">
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
                                                        <label htmlFor="addressCMND">Nơi cấp:<span className="required">&#42;</span></label>
                                                        <input type="text" className="form-control" id="addressCMND" name="addressCMND" onChange={this.handleChange} />
                                                    </div>
                                                </div>
                                            </fieldset>
                                            <fieldset className="scheduler-border">
                                                <legend className="scheduler-border"><h4 className="box-title">Trình độ học vấn</h4></legend>
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
                                            </fieldset>
                                            <fieldset className="scheduler-border">
                                                <legend className="scheduler-border" style={{ marginBottom: 0 }}><h4 className="box-title">Bằng cấp/Chứng chỉ:</h4></legend>
                                                <button style={{ marginBottom: 5 }} type="submit" className="btn btn-success pull-right" id="certificate" title="Thêm mới bằng cấp/Chứng chỉ" onClick={this.handleAddNew}>Thêm mới</button>
                                                <table className="table table-bordered " style={{ marginBottom: 0 }}>
                                                    <thead>
                                                        <tr>
                                                            <th style={{ width: "50%" }}>Tên bằng cấp/Chứng chỉ </th>
                                                            <th style={{ width: "50%" }}>File đính kèm</th>
                                                            <th style={{ width: '11%' }}>Hoạt động</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {this.state.employeeNew.certificate !== [] && this.state.employeeNew.certificate.map((x, index) => (
                                                            <tr key={index}>
                                                                <td><input className={index} type="text" value={x.nameCertificate} name="nameCertificate" style={{ width: "100%", height: 34 }} onChange={this.handleChangeCertificate} /></td>
                                                                <td><div className="upload btn btn-default">Chọn tệp<input className={index} type="file" name="urlCertificate" id="file" onChange={this.handleChangeCertificate} /></div> {x.urlCertificate === "" ? "Chưa có tệp nào được chọn" : x.urlCertificate}</td>
                                                                <td style={{ textAlign: "center" }}>
                                                                    <a href="#abc" className="delete" title="Delete" data-toggle="tooltip" onClick={() => this.delete("certificate", index)}><i className="material-icons"></i></a>
                                                                </td>
                                                            </tr>
                                                        ))}
                                                    </tbody>
                                                </table>
                                            </fieldset>
                                            <fieldset className="scheduler-border">
                                                <legend className="scheduler-border" style={{ marginBottom: 0 }} ><h4 className="box-title">Kinh nghiệm làm việc</h4></legend>
                                                <button style={{ marginBottom: 5 }} type="submit" className="btn btn-success pull-right" id="experience" title="Thêm mới kinh nghiệm làm việc" onClick={this.handleAddNew}>Thêm mới</button>
                                                <table className="table table-bordered" style={{ marginBottom: 0 }}>
                                                    <thead>
                                                        <tr>
                                                            <th style={{ width: '14%' }}>Từ tháng/năm</th>
                                                            <th style={{ width: '14%' }}>Đến tháng/năm</th>
                                                            <th>Đơn vị công tác</th>
                                                            <th>Chức vụ</th>
                                                            <th style={{ width: '11%' }}>Hoạt động</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {this.state.employeeNew.experience !== "" && this.state.employeeNew.experience.map((x, index) => (
                                                            <tr key={index}>
                                                                <td><input className={index} value={x.startDate} type="text" name="startDate" style={{ width: "100%", height: 34 }} id="datepicker2" data-date-format="mm-yyyy" onChange={this.handleChangeExperience} /></td>
                                                                <td><input className={index} value={x.endDate} type="text" name="endDate" style={{ width: "100%", height: 34 }} id="datepicker2" data-date-format="mm-yyyy" onChange={this.handleChangeExperience} /></td>
                                                                <td><input className={index} value={x.unit} type="text" name="unit" style={{ width: "100%", height: 34 }} onChange={this.handleChangeExperience} /></td>
                                                                <td><input className={index} value={x.position} type="text" name="position" style={{ width: "100%", height: 34 }} onChange={this.handleChangeExperience} /></td>
                                                                <td style={{ textAlign: "center" }}>
                                                                    <a href="#abc" className="delete" title="Delete" data-toggle="tooltip" onClick={() => this.delete("experience", index)}><i className="material-icons"></i></a>
                                                                </td>
                                                            </tr>
                                                        ))}
                                                    </tbody>
                                                </table>
                                            </fieldset>
                                            <fieldset className="scheduler-border">
                                                <legend className="scheduler-border" style={{ marginBottom: 0 }}><h4 className="box-title">Hợp đồng lao động</h4></legend>
                                                <button style={{ marginBottom: 5 }} type="submit" className="btn btn-success pull-right" id="contract" title="Thêm mới hợp đồng lao động" onClick={this.handleAddNew}>Thêm mới</button>
                                                <table className="table table-bordered " style={{ marginBottom: 0 }}>
                                                    <thead>
                                                        <tr>
                                                            <th style={{ width: "30%" }}>Ngày ký( gia hạn) hợp đồng</th>
                                                            <th style={{ width: "30%" }}>Ngày hết hạn</th>
                                                            <th style={{ width: "30%" }}>File đính kèm</th>
                                                            <th style={{ width: '11%' }}>Hoạt động</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {this.state.employeeNew.contract !== "" && this.state.employeeNew.contract.map((x, index) => (
                                                            <tr key={index}>
                                                                <td><input className={index} value={x.startDate} type="text" name="startDate" style={{ width: "100%", height: 34 }} onChange={this.handleChangeContract} /></td>
                                                                <td><input className={index} value={x.endDate} type="text" name="endDate" style={{ width: "100%", height: 34 }} onChange={this.handleChangeContract} /></td>
                                                                <td><div className="upload btn btn-default">Chọn tệp<input className={index} type="file" name="urlContract" id="file1" onChange={this.handleChangeContract} /></div> {x.urlContract === "" ? "Chưa có tệp nào được chọn" : x.urlContract}</td>
                                                                <td style={{ textAlign: "center" }}>
                                                                    <a href="#abc" className="delete" title="Delete" data-toggle="tooltip" onClick={() => this.delete("contract", index)}><i className="material-icons"></i></a>
                                                                </td>
                                                            </tr>
                                                        ))}
                                                    </tbody>
                                                </table>
                                            </fieldset>
                                            <fieldset className="scheduler-border">
                                                <legend className="scheduler-border" style={{ marginBottom: 0 }}><h4 className="box-title">Bảo hiểm y tế</h4></legend>
                                                <button style={{ marginBottom: 5 }} type="submit" className="btn btn-success pull-right" id="insurrance" title="Thêm mới bảo hiểm" onClick={this.handleAddNew}>Thêm mới</button>
                                                <table className="table table-bordered " style={{ marginBottom: 0 }}>
                                                    <thead>
                                                        <tr>
                                                            <th style={{ width: "30%" }}>Ngày gia hạn</th>
                                                            <th style={{ width: "30%" }}>Ngày hết hạn</th>
                                                            <th style={{ width: "30%" }}>Chi phí</th>
                                                            <th style={{ width: '11%' }}>Hoạt động</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {this.state.employeeNew.insurrance !== "" && this.state.employeeNew.insurrance.map((x, index) => (
                                                            <tr key={index}>
                                                                <td><input className={index} value={x.startDate} type="text" name="startDate" style={{ width: "100%", height: 34 }} onChange={this.handleChangeInsurrance} /></td>
                                                                <td><input className={index} value={x.endDate} type="text" name="endDate" style={{ width: "100%", height: 34 }} onChange={this.handleChangeInsurrance} /></td>
                                                                <td><input className={index} value={x.cost} type="text" name="cost" style={{ width: "100%", height: 34 }} onChange={this.handleChangeInsurrance} /></td>
                                                                <td style={{ textAlign: "center" }}>
                                                                    <a href="#abc" className="delete" title="Delete" data-toggle="tooltip" onClick={() => this.delete("insurrance", index)}><i className="material-icons"></i></a>
                                                                </td>
                                                            </tr>
                                                        ))}
                                                    </tbody>
                                                </table>
                                            </fieldset>
                                            <fieldset className="scheduler-border">
                                                <legend className="scheduler-border" style={{ marginBottom: 0 }}><h4 className="box-title">Quá trình đào tạo</h4></legend>
                                                <button style={{ marginBottom: 5 }} type="submit" className="btn btn-success pull-right" id="course" title="Thêm mới quá trình đào tạo" onClick={this.handleAddNew}>Thêm mới</button>
                                                <table className="table table-bordered table-hover" style={{ marginBottom: 0 }}>
                                                    <thead>
                                                        <tr>
                                                            <th style={{ width: '24%' }}>Tên khoá học</th>
                                                            <th style={{ width: '16%' }}>Ngày bắt đầu</th>
                                                            <th style={{ width: '16%' }}>Ngày kết thúc</th>
                                                            <th style={{ width: '24%' }}>Đơn vị đào tạo</th>
                                                            <th style={{ width: '10%' }}>Trạng thái</th>
                                                            <th style={{ width: '10%' }}>Hoạt động</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {this.state.employeeNew.course !== "" && this.state.employeeNew.course.map((x, index) => (
                                                            <tr key={index}>
                                                                <td><input className={index} value={x.nameCourse} type="text" name="nameCourse" style={{ width: "100%", height: 34 }} onChange={this.handleChangeCourse} /></td>
                                                                <td><input className={index} value={x.startDate} type="date" name="startDate" style={{ width: "100%", height: 34 }} onChange={this.handleChangeCourse} /></td>
                                                                <td><input className={index} value={x.endDate} type="date" name="endDate" style={{ width: "100%", height: 34 }} onChange={this.handleChangeCourse} /></td>
                                                                <td><input className={index} value={x.unit} type="text" name="unit" style={{ width: "100%", height: 34 }} onChange={this.handleChangeCourse} /></td>
                                                                <td><input className={index} value={x.status} type="text" name="status" style={{ width: "100%", height: 34 }} onChange={this.handleChangeCourse} /></td>
                                                                <td style={{ textAlign: "center" }}>
                                                                    <a href="#abc" className="delete" title="Delete" data-toggle="tooltip" onClick={() => this.delete("course", index)}><i className="material-icons"></i></a>
                                                                </td>
                                                            </tr>
                                                        ))}
                                                    </tbody>
                                                </table>
                                            </fieldset>
                                            {/* <fieldset className="scheduler-border">
                                                <legend className="scheduler-border" style={{ marginBottom: 0 }}><h4 className="box-title">Khen thưởng - Kỷ luật</h4></legend>
                                                <button style={{ marginBottom: 5 }} type="submit" className="btn btn-success pull-right" id="" title="Thêm mới khen thưởng - kỷ luật">Thêm mới</button>
                                            </fieldset> */}

                                        </div>
                                        <div className="box-footer col-md-12">
                                            <button type="submit" title="xoá tất cả các trường" className="btn btn-primary col-md-2 pull-right btnuser"  >Xoá trắng</button>
                                            <button type="submit" title="Thêm nhân viên mới" className="btn btn-success col-md-2 pull-right btnuser" onClick={this.handleSubmit} htmlFor="form">Thêm nhân viên</button>
                                        </div>
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