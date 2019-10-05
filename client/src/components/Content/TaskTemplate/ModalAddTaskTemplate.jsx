import React, { Component } from 'react';
import { connect } from 'react-redux';
import { taskTemplateActions, jobTitleActions} from '../../../redux-actions/CombineActions';
// import './modal.css';

class ModalAddTaskTemplate extends Component {
    constructor(props) {
        super(props);

        this.state = {
            newTemplate: {
                name: '',
                read: [],
                description: '',
                creator: ''
            },
            submitted: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentWillMount(){
        this.props.getJobTitle();
    }

    handleChange(event) {
        const { name, value } = event.target;
        const { newTemplate } = this.state;
        this.setState({
            newTemplate: {
                ...newTemplate,
                [name]: value
            }
        });
        console.log(this.state.newTemplate);
    }

    handleSubmit(event) {
        event.preventDefault();

        this.setState({ submitted: true });
        const { newTemplate } = this.state;
        if (newTemplate.name && newTemplate.read && newTemplate.description) {
            this.props.addNewTemplate(newTemplate);
        }
    }
    render() {
        const { newTemplate, submitted } = this.state;
        const { jobtitles } = this.props;
        console.log(jobtitles);
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
                            <form className="form-horizontal" onSubmit={this.handleSubmit}>
                                <div className={'form-group has-feedback' + (submitted && !newTemplate.name ? ' has-error' : '')}>
                                    <label className="col-sm-4 control-label" htmlFor="inputName3" style={{ width: '100%', textAlign: 'left' }}>Tên mẫu*</label>
                                    <div className="col-sm-10" style={{ width: '100%' }}>
                                        <input type="Name" className="form-control" id="inputName3" placeholder="Name" value={newTemplate.name} onChange={this.handleChange} name="name" />
                                    </div>
                                    {submitted && !newTemplate.name &&
                                        <div className="help-block">Template name is required</div>
                                    }
                                </div>
                                <div className={'form-group has-feedback' + (submitted && !newTemplate.read ? ' has-error' : '')}>
                                    <label className="col-sm-5 control-label" style={{ width: '100%', textAlign: 'left' }}>Những người được phép xem*</label>
                                    <div className="col-sm-10" style={{ width: '100%' }}>
                                        <select defaultValue={newTemplate.read} className="form-control select2" multiple="multiple" name="read" onChange={this.handleChange} data-placeholder="Select a State" style={{ width: '100%' }}>
                                            {/* { jobtitles.items.content.map(x => {
                                                return <option key={x._id} value={x._id}>{x.name}</option>
                                            })} */}
                                            {/* <option value="Alabama">Alabama</option>
                                            <option value="Alaska">Alaska</option>
                                            <option value="California">California</option>
                                            <option value="Delaware">Delaware</option>
                                            <option value="Tennessee">Tennessee</option>
                                            <option value="Texas">Texas</option>
                                            <option value="Washington">Washington</option> */}
                                        </select>
                                    </div>
                                    {submitted && !newTemplate.read &&
                                        <div className="help-block">Template name is required</div>
                                    }
                                </div>
                                <div className={'form-group has-feedback' + (submitted && !newTemplate.description ? ' has-error' : '')}>
                                    <label className="col-sm-4 control-label" htmlFor="inputDescription3" style={{ width: '100%', textAlign: 'left' }}>Description</label>
                                    <div className="col-sm-10" style={{ width: '100%' }}>
                                        <textarea type="Description" className="form-control" id="inputDescription3" name="description" placeholder="Description" value={newTemplate.description} onChange={this.handleChange} />
                                    </div>
                                    {submitted && !newTemplate.description &&
                                        <div className="help-block">Template des is required</div>
                                    }
                                </div>
                                {/* <div className="form-group">
                                    <div className="col-sm-offset-2 col-sm-10">
                                        <button type="submit" className="btn btn-default">Sign in</button>
                                    </div>
                                </div> */}
                                <div className="modal-footer">
                                    <button type="cancel" className="btn btn-default" data-dismiss="modal">Cancel</button>
                                    <button type="submit" className="btn btn-primary">Save</button>
                                </div>
                            </form>
                        </div>
                        {/* Modal Footer */}
                    </div>
                </div>
            </div>
        );
    }
}

function mapState(state) {
    const { jobtitles } = state;
    const adding = state.tasktemplates;
    return {adding, jobtitles};
}

const actionCreators = {
    addNewTemplate: taskTemplateActions.addNewTemplate,
    getJobTitle: jobTitleActions.getAll
};
const connectedModalAddTaskTemplate = connect(mapState, actionCreators)(ModalAddTaskTemplate);
export { connectedModalAddTaskTemplate as ModalAddTaskTemplate };