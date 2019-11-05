import React, { Component } from 'react';
import {connect} from 'react-redux';
import { withTranslate } from 'react-redux-multilingual';
import { Link } from 'react-router-dom';

class Components extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        // const { translate } = this.props;
        return ( 
            <React.Fragment>
                <div className="row">
                    <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                        <form onSubmit={this.createLink}>
                            <h3>Tạo thành phần mới</h3>
                            <div className="box-body">
                                <div className="form-group">
                                    <label>Tên</label>
                                    <input name="url" type="text" className="form-control" placeholder="url" onChange={this.inputChange}/>
                                </div>
                                <div className="form-group">
                                    <label>Mô tả cho thành phần</label>
                                    <textarea name="description" className="form-control" placeholder="Mô tả url"  onChange={this.inputChange}/>
                                </div>
                            </div>
                            <div className="box-footer">
                                <button className="btn btn-primary">Tạo</button>
                            </div>
                        </form>
                    </div>

                    <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
                        <h3>Bảng danh sách các thành phần</h3>
                        <table 
                            className="table table-bordered">
                            <thead>
                                <tr>
                                    <th>Tên</th>
                                    <th>Mô tả</th>
                                    <th>Hành động</th>
                                </tr>
                            </thead>
                            <tbody>
                            <tr >
                                <td>Tên</td>
                                <td>Tên</td>
                                <td style={{textAlign: 'center'}}>
                                    <Link>
                                        <i className="fa fa-pencil-square"></i>
                                    </Link>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </React.Fragment>
         );
    }
}
 
const mapState = state => state;
 
export default connect(mapState, null) (withTranslate(Components));