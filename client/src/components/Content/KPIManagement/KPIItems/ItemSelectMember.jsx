import React, { Component } from 'react';

class ItemSelectMember extends Component {
    render() {
        return (
            <div className="form-group">
                <label className="col-sm-4 control-label" htmlFor="inputUsername3" style={{ width: '100%', textAlign: 'left' }}>Nhân viên:</label>
                <div className="col-sm-10" style={{ width: '100%' }}>
                    <select className="form-control" id="sel1" name="Unit" defaultValue="1">
                        <option value="1">TP Kinh doanh</option>
                        <option value="2">Nguyễn Văn A</option>
                        <option value="3">Bùi Văn B</option>
                        <option value="4">Lê Thị C</option>
                    </select>
                </div>
            </div>
        );
    }
}

export {ItemSelectMember};