import React, { Component } from 'react';

class Content extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="content-wrapper">
                {/* Content Header (Page header) */}
                <section className="content-header">
                    <h1>
                        { translate('manageDepartment.name') }
                        <small><i className="fa fa-building"></i></small>
                    </h1>
                    <ol className="breadcrumb">
                        <li><a href="/admin"><i className="fa fa-dashboard" /> Admin</a></li>
                        <li className="active">{ this.props.pageName }</li>
                    </ol>
                </section>
                {/* Main content */}
                <section className="content">
                    { this.props.children}
                </section>
            </div>
         );
    }
}
 
export default Content;