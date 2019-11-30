import React, { Component } from 'react';
import { connect } from 'react-redux';
import { get, create, destroy } from '../../../redux-actions/Admin/Users.action';
import { withTranslate } from 'react-redux-multilingual';
import Swal from 'sweetalert2';
import ReactLoading from 'react-loading';
import UserEditModal from './UserEditModal';
import { usersService } from '../../../service/Admin/Users.service';

class Users extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            name: null,
            email: null
         }
        this.inputChange = this.inputChange.bind(this);
        this.save = this.save.bind(this);
        this.addUserSuccess = this.addUserSuccess.bind(this);
    }

    componentDidMount(){
        this.props.getUser();
    }

    inputChange = (e) => {
        const target = e.target;
        const name = target.name;
        const value = target.value;
        this.setState({
            [name]: value
        });
    }

    alert(id, title, email){
        Swal.fire({
            title: `${title} "${email}"`,
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

    save = (e) => {
        e.preventDefault();
        var {name , email } = this.state;
        this.props.create({
            name,
            email
        });
    }

    addUserSuccess(content){
        Swal.fire({
            type: 'success',
            title: content,
            showConfirmButton: false,
            timer: 2200
        });
    }

    render() { 
        const { aUsers, translate } = this.props;
        return ( 
            <div className="content-wrapper">
                {/* Content Header (Page header) */}
                <section className="content-header">
                    <h1>
                        { translate('manageUser.name') }
                        <small><i className="fa fa-users"></i></small>
                    </h1>
                    <ol className="breadcrumb">
                        <li><a href="/admin"><i className="fa fa-dashboard" /> Admin</a></li>
                        <li className="active">{ translate('manageUser.name') }</li>
                    </ol>
                </section>
                {
                    ( aUsers.isLoading !== undefined && aUsers.isLoading ) ? 
                    <section className="content">
                        <div style={{ marginLeft: '45%', marginTop: '12%'}}>
                            <ReactLoading type={"spinningBubbles"} color={"#605CA8"} height={'auto'} width={'10%'} />
                        </div>
                    </section> :
                    <section className="content">
                        <a className="btn btn-success" data-toggle="modal" href='#modal-id'><i className="fa fa-plus"/>{ translate('manageUser.create') }</a>
                        <div className="modal fade" id="modal-id">
                            <div className="modal-dialog">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <button type="button" className="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                                        <h4 className="modal-title">{ translate('manageUser.name') }</h4>
                                    </div>
                                    <div className="modal-body">
                                        <form style={{ marginBottom: '20px' }} >
                                            <div className="form-group">
                                                <label>{ translate('table.name') }</label>
                                                <input type="text" className="form-control" name="name" onChange={ this.inputChange }/>
                                            </div>
                                            <div className="form-group">
                                                <label>{ translate('table.email') }</label>
                                                <input type="email" className="form-control" name="email" onChange={ this.inputChange }/>
                                            </div>
                                        </form>
                                    </div>
                                    <div className="modal-footer">
                                        <button className="btn btn-danger" data-dismiss="modal"><i className="fa fa-close"></i> { translate('table.close') }</button>
                                        <button className="btn btn-primary" onClick={ this.save } data-dismiss="modal"><i className="fa fa-save"></i> { translate('table.save') }</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="box" style={{marginTop: '20px'}}>
                            <div className="box-header">
                                <h3 className="box-title">{ translate('manageUser.name') }</h3>
                            </div>
                            {/* /.box-header */}
                            <div className="box-body">
                                {
                                    aUsers.success !== null && aUsers.success !== undefined && this.createUserSuccess(aUsers.success )
                                }
                                {
                                    typeof(aUsers.list) !== 'undefined' ?
                                    (
                                        <table className="table table-bordered table-hover">
                                            <thead>
                                                <tr>
                                                    <th>{ translate('table.name') }</th>
                                                    <th>{ translate('table.email') }</th>
                                                    <th>{ translate('table.status') }</th>
                                                    <th style={{ width: '120px' }}>{ translate('table.action') }</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {
                                                    aUsers.list.map( user => (
                                                        <tr 
                                                            key={ user._id }
                                                            style={{ backgroundColor: user.active ? "white" : "#E2DFE7" }}
                                                        >
                                                            <td>{ user.name }</td>
                                                            <td>{ user.email }</td>
                                                            <td>{ user.active ? <p><i className="fa fa-circle text-success" /> Enable</p> : <p><i className="fa fa-circle text-danger" /> Disable</p> }</td>
                                                            <td>
                                                                <a className="btn btn-sm btn-primary" data-toggle="modal" href={ `#edit-user-modal-${user._id}` }><i className="fa fa-edit"></i></a>{' '}
                                                                <button className="btn btn-sm btn-danger" onClick={() => this.alert(user._id, translate('manageUser.delete'), user.email)}><i className="fa fa-trash"></i></button>
                                                                <UserEditModal 
                                                                    userEditID={ user._id } 
                                                                    email={ user.email }
                                                                    username={ user.name }
                                                                    active={ user.active }
                                                                />
                                                            </td>
                                                        </tr>
                                                    ))
                                                }
                                            </tbody>
                                        </table>
                                    ) : null
                                }
                            </div>
                        </div>
                    </section>
                }
            </div>
         );
    }
}
 
const mapStateToProps = state => {
    return state;
}

const mapDispatchToProps = (dispatch, props) => {
    return{
        getUser: () => {
            dispatch(get()); 
        },
        create: (user) => {
            dispatch(create(user));
        },
        destroy: (id) => {
            dispatch(destroy(id));
        }
    }
}

export default connect( mapStateToProps, mapDispatchToProps )( withTranslate(Users) );