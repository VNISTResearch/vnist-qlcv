import React, { Component } from 'react';
import { connect } from 'react-redux';
import { get, create } from '../../../redux-actions/Admin/Departments.action';
import { withTranslate } from 'react-redux-multilingual';

class CreateDepartment extends Component {
    constructor(props) {
        super(props);
        this.state = { 
        }
    }

    render() { 
        const { translate, parent, inputChange, save } = this.props;
        return ( 
            <React.Fragment>
                <a className="btn btn-success" data-toggle="modal" href="#modal-id"><i className="fa fa-plus"/>{ translate('manageDepartment.create') }</a>
                <div className="modal fade" id="modal-id">
                    <div className="modal-dialog modal-department">
                        <div className="modal-content">
                            <div className="modal-header">
                            <h4 className="modal-title">{ translate('manageDepartment.create') }</h4>
                            </div>
                            <div className="modal-body">
                                <form style={{ marginBottom: '20px' }}>
                                    <div className="row">
                                        <div className="form-group col-sm-12">
                                            <label>{ translate('table.name')  }</label>
                                            <input type="text" className="form-control" name="name" onChange={ inputChange }/><br/>
                                        </div>
                                        <div className="form-group col-sm-12">
                                            <label>{ translate('manageDepartment.description') }</label>
                                            <textarea type="text" className="form-control" name="description" onChange={ inputChange }/><br/>
                                        </div>
                                        <div className="form-group col-sm-12">
                                            <label>{ translate('manageDepartment.dean') }</label><span><i> { ` * ${translate('manageDepartment.sub_dean')}` } </i></span>
                                            <input type="text" className="form-control" name="dean" onChange={ inputChange }/><br/>
                                        </div>
                                        <div className="form-group col-sm-12">
                                            <label>{ translate('manageDepartment.vicedean') }</label><span><i> { ` * ${translate('manageDepartment.sub_vicedean')}` } </i></span>
                                            <input type="text" className="form-control" name="vice_dean" onChange={ inputChange }/><br/>
                                        </div>
                                        <div className="form-group col-sm-12">
                                            <label>{ translate('manageDepartment.employee') }</label><span><i> { ` * ${translate('manageDepartment.sub_employee')}` } </i></span>
                                            <input type="text" className="form-control" name="employee" onChange={ inputChange }/><br/>
                                        </div>
                                        <div className="form-group col-sm-12">
                                            <label>{ translate('manageDepartment.departmentParent') }</label>
                                            <select 
                                                className="form-control" 
                                                style={{width: '100%'}} 
                                                name="parent" 
                                                onChange={inputChange}>
                                                    <option>{ translate('manageDepartment.selectDepartment') }</option>
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
                            <button type="button" className="btn btn-danger pull-left" data-dismiss="modal"><i className="fa fa-close"></i> { translate('table.close') }</button>
                            <button type="button" className="btn btn-primary" onClick={ save } data-dismiss="modal"><i className="fa fa-save"></i> { translate('table.save') }</button>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
         );
    }
}
 
const mapStateToProps = state => {
    return state;
}

const mapDispatchToProps = (dispatch, props) => {
    return{
        get: () => {
            dispatch( get() );
        },
        create: ( department ) => {
            dispatch( create(department) );
        }
    }
}

export default connect( mapStateToProps, mapDispatchToProps )( withTranslate(CreateDepartment) );