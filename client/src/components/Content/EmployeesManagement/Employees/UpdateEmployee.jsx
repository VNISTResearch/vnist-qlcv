import React, { Component } from 'react';

class UpdateEmployee extends Component {
    render() {
        return (
            <div className="content-wrapper">
                {/* Content Header (Page header) */}
                <section className="content-header">
                    <h1>
                        Cập nhật thông tin nhân viên
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
                                            <hr className="hr"/>
                                            <div className="col-md-3">
                                                <div className="form-group">
                                                    <img className="attachment-img avarta" src="adminLTE/dist/img/avatar5.png" alt="Attachment Image" />
                                                    <button type="button" className="btn btn-default" style={{ marginLeft: 55 }}>Chọn ảnh</button>
                                                </div>
                                            </div>
                                            <div className=" col-md-4">
                                                <div className="form-group">
                                                    <label htmlFor="MSNV">Mã nhân viên:</label>
                                                    <input type="text" className="form-control" id="MSNV" value="20191256" disabled/>
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="fullname">Họ và tên:</label>
                                                    <input type="text" className="form-control" id="fullname" value="Nguyễn Chí Thanh" disabled />
                                                </div>
                                                <div className="form-group">
                                                    <label style={{ display: 'block', paddingBottom: 4 }}>Giới tính:</label>
                                                    <input type="radio" name="gender" className="" defaultChecked style={{ marginLeft: 30, marginRight:5 }} />
                                                    <label>Nam</label>
                                                    <input type="radio" name="gender" className="" style={{ marginLeft: 90, marginRight:5 }} />
                                                    <label>Nữ</label>
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="national">Dân tộc:</label>
                                                    <input type="text" className="form-control" id="national" placeholder="Kinh" />
                                                </div>
                                            </div>
                                            <div className=" col-md-4">
                                                <div className="form-group">
                                                    <label htmlFor="MSCC">Mã số chấm công:</label>
                                                    <input type="text" className="form-control" id="MSCC" value="12564" disabled />
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="Bophan">Bộ phận:</label>
                                                    <input type="text" className="form-control" id="Bophan" value="Phòng hành chính" disabled />
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
                                                    <input type="text" className="form-control" id="religion" placeholder="Không"/>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <h3 className="box-title">Thông tin liên hệ</h3>
                                            <hr className="hr"/>
                                            <div className="col-md-4">
                                                <div className="form-group">
                                                    <label htmlFor="phoneNumber">Điện thoại di động:</label>
                                                    <input type="text" className="form-control" id="phoneNumber" placeholder="0386259896"/>
                                                </div>
                                            </div>
                                            <div className="col-md-4">
                                                <div className="form-group">
                                                    <label htmlFor="email">Email cá nhân:</label>
                                                    <input type="text" className="form-control" id="email" placeholder="cuong123456@gmail.com"/>
                                                </div>
                                            </div>
                                            <div className="col-md-4">
                                                <div className="form-group">
                                                    <label htmlFor="phoneNumberAddress">Điện thoại nhà riêng:</label>
                                                    <input type="text" className="form-control" id="phoneNumberAddress" placeholder="0386259896"/>
                                                </div>
                                            </div>
                                            
                                            <div className="col-md-12">
                                                <fieldset className="scheduler-border">
                                                    <legend className="scheduler-border">Liên hệ khẩn cấp</legend>
                                                    <div className="col-md-6">
                                                        <div className="form-group" >
                                                            <label htmlFor="friendName">Họ và tên:</label>
                                                            <input type="text" className="form-control" id="friendName" placeholder="Trần Đức thuận"/>
                                                            
                                                        </div>
                                                        <div className="form-group" >
                                                            <label htmlFor="quanhe">Quan hệ:</label>
                                                            <input type="text" className="form-control" id="quanhe" placeholder="Anh trai"/>
                                                        </div>
                                                        <div className="form-group" >
                                                            <label htmlFor="friendPhone">Điện Thoại di động:</label>
                                                            <input type="text" className="form-control" id="friendPhone" placeholder="0385629874"/>
                                                        </div>
                                                        <div className="form-group" >
                                                            <label htmlFor="friendEmail">Email:</label>
                                                            <input type="text" className="form-control" id="friendEmail" placeholder="thuan123456@gmail.com"/>
                                                        </div>
                                                        
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="form-group" >
                                                            <label htmlFor="friendPhoneAddress">Điện thoại nhà riêng:</label>
                                                            <input type="text" className="form-control" id="friendPhoneAddress" placeholder="0385629874"/>
                                                        </div>
                                                        <div className="form-group" >
                                                            <label htmlFor="friendAddress">Địa chỉ:</label>
                                                            <input type="text" className="form-control" id="friendAddress" placeholder="Hải Phương - Hải Hậu - Nam Định"/>
                                                        </div>
                                                    </div>
                                                </fieldset>
                                            </div>

                                            <div className="col-md-6">
                                                <fieldset className="scheduler-border">
                                                    <legend className="scheduler-border">Hộ khẩu thường trú</legend>
                                                    <div className="form-group" >
                                                        <label htmlFor="localAddress">Địa chỉ:</label>
                                                        <input type="text" className="form-control" id="localAddress" placeholder="Hải Phương - Hải Hậu - Nam Định"/>
                                                    </div>
                                                    <div className="form-group" >
                                                        <label htmlFor="localNational">Quốc gia:</label>
                                                        <input type="text" className="form-control" id="localNational" placeholder="Việt Nam"/>
                                                    </div>
                                                    <div className="form-group" >
                                                        <label htmlFor="localCity">Tỉnh/Thành phố:</label>
                                                        <input type="text" className="form-control" id="localCity" placeholder="Nam Định"/>
                                                    </div>
                                                    <div className="form-group" >
                                                        <label htmlFor="localDistrict">Quận/Huyện:</label>
                                                        <input type="text" className="form-control" id="localDistrict" placeholder="Hải Hậu"/>
                                                    </div>
                                                    <div className="form-group" >
                                                        <label htmlFor="localCommune">Xã/Phường:</label>
                                                        <input type="text" className="form-control" id="localCommune" placeholder="Hải Phương"/>
                                                    </div>
                                                </fieldset>
                                            </div>

                                            <div className="col-md-6">
                                                <fieldset className="scheduler-border">
                                                    <legend className="scheduler-border">Chỗ ở hiện tại</legend>
                                                    <div className="form-group" >
                                                        <label htmlFor="nowAddress">Địa chỉ:</label>
                                                        <input type="text" className="form-control" id="nowAddress" placeholder="Hải Phương - Hải Hậu - Nam Định"/>
                                                    </div>
                                                    <div className="form-group" >
                                                        <label htmlFor="nowNational">Quốc gia:</label>
                                                        <input type="text" className="form-control" id="nowNational" placeholder="Việt Nam"/>
                                                    </div>
                                                    <div className="form-group" >
                                                        <label htmlFor="nowCity">Tỉnh/Thành phố:</label>
                                                        <input type="text" className="form-control" id="nowCity" placeholder="Nam Định"/>
                                                    </div>
                                                    <div className="form-group" >
                                                        <label htmlFor="nowDistrict">Quận/Huyện:</label>
                                                        <input type="text" className="form-control" id="nowDistrict" placeholder="Hải Hậu"/>
                                                    </div>
                                                    <div className="form-group" >
                                                        <label htmlFor="nowCommune">Xã/Phường:</label>
                                                        <input type="text" className="form-control" id="nowCommune" placeholder="Hải Phương"/>
                                                    </div>
                                                </fieldset>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="box-footer">
                                        <div className="form-group col-md-12">
                                            <div className="checkbox" style={{paddingLeft:"20%"}}>
                                                <label>
                                                    <input type="checkbox" />
                                                    Tôi xin cam đoan những lời khai trên đây là đúng sự thật và chịu trách nhiệm cho những lời khai này.
                                                </label>
                                                <label style={{color:"red"}}>
                                                    (Những thông tin khác vui lòng liên hệ các bên liên quan để được xử lý)
                                                </label>
                                            </div>
                                        </div>
                                        <button type="submit" title="Cập nhật thông tin nhân viên" className="btn btn-primary col-md-2 pull-right btnuserupdate"  >Cập nhật thông tin</button>
                                
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </section></div>
        );
    };
}

export { UpdateEmployee };