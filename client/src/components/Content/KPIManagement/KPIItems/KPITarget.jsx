import React, { Component } from 'react';
import { ItemSelectMember } from './CombineKPIItems';

class KPITarget extends Component {
    render() {
        return (
            <div className="col-md-6">
                <label>Thông tin mục tiêu</label>
                { this.props.type ==="2"? <ItemSelectMember/>:''}
                <div className="form-group">
                    <label className="col-sm-4 control-label" htmlFor="inputUsername3" style={{ width: '100%', textAlign: 'left' }}>Đơn vị:</label>
                    <div className="col-sm-10" style={{ width: '100%' }}>
                        <select className="form-control" id="sel1" name="Unit" defaultValue="1">
                            <option value="1">Phòng kinh doanh</option>
                            <option value="2">Phòng nhân sự</option>
                            <option value="3">Phòng tài chính</option>
                            <option value="4">Phòng kỹ thuật</option>
                        </select>
                    </div>
                </div>
                <div className="form-group">
                    <label className="col-sm-4 control-label" htmlFor="inputname" style={{ width: '100%', textAlign: 'left' }}>Tên mục tiêu:</label>
                    <div className="col-sm-10" style={{ width: '100%' }}>
                        <input type="name" className="form-control" id="inputname" placeholder="Tên mục tiêu" />
                    </div>
                </div>
                <div className="form-group">
                    <label className="col-sm-4 control-label" style={{ width: '100%', textAlign: 'left' }}>Nhóm mục tiêu:</label>
                    <div className="col-sm-10" style={{ width: '100%' }}>
                        <select defaultValue="1" className="form-control" onChange={this.handleChange} name="group">
                            <option value="1">Tài chính</option>
                            <option value="2">Khách hàng</option>
                            <option value="3">Quy trình nội bộ</option>
                            <option value="4">Học hỏi và phát triển</option>
                        </select>
                    </div>
                </div>
                <div className="form-group">
                    <label className="col-sm-4 control-label" style={{ width: '100%', textAlign: 'left' }}>Thuộc mục tiêu:</label>
                    <div className="col-sm-10" style={{ width: '100%' }}>
                        <select defaultValue="1" className="form-control" onChange={this.handleChange} name="parent">
                            <option value="1">Doanh thu năm 400 tỷ đồng</option>
                            <option value="2">Tỉ lệ khách hàng hài lòng 95%</option>
                            <option value="3">Hoàn thành 30 dự án</option>
                            <option value="4">Hoàn thành khóa đào tạo nghiệp vụ</option>
                        </select>
                    </div>
                </div>
                <div className="form-group">
                    <label className="col-sm-4 control-label" htmlFor="inputname" style={{ width: '100%', textAlign: 'left' }}>Trọng số:</label>
                    <div className="col-sm-10" style={{ width: '100%' }}>
                        <input type="number" className="form-control" id="inputname" placeholder="Trọng số (tổng là 100)" />
                    </div>
                </div>
                <div className="form-group">
                    <label className="col-sm-4 control-label" style={{ width: '100%', textAlign: 'left' }}>Ngày bắt đầu:</label>
                    <div className="col-sm-10 input-group date" style={{ width: '97%', paddingLeft: '15px' }}>
                        <div className="input-group-addon">
                            <i className="fa fa-calendar" />
                        </div>
                        <input type="text" className="form-control pull-right" id="datepicker" />
                    </div>
                </div>
                <div className="form-group">
                    <label className="col-sm-4 control-label" style={{ width: '100%', textAlign: 'left' }}>Hạn hoàn thành:</label>
                    <div className="col-sm-10 input-group date" style={{ width: '97%', paddingLeft: '15px' }}>
                        <div className="input-group-addon">
                            <i className="fa fa-calendar" />
                        </div>
                        <input type="text" className="form-control pull-right" id="datepicker" />
                    </div>
                </div>
                <div className="form-group">
                    <label className="col-sm-4 control-label" htmlFor="inputname" style={{ width: '100%', textAlign: 'left' }}>Phương pháp đo:</label>
                    <div className="col-sm-10" style={{ width: '100%' }}>
                        <input type="text" className="form-control" id="inputname" placeholder="Ví dụ: Doanh số" />
                    </div>
                </div>
                <div className="form-group">
                    <label className="col-sm-4 control-label" htmlFor="inputDescription3" style={{ width: '100%', textAlign: 'left' }}>Description</label>
                    <div className="col-sm-10" style={{ width: '100%' }}>
                        <textarea type="Description" className="form-control" id="inputDescription3" placeholder="Mô tả" />
                    </div>
                </div>
            </div>
        );
    }
}

export {KPITarget};