import React, { Component } from 'react';

class Register extends Component {
    render() {
        return (
            <div className="hold-transition register-page" style={{ minHeight: '100vh' }}> 
                <div className="register-box" style={{ marginTop: 0, marginBottom: 0, paddingTop: '7vh' }}>
                    <div className="register-logo">
                        <a href="../../index2.html"><b>VNIST</b>QLCV</a>
                    </div>
                    <div className="register-box-body">
                        <p className="login-box-msg">Register a new membership</p>
                        <form action="../../index.html" method="post">
                            <div className="form-group has-feedback">
                                <input type="text" className="form-control" placeholder="Full name" />
                                <span className="glyphicon glyphicon-user form-control-feedback" />
                            </div>
                            <div className="form-group has-feedback">
                                <input type="email" className="form-control" placeholder="Email" />
                                <span className="glyphicon glyphicon-envelope form-control-feedback" />
                            </div>
                            <div className="form-group has-feedback">
                                <input type="password" className="form-control" placeholder="Password" />
                                <span className="glyphicon glyphicon-lock form-control-feedback" />
                            </div>
                            <div className="form-group has-feedback">
                                <input type="password" className="form-control" placeholder="Retype password" />
                                <span className="glyphicon glyphicon-log-in form-control-feedback" />
                            </div>
                            <div className="row">
                                <div className="col-xs-8">
                                    <div className="checkbox icheck">
                                        <label>
                                            <input type="checkbox" /> I agree to the <a href="#abc">terms</a>
                                        </label>
                                    </div>
                                </div>
                                {/* /.col */}
                                <div className="col-xs-4">
                                    <button type="submit" className="btn btn-primary btn-block btn-flat">Register</button>
                                </div>
                                {/* /.col */}
                            </div>
                        </form>
                        <div className="social-auth-links text-center">
                            <p>- OR -</p>
                            <a href="#abc" className="btn btn-block btn-social btn-facebook btn-flat"><i className="fa fa-facebook" /> Sign up using
              Facebook</a>
                            <a href="#abc" className="btn btn-block btn-social btn-google btn-flat"><i className="fa fa-google-plus" /> Sign up using
              Google+</a>
                        </div>
                        <a href="login.html" className="text-center">I already have a membership</a>
                    </div>
                    {/* /.form-box */}
                </div>
            </div>
        );
    }
}

export default Register;