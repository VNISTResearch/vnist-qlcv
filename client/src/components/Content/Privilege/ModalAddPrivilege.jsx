import React, { Component } from 'react';
// import './modal.css';
class ModalAddPrivilege extends Component {
    render() {
        return (
            <div className="modal fade" id="myModalHorizontal" tabIndex={-1} role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-tasktemplate">
                    <div className="modal-content">
                        {/* Modal Header */}
                        <div className="modal-header">
                            <button type="button" className="close" data-dismiss="modal">
                                <span aria-hidden="true">×</span>
                                <span className="sr-only">Close</span>
                            </button>
                            <h4 className="modal-title" id="myModalLabel">Thêm quyền truy cập</h4>
                        </div>
                        {/* Modal Body */}
                        <div className="modal-body" >
                            <form className="form-horizontal">
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
                                        <input type="Username" className="form-control" id="inputUsername3" placeholder="Username" defaultValue="Mẫu văn bản số 1"/>
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
                                {/* <div className="form-group">
                                    <div className="col-sm-offset-2 col-sm-10">
                                        <button type="submit" className="btn btn-default">Sign in</button>
                                    </div>
                                </div> */}
                            </form>
                        </div>
                        {/* Modal Footer */}
                        <div className="modal-footer">
                            <button type="button" className="btn btn-default" data-dismiss="modal">Cancel</button>
                            <button type="button" className="btn btn-primary">Save</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ModalAddPrivilege;