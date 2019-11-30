import React, { Component } from 'react';
import CompanyTable from './CompanyTable';
import { connect } from 'react-redux';
import { withTranslate } from 'react-redux-multilingual';

class Companies extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        const{ translate } = this.props;

        return ( 
            <React.Fragment>
                <div className="content-wrapper">
                    <section className="content-header">
                        <h1>
                            { translate('manageCompany.name') }
                        </h1>
                        <ol className="breadcrumb">
                            <li><a href="/admin"><i className="fa fa-dashboard" /> Admin</a></li>
                            <li className="active">{ translate('manageCompany.name') }</li>
                        </ol>
                    </section>
                    
                    <section className="content">
                        <CompanyTable/>
                    </section>
                </div>
            </React.Fragment>
         );
    }
}
 
const mapStateToProps = state => {
    return state;
}

// const mapDispatchToProps = (dispatch, props) => {
//     return{
//         getUser: () => {
//             dispatch(get()); 
//         },
//         create: (user) => {
//             dispatch(create(user));
//         },
//         destroy: (id) => {
//             dispatch(destroy(id));
//         }
//     }
// }

export default connect( mapStateToProps, null )( withTranslate(Companies) );