import React, { Component } from 'react';
import {connect} from 'react-redux';
import { getAdmin, addAdmin } from '../../../redux-actions/Admin/Roles.action';
import { withTranslate } from 'react-redux-multilingual';

class AdminManager extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            email: null
        }
        this.inputChange = this.inputChange.bind(this);
        this.save = this.save.bind(this);
    }

    componentDidMount(){
        this.props.getAdmin();
    }

    inputChange = (e) => {
        const target = e.target;
        const name = target.name;
        const value = target.value;
        this.setState({
            [name]: value
        });
    }

    save = (e) => {
        e.preventDefault();
        var {email} = this.state;
        this.props.add(email);
    }
    
    render() { 
        const {roles, translate} = this.props;
        console.log("Admins: ", roles);
        return ( 
            <React.Fragment>
                <a className="btn btn-primary" data-toggle="modal" href="#modal-id">{ translate('manageRole.add') }</a>
                <div className="modal fade" id="modal-id">
                    <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                        <h4 className="modal-title">{ translate('manageRole.name')}</h4>
                        </div>
                        <div className="modal-body">
                        <form>
                            <label>{ translate('table.email') }</label>
                            <input 
                                className="form-control"
                                name="email"
                                onChange={this.inputChange}
                                type="email"
                            >
                            </input>
                        </form>
                        </div>
                        <div className="modal-footer">
                        <button type="button" className="btn btn-danger pull-left" data-dismiss="modal"><i className="fa fa-close"></i>{ translate('table.close') }</button>
                        <button type="button" className="btn btn-primary" onClick={this.save} data-dismiss="modal"><i className="fa fa-user-plus"></i>{ translate('table.save') }</button>
                        </div>
                    </div>
                    </div>
                </div>
                
                {
                    typeof(roles.admins) !== 'undefined' &&
                    <table className="table table-bordered table-hover" style={{marginTop: '20px'}}>
                        <thead>
                            <tr>
                                <th>{ translate('table.name') }</th>
                                <th>{ translate('table.email') }</th>
                                <th>{ translate('table.action') }</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                roles.admins.map( admin => 
                                    <tr key={admin._id}>
                                        <td>{admin.name}</td>
                                        <td>{admin.email}</td>
                                        <td>
                                            <button className="btn btn-sm btn-danger"><i className="fa fa-trash"></i></button>
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
 
const mapState = state => {
    return state;
}

const dispatchToProps = (dispatch, props) => {
    return {
        getAdmin: () => {
            dispatch(getAdmin());
        },
        add: (email) => {
            dispatch(addAdmin(email));
        }
    }
}

export default connect(mapState, dispatchToProps)(withTranslate(AdminManager));