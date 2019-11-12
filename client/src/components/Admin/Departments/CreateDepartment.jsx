import React, { Component } from 'react';

class CreateDepartment extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        const { 
            create, 
            name, 
            inputChange, 
            saveDepartment, 
            description, 
            dean, 
            vicedean, 
            employee, 
            close, 
            save, 
            departmentParent, 
            parent,
            sub_dean,
            sub_vicedean,
            sub_employee 
        } = this.props;
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
                                        <div className="form-group col-sm-12">
                                            <label>{ dean }</label><span><i> { sub_dean } </i></span>
                                            <input type="text" className="form-control" name="dean" onChange={ inputChange }/><br/>
                                        </div>
                                        <div className="form-group col-sm-12">
                                            <label>{ vicedean }</label><span><i> {sub_vicedean } </i></span>
                                            <input type="text" className="form-control" name="vice_dean" onChange={ inputChange }/><br/>
                                        </div>
                                        <div className="form-group col-sm-12">
                                            <label>{ employee }</label><span><i> { sub_employee } </i></span>
                                            <input type="text" className="form-control" name="employee" onChange={ inputChange }/><br/>
                                        </div>
                                        <div className="form-group col-sm-12">
                                            <label>{ departmentParent }</label>
                                            <select 
                                                className="form-control" 
                                                style={{width: '100%'}} 
                                                name="parent" 
                                                onChange={inputChange}>
                                                {   
                                                    parent !== undefined &&
                                                    parent.map(department => 
                                                        <option key={department._id} value={department._id}>{department.name}</option>    
                                                    )
                                                }
                                            </select>
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