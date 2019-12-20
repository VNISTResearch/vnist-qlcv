import React, { Component } from 'react';
import { connect } from 'react-redux';
import { taskTemplateActions } from '../../../redux-actions/CombineActions';

class ModalViewTaskTemplate extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tasktemplate: ""
        };
    }
    componentDidMount() {
        this.props.getTaskTemplate(this.props.id);
    }
    handleCloseModal = (id) => {
        var element = document.getElementsByTagName("BODY")[0];
        element.classList.remove("modal-open");
        var modal = document.getElementById(`viewTaskTemplate${id}`);
        modal.classList.remove("in");
        modal.style = "display: none;";
    }
    render() {
        var template;
        const { tasktemplates } = this.props;
        if (tasktemplates.template) template = tasktemplates.template;
        return (
            <React.Fragment>
                <div className="modal modal-full fade" id={`viewTaskTemplate${this.props.id}`} tabIndex={-1} role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                    <div className="modal-dialog-full">
                        <div className="modal-content">
                            {/* Modal Header */}
                            <div className="modal-header">
                                <button type="button" className="close" onClick={() => this.handleCloseModal(this.props.id)} data-dismiss="modal">
                                    <span aria-hidden="true">×</span>
                                    <span className="sr-only">Close</span>
                                </button>
                                <h3 className="modal-title" id="myModalLabel">{template && template.info.name}</h3>
                            </div>
                            {/* Modal Body */}
                            <div className="modal-body" >
                                <form className="form-horizontal">
                                    <div className="row">
                                        <div className="col-sm-6">
                                            <div className='form-group'>
                                                <label className="col-sm-5 control-label" style={{ width: '100%', textAlign: 'left' }}>Đơn vị*: {template && template.info.unit.name}</label>
                                            </div>
                                            <div className='form-group'>
                                                <label className="col-sm-5 control-label" style={{ width: '100%', textAlign: 'left' }}>Người thực hiện:</label>
                                                {template &&
                                                    <ul>
                                                        {template.info.responsible.map((item, index) => {
                                                            return <li key={index}>{item.name}</li>
                                                        })}
                                                    </ul>}
                                            </div>
                                            <div className='form-group'>
                                                <label className="col-sm-5 control-label" style={{ width: '100%', textAlign: 'left' }}>Người phê duyệt:</label>
                                                {template &&
                                                    <ul>
                                                        {template.info.accounatable.map((item, index) => {
                                                            return <li key={index}>{item.name}</li>
                                                        })}
                                                    </ul>}
                                            </div>
                                            <div className='form-group'>
                                                <label className="col-sm-5 control-label" style={{ width: '100%', textAlign: 'left' }}>Người hỗ trợ:</label>
                                                {template &&
                                                    <ul>
                                                        {template.info.consulted.map((item, index) => {
                                                            return <li key={index}>{item.name}</li>
                                                        })}
                                                    </ul>}
                                            </div>
                                            <div className='form-group'>
                                                <label className="col-sm-5 control-label" style={{ width: '100%', textAlign: 'left' }}>Người quan sát:</label>
                                                {template &&
                                                    <ul>
                                                        {template.info.informed.map((item, index) => {
                                                            return <li key={index}>{item.name}</li>
                                                        })}
                                                    </ul>}
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
                                                        <tbody>
                                                            {
                                                                (typeof template === 'undefined' || template.actions.length === 0) ? <tr><td colSpan={5}><center>Chưa có dữ liệu</center></td></tr> :
                                                                    template.actions.map((item, index) =>
                                                                        <tr key={index + 1}>
                                                                            <td>{index + 1}</td>
                                                                            <td>{item.name}</td>
                                                                            <td>{item.description}</td>
                                                                            <td>{item.mandatary ? "Có" : "Không"}</td>
                                                                        </tr>
                                                                    )
                                                            }
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </fieldset>
                                        </div>
                                        <div className="col-sm-6">
                                            <div className='form-group'>
                                                <label className="col-sm-4 control-label" style={{ width: '100%', textAlign: 'left' }}>Mô tả công việc*: {template && template.info.description}</label>
                                            </div>
                                            <div className='form-group'>
                                                <label className="col-sm-4 control-label" htmlFor="inputName3" style={{ width: '100%', textAlign: 'left' }}>Công thức tính điểm KPI công việc: {template && template.info.formula}</label>
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
                                                        <tbody>
                                                            {
                                                                (typeof template === 'undefined' || template.informations.length === 0) ? <tr><td colSpan={6}><center>Chưa có dữ liệu</center></td></tr> :
                                                                    template.informations.map((item, index) =>
                                                                        <tr key={index}>
                                                                            <td>{index + 1}</td>
                                                                            <td>{item.name}</td>
                                                                            <td>{item.description}</td>
                                                                            <td>{item.type}</td>
                                                                            <td>{item.mandatary ? "Có" : "Không"}</td>
                                                                        </tr>
                                                                    )
                                                            }
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </fieldset>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <div className="modal-footer">
                                <button type="cancel" onClick={() => this.handleCloseModal(this.props.id)} className="btn btn-primary" data-dismiss="modal">Đóng</button>
                            </div>
                            {/* Modal Footer */}
                        </div>
                    </div>
                </div >
            </React.Fragment>
        );
    }
}

function mapState(state) {
    const { tasktemplates } = state;
    return { tasktemplates };
}

const actionCreators = {
    getTaskTemplate: taskTemplateActions.getTaskTemplateById,
};
const connectedModalViewTaskTemplate = connect(mapState, actionCreators)(ModalViewTaskTemplate);
export { connectedModalViewTaskTemplate as ModalViewTaskTemplate };