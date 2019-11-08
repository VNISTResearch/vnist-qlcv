import React, { Component } from 'react';
import {connect} from 'react-redux';
import { withTranslate } from 'react-redux-multilingual';
import { get } from '../../../redux-actions/Admin/Roles.action';

class RolesManager extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            name: "",
            abstract: []
        }
        this.inputChange = this.inputChange.bind(this);
        this.selectHandle = this.selectHandle.bind(this);
    }

    inputChange = (e) => {
        const target = e.target;
        const name = target.name;
        const value = target.value;
        this.setState({
            [name]: value
        });
    }

    selectHandle = (e) => {
        console.log("Xu ly select");
        e.preventDefault();
        var options = e.target.options;
        var value = [];
        for (var i = 0, l = options.length; i < l; i++) {
          if (options[i].selected) {
            value.push(options[i].value);
          }
        }
        this.setState({ abstract: value });
    }

    componentDidMount(){
        this.props.get();
        let script = document.createElement('script');
        script.src = '/main/js/CoCauToChuc.js';
        script.async = true;
        script.defer = true;
        document.body.appendChild(script);
    }

    render() { 
        const {translate, roles} = this.props;
        console.log("rolemana:", this.state);
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
                                        className="form-control" 
                                        multiple="multiple" 
                                        style={{ width: '100%' }} 
                                        onChange={(e) => this.selectHandle(e)}
                                    >
                                        {
                                            roles.list !== undefined ?
                                            (
                                                roles.list.map( role => 
                                                        <option key={role._id} value={role._id}>{role.name}</option>
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
                        <button type="button" className="btn btn-primary">{ translate('table.save') }</button>
                        </div>
                    </div>
                    </div>
                </div>
                
                <table className="table table-bordered table-hover" style={{marginTop: '20px'}}>
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>Hàng động</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>id</td>
                            <td>
                                <button className="btn btn-sm btn-primary"><i className="fa fa-edit"></i></button>{' '}
                                <button className="btn btn-sm btn-danger"><i className="fa fa-trash"></i></button>
                            </td>
                        </tr>
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
        }
    }
}
 
export default connect(mapState, action) (withTranslate(RolesManager));