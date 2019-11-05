import React, { Component } from 'react';
import {connect} from 'react-redux';
import { withTranslate } from 'react-redux-multilingual';
import { getSuperRole } from '../../../redux-actions/Admin/Roles.action';
import { addRoleToLink, getById } from '../../../redux-actions/Admin/Links.action';

class EditLink extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            role: null
        }
        this.addRole = this.addRole.bind(this);
        this.selectHandle = this.selectHandle.bind(this);
    }

    componentDidMount(){
        this.props.getById(this.props.match.params.id);
        this.props.getSuperRole();
    }

    addRole(e){
        e.preventDefault();
        const url = this.props.links.item.id;
        const role = this.state.role;
        this.props.addRoleToLink(url, role);
    }

    selectHandle(e){
        e.preventDefault();
        this.setState({role: e.target.value});
    }

    render() { 
        const { roles, links } = this.props;
        console.log(this.state);
        return ( 
            <div className="content-wrapper">
                <section className="content-header">
                    <h1>
                        Edit Link
                        <small><i className="fa fa-link"></i></small>
                    </h1>
                    <ol className="breadcrumb">
                        <li><a href="/admin"><i className="fa fa-dashboard" /> Admin</a></li>
                        <li className="active">Edit link</li>
                    </ol>
                </section>
                {/* Main content */}
                <section className="content">
                    <div className="box box-primary">
                        <div className="row">
                            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6" style={{marginLeft: '25%'}}>
                                <form onSubmit={this.addRole}>
                                    <h3>Gán quyền truy cập cho link</h3>
                                    <div className="box-body">
                                        {
                                            typeof(links.item) !== 'undefined' && typeof(roles.super) !== 'undefined' ?
                                            <React.Fragment>
                                                <div className="form-group">
                                                    <label>ID</label>
                                                    <input 
                                                        className="form-control"
                                                        type="text"  
                                                        value={links.item.id}  
                                                        disabled
                                                    />
                                                </div>
                                                <div className="form-group">
                                                    <label>URL </label>
                                                    <input 
                                                        className="form-control"
                                                        type="text"  
                                                        value={links.item.url} 
                                                        disabled
                                                    />
                                                </div>
                                                <div className="form-group">
                                                    <label>Phân quyền</label>
                                                    <select 
                                                        className="form-control select2" 
                                                        style={{width: '100%'}} 
                                                        name="role"
                                                        defaultValue={links.item.role._id}
                                                        onChange={this.selectHandle}>
                                                        {
                                                            roles.super.map( role => 
                                                                <option 
                                                                    key={role._id} value={role._id}
                                                                >
                                                                    { role.name}
                                                                </option>)
                                                        }
                                                    </select>
                                                </div>
                                            </React.Fragment> : null
                                        }

                                    </div>
                                    <div className="box-footer">
                                        <button className="btn btn-primary"><i className="fa fa-save"></i></button>
                                    </div>
                                </form>
                            </div>
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
        getSuperRole: () => {
            dispatch(getSuperRole());
        },
        getById: (id) => {
            dispatch(getById(id));
        },
        addRoleToLink: (url, role) => {
            dispatch(addRoleToLink(url, role));
        }
    }
}
 
export default connect(mapState, getState) (withTranslate(EditLink));