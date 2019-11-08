import React, { Component } from 'react';
import {connect} from 'react-redux';
import { withTranslate } from 'react-redux-multilingual';
import { get, create } from '../../../../redux-actions/Admin/Components.action';
import { getSuperRole } from '../../../../redux-actions/Admin/Roles.action';

class Components extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            name: null,
            description: null,
            role: null
         }
        this.inputChange = this.inputChange.bind(this);
        this.createComponent = this.createComponent.bind(this);
    }

    inputChange = (e) => {
        const target = e.target;
        const name = target.name;
        const value = target.value;
        this.setState({
            [name]: value
        });
    }

    createComponent(e){
        e.preventDefault();
        const { name, description, role } = this.state;
        this.props.create(name, description, role);
    }

    componentDidMount(){
        this.props.get();
        this.props.getSuperRole();
    }

    render() { 
        const { components, roles, translate } = this.props;
        return ( 
            <React.Fragment>
                <a className="btn btn-primary" data-toggle="modal" href="#modal-create-component">{ translate('manageResource.createComponent') }</a>
                <div className="modal fade" id="modal-create-component">
                    <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                        <h4 className="modal-title">{ translate('manageResource.createComponent') }</h4>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="box-body">
                                    <div className="form-group">
                                        <label>{ translate('table.name') }</label>
                                        <input name="name" type="text" className="form-control" onChange={this.inputChange}/>
                                    </div>
                                    <div className="form-group">
                                        <label>{ translate('table.description') }</label>
                                        <textarea name="description" className="form-control" onChange={this.inputChange}/>
                                    </div>
                                    <div className="form-group">
                                    <label>{ translate('manageResource.roleTo') }</label>
                                        <select 
                                            className="form-control select2" 
                                            style={{width: '100%'}} 
                                            name="role" 
                                            onChange={this.inputChange}>
                                                <option>{ translate('manageResource.selectRole') }</option>
                                            {
                                                roles.super !== undefined && 
                                                roles.super.map( role => 
                                                    <option key={role._id} value={role._id}>
                                                        { role.name}
                                                    </option>)
                                            }
                                        </select>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                        <button type="button" className="btn btn-default" data-dismiss="modal">{ translate('table.close') }</button>
                        <button type="button" className="btn btn-primary" onClick={this.createComponent} data-dismiss="modal">{ translate('table.save') }</button>
                        </div>
                    </div>
                    </div>
                </div>
                
                {
                    components.list !== undefined &&
                    <table 
                        className="table table-bordered" style={{marginTop: '20px'}}>
                        <thead>
                            <tr>
                                <th>{ translate('table.name') }</th>
                                <th>{ translate('table.description') }</th>
                                <th>{ translate('table.action') }</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                components.list.map( component => 
                                    <tr key={ component.id }>
                                        <td>{ component.name }</td>
                                        <td>{ component.description }</td>
                                        <td style={{textAlign: 'center'}}>
                                            <i className="fa fa-pencil-square"></i>
                                        </td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                }
            </React.Fragment>
         );
    }
}
 
const mapState = state => state;

const getState = (dispatch) => {
    return {
        get: () => {
            dispatch(get());
        },
        getSuperRole: () => {
            dispatch(getSuperRole());
        },
        create: (name, description, role) => {
            dispatch(create(name, description, role));
        },
    }
}
 
export default connect(mapState, getState) (withTranslate(Components));