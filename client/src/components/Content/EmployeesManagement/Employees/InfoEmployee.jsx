import React, { Component } from 'react';
import { node } from 'prop-types';

class InfoEmployee extends Component {
    render() {
        return (
            <div className="row">
                {/* left column */}
                <div className="col-md-12">
                    <div className="box">
                        <ul className="nav nav-tabs" style={{ backgroundColor: '#f9fafc' }}>
                            <li className="active" style={{ paddingBottom: 1 }}><a data-toggle="tab" href="#thongtinchung">Thông tin chung</a></li>
                            <li style={{ paddingBottom: 1 }}><a data-toggle="tab" href="#lienhe">Thông tin liên hệ</a></li>
                            <li style={{ paddingBottom: 1 }}><a data-toggle="tab" href="#taikhoan">Số thẻ - Tài khoản</a></li>
                            <li style={{ paddingBottom: 1 }}><a data-toggle="tab" href="#bangcap">Bằng cấp - Chứng chỉ</a></li>
                            <li style={{ paddingBottom: 1 }}><a data-toggle="tab" href="#congtac">Quá trình công tác</a></li>
                            <li style={{ paddingBottom: 1 }}><a data-toggle="tab" href="#hopdong">Hợp đồng lao động</a></li>
                            <li style={{ paddingBottom: 1 }}><a data-toggle="tab" href="#luong">Lịch sử lương</a></li>
                        </ul>
                        <div className="tab-content">
                            <div id="thongtinchung" className="tab-pane fade in active">
                                <div className="box-body">
                                    <div className="col-md-12">
                                        <div className="col-md-3">
                                            <div className="form-group">
                                                <img className="attachment-img" id="avarta" src="adminLTE/dist/img/avatar5.png" alt="Attachment Image" />
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="form-group" style={{ marginTop: 20 }}>
                                                <strong>Mã nhân viên : </strong>
                                                VN0123456
                                                </div>
                                            <div className="form-group">
                                                <strong>Họ và tên : </strong>
                                                Trần Hùng Cường
                                                </div>
                                            <div className="form-group">
                                                <strong>Giới tính : </strong>
                                                Nam
                                                </div>
                                            <div className="form-group">
                                                <strong>Ngày sinh : </strong>
                                                17/04/1997
                                                </div>
                                            <div className="form-group">
                                                <strong>Nơi sinh : </strong>
                                                Hải Phương-Hải Hậu-Nam Định
                                                </div>
                                            <div className="form-group">
                                                <strong>Số điện thoại : </strong>
                                                0971235489
                                                </div>
                                            <div className="form-group">
                                                <strong>Email công ty : </strong>
                                                cuong123456@gmail.com
                                                </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="form-group" style={{ marginTop: 20 }}>
                                                <strong>Mã số chấm công : </strong>
                                                12598
                                                </div>
                                            <div className="form-group">
                                                <strong>Bộ phận : </strong>
                                                Phòng Hành chính
                                                </div>
                                            <div className="form-group">
                                                <strong>Chức vụ : </strong>
                                                Giám đốc
                                                </div>
                                            <div className="form-group">
                                                <strong>Chức danh : </strong>
                                                Giám đốc phòng hành chính
                                                </div>
                                            <div className="form-group">
                                                <strong>Dân tộc : </strong>
                                                Kinh
                                                </div>
                                            <div className="form-group">
                                                <strong>Tôn giáo : </strong>
                                                Không
                                                </div>
                                            <div className="form-group">
                                                <strong>Tình trạng hôn nhân : </strong>
                                                Độc thân
                                                </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="box-footer col-md-12">
                                    <button type="submit" className="btn btn-primary col-md-2 pull-right btnuserupdate" id="" >Cập nhật thông tin</button>
                                    
                                </div>
                            </div>
                            <div id="lienhe" className="tab-pane fade" style={{ display: node }}>
                                <div className="box-body">
                                    <div className="col-md-12">
                                        <div className="form-group" style={{ marginLeft: 35, marginTop:20 }}>
                                            <strong>Điện thoại nhà riêng&emsp;: </strong>
                                            0386259896
                                            </div>
                                        <div className="form-group" style={{marginLeft:35}}>
                                            <strong>Email cá nhân&emsp;: </strong>
                                            cuong123456@gmail.com
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <fieldset className="scheduler-border">
                                            <legend className="scheduler-border">Liên hệ khẩn cấp</legend>
                                            <div className="col-md-6">
                                                <div className="form-group" >
                                                    <strong>Họ và tên&emsp;: </strong>
                                                    Trần Đức thuận
                                                </div>
                                                <div className="form-group" >
                                                    <strong>Quan hệ&emsp;: </strong>
                                                    Anh trai
                                                </div>
                                                <div className="form-group" >
                                                    <strong>Điện Thoại di động&emsp;: </strong>
                                                    0385629874
                                                </div>
                                                <div className="form-group" >
                                                    <strong>Điện thoại nhà riêng&emsp;: </strong>
                                                    thuan123456@gmail.com
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-group" >
                                                    <strong>Email&emsp;: </strong>
                                                    thuan123456@gmail.com
                                                </div>
                                                <div className="form-group" >
                                                    <strong>Địa chỉ&emsp;: </strong>
                                                    Hải Phương - Hải Hậu - Nam Định
                                                </div>
                                            </div>
                                        </fieldset>
                                    </div>
                                    <div className="col-md-6">
                                        <fieldset className="scheduler-border">
                                            <legend className="scheduler-border">Hộ khẩu thường trú</legend>
                                            <div className="form-group" >
                                                    <strong>Địa chỉ&emsp;: </strong>
                                                    Hải Phương - Hải Hậu - Nam Định
                                                </div>
                                            <div className="form-group" >
                                                <strong>Quốc gia&emsp;: </strong>
                                                Việt Nam
                                            </div>
                                            <div className="form-group" >
                                                <strong>Tỉnh/Thành phố&emsp;: </strong>
                                                Nam Định
                                            </div>
                                            <div className="form-group" >
                                                <strong>Quận/Huyện&emsp;: </strong>
                                                Hải Hậu
                                            </div>
                                            <div className="form-group" >
                                                <strong>Xã/Phường&emsp;: </strong>
                                                Hải Phương
                                            </div>
                                        </fieldset>
                                    </div>
                                    <div className= "col-md-6">
                                        <fieldset className="scheduler-border">
                                            <legend className="scheduler-border">Chỗ ở hiện tại</legend>
                                            <div className="form-group" >
                                                    <strong>Địa chỉ&emsp;: </strong>
                                                    Hải Phương - Hải Hậu - Nam Định
                                            </div>
                                            <div className="form-group" >
                                                <strong>Quốc gia&emsp;: </strong>
                                                Việt Nam
                                            </div>
                                            <div className="form-group" >
                                                <strong>Tỉnh/Thành phố&emsp;: </strong>
                                                Nam Định
                                            </div>
                                            <div className="form-group" >
                                                <strong>Quận/Huyện&emsp;: </strong>
                                                Hải Hậu
                                            </div>
                                            <div className="form-group" >
                                                <strong>Xã/Phường&emsp;: </strong>
                                                Hải Phương
                                            </div>
                                        </fieldset>
                                    </div>
                                </div>
                                <div className="box-footer col-md-12">
                                    <button type="submit" className="btn btn-primary col-md-2 pull-right btnuserupdate" id="" >Cập nhật thông tin</button>
                                    
                                </div>
                            </div>
                            <div id="taikhoan" className="tab-pane fade">
                                <div className="box-body">
                                    <h3>taikhoan</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                </div>
                                <div className="box-footer col-md-12">
                                    <button type="submit" className="btn btn-primary col-md-2 pull-right btnuserupdate" id="" >Cập nhật thông tin</button>
                                    
                                </div>
                            </div>
                            <div id="bangcap" className="tab-pane fade">
                                <div className="box-body">
                                    <h3>bangcap</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                </div>
                                <div className="box-footer col-md-12">
                                    <button type="submit" className="btn btn-primary col-md-2 pull-right btnuserupdate" id="" >Cập nhật thông tin</button>
                                    
                                </div>
                            </div>
                            <div id="congtac" className="tab-pane fade">
                                <div className="box-body">
                                    <h3>congtac</h3>
                                    <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                </div>
                                <div className="box-footer col-md-12">
                                    <button type="submit" className="btn btn-primary col-md-2 pull-right btnuserupdate" id="" >Cập nhật thông tin</button>
                                    
                                </div>
                            </div>
                            <div id="hopdong" className="tab-pane fade">
                                <div className="box-body">
                                    <h3>hopdong</h3>
                                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.</p>
                                </div>
                                <div className="box-footer col-md-12">
                                    <button type="submit" className="btn btn-primary col-md-2 pull-right btnuserupdate" id="" >Cập nhật thông tin</button>
                                    
                                </div>
                            </div>
                            <div id="luong" className="tab-pane fade">
                                <div className="box-body">
                                    <h3>luong</h3>
                                    <p>Eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                                </div>
                                <div className="box-footer col-md-12">
                                    <button type="submit" title="Cập nhật thông tin" className="btn btn-primary col-md-2 pull-right btnuserupdate" id="" >Cập nhật thông tin</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    };
}

export { InfoEmployee };