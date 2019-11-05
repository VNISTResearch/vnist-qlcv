import React, { Component } from 'react';

class RolesManager extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="box" style={{marginTop: '20px'}}>
                <div className="box-header">
                    <h3 className="box-title">Bảng quản lý phân quyền</h3>
                </div>
                {/* /.box-header */}
                <div className="box-body">
                    <table className="table table-bordered table-hover">
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
                </div>
            </div>
                
         );
    }
}
 
export default RolesManager;