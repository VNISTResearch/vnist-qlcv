import React, { Component } from 'react';
import {connect} from 'react-redux';
import { withTranslate } from 'react-redux-multilingual';
import { get } from '../../../redux-actions/Admin/Roles.action';

class RoleDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    componentDidMount(){
        this.props.get();
        let script = document.createElement('script');
        script.src = '/main/js/CoCauToChuc.js';
        script.async = true;
        script.defer = true;
        document.body.appendChild(script);
    }

    render() { 
        const { 
            id, name, abstract, roles , usersWithRole, listUser
        } = this.props;

        return ( 
            <React.Fragment>
                <div className="modal fade" id={id}>
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                            <button type="button" className="close" data-dismiss="modal" aria-hidden="true">×</button>
                                <h4 className="modal-title">Role info : { id }</h4>
                            </div>
                            <div className="modal-body">
                                <React.Fragment>
                                    <div className="form-group">
                                        <label>Role name</label>
                                        <input className="form-control" defaultValue={ name }></input>
                                    </div>
                                    {
                                        roles.list !== undefined &&
                                        <div className="form-group">
                                            <label>Ke thua quyen</label>
                                            <select 
                                                name="abstract" 
                                                className="form-control select2" 
                                                multiple="multiple" 
                                                style={{ width: '100%' }} 
                                                defaultValue={ abstract.map( role => role._id)}
                                                ref="abstract"
                                            >
                                                {   
                                                    roles.list.map( role => <option key={role.id_role._id} value={role.id_role._id}>{role.id_role.name}</option>)
                                                } 
                                            </select>
                                        </div>
                                    }
                                    <div className="form-group">
                                        <label>Những người có quyền của { name }</label>
                                        <select 
                                            name="users"
                                            className="form-control select2" 
                                            multiple="multiple" 
                                            style={{ width: '100%' }} 
                                            defaultValue={ usersWithRole.map( user => user._id)}
                                            ref="users"
                                        >
                                            {   
                                                listUser.map( user => <option key={user._id} value={user._id}>{ `${user.email} - ${user.name}` }</option>)
                                            }
                                        </select>
                                    </div>
                                    
                                </React.Fragment>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                                <button type="button" className="btn btn-primary">Save</button>
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
        get: () => {
            dispatch( get() );
        }
    }
}

export default connect(mapState, dispatchStateToProps)(withTranslate( RoleDetail ));