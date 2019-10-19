import React, { Component } from 'react';

class ModalDataResultTask extends Component {
    constructor(props) {
        super(props);
        this.state = {
            editing: false
        };
    };
    handleEdit = () => {
        this.setState({
            editing: !this.state.editing
        })
    }
    handleSubmit = () => {
        this.setState({
            editing: !this.state.editing
        })
    }
    render() {
        const { editing } = this.state;
        return (
            <div className="modal fade" id={"myModalHorizontal" + this.props.index} tabIndex={-1} role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                        {/* Modal Header */}
                        <div className="modal-header">
                            <button type="button" className="close" data-dismiss="modal">
                                <span aria-hidden="true">×</span>
                                <span className="sr-only">Close</span>
                            </button>
                            <h4 className="modal-title" id="myModalLabel">Thông tin KPI {this.props.title}</h4>
                        </div>
                        {/* Modal Body */}
                        <div className="modal-body" >
                            {/* <form className="form-horizontal">
                                <div className="form-group">
                                    <label className="col-sm-4 control-label" htmlFor="inputName3" style={{ width: '100%', textAlign: 'left' }}>Phòng ban</label>
                                    <div className="col-sm-10" style={{ width: '100%' }}>
                                        <select defaultValue="TPKD" className="form-control select2">
                                            <option value="TPKD">Phòng kinh doanh</option>
                                            <option value="PPKD">Phòng kỹ thuật</option>
                                            <option value="NVPKD">Phòng tài chính</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label className="col-sm-4 control-label" htmlFor="inputUsername3" style={{ width: '100%', textAlign: 'left' }}>Chức vụ</label>
                                    <div className="col-sm-10" style={{ width: '100%' }}>
                                        <select defaultValue="TPKD" className="form-control">
                                            <option value="TPKD">All</option>
                                            <option value="TPKD">Trưởng phòng</option>
                                            <option value="PPKD">Phó phòng</option>
                                            <option value="NVPKD">Nhân viên</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label className="col-sm-4 control-label" htmlFor="inputUsername3" style={{ width: '100%', textAlign: 'left' }}>Tài sản</label>
                                    <div className="col-sm-10" style={{ width: '100%' }}>
                                        <input type="Username" className="form-control" id="inputUsername3" placeholder="Username" defaultValue="Mẫu văn bản số 1" />
                                    </div>
                                </div>

                                <div className="form-group">
                                    <label className="col-sm-4 control-label" htmlFor="inputDescription3" style={{ width: '100%', textAlign: 'left' }}>Nhóm quyền</label>
                                    <div className="col-sm-10" style={{ width: '100%' }}>
                                        <select defaultValue="TPKD" className="form-control select2">
                                            <option value="TPKD">All</option>
                                            <option value="PPKD">Read</option>
                                            <option value="NVPKD">Write</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <div className="col-sm-offset-2 col-sm-10">
                                        <button type="submit" className="btn btn-default">Sign in</button>
                                    </div>
                                </div>
                            </form> */}
                            <table className="table table-bordered">
                                <thead>
                                    <tr>
                                        <th>Tên công việc</th>
                                        <th>Vai trò</th>
                                        <th>Thời gian</th>
                                        <th>Trạng thái</th>
                                        <th>Kết quả</th>
                                        <th>Hành động</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Công việc số 1</td>
                                        <td>Người thực hiện</td>
                                        <td>3/10-25/10</td>
                                        <td>Đã hoàn thành</td>
                                        <td>80%</td>
                                        <td>
                                            <a href="#myModalHorizontal1" data-toggle="modal" className="view" title="View" data-target="#myModalHorizontal1"><i className="material-icons">visibility</i></a>
                                            <a href="#abc" className="delete" title="Delete" data-toggle="tooltip"><i className="material-icons"></i></a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Công việc số 2</td>
                                        <td>Người thực hiện</td>
                                        <td>2/10-15/10</td>
                                        <td>Đã hoàn thành</td>
                                        <td>80%</td>
                                        <td>
                                            <a href="#myModalHorizontal2" data-toggle="modal" data-target="#myModalHorizontal2" className="view" title="View"><i className="material-icons">visibility</i></a>
                                            <a href="#abc" className="delete" title="Delete" data-toggle="tooltip"><i className="material-icons"></i></a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Công việc số 3</td>
                                        <td>Người phê duyệt</td>
                                        <td>29/10-30/10</td>
                                        <td>Đã hoàn thành</td>
                                        <td>100%</td>
                                        <td>
                                            <a href="#myModalHorizontal3" data-toggle="modal" data-target="#myModalHorizontal3" className="view" title="View"><i className="material-icons">visibility</i></a>
                                            <a href="#abc" className="delete" title="Delete" data-toggle="tooltip"><i className="material-icons"></i></a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Công việc số 4</td>
                                        <td>Người góp ý</td>
                                        <td>29/10-30/10</td>
                                        <td>Đã hoàn thành</td>
                                        <td>100%</td>
                                        <td>
                                            <a href="#myModalHorizontal4" data-toggle="modal" data-target="#myModalHorizontal4" className="view" title="View"><i className="material-icons">visibility</i></a>
                                            <a href="#abc" className="delete" title="Delete" data-toggle="tooltip"><i className="material-icons"></i></a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td colSpan={2}><b>Tự đánh giá</b></td>
                                        <td>{editing?<input defaultValue="80" style={{width:"100%"}}></input>:80}</td>
                                        <td colSpan={2}><b>Quản lý đánh giá</b></td>
                                        <td>{editing?<input defaultValue="80" style={{width:"100%"}}></input>:80}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        {/* Modal Footer */}
                        <div className="modal-footer">
                            {editing?<button type="button" className="btn btn-success" data-dismiss="modal" onClick={this.handleSubmit}>Save</button>
                            :<button type="button" className="btn btn-success" onClick={this.handleEdit}>Edit</button>}
                            <button type="button" className="btn btn-primary" data-dismiss="modal">Cancel</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export { ModalDataResultTask };