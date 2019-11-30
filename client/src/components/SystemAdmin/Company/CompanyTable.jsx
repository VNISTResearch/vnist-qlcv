import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withTranslate } from 'react-redux-multilingual';
import CompanyCreate from './CompanyCreate';
import { get } from '../../../redux-actions/SystemAdmin/Companies.action';
import CompanyEdit from './CompanyEdit';

class CompanyTable extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    componentDidMount(){
        this.props.get();
    }

    render() { 
        const { translate, companies } = this.props;

        return ( 
            <React.Fragment>
                <CompanyCreate />

                <div className="box" style={{marginTop: '20px'}}>
                    <div className="box-header">
                        <h3 className="box-title">{ translate('manageCompany.name') }</h3>
                    </div>
                    {/* /.box-header */}
                    <div className="box-body">
                        <table className="table table-bordered table-hover">
                            <thead>
                                <tr>
                                    <th>{ translate('table.name') }</th>
                                    <th style={{ width: '50%' }}>{ translate('table.description') }</th>
                                    <th style={{ width: '10%' }}>{ translate('table.action') }</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    companies.list.length > 0 ?
                                    <React.Fragment>
                                        {
                                            companies.list.map( com => 
                                                <tr key={ com._id }>
                                                    <td>{ com.name }</td>
                                                    <td>{ com.description }</td>
                                                    <td>
                                                        <CompanyEdit 
                                                            companyID={ com._id }
                                                            companyName={ com.name }
                                                            companyDescription={ com.description }
                                                        />
                                                    </td>
                                                </tr>    
                                            )
                                        }
                                    </React.Fragment> : 
                                    <tr>
                                        <td colSpan='2'>No data</td>
                                    </tr>
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
         
            </React.Fragment>
        );
    }
}
 
const mapStateToProps = state => {
    return state;
}

const mapDispatchToProps = (dispatch, props) => {
    return{
        get: () => {
            dispatch(get()); 
        }
    }
}

export default connect( mapStateToProps, mapDispatchToProps )( withTranslate(CompanyTable) );