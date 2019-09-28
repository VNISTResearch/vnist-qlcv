import React, { Component } from 'react';
// import './modal.css';
class ModalThemCongViec extends Component {
    render() {
        return (
            <div className="modal fade" id="myModalHorizontal" tabIndex={-1} role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        {/* Modal Header */}
                        <div className="modal-header">
                            <button type="button" className="close" data-dismiss="modal">
                                <span aria-hidden="true">×</span>
                                <span className="sr-only">Close</span>
                            </button>
                            <h4 className="modal-title" id="myModalLabel">Thêm mẫu công việc</h4>
                        </div>
                        {/* Modal Body */}
                        <div className="modal-body" >
                            <form className="form-horizontal">
                                <div className="form-group">
                                    <label className="col-sm-4 control-label" htmlFor="inputName3" style={{ width: '100%', textAlign: 'left' }}>Tên mẫu</label>
                                    <div className="col-sm-10" style={{ width: '100%' }}>
                                        <input type="Name" className="form-control" id="inputName3" placeholder="Name"/>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label className="col-sm-4 control-label" htmlFor="inputUsername3" style={{ width: '100%', textAlign: 'left' }}>Người thực hiện:</label>
                                    <div className="col-sm-10" style={{ width: '100%' }}>
                                        <input type="Username" className="form-control" id="inputUsername3" placeholder="Username" value="Bùi Văn Huy" disabled/>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label className="col-sm-4 control-label" htmlFor="inputDescription3" style={{ width: '100%', textAlign: 'left' }}>Description</label>
                                    <div className="col-sm-10" style={{ width: '100%' }}>
                                        <textarea type="Description" className="form-control" id="inputDescription3" placeholder="Description" />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label className="col-sm-4 control-label" htmlFor="inputDescription3" style={{ width: '100%', textAlign: 'left' }}>Role</label>
                                    <div className="col-sm-10" style={{ width: '100%' }}>
                                        <select defaultValue="TPKD" className="form-control select2">
                                            <option value="TPKD">Trưởng phòng kinh doanh</option>
                                            <option value="PPKD">Phó phòng kinh doanh</option>
                                            <option value="NVPKD">Nhân Viên Phòng Kinh Doanh</option>
                                            <option value="TPNS">Trưởng phòng nhân sự</option>
                                            <option value="PPNS">Phó phòng nhân sự</option>
                                            <option value="NVPNS">Nhân viên phòng nhân sự</option>
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

export default ModalThemCongViec;