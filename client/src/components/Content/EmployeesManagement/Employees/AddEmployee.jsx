import React, { Component } from 'react';

class AddEmployee extends Component {
    render() {
        return (
            <div className="content-wrapper">
                {/* Content Header (Page header) */}
                <section className="content-header">
                    <h1>
                        Thêm nhân viên
                    </h1>
                    <ol className="breadcrumb">
                        <li><a href="#"><i className="fa fa-dashboard" /> Home</a></li>
                        <li className="active">Quản lý nhân sự</li>
                    </ol>
                </section>
                <section className="content">
                    <div className="row">
                        {/* left column */}
                        <div className="col-md-12">
                            <form>
                                {/* general form elements */}
                                <div className="box box-default">
                                    <div className="box-body">
                                        <div className="col-md-12">
                                            <h3 className="box-title">Thông tin cơ bản</h3>
                                            <hr id="hr"/>
                                            <div className="col-md-3">
                                                <div className="form-group">
                                                    <img className="attachment-img" id="avarta" src="adminLTE/dist/img/avatar5.png" alt="Attachment Image" />
                                                    <button type="button" className="btn btn-default" style={{ marginLeft: 55 }}>Chọn ảnh</button>
                                                </div>
                                                {/* <div class="form-group">
					            			<label style="margin-left: 75px">Ảnh 4 X 6</label>
					            		</div> */}
                                            </div>
                                            <div className=" col-md-4">
                                                <div className="form-group">
                                                    <label htmlFor="MSNV">Mã nhân viên:</label>
                                                    <input type="text" className="form-control" id="MSNV" placeholder="Mã số nhân viên" />
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="fullname">Họ và tên:</label>
                                                    <input type="text" className="form-control" id="fullname" placeholder="Họ và tên" />
                                                </div>
                                                <div className="form-group">
                                                    <label style={{ display: 'block', paddingBottom: 4 }}>Giới tính:</label>
                                                    <input type="radio" name="gender" className="" defaultChecked style={{ marginLeft: 30, marginRight:5 }} />
                                                    <label>Nam</label>
                                                    <input type="radio" name="gender" className="" style={{ marginLeft: 90, marginRight:5 }} />
                                                    <label>Nữ</label>
                                                </div>
                                                <div className="form-group" style={{ paddingTop: 3 }}>
                                                    <label htmlFor="phoneNumber">Số điện thoại:</label>
                                                    <input type="text" className="form-control" id="phoneNumber" />
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="email">Email:</label>
                                                    <input type="email" className="form-control" id="email" />
                                                </div>
                                            </div>
                                            <div className=" col-md-4">
                                                <div className="form-group">
                                                    <label htmlFor="MSCC">Mã số chấm công:</label>
                                                    <input type="text" className="form-control" id="MSCC" placeholder="Mã số chấm công" />
                                                </div>
                                                <div className="form-group">
                                                    <label>Bộ phận:</label>
                                                    <select className="form-control">
                                                        <option>-- Null --</option>
                                                        <option>Phòng nhân sự</option>
                                                        <option>Phòng hành chính</option>
                                                        <option>Phòng kinh doanh</option>
                                                        <option>Phòng Marketing</option>
                                                    </select>
                                                </div>
                                                <div className="form-group">
                                                    <label>Chức vụ:</label>
                                                    <select className="form-control">
                                                        <option>-- Null --</option>
                                                        <option>Trưởng phòng</option>
                                                        <option>Phó phòng</option>
                                                        <option>Nhân viên</option>
                                                    </select>
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="Reputation">Chức danh:</label>
                                                    <input type="text" className="form-control" id="Reputation" />
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="address">Nơi ở hiện tại:</label>
                                                    <input type="text" className="form-control" id="address" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <h3 className="box-title">Thông tin cá nhân</h3>
                                            <hr id="hr"/>
                                            <div className="col-md-4">
                                                <div className="form-group">
                                                    <label htmlFor="MST">Mã số thuế:</label>
                                                    <input type="text" className="form-control" id="MST" />
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="CMND">Số CMND/Hộ chiếu:</label>
                                                    <input type="text" className="form-control" id="CMND" />
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="brithday">Ngày sinh:</label>
                                                    <input type="Date" className="form-control" id="brithday" />
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="nativeLand">Quê quán</label>
                                                    <input type="text" className="form-control" id="nativeLand" />
                                                </div>
                                            </div>
                                            <div className="col-md-4">
                                                <div className="form-group">
                                                    <label htmlFor="BHYT">Mã số thẻ BHYT:</label>
                                                    <input type="text" className="form-control" id="BHYT" />
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="DateCMTND">Ngày cấp:</label>
                                                    <input type="Date" className="form-control" id="DateCMTND" />
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="birthplace">Nơi sinh:</label>
                                                    <input type="text" className="form-control" id="birthplace" />
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="national">Dân tộc:</label>
                                                    <input type="text" className="form-control" id="national" />
                                                </div>
                                            </div>
                                            <div className="col-md-4">
                                                <div className="form-group">
                                                    <label htmlFor="ATM">Số tài khoản ngân hàng:</label>
                                                    <input type="text" className="form-control" id="ATM" />
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="addressCMND">Nơi cấp:</label>
                                                    <input type="text" className="form-control" id="addressCMND" />
                                                </div>
                                                <div className="form-group">
                                                    <label style={{ display: 'block', paddingBottom: 7 }}>Tình trạng hôn nhân:</label>
                                                    <input type="radio" name="relationship" className="" defaultChecked style={{ marginLeft: 30, marginRight:5 }} />
                                                    <label> Độc thân</label>
                                                    <input type="radio" name="relationship" className="" style={{ marginLeft: 90, marginRight:5 }} />
                                                    <label> Đã kết hôn</label>
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="religion">Tôn giáo:</label>
                                                    <input type="text" className="form-control" id="religion" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <h3 className="box-title">Trình độ học vấn</h3>
                                            <hr id="hr"/>
                                            <div className="form-group">
                                                <label htmlFor="Educational ">Trình độ văn hoá:</label>
                                                <input type="text" className="form-control" id="Educational" placeholder="12/12" />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="foreignLanguage ">Trình độ ngoại ngữ:</label>
                                                <input type="text" className="form-control" id="foreignLanguage" />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="Educational ">Trình độ chuyên môn:</label>
                                                <input type="text" className="form-control" id="Educational" />
                                            </div>
                                            <div className="form-group">
                                                <label>Chứng chỉ:</label>
                                                <table className="table" id="certificate" style={{ marginBottom: 0 }}>
                                                    <thead>
                                                        <tr>
                                                            <th>Tên chứng chỉ</th>
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
                                            <hr id="hr"/>
                                            <table className="table" id="experience" style={{ marginBottom: 0 }}>
                                                <thead>
                                                    <tr>
                                                        <th style={{ width: '14%', paddingRight:25 }}>Từ tháng năm đến tháng năm</th>
                                                        <th>Đơn vị công tác</th>
                                                        <th>Chức vụ</th>
                                                        <th style={{ width: '12%' }}>Hoạt động</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                </tbody>
                                                <tfoot>
                                                    <tr>
                                                        <td colSpan={3} />
                                                        <td><button type="button" title="Thêm mới" className="btn btn-success add-new2"><i className="fa fa-plus" /></button></td>
                                                    </tr>
                                                </tfoot>
                                            </table>
                                        </div>
                                    </div>
                                    <div className="box-footer col-md-12">
                                        <button type="submit" className="btn btn-primary col-md-2 pull-right" id="btnuser" >Xoá trắng</button>
                                        <button type="submit" className="btn btn-success col-md-2 pull-right" id="btnuser" >Thêm nhân viên</button>
                                    </div>
                                </div>
                            </form></div>
                    </div>
                </section></div>
        );
    };
}

export { AddEmployee };