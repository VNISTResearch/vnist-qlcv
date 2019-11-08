import React, { Component } from 'react';
import { connect } from 'react-redux';
import { login } from '../../../redux-actions/Auth/Auth.action';

class LoginPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: null,
            password: null
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        const target = e.target;
        const name = target.name;
        const value = target.value;
        this.setState({
            [name]: value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        console.log("LOGIN")
        var { email, password } = this.state;
        var user = { email, password };
		this.props.login(user);
    }

    render() {
        
        return (
            <div className="hold-transition login-page" style={{ minHeight: '100vh' }}>
                <div className="login-box" style={{ marginTop: 0, marginBottom: 0, paddingTop: '7vh' }}>
                    <div className="login-logo">
                        <a href="/index2.html"><b>VNIST</b>-QLCV</a>
                    </div>
                    <div className="login-box-body">
                        <p className="login-box-msg">Sign in to start your session</p>
                        <form onSubmit={this.handleSubmit}>
                            <div className="form-group has-feedback">
                                <input name="email" onChange={this.handleChange} type="email" className="form-control" placeholder="Email" required/>
                                <span className="glyphicon glyphicon-envelope form-control-feedback" />
                            </div>
                            <div className="form-group has-feedback">
                            <input name="password" onChange={this.handleChange} type="password" className="form-control" placeholder="Password" required/>
                                <span className="glyphicon glyphicon-lock form-control-feedback" />
                            </div>
                            <div className="row">
                                <div className="col-xs-8">
                                    <div className="checkbox">
                                        <label>
                                            <input type="checkbox" /> Remember Me
                                    </label>
                                    </div>
                                </div>
                                <div className="col-xs-4">
                                    <button className="btn btn-primary btn-block btn-flat">Sign In </button>
                                </div>
                            </div>
                        </form>
                        <a href="forfetpass.html">I forgot my password</a><br />
                        <a href="/register" className="text-center">Register a new membership</a>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return state;
}

const mapDispatchToProps = (dispatch, props) => {
    return{
        login: (user) => {
            dispatch(login(user));
        }
    }
}

export default connect( mapStateToProps, mapDispatchToProps )( LoginPage );