import React, { Component } from 'react';
import { connect } from 'react-redux';
import { get, create } from '../../../redux-actions/Admin/Users.action';
import { withTranslate } from 'react-redux-multilingual';

class Users extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            name: null,
            email: null,
            password: null,
            showForm: true
         }
        this.inputChange = this.inputChange.bind(this);
        this.save = this.save.bind(this);
        this.toggleForm = this.toggleForm.bind(this);
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

    save = (e) => {
        e.preventDefault();
        var {name , email, password} = this.state;
        this.props.create({
            name,
            email,
            password
        });
    }

    toggleForm(){
        const {showForm} = this.state;
        this.setState({
            showForm: !showForm 
        });
    }

    render() { 
        const { showForm } =this.state;
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
                {/* Main content */}
                <section className="content">
                    {
                        showForm ? 
                        <button className="btn btn-success" onClick={this.toggleForm}>
                            <i className="fa fa-plus"/>
                            <span> { translate('manageUser.create') } </span>
                        </button> : null
                    }
                    <div 
                        className="row" 
                        hidden={showForm}
                    >
                        <div className="col-sm-3"></div>
                        <div className="col-sm-6">
                            <div className="panel panel-default">
                                <div className="panel-header">
                                    <h3 style={{textAlign: 'center'}}>{ translate('manageUser.name') }</h3>
                                </div>
                                <div className="panel-body">
                                    <form onSubmit={ this.save } style={{ marginBottom: '20px' }} >
                                        <div className="form-group">
                                            <label>{ translate('table.name') }</label>
                                            <input type="text" className="form-control" name="name" onChange={ this.inputChange }/>
                                        </div>
                                        <div className="form-group">
                                            <label>{ translate('table.email') }</label>
                                            <input type="email" className="form-control" name="email" onChange={ this.inputChange }/>
                                        </div>
                                        <div className="form-group">
                                            <label>{ translate('table.password') }</label>
                                            <input type="password" className="form-control" name="password" onChange={ this.inputChange }/>
                                        </div>
                                        <button type="button" onClick={this.toggleForm} className="btn btn-danger"><i className="fa fa-close"></i> { translate('table.close') } </button>
                                        <button type="submit" className="btn btn-primary pull-right"><i className="fa fa-save"></i> { translate('table.save') } </button>
                                    </form>
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
                                typeof(aUsers.list) !== 'undefined' ?
                                (
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
                                                aUsers.list.map( user => (
                                                    <tr key={user._id}>
                                                        <td>{user._id}</td>
                                                        <td>{user.name}</td>
                                                        <td>{user.email}</td>
                                                        <td>
                                                            <button className="btn btn-sm btn-primary"><i className="fa fa-edit"></i></button>{' '}
                                                            <button className="btn btn-sm btn-danger"><i className="fa fa-trash"></i></button>
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
        }
    }
}

export default connect( mapStateToProps, mapDispatchToProps )( withTranslate(Users) );