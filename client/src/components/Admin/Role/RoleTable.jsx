import React, { Component } from 'react';
import RoleDetail from './RoleDetail';

class RoleTable extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <React.Fragment>
                 <table className="table table-bordered table-hover" style={{marginTop: '20px'}}>
                    <thead>
                        <tr>
                            <th>{ translate('manageRole.roleName') }</th>
                            <th>{ translate('manageRole.abstract') }</th>
                            <th>{ translate('table.action') }</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            roles.list !== undefined ? 
                            roles.list.map( role => 
                                <tr key={ `roleList${role._id}` }>
                                    <td> { role.name } </td>
                                    <td>
                                        {
                                            role.abstract.map( item => 
                                                <React.Fragment>
                                                    <span className="badge">{ item.name }</span>
                                                    <span>{" "}</span>
                                                </React.Fragment>
                                            )
                                        }
                                    </td>
                                    <td>
                                        <a className="btn btn-primary" data-toggle="modal" href={`#${role._id}`}>Info</a>
                                        <button className="btn btn-sm btn-danger"><i className="fa fa-info"></i></button>
                                        <RoleDetail 
                                        id={ role._id } />
                                    </td>
                                </tr>       
                            ): 
                            (
                                <tr>
                                    <td colSpan={'3'}>no data</td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            
            </React.Fragment>
         );
    }
}
 
export default RoleTable;