import React, { Component } from 'react';
import { connect } from 'react-redux';
import { jobTitleActions } from '../../../redux-actions/CombineActions';
import { taskTemplateActions } from '../../../redux-actions/CombineActions';
import { taskManagementActions } from '../../../redux-actions/CombineActions';
class ModalAddTask extends Component {
    componentDidMount() {
        this.props.getJobTitle();
        // get id current role
        this.props.getTaskByUser(localStorage.getItem('id'), 1, "[]");
        // load js for form
        this.handleLoadjs();
    }

    // Load js for form
    handleLoadjs = () => {
        let script = document.createElement('script');
        script.src = 'main/js/CoCauToChuc.js';
        script.async = true;
        script.defer = true;
        document.body.appendChild(script);
    }
    constructor(props) {
        super(props);

        this.state = {
            newTask: {
                responsible: ["5dc2738e36a77710d8072e17"],
                accounatable: ["5dc2738e36a77710d8072e17"],
                consulted: [],
                informed: [],
                creator: localStorage.getItem('id'),
                tasktemplate: "",
                role: localStorage.getItem('currentRole'),
                parent: "",
                kpi: []
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
        this.handleOnSubmit = this.handleOnSubmit.bind(this);
    }

    // update state before submit because setState async
    updateState = () => {
        this.setState(state => {
            return {
                ...state,
                newTask: {
                    ...state.newTask,
                    name: this.name.value,
                    description: this.description.value,
                    startdate: this.startdate.value,
                    enddate: this.enddate.value,
                    priority: this.priority.value
                },
                submitted: true
            }
        });
    }

    // submit new task in data
    handleOnSubmit = async (e) => {
        e.preventDefault();
        await this.updateState();
        const { newTask } = this.state;
        if (newTask.name && newTask.description && newTask.startdate && newTask.enddate && newTask.priority) {
            this.props.addTask(newTask);
            this.setState(state => {
                return {
                    submitted: false
                }
            });
        }
        window.$("#myModalHorizontal").modal("hide");
    }

    render() {
        var course, listTaskTemplate, taskCreators, taskResponsibles, taskAccounatables, taskConsulteds, taskInformeds;
        const { newTask, submitted, member } = this.state;
        const { jobtitles, tasktemplates, tasks } = this.props;
        if (tasktemplates.items) listTaskTemplate = tasktemplates.items;
        if (jobtitles.items) course = jobtitles.items.content;
        if (tasks.taskCreators) taskCreators = tasks.taskCreators;
        if (tasks.taskResponsibles) taskResponsibles = tasks.taskResponsibles;
        if (tasks.taskAccounatables) taskAccounatables = tasks.taskAccounatables;
        if (tasks.taskConsulteds) taskConsulteds = tasks.taskConsulteds;
        if (tasks.taskInformeds) taskInformeds = tasks.taskInformeds;
        return (
            <div className="modal modal-full fade" id={`addNewTask${this.props.id}`} tabIndex={-1} role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                <div className="modal-dialog-full">
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
                                    <div className={'form-group has-feedback' + (submitted && !newTask.name ? ' has-error' : '')}>
                                        <label className="col-sm-4 control-label" style={{ width: '100%', textAlign: 'left' }}>Tên công việc*</label>
                                        <div className="col-sm-10" style={{ width: '100%' }}>
                                            <input type="Name" className="form-control" id="inputName3" placeholder="Tên công việc" ref={input => this.name = input} />
                                        </div>
                                        {submitted && !newTask.name &&
                                            <div className="col-sm-4 help-block">Hãy điền tên công việc</div>
                                        }
                                    </div>
                                    <div className={'form-group has-feedback' + (submitted && !newTask.description ? ' has-error' : '')}>
                                        <label className="col-sm-4 control-label" style={{ width: '100%', textAlign: 'left' }}>Mô tả công việc</label>
                                        <div className="col-sm-10" style={{ width: '100%' }}>
                                            <textarea type="Description" className="form-control" id="inputDescription3" name="Mô tả công việc" placeholder="Mô tả công việc" ref={input => this.description = input} />
                                        </div>
                                        {submitted && !newTask.description &&
                                            <div className="col-sm-4 help-block">Hãy điền mô tả công việc</div>
                                        }
                                    </div>
                                    <div className={'form-group has-feedback' + (submitted && (!newTask.startdate || !newTask.enddate) ? ' has-error' : '')}>
                                        <div className="col-sm-6">
                                            <label className="col-sm-4 control-label" style={{ width: '100%', textAlign: 'left', marginLeft: "-14px" }}>Ngày bắt đầu*:</label>
                                            <div className={'input-group date has-feedback col-sm-10'} style={{ width: '100%' }}>
                                                <div className="input-group-addon">
                                                    <i className="fa fa-calendar" />
                                                </div>
                                                <input type="text" className="form-control" ref={input => this.startdate = input} name="time" id="datepicker1" data-date-format="dd-mm-yyyy" />
                                            </div>
                                            {submitted && !newTask.startdate &&
                                                <div className="col-sm-4 help-block">Hãy chọn thời gian bắt đầu</div>
                                            }
                                        </div>
                                        <div className="col-sm-6">
                                            <label className="col-sm-4 control-label" style={{ width: '100%', textAlign: 'left', marginLeft: "-14px" }}>Ngày kết thúc*:</label>
                                            <div className={'input-group date has-feedback col-sm-10'} style={{ width: '100%' }}>
                                                <div className="input-group-addon">
                                                    <i className="fa fa-calendar" />
                                                </div>
                                                <input type="text" className="form-control" ref={input => this.enddate = input} name="time" id="datepicker3" data-date-format="dd-mm-yyyy" />
                                            </div>
                                            {submitted && !newTask.enddate &&
                                                <div className="col-sm-4 help-block">Hãy chọn thời gian kết thúc</div>
                                            }
                                        </div>
                                    </div>
                                    <div className="form-group  has-feedback">
                                        <label className="col-sm-4 control-label" style={{ width: '100%', textAlign: 'left' }}>Mức độ ưu tiên</label>
                                        <div className="col-sm-10" style={{ width: '100%' }}>
                                            <select defaultValue="Cao" className="form-control" style={{ width: '100%' }} ref={input => this.priority = input}>
                                                <option value="Cao">Cao</option>
                                                <option value="Trung bình">Trung bình</option>
                                                <option value="Thấp">Thấp</option>
                                            </select>
                                        </div>
                                    </div>
                                </fieldset>
                                <fieldset className="scheduler-border">
                                    <legend className="scheduler-border">Liên kết công việc (OKR)</legend>
                                    <div className={'form-group has-feedback' + (submitted && !newTask.tasktemplate ? ' has-error' : '')}>
                                        <label className="col-sm-4 control-label" style={{ width: '100%', textAlign: 'left' }}>Chọn đơn vị*</label>
                                        <div className="col-sm-10" style={{ width: '100%' }}>
                                            <select defaultValue="1" className="form-control select2" style={{ width: '100%' }} ref={input => this.unit = input}>
                                                {course &&
                                                    course.map(x => {
                                                        return <option key={x._id} value={x._id}>{x.name}</option>
                                                    })}
                                            </select>
                                        </div>
                                        {submitted && !newTask.tasktemplate &&
                                            <div className="col-sm-4 help-block">Hãy chọn đơn vị</div>
                                        }
                                    </div>
                                    <div className="form-group  has-feedback">
                                        <label className="col-sm-4 control-label" style={{ width: '100%', textAlign: 'left' }}>Chọn mẫu công việc</label>
                                        <div className="col-sm-10" style={{ width: '100%' }}>
                                            {
                                                (typeof listTaskTemplate !== "undefined" && listTaskTemplate.length !== 0) ?
                                                    <select className="form-control select2" style={{ width: '100%' }} ref={input => this.tasktemplate = input}>
                                                        <option>--Hãy chọn mẫu công việc--</option>
                                                        {
                                                            listTaskTemplate.map(item => {
                                                                return <option key={item.resource._id} value={item.resource._id}>{item.resource.name}</option>
                                                            })
                                                        }
                                                    </select> : null
                                            }
                                        </div>
                                    </div>
                                    <div className="form-group  has-feedback">
                                        <label className="col-sm-4 control-label" style={{ width: '100%', textAlign: 'left' }}>Chọn công việc cha</label>
                                        <div className="col-sm-10" style={{ width: '100%' }}>
                                            <select className="form-control select2" style={{ width: '100%' }} ref={input => this.parent = input} defaultValue={this.props.id!==""?this.props.id:null}>
                                                <option>--Hãy chọn công việc cha--</option>
                                                {(typeof taskResponsibles !== 'undefined' && taskResponsibles.length !== 0) ?
                                                    <optgroup label="Thực hiện chính">
                                                        {taskResponsibles.map(item => {
                                                            return <option key={item._id} value={item._id}>{item.name}</option>
                                                        })}
                                                    </optgroup> : null}
                                                {(typeof taskAccounatables !== 'undefined' && taskAccounatables.length !== 0) ?
                                                    <optgroup label="Phê duyệt">
                                                        {taskAccounatables.map(item => {
                                                            return <option key={item._id} value={item._id}>{item.name}</option>
                                                        })}
                                                    </optgroup> : null}
                                                {(typeof taskConsulteds !== 'undefined' && taskConsulteds.length !== 0) ?
                                                    <optgroup label="Hỗ trợ thực hiện">
                                                        {taskConsulteds.map(item => {
                                                            return <option key={item._id} value={item._id}>{item.name}</option>
                                                        })}
                                                    </optgroup> : null}
                                                {(typeof taskCreators !== 'undefined' && taskCreators.length !== 0) ?
                                                    <optgroup label="Thiết lập">
                                                        {taskCreators.map(item => {
                                                            return <option key={item._id} value={item._id}>{item.name}</option>
                                                        })}
                                                    </optgroup> : null}
                                                {(typeof taskInformeds !== 'undefined' && taskInformeds.length !== 0) ?
                                                    <optgroup label="Quan sát">
                                                        {taskInformeds.map(item => {
                                                            return <option key={item._id} value={item._id}>{item.name}</option>
                                                        })}
                                                    </optgroup> : null}
                                            </select>
                                        </div>
                                    </div>
                                    <div className={'form-group has-feedback' + (submitted && !newTask.kpi ? ' has-error' : '')}>
                                        <label className="col-sm-5 control-label" style={{ width: '100%', textAlign: 'left' }}>Chọn KPI mục tiêu*</label>
                                        <div className="col-sm-10" style={{ width: '100%' }}>
                                            <select defaultValue={["1"]} className="form-control select2" multiple="multiple" data-placeholder="Select a State" style={{ width: '100%' }} ref={input => this.kpi = input}>
                                                <option value="1">Đảm bảo quy trình nội bộ</option>
                                                <option value="2">Đảm bảo chất lượng sản phẩm</option>
                                                <option value="3">Hoàn thành quy trình sản xuất</option>
                                                <option value="4">Đáp ứng nhu cầu khách hàng</option>
                                            </select>
                                        </div>
                                        {submitted && !newTask.kpi &&
                                            <div className="col-sm-4 help-block">Hãy chọn kpi mục tiêu</div>
                                        }
                                    </div>
                                </fieldset>
                                <fieldset className="scheduler-border">
                                    <legend className="scheduler-border">Phân định trách nhiệm (RACI)</legend>
                                    <div className={'form-group has-feedback' + (submitted && newTask.responsible === [] ? ' has-error' : '')}>
                                        <label className="col-sm-4 control-label" style={{ width: '100%', textAlign: 'left' }}>Người thực hiện*</label>
                                        <div className="col-sm-10" style={{ width: '100%' }}>
                                            <select className="form-control select2" multiple="multiple" data-placeholder="Hãy chọn người thực hiện" style={{ width: '100%' }} ref={input => this.responsible = input}>
                                                {member &&
                                                    member.map(x => {
                                                        return <option key={x._id} value={x._id}>{x.name}</option>
                                                    })}
                                            </select>
                                        </div>
                                        {submitted && newTask.responsible === [] &&
                                            <div className="col-sm-4 help-block">Hãy chọn người thực hiện</div>
                                        }
                                    </div>
                                    <div className={'form-group has-feedback' + (submitted && newTask.accounatable === [] ? ' has-error' : '')}>
                                        <label className="col-sm-5 control-label" style={{ width: '100%', textAlign: 'left' }}>Người phê duyệt*</label>
                                        <div className="col-sm-10" style={{ width: '100%' }}>
                                            <select className="form-control select2" multiple="multiple" data-placeholder="Hãy chọn người phê duyệt" style={{ width: '100%' }} ref={input => this.accounatable = input}>
                                                {member &&
                                                    member.map(x => {
                                                        return <option key={x._id} value={x._id}>{x.name}</option>
                                                    })}
                                            </select>
                                        </div>
                                        {submitted && newTask.accounatable === [] &&
                                            <div className="col-sm-4 help-block">Hãy chọn người phê duyệt</div>
                                        }
                                    </div>
                                    <div className='form-group has-feedback'>
                                        <label className="col-sm-5 control-label" style={{ width: '100%', textAlign: 'left' }}>Người hỗ trợ</label>
                                        <div className="col-sm-10" style={{ width: '100%' }}>
                                            <select className="form-control select2" multiple="multiple" data-placeholder="Hãy chọn người hỗ trợ" style={{ width: '100%' }} ref={input => this.consulted = input}>
                                                {member &&
                                                    member.map(x => {
                                                        return <option key={x._id} value={x._id}>{x.name}</option>
                                                    })}
                                            </select>
                                        </div>
                                    </div>
                                    <div className='form-group has-feedback'>
                                        <label className="col-sm-5 control-label" style={{ width: '100%', textAlign: 'left' }}>Người quan sát</label>
                                        <div className="col-sm-10" style={{ width: '100%' }}>
                                            <select className="form-control select2" multiple="multiple" data-placeholder="Hãy chọn người quan sát" style={{ width: '100%' }} ref={input => this.informed = input}>
                                                {member &&
                                                    member.map(x => {
                                                        return <option key={x._id} value={x._id}>{x.name}</option>
                                                    })}
                                            </select>
                                        </div>
                                    </div>
                                </fieldset>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button onClick={this.handleOnSubmit} className="btn btn-success">Lưu</button>
                            <button type="cancel" className="btn btn-primary">Xóa trắng</button>
                        </div>
                        {/* Modal Footer */}
                    </div>
                </div>
            </div >
        );
    }
}

function mapState(state) {
    const { jobtitles, tasktemplates, tasks } = state;
    return { jobtitles, tasktemplates, tasks };
}

const actionCreators = {
    getJobTitle: jobTitleActions.getAll,
    getTaskByUser: taskTemplateActions.getAllTaskTemplateByUser,
    addTask: taskManagementActions.addTask
};

const connectedModalAddTask = connect(mapState, actionCreators)(ModalAddTask);
export { connectedModalAddTask as ModalAddTask };