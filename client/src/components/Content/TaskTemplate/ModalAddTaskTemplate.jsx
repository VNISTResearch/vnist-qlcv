import React, { Component } from 'react';
import { connect } from 'react-redux';
import { taskTemplateActions, departmentActions } from '../../../redux-actions/CombineActions';
import Sortable from 'sortablejs';

class ModalAddTaskTemplate extends Component {
    componentDidMount() {
        //Load js for form
        this.handleLoadJS();
        //Load library for sort action table
        this.handleSortable();
        //get department of current user
        this.props.getDepartment(localStorage.getItem('id'));
    }
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

        this.handleSubmit = this.handleSubmit.bind(this);
    }
    // Script for item in form
    handleLoadJS = () => {
        let script = document.createElement('script');
        script.src = 'main/js/CoCauToChuc.js';
        script.async = true;
        script.defer = true;
        document.body.appendChild(script);
    }

    // Drag and drop item in action table
    handleSortable = () => {
        var el1 = document.getElementById('actions');
        Sortable.create(el1, {
            chosenClass: 'chosen',
            onChange: function (evt) {
                // let data = [...evt.to.rows].map(t => [...t.children].map(u => u.innerText));
                // // console.log(data,"ádasdasdsadasd");
                // newdata = data.map(item => {
                //     var map = {}
                //     item.map((x, index) => {
                //         if (index === 0) map["name"] = x;
                //         if (index === 1) map["description"] = x;
                //         if (index === 2) map["mandatary"] = (x === "Có" ? true : false);
                //         return true;
                //     })
                //     return map;
                // })
                // // newdata = newdata.map(item => Object.assign({}, item));
                // // console.log(newdata);
                // this.updateState(newdata);
                window.$('#actions tr').each(function (index) {
                    window.$(this).find('td:nth-child(1)').html(index + 1);
                });
            }
        });
        var el2 = document.getElementById('informations');
        Sortable.create(el2, {
            chosenClass: 'chosen',
            onChange: function (evt) {
                window.$('#informations tr').each(function (index) {
                    window.$(this).find('td:nth-child(1)').html(index + 1);
                });
            }
        });
    }

    // function add action of template
    onAddAction = (event) => {
        event.preventDefault();
        const name = this.nameAction.value;
        const description = this.desAction.value;
        this.setState({
            action: {
                name: name,
                description: description,
                mandatary: this.mandataryAction.checked
            },
            addAction: true
        })
        let { newTemplate } = this.state;
        if (name && description) {
            this.setState(state => {
                const listAction = [...newTemplate.listAction, state.action]
                return {
                    newTemplate: {
                        ...newTemplate,
                        listAction
                    },
                    addAction: false
                }
            })
        }
    }

    // function edit item in action table
    editAction = (action, index) => {
        this.nameAction.value = action.name;
        this.desAction.value = action.description;
        this.mandataryAction.checked = action.mandatary
        this.setState({
            editAction: true,
            indexAction: index,
            action: {
                mandatary: action.mandatary
            }
        })
        this.handleLoadJS();
    }

    // Save new data after edit action
    saveEditedAction = (event) => {
        event.preventDefault();
        const { indexAction } = this.state;
        const newAction = {
            name: this.nameAction.value,
            description: this.desAction.value,
            mandatary: this.mandataryAction.checked
        };
        let { listAction } = this.state.newTemplate;
        var newList;
        if (listAction) {
            newList = listAction.map((item, index) => {
                return (index === indexAction) ? newAction : item;
            })
        }
        this.setState(state => {
            return {
                ...state,
                newTemplate: {
                    ...(this.state.newTemplate),
                    listAction: newList
                },
                editAction: false
            }
        })
    }

    // delete action in action table
    deleteAction = (index) => {
        let { listAction } = this.state.newTemplate;
        var newList;
        if (listAction) {
            newList = listAction.filter((item, x) => index !== x);
        }
        this.setState(state => {
            return {
                ...state,
                newTemplate: {
                    ...(this.state.newTemplate),
                    listAction: newList
                },
            }
        })
    }

    // Edit information in information table
    editInformation = (information, index) => {
        this.nameInfo.value = information.name;
        this.desInfo.value = information.description;
        this.mandataryInfo.checked = information.mandatary;
        this.typeInfo.value = information.type;
        this.setState({
            editInfo: true,
            indexInfo: index,
        })
        this.handleLoadJS();
    }

    // Save new data after edit information in information table
    saveEditedInformation = (event) => {
        event.preventDefault();
        const { indexInfo } = this.state;
        const newInformation = {
            name: this.nameInfo.value,
            description: this.desInfo.value,
            type: this.typeInfo.value,
            mandatary: this.mandataryInfo.checked
        };
        let { listInfo } = this.state.newTemplate;
        var newList;
        if (listInfo) {
            newList = listInfo.map((item, index) => {
                return (index === indexInfo) ? newInformation : item;
            })
        }
        this.setState(state => {
            return {
                ...state,
                newTemplate: {
                    ...(this.state.newTemplate),
                    listInfo: newList
                },
                editInfo: false
            }
        })
    }

    // delete item in information table
    deleteInfo = (index) => {
        let { listInfo } = this.state.newTemplate;
        var newList;
        if (listInfo) {
            newList = listInfo.filter((item, x) => index !== x);
        }
        this.setState(state => {
            return {
                ...state,
                newTemplate: {
                    ...(this.state.newTemplate),
                    listInfo: newList
                }
            }
        })
    }

    // add new information in information table
    onAddInfoField = (event) => {
        event.preventDefault();
        const name = this.nameInfo.value;
        const description = this.desInfo.value;
        this.setState({
            information: {
                name: name,
                description: description,
                type: this.typeInfo.value,
                mandatary: this.mandataryInfo.checked
            },
            addInfo: true
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
                    addInfo: false
                }
            })
        }
    }

    // function: reset all data fields of action table
    handleCancelAction = (event) => {
        event.preventDefault();
        this.nameAction.value = "";
        this.desAction.value = "";
        this.mandataryAction.checked = true;
    }

    // function: reset all data fields of information table
    handleCancelInformation = (event) => {
        event.preventDefault();
        this.nameInfo.value = "";
        this.desInfo.value = "";
        this.mandataryInfo.checked = true;
        this.typeInfo.value = "Văn bản";
    }

    // function: reset all data fields
    handleCancel = (event) => {
        event.preventDefault();
        this.handleCancelInformation();
        this.handleCancelAction();
        this.setState(state => {
            return {
                ...state,
                newTemplate: {
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
                submitted: false,
                editAction: false,
                addAction: false,
                editInfo: false,
                addInfo: false
            }

        })
    }
    // update state before submit because setState async
    updateState = () => {
        // get data in action table
        var el1 = document.getElementById('actions');
        let dataActions = [...el1.rows].map(t => [...t.children].map(u => u.innerText));
        let newListActions = dataActions.map(item => {
            var map = {}
            item.map((x, index) => {
                if (index === 1) map["name"] = x;
                if (index === 2) map["description"] = x;
                if (index === 3) map["mandatary"] = (x === "Có" ? true : false);
                return true;
            })
            return map;
        })
        var el2 = document.getElementById('informations');
        let dataInfos = [...el2.rows].map(t => [...t.children].map(u => u.innerText));
        let newListInfos = dataInfos.map(item => {
            var map = {}
            item.map((x, index) => {
                if (index === 1) map["name"] = x;
                if (index === 2) map["description"] = x;
                if (index === 3) map["type"] = x;
                if (index === 4) map["mandatary"] = (x === "Có" ? true : false);
                return true;
            })
            return map;
        })
        // get data in multi select
        // let select = this.refs.read;
        // let values = [].filter.call(select.options, o => o.selected).map(o => o.value);
        this.setState(state => {
            return {
                ...state,
                newTemplate: {
                    ...state.newTemplate,
                    listAction: newListActions,
                    listInfo: newListInfos,
                    name: this.name.value,
                    description: this.description.value,
                    formula: this.formula.value,
                },
                submitted: true
            }
        });
    }

    // Submit new template in data
    handleSubmit = async (event) => {
        event.preventDefault();
        await this.updateState();
        const { newTemplate } = this.state;
        console.log(newTemplate);
        // if (newTemplate.name && newTemplate.description && newTemplate.formula && newTemplate.listAction && newTemplate.listInfo) {
        //     this.props.addNewTemplate(newTemplate);
        //     this.setState(state => {
        //         return {
        //             submitted: false
        //         }
        //     });
        //     this.handleCancel();
        // }
        window.$("#myModalHorizontal").modal("hide");
    }
    render() {
        var units, listAction, listInfo;
        const { newTemplate, submitted, action, information, member, addAction, addInfo } = this.state;
        const { departments } = this.props;
        if (newTemplate.listAction) listAction = newTemplate.listAction;
        if (newTemplate.listInfo) listInfo = newTemplate.listInfo;
        if (departments.unitofuser) units = departments.unitofuser;
        console.log(this.state);
        return (
            <div className="modal fade" id="myModalHorizontal" tabIndex={-1} role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                <div className="modal-dialog-full">
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
                                        <div className={'form-group has-feedback' + (submitted && newTemplate.unit ? ' has-error' : '')}>
                                            <label className="col-sm-5 control-label" style={{ width: '100%', textAlign: 'left' }}>Đơn vị*:</label>
                                            <div className="col-sm-10" style={{ width: '100%' }}>
                                                {units &&
                                                    <select defaultValue={units[0]._id} className="form-control select2" ref="unit" data-placeholder="Chọn đơn vị quản lý mẫu" style={{ width: '100%' }}>
                                                        {units.map(x => {
                                                            return <option key={x._id} value={x._id}>{x.name}</option>
                                                        })}
                                                </select>}
                                            </div>
                                            {submitted && newTemplate.read === [] &&
                                                <div className="col-sm-4 help-block">Hãy đơn vị quản lý mẫu</div>
                                            }
                                        </div>
                                        <div className={'form-group has-feedback' + (submitted && !newTemplate.name ? ' has-error' : '')}>
                                            <label className="col-sm-4 control-label" htmlFor="inputName3" style={{ width: '100%', textAlign: 'left' }}>Tên mẫu*</label>
                                            <div className="col-sm-10" style={{ width: '100%' }}>
                                                <input type="Name" className="form-control" id="inputName3" placeholder="Tên mẫu công việc" defaultValue={newTemplate.name} ref={input => this.name = input} />
                                            </div>
                                            {submitted && !newTemplate.name &&
                                                <div className="col-sm-4 help-block">Hãy điền tên mẫu công việc</div>
                                            }
                                        </div>
                                        <div className={'form-group has-feedback' + (submitted && newTemplate.read === [] ? ' has-error' : '')}>
                                            <label className="col-sm-5 control-label" style={{ width: '100%', textAlign: 'left' }}>Những người được phép xem*</label>
                                            <div className="col-sm-10" style={{ width: '100%' }}>
                                                <select defaultValue={newTemplate.read} className="form-control select2" multiple="multiple" ref="read" data-placeholder="Chọn vị trí được xem" style={{ width: '100%' }}>
                                                    {/* {course &&
                                                        course.map(x => {
                                                            return <option key={x._id} value={x._id}>{x.name}</option>
                                                        })} */}
                                                </select>
                                            </div>
                                            {submitted && newTemplate.read === [] &&
                                                <div className="col-sm-4 help-block">Hãy phân quyền những người được xem mẫu này</div>
                                            }
                                        </div>
                                        <div className='form-group has-feedback'>
                                            <label className="col-sm-5 control-label" style={{ width: '100%', textAlign: 'left' }}>Người thực hiện</label>
                                            <div className="col-sm-10" style={{ width: '100%' }}>
                                                <select defaultValue={newTemplate.responsible} className="form-control select2" multiple="multiple" ref="responsible" data-placeholder="Chọn người thực hiện" style={{ width: '100%' }}>
                                                    {member &&
                                                        member.map(x => {
                                                            return <option key={x._id} value={x._id}>{x.name}</option>
                                                        })}
                                                </select>
                                            </div>
                                        </div>
                                        <div className='form-group has-feedback'>
                                            <label className="col-sm-5 control-label" style={{ width: '100%', textAlign: 'left' }}>Người phê duyệt</label>
                                            <div className="col-sm-10" style={{ width: '100%' }}>
                                                <select defaultValue={newTemplate.accounatable} className="form-control select2" multiple="multiple" ref="accounatable" data-placeholder="Chọn người phê duyệt" style={{ width: '100%' }}>
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
                                                <select defaultValue={newTemplate.informed} className="form-control select2" multiple="multiple" ref="informed" data-placeholder="Chọn người quan sát" style={{ width: '100%' }}>
                                                    {member &&
                                                        member.map(x => {
                                                            return <option key={x._id} value={x._id}>{x.name}</option>
                                                        })}
                                                </select>
                                            </div>
                                        </div>
                                        <fieldset className="scheduler-border">
                                            <legend className="scheduler-border">Danh sách các hoạt động của công việc*</legend>
                                            <div className="control-group">
                                                <div className={'form-group has-feedback' + (addAction && !action.name ? ' has-error' : '')}>
                                                    <label className="col-sm-4 control-label" style={{ width: '100%', textAlign: 'left' }}>Tên hoạt động*</label>
                                                    <div className="col-sm-10" style={{ width: '100%' }}>
                                                        <input type="text" className="form-control" placeholder="Tên hoạt động" ref={input => this.nameAction = input} />
                                                    </div>
                                                    {addAction && !action.name &&
                                                        <div className=" col-sm-4 help-block">Hãy điền tên hoạt động</div>
                                                    }
                                                </div>
                                                <div className={'form-group has-feedback' + (addAction && !action.description ? ' has-error' : '')}>
                                                    <label className="col-sm-4 control-label" htmlFor="inputDescription3" style={{ width: '100%', textAlign: 'left' }}>Mô tả hoạt động*</label>
                                                    <div className="col-sm-10" style={{ width: '100%' }}>
                                                        <textarea type="text" className="form-control" id="inputDescription3" name="description" placeholder="Mô tả hoạt động" ref={input => this.desAction = input} />
                                                    </div>
                                                    {addAction && !action.description &&
                                                        <div className="col-sm-4 help-block">Hãy điền mô tả cho hoạt động</div>
                                                    }
                                                </div>
                                                <div className="form-group">
                                                    <label className="col-sm-2 control-label">
                                                        Bắt buộc &nbsp;
                                                        <input type="checkbox" className="flat-red" defaultChecked={action.mandatary} ref={input => this.mandataryAction = input} />
                                                    </label>
                                                </div>
                                                <div className="col-sm-8 col-sm-offset-7" style={{ marginBottom: '15px' }}>
                                                    {this.state.editAction ? <button className="btn btn-success" style={{ width: "25%" }} onClick={this.saveEditedAction}>Lưu</button> :
                                                        <button className="btn btn-success" style={{ width: "25%" }} onClick={this.onAddAction}>Thêm</button>}
                                                    <button className="btn btn-primary" style={{ width: "25%", marginLeft: "5%" }} onClick={this.handleCancelAction}>Xóa trắng</button>
                                                </div>
                                                <table className="table table-bordered">
                                                    <thead>
                                                        <tr>
                                                            <th style={{ width: '10%' }}>STT</th>
                                                            <th>Tên hoạt động</th>
                                                            <th>Mô tả</th>
                                                            <th>Bắt buộc</th>
                                                            <th>Hành động</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody id="actions">
                                                        {
                                                            (typeof listAction === 'undefined' || listAction.length === 0) ? <tr><td colSpan={5}><center>Chưa có dữ liệu</center></td></tr> :
                                                                listAction.map((item, index) =>
                                                                    <tr key={index + 1}>
                                                                        <td>{index + 1}</td>
                                                                        <td>{item.name}</td>
                                                                        <td>{item.description}</td>
                                                                        <td>{item.mandatary ? "Có" : "Không"}</td>
                                                                        <td>
                                                                            <a href="#abc" className="edit" title="Edit" data-toggle="tooltip" onClick={() => this.editAction(item, index)}><i className="material-icons"></i></a>
                                                                            <a href="#abc" className="delete" title="Delete" data-toggle="tooltip" onClick={() => this.deleteAction(index)}><i className="material-icons"></i></a>
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
                                            <label className="col-sm-4 control-label" htmlFor="inputDescription3" style={{ width: '100%', textAlign: 'left' }}>Mô tả công việc*</label>
                                            <div className="col-sm-10" style={{ width: '100%' }}>
                                                <textarea type="Description" className="form-control" id="inputDescription3" name="description" placeholder="Mô tả công việc" defaultValue={newTemplate.description} ref={input => this.description = input} />
                                            </div>
                                            {submitted && !newTemplate.description &&
                                                <div className="col-sm-4 help-block">Hãy điền mô tả công việc</div>
                                            }
                                        </div>
                                        <div className={'form-group has-feedback' + (submitted && !newTemplate.formula ? ' has-error' : '')}>
                                            <label className="col-sm-4 control-label" htmlFor="inputName3" style={{ width: '100%', textAlign: 'left' }}>Công thức tính điểm KPI công việc</label>
                                            <div className="col-sm-10" style={{ width: '100%' }}>
                                                <input type="text" className="form-control" id="inputName3" placeholder="100*(1-(TT1/TT2)-(TT3/TT4)-(D0/D)-(AD/A))" defaultValue={newTemplate.name} ref={input => this.formula = input} />
                                            </div>
                                            {submitted && !newTemplate.formula &&
                                                <div className=" col-sm-4 help-block">Hãy điền công thức tính điểm KPI công việc</div>
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
                                                <div className={'form-group has-feedback' + (addInfo && !information.name ? ' has-error' : '')}>
                                                    <label className="col-sm-4 control-label" style={{ width: '100%', textAlign: 'left' }}>Tên thông tin</label>
                                                    <div className="col-sm-10" style={{ width: '100%' }}>
                                                        <input type="text" className="form-control" placeholder="Tên thông tin" defaultValue={information.name} ref={input => this.nameInfo = input} />
                                                    </div>
                                                    {addInfo && !information.name &&
                                                        <div className=" col-sm-4 help-block">Hãy điền tên thông tn</div>
                                                    }
                                                </div>
                                                <div className={'form-group has-feedback' + (addInfo && !information.description ? ' has-error' : '')}>
                                                    <label className="col-sm-4 control-label" htmlFor="inputDescription3" style={{ width: '100%', textAlign: 'left' }}>Mô tả thông tin</label>
                                                    <div className="col-sm-10" style={{ width: '100%' }}>
                                                        <textarea type="text" className="form-control" id="inputDescription3" name="description" placeholder="Mô tả thông tin" defaultValue={information.description} ref={input => this.desInfo = input} />
                                                    </div>
                                                    {addInfo && !information.description &&
                                                        <div className="col-sm-4 help-block">Hãy điền mô tả cho thông tin</div>
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
                                                    {this.state.editInfo ? <button className="btn btn-success" style={{ width: "25%" }} onClick={this.saveEditedInformation}>Lưu</button> :
                                                        <button className="btn btn-success" style={{ width: "25%" }} onClick={this.onAddInfoField}>Thêm</button>}
                                                    <button className="btn btn-primary" style={{ width: "25%", marginLeft: "5%" }} onClick={this.handleCancelInformation}>Xóa trắng</button>
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
                                                    <tbody id="informations">
                                                        {
                                                            (typeof listInfo === 'undefined' || listInfo.length === 0) ? <tr><td colSpan={6}><center>Chưa có dữ liệu</center></td></tr> :
                                                                listInfo.map((item, index) =>
                                                                    <tr key={index}>
                                                                        <td>{index + 1}</td>
                                                                        <td>{item.name}</td>
                                                                        <td>{item.description}</td>
                                                                        <td>{item.type}</td>
                                                                        <td>{item.mandatary ? "Có" : "Không"}</td>
                                                                        <td>
                                                                            <a href="#abc" className="edit" title="Edit" onClick={() => this.editInformation(item, index)}><i className="material-icons"></i></a>
                                                                            <a href="#abc" className="delete" title="Delete" onClick={() => this.deleteInfo(index)}><i className="material-icons"></i></a>
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
                            <button className="btn btn-success" data-dismiss={this.state.submitted ? "modal" : ""} onClick={this.handleSubmit}>Lưu</button>
                            <button type="cancel" className="btn btn-primary" data-dismiss="modal" onClick={this.handleCancel}>Xóa trắng</button>
                        </div>
                        {/* Modal Footer */}
                    </div>
                </div>
            </div >
        );
    }
}

function mapState(state) {
    const { departments } = state;
    const adding = state.tasktemplates;
    return { adding, departments };
}

const actionCreators = {
    addNewTemplate: taskTemplateActions.addTaskTemplate,
    getDepartment: departmentActions.getDepartmentOfUser
};
const connectedModalAddTaskTemplate = connect(mapState, actionCreators)(ModalAddTaskTemplate);
export { connectedModalAddTaskTemplate as ModalAddTaskTemplate };