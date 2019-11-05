import React, { Component } from 'react';
import {connect} from 'react-redux';
import { withTranslate } from 'react-redux-multilingual';
import { get, create } from '../../../redux-actions/Admin/Links.action';
import { Link } from 'react-router-dom';

class Links extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            url: null,
            description: null
        }
        this.inputChange = this.inputChange.bind(this);
        this.createLink = this.createLink.bind(this);
    }

    inputChange = (e) => {
        const target = e.target;
        const name = target.name;
        const value = target.value;
        this.setState({
            [name]: value
        });
    }

    createLink(e){
        e.preventDefault();
        const { url, description } = this.state;
        this.props.create(url, description);
    }

    componentDidMount(){
        this.props.get();
    }

    render() { 
        const { translate, links } = this.props;
        return ( 
            <React.Fragment>
                
                <div className="row">
                    <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                        <form onSubmit={this.createLink}>
                            <h3>Tạo url mới</h3>
                            <div className="box-body">
                                <div className="form-group">
                                    <label>URL</label>
                                    <input name="url" type="text" className="form-control" placeholder="url" onChange={this.inputChange}/>
                                </div>
                                <div className="form-group">
                                    <label>Mô tả cho URL</label>
                                    <textarea name="description" className="form-control" placeholder="Mô tả url"  onChange={this.inputChange}/>
                                </div>
                            </div>
                            <div className="box-footer">
                                <button className="btn btn-primary">Tạo</button>
                            </div>
                        </form>
                    </div>

                    <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
                        <table 
                            className="table table-bordered">
                            <thead>
                                <tr>
                                    <th>{ translate('table.url') }</th>
                                    <th>{ translate('table.description') }</th>
                                    <th>{ translate('table.action') }</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    typeof(links.list) !== 'undefined' ?
                                    links.list.map( link => 
                                        <tr key={link._id}>
                                            <td>{ link.url }</td>
                                            <td>{ link.description }</td>
                                            <td style={{textAlign: 'center'}}>
                                                <Link 
                                                    to={`/admin/resource/link/edit/${link._id}`}
                                                    ><i className="fa fa-pencil-square"></i>
                                                </Link>
                                            </td>
                                        </tr>
                                    ): null
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
                </React.Fragment>
         );
    }
}
 
const mapState = state => state;
const getState = (dispatch, props) => {
    return {
        get: () => {
            dispatch(get());
        },
        create: (url, description) => {
            dispatch(create(url, description));
        }
    }
}
 
export default connect(mapState, getState) (withTranslate(Links));