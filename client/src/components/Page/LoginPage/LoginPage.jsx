import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { userActions } from '../../../redux-actions/CombineActions';

class LoginPage extends Component {
    // constructor(props){
    //     super(props);
    //     this.handleSubmit = this.handleSubmit.bind(this);
    //    }
    //    async handleSubmit(event){
    //     event.preventDefault();
    //     await fetch('/api/users/login', {
    //        method: 'post',
    //        headers: {'Content-Type':'application/json'},
    //        body: JSON.stringify({
    //             'email': this.email.value,
    //             'password': this.password.value
    //        })
    //     }).then(res => {
    //         if (res.status === 200) {
    //           this.props.history.push('/');
    //         } else {
    //           const error = new Error(res.error);
    //           throw error;
    //         }
    //       })
    //     .catch(function(res){ console.log(res) });

    //   };
      
    // useLoginStatusInStore = () => {
    //     var { dispatch } = this.props;
    //     dispatch({type:"UPDATE_ACCOUNT"})
    // }

    constructor(props) {
        super(props);

        // reset login status
        this.props.logout();

        this.state = {
            email: '',
            password: '',
            submitted: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

    handleSubmit(e) {
        e.preventDefault();

        this.setState({ submitted: true });
        const { email, password } = this.state;
        if (email && password) {
            this.props.login(email, password);
        }
    }

    render() {
        const { email, password, submitted } = this.state;
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
                                <input ref={(ref) => {this.email = ref}} value={email} name="email" onChange={this.handleChange} type="email" className="form-control" placeholder="Email" />
                                <span className="glyphicon glyphicon-envelope form-control-feedback" />
                                {submitted && !email &&
                                    <div className="help-block">Email is required</div>
                                }
                            </div>
                            <div className="form-group has-feedback">
                                <input ref={(ref) => {this.password = ref}} value={password} name="password" onChange={this.handleChange} type="password" className="form-control" placeholder="Password" />
                                <span className="glyphicon glyphicon-lock form-control-feedback" />
                                {submitted && !password &&
                                    <div className="help-block">Password is required</div>
                                }
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
                                    <button  type="submit" className="btn btn-primary btn-block btn-flat">Sign In</button>
                                </div>
                                {/* /.col */}
                            </div>
                        </form>
                        {/* /.social-auth-links */}
                        <a href="forfetpass.html">I forgot my password</a><br />
                        <Link to="/register" className="text-center">Register a new membership</Link>
                    </div>
                    {/* /.login-box-body */}
                </div>
            </div>

        );
    }
}

// const mapStateToProps = (state, ownProps) => {
//     return {
//         statusLogin: state.statusLogin
//     }
// }

function mapState(state) {
    const { loggingIn } = state.authentication;
    return { loggingIn };
}

const actionCreators = {
    login: userActions.login,
    logout: userActions.logout
};
const connectedLoginPage = connect(mapState, actionCreators)(LoginPage);
export { connectedLoginPage as LoginPage};
