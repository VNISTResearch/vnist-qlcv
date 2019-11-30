import React, { Component } from 'react';
// import MuiTreeView from 'material-ui-treeview';
import {Treebeard} from 'react-treebeard';

class DepartmentTree extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        const { tree } = this.props;
        console.log("TREE: ", tree)
        return ( 
            <React.Fragment>
                 {/* <div className="row">
                    <div className="col-sm-2">
                    </div>
                    <div className="col-sm-8">
                        {
                            tree !== null ?
                            <MuiTreeView 
                                tree={ tree } 
                                style={{  
                                    padding: '15px 15px 15px 15px',
                                    border: '2px solid #A7BDC3'
                                }}
                            /> : null
                        }
                    </div>
                </div> */}
            </React.Fragment>
         );
    }
}
 
export default DepartmentTree;