import React, { Component } from 'react';
import {connect} from 'react-redux';
import { withTranslate } from 'react-redux-multilingual';
import { getById } from '../../../redux-actions/Admin/Roles.action';

class RoleDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    componentDidMount(){
        this.props.getById(this.props.id);
    }

    render() { 
        const { 
            roles,
            id, 
            roleInfoTitle, 
            name, 
            labelRoleName, 
            labelAbstract, 
            close,
            save
        } = this.props;
        return ( 
            <React.Fragment>
                <div className="modal fade" id={id}>
                    <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                        <button type="button" className="close" data-dismiss="modal" aria-hidden="true">×</button>
                        <h4 className="modal-title">{ roleInfoTitle }</h4>
                        </div>
                        <div className="modal-body">
                            <div className="form-group">
                                <label>{labelRoleName}</label>
                                <input className="form-control" defaultValue={name}></input>
                            </div>
                            <div className="form-group">
                                <label>{labelAbstract}</label>
                                {
                                    ( roles.item !== undefined && roles.item.abstract.length > 0 ) ?
                                    <ul>
                                        { roles.item.abstract.map( role => 
                                            <li key={`abstractRole${role._id}`}><span className="badge">{ role.name }</span></li>
                                        )}
                                    </ul> : <p>No data</p>
                                }
                                
                            </div>
                        </div>
                        <div className="modal-footer">
                        <button type="button" className="btn btn-default" data-dismiss="modal">{ close }</button>
                        <button type="button" className="btn btn-primary">{ save }</button>
                        </div>
                    </div>
                    </div>
                </div>
            </React.Fragment>
         );
    }
}
 
const mapState = state => state;

const dispatchStateToProps = (dispatch, props) => {
    return {
        getById: (id) => {
            dispatch( getById( id ));
        }
    }
}

export default connect(mapState, dispatchStateToProps)(withTranslate( RoleDetail ));