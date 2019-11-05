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
        return ( 
            <React.Fragment>
                <div className="box" style={{marginTop: '20px'}}>
                    <div className="box-header">
                        <h3 className="box-title">{ translate('manageRole.name')}</h3>
                    </div>
                    <form onSubmit={this.save}>
                        <input 
                            placeholder= { translate('input') } 
                            style={{padding: '5px', width: '50%', marginLeft: '25%'}} 
                            name="email"
                            onChange={this.inputChange}
                            type="email"
                        >
                        </input>
                        <button className="btn btn-primary" title="Add dean" style={{ marginLeft: '3px', marginTop: '-3px'}}>
                            <i className="fa fa-user-plus"></i>
                        </button><br/>
                    </form>
                    <div className="box-body">
                        {
                            typeof(roles.id_user) !== 'undefined' ?
                            <table className="table table-bordered table-hover">
                                <thead>
                                    <tr>
                                        <th>{ translate('table.id') }</th>
                                        <th>{ translate('table.name') }</th>
                                        <th>{ translate('table.email') }</th>
                                        <th>{ translate('table.action') }</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        roles.id_user.map( admin => 
                                            <tr key={admin._id}>
                                                <td>{admin._id}</td>
                                                <td>{admin.name}</td>
                                                <td>{admin.email}</td>
                                                <td>
                                                    <button className="btn btn-sm btn-danger"><i className="fa fa-trash"></i></button>
                                                </td>
                                            </tr>
                                        )
                                    }
                                </tbody>
                            </table> : null
                        }
                    </div>
                </div>  
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