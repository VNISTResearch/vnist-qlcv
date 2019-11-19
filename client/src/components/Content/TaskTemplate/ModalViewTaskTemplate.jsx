import React, { Component } from 'react';

class ModalViewTaskTemplate extends Component {
    constructor(props) {
        super(props);
        this.state = {
            newTemplate: {
                unit: '',
                name: '',
                read: [localStorage.getItem('currentRole')],
                responsible: [],
                accounatable: [],
                informed: [],
                description: '',
                creator: localStorage.getItem('id'),
                formula: '',
                listAction: [],
                listInfo: []
            },
            action: {
                name: '',
                description: '',
                mandatary: true
            },
            information: {
                name: '',
                description: '',
                type: 'Văn bản',
                mandatary: true
            },
            member: [
                {
                    _id: "abcdef123456789987654321",
                    name: "Trần Văn Dũng",
                    parent: ""
                },
                {
                    _id: "abcdef123456789987654322",
                    name: "Lê Việt Anh",
                    parent: "abcdef123456789987654321"
                },
                {
                    _id: "abcdef123456789987654323",
                    name: "Nguyễn Việt Anh",
                    parent: "abcdef123456789987654321"
                },
                {
                    _id: "abcdef123456789987654324",
                    name: "Bùi Việt Anh",
                    parent: "abcdef123456789987654321"
                }
            ],
            submitted: false,
            editAction: false,
            addAction: false,
            editInfo: false,
            addInfo: false
        };
    }
    render() {
        return (
            <React.Fragment>
                <div className="modal modal-full fade" id={`viewTaskTemplate${this.props.id}`} tabIndex={-1} role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                    <div className="modal-dialog-full">
                        <div className="modal-content">
                            {/* Modal Header */}
                            <div className="modal-header">
                                <button type="button" className="close" data-dismiss="modal">
                                    <span aria-hidden="true">×</span>
                                    <span className="sr-only">Close</span>
                                </button>
                                <h3 className="modal-title" id="myModalLabel">Mẫu công việc số</h3>
                            </div>
                            {/* Modal Body */}
                            <div className="modal-body" >
                                <form className="form-horizontal">
                                    <div className="row">
                                        <div className="col-sm-6">
                                            <div className='form-group'>
                                                <label className="col-sm-5 control-label" style={{ width: '100%', textAlign: 'left' }}>Đơn vị*:</label>
                                            </div>
                                            <div className='form-group'>
                                                <label className="col-sm-5 control-label" style={{ width: '100%', textAlign: 'left' }}>Những người được phép xem*:</label>
                                            </div>
                                            <div className='form-group'>
                                                <label className="col-sm-5 control-label" style={{ width: '100%', textAlign: 'left' }}>Người thực hiện:</label>
                                            </div>
                                            <div className='form-group'>
                                                <label className="col-sm-5 control-label" style={{ width: '100%', textAlign: 'left' }}>Người phê duyệt:</label>
                                            </div>
                                            <div className='form-group'>
                                                <label className="col-sm-5 control-label" style={{ width: '100%', textAlign: 'left' }}>Người quan sát:</label>
                                            </div>
                                            <fieldset className="scheduler-border">
                                                <legend className="scheduler-border">Danh sách các hoạt động của công việc*</legend>
                                                <div className="control-group">
                                                    <table className="table table-bordered">
                                                        <thead>
                                                            <tr>
                                                                <th style={{ width: '10%' }}>STT</th>
                                                                <th>Tên hoạt động</th>
                                                                <th>Mô tả</th>
                                                                <th>Bắt buộc</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody id="actions">
                                                            {/* {
                                                                (typeof listAction === 'undefined' || listAction.length === 0) ? <tr><td colSpan={5}><center>Chưa có dữ liệu</center></td></tr> :
                                                                    listAction.map((item, index) =>
                                                                        <tr key={index + 1}>
                                                                            <td>{index + 1}</td>
                                                                            <td>{item.name}</td>
                                                                            <td>{item.description}</td>
                                                                            <td>{item.mandatary ? "Có" : "Không"}</td>
                                                                        </tr>
                                                                    )
                                                            } */}
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </fieldset>
                                        </div>
                                        <div className="col-sm-6">
                                            <div className='form-group'>
                                                <label className="col-sm-4 control-label" htmlFor="inputDescription3" style={{ width: '100%', textAlign: 'left' }}>Mô tả công việc*:</label>
                                            </div>
                                            <div className='form-group'>
                                                <label className="col-sm-4 control-label" htmlFor="inputName3" style={{ width: '100%', textAlign: 'left' }}>Công thức tính điểm KPI công việc:</label>
                                                <label className="col-sm-12 control-label" style={{ width: '100%', textAlign: 'left' }}>Chú thích:</label>
                                                <label className="col-sm-12" style={{ fontWeight: "400" }}>Px: Thông tin thứ x trong danh sách thông tin yêu cầu của công việc</label>
                                                <label className="col-sm-12" style={{ fontWeight: "400" }}>D: Tổng số ngày thực hiện công việc (trừ CN)</label>
                                                <label className="col-sm-12" style={{ fontWeight: "400" }}>D0: Số ngày quá hạn</label>
                                                <label className="col-sm-12" style={{ fontWeight: "400" }}>A: Tổng số hoạt động</label>
                                                <label className="col-sm-12" style={{ fontWeight: "400" }}>AD: Tổng số lần duyệt "Chưa đạt" cho các hoạt động</label>
                                            </div>
                                            <fieldset className="scheduler-border">
                                                <legend className="scheduler-border">Danh sách các thông tin yêu cầu của công việc</legend>
                                                <div className="control-group">
                                                    <table className="table table-bordered">
                                                        <thead>
                                                            <tr>
                                                                <th style={{ width: '10%' }}>Stt</th>
                                                                <th>Tên trường thông tin</th>
                                                                <th>Mô tả</th>
                                                                <th>Kiểu dữ liệu</th>
                                                                <th>Bắt buộc</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody id="informations">
                                                            {/* {
                                                                (typeof listInfo === 'undefined' || listInfo.length === 0) ? <tr><td colSpan={6}><center>Chưa có dữ liệu</center></td></tr> :
                                                                    listInfo.map((item, index) =>
                                                                        <tr key={index}>
                                                                            <td>{index + 1}</td>
                                                                            <td>{item.name}</td>
                                                                            <td>{item.description}</td>
                                                                            <td>{item.type}</td>
                                                                            <td>{item.mandatary ? "Có" : "Không"}</td>
                                                                        </tr>
                                                                    )
                                                            } */}
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </fieldset>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <div className="modal-footer">
                                <button type="cancel" className="btn btn-primary" data-dismiss="modal">Đóng</button>
                            </div>
                            {/* Modal Footer */}
                        </div>
                    </div>
                </div >
            </React.Fragment>
        );
    }
}


export { ModalViewTaskTemplate };