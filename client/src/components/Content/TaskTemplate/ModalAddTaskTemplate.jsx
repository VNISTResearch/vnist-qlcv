import React, { Component } from 'react';
import { connect } from 'react-redux';
import { taskTemplateActions, jobTitleActions } from '../../../redux-actions/CombineActions';
// import './modal.css';

class ModalAddTaskTemplate extends Component {
    componentDidMount() {
        this.props.getJobTitle();
    }

    constructor(props) {
        super(props);

        this.state = {
            newTemplate: {
                name: '',
                read: [],
                responsible: [],
                accounatable: [],
                informed: [],
                description: '',
                creator: '',
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

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    onAddAction = (event) => {
        event.preventDefault();
        const name = this.nameAction.value;
        const description = this.desAction.value;
        this.setState({
            action: {
                name: name,
                description: description,
                mandatary: this.mandataryAction.checked
            }
        })
        let { newTemplate } = this.state;
        if (name && description) {
            this.setState(state => {
                const listAction = [...newTemplate.listAction, state.action]
                return {
                    newTemplate: {
                        ...newTemplate,
                        listAction
                    }
                }
            })
        }
    }

    onAddInfoField = (event) => {
        event.preventDefault();
        const name = this.nameInfo.value;
        const description = this.desInfo.value;
        this.setState({
            information: {
                name: name,
                description: description,
                type: this.typeInfo.value,
                mandatary: this.mandataryAction.checked
            }
        })
        let { newTemplate } = this.state;
        if (name && description) {
            this.setState(state => {
                const listInfo = [...(newTemplate.listInfo), state.information];
                return {
                    newTemplate: {
                        ...newTemplate,
                        listInfo
                    },
                }
            })
        }
    }
    // function: reset all data fields of a action
    handleCancelAction = () => {
        this.nameAction.value = ""
    }
    handleSubmit(event) {
        event.preventDefault();
        let select = this.refs.read;
        let values = [].filter.call(select.options, o => o.selected).map(o => o.value);
        this.setState({
            newTemplate: {
                name: this.name.value,
                read: values,
                description: this.description.value
            }
        });
    }
    render() {
        var course, listAction, listInfo;
        const { newTemplate, submitted, action, information, member } = this.state;
        const { jobtitles } = this.props;
        if (newTemplate.listAction) listAction = newTemplate.listAction;
        if (newTemplate.listInfo) listInfo = newTemplate.listInfo;
        if (jobtitles.items) course = jobtitles.items.content;
        console.log(this.state);
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
                            <h3 className="modal-title" id="myModalLabel"><b>Thêm mẫu công việc</b></h3>
                        </div>
                        {/* Modal Body */}
                        <div className="modal-body" >
                            <form className="form-horizontal">
                                <div className="row">
                                    <div className="col-sm-6">
                                        <div className={'form-group has-feedback' + (submitted && !newTemplate.name ? ' has-error' : '')}>
                                            <label className="col-sm-4 control-label" htmlFor="inputName3" style={{ width: '100%', textAlign: 'left' }}>Tên mẫu*</label>
                                            <div className="col-sm-10" style={{ width: '100%' }}>
                                                <input type="Name" className="form-control" id="inputName3" placeholder="Name" defaultValue={newTemplate.name} ref={input => this.name = input} />
                                            </div>
                                            {submitted && !newTemplate.name &&
                                                <div className="col-sm-4 help-block">Template name is required</div>
                                            }
                                        </div>
                                        <div className={'form-group has-feedback' + (submitted && newTemplate.read !== [] ? ' has-error' : '')}>
                                            <label className="col-sm-5 control-label" style={{ width: '100%', textAlign: 'left' }}>Những người được phép xem*</label>
                                            <div className="col-sm-10" style={{ width: '100%' }}>
                                                <select defaultValue={newTemplate.read} className="form-control select2" multiple="multiple" ref="read" data-placeholder="Select a State" style={{ width: '100%' }}>
                                                    {course &&
                                                        course.map(x => {
                                                            return <option key={x._id} value={x._id}>{x.name}</option>
                                                        })}
                                                </select>
                                            </div>
                                            {submitted && newTemplate.read !== [] &&
                                                <div className="col-sm-4 help-block">Template name is required</div>
                                            }
                                        </div>
                                        <div className={'form-group has-feedback' + (submitted && newTemplate.responsible !== [] ? ' has-error' : '')}>
                                            <label className="col-sm-5 control-label" style={{ width: '100%', textAlign: 'left' }}>Người thực hiện</label>
                                            <div className="col-sm-10" style={{ width: '100%' }}>
                                                <select defaultValue={newTemplate.responsible} className="form-control select2" multiple="multiple" ref="responsible" data-placeholder="Select a State" style={{ width: '100%' }}>
                                                    {member &&
                                                        member.map(x => {
                                                            return <option key={x._id} value={x._id}>{x.name}</option>
                                                        })}
                                                </select>
                                            </div>
                                            {submitted && newTemplate.responsible !== [] &&
                                                <div className="col-sm-4 help-block">Template name is required</div>
                                            }
                                        </div>
                                        <div className={'form-group has-feedback' + (submitted && newTemplate.accounatable !== [] ? ' has-error' : '')}>
                                            <label className="col-sm-5 control-label" style={{ width: '100%', textAlign: 'left' }}>Người phê duyệt</label>
                                            <div className="col-sm-10" style={{ width: '100%' }}>
                                                <select defaultValue={newTemplate.accounatable} className="form-control select2" multiple="multiple" ref="accounatable" data-placeholder="Select a State" style={{ width: '100%' }}>
                                                    {member &&
                                                        member.map(x => {
                                                            return <option key={x._id} value={x._id}>{x.name}</option>
                                                        })}
                                                </select>
                                            </div>
                                            {submitted && newTemplate.accounatable !== [] &&
                                                <div className="col-sm-4 help-block">Template name is required</div>
                                            }
                                        </div>
                                        <div className={'form-group has-feedback' + (submitted && newTemplate.informed !== [] ? ' has-error' : '')}>
                                            <label className="col-sm-5 control-label" style={{ width: '100%', textAlign: 'left' }}>Người quan sát</label>
                                            <div className="col-sm-10" style={{ width: '100%' }}>
                                                <select defaultValue={newTemplate.informed} className="form-control select2" multiple="multiple" ref="informed" data-placeholder="Select a State" style={{ width: '100%' }}>
                                                    {member &&
                                                        member.map(x => {
                                                            return <option key={x._id} value={x._id}>{x.name}</option>
                                                        })}
                                                </select>
                                            </div>
                                            {submitted && newTemplate.informed !== [] &&
                                                <div className="col-sm-4 help-block">Template name is required</div>
                                            }
                                        </div>
                                        <fieldset className="scheduler-border">
                                            <legend className="scheduler-border">Danh sách các hoạt động của công việc</legend>
                                            <div className="control-group">
                                                <div className={'form-group has-feedback' + (submitted && !action.name ? ' has-error' : '')}>
                                                    <label className="col-sm-4 control-label" style={{ width: '100%', textAlign: 'left' }}>Tên hoạt động</label>
                                                    <div className="col-sm-10" style={{ width: '100%' }}>
                                                        <input type="text" className="form-control" placeholder="Tên hoạt động" ref={input => this.nameAction = input} />
                                                    </div>
                                                    {submitted && !newTemplate.name &&
                                                        <div className=" col-sm-4 help-block">Template name is required</div>
                                                    }
                                                </div>
                                                <div className={'form-group has-feedback' + (submitted && !action.description ? ' has-error' : '')}>
                                                    <label className="col-sm-4 control-label" htmlFor="inputDescription3" style={{ width: '100%', textAlign: 'left' }}>Mô tả hoạt động</label>
                                                    <div className="col-sm-10" style={{ width: '100%' }}>
                                                        <textarea type="text" className="form-control" id="inputDescription3" name="description" placeholder="Description" ref={input => this.desAction = input} />
                                                    </div>
                                                    {submitted && !newTemplate.description &&
                                                        <div className="col-sm-4 help-block">Template des is required</div>
                                                    }
                                                </div>
                                                <div className="form-group">
                                                    <label className="col-sm-2 control-label">
                                                        Bắt buộc &nbsp;
                                                        <input type="checkbox" className="flat-red" defaultChecked={action.mandatary} ref={input => this.mandataryAction = input} />
                                                    </label>
                                                </div>
                                                <div className="col-sm-8 col-sm-offset-7" style={{ marginBottom: '15px' }}>
                                                    <button className="btn btn-success" style={{ width: "25%" }} onClick={this.onAddAction}>Thêm</button>
                                                    <button className="btn btn-primary" style={{ width: "25%", marginLeft: "5%" }} onClick={this.handleCancelAction}>Xóa trắng</button>
                                                </div>
                                                <table className="table table-bordered">
                                                    <thead>
                                                        <tr>
                                                            <th style={{ width: '10%' }}>Stt</th>
                                                            <th>Tên hành động</th>
                                                            <th>Mô tả</th>
                                                            <th>Bắt buộc</th>
                                                            <th>Hành động</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {
                                                            (typeof listAction === 'undefined' || listAction.length === 0) ? <tr><td colSpan={4}><center>No data</center></td></tr> :
                                                                listAction.map((item, index) =>
                                                                    <tr key={index + 1}>
                                                                        <td>{index + 1}</td>
                                                                        <td>{item.name}</td>
                                                                        <td>{item.description}</td>
                                                                        <td>{item.mandatary ? "Có" : "Không"}</td>
                                                                        <td>
                                                                            <a href="#abc" className="edit" title="Edit" data-toggle="tooltip" onClick={() => this.edit(item, index)}><i className="material-icons"></i></a>
                                                                            <a href="#abc" className="delete" title="Delete" data-toggle="tooltip" onClick={() => this.delete(index)}><i className="material-icons"></i></a>
                                                                        </td>
                                                                    </tr>
                                                                )
                                                        }
                                                    </tbody>
                                                </table>
                                            </div>
                                        </fieldset>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className={'form-group has-feedback' + (submitted && !newTemplate.description ? ' has-error' : '')}>
                                            <label className="col-sm-4 control-label" htmlFor="inputDescription3" style={{ width: '100%', textAlign: 'left' }}>Mô tả công việc</label>
                                            <div className="col-sm-10" style={{ width: '100%' }}>
                                                <textarea type="Description" className="form-control" id="inputDescription3" name="description" placeholder="Description" defaultValue={newTemplate.description} ref={input => this.description = input} />
                                            </div>
                                            {submitted && !newTemplate.description &&
                                                <div className="col-sm-4 help-block">Template des is required</div>
                                            }
                                        </div>
                                        <div className={'form-group has-feedback' + (submitted && !newTemplate.name ? ' has-error' : '')}>
                                            <label className="col-sm-4 control-label" htmlFor="inputName3" style={{ width: '100%', textAlign: 'left' }}>Công thức tính điểm KPI công việc</label>
                                            <div className="col-sm-10" style={{ width: '100%' }}>
                                                <input type="text" className="form-control" id="inputName3" placeholder="100*(1-(TT1/TT2)-(TT3/TT4)-(D0/D)-(AD/A))" defaultValue={newTemplate.name} ref={input => this.name = input} />
                                            </div>
                                            {submitted && !newTemplate.name &&
                                                <div className=" col-sm-4 help-block">Template name is required</div>
                                            }
                                            <label className="col-sm-12 control-label" style={{ width: '100%', textAlign: 'left' }}>Trong công thức có thể dùng thêm các tham số tự động sau:</label>
                                            <label className="col-sm-12" style={{ fontWeight: "400" }}>D: Tổng số ngày thực hiện công việc (trừ CN)</label>
                                            <label className="col-sm-12" style={{ fontWeight: "400" }}>D0: Số ngày quá hạn</label>
                                            <label className="col-sm-12" style={{ fontWeight: "400" }}>A: Tổng số hoạt động</label>
                                            <label className="col-sm-12" style={{ fontWeight: "400" }}>AD: Tổng số lần duyệt "Chưa đạt" cho các hoạt động</label>
                                        </div>
                                        <fieldset className="scheduler-border">
                                            <legend className="scheduler-border">Danh sách các thông tin yêu cầu của công việc</legend>
                                            <div className="control-group">
                                                <div className={'form-group has-feedback' + (submitted && !newTemplate.name ? ' has-error' : '')}>
                                                    <label className="col-sm-4 control-label" style={{ width: '100%', textAlign: 'left' }}>Tên thông tin</label>
                                                    <div className="col-sm-10" style={{ width: '100%' }}>
                                                        <input type="text" className="form-control" placeholder="Tên hoạt động" defaultValue={information.name} ref={input => this.nameInfo = input} />
                                                    </div>
                                                    {submitted && !newTemplate.name &&
                                                        <div className=" col-sm-4 help-block">Template name is required</div>
                                                    }
                                                </div>
                                                <div className={'form-group has-feedback' + (submitted && !newTemplate.description ? ' has-error' : '')}>
                                                    <label className="col-sm-4 control-label" htmlFor="inputDescription3" style={{ width: '100%', textAlign: 'left' }}>Mô tả thông tin</label>
                                                    <div className="col-sm-10" style={{ width: '100%' }}>
                                                        <textarea type="text" className="form-control" id="inputDescription3" name="description" placeholder="Description" defaultValue={information.description} ref={input => this.desInfo = input} />
                                                    </div>
                                                    {submitted && !newTemplate.description &&
                                                        <div className="col-sm-4 help-block">Template des is required</div>
                                                    }
                                                </div>
                                                <div className="form-group">
                                                    <label className="col-sm-4 control-label">Kiểu dữ liệu:</label>
                                                    <div className="col-sm-10" style={{ width: '100%' }}>
                                                        <select className="form-control" id="seltype" defaultValue={information.type} name="type" ref={select => this.typeInfo = select} >
                                                            <option value="Văn bản">Văn bản</option>
                                                            <option value="Số">Số</option>
                                                            <option value="Ngày tháng">Ngày tháng</option>
                                                            <option value="Boolean">Boolean</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="form-group">
                                                    <label className="col-sm-2 control-label">
                                                        Bắt buộc &nbsp;
                                                        <input type="checkbox" className="flat-red" defaultChecked ref={input => this.mandataryInfo = input} />
                                                    </label>
                                                </div>
                                                <div className="col-sm-8 col-sm-offset-7" style={{ marginBottom: '15px' }}>
                                                    <button className="btn btn-success" style={{ width: "25%" }} onClick={this.onAddInfoField}>Thêm</button>
                                                    <button className="btn btn-primary" style={{ width: "25%", marginLeft: "5%" }}>Xóa trắng</button>
                                                </div>
                                                <table className="table table-bordered">
                                                    <thead>
                                                        <tr>
                                                            <th style={{ width: '10%' }}>Stt</th>
                                                            <th>Tên trường thông tin</th>
                                                            <th>Mô tả</th>
                                                            <th>Kiểu dữ liệu</th>
                                                            <th>Bắt buộc</th>
                                                            <th>Hành động</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {
                                                            (typeof listInfo === 'undefined' || listInfo.length === 0) ? <tr><td colSpan={6}><center>No data</center></td></tr> :
                                                                listInfo.map((item, index) =>
                                                                    <tr key={index}>
                                                                        <td>{index + 1}</td>
                                                                        <td>{item.name}</td>
                                                                        <td>{item.description}</td>
                                                                        <td>{item.type}</td>
                                                                        <td>{item.mandatary ? "Có" : "Không"}</td>
                                                                        <td>
                                                                            <a href="#abc" className="edit" title="Edit" data-toggle="tooltip" onClick={() => this.edit(item, index)}><i className="material-icons"></i></a>
                                                                            <a href="#abc" className="delete" title="Delete" data-toggle="tooltip" onClick={() => this.delete(index)}><i className="material-icons"></i></a>
                                                                        </td>
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
                            <button className="btn btn-success" onClick={this.handleSubmit}>Lưu</button>
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
    const adding = state.tasktemplates;
    return { adding, jobtitles };
}

const actionCreators = {
    addNewTemplate: taskTemplateActions.addNewTemplate,
    getJobTitle: jobTitleActions.getAll
};
const connectedModalAddTaskTemplate = connect(mapState, actionCreators)(ModalAddTaskTemplate);
export { connectedModalAddTaskTemplate as ModalAddTaskTemplate };