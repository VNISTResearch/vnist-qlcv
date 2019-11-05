import React, { Component } from 'react';
import { connect } from 'react-redux';
import { jobTitleActions } from '../../../redux-actions/CombineActions';

class ModalAddTask extends Component {
    componentDidMount() {
        this.props.getJobTitle();
    }

    constructor(props) {
        super(props);

        this.state = {
            newTask: {
                name: '',
                responsible: [],
                accounatable: [],
                informed: [],
                description: '',
                creator: '',
            },
            submitted: false,
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
            ]
        };
    }
    render() {
        var course;
        const { newTask, submitted, member } = this.state;
        const { jobtitles } = this.props;
        if (jobtitles.items) course = jobtitles.items.content;
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
                            <h3 className="modal-title" id="myModalLabel"><b>Thêm công việc mới</b></h3>
                        </div>
                        {/* Modal Body */}
                        <div className="modal-body" >
                            <form className="form-horizontal">
                            <fieldset className="scheduler-border">
                                    <legend className="scheduler-border">Thông tin công việc</legend>
                                    <div className='form-group has-feedback'>
                                        <label className="col-sm-4 control-label" style={{ width: '100%', textAlign: 'left' }}>Tên công việc*</label>
                                        <div className="col-sm-10" style={{ width: '100%' }}>
                                            <input type="Name" className="form-control" id="inputName3" placeholder="Tên công việc" ref={input => this.name = input} />
                                        </div>
                                    </div>
                                    <div className={'form-group has-feedback'}>
                                        <label className="col-sm-4 control-label" style={{ width: '100%', textAlign: 'left' }}>Mô tả công việc</label>
                                        <div className="col-sm-10" style={{ width: '100%' }}>
                                            <textarea type="Description" className="form-control" id="inputDescription3" name="description" placeholder="Description" defaultValue={newTask.description} ref={input => this.description = input} />
                                        </div>
                                        {submitted && !newTask.description &&
                                            <div className="col-sm-4 help-block">Template des is required</div>
                                        }
                                    </div>
                                    <div className="form-group has-feedback">
                                        <div className="col-sm-6">
                                            <label className="col-sm-4 control-label" style={{ width: '100%', textAlign: 'left', marginLeft: "-14px" }}>Ngày bắt đầu*:</label>
                                            <div className={'input-group date has-feedback col-sm-10'} style={{ width: '100%' }}>
                                                <div className="input-group-addon">
                                                    <i className="fa fa-calendar" />
                                                </div>
                                                <input type="text" className="form-control" ref={input => this.time = input} name="time" id="datepicker1" data-date-format="dd-mm-yyyy" />
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <label className="col-sm-4 control-label" style={{ width: '100%', textAlign: 'left', marginLeft: "-14px" }}>Ngày kết thúc*:</label>
                                            <div className={'input-group date has-feedback col-sm-10'} style={{ width: '100%' }}>
                                                <div className="input-group-addon">
                                                    <i className="fa fa-calendar" />
                                                </div>
                                                <input type="text" className="form-control" ref={input => this.time = input} name="time" id="datepicker3" data-date-format="dd-mm-yyyy" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-group  has-feedback">
                                        <label className="col-sm-4 control-label" style={{ width: '100%', textAlign: 'left' }}>Mức độ ưu tiên*</label>
                                        <div className="col-sm-10" style={{ width: '100%' }}>
                                            <select defaultValue="1" className="form-control" style={{ width: '100%' }}>
                                                <option value="1">Cao</option>
                                                <option value="2">Trung bình</option>
                                                <option value="3">Thấp</option>
                                            </select>
                                        </div>
                                    </div>
                                </fieldset>
                                <fieldset className="scheduler-border">
                                    <legend className="scheduler-border">Liên kết công việc (OKR)</legend>
                                    <div className="form-group  has-feedback">
                                        <label className="col-sm-4 control-label" style={{ width: '100%', textAlign: 'left' }}>Chọn mẫu công việc</label>
                                        <div className="col-sm-10" style={{ width: '100%' }}>
                                            <select defaultValue="1" className="form-control select2" style={{ width: '100%' }}>
                                                <option value="1">Alabama</option>
                                                <option value="2">Alaska</option>
                                                <option value="3">California</option>
                                                <option value="4">Delaware</option>
                                                <option value="5">Tennessee</option>
                                                <option value="6">Texas</option>
                                                <option value="7">Washington</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="form-group  has-feedback">
                                        <label className="col-sm-4 control-label" style={{ width: '100%', textAlign: 'left' }}>Chọn đơn vị</label>
                                        <div className="col-sm-10" style={{ width: '100%' }}>
                                            <select defaultValue="1" className="form-control select2" style={{ width: '100%' }}>
                                                {course &&
                                                    course.map(x => {
                                                        return <option key={x._id} value={x._id}>{x.name}</option>
                                                    })}
                                            </select>
                                        </div>
                                    </div>
                                    <div className="form-group  has-feedback">
                                        <label className="col-sm-4 control-label" style={{ width: '100%', textAlign: 'left' }}>Chọn công việc cha*</label>
                                        <div className="col-sm-10" style={{ width: '100%' }}>
                                            <select defaultValue="1" className="form-control select2" style={{ width: '100%' }}>
                                                <option value="1">Công việc 1</option>
                                                <option value="2">Công việc 1.1</option>
                                                <option value="3">Công việc 1.2</option>
                                                <option value="4">Công việc 2</option>
                                                <option value="5">Công việc 3</option>
                                                <option value="6">Công việc 3.1</option>
                                                <option value="7">Công việc 3.2</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className={'form-group has-feedback' + (submitted && newTask.informed !== [] ? ' has-error' : '')}>
                                        <label className="col-sm-5 control-label" style={{ width: '100%', textAlign: 'left' }}>Chọn KPI mục tiêu*</label>
                                        <div className="col-sm-10" style={{ width: '100%' }}>
                                            <select defaultValue={["1"]} className="form-control select2" multiple="multiple" ref="informed" data-placeholder="Select a State" style={{ width: '100%' }}>
                                                <option value="1">Đảm bảo quy trình nội bộ</option>
                                                <option value="2">Đảm bảo chất lượng sản phẩm</option>
                                                <option value="3">Hoàn thành quy trình sản xuất</option>
                                                <option value="4">Đáp ứng nhu cầu khách hàng</option>
                                            </select>
                                        </div>
                                        {submitted && newTask.informed !== [] &&
                                            <div className="col-sm-4 help-block">Template name is required</div>
                                        }
                                    </div>
                                </fieldset>
                                <fieldset className="scheduler-border">
                                    <legend className="scheduler-border">Mô hình RACI</legend>
                                    <div className={'form-group has-feedback' + (submitted && newTask.responsible !== [] ? ' has-error' : '')}>
                                        <label className="col-sm-4 control-label" style={{ width: '100%', textAlign: 'left' }}>Người thực hiện</label>
                                        <div className="col-sm-10" style={{ width: '100%' }}>
                                            <select className="form-control select2" multiple="multiple" ref="responsible" data-placeholder="Select a State" style={{ width: '100%' }}>
                                                {member &&
                                                    member.map(x => {
                                                        return <option key={x._id} value={x._id}>{x.name}</option>
                                                    })}
                                            </select>
                                        </div>
                                        {submitted && newTask.responsible !== [] &&
                                            <div className="col-sm-4 help-block">Template name is required</div>
                                        }
                                    </div>
                                    <div className={'form-group has-feedback' + (submitted && newTask.accounatable !== [] ? ' has-error' : '')}>
                                        <label className="col-sm-5 control-label" style={{ width: '100%', textAlign: 'left' }}>Người phê duyệt</label>
                                        <div className="col-sm-10" style={{ width: '100%' }}>
                                            <select className="form-control select2" multiple="multiple" ref="accounatable" data-placeholder="Select a State" style={{ width: '100%' }}>
                                                {member &&
                                                    member.map(x => {
                                                        return <option key={x._id} value={x._id}>{x.name}</option>
                                                    })}
                                            </select>
                                        </div>
                                        {submitted && newTask.accounatable !== [] &&
                                            <div className="col-sm-4 help-block">Template name is required</div>
                                        }
                                    </div>
                                    <div className={'form-group has-feedback' + (submitted && newTask.informed !== [] ? ' has-error' : '')}>
                                        <label className="col-sm-5 control-label" style={{ width: '100%', textAlign: 'left' }}>Người quan sát</label>
                                        <div className="col-sm-10" style={{ width: '100%' }}>
                                            <select className="form-control select2" multiple="multiple" ref="informed" data-placeholder="Select a State" style={{ width: '100%' }}>
                                                {member &&
                                                    member.map(x => {
                                                        return <option key={x._id} value={x._id}>{x.name}</option>
                                                    })}
                                            </select>
                                        </div>
                                        {submitted && newTask.informed !== [] &&
                                            <div className="col-sm-4 help-block">Template name is required</div>
                                        }
                                    </div>
                                </fieldset>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button className="btn btn-success">Lưu</button>
                            <button type="cancel" className="btn btn-primary" data-dismiss="modal">Xóa trắng</button>
                        </div>
                        {/* Modal Footer */}
                    </div>
                </div>
            </div >
        );
    }
}

function mapState(state) {
    const { jobtitles } = state;
    return { jobtitles };
}

const actionCreators = {
    getJobTitle: jobTitleActions.getAll
};
const connectedModalAddTask = connect(mapState, actionCreators)(ModalAddTask);
export { connectedModalAddTask as ModalAddTask };