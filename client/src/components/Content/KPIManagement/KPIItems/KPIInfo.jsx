import React, { Component } from 'react';

class KPIInfo extends Component {
    render() {
        return (
            <div className="col-md-6">
                <label>Thông tin KPI</label>
                <div className="form-group">
                    <label className="col-sm-4 control-label" style={{ width: '100%', textAlign: 'left' }}>Tần suất:</label>
                    <div className="col-sm-10" style={{ width: '100%' }}>
                        <select defaultValue="1" className="form-control" onChange={this.handleChange} name="frequency">
                            <option value="1">Hàng tháng</option>
                            <option value="2">Hàng Quý</option>
                            <option value="3">Hàng năm</option>
                        </select>
                    </div>
                </div>
                <div className="form-group">
                    <label className="col-sm-4 control-label" style={{ width: '100%', textAlign: 'left' }}>Kiểu giá trị:</label>
                    <div className="col-sm-10" style={{ width: '100%' }}>
                        <select defaultValue="1" className="form-control" onChange={this.handleChange} name="type">
                            <option value="1">Kiểu số</option>
                            <option value="2">Kiểu danh sách</option>
                        </select>
                    </div>
                </div>
                <div className="form-group">
                    <label className="col-sm-4 control-label" style={{ width: '100%', textAlign: 'left' }}>Chiều hướng tốt:</label>
                    <div className="col-sm-10" style={{ width: '100%' }}>
                        <select defaultValue="1" className="form-control" onChange={this.handleChange} name="parent">
                            <option value="1">Tăng</option>
                            <option value="2">Giảm</option>
                            <option value="3">Duy trì</option>
                        </select>
                    </div>
                </div>
                <div className="form-group">
                    <label className="col-sm-4 control-label" style={{ width: '100%', textAlign: 'left' }}>Hệ số hoàn thành(K):</label>
                    <div className="col-sm-10" style={{ width: '100%' }}>
                        <select defaultValue="1" className="form-control" onChange={this.handleChange} name="parent">
                            <option value="1">Kết quả thực hiện</option>
                            <option value="2">Kết quả/Chỉ tiêu</option>
                        </select>
                    </div>
                </div>
                <div className="form-group">
                    <label className="col-sm-4 control-label" style={{ width: '100%', textAlign: 'left' }}>Bảng điểm quy đổi:</label>
                    <table className="table">
                        <tbody>
                            <tr>
                                <th style={{ width: 250 }}>Khoảng giá trị hệ số hoàn thành(K)</th>
                                <th>Điểm</th>
                                <th style={{ width: 150 }}>Xu hướng</th>
                            </tr>
                            <tr>
                                <td>
                                    <div>
                                        <label>K&lt;</label>
                                        <input type="number" classname="form-control" id="inputvalue" placeholder="50" style={{ width: 42 }} />
                                    </div>
                                </td>
                                <td>
                                    <input type="number" classname="form-control" id="inputvalue" placeholder="1" style={{ width: 42 }} />
                                </td>
                                <td>
                                    <select defaultValue="1" className="form-control" onChange={this.handleChange} name="parent">
                                        <option value="1">Không đạt</option>
                                        <option value="2">Đạt</option>
                                        <option value="3">Tốt</option>
                                        <option value="4">Rất tốt</option>
                                        <option value="5">Xuất sắc</option>
                                    </select>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div>
                                        <input type="number" classname="form-control" id="inputvalue" placeholder="50" style={{ width: 42 }} />
                                        <label>&lt;=K&lt;</label>
                                        <input type="number" classname="form-control" id="inputvalue" placeholder="75" style={{ width: 42 }} />
                                    </div>
                                </td>
                                <td>
                                    <input type="number" classname="form-control" id="inputvalue" placeholder="2" style={{ width: 42 }} />
                                </td>
                                <td>
                                    <select defaultValue="2" className="form-control" onChange={this.handleChange} name="parent">
                                        <option value="1">Không đạt</option>
                                        <option value="2">Đạt</option>
                                        <option value="3">Tốt</option>
                                        <option value="4">Rất tốt</option>
                                        <option value="5">Xuất sắc</option>
                                    </select>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div>
                                        <input type="number" classname="form-control" id="inputvalue" placeholder="75" style={{ width: 42 }} />
                                        <label>&lt;=K&lt;</label>
                                        <input type="number" classname="form-control" id="inputvalue" placeholder="90" style={{ width: 42 }} />
                                    </div>
                                </td>
                                <td>
                                    <input type="number" classname="form-control" id="inputvalue" placeholder="3" style={{ width: 42 }} />
                                </td>
                                <td>
                                    <select defaultValue="3" className="form-control" onChange={this.handleChange} name="parent">
                                        <option value="1">Không đạt</option>
                                        <option value="2">Đạt</option>
                                        <option value="3">Tốt</option>
                                        <option value="4">Rất tốt</option>
                                        <option value="5">Xuất sắc</option>
                                    </select>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div>
                                        <input type="number" classname="form-control" id="inputvalue" placeholder="90" style={{ width: 42 }} />
                                        <label>&lt;=K&lt;</label>
                                        <input type="number" classname="form-control" id="inputvalue" placeholder="110" style={{ width: 42 }} />
                                    </div>
                                </td>
                                <td>
                                    <input type="number" classname="form-control" id="inputvalue" placeholder="4" style={{ width: 42 }} />
                                </td>
                                <td>
                                    <select defaultValue="4" className="form-control" onChange={this.handleChange} name="parent">
                                        <option value="1">Không đạt</option>
                                        <option value="2">Đạt</option>
                                        <option value="3">Tốt</option>
                                        <option value="4">Rất tốt</option>
                                        <option value="5">Xuất sắc</option>
                                    </select>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div>
                                        <input type="number" classname="form-control" id="inputvalue" placeholder="110" style={{ width: 42 }} />
                                        <label>&lt;=K</label>
                                    </div>
                                </td>
                                <td>
                                    <input type="number" classname="form-control" id="inputvalue" placeholder="5" style={{ width: 42 }} />
                                </td>
                                <td>
                                    <select defaultValue="5" className="form-control" onChange={this.handleChange} name="parent">
                                        <option value="1">Không đạt</option>
                                        <option value="2">Đạt</option>
                                        <option value="3">Tốt</option>
                                        <option value="4">Rất tốt</option>
                                        <option value="5">Xuất sắc</option>
                                    </select>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export {KPIInfo};