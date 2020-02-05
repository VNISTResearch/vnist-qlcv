import React, { Component } from 'react';
import { connect } from 'react-redux';
import { logout } from '../../../../redux-actions/Auth/Auth.action';
import "./MainHeaderMenu.css";
import { getRoles, getLinkOfRole } from '../../../../redux-actions/User/User.action';
import { withTranslate } from 'react-redux-multilingual';
import { IntlActions } from 'react-redux-multilingual';

class MainHeaderMenu extends Component {

    constructor(props) {
        super(props);
        this.state = {
            currentRole: localStorage.getItem('currentRole'),
            timer: {
                task: this.props.id,
                startTimer: "",
                stopTimer: null,
                user: localStorage.getItem("id"),
                time: 0,
            },
            startTimer: false,
            pauseTimer: false,

        }
        this.clickButton = this.clickButton.bind(this);
        this.selectHandle = this.selectHandle.bind(this);
    }
    convertTime = (duration) => {
        // var milliseconds = parseInt((duration % 1000) / 100),
        var seconds = Math.floor((duration / 1000) % 60),
            minutes = Math.floor((duration / (1000 * 60)) % 60),
            hours = Math.floor((duration / (1000 * 60 * 60)) % 24);

        hours = (hours < 10) ? "0" + hours : hours;
        minutes = (minutes < 10) ? "0" + minutes : minutes;
        seconds = (seconds < 10) ? "0" + seconds : seconds;

        return hours + ":" + minutes + ":" + seconds;
    }
    componentDidMount() {
        this.props.getRoles();
        this.createJS();
    }
    createJS = () => {
        window.$(".modal-content").on("mousedown", function (mousedownEvt) {
            var $draggable = window.$(this);
            var x = mousedownEvt.pageX - $draggable.offset().left,
                y = mousedownEvt.pageY - $draggable.offset().top;
            window.$("body").on("mousemove.draggable", function (mousemoveEvt) {
                $draggable.closest(".modal-dialog").offset({
                    "left": mousemoveEvt.pageX - x,
                    "top": mousemoveEvt.pageY - y
                });
            });
            window.$("body").one("mouseup", function () {
                window.$("body").off("mousemove.draggable");
            });
            $draggable.closest(".modal").one("bs.modal.hide", function () {
                window.$("body").off("mousemove.draggable");
            });
        });
    }
    selectHandle(e) {
        this.setState({ currentRole: e.target.value });
        localStorage.setItem('currentRole', e.target.value);
        this.props.getLinkOfRole();
        // window.location.reload();
    }

    clickButton() {
        console.log("click i18n")
    }

    render() {
        var currentTimer;
        const { auth, user, translate, performtasks } = this.props;
        const { currentRole, pauseTimer, startTimer } = this.state;
        const { time } = this.state.timer;
        if (typeof performtasks.currentTimer !== "undefined") currentTimer = performtasks.currentTimer;
        return (
            <div className="navbar-custom-menu">
                <ul className="nav navbar-nav">
                    <li>
                        {
                            typeof (user.roles) !== 'undefined' ?
                                <select
                                    style={{ padding: '8px', marginTop: '5px' }}
                                    onChange={this.selectHandle}
                                    name='currentRole'
                                    defaultValue={currentRole}>
                                    {
                                        user.roles.map(data => {
                                            return (
                                                <option key={data.id} value={data.id}>
                                                    {data.name}
                                                </option>
                                            )
                                        })
                                    }
                                </select> : null
                        }
                    </li>
                    <li className="dropdown user user-menu">
                        <a href="#abc" className="dropdown-toggle" data-toggle="dropdown">
                            <img src="/adminLTE/dist/img/user2-160x160.jpg" className="user-image" alt="User Avatar" />
                            <span className="hidden-xs"> {auth.name}</span>
                        </a>
                        <ul className="dropdown-menu">
                            {/* User image */}
                            <li className="user-header">
                                <img src="/adminLTE/dist/img/user2-160x160.jpg" className="img-circle" alt="User Avatar" />
                                <p>
                                    {auth.name}
                                    <small>{auth.email}</small>
                                </p>
                            </li>
                            <li className="user-footer">
                                <div className="pull-left">
                                    <a href="#abc" className="btn btn-default btn-flat">{translate('profile')}</a>
                                </div>
                                <div className="pull-right">
                                    <button type="button" className="btn btn-default btn-flat" onClick={this.props.logout}>{translate('logout')}</button>
                                </div>
                            </li>
                        </ul>
                    </li>
                    {/* <li>
                        <button
                            href="#currentClockModal"
                            data-backdrop="false"
                            data-toggle="modal"
                            className="btn"
                            title="Công việc hiện tại"
                            style={{
                                padding: '15px 15px 15px 15px',
                                backgroundColor: '#605CA8',
                                color: 'white'
                            }}>
                            <i className="fa fa-clock-o"></i>
                        </button>
                    </li> */}
                    <li>
                        <button
                            className="btn"
                            data-toggle="control-sidebar"
                            title="language translate"
                            style={{
                                padding: '15px 15px 15px 15px',
                                backgroundColor: '#605CA8',
                                color: 'white'
                            }}>
                            <i className="fa fa-language"></i>
                        </button>
                    </li>
                </ul>
                {/* <div className="modal-dialog" style={{ position: "fixed", top: "-29px", left: "583px", height: "100px", width: "192px" }}>
                    <div className="modal-content">
                        <div className="modal-header">
                            <a href="#abc" className="delete" title="Kết thúc" onClick={() => this.stopTimer(currentTimer)}><i className="fa fa-stop" style={{ fontSize: "10px", marginLeft: "6px", marginTop: "9px" }}></i></a>
                            {pauseTimer ? <a href="#abc" className="edit" title="Tiếp tục bấm giờ" onClick={() => this.continueTimer(currentTimer)}><i className="fa fa-play" style={{ fontSize: "10px", marginLeft: "-7px" }}></i></a>
                                : <a href="#abc" className="edit" title="Tạm dừng" onClick={() => this.pauseTimer(currentTimer)}><i className="fa fa-pause" style={{ fontSize: "10px", marginLeft: "-7px" }}></i></a>}
                            <input value={this.convertTime(time)} style={{ width: "60px", border: "none", background: "none", marginLeft: "-15px" }} disabled />
                        </div>
                        <div className="modal-body">
                            <p>Công việc số 1</p>
                        </div>
                    </div>
                </div> */}

                <div className="control-sidebar control-sidebar-light" style={{ display: 'none', marginTop: '52px', width: '135px' }}>
                    <div style={{ marginTop: '-40px' }}>
                        <i onClick={this.props.setLanguageEnglish}>
                            <img src="/en.png" className="img-circle" alt="img" style={{ width: '30px', height: '30px', marginLeft: '5px' }} />
                            <span className="badge">EN</span>
                        </i>
                        <i onClick={this.props.setLanguageVietNam}>
                            <img src="/vn.png" className="img-circle" alt="img" style={{ width: '30px', height: '30px', marginLeft: '5px' }} />
                            <span className="badge">VN</span>
                        </i>
                    </div>
                </div>
            </div>
        );
    }
}
const mapStateToProps = state => {
    return state;
}

const mapDispatchToProps = (dispatch, props) => { //lưu các users lên store
    return {
        logout: () => {
            dispatch(logout()); //dispatch đến action getUsers trong file index của action và lưu dữ liệu users trên store
        },
        getRoles: () => {
            dispatch(getRoles());
        },
        setLanguageVietNam: () => {
            localStorage.setItem('lang', 'vn');
            dispatch(IntlActions.setLocale('vn'));
        },
        setLanguageEnglish: () => {
            localStorage.setItem('lang', 'en');
            dispatch(IntlActions.setLocale('en'));
        },
        getLinkOfRole: () => {
            dispatch(getLinkOfRole());
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withTranslate(MainHeaderMenu));
