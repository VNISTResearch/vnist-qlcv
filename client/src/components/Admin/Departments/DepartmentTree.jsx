import React, { Component } from 'react';

class DepartmentTree extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        const { tree } = this.props;
        return ( 
            <React.Fragment>
                {
                    // tree !== null ?
                    // <MuiTreeView 
                    //     tree={ tree } 
                    //     style={{  
                    //         padding: '10px 10px 10px 10px',
                    //         border: '2px solid #A7BDC3'
                    //     }}
                    // /> : null
                }
            </React.Fragment>
         );
    }
}
 
export default DepartmentTree;