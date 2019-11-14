import React, { Component } from 'react';
import {connect} from 'react-redux';
import { withTranslate } from 'react-redux-multilingual';
import { get, create, destroy } from '../../../redux-actions/Admin/Roles.action';
import { get as getUser} from '../../../redux-actions/Admin/Users.action';
import RoleDetail from './RoleDetail';
import Swal from 'sweetalert2';

class RolesManager extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            name: ""
        }
        this.inputChange = this.inputChange.bind(this);
        this.save = this.save.bind(this);
        this.alert = this.alert.bind(this);
    }

    inputChange = (e) => {
        const target = e.target;
        const name = target.name;
        const value = target.value;
        this.setState({
            [name]: value
        });
    }

    alert(id){
        Swal.fire({
            title: `Delete role`,
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Delete'
        }).then((res) => {
            if(res.value){
                this.props.destroy(id)
            }
        });
    }

    save(e){
        e.preventDefault();
        let select = this.refs.abstract;
        let abstract = [].filter.call(select.options, o => o.selected).map(o => o.value);

        const { name } = this.state;
        this.props.create(name, abstract);
    }

    componentDidMount(){
        this.props.get();
        this.props.getUser();
        let script = document.createElement('script');
        script.src = '/main/js/CoCauToChuc.js';
        script.async = true;
        script.defer = true;
        document.body.appendChild(script);
    }

    render() { 
        const {translate, roles , aUsers} = this.props;
        console.log("rolemana:", roles);
        return ( 
            <React.Fragment>
                <a className="btn btn-primary" data-toggle="modal" href="#modal-add-role">{ translate('manageRole.add') }</a>
                <div className="modal fade" id="modal-add-role">
                    <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                        <h4 className="modal-title">{ translate('manageRole.create') }</h4>
                        </div>
                        <div className="modal-body">
                        <form>
                            <div className="form-group">
                                <label>{ translate('manageRole.roleName') }</label>
                                <input className="form-control" name="name" onChange={this.inputChange} type="text"/>
                            </div>
                            <div className="form-group">
                                <label>{ translate('manageRole.abstract') }</label>
                                <select 
                                    name="abstract" 
                                    className="form-control select2" 
                                    multiple="multiple" 
                                    style={{ width: '100%' }} 
                                    ref="abstract"
                                >
                                    {
                                        roles.list !== undefined ?
                                        (
                                            roles.list.map( role => 
                                                    <option key={role.id_role._id} value={role.id_role._id}>{role.id_role.name}</option>
                                                )
                                        ) : (
                                            null
                                        )
                                    }
                                </select>
                            </div>
                        </form>
                        </div>
                        <div className="modal-footer">
                        <button type="button" className="btn btn-default" data-dismiss="modal">{ translate('table.close') }</button>
                        <button type="button" className="btn btn-primary" onClick={this.save} data-dismiss="modal">{ translate('table.save') }</button>
                        </div>
                    </div>
                    </div>
                </div>
                
                <table className="table table-bordered table-hover" style={{marginTop: '20px'}}>
                    <thead>
                        <tr>
                            <th>{ translate('manageRole.roleName') }</th>
                            <th>{ translate('table.action') }</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            roles.list !== undefined && aUsers.list !== undefined &&
                            roles.list.map( role => 
                                <tr key={ role.id_role._id }>
                                    <td> { role.id_role.name } </td>
                                    <td>
                                        <a className="btn btn-primary" data-toggle="modal" href={`#${role.id_role._id}`}><i className="fa fa-info"></i></a>
                                        <button className="btn btn-sm btn-danger" onClick={() =>this.alert(role.id_role._id)}><i className="fa fa-trash"></i></button>
                                        <RoleDetail 
                                            id={ role.id_role._id } 
                                            name={ role.id_role.name }
                                            abstract={ role.id_role.abstract }
                                            roles={ roles.list }
                                            usersWithRole={ role.id_user }
                                            listUser={ aUsers.list }
                                        />
                                    </td>
                                </tr>       
                            )
                        }
                    </tbody>
                </table>
            </React.Fragment>   
         );
    }
}
 
const mapState = state => state;

const action = dispatch => {
    return {
        get: () => {
            dispatch(get())
        },
        create: (name, abstract) => {
            dispatch(create(name, abstract))
        },
        destroy: (id) => {
            dispatch(destroy(id))
        },
        getUser: () => {
            dispatch(getUser())
        },
    }
}
 
export default connect(mapState, action) (withTranslate(RolesManager));