import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withTranslate } from 'react-redux-multilingual';

class DepartmentDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        const { translate } = this.props;
        return ( 
            <div className="modal fade" id={`modal-id-department-${this.props.idDepartment}`}>
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button type="button" className="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                            <h4 className="modal-title">{ translate('manageDepartment.info') }</h4>
                        </div>
                        <div className="modal-body">
                        <form style={{ marginBottom: '20px' }}>
                                    <div className="row">
                                        <div className="form-group col-sm-12">
                                            <label>{ translate('table.name')  }</label>
                                            <input type="text" className="form-control" name="name" value={ this.props.nameDepartment }/><br/>
                                        </div>
                                        <div className="form-group col-sm-12">
                                            <label>{ translate('manageDepartment.description') }</label>
                                            <input type="text" className="form-control" name="description" value={ this.props.descriptionDepartment }/><br/>
                                        </div>
                                    </div>
                                </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-danger pull-left" data-dismiss="modal"><i className="fa fa-close"></i> { translate('table.close') }</button>
                            <button type="button" className="btn btn-primary"><i className="fa fa-save"></i> { translate('table.save') }</button>
                        </div>
                    </div>
                </div>
            </div>
         );
    }
}
 
const mapStateToProps = state => {
    return state;
}

const mapDispatchToProps = (dispatch, props) => {
    return{
    }
}

export default connect( mapStateToProps, mapDispatchToProps )( withTranslate(DepartmentDetail) );