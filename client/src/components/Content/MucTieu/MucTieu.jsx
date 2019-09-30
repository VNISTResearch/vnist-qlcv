import React, { Component } from 'react';
import './muctieu.css'
import TableData from './TableData';
import ModalThemMucTieu from './ModalThemMucTieu';
class MucTieu extends Component {
    render() {
        return (
            <div className="content-wrapper">
                    {/* Content Header (Page header) */}
                    <section className="content-header">
                        <label>Mục tiêu cá nhân</label>
                        <button type="button" className="btn btn-success addgoal" data-toggle="modal" data-target="#myModalHorizontal">Thêm mục tiêu</button>
                        <ModalThemMucTieu type="1"/>
                        <div className="clear"></div>
                    </section>
                    {/* Main content */}
                    <section className="content">
                        <div>
                            <label>Bảng mục tiêu BSC 2019</label>
                            <TableData title="Tài Chính"/>
                            <TableData title="Quy trình nội bộ"/>
                            <TableData title="Khách hàng"/>
                            <TableData title="Đào tạo & phát triển"/>
                        </div>
                    </section>
                </div>
        );
    }
}

export default MucTieu;