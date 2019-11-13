import React, { Component } from 'react';

class Companies extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <React.Fragment>
                <div className="content-wrapper">
                    <section className="content-header">
                        <h1>
                            Manage Companies
                            <small><i className="fa fa-building"></i></small>
                        </h1>
                        <ol className="breadcrumb">
                            <li><a href="/admin"><i className="fa fa-dashboard" /> Admin</a></li>
                            <li className="active">Manage Companies</li>
                        </ol>
                    </section>
                    
                    <section className="content">
                        Companies
                    </section>
                </div>
            </React.Fragment>
         );
    }
}
 
export default Companies;