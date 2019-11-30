import React, { Component } from 'react';
import { withTranslate } from 'react-redux-multilingual';
import { getById, edit } from '../../../../redux-actions/Admin/Links.action';
import { getSuperRole } from '../../../../redux-actions/Admin/Roles.action';
import {connect} from 'react-redux';

class LinkDetail extends Component {
    
    constructor(props) {
        super(props);
        this.state = { 
            role: null
         }
        this.inputChange = this.inputChange.bind(this);
        this.save = this.save.bind(this);
    }

    inputChange = (e) => {
        const target = e.target;
        const name = target.name;
        const value = target.value;
        this.setState({
            [name]: value
        });
    }

    save = (e, id) => {
        e.preventDefault();
        console.log("Chinh cua quyen cho link")
        const {role} = this.state;
        const {url, description } = this.props.links.item;
        if(role !== null){
            this.props.edit(id, url, description, role);
        }
    }

    componentDidMount(){
        this.props.getById(this.props.linkId);
        this.props.getSuperRole();
    }

    render() { 
        const { roles, links, translate, linkId } = this.props;
        return ( 
            <React.Fragment>
    
                <div className="modal fade" id={ `modal-id-${ linkId }` }>
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                            <button type="button" className="close" data-dismiss="modal" aria-hidden="true">×</button>
                            <h4 className="modal-title">LINK{ `modal-id-${ linkId }` }</h4>
                            </div>
                            <div className="modal-body">
                            {
                                (links.item !== undefined && roles.super !== undefined) ? 
                                <form>
                                    <div className="box-body">
                                        <div className="form-group">
                                            <label>{ translate('manageResource.url') }</label>
                                            <input name="url" type="text" className="form-control" defaultValue={links.item.url} disabled />
                                        </div>
                                        <div className="form-group">
                                            <label>{ translate('manageResource.urlDescription') }</label>
                                            <input name="description" type="text" className="form-control" defaultValue={links.item.description} disabled />
                                        </div>
                                        <div className="form-group">
                                            <label>{ translate('manageResource.roleTo') }</label>
                                            <select 
                                                className="form-control" 
                                                style={{width: '100%'}} 
                                                name="role" 
                                                defaultValue={ links.item.role !== null && links.item.role._id }
                                                onChange={this.inputChange}>
                                                {
                                                    
                                                    roles.super.map( role => 
                                                        <option key={role._id} value={role._id}>
                                                            { role.name }
                                                        </option>
                                                    )
                                                }
                                            </select>
                                        </div>
                                    </div>
                                </form> : null
                            }
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-default" data-dismiss="modal">{ translate('table.close') }</button>
                                <button type="button" className="btn btn-primary" onClick={(e) => this.save(e,this.props.id)} >{ translate('table.save') }</button>
                            </div>
                        </div>
                    </div>
                </div>

            </React.Fragment>
         );
    }
}
 
const mapState = state => state;
const getState = (dispatch, props) => {
    return {
        getById: (id) => {
            dispatch(getById(id));
        },
        getSuperRole: () => {
            dispatch(getSuperRole());
        },
        edit: (id, url, description, role) => {
            dispatch(edit(id, url, description, role));
        }
    }
}
 
export default connect(mapState, getState) (withTranslate(LinkDetail));