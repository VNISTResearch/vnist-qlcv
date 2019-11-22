import React, { Component } from 'react';
import { connect } from 'react-redux';
import { employeeActions } from '../../../../../redux-actions/EmployeeActions';
import { ToastContainer, toast } from 'react-toastify';
import '../AddEmployee/addemployee.css';
import 'react-toastify/dist/ReactToastify.css';

class ModalAddEmployee extends Component {
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
                certificateShort: [],
                experience: [],
                contract: [],
                BHXH: [],
                course: [],
                file: []
            }

        };
        this.handleSubmitAdd = this.handleSubmitAdd.bind(this);
        this.handleChangeAdd = this.handleChangeAdd.bind(this);
        this.handleChangeTaxAdd = this.handleChangeTaxAdd.bind(this);
        this.handleUploadAdd = this.handleUploadAdd.bind(this);
        this.handleChangeEmployeeNumberAdd = this.handleChangeEmployeeNumberAdd.bind(this);
        this.handleAddNewAdd = this.handleAddNewAdd.bind(this);
        this.handleChangeCertificateAdd = this.handleChangeCertificateAdd.bind(this);
        this.handleChangeCertificateShortAdd = this.handleChangeCertificateShortAdd.bind(this);
        this.handleChangeExperienceAdd = this.handleChangeExperienceAdd.bind(this);
        this.handleChangeContractAdd = this.handleChangeContractAdd.bind(this);
        this.handleChangeBHXHAdd = this.handleChangeBHXHAdd.bind(this);
        this.handleChangeCourseAdd = this.handleChangeCourseAdd.bind(this);
        this.handleChangeFileAdd = this.handleChangeFileAdd.bind(this);
    }

    // function: notification the result of an action
    notifysuccess = (message) => toast(message);
    notifyerror = (message) => toast.error(message);
    notifywarning = (message) => toast.warning(message);

    // function upload avatar 
    handleUploadAdd(event) {
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
    handleChangeAdd(event) {
        const { name, value } = event.target;
        const { employeeNew } = this.state;
        this.setState({
            employeeNew: {
                ...employeeNew,
                [name]: value
            }
        });
    }
    // function save data of Tax fields of the target of employee
    handleChangeTaxAdd(event) {
        const { name, value } = event.target;
        const { employeeNew } = this.state;
        this.setState({
            employeeNew: {
                ...employeeNew,
                Tax: {
                    ...employeeNew.Tax,
                    [name]: value
                },
            }
        });
    }
    // function save EmployeeNumber
    handleChangeEmployeeNumberAdd(event) {
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
    // function add new fields certificate, experience, contract, BHXH, course,File
    handleAddNewAdd(event) {
        var check;
        const { employeeNew } = this.state;
        event.preventDefault();
        if (event.target.id === "addcertificate") {
            if (this.state.employeeNew.certificate !== []) {
                check = this.state.employeeNew.certificate.map(function (x, check) {
                    if (x.nameCertificate === "" || x.urlCertificate === "" || x.addressCertificate === "" || x.yearCertificate === "" || x.typeCertificate === "") check = true;
                    return check;
                })
                if (check.toString() !== 'true') {
                    this.setState({
                        employeeNew: {
                            ...employeeNew,
                            certificate: [...employeeNew.certificate, { nameCertificate: "", addressCertificate: "", yearCertificate: "", typeCertificate: "Suất sắc", urlCertificate: "" }]
                        }
                    })
                } else this.notifywarning("Hãy nhập đủ các trường Bằng cấp");
            } else {
                this.setState({
                    employeeNew: {
                        ...employeeNew,
                        certificate: [...employeeNew.certificate, { nameCertificate: "", addressCertificate: "", yearCertificate: "", typeCertificate: "Suất sắc", urlCertificate: "" }]
                    }
                })
            }
        }
        if (event.target.id === "addcertificateShort") {
            if (this.state.employeeNew.certificateShort !== []) {
                check = this.state.employeeNew.certificateShort.map(function (x, check) {
                    if (x.nameCertificateShort === "" || x.urlCertificateShort === "" || x.unit === "" || x.startDate === "" || x.endDate === "") check = true;
                    return check;
                })
                if (check.toString() !== 'true') {
                    this.setState({
                        employeeNew: {
                            ...employeeNew,
                            certificateShort: [...employeeNew.certificateShort, { nameCertificateShort: "", urlCertificateShort: "", unit: "", startDate: "", endDate: "" }]
                        }
                    })
                } else this.notifywarning("Hãy nhập đủ các trường Chứng chỉ");
            } else {
                this.setState({
                    employeeNew: {
                        ...employeeNew,
                        certificateShort: [...employeeNew.certificateShort, { nameCertificateShort: "", urlCertificateShort: "", unit: "", startDate: "", endDate: "" }]
                    }
                })
            }
        }
        if (event.target.id === "addexperience") {
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
        if (event.target.id === "addcontract") {
            if (this.state.employeeNew.contract !== []) {
                check = this.state.employeeNew.contract.map(function (x, check) {
                    if (x.nameContract === "" || x.typeContract === "" || x.startDate === "" || x.endDate === "" || x.urlContract === "") check = true;
                    return check;
                })
                if (check.toString() !== 'true') {
                    this.setState({
                        employeeNew: {
                            ...employeeNew,
                            contract: [...employeeNew.contract, { nameContract: "", typeContract: "", startDate: "", endDate: "", urlContract: "" }]
                        }
                    })
                } else this.notifywarning("Hãy nhập đủ các trường Hợp đồng lao động");
            } else {
                this.setState({
                    employeeNew: {
                        ...employeeNew,
                        contract: [...employeeNew.contract, { nameContract: "", typeContract: "", startDate: "", endDate: "", urlContract: "" }]
                    }
                })
            }
        }
        if (event.target.id === "addBHXH") {
            if (this.state.employeeNew.BHXH !== []) {
                check = this.state.employeeNew.BHXH.map(function (x, check) {
                    if (x.startDate === "" || x.endDate === "" || x.position === "" || x.unit === "") check = true;
                    return check;
                })
                if (check.toString() !== 'true') {
                    this.setState({
                        employeeNew: {
                            ...employeeNew,
                            BHXH: [...employeeNew.BHXH, { startDate: "", endDate: "", position: "", unit: "" }]
                        }
                    })
                } else this.notifywarning("Hãy nhập đủ các trường Bảo hiểm y tế");
            } else {
                this.setState({
                    employeeNew: {
                        ...employeeNew,
                        BHXH: [...employeeNew.BHXH, { startDate: "", endDate: "", position: "", unit: "" }]
                    }
                })
            }
        }
        if (event.target.id === "addcourse") {
            if (this.state.employeeNew.course !== []) {
                check = this.state.employeeNew.course.map(function (x, check) {
                    if (x.nameCourse === "" || x.startDate === "" || x.endDate === "" || x.unit === "" || x.status === "" || x.typeCourse === "") check = true;
                    return check;
                })
                if (check.toString() !== 'true') {
                    this.setState({
                        employeeNew: {
                            ...employeeNew,
                            course: [...employeeNew.course, { nameCourse: "", startDate: "", endDate: "", unit: "", status: "Chưa hoàn thành", typeCourse: "Nội bộ" }]
                        }
                    })
                } else this.notifywarning("Hãy nhập đủ các trường Quá trình đào tạo");
            } else {
                this.setState({
                    employeeNew: {
                        ...employeeNew,
                        course: [...employeeNew.course, { nameCourse: "", startDate: "", endDate: "", unit: "", status: "Chưa hoàn thành", typeCourse: "Nội bộ" }]
                    }
                })
            }
        }
        if (event.target.id === "addfile") {
            if (this.state.employeeNew.file !== []) {
                check = this.state.employeeNew.file.map(function (x, check) {
                    if (x.nameFile === "" || x.discFile === "" || x.number === "" || x.status === "") check = true;
                    return check;
                })
                if (check.toString() !== 'true') {
                    this.setState({
                        employeeNew: {
                            ...employeeNew,
                            file: [...employeeNew.file, { nameFile: "", urlFile: "", discFile: "", number: "", status: "Chưa nộp" }]
                        }
                    })
                } else this.notifywarning("Hãy nhập đủ các trường Tài liệu đính kèm");
            } else {
                this.setState({
                    employeeNew: {
                        ...employeeNew,
                        file: [...employeeNew.file, { nameFile: "", urlFile: "", discFile: "", number: "", status: "Chưa nộp" }]
                    }
                })
            }
        }
    }

    // function save change certificate
    handleChangeCertificateAdd(event) {
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
    // function save change certificate
    handleChangeCertificateShortAdd(event) {
        var { name, value, className, type } = event.target;
        if (type === "file") {
            value = value.slice(12);
        }
        const { employeeNew } = this.state;
        var certificateShort = employeeNew.certificateShort;
        certificateShort[className] = { ...certificateShort[className], [name]: value }
        this.setState({
            employeeNew: {
                ...employeeNew,
                certificateShort: certificateShort
            }
        })
    }
    // function save change experience
    handleChangeExperienceAdd(event) {
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
    handleChangeContractAdd(event) {
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
    // function save change BHXH
    handleChangeBHXHAdd(event) {
        var { name, value, className } = event.target;
        const { employeeNew } = this.state;
        var BHXH = employeeNew.BHXH;
        BHXH[className] = { ...BHXH[className], [name]: value }
        this.setState({
            employeeNew: {
                ...employeeNew,
                BHXH: BHXH
            }
        })
    }
    //function save change course 
    handleChangeCourseAdd(event) {
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
    handleChangeFileAdd(event) {
        var { name, value, className, type } = event.target;
        if (type === "file") {
            value = value.slice(12);
        }
        const { employeeNew } = this.state;
        var file = employeeNew.file;
        file[className] = { ...file[className], [name]: value }
        this.setState({
            employeeNew: {
                ...employeeNew,
                file: file
            }
        })
    }
    // function delete fields certificate, experience, contract, BHXH, course
    deleteAdd = (key, index) => {
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
        if (key === "certificateShort") {
            var certificateShort = employeeNew.certificateShort;
            certificateShort.splice(index, 1);
            this.setState({
                employeeNew: {
                    ...employeeNew,
                    certificateShort: [...certificateShort]
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
        if (key === "BHXH") {
            var BHXH = employeeNew.BHXH;
            BHXH.splice(index, 1);
            this.setState({
                employeeNew: {
                    ...employeeNew,
                    BHXH: [...BHXH]
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
        if (key === "file") {
            var file = employeeNew.file;
            file.splice(index, 1);
            this.setState({
                employeeNew: {
                    ...employeeNew,
                    file: [...file]
                }
            })
        };
    }

    // function add new employee
    handleSubmitAdd(events) {
        events.preventDefault();
        var { employee } = this.props.employees;
        var employeeNumber;
        if (employee) {
            employeeNumber = employee.map(x => x.employeeNumber).toString();
        }
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
        } else if (!employeeNew.Tax.numberTax) {
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
            <div className="modal fade" id="modal-addEmployee" tabIndex={-1} role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">×</span></button>
                            <h4 className="modal-title">Thêm nhân viên:</h4>
                        </div>
                        <div className="modal-body" style={{ paddingTop: 0 }}>
                            {/* <div className="col-md-12"> */}
                            {/* <form id="form"> */}
                            <div className="nav-tabs-custom" >
                                <ul className="nav nav-tabs">
                                    <li className="active"><a style={{ paddingLeft: 5, paddingRight: 8 }} title="Thông tin chung của nhân viên" data-toggle="tab" href="#addthongtinchung">Thông tin chung</a></li>
                                    <li><a style={{ paddingLeft: 5, paddingRight: 8 }} title="Thông tin liên hệ của nhân viên" data-toggle="tab" href="#addthongtinlienhe">Thông tin liên hệ</a></li>
                                    <li><a style={{ paddingLeft: 5, paddingRight: 8 }} title="Trình độ học vấn - Khinh nghiệm làm việc" data-toggle="tab" href="#addkinhnghiem"> Học vấn - Kinh nghiệm</a></li>
                                    <li><a style={{ paddingLeft: 5, paddingRight: 8 }} title="Bằng cấp - Chứng chỉ" data-toggle="tab" href="#addbangcap">Bằng cấp - Chứng chỉ</a></li>
                                    <li><a style={{ paddingLeft: 5, paddingRight: 8 }} title="Tài khoản ngân hành - Thuế thu nhập các nhân" data-toggle="tab" href="#addtaikhoan">Tài khoản - Thuế</a></li>
                                    <li><a style={{ paddingLeft: 5, paddingRight: 8 }} title="Thông tin bảo hiểm" data-toggle="tab" href="#addbaohiem">Thông tin bảo hiểm</a></li>
                                    <li><a style={{ paddingLeft: 5, paddingRight: 8 }} title="Hợp đồng lao động - Quá trình đào tạo" data-toggle="tab" href="#addhopdong">Hợp đồng - Đào tạo</a></li>
                                    <li><a style={{ paddingLeft: 5, }} title="Tài liệu đính kèm" data-toggle="tab" href="#addtailieu">Tài liệu đính kèm</a></li>

                                </ul>
                                < div className="tab-content">
                                    <div id="addthongtinchung" className="tab-pane active">
                                        <div className="box-body">
                                            <div className="col-md-12">
                                                <div className="col-md-4">
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
                                                        <input type="text" className="form-control" name="employeeNumber" placeholder="Mã số nhân viên" onChange={this.handleChangeEmployeeNumberAdd} />
                                                    </div>
                                                    <div className="form-group">
                                                        <label htmlFor="fullname">Họ và tên:<span className="required">&#42;</span></label>
                                                        <input type="text" className="form-control" name="fullName" placeholder="Họ và tên" onChange={this.handleChangeAdd} />
                                                    </div>
                                                    <div className="form-group">
                                                        <label htmlFor="brithday">Ngày sinh:</label>
                                                        <input type="Date" className="form-control" name="brithday" onChange={this.handleChangeAdd} autoComplete="off" />
                                                    </div>
                                                    <div className="form-group">
                                                        <label htmlFor="emailCompany">Email:</label>
                                                        <input type="email" className="form-control" placeholder="Email công ty" name="emailCompany" onChange={this.handleChangeAdd} />
                                                    </div>
                                                </div>
                                                <div className=" col-md-4 ">
                                                    <div className="form-group">
                                                        <label htmlFor="MSCC">Mã số chấm công:<span className="required">&#42;</span></label>
                                                        <input type="text" className="form-control" placeholder="Mã số chấm công" name="MSCC" onChange={this.handleChangeAdd} />
                                                    </div>
                                                    <div className="form-group">
                                                        <label style={{ display: 'block', paddingBottom: 4 }}>Giới tính:<span className="required">&#42;</span></label>
                                                        <input type="radio" name="gender" value="Nam" className="" defaultChecked style={{ marginLeft: 30, marginRight: 5 }} onChange={this.handleChangeAdd} />
                                                        <label>Nam</label>
                                                        <input type="radio" name="gender" value="Nữ" className="" style={{ marginLeft: 90, marginRight: 5 }} onChange={this.handleChangeAdd} />
                                                        <label>Nữ</label>
                                                    </div>
                                                    <div className="form-group">
                                                        <label htmlFor="birthplace">Nơi sinh:</label>
                                                        <input type="text" className="form-control" name="birthplace" onChange={this.handleChangeAdd} />
                                                    </div>
                                                    <div className="form-group">
                                                        <label style={{ display: 'block', paddingBottom: 7 }}>Tình trạng hôn nhân:</label>
                                                        <input type="radio" name="relationship" value="Độc thân" className="" defaultChecked style={{ marginLeft: 30, marginRight: 5 }} onChange={this.handleChangeAdd} />
                                                        <label> Độc thân</label>
                                                        <input type="radio" name="relationship" value="Đã kết hôn" className="" style={{ marginLeft: 80, marginRight: 5 }} onChange={this.handleChangeAdd} />
                                                        <label> Đã kết hôn</label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-12">
                                                <div className="col-md-4">
                                                    <div className="form-group">
                                                        <label htmlFor="CMND">Số CMND/Hộ chiếu:<span className="required">&#42;</span></label>
                                                        <input type="number" className="form-control" name="CMND" onChange={this.handleChangeAdd} />
                                                    </div>
                                                    <div className="form-group">
                                                        <label htmlFor="national">Dân tộc:</label>
                                                        <input type="text" className="form-control" name="national" onChange={this.handleChangeAdd} />
                                                    </div>
                                                </div>
                                                <div className="col-md-4">
                                                    <div className="form-group">
                                                        <label htmlFor="dateCMND">Ngày cấp:<span className="required">&#42;</span></label>
                                                        <input type="Date" className="form-control" name="dateCMND" onChange={this.handleChangeAdd} />
                                                    </div>
                                                    <div className="form-group">
                                                        <label htmlFor="religion">Tôn giáo:</label>
                                                        <input type="text" className="form-control" name="religion" onChange={this.handleChangeAdd} />
                                                    </div>

                                                </div>
                                                <div className="col-md-4">
                                                    <div className="form-group">
                                                        <label htmlFor="addressCMND">Nơi cấp:<span className="required">&#42;</span></label>
                                                        <input type="text" className="form-control" name="addressCMND" onChange={this.handleChangeAdd} />
                                                    </div>
                                                    <div className="form-group">
                                                        <label htmlFor="nation">Quốc tịch:</label>
                                                        <input type="text" className="form-control" name="nation" onChange={this.handleChangeAdd} />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div id="addthongtinlienhe" className="tab-pane">
                                        <div className="box-body">
                                            <div className="col-md-4">
                                                <div className="form-group" style={{ paddingTop: 3 }}>
                                                    <label htmlFor="phoneNumber">Điện thoại đi động:<span className="required">&#42;</span></label>
                                                    <input type="number" className="form-control" name="phoneNumber" onChange={this.handleChangeAdd} />
                                                </div>
                                            </div>
                                            <div className="col-md-4">
                                                <div className="form-group">
                                                    <label htmlFor="emailPersonal">Email cá nhân<span className="required">&#42;</span></label>
                                                    <input type="text" className="form-control" name="emailPersonal" onChange={this.handleChangeAdd} />
                                                </div>
                                            </div>
                                            <div className="col-md-4">
                                                <div className="form-group">
                                                    <label htmlFor="phoneNumberAddress">Điện thoại nhà riêng:</label>
                                                    <input type="text" className="form-control" name="phoneNumberAddress" onChange={this.handleChangeAdd} />
                                                </div>
                                            </div>
                                            <div className="col-md-12">
                                                <fieldset className="scheduler-border">
                                                    <legend className="scheduler-border"><h4 className="box-title">Liên hệ khẩn cấp</h4></legend>
                                                    <div className="col-md-4">
                                                        <div className="form-group">
                                                            <label htmlFor="friendName">Họ và tên:</label>
                                                            <input type="text" className="form-control" name="friendName" onChange={this.handleChangeAdd} />
                                                        </div>
                                                        <div className="form-group">
                                                            <label htmlFor="friendPhone">Điện thoại di động:</label>
                                                            <input type="text" className="form-control" name="friendPhone" onChange={this.handleChangeAdd} />
                                                        </div>

                                                    </div>
                                                    <div className="col-md-4">
                                                        <div className="form-group">
                                                            <label htmlFor="relation">Quan hệ:</label>
                                                            <input type="text" className="form-control" name="relation" onChange={this.handleChangeAdd} />
                                                        </div>
                                                        <div className="form-group">
                                                            <label htmlFor="friendPhoneAddress">Điện thoại nhà riêng:</label>
                                                            <input type="text" className="form-control" name="friendPhoneAddress" onChange={this.handleChangeAdd} />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-4">
                                                        <div className="form-group">
                                                            <label htmlFor="friendAddress">Địa chỉ:</label>
                                                            <input type="text" className="form-control" name="friendAddress" onChange={this.handleChangeAdd} />
                                                        </div>
                                                        <div className="form-group">
                                                            <label htmlFor="friendEmail">Email:</label>
                                                            <input type="text" className="form-control" name="friendEmail" onChange={this.handleChangeAdd} />
                                                        </div>
                                                    </div>
                                                </fieldset>
                                            </div>
                                            <div className="col-md-6">
                                                <fieldset className="scheduler-border">
                                                    <legend className="scheduler-border">Hộ khẩu thường trú</legend>
                                                    <div className="form-group">
                                                        <label htmlFor="localAddress">Địa chỉ:</label>
                                                        <input type="text" className="form-control " name="localAddress" onChange={this.handleChangeAdd} />
                                                    </div>
                                                    <div className="form-group">
                                                        <label htmlFor="localNational">Quốc gia:</label>
                                                        <input type="text" className="form-control " name="localNational" onChange={this.handleChangeAdd} />
                                                    </div>
                                                    <div className="form-group">
                                                        <label htmlFor="localCity">
                                                            Tỉnh/Thành phố:</label>
                                                        <input type="text" className="form-control " name="localCity" onChange={this.handleChangeAdd} />
                                                    </div>
                                                    <div className="form-group">
                                                        <label htmlFor="localDistrict">
                                                            Quận/Huyện:</label>
                                                        <input type="text" className="form-control " name="localDistrict" onChange={this.handleChangeAdd} />
                                                    </div>
                                                    <div className="form-group">
                                                        <label htmlFor="localCommune">
                                                            Xã/Phường:</label>
                                                        <input type="text" className="form-control " name="localCommune" onChange={this.handleChangeAdd} />
                                                    </div>
                                                </fieldset>
                                            </div>
                                            <div className="col-md-6">
                                                <fieldset className="scheduler-border">
                                                    <legend className="scheduler-border">
                                                        Chỗ ở hiện tại</legend>
                                                    <div className="form-group">
                                                        <label htmlFor="nowAddress">
                                                            Địa chỉ:<span className="required">&#42;</span></label>
                                                        <input type="text" className="form-control " name="nowAddress" onChange={this.handleChangeAdd} />
                                                    </div>
                                                    <div className="form-group">
                                                        <label htmlFor="nowNational">
                                                            Quốc gia:</label>
                                                        <input type="text" className="form-control " name="nowNational" onChange={this.handleChangeAdd} />
                                                    </div>
                                                    <div className="form-group">
                                                        <label htmlFor="nowCity">
                                                            Tỉnh/Thành phố:</label>
                                                        <input type="text" className="form-control " name="nowCity" onChange={this.handleChangeAdd} />
                                                    </div>
                                                    <div className="form-group">
                                                        <label htmlFor="nowDistrict">
                                                            Quận/Huyện:</label>
                                                        <input type="text" className="form-control " name="nowDistrict" onChange={this.handleChangeAdd} />
                                                    </div>
                                                    <div className="form-group">
                                                        <label htmlFor="nowCommune">
                                                            Xã/Phường:</label>
                                                        <input type="text" className="form-control " name="nowCommune" onChange={this.handleChangeAdd} />
                                                    </div>
                                                </fieldset>
                                            </div>
                                        </div>
                                    </div>
                                    <div id="addtaikhoan" className="tab-pane">
                                        <fieldset className="scheduler-border">
                                            <legend className="scheduler-border" style={{ marginBottom: 0 }} ><h4 className="box-title">Tài khoản ngân hàng:</h4></legend>
                                            <div className="box-body">
                                                <div className="form-group col-md-4">
                                                    <label htmlFor="ATM">Số tài khoản:<span className="required">&#42;</span></label>
                                                    <input type="text" className="form-control" name="ATM" onChange={this.handleChangeAdd} />
                                                </div>
                                                <div className="form-group col-md-4">
                                                    <label>Tên ngân hàng:<span className="required">&#42;</span></label>
                                                    <select className="form-control" name="nameBank" onChange={this.handleChangeAdd}>
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
                                                <div className="form-group col-md-4">
                                                    <label htmlFor="addressBank">Chi nhánh:<span className="required">&#42;</span></label>
                                                    <input type="text" className="form-control" name="addressBank" onChange={this.handleChangeAdd} />
                                                </div>
                                            </div>
                                        </fieldset>
                                        <fieldset className="scheduler-border">
                                            <legend className="scheduler-border" style={{ marginBottom: 0 }} ><h4 className="box-title">Thuế thu nhập cá nhân:</h4></legend>
                                            <div className="form-group">
                                                <label htmlFor="numberTax">Mã số thuế:<span className="required">&#42;</span></label>
                                                <input type="number" className="form-control" name="numberTax" onChange={this.handleChangeTaxAdd} />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="userTax">Người đại diện:<span className="required">&#42;</span></label>
                                                <input type="text" className="form-control" name="userTax" onChange={this.handleChangeTaxAdd} />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="startDate">Ngày hoạt động:<span className="required">&#42;</span></label>
                                                <input type="date" className="form-control" name="startDate" onChange={this.handleChangeTaxAdd} />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="unitTax">Quản lý bởi:<span className="required">&#42;</span></label>
                                                <input type="text" className="form-control" name="unitTax" onChange={this.handleChangeTaxAdd} />
                                            </div>
                                        </fieldset>
                                    </div>
                                    <div id="addbangcap" className="tab-pane">
                                        <div className="box-body">
                                            <fieldset className="scheduler-border">
                                                <legend className="scheduler-border" style={{ marginBottom: 0 }} ><h4 className="box-title">Bằng cấp:</h4></legend>
                                                <button style={{ marginBottom: 5 }} type="submit" className="btn btn-success pull-right" id="addcertificate" title="Thêm mới bằng cấp/Chứng chỉ" onClick={this.handleAddNewAdd}>Thêm mới</button>
                                                <table className="table table-bordered " >
                                                    <thead>
                                                        <tr>
                                                            <th style={{ width: "18%" }}>Tên bằng</th>
                                                            <th style={{ width: "18%" }}>Nơi đào tạo</th>
                                                            <th style={{ width: "13%" }}>Năm tốt nghiệp</th>
                                                            <th style={{ width: "15%" }}>Xếp loại</th>
                                                            <th style={{ width: "30%" }}>File đính kèm</th>
                                                            <th style={{ width: "5%" }}></th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {this.state.employeeNew.certificate !== [] && this.state.employeeNew.certificate.map((x, index) => (
                                                            <tr key={index}>
                                                                <td><input className={index} type="text" value={x.nameCertificate} name="nameCertificate" style={{ width: "100%" }} onChange={this.handleChangeCertificateAdd} /></td>
                                                                <td><input className={index} type="text" value={x.addressCertificate} name="addressCertificate" style={{ width: "100%" }} onChange={this.handleChangeCertificateAdd} /></td>
                                                                <td><input className={index} type="text" value={x.yearCertificate} name="yearCertificate" style={{ width: "100%" }} onChange={this.handleChangeCertificateAdd} /></td>
                                                                <td><select className={index} style={{ width: "100%", height: 26, paddingTop: 0, paddingLeft: 0 }} name="typeCertificate" onChange={this.handleChangeCertificateAdd}>
                                                                    <option>Suất sắc</option>
                                                                    <option>Giỏi</option>
                                                                    <option>Khá</option>
                                                                    <option>Trung bình khá</option>
                                                                    <option>Trung bình</option>
                                                                </select></td>
                                                                <td><div style={{ height: 26, paddingTop: 2 }} className="upload btn btn-default">Chọn tệp<input className={index} type="file" name="urlCertificate" id="file" onChange={this.handleChangeCertificateAdd} /></div> {x.urlCertificate === "" ? "Chưa có tệp nào được chọn" : x.urlCertificate}</td>
                                                                <td style={{ textAlign: "center" }}>
                                                                    <a href="#abc" className="delete" title="Delete" data-toggle="tooltip" onClick={() => this.delete("certificate", index)}><i className="material-icons"></i></a>
                                                                </td>
                                                            </tr>
                                                        ))}
                                                    </tbody>
                                                </table>
                                            </fieldset>
                                            <fieldset className="scheduler-border">
                                                <legend className="scheduler-border" style={{ marginBottom: 0 }}><h4 className="box-title">Chứng chỉ:</h4></legend>
                                                <button style={{ marginBottom: 5 }} type="submit" className="btn btn-success pull-right" id="addcertificateShort" title="Thêm mới bằng cấp/Chứng chỉ" onClick={this.handleAddNewAdd}>Thêm mới</button>
                                                <table className="table table-bordered " >
                                                    <thead>
                                                        <tr>
                                                            <th style={{ width: "22%" }}>Tên chứng chỉ</th>
                                                            <th style={{ width: "22%" }}>Nơi cấp</th>
                                                            <th style={{ width: "9%" }}>Ngày cấp</th>
                                                            <th style={{ width: "12%" }}>Ngày hết hạn</th>
                                                            <th style={{ width: "30%" }}>File đính kèm</th>
                                                            <th style={{ width: "5%" }}></th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {this.state.employeeNew.certificateShort !== [] && this.state.employeeNew.certificateShort.map((x, index) => (
                                                            <tr key={index}>
                                                                <td><input className={index} type="text" value={x.nameCertificateShort} name="nameCertificateShort" style={{ width: "100%" }} onChange={this.handleChangeCertificateShortAdd} /></td>
                                                                <td><input className={index} type="text" value={x.unit} name="unit" style={{ width: "100%" }} onChange={this.handleChangeCertificateShortAdd} /></td>
                                                                <td><input className={index} type="text" value={x.startDate} name="startDate" style={{ width: "100%" }} onChange={this.handleChangeCertificateShortAdd} /></td>
                                                                <td><input className={index} type="text" value={x.endDate} name="endDate" style={{ width: "100%" }} onChange={this.handleChangeCertificateShortAdd} /></td>
                                                                <td><div style={{ height: 26, paddingTop: 2 }} className="upload btn btn-default">Chọn tệp<input className={index} type="file" name="urlCertificateShort" id="file" onChange={this.handleChangeCertificateShortAdd} /></div> {x.urlCertificateShort === "" ? "Chưa có tệp nào được chọn" : x.urlCertificateShort}</td>
                                                                <td style={{ textAlign: "center" }}>
                                                                    <a href="#abc" className="delete" title="Delete" data-toggle="tooltip" onClick={() => this.delete("certificateShort", index)}><i className="material-icons"></i></a>
                                                                </td>
                                                            </tr>
                                                        ))}
                                                    </tbody>
                                                </table>
                                            </fieldset>
                                        </div>
                                    </div>
                                    <div id="addkinhnghiem" className="tab-pane">
                                        <div className="box-body">
                                            <fieldset className="scheduler-border">
                                                <legend className="scheduler-border" style={{ marginBottom: 0 }}><h4 className="box-title">Trình độ học vấn</h4></legend>
                                                <div className="form-group">
                                                    <label>Trình độ văn hoá:<span className="required">&#42;</span></label>
                                                    <select className="form-control" name="cultural" onChange={this.handleChangeAdd}>
                                                        <option>12/12</option>
                                                        <option>11/12</option>
                                                        <option>10/12</option>
                                                        <option>9/12</option>
                                                    </select>
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="foreignLanguage ">Trình độ ngoại ngữ:</label>
                                                    <input type="text" className="form-control" name="foreignLanguage" onChange={this.handleChangeAdd} />
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="educational ">Trình độ chuyên môn:</label>
                                                    <input type="text" className="form-control" name="educational" onChange={this.handleChangeAdd} />
                                                </div>
                                            </fieldset>
                                            <fieldset className="scheduler-border">
                                                <legend className="scheduler-border" style={{ marginBottom: 0 }} ><h4 className="box-title">Kinh nghiệm làm việc</h4></legend>
                                                <button style={{ marginBottom: 5 }} type="submit" className="btn btn-success pull-right" id="addexperience" title="Thêm mới kinh nghiệm làm việc" onClick={this.handleAddNewAdd}>Thêm mới</button>
                                                <table className="table table-bordered" >
                                                    <thead>
                                                        <tr>
                                                            <th style={{ width: '14%' }}>Từ tháng/năm</th>
                                                            <th style={{ width: '14%' }}>Đến tháng/năm</th>
                                                            <th>Đơn vị công tác</th>
                                                            <th>Chức vụ</th>
                                                            <th style={{ width: '5%' }}></th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {this.state.employeeNew.experience !== "" && this.state.employeeNew.experience.map((x, index) => (
                                                            <tr key={index}>
                                                                <td><input className={index} value={x.startDate} type="text" name="startDate" style={{ width: "100%" }} data-date-format="mm-yyyy" onChange={this.handleChangeExperienceAdd} /></td>
                                                                <td><input className={index} value={x.endDate} type="text" name="endDate" style={{ width: "100%" }} data-date-format="mm-yyyy" onChange={this.handleChangeExperienceAdd} /></td>
                                                                <td><input className={index} value={x.unit} type="text" name="unit" style={{ width: "100%" }} onChange={this.handleChangeExperienceAdd} /></td>
                                                                <td><input className={index} value={x.position} type="text" name="position" style={{ width: "100%" }} onChange={this.handleChangeExperienceAdd} /></td>
                                                                <td style={{ textAlign: "center" }}>
                                                                    <a href="#abc" className="delete" title="Delete" data-toggle="tooltip" onClick={() => this.delete("experience", index)}><i className="material-icons"></i></a>
                                                                </td>
                                                            </tr>
                                                        ))}
                                                    </tbody>
                                                </table>
                                            </fieldset>
                                        </div>
                                    </div>
                                    <div id="addbaohiem" className="tab-pane">
                                        <div className="box-body">
                                            <fieldset className="scheduler-border">
                                                <legend className="scheduler-border" style={{ marginBottom: 0 }} ><h4 className="box-title">Bảo hiểm y tế</h4></legend>
                                                <div className="form-group col-md-4">
                                                    <label htmlFor="numberBHYT">Mã số BHYT:<span className="required">&#42;</span></label>
                                                    <input type="text" className="form-control" name="numberBHYT" onChange={this.handleChangeAdd} />
                                                </div>
                                                <div className="form-group col-md-4">
                                                    <label htmlFor="startDateBHYT">Ngày có hiệu lực:<span className="required">&#42;</span></label>
                                                    <input type="text" className="form-control" name="startDateBHYT" onChange={this.handleChangeAdd} />
                                                </div>
                                                <div className="form-group col-md-4">
                                                    <label htmlFor="endDateBHYT">Ngày hết hạn:<span className="required">&#42;</span></label>
                                                    <input type="text" className="form-control" name="endDateBHYT" onChange={this.handleChangeAdd} />
                                                </div>
                                            </fieldset>
                                            <fieldset className="scheduler-border">
                                                <legend className="scheduler-border" style={{ marginBottom: 0 }} ><h4 className="box-title">Bảo hiểm Xã hội</h4></legend>
                                                <div className="form-group col-md-4">
                                                    <label htmlFor="numberBHXH">Mã số BHXH:<span className="required">&#42;</span></label>
                                                    <input type="text" className="form-control" name="numberBHXH" onChange={this.handleChangeAdd} />
                                                </div>
                                                <div className="col-md-12">
                                                    <h4 className="col-md-6" style={{ paddingLeft: 0 }}>Quá trình đóng bảo hiểm xã hội:</h4>
                                                    <button style={{ marginBottom: 5 }} type="submit" className="btn btn-success pull-right" id="addBHXH" title="Thêm mới bảo hiểm" onClick={this.handleAddNewAdd}>Thêm mới</button>
                                                    <table className="table table-bordered " >
                                                        <thead>
                                                            <tr>
                                                                <th style={{ width: "16%" }}>Từ tháng</th>
                                                                <th style={{ width: "16%" }}>Đến thánh</th>
                                                                <th style={{ width: "30%" }}>Chức vụ</th>
                                                                <th style={{ width: "30%" }}>Đơn vị công tác</th>
                                                                <th style={{ width: '5%' }}></th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            {this.state.employeeNew.BHXH !== "" && this.state.employeeNew.BHXH.map((x, index) => (
                                                                <tr key={index}>
                                                                    <td><input className={index} value={x.startDate} type="text" name="startDate" style={{ width: "100%", height: 26 }} onChange={this.handleChangeBHXHAdd} /></td>
                                                                    <td><input className={index} value={x.endDate} type="text" name="endDate" style={{ width: "100%", height: 26 }} onChange={this.handleChangeBHXHAdd} /></td>
                                                                    <td><input className={index} value={x.position} type="text" name="position" style={{ width: "100%", height: 26 }} onChange={this.handleChangeBHXHAdd} /></td>
                                                                    <td><input className={index} value={x.unit} type="text" name="unit" style={{ width: "100%", height: 26 }} onChange={this.handleChangeBHXHAdd} /></td>
                                                                    <td style={{ textAlign: "center" }}>
                                                                        <a href="#abc" className="delete" title="Delete" data-toggle="tooltip" onClick={() => this.delete("BHXH", index)}><i className="material-icons"></i></a>
                                                                    </td>
                                                                </tr>
                                                            ))}
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </fieldset>
                                        </div>
                                    </div>
                                    <div id="addhopdong" className="tab-pane">
                                        <div className="box-body">
                                            <fieldset className="scheduler-border">
                                                <legend className="scheduler-border" style={{ marginBottom: 0 }} ><h4 className="box-title">Hợp đồng lao động</h4></legend>
                                                <button style={{ marginBottom: 5 }} type="submit" className="btn btn-success pull-right" id="addcontract" title="Thêm mới hợp đồng lao động" onClick={this.handleAddNewAdd}>Thêm mới</button>
                                                <table className="table table-bordered " >
                                                    <thead>
                                                        <tr>
                                                            <th style={{ width: "25%" }}>Tên hợp đồng</th>
                                                            <th style={{ width: "13%" }}>Loại hợp đồng</th>
                                                            <th style={{ width: "14%" }}>Ngày có hiệu lực</th>
                                                            <th style={{ width: "13%" }}>Ngày hết hạn</th>
                                                            <th style={{ width: "30%" }}>File đính kèm</th>
                                                            <th style={{ width: '5%' }}></th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {this.state.employeeNew.contract !== "" && this.state.employeeNew.contract.map((x, index) => (
                                                            <tr key={index}>
                                                                <td><input className={index} value={x.nameContract} type="text" name="nameContract" style={{ width: "100%" }} onChange={this.handleChangeContractAdd} /></td>
                                                                <td><input className={index} value={x.typeContract} type="text" name="typeContract" style={{ width: "100%" }} onChange={this.handleChangeContractAdd} /></td>
                                                                <td><input className={index} value={x.startDate} type="date" name="startDate" style={{ width: "100%" }} onChange={this.handleChangeContractAdd} /></td>
                                                                <td><input className={index} value={x.endDate} type="date" name="endDate" style={{ width: "100%" }} onChange={this.handleChangeContractAdd} /></td>
                                                                <td><div style={{ height: 26, paddingTop: 2 }} className="upload btn btn-default">Chọn tệp<input className={index} type="file" name="urlContract" id="file1" onChange={this.handleChangeContractAdd} /></div> {x.urlContract === "" ? "Chưa có tệp nào được chọn" : x.urlContract}</td>
                                                                <td style={{ textAlign: "center" }}>
                                                                    <a href="#abc" className="delete" title="Delete" data-toggle="tooltip" onClick={() => this.delete("contract", index)}><i className="material-icons"></i></a>
                                                                </td>
                                                            </tr>
                                                        ))}
                                                    </tbody>
                                                </table>
                                            </fieldset>
                                            <fieldset className="scheduler-border">
                                                <legend className="scheduler-border" style={{ marginBottom: 0 }} ><h4 className="box-title">Quá trình đào tạo</h4></legend>
                                                <button style={{ marginBottom: 5 }} type="submit" className="btn btn-success pull-right" id="addcourse" title="Thêm mới quá trình đào tạo" onClick={this.handleAddNewAdd}>Thêm mới</button>
                                                <table className="table table-bordered table-hover" >
                                                    <thead>
                                                        <tr>
                                                            <th style={{ width: '20%' }}>Tên khoá học</th>
                                                            <th style={{ width: '13%' }}>Ngày bắt đầu</th>
                                                            <th style={{ width: '13%' }}>Ngày kết thúc</th>
                                                            <th style={{ width: '20%' }}>Nơi đào tạo</th>
                                                            <th style={{ width: '%12' }}>Loại đào tạo</th>
                                                            <th style={{ width: '17%' }}>Trạng thái</th>
                                                            <th style={{ width: '5%' }}></th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {this.state.employeeNew.course !== "" && this.state.employeeNew.course.map((x, index) => (
                                                            <tr key={index}>
                                                                <td><input className={index} value={x.nameCourse} type="text" name="nameCourse" style={{ width: "100%" }} onChange={this.handleChangeCourseAdd} /></td>
                                                                <td><input className={index} value={x.startDate} type="date" name="startDate" style={{ width: "100%" }} onChange={this.handleChangeCourseAdd} /></td>
                                                                <td><input className={index} value={x.endDate} type="date" name="endDate" style={{ width: "100%" }} onChange={this.handleChangeCourseAdd} /></td>
                                                                <td><input className={index} value={x.unit} type="text" name="unit" style={{ width: "100%" }} onChange={this.handleChangeCourseAdd} /></td>
                                                                <td><select className={index} style={{ width: "100%", height: 26, paddingTop: 0, paddingLeft: 0 }} name="typeCourse" onChange={this.handleChangeCourseAdd}>
                                                                    <option>Nội bộ</option>
                                                                    <option>Ngoài</option>
                                                                </select></td>
                                                                <td><select className={index} style={{ width: "100%", height: 26, paddingTop: 0, paddingLeft: 0 }} name="status" onChange={this.handleChangeCourseAdd}>
                                                                    <option>Chưa hoàn thành</option>
                                                                    <option>Hoàn thành</option>
                                                                </select></td>
                                                                <td style={{ textAlign: "center" }}>
                                                                    <a href="#abc" className="delete" title="Delete" data-toggle="tooltip" onClick={() => this.delete("course", index)}><i className="material-icons"></i></a>
                                                                </td>
                                                            </tr>
                                                        ))}
                                                    </tbody>
                                                </table>
                                            </fieldset>
                                        </div>
                                    </div>
                                    <div id="addtailieu" className="tab-pane">
                                        <div className="box-body">
                                            <div className="col-md-4">
                                                <div className="form-group" style={{ paddingTop: 3 }}>
                                                    <label htmlFor="numberFile">Mã hồ sơ:<span className="required">&#42;</span></label>
                                                    <input type="text" className="form-control" name="numberFile" onChange={this.handleChangeAdd} />
                                                </div>
                                            </div>
                                            <div className="col-md-12">
                                                <h4 className="col-md-6" style={{ paddingLeft: 0 }}>Danh sách tài liệu đính kèm:</h4>
                                                <button style={{ marginBottom: 5 }} type="submit" className="btn btn-success pull-right" id="addfile" title="Thêm mới bảo hiểm" onClick={this.handleAddNewAdd}>Thêm mới</button>
                                                <table className="table table-bordered " >
                                                    <thead>
                                                        <tr>
                                                            <th style={{ width: "22%" }}>Tên tài liệu</th>
                                                            <th style={{ width: "22%" }}>Mô tả</th>
                                                            <th style={{ width: "9%" }}>Số lượng</th>
                                                            <th style={{ width: "12%" }}>Trạng thái</th>
                                                            <th style={{ width: "30%" }}>File đính kèm</th>
                                                            <th style={{ width: '5%' }}></th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {this.state.employeeNew.file !== "" && this.state.employeeNew.file.map((x, index) => (
                                                            <tr key={index}>
                                                                <td><input className={index} value={x.nameFile} type="text" name="nameFile" style={{ width: "100%", height: 26 }} onChange={this.handleChangeFileAdd} /></td>
                                                                <td><input className={index} value={x.discFile} type="text" name="discFile" style={{ width: "100%", height: 26 }} onChange={this.handleChangeFileAdd} /></td>
                                                                <td><input className={index} value={x.number} type="number" name="number" style={{ width: "100%", height: 26 }} onChange={this.handleChangeFileAdd} /></td>
                                                                <td><select className={index} style={{ width: "100%", height: 26, paddingTop: 0, paddingLeft: 0 }} name="status" onChange={this.handleChangeFileAdd}>
                                                                    <option>Chưa nộp</option>
                                                                    <option>Đã nộp</option>
                                                                    <option>Đã trả</option>
                                                                </select></td>
                                                                <td><div style={{ height: 26, paddingTop: 2 }} className="upload btn btn-default">Chọn tệp<input className={index} type="file" name="urlFile" id="file" onChange={this.handleChangeFileAdd} /></div> {x.urlFile === "" ? "Chưa có tệp nào được chọn" : x.urlFile}</td>
                                                                <td style={{ textAlign: "center" }}>
                                                                    <a href="#abc" className="delete" title="Delete" data-toggle="tooltip" onClick={() => this.delete("file", index)}><i className="material-icons"></i></a>
                                                                </td>
                                                            </tr>
                                                        ))}
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                        <div className=" box-footer">

                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* </form> */}
                            <ToastContainer />
                            {/* </div> */}
                        </div>
                        <div className="modal-footer">
                            <div className="form-group col-md-6" style={{ marginBottom: 0 }}>
                                <div className="checkbox" style={{ marginBottom: 0, marginTop: 0 }}>
                                    <center>
                                        <label>
                                            (<span style={{ color: "red" }}>*</span>): là các trường bắt buộc phải nhập.
                                    </label>
                                    </center>
                                    <center>
                                        <label style={{ color: "red", display: "inline", paddingLeft: 0 }}><p>
                                            (Vui lòng điền đầy đủ các trường bắt buộc trước khi thực hiện việc thêm nhân viên)</p>
                                        </label>
                                    </center>
                                </div>

                            </div>
                            <div className="col-md-12">
                                <button type="submit" title="Huỷ thêm mới nhân viên " className="btn btn-default pull-right btnuser" data-dismiss="modal" >Đóng</button>
                                <button type="submit" title="Thêm nhân viên mới" className="btn btn-success pull-right btnuser" onClick={this.handleSubmitAdd} htmlFor="form">Thêm nhân viên</button>


                            </div>



                        </div>
                    </div>
                    {/* /.modal-content */}
                </div>
                {/* /.modal-dialog */}
            </div>
        );
    }
};
function mapState(state) {
    const { employees } = state;
    return { employees };
};

const actionCreators = {
    addNewEmployee: employeeActions.addNewEmployee,
    getInformationEmployee: employeeActions.getInformationEmployee,
};

const connectedAddEmplyee = connect(mapState, actionCreators)(ModalAddEmployee);
export { connectedAddEmplyee as ModalAddEmployee };