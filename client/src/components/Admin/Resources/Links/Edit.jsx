import React, { Component } from 'react';
import { withTranslate } from 'react-redux-multilingual';
import { getById, edit } from '../../../../redux-actions/Admin/Links.action';
import { getSuperRole } from '../../../../redux-actions/Admin/Roles.action';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

class Edit extends Component {
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
        this.props.getById(this.props.match.params.id);
        this.props.getSuperRole();
    }

    render() { 
        const { roles, links, translate } = this.props;
        // console.log("link item infomation : ", links.item);
        console.log(this.state);
        return ( 
            <div className="content-wrapper">
                <section className="content-header">
                    <h1>
                        { translate('manageResource.infoLink') }
                        <small><i className="fa fa-file"></i></small>
                    </h1>
                    <ol className="breadcrumb">
                        <li><a href="/admin"><i className="fa fa-dashboard" /> Admin</a></li>
                        <li className="active">{ translate('manageResource.infoLink') }</li>
                    </ol>
                </section>
                {/* Main content */}
                <section className="content">
                <div className="panel panel-primary" style={{width: '70%', marginLeft: '15%', marginTop:'70px'}}>
                    <div className="panel-heading">
                    </div>
                    <div className="panel-body">
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
                                            defaultValue={ links.item.role._id }
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
                                    <div className="form-group">
                                        <Link className="btn btn-danger pull-left" to="/admin/resource">{ translate('table.back') }</Link>
                                        <button 
                                            onClick={(e) => this.save(e,this.props.match.params.id)} 
                                            className="btn btn-primary pull-right">
                                                { translate('table.save') }
                                        </button>
                                    </div>
                                </div>
                            </form> : null
                        } 
                    </div>
                    <div className="panel-footer">
                    </div>
                </div>
                </section>
            </div>
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
 
export default connect(mapState, getState) (withTranslate(Edit));