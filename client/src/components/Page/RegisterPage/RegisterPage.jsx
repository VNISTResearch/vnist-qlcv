import React, { Component } from 'react';
import { connect } from 'react-redux';
import { userActions } from '../../../redux-actions/CombineActions';

class RegisterPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            user: {
                fullName: '',
                email: '',
                password: ''
            },
            submitted: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const { name, value } = event.target;
        const { user } = this.state;
        this.setState({
            user: {
                ...user,
                [name]: value
            }
        });
    }

    handleSubmit(event) {
        event.preventDefault();

        this.setState({ submitted: true });
        const { user } = this.state;
        if (user.fullName && user.email && user.password) {
            this.props.register(user);
        }
    }
    render() {
        const { registering  } = this.props;
        const { user, submitted } = this.state;
        return (
            <div className="hold-transition register-page" style={{ minHeight: '100vh' }}> 
                <div className="register-box" style={{ marginTop: 0, marginBottom: 0, paddingTop: '7vh' }}>
                    <div className="register-logo">
                        <a href="/register"><b>VNIST</b>QLCV</a>
                    </div>
                    <div className="register-box-body">
                        <p className="login-box-msg">Register a new membership</p>
                        <form name="form" onSubmit={this.handleSubmit}>
                            <div className={'form-group has-feedback' + (submitted && !user.fullName ? ' has-error' : '')}>
                                <input type="text" className="form-control" placeholder="Full name" name="fullName" value={user.fullName} onChange={this.handleChange}/>
                                <span className="glyphicon glyphicon-user form-control-feedback" />
                                {submitted && !user.fullName &&
                                <div className="help-block">Full Name is required</div>
                                }
                            </div>
                            <div className={'form-group has-feedback' + (submitted && !user.email ? ' has-error' : '')}>
                                <input type="email" className="form-control" placeholder="Email" name="email" value={user.email} onChange={this.handleChange} />
                                <span className="glyphicon glyphicon-envelope form-control-feedback" />
                                {submitted && !user.email &&
                                <div className="help-block">Email is required</div>
                                }
                            </div>
                            <div className={'form-group has-feedback' + (submitted && !user.password ? ' has-error' : '')}>
                                <input type="password" className="form-control" placeholder="Password" name="password" value={user.password} onChange={this.handleChange}/>
                                <span className="glyphicon glyphicon-lock form-control-feedback" />
                                {submitted && !user.password &&
                                <div className="help-block">Password is required</div>
                                }
                            </div>
                            <div className="form-group has-feedback">
                                <input type="password" className="form-control" placeholder="Retype password" name="rePassword"/>
                                <span className="glyphicon glyphicon-log-in form-control-feedback" />
                                {submitted && document.form['form']['rePassword'] !== user.password &&
                                <div className="help-block">RePassword is not </div>
                                }
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
                                    {registering && 
                                    <img alt="" src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" />
                                    }
                                </div>
                                {/* /.col */}
                            </div>
                        </form>
                        <a href="/login" className="text-center">I already have a membership</a>
                    </div>
                    {/* /.form-box */}
                </div>
            </div>
        );
    }
}

function mapState(state) {
    const { registering } = state.registration;
    return { registering };
}

const actionCreators = {
    register: userActions.register
}

const connectedRegisterPage = connect(mapState, actionCreators)(RegisterPage);
export { connectedRegisterPage as RegisterPage };
