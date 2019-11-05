import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getDepartmentInfo, addUserWithRole } from '../../../redux-actions/Admin/Departments.action';
import { withTranslate } from 'react-redux-multilingual';

function getDeanName(translate, name){
    return translate + name.substring(7,name.length);
}

function getViceDeanName(translate, name){
    return translate + name.substring(11,name.length);
}

function getEmployeeName(translate, name){
    return translate + name.substring(11,name.length);
}
class Detail extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            dean: null,
            vice_dean: null,
            employee: null
        }
        this.inputChange = this.inputChange.bind(this);
		this.addDean = this.addDean.bind(this);
		this.addViceDean = this.addViceDean.bind(this);
        this.addEmployee = this.addEmployee.bind(this);
    }

    inputChange = (e) => {
        const target = e.target;
        const name = target.name;
        const value = target.value;
        this.setState({
            [name]: value
        });
    }

    addDean = (e, id) => {
        e.preventDefault();
        var {dean} = this.state;
        this.props.addUser(dean, id);
    }

    addViceDean = (e, id) => {
        e.preventDefault();
        var {vice_dean} = this.state;
        this.props.addUser(vice_dean, id);
    }

    addEmployee = (e, id) => {
        e.preventDefault();
        var {employee} = this.state;
        this.props.addUser(employee, id);
    }

    componentDidMount(){
        this.props.getInfo(this.props.match.params.id);
    }

    render() { 
        const { aDepartments, translate } = this.props;
		console.log(this.state);
        return ( 
            <div className="content-wrapper">
                <section className="content-header">
                    <h1>
                        { translate('manageDepartment.name') }
                        <small><i className="fa fa-building"></i></small>
                    </h1>
                    <ol className="breadcrumb">
                        <li><a href="/admin"><i className="fa fa-dashboard" /> Admin</a></li>
                        <li className="active">{ translate('manageDepartment.name') }</li>
                    </ol>
                </section>
                <section className="content">
                    {
                        typeof(aDepartments.name) !== 'undefined' ?
                        <div className="box">
                            <div className="box-header">
                                { <h1 style={{textAlign: 'center'}}>{ aDepartments.name }</h1> }
                            </div>
                            <div className="box-content">
                                <div className="nav-tabs-custom">
                                    <ul className="nav nav-tabs">
                                        <li className="active bg bg-gray"><a href="#tab_1" data-toggle="tab">{ getDeanName( translate('manageDepartment.dean'), aDepartments.dean.name  ) }</a></li>
                                        <li className="bg bg-gray"><a href="#tab_2" data-toggle="tab">{ getViceDeanName( translate('manageDepartment.vicedean'), aDepartments.vice_dean.name  ) }</a></li>
                                        <li className="bg bg-gray"><a href="#tab_3" data-toggle="tab">{ getEmployeeName( translate('manageDepartment.employee'), aDepartments.employee.name  ) }</a></li>
                                    </ul>
                                    <div className="tab-content">
                                        <div className="tab-pane active" id="tab_1">
                                            <form onSubmit={ (e) => this.addDean(e, aDepartments.dean._id) }>
												<input 
													placeholder={ translate('input') + 'email'}
													style={{padding: '5px', width: '50%', marginLeft: '25%'}} 
													name="dean"
													onChange={this.inputChange}
													type="email"
												>
												</input>
                                                <button className="btn btn-primary" title="Add dean" style={{ marginLeft: '3px', marginTop: '-3px'}}>
                                                    <i className="fa fa-user-plus"></i>
                                                </button><br/>
                                            </form>
                                            <br/>
                                            <table className="table table-bordered table-hover">
                                                <thead>
                                                    <tr>
                                                        <th>{ translate('table.name') }</th>
                                                        <th>{ translate('table.email') }</th>
                                                        <th>{ translate('table.action') }</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {
														aDepartments.deans ?
														aDepartments.deans.map( dean => 
															<tr key={dean._id}>
																<td>{dean.name}</td>
																<td>{dean.email}</td>
																<td>
																	<button className="btn btn-sm btn-danger"><i className="fa fa-trash"></i></button>
																</td>
															</tr>
														) : 
                                                        <tr>
                                                            <td colSpan="3">NO DATA</td>
                                                        </tr>
                                                    }
                                                </tbody>
                                            </table>
                                        </div>
                                        <div className="tab-pane" id="tab_2">
                                            <form onSubmit={ (e) => this.addViceDean(e, aDepartments.vice_dean._id) }>
												<input 
													placeholder={ translate('input') + 'email'}
													style={{padding: '5px', width: '50%', marginLeft: '25%'}}
													name="vice_dean"
													onChange={this.inputChange}
													type="email"
													>
												</input>
                                                <button className="btn btn-primary" title="Add dean" style={{ marginLeft: '3px', marginTop: '-3px'}}>
                                                    <i className="fa fa-user-plus"></i>
                                                </button><br/>
                                            </form>
                                            <br/>
                                            <table className="table table-bordered table-hover">
                                                <thead>
                                                    <tr>
                                                        <th>{ translate('table.name') }</th>
                                                        <th>{ translate('table.email') }</th>
                                                        <th>{ translate('table.action') }</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
													{
														aDepartments.vice_deans ?
														aDepartments.vice_deans.map( vice_dean => 
															<tr key={vice_dean._id}>
																<td>{vice_dean.name}</td>
																<td>{vice_dean.email}</td>
																<td>
																	<button className="btn btn-sm btn-danger"><i className="fa fa-trash"></i></button>
																</td>
															</tr>
														) : 
                                                        <tr>
                                                            <td colSpan="3">NO DATA</td>
                                                        </tr>
                                                    }
                                                </tbody>
                                            </table>
                                        </div>
                                        <div className="tab-pane" id="tab_3">
                                            <form onSubmit={ (e) => this.addEmployee(e, aDepartments.employee._id) }>
												<input 
													placeholder={ translate('input') + 'email'}
													style={{padding: '5px', width: '50%', marginLeft: '25%'}}
													name="employee"
													onChange={this.inputChange}
													type="email"
												>
												</input>
                                                <button className="btn btn-primary" title="Add dean" style={{ marginLeft: '3px', marginTop: '-3px'}}>
                                                    <i className="fa fa-user-plus"></i>
                                                </button><br/>
                                            </form>
                                            <br/>
                                            <table className="table table-bordered table-hover">
                                                <thead>
                                                    <tr>
                                                        <th>{ translate('table.name') }</th>
                                                        <th>{ translate('table.email') }</th>
                                                        <th>{ translate('table.action') }</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
													{
														aDepartments.employees ?
														aDepartments.employees.map( employee => 
															<tr key={employee._id}>
																<td>{employee.name}</td>
																<td>{employee.email}</td>
																<td>
																	<button className="btn btn-sm btn-danger"><i className="fa fa-trash"></i></button>
																</td>
															</tr>
														) : 
                                                        <tr>
                                                            <td colSpan="3">NO DATA</td>
                                                        </tr>
                                                    }
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        : null
                    }
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
        getInfo: (id) => {
            dispatch( getDepartmentInfo(id) );
        },
        addUser: (email, id) => {
            dispatch( addUserWithRole(email, id));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withTranslate(Detail));