import React, { Component } from 'react';

class Login extends Component {
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
                        <form action="/index2.html" method="post">
                            <div className="form-group has-feedback">
                                <input type="email" className="form-control" placeholder="Email" />
                                <span className="glyphicon glyphicon-envelope form-control-feedback" />
                            </div>
                            <div className="form-group has-feedback">
                                <input type="password" className="form-control" placeholder="Password" />
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
                                    <button type="submit" className="btn btn-primary btn-block btn-flat">Sign In</button>
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

export default Login;