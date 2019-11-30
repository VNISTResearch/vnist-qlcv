import React, { Component } from 'react';

class QLLoaiVanBan extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <React.Fragment>
                <div className="content-wrapper">
                    {/* Content Header (Page header) */}
                    <section className="content-header">
                        <h1>
                        QLLoaiVanBan
                            <small><i className="fa fa-users"></i></small>
                        </h1>
                        <ol className="breadcrumb">
                            <li><a href="/admin"><i className="fa fa-dashboard" /> Admin</a></li>
                            <li className="active">QLLoaiVanBan</li>
                        </ol>
                    </section>
                    <section className="content">
                        <div>
                            <a className="btn btn-primary" data-toggle="modal" href="#modal-id">Thêm mới</a>
                            <div className="modal fade" id="modal-id">
                                <div className="modal-dialog">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                        <button type="button" className="close" data-dismiss="modal" aria-hidden="true">×</button>
                                        <h4 className="modal-title">Thêm văn bản</h4>
                                        </div>
                                        <div className="modal-body">
                                            <form style={{ marginBottom: '20px' }} >
                                                <div className="form-group">
                                                    <label>Tên</label>
                                                    <input type="text" className="form-control" name="name" onChange={ this.inputChange }/>
                                                </div>
                                                <div className="form-group">
                                                    <label>Mô tả</label>
                                                    <textarea className="form-control" name="description" onChange={ this.inputChange } style={{ height: '250px' }}/>
                                                </div>
                                            </form>
                                        </div>
                                        <div className="modal-footer">
                                        <button type="button" className="btn btn-primary" data-dismiss="modal">Lưu</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="box" style={{marginTop: '20px'}}>
                            <div className="box-header">
                                <h3 className="box-title">Quản lý loại văn bản</h3>
                            </div>
                            <div className="box-body">
                                <table className="table table-bordered table-hover">
                                    <thead>
                                        <tr>
                                            <th>Tên</th>
                                            <th>Mô tả</th>
                                            <th>Hành động</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Biểu mẫu</td>
                                            <td>Biểu mẫu</td>
                                            <td>
                                                <button className="btn btn-primary btn-sm"><i className="fa fa-pencil"></i></button>{" "}
                                                <button className="btn btn-danger btn-sm"><i className="fa fa-trash"></i></button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Văn bản</td>
                                            <td>Mô tả về văn bản</td>
                                            <td>
                                                <button className="btn btn-primary btn-sm"><i className="fa fa-pencil"></i></button>{" "}
                                                <button className="btn btn-danger btn-sm"><i className="fa fa-trash"></i></button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Tài liệu</td>
                                            <td>Mô tả về tài liệu</td>
                                            <td>
                                                <button className="btn btn-primary btn-sm"><i className="fa fa-pencil"></i></button>{" "}
                                                <button className="btn btn-danger btn-sm"><i className="fa fa-trash"></i></button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Công văn</td>
                                            <td>Mô tả về công văn</td>
                                            <td>
                                                <button className="btn btn-primary btn-sm"><i className="fa fa-pencil"></i></button>{" "}
                                                <button className="btn btn-danger btn-sm"><i className="fa fa-trash"></i></button>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </section>
                </div>
            </React.Fragment>
         );
    }
}
 
export default QLLoaiVanBan;