import React, { Component } from 'react';
import { connect } from 'react-redux';

class Login extends Component {
    constructor(props){
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
       }
       async handleSubmit(event){
        event.preventDefault();
        await fetch('/api/users/login', {
           method: 'post',
           headers: {'Content-Type':'application/json'},
           body: JSON.stringify({
                'email': this.email.value,
                'password': this.password.value
           })
        }).then(res => {
            if (res.status === 200) {
              this.props.history.push('/');
            } else {
              const error = new Error(res.error);
              throw error;
            }
          })
        .catch(function(res){ console.log(res) });

      };
      
    useLoginStatusInStore = () => {
        var { dispatch } = this.props;
        dispatch({type:"UPDATE_ACCOUNT"})
    }
    render() {
        return (
            <div className="hold-transition login-page" style={{ minHeight: '100vh' }}>
                <div className="login-box" style={{ marginTop: 0, marginBottom: 0, paddingTop: '7vh' }}>
                    <div className="login-logo">
                        <a href="/index2.html"><b>VNIST</b>-QLCV</a>
                    </div>
                    {/* /.login-logo */}
                    <div className="login-box-body">
                        <p className="login-box-msg">Sign in to start your session</p>
                        <form action="/api/users/login" method="post" onSubmit={this.handleSubmit}>
                            <div className="form-group has-feedback">
                                <input ref={(ref) => {this.email = ref}} name="email" type="email" className="form-control" placeholder="Email" />
                                <span className="glyphicon glyphicon-envelope form-control-feedback" />
                            </div>
                            <div className="form-group has-feedback">
                                <input ref={(ref) => {this.password = ref}} name="password" type="password" className="form-control" placeholder="Password" />
                                <span className="glyphicon glyphicon-lock form-control-feedback" />
                            </div>
                            <div className="row">
                                <div className="col-xs-8">
                                    <div className="checkbox icheck">
                                        <label>
                                            <input type="checkbox" /> Remember Me
                                    </label>
                                    </div>
                                </div>
                                {/* /.col */}
                                <div className="col-xs-4">
                                    <button onClick={() => this.useLoginStatusInStore()} type="submit" className="btn btn-primary btn-block btn-flat">Sign In</button>
                                </div>
                                {/* /.col */}
                            </div>
                        </form>
                        {/* /.social-auth-links */}
                        <a href="forfetpass.html">I forgot my password</a><br />
                        <a href="/register" className="text-center">Register a new membership</a>
                    </div>
                    {/* /.login-box-body */}
                </div>
            </div>

        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        statusLogin: state.statusLogin
    }
}
export default connect(mapStateToProps)(Login);
