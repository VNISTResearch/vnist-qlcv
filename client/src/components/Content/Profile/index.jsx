import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withTranslate } from 'react-redux-multilingual';

class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        const { translate } = this.props;
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
                    Profile
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
    }
}

export default connect( mapStateToProps, mapDispatchToProps )( withTranslate(Profile) );