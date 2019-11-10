import React, { Component } from 'react';

class CreateDepartment extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        const { create, name, inputChange, saveDepartment, description, dean, vicedean, employee, close, save } = this.props;
        return ( 
            <React.Fragment>
                <a className="btn btn-success" data-toggle="modal" href="#modal-id"><i className="fa fa-plus"/>{ create }</a>
                <div className="modal fade" id="modal-id">
                    <div className="modal-dialog modal-department">
                        <div className="modal-content">
                            <div className="modal-header">
                            <h4 className="modal-title">{ create }</h4>
                            </div>
                            <div className="modal-body">
                                <form style={{ marginBottom: '20px' }}>
                                    <div className="row">
                                        <div className="form-group col-sm-12">
                                            <label>{ name }</label>
                                            <input type="text" className="form-control" name="name" onChange={ inputChange }/><br/>
                                        </div>
                                        <div className="form-group col-sm-12">
                                            <label>{ description }</label>
                                            <textarea type="text" className="form-control" name="description" onChange={ inputChange }/><br/>
                                        </div>
                                        <div className="form-group col-sm-6">
                                            <label>{ dean }</label>
                                            <input type="text" className="form-control" name="dean" onChange={ inputChange }/><br/>
                                        </div>
                                        <div className="form-group col-sm-6">
                                            <label>{ vicedean }</label>
                                            <input type="text" className="form-control" name="vice_dean" onChange={ inputChange }/><br/>
                                        </div>
                                        <div className="form-group col-sm-6">
                                            <label>{ employee }</label>
                                            <input type="text" className="form-control" name="employee" onChange={ inputChange }/><br/>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <div className="modal-footer">
                            <button type="button" className="btn btn-danger pull-left" data-dismiss="modal"><i className="fa fa-close"></i> { close }</button>
                            <button type="button" className="btn btn-primary" onClick={ saveDepartment } data-dismiss="modal"><i className="fa fa-save"></i> { save }</button>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
         );
    }
}
 
export default CreateDepartment;