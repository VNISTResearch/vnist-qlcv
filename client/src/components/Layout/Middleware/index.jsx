import React, { Component } from 'react';
import { connect } from 'react-redux';

class Middleware extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
        this.checkLink = this.checkLink.bind(this);
    }

    checkLink(arrLink, url){
        var result = false;
        arrLink.forEach(link => {
            switch(link.resource.url){
                case '/admin/department/detail':
                    if(url.indexOf(link.resource.url) !== -1){
                        result = true;
                    }
                    break;
//t check link o day r. ko can id . chỉ can giống chuoi nay la vao duoc?? tren may t van chay ok 
                case '/admin/resource/link/edit':
                    if(url.indexOf(link.resource.url) !== -1){
                        result = true;
                    }
                    break;
                    
                default:
                    if(link.resource.url === url){
                        result = true;
                    }
                    break;
            }
        });

        return result;
    }

    render() {
        const {user} = this.props; 
        return ( 
            <React.Fragment>
                {
                    (typeof(user.links) !== 'undefined' && this.checkLink(user.links, window.location.pathname)) ? 
                        this.props.children :
                        <div className="content-wrapper"></div>
                }
            </React.Fragment>
         );
    }
}
const mapState = state => {
    return state;
}
 
export default connect(mapState, null)(Middleware);