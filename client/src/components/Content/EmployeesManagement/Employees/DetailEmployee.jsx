import React, { Component } from 'react';
import { connect } from 'react-redux';
import { employeeActions } from '../../../../redux-actions/EmployeeActions';
class DetailEmployee extends Component {
    componentDidMount() {
        this.props.getInformationEmployee("20150535");
    }
    render() {
        //console.log(this.props.employees);
        var employee, employeeContact;
        const { employees } = this.props;
        if (employees.employee) employee = employees.employee;
        if (employees.employeeContact) employeeContact = employees.employeeContact

        return (
            <div className="content-wrapper">
                {/* Content Header (Page header) */}
                <section className="content-header">
                    <h1>
                        Thông tin nhân viên
                    </h1>
                    <ol className="breadcrumb">
                        <li><a href="#abc"><i className="fa fa-dashboard" /> Home</a></li>
                        <li className="active">Quản lý nhân sự</li>
                    </ol>
                    <a href="/updateemployee"><button type="submit" className="btn btn-primary pull-right " id="" style={{ marginTop: 20, marginBottom: 10 }}>Cập nhật thông tin</button></a>
                </section>
                <section className="content">
                    <div className="row">
                        {/* left column */}
                        <div className="col-sm-12">
                            <div className="box">
                                <div className="nav-tabs-custom">
                                    <ul className="nav nav-tabs">
                                        <li className="active"><a data-toggle="tab" href="#thongtinchung">Thông tin chung</a></li>
                                        <li style={{ marginRight: 0 }}><a data-toggle="tab" href="#lienhe">Thông tin liên hệ</a></li>
                                        <li style={{ marginRight: 0 }}><a data-toggle="tab" href="#taikhoan">Số thẻ - Tài khoản</a></li>
                                        <li style={{ marginRight: 0 }}><a data-toggle="tab" href="#hocvan">Trình độ học vấn</a></li>
                                        <li style={{ marginRight: 0 }}><a data-toggle="tab" href="#kinhnghiem">Kinh nghiệm làm việc</a></li>
                                        <li style={{ marginRight: 0 }}><a data-toggle="tab" href="#hopdong">Hợp đồng - Bảo hiểm</a></li>
                                        <li style={{ marginRight: 0 }}><a data-toggle="tab" href="#daotao">Quá trình đào tạo</a></li>
                                    </ul>
                                    {employee && employee.map((x, index) => (
                                        <div className="tab-content" key={index}>
                                            <div id="thongtinchung" className="tab-pane active">
                                                <div className="box-body">
                                                    <div className="col-sm-12">
                                                        <div className="col-sm-3">
                                                            <div className="form-group">
                                                                <img className="attachment-img avarta" src="adminLTE/dist/img/avatar5.png" alt="Attachment" />
                                                            </div>
                                                        </div>
                                                        <div className="col-sm-5">
                                                            <div className="form-group" style={{ marginTop: 20 }}>
                                                                <strong>Mã nhân viên:&emsp; </strong>
                                                                {x.employeeNumber}
                                                            </div>
                                                            <div className="form-group">
                                                                <strong>Họ và tên:&emsp; </strong>
                                                                {x.fullName}
                                                            </div>
                                                            <div className="form-group">
                                                                <strong>Giới tính:&emsp; </strong>
                                                                {x.gender}
                                                            </div>
                                                            <div className="form-group">
                                                                <strong>Ngày sinh:&emsp; </strong>
                                                                {x.brithday}
                                                            </div>
                                                            <div className="form-group">
                                                                <strong>Nơi sinh:&emsp; </strong>
                                                                {x.birthplace}
                                                            </div>
                                                            <div className="form-group">
                                                                <strong>Số điện thoại:&emsp; </strong>
                                                                {x.phoneNumber ? "0" + x.phoneNumber : ""}
                                                            </div>
                                                            <div className="form-group">
                                                                <strong>Email công ty:&emsp; </strong>
                                                                {x.emailCompany}
                                                            </div>
                                                        </div>
                                                        <div className="col-sm-4">
                                                            <div className="form-group" style={{ marginTop: 20 }}>
                                                                <strong>Mã số chấm công:&emsp; </strong>
                                                                {x.MSCC}
                                                            </div>
                                                            <div className="form-group">
                                                                <strong>Bộ phận:&emsp; </strong>
                                                                {x.department}
                                                            </div>
                                                            <div className="form-group">
                                                                <strong>Chức vụ:&emsp;</strong>
                                                                Giam đốc
                                                                </div>
                                                            <div className="form-group">
                                                                <strong>Dân tộc:&emsp; </strong>
                                                                {x.national}
                                                            </div>
                                                            <div className="form-group">
                                                                <strong>Tôn giáo:&emsp; </strong>
                                                                {x.religion}
                                                            </div>
                                                            <div className="form-group">
                                                                <strong>Tình trạng hôn nhân:&emsp; </strong>
                                                                {x.relationship}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="box-footer">

                                                </div>
                                            </div>
                                            {employeeContact && employeeContact.map((y, indexs) => (
                                                <div id="lienhe" className="tab-pane" key={indexs}>
                                                    <div className="box-body">
                                                        <div className="col-sm-12">
                                                            <div className="form-group" style={{ marginLeft: 35, marginTop: 20 }}>
                                                                <strong>Điện thoại nhà riêng:&emsp; </strong>
                                                                {y.phoneNumberAddress ? "0" + y.phoneNumberAddress : ""}
                                                            </div>
                                                            <div className="form-group" style={{ marginLeft: 35 }}>
                                                                <strong>Email cá nhân:&emsp; </strong>
                                                                {y.emailPersonal}
                                                            </div>
                                                        </div>
                                                        <div className="col-sm-12">
                                                            <fieldset className="scheduler-border">
                                                                <legend className="scheduler-border">Liên hệ khẩn cấp</legend>
                                                                <div className="col-sm-6">
                                                                    <div className="form-group" >
                                                                        <strong>Họ và tên:&emsp; </strong>
                                                                        {y.friendName}
                                                                    </div>
                                                                    <div className="form-group" >
                                                                        <strong>Quan hệ:&emsp; </strong>
                                                                        {y.relation}
                                                                    </div>
                                                                    <div className="form-group" >
                                                                        <strong>Điện Thoại di động:&emsp; </strong>
                                                                        {y.friendPhone ? "0" + y.friendPhone : ""}
                                                                    </div>
                                                                    <div className="form-group" >
                                                                        <strong>Điện thoại nhà riêng:&emsp; </strong>
                                                                        {y.friendPhoneAddress ? "0" + y.phoneNumberAddress : ""}
                                                                    </div>
                                                                </div>
                                                                <div className="col-sm-6">
                                                                    <div className="form-group" >
                                                                        <strong>Email:&emsp; </strong>
                                                                        {y.friendEmail}
                                                                    </div>
                                                                    <div className="form-group" >
                                                                        <strong>Địa chỉ:&emsp; </strong>
                                                                        {y.friendAddress}
                                                                    </div>
                                                                </div>
                                                            </fieldset>
                                                        </div>
                                                        <div className="col-sm-6">
                                                            <fieldset className="scheduler-border">
                                                                <legend className="scheduler-border">Hộ khẩu thường trú</legend>
                                                                <div className="form-group" >
                                                                    <strong>Địa chỉ:&emsp; </strong>
                                                                    {y.localAddress}
                                                                </div>
                                                                <div className="form-group" >
                                                                    <strong>Quốc gia:&emsp; </strong>
                                                                    {y.localNational}
                                                                </div>
                                                                <div className="form-group" >
                                                                    <strong>Tỉnh/Thành phố:&emsp; </strong>
                                                                    {y.localCity}
                                                                </div>
                                                                <div className="form-group" >
                                                                    <strong>Quận/Huyện:&emsp; </strong>
                                                                    {y.localDistrict}
                                                                </div>
                                                                <div className="form-group" >
                                                                    <strong>Xã/Phường:&emsp; </strong>
                                                                    {y.localCommune}
                                                                </div>
                                                            </fieldset>
                                                        </div>
                                                        <div className="col-sm-6">
                                                            <fieldset className="scheduler-border">
                                                                <legend className="scheduler-border">Chỗ ở hiện tại</legend>
                                                                <div className="form-group" >
                                                                    <strong>Địa chỉ:&emsp; </strong>
                                                                    {y.nowAddress}
                                                                </div>
                                                                <div className="form-group" >
                                                                    <strong>Quốc gia:&emsp; </strong>
                                                                    {y.nowNational}
                                                                </div>
                                                                <div className="form-group" >
                                                                    <strong>Tỉnh/Thành phố:&emsp; </strong>
                                                                    {y.nowCity}
                                                                </div>
                                                                <div className="form-group" >
                                                                    <strong>Quận/Huyện:&emsp; </strong>
                                                                    {y.nowDistrict}
                                                                </div>
                                                                <div className="form-group" >
                                                                    <strong>Xã/Phường:&emsp; </strong>
                                                                    {y.nowCommune}
                                                                </div>
                                                            </fieldset>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}

                                            <div id="taikhoan" className="tab-pane">
                                                <div className="box-body">
                                                    <div className="form-group" style={{ marginLeft: 35, marginTop: 20 }}>
                                                        <strong>Mã số thuế:&emsp; </strong>
                                                        8463259876
                                                    </div>
                                                    <div className="col-sm-4">
                                                        <div className="form-group" style={{ marginLeft: 20 }}>
                                                            <strong>Số tài khoản ngân hàng:&emsp; </strong>
                                                            12213259876
                                                        </div>
                                                    </div>
                                                    <div className="col-sm-8">
                                                        <div className="form-group" style={{ marginLeft: 35 }}>
                                                            <strong>Tên ngân hàng:&emsp; </strong>
                                                            ViettinBank
                                                        </div>
                                                    </div>

                                                    <div className="col-sm-4">
                                                        <div className="form-group" style={{ marginLeft: 20 }}>
                                                            <strong>Số CMND/Hộ chiếu:&emsp; </strong>
                                                            163987698
                                                        </div>
                                                    </div>
                                                    <div className="col-sm-4">
                                                        <div className="form-group" style={{ marginLeft: 35 }}>
                                                            <strong>Ngày cấp:&emsp; </strong>
                                                            12/10/2015
                                                        </div>
                                                    </div>
                                                    <div className="col-sm-4">
                                                        <div className="form-group" style={{ marginLeft: 35 }}>
                                                            <strong>Nơi cấp:&emsp; </strong>
                                                            CA Nam Định
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="box-footer">
                                                </div>
                                            </div>
                                            <div id="hocvan" className="tab-pane">
                                                <div className="box-body">
                                                    <div className="col-sm-12">
                                                        <div className="form-group" style={{ marginLeft: 35, marginTop: 20 }}>
                                                            <strong>Trình độ học vấn:&emsp; </strong>
                                                            12 &frasl; 12
                                                        </div>
                                                        <div className="form-group" style={{ marginLeft: 35 }}>
                                                            <strong>Trình độ ngoại ngữ:&emsp; </strong>
                                                            Toeic 500
                                                        </div>
                                                        <div className="form-group" style={{ marginLeft: 35 }}>
                                                            <strong>Trình độ chuyên môn:&emsp; </strong>
                                                            Kỹ sư công nghệ thông tin - Đại học Bách khoa Hà Nội
                                                        </div>
                                                    </div>
                                                    <div className="col-sm-12">
                                                        <fieldset className="scheduler-border">
                                                            <legend className="scheduler-border">Chứng chỉ - Bằng cấp</legend>
                                                            <table className="table table-bordered ">
                                                                <thead>
                                                                    <tr>
                                                                        <th style={{ width: "50%", paddingLeft: 20 }}>Tên bằng (chứng chỉ)</th>
                                                                        <th style={{ width: "50%", paddingLeft: 20 }}>File đính kèm</th>
                                                                    </tr>

                                                                </thead>
                                                                <tbody>
                                                                    <tr>
                                                                        <td>Chứng chỉ lập trình PHP</td>
                                                                        <td><a href="#abc">chungchiPHP.pdf</a></td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>Bằn đại học Bách khoa Hà Nội</td>
                                                                        <td><a href="#abc">bangdaihoc.pdf</a></td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>Chứng chỉ lập trình Java</td>
                                                                        <td><a href="#abc">chungchijava.pdf</a></td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                        </fieldset>
                                                    </div>
                                                </div>
                                                <div className="box-footer">

                                                </div>
                                            </div>
                                            <div id="kinhnghiem" className="tab-pane">
                                                <div className="box-body">
                                                    <table className="table table-bordered table-hover" style={{ marginTop: 20 }}>
                                                        <thead>
                                                            <tr>
                                                                <th style={{ width: '14%' }}>Từ tháng/năm</th>
                                                                <th style={{ width: '14%' }}>Đến tháng/năm</th>
                                                                <th>Đơn vị công tác</th>
                                                                <th style={{ width: '25%' }}>Chức vụ</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr>
                                                                <td>5/2018</td>
                                                                <td>8/2019</td>
                                                                <td>Công ty A</td>
                                                                <td>Giám đốc</td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                                <div className="box-footer">

                                                </div>
                                            </div>
                                            <div id="hopdong" className="tab-pane">
                                                <div className="box-body">
                                                    <div className="col-sm-12" style={{ marginTop: 20 }}>
                                                        <fieldset className="scheduler-border" >
                                                            <legend className="scheduler-border">Bảo hiểm</legend>
                                                            <div className="form-group">
                                                                <strong>Mã số BHYT:&emsp; </strong>
                                                                12568463259876
                                                            </div>
                                                            <table className="table table-bordered ">
                                                                <thead>
                                                                    <tr>
                                                                        <th style={{ width: "30%" }}>Ngày gia hạn</th>
                                                                        <th style={{ width: "30%" }}>Ngày hết hạn</th>
                                                                        <th style={{ width: "30%" }}>Chi phí</th>
                                                                    </tr>
                                                                </thead>
                                                                <tbody>
                                                                    <tr>
                                                                        <td>1/1/2017</td>
                                                                        <td>30/12/2017</td>
                                                                        <td>500.000 nghìn đồng</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>1/1/2018</td>
                                                                        <td>30/12/2018</td>
                                                                        <td>530.000 nghìn đồng</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>1/1/2019</td>
                                                                        <td>30/12/2019</td>
                                                                        <td>535.000 nghìn đồng</td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                        </fieldset>
                                                    </div>
                                                    <div className="col-sm-12">
                                                        <fieldset className="scheduler-border">
                                                            <legend className="scheduler-border">Hợp đồng lao động</legend>
                                                            <table className="table table-bordered ">
                                                                <thead>
                                                                    <tr>
                                                                        <th style={{ width: "30%" }}>Ngày ký( gia hạn) hợp đồng</th>
                                                                        <th style={{ width: "30%" }}>Ngày hết hạn</th>
                                                                        <th style={{ width: "30%" }}>File đính kèm</th>
                                                                    </tr>
                                                                </thead>
                                                                <tbody>
                                                                    <tr>
                                                                        <td>1/1/2017</td>
                                                                        <td>30/12/2017</td>
                                                                        <td><a href="#abc">hợp đồng năm đầu.pdf</a></td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>1/1/2018</td>
                                                                        <td>30/12/2018</td>
                                                                        <td><a href="#abc">hợp đồng năm đầu.pdf</a></td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>1/1/2019</td>
                                                                        <td>30/12/2019</td>
                                                                        <td><a href="#abc">hợp đồng năm đầu.pdf</a></td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                        </fieldset>
                                                    </div>
                                                </div>
                                                <div className="box-footer">

                                                </div>
                                            </div>
                                            <div id="daotao" className="tab-pane">
                                                <div className="box-body">
                                                    <table className="table table-bordered table-hover" style={{ marginTop: 20 }}>
                                                        <thead>
                                                            <tr>
                                                                <th style={{ width: '33%' }}>Tên khoá học</th>
                                                                <th style={{ width: '11%' }}>Ngày bắt đầu</th>
                                                                <th style={{ width: '11%' }}>Ngày kết thúc</th>
                                                                <th style={{ width: '32' }}>Đơn vị đào tạo</th>
                                                                <th style={{ width: '13%' }}>Trạng thái</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr>
                                                                <td>An toàn lao động</td>
                                                                <td>5/5/2019</td>
                                                                <td>10/9/2019</td>
                                                                <td>Công ty Vnist</td>
                                                                <td>Hoàn thành</td>
                                                            </tr>
                                                            <tr>
                                                                <td>Kinh nghiệm làm việc</td>
                                                                <td>5/5/2019</td>
                                                                <td>10/12/2019</td>
                                                                <td>Công ty Vnist</td>
                                                                <td>Chưa hoàn thành</td>
                                                            </tr>
                                                            <tr>
                                                                <td>ky năng giao tiếp</td>
                                                                <td></td>
                                                                <td></td>
                                                                <td>Công ty Vnist</td>
                                                                <td>Hoàn thành</td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                                <div className="box-footer">

                                                </div>
                                            </div>
                                        </div>
                                    ))}

                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div >
        );
    };
}

function mapState(state) {
    const { employees } = state;
    return { employees };
}
const actionCreators = {
    getInformationEmployee: employeeActions.getInformationEmployee,
};

const connectDetaiEmployee = connect(mapState, actionCreators)(DetailEmployee);
export { connectDetaiEmployee as DetailEmployee };