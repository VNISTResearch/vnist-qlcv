import React, { Component } from 'react';
import Swal from 'sweetalert2';
import { connect } from 'react-redux';
import { taskManagementActions, performTaskAction } from '../../../redux-actions/CombineActions';

class ModalPerformTask extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentUser: localStorage.getItem('id'),
            selected: "actionTask",
            extendDescription: false,
            editDescription: false,
            extendInformation: true,
            extendRBAC: false,
            comment: false,
            editComment: "",
            startTimer: false,
            pauseTimer: false,
            showChildComment: "",
            member: [
                {
                    _id: "abcdef123456789987654321",
                    name: "Lê Thị Phương",
                    parent: ""
                },
                {
                    _id: "abcdef123456789987654322",
                    name: "Lê Thị Phương",
                    parent: "abcdef123456789987654321"
                },
                {
                    _id: "abcdef123456789987654323",
                    name: "Nguyễn Việt Anh",
                    parent: "abcdef123456789987654321"
                },
                {
                    _id: "abcdef123456789987654324",
                    name: "Bùi Việt Anh",
                    parent: "abcdef123456789987654321"
                }
            ],
            newComment: {
                task: this.props.id,
                creator: localStorage.getItem("id"),
                parent: null,
                content: "",
                file: null
            },
            timer: {
                task: this.props.id,
                startTimer: "",
                stopTimer: null,
                user: localStorage.getItem("id"),
                time: 0,
            }
        };
        this.contentComment = [];
        this.newContentComment = [];
        this.onHandleChangeFile = this.onHandleChangeFile.bind(this);
    }
    componentDidUpdate() {
        let script3 = document.createElement('script');
        script3.src = 'main/js/CoCauToChuc.js';
        script3.async = true;
        script3.defer = true;
        document.body.appendChild(script3);
        const { performtasks } = this.props;
        var currentTimer;
        if (typeof performtasks.currentTimer !== "undefined") currentTimer = performtasks.currentTimer;
        if (currentTimer && this.state.timer.startTimer === "") {
            this.setState(state => {
                return {
                    ...state,
                    timer: {
                        ...currentTimer,
                        startTimer: currentTimer.startTimer - currentTimer.time
                    },
                    startTimer: true,
                    pauseTimer: currentTimer.pause,
                }
            })
            //Chỉnh giao diện
            document.getElementById("start-timer-task").style.width = "20%";
            document.getElementById("btn-approve").style.marginLeft = "50%";
            // Setup thời thời gian chạy
            if (currentTimer.pause === false) {
                this.timer = setInterval(() => this.setState(state => {
                    return {
                        ...state,
                        timer: {
                            ...state.timer,
                            time: Date.now() - this.state.timer.startTimer,
                        },
                    }
                }), 1);
            }
        }
    }
    componentDidMount() {
        let script2 = document.createElement('script');
        script2.src = 'main/js/uploadfile/custom.js';
        script2.async = true;
        script2.defer = true;
        document.body.appendChild(script2);
    }
    UNSAFE_componentWillMount() {
        this.props.getTaskById(this.props.id);
        this.props.getCommentTask(this.props.id);
        this.props.getStatusTimer(this.props.id, localStorage.getItem("id"));
    }
    handleChangeContent = async (content) => {
        await this.setState(state => {
            return {
                ...state,
                selected: content
            }
        })
        console.log("sấdsadsad");
    }
    handleChangeExtendDesciption = async () => {
        await this.setState(state => {
            return {
                ...state,
                extendDescription: !state.extendDescription
            }
        })
    }
    handleChangeEditDesciption = async () => {
        await this.setState(state => {
            return {
                ...state,
                editDescription: !state.editDescription,
                extendDescription: !state.extendDescription
            }
        })
    }
    handleChangeExtendInformation = async () => {
        await this.setState(state => {
            return {
                ...state,
                extendInformation: !state.extendInformation
            }
        })
    }
    handleChangeExtendRBAC = async () => {
        await this.setState(state => {
            return {
                ...state,
                extendRBAC: !state.extendRBAC
            }
        })
    }
    handleComment = async () => {
        await this.setState(state => {
            return {
                ...state,
                comment: !state.comment
            }
        })
    }
    startTimer = async () => {
        //Chỉnh giao diện
        document.getElementById("start-timer-task").style.width = "20%";
        document.getElementById("btn-approve").style.marginLeft = "50%";
        await this.setState(state => {
            return {
                ...state,
                timer: {
                    ...state.timer,
                    startTimer: Date.now()
                }
            }
        })
        this.props.startTimer(this.state.timer);
        //Chỉnh trạng thái bấm giờ và update database
        await this.setState(state => {
            return {
                ...state,
                timer: {
                    ...state.timer,
                    time: 0,
                    startTimer: Date.now(),
                },
                startTimer: true,
                pauseTimer: false
            }
        })
        // Setup thời thời gian chạy
        this.timer = setInterval(() => this.setState(state => {
            return {
                ...state,
                timer: {
                    ...state.timer,
                    time: Date.now() - this.state.timer.startTimer,
                },
            }
        }), 1);
    }
    stopTimer = async (timer) => {
        await this.setState(state => {
            return {
                ...state,
                timer: {
                    ...state.timer,
                    stopTimer: Date.now(),
                },
                startTimer: false,
                pauseTimer: false
            }
        })
        // Xóa biến timer
        clearInterval(this.timer);
        // Chỉnh giao diện
        document.getElementById("start-timer-task").style.width = "9%";
        document.getElementById("btn-approve").style.marginLeft = "80%";

        Swal.fire({
            title: "Thời gian đã làm: " + this.convertTime(this.state.timer.time),
            type: 'success',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Lưu'
        }).then((res) => {
            // Update dữ liệu: Thời gian kết thúc, time = oldTime + newTime
            console.log(this.state);
            this.props.stopTimer(timer._id, this.state.timer);
            // this.setState(state => {
            //     return {
            //         ...state,
            //         timer: {
            //             task: this.props.id,
            //             startTimer: "",
            //             stopTimer: null,
            //             user: localStorage.getItem("id"),
            //             time: 0
            //         }
            //     }
            // })
        });
        // reset trạng thái timer
    }
    pauseTimer = async (timer) => {
        // Chuyển sang trạng thái dừng bấm giờ
        await this.setState(state => {
            return {
                ...state,
                pauseTimer: true
            }
        })
        // Xóa biến timer
        clearInterval(this.timer);
        // Update database: time
        this.props.pauseTimer(timer._id, this.state.timer);
    }
    continueTimer = async (timer) => {
        await this.setState(state => {
            return {
                ...state,
                timer: {
                    ...state.timer,
                    startTimer: Date.now()
                },
                startTimer: true,
                pauseTimer: false,
            }
        })
        this.props.continueTimer(timer._id, this.state.timer);
        await this.setState(state => {
            return {
                ...state,
                timer: {
                    ...state.timer,
                    startTimer: this.state.timer.startTimer - this.state.timer.time
                },
                startTimer: true,
                pauseTimer: false,
            }
        })
        this.timer = setInterval(() => this.setState(state => {
            return {
                ...state,
                timer: {
                    ...state.timer,
                    time: Date.now() - this.state.timer.startTimer,
                },
            }
        }), 1);
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
    handleShowChildComment = async (id) => {
        var showChildComment = this.state.showChildComment;
        if (showChildComment === id) {
            await this.setState(state => {
                return {
                    ...state,
                    showChildComment: ""
                }
            })
        } else {
            await this.setState(state => {
                return {
                    ...state,
                    showChildComment: id
                }
            })
        }

    }
    formatDate(date) {
        var d = new Date(date),
            month = '' + (d.getMonth() + 1),
            day = '' + d.getDate(),
            year = d.getFullYear();

        if (month.length < 2)
            month = '0' + month;
        if (day.length < 2)
            day = '0' + day;

        return [day, month, year].join('-');
    }
    calculateOverdueDate = (enddate) => {
        var endTime = new Date(enddate).getTime();
        var time = Date.now() - endTime;
        if (time <= 0) {
            return 0;
        } else {
            var day = Math.ceil(time / (1000 * 3600 * 24));
            return day;
        }
    }
    handleCloseModal = (id) => {
        var element = document.getElementsByTagName("BODY")[0];
        element.classList.remove("modal-open");
        var modal = document.getElementById(`modelPerformTask${id}`);
        modal.classList.remove("in");
        modal.style = "display: none;";
    }
    submitComment = async (e, id, index) => {
        e.preventDefault();
        await this.setState(state => {
            return {
                ...state,
                newComment: {
                    ...state.newComment,
                    parent: id,
                    content: this.contentComment[index].value,
                }
            }
        })
        var { newComment } = this.state;
        const data = new FormData();
        data.append("task", newComment.task);
        data.append("creator", newComment.creator);
        data.append("parent", newComment.parent);
        data.append("content", newComment.content);
        data.append("file", newComment.file);

        if (newComment.task && newComment.content && newComment.creator) {
            this.props.addComment(data);
        }
    }
    handleEditComment = async (id) => {
        await this.setState(state => {
            return {
                ...state,
                editComment: id
            }
        })
    }
    handleSaveEditComment = async (e, index) => {
        e.preventDefault();
        await this.setState(state => {
            return {
                ...state,
                newComment: {
                    ...state.newComment,
                    content: this.newContentComment[index].value,
                    // file:
                },
                editComment: ""
            }
        })
        var { newComment } = this.state;
        console.log(newComment);
        if (newComment.content) {
            this.props.editComment(index, newComment);
        }
    }
    onHandleChangeFile = (event) => {
        var file = event.target.files[0];
        this.setState(state => {
            return {
                ...state,
                newComment: {
                    ...state.newComment,
                    file: file,
                    loaded: 0
                }
            }
        })
    }
    render() {
        // console.log(this.state);
        var task, commentTasks, actions, informations, currentTimer;
        const { selected, extendDescription, editDescription, extendInformation, comment, editComment, startTimer, showChildComment, member, extendRBAC, pauseTimer } = this.state;
        const { time } = this.state.timer;
        const { tasks, performtasks } = this.props;
        if (typeof tasks.task !== 'undefined' && tasks.task !== null) task = tasks.task.info;
        if (typeof tasks.task !== 'undefined' && tasks.task !== null && tasks.task.info.tasktemplate !== null) {
            actions = tasks.task.actions;
            informations = tasks.task.informations;
        }
        if (typeof performtasks.commenttasks !== 'undefined' && performtasks.commenttasks !== null) commentTasks = performtasks.commenttasks;
        if (typeof performtasks.currentTimer !== "undefined") currentTimer = performtasks.currentTimer;
        return (
            <div className="modal modal-full fade" data-backdrop="false" id={`modelPerformTask${this.props.id}`} tabIndex={-1} role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                <div className="modal-dialog-full">
                    <div className="modal-content">
                        <div className="modal-header">
                            <div className="col-sm-4">
                                <h3 className="modal-title" id="myModalLabel"><input style={{ border: "none", height: "6%", width: "100%" }} value={task && task.name} /></h3>
                            </div>
                            <div className="col-sm-8" style={{ marginTop: "-6px" }}>
                                <div id="start-timer-task" className="col-sm-3" style={{ marginLeft: "-3%", width: "9%" }}>
                                    {this.props.role !== "informed" && this.props.role !== "creator" && (startTimer ?
                                        <div className="run-timer" style={{ border: "1px solid #d0d0d0", borderRadius: "50px", boxSizing: "border-box", zIndex: "6", boxShadow: "1px 1px 3px #ccc", width: "130px", height: "30px" }}>
                                            <a href="#abc" className="delete" title="Kết thúc" onClick={() => this.stopTimer(currentTimer)}><i className="fa fa-stop" style={{ fontSize: "10px", marginLeft: "6px", marginTop: "9px" }}></i></a>
                                            {pauseTimer ? <a href="#abc" className="edit" title="Tiếp tục bấm giờ" onClick={() => this.continueTimer(currentTimer)}><i className="fa fa-play" style={{ fontSize: "10px", marginLeft: "-7px" }}></i></a>
                                                : <a href="#abc" className="edit" title="Tạm dừng" onClick={() => this.pauseTimer(currentTimer)}><i className="fa fa-pause" style={{ fontSize: "10px", marginLeft: "-7px" }}></i></a>}
                                            <input value={this.convertTime(time)} style={{ width: "60px", border: "none", background: "none", marginLeft: "-15px" }} disabled />
                                        </div> : <a href="#abc" className="timer" title="Bắt đầu bấm giờ" onClick={() => this.startTimer()}><i className="material-icons" style={{ marginTop: "5px" }}>timer</i></a>)}
                                </div>
                                <div className="col-sm-1" style={{ marginTop: "5px", marginLeft: "-5%" }}><a href="#abc" className="default" title="Xóa công việc này"><i className="material-icons">delete</i></a></div>
                                <div className="col-sm-3">
                                    <label className="col-sm-2 control-label" style={{ width: '61%', textAlign: 'left', marginTop: "5px", fontWeight: "500", marginLeft: "-25%" }}>Mức ưu tiên:</label>
                                    <div className="col-sm-10" style={{ width: '79%', marginLeft: "-15%" }}>
                                        <select value={task && task.priority} className="form-control" ref={input => this.priority = input} disabled={this.props.role === "informed" || this.props.role === "creator"}>
                                            <option value="Cao">Cao</option>
                                            <option value="Trung bình">Trung bình</option>
                                            <option value="Thấp">Thấp</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="col-sm-4" style={{ marginLeft: "-6%" }}>
                                    <label className="col-sm-4 control-label" style={{ textAlign: 'left', width: "40%", marginTop: "5px", fontWeight: "500" }}>Trạng thái:</label>
                                    <div className="col-sm-10" style={{ width: '70%', marginLeft: "-12%" }}>
                                        <select value={task && task.status} className="form-control" ref={input => this.priority = input} disabled={this.props.role === "informed" || this.props.role === "creator"}>
                                            <option value="Đang chờ">Đang chờ</option>
                                            <option value="Đang thực hiện">Đang thực hiện</option>
                                            <option value="Quá hạn">Quá hạn</option>
                                            <option value="Đã hoàn thành">Đã hoàn thành</option>
                                            <option value="Đã hủy">Đã hủy</option>
                                            <option value="Tạm dừng">Tạm dừng</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="col-sm-2">
                                    {this.props.role === "responsible" && <button type="submit" id="btn-approve" className="col-sm-8 btn btn-success" style={{ width: "119%", marginLeft: "80%", height: "32px" }} onClick={this.handleSubmitContenTask}>Yêu cầu phê duyệt</button>}
                                </div>
                                <button type="button" className="col-sm-1 close" style={{ paddingLeft: "6%" }} onClick={() => this.handleCloseModal(task._id)} data-dismiss="modal">
                                    <span aria-hidden="true">×</span>
                                    <span className="sr-only">Close</span>
                                </button>
                            </div>
                        </div>
                        {/* Modal Body */}
                        <div className="modal-body modal-body-perform-task" >
                            <form className="form-horizontal">
                                <div className="row">
                                    <div className="col-sm-12">
                                        <label className="col-sm-12 control-label" style={{ textAlign: 'left', width: "100%", marginTop: "-1%", marginLeft: "-15px" }}>
                                            <a href="#abc" className="default" style={{ minWidth: "12px" }} title={extendDescription ? "Rút gọn" : "Mở rộng để xem nội dung mô tả"} onClick={this.handleChangeExtendDesciption}><i className={extendDescription ? "fa fa-angle-up" : "fa fa-angle-down"}></i></a>
                                            <h4 style={{ display: "inline" }}>Mô tả công việc</h4>
                                            {this.props.role !== "informed" && <a href="#abc" className="edit" title="Chỉnh sửa mô tả" onClick={this.handleChangeEditDesciption}><i className="material-icons">edit</i></a>}
                                        </label>
                                        {extendDescription ?
                                            (editDescription ?
                                                <textarea className="form-control" rows={5} value={task && task.description} style={{ width: "50%", height: "65px", marginLeft: "5%" }} />
                                                : <label className="control-label" style={{ textAlign: 'left', width: "40%", marginTop: "5px", marginLeft: "5%", fontWeight: "500" }}>{task.description}</label>)
                                            : null
                                        }
                                    </div>
                                    <div className="col-sm-12">
                                        <label className="control-label" style={{ textAlign: 'left', marginTop: "5px" }}>
                                            <a href="#abc" className="default" style={{ minWidth: "12px" }} title={extendDescription ? "Rút gọn" : "Mở rộng xem thông tin phân định trách nhiệm"} onClick={this.handleChangeExtendRBAC}><i className={extendRBAC ? "fa fa-angle-up" : "fa fa-angle-down"}></i></a>
                                            <h4 style={{ display: "inline" }}>Phân định trách nhiệm (RBAC)</h4>
                                        </label>
                                    </div>
                                    {extendRBAC &&
                                        <div className="col-sm-12">
                                            <div className='col-sm-12' style={{ paddingTop: "10px" }}>
                                                <label className="col-sm-2 control-label" style={{ width: '12%', textAlign: 'left', fontWeight: "500" }}>Người tạo*</label>
                                                <div className="col-sm-8" style={{ width: '88%' }}>
                                                    <select className="form-control select2" value="abcdef123456789987654321" data-placeholder="Hãy chọn người thực hiện" style={{ width: '100%' }} disabled>
                                                        {member &&
                                                            member.map(x => {
                                                                return <option key={x._id} value={x._id}>{x.name}</option>
                                                            })}
                                                    </select>
                                                </div>
                                            </div>
                                            <div className='col-sm-12' style={{ paddingTop: "10px" }}>
                                                <label className="col-sm-2 control-label" style={{ width: '12%', textAlign: 'left', fontWeight: "500" }}>Người thực hiện*</label>
                                                <div className="col-sm-8" style={{ width: '88%' }}>
                                                    <select className="form-control select2" value={["abcdef123456789987654321", "abcdef123456789987654323"]} multiple="multiple" disabled={this.props.role !== "accountable"} data-placeholder="Hãy chọn người thực hiện" style={{ width: '100%' }} ref={input => this.responsible = input}>
                                                        {member &&
                                                            member.map(x => {
                                                                return <option key={x._id} value={x._id}>{x.name}</option>
                                                            })}
                                                    </select>
                                                </div>
                                            </div>
                                            <div className='col-sm-12' style={{ paddingTop: "10px" }}>
                                                <label className="col-sm-2 control-label" style={{ width: '12%', textAlign: 'left', fontWeight: "500" }}>Người phê duyệt*</label>
                                                <div className="col-sm-8" style={{ width: '88%' }}>
                                                    <select className="form-control select2" value={["abcdef123456789987654323"]} multiple="multiple" disabled={this.props.role !== "accountable"} data-placeholder="Hãy chọn người phê duyệt" style={{ width: '100%' }} ref={input => this.accounatable = input}>
                                                        {member &&
                                                            member.map(x => {
                                                                return <option key={x._id} value={x._id}>{x.name}</option>
                                                            })}
                                                    </select>
                                                </div>
                                            </div>
                                            <div className='col-sm-12' style={{ paddingTop: "10px" }}>
                                                <label className="col-sm-2 control-label" style={{ width: '12%', textAlign: 'left', fontWeight: "500" }}>Người hỗ trợ</label>
                                                <div className="col-sm-8" style={{ width: '88%' }}>
                                                    <select className="form-control select2" value={["abcdef123456789987654324"]} multiple="multiple" disabled={this.props.role !== "accountable"} data-placeholder="Hãy chọn người hỗ trợ" style={{ width: '100%' }} ref={input => this.consulted = input}>
                                                        {member &&
                                                            member.map(x => {
                                                                return <option key={x._id} value={x._id}>{x.name}</option>
                                                            })}
                                                    </select>
                                                </div>
                                            </div>
                                            <div className='col-sm-12' style={{ paddingTop: "10px" }}>
                                                <label className="col-sm-2 control-label" style={{ width: '12%', textAlign: 'left', fontWeight: "500" }}>Người quan sát</label>
                                                <div className="col-sm-8" style={{ width: '88%' }}>
                                                    <select className="form-control select2" value={["abcdef123456789987654324"]} multiple="multiple" disabled={this.props.role === "informed"} data-placeholder="Hãy chọn người quan sát" style={{ width: '100%' }} ref={input => this.informed = input}>
                                                        {member &&
                                                            member.map(x => {
                                                                return <option key={x._id} value={x._id}>{x.name}</option>
                                                            })}
                                                    </select>
                                                </div>
                                            </div>
                                        </div>}
                                    {/* <div className="col-sm-12" style={{ marginBottom: "20px" }} >
                                        <label className="control-label" style={{ textAlign: 'left', marginTop: "5px", fontWeight: "500" }}>
                                            <a href="#abc" className="default" style={{minWidth: "12px"}} title={extendDescription ? "Rút gọn" : "Mở rộng xem thông tin công việc"} onClick={this.handleChangeExtendInformation}><i className={extendInformation ? "fa fa-angle-up" : "fa fa-angle-down"}></i></a>
                                            <h4 style={{ display: "inline" }}>Liên kết KPI</h4>
                                        </label>
                                    </div> */}
                                    <div className="col-sm-12" style={{ marginBottom: "20px" }} >
                                        <label className="control-label" style={{ textAlign: 'left', marginTop: "5px", fontWeight: "500" }}>
                                            <a href="#abc" className="default" style={{ minWidth: "12px" }} title={extendDescription ? "Rút gọn" : "Mở rộng xem thông tin công việc"} onClick={this.handleChangeExtendInformation}><i className={extendInformation ? "fa fa-angle-up" : "fa fa-angle-down"}></i></a>
                                            <h4 style={{ display: "inline" }}>Thông tin công việc</h4>
                                        </label>
                                    </div>
                                    {extendInformation &&
                                        <React.Fragment>
                                            <div className="col-sm-12">
                                                <div className="col-sm-4">
                                                    <label className="col-sm-2 control-label" style={{ width: '46%', textAlign: 'left', marginLeft: "-14px", fontWeight: "500" }}>Ngày bắt đầu:</label>
                                                    <div className={'input-group date has-feedback col-sm-8'} style={{ width: '57%' }}>
                                                        <div className="input-group-addon">
                                                            <i className="fa fa-calendar" />
                                                        </div>
                                                        <input type="string" className="form-control" value={this.formatDate(task && task.startdate)} disabled={this.props.role === "informed" || this.props.role === "consulted"} ref={input => this.startdate = input} name="time" id="datepicker4" data-date-format="dd-mm-yyyy" />
                                                    </div>
                                                </div>
                                                <div className="col-sm-4">
                                                    <label className="col-sm-2 control-label" style={{ width: '46%', textAlign: 'left', marginLeft: "-14px", fontWeight: "500" }}>Ngày kết thúc:</label>
                                                    <div className={'input-group date has-feedback col-sm-8'} style={{ width: '57%' }}>
                                                        <div className="input-group-addon">
                                                            <i className="fa fa-calendar" />
                                                        </div>
                                                        <input type="string" className="form-control" value={this.formatDate(task && task.enddate)} disabled={this.props.role === "informed" || this.props.role === "consulted"} ref={input => this.startdate = input} name="time" id="datepicker5" data-date-format="dd-mm-yyyy" />
                                                    </div>
                                                </div>
                                                <div className="col-sm-4">
                                                    <div className='form-group has-feedback'>
                                                        <label className="col-sm-2 control-label" style={{ width: '40%', textAlign: 'left', fontWeight: "500" }}>Thời gian quá hạn:</label>
                                                        <div className="col-sm-8" style={{ width: '60%' }}>
                                                            <input type="string" className="form-control" value={this.calculateOverdueDate(task && task.enddate)} id="inputName3" placeholder="15h" ref={input => this.name = input} disabled />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            {informations &&
                                                <div className="col-sm-12">
                                                    {informations.map(item => <div className="col-sm-4" key={item._id}>
                                                        <div className='form-group has-feedback'>
                                                            <label className="col-sm-2 control-label" style={{ width: '40%', textAlign: 'left', fontWeight: "500" }}>{item.name}</label>
                                                            <div className="col-sm-8" style={{ width: '60%' }}>
                                                                <input type={item.type} className="form-control" id="inputName3" placeholder="80" disabled={this.props.role !== "responsible"} />
                                                            </div>
                                                        </div>
                                                    </div>)}
                                                </div>
                                            }
                                            <div className="col-sm-12">
                                                <div className="col-sm-4">
                                                    <div className='form-group has-feedback'>
                                                        <label className="col-sm-2 control-label" style={{ width: '40%', textAlign: 'left', fontWeight: "500" }}>Mức độ hoàn thành:</label>
                                                        <div className="col-sm-8" style={{ width: '60%' }}>
                                                            <input type="number" className="form-control" id="inputName3" value={task && task.progress} disabled={this.props.role === "informed" || this.props.role === "consulted"} ref={input => this.name = input} />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-sm-4">
                                                    <div className='form-group has-feedback'>
                                                        <label className="col-sm-2 control-label" style={{ width: '40%', textAlign: 'left', fontWeight: "500" }}>Thời gian làm việc:</label>
                                                        <div className="col-sm-8" style={{ width: '60%' }}>
                                                            <input type="name" className="form-control" id="inputName3" value={this.convertTime(task && task.time)} ref={input => this.name = input} disabled />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-sm-4">
                                                    <div className='form-group has-feedback'>
                                                        <label className="col-sm-2 control-label" style={{ width: '40%', textAlign: 'left', fontWeight: "500" }}>Điểm hệ thống tính:</label>
                                                        <div className="col-sm-8" style={{ width: '60%' }}>
                                                            <input type="number" className="form-control" id="inputName3" placeholder="75" ref={input => this.name = input} disabled />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-sm-12">
                                                {
                                                    task && task.responsible.map(item => <React.Fragment key={item._id}>
                                                        <div className="col-sm-12">
                                                            <label>Tên nhân viên: {item.name}</label>
                                                        </div>
                                                        <div className="col-sm-4">
                                                            <div className='form-group has-feedback'>
                                                                <label className="col-sm-2 control-label" style={{ width: '40%', textAlign: 'left', fontWeight: "500" }}>Điểm tự đánh giá:</label>
                                                                <div className="col-sm-8" style={{ width: '60%' }}>
                                                                    <input type="number" className="form-control" id="inputName3" placeholder="80" disabled={this.props.role !== "responsible"} ref={input => this.name = input} />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-sm-4">
                                                            <div className='form-group has-feedback'>
                                                                <label className="col-sm-2 control-label" style={{ width: '40%', textAlign: 'left', fontWeight: "500" }}>Điểm quản lý chấm:</label>
                                                                <div className="col-sm-8" style={{ width: '60%' }}>
                                                                    <input type="number" className="form-control" id="inputName3" placeholder="80" ref={input => this.name = input} disabled={this.props.role !== "accountable"} />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </React.Fragment>)
                                                }
                                                {this.props.role !== "informed" &&
                                                    <div className="col-sm-1" style={{ marginLeft: "22%" }}>
                                                        <button type="submit" className="btn btn-success" onClick={this.handleSubmitContenTask}>Lưu thông tin</button>
                                                    </div>
                                                }
                                            </div>
                                        </React.Fragment>}
                                </div>
                            </form>
                            <div className="nav-tabs-custom">
                                <ul className="nav nav-tabs" style={{ borderTop: "solid", borderWidth: "thin", borderColor: "aliceblue" }}>
                                    <li className="active"><a href="#actionTask" onClick={() => this.handleChangeContent("actionTask")} data-toggle="tab">Hoạt động</a></li>
                                    {/* <li><a href="#commentTask" onClick={() => this.handleChangeContent("commentTask")} data-toggle="tab">Trao đổi</a></li> */}
                                    <li><a href="#documentTask" onClick={() => this.handleChangeContent("documentTask")} data-toggle="tab">Tài liệu</a></li>
                                    {/* <li><a href="#subTask" onClick={() => this.handleChangeContent("subTask")} data-toggle="tab">Công việc con</a></li> */}
                                </ul>
                                <div className="tab-content">
                                    <div className={selected === "actionTask" ? "active tab-pane" : "tab-pane"} id="actionTask">
                                        {actions &&
                                            actions.map((item, index) => <div className="post clearfix" style={{ width: "50%" }} key={item._id}>
                                                <div className="user-block" style={{ display: "inline-block", marginBottom: "0px" }}>
                                                    <p>{index + 1 + ". "}{item.name}</p>
                                                </div>
                                                {item.approve === 1 &&
                                                    <div className="action-comment" style={{ display: "inline-block" }}>
                                                        <i className="material-icons">check</i>
                                                    </div>
                                                }
                                                {this.props.role === "accountable" &&
                                                    <div className="action-comment" style={{ display: "inline-block" }}>
                                                        <a href="#abc" title="Đạt" className="add_circle"><i className="material-icons">check_circle_outline</i></a>
                                                        <a href="#abc" title="Không đạt" className="delete"><i className="material-icons">highlight_off</i></a>
                                                    </div>
                                                }
                                                <React.Fragment>
                                                    <div className="action-comment" style={{ display: "inline-block" }}>
                                                        <a href="#abc" title="Xem bình luận hoạt động này" className="link-black text-sm" onClick={() => this.handleShowChildComment(item._id)}>
                                                            {showChildComment === item._id ? <i className="fa fa-angle-up" /> : <i className="fa  fa-angle-down" />}
                                                        </a>
                                                    </div>
                                                    {showChildComment === item._id &&
                                                        <div className="comment-content-child">
                                                            {
                                                                commentTasks.map(child => {
                                                                    if (child.parent === item._id) return <div className="col-sm-12 margin-bottom-none" key={child._id}>
                                                                        <div className="col-sm-2 user-block" style={{ width: "4%", marginTop: "1%" }}>
                                                                            <img className="img-circle img-bordered-sm"
                                                                                src="adminLTE/dist/img/user3-128x128.jpg" alt="user avatar"
                                                                                style={{ height: "30px", width: "30px" }} />
                                                                        </div>
                                                                        <div className="col-sm-10" >
                                                                            <p style={{ marginBottom: "-2px" }}>&nbsp;{child.content}</p>
                                                                            <span className="description">19:30 19-11-2019</span>
                                                                            {child.creator._id === this.state.currentUser &&
                                                                                <div className="action-comment" style={{ display: "inline-block" }}>
                                                                                    <a href="#abc" title="Sửa bình luận" className="edit" onClick={this.handleEditComment}><i className="material-icons">edit</i></a>
                                                                                    <a href="#abc" title="Xóa bình luận" className="delete"><i className="material-icons">delete</i></a>
                                                                                </div>
                                                                            }
                                                                        </div>
                                                                    </div>;
                                                                    return true;
                                                                })
                                                            }
                                                            <div className="comment-child-action">
                                                                <form className="form-horizontal" style={{ paddingTop: "1%" }}>
                                                                    <div className="col-sm-12 margin-bottom-none">
                                                                        <div className="col-sm-2 user-block" style={{ width: "4%", marginTop: "1%" }}>
                                                                            <img className="img-circle img-bordered-sm"
                                                                                src="adminLTE/dist/img/user3-128x128.jpg" alt="user avatar"
                                                                                style={{ height: "30px", width: "30px" }} />
                                                                        </div>
                                                                        <div className="col-sm-11" >
                                                                            <textarea placeholder="Hãy nhập nội dung bình luận"
                                                                                style={{ width: '100%', height: 40, fontSize: 13, border: '1px solid #dddddd' }} ref={input => this.contentComment[item._id] = input} />
                                                                            <div className="row action-post" style={{ width: "107%" }}>
                                                                                <button style={{ width: "20%", marginRight: "2%" }} className="col-xs-2 col-xs-offset-7 btn btn-success btn-sm" onClick={(e) => this.submitComment(e, null, item._id)}>Gửi bình luận</button>
                                                                                <button style={{ width: "16%" }} className="col-xs-2 btn btn-default btn-sm" onClick={this.handleComment}>Hủy bỏ</button>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </form>
                                                            </div>
                                                        </div>}
                                                </React.Fragment>
                                            </div>)
                                        }
                                        {typeof commentTasks !== 'undefined' && commentTasks.length !== 0 ?
                                            commentTasks.map(item => {
                                                if (item.parent === null)
                                                    return <div className="post clearfix" style={{ width: "50%" }} key={item._id}>
                                                        <div className="user-block" style={{ display: "inline-block", marginBottom: "0px" }}>
                                                            <img className="img-circle img-bordered-sm" src="adminLTE/dist/img/user3-128x128.jpg" alt="user avatar" />
                                                            <span className="username">
                                                                <a href="#abc">{item.creator.name}</a>
                                                            </span>
                                                            <span className="description">19:30 19-11-2019</span>
                                                        </div>
                                                        {item.creator._id === this.state.currentUser && this.props.role === "responsible" &&
                                                            <div className="action-comment" style={{ display: "inline-block" }}>
                                                                <a href="#abc" title="Sửa hành động" className="edit" onClick={() => this.handleEditComment(item._id)}><i className="material-icons">edit</i></a>
                                                                <a href="#abc" title="Xóa hành động" className="delete" onClick={() => this.props.deleteComment(item._id)}><i className="material-icons">delete</i></a>
                                                            </div>
                                                        }
                                                        {this.props.role === "accountable" &&
                                                            <div className="action-comment" style={{ display: "inline-block" }}>
                                                                <a href="#abc" title="Đạt" className="add_circle"><i className="material-icons">check_circle_outline</i></a>
                                                                <a href="#abc" title="Không đạt" className="delete"><i className="material-icons">highlight_off</i></a>
                                                            </div>
                                                        }
                                                        <div className="comment-content" style={{ marginLeft: "8%" }}>
                                                            {editComment === item._id ?
                                                                <React.Fragment>
                                                                    <textarea
                                                                        style={{ width: '100%', height: 65, fontSize: 13, border: '1px solid #dddddd' }}
                                                                        defaultValue={item.content}
                                                                        ref={input => this.newContentComment[item._id] = input}
                                                                    />
                                                                    <div className="row action-post">
                                                                        <input className="col-xs-8" type="file" name="attack-file" multiple="multiple" />
                                                                        <button style={{ width: "15%", marginRight: "2%" }} className="col-xs-2 btn btn-success btn-sm" onClick={(e) => this.handleSaveEditComment(e, item._id)}>Gửi chỉnh sửa</button>
                                                                        <button style={{ width: "15%" }} className="col-xs-2 btn btn-default btn-sm" onClick={this.handleEditComment}>Hủy bỏ</button>
                                                                    </div>
                                                                </React.Fragment> :
                                                                <React.Fragment>
                                                                    <p>{item.content}</p>
                                                                    <div className="attach-file" style={{ marginTop: "-10px" }}>
                                                                        <a href={item.file.url} download>{item.file.name}</a>
                                                                    </div>
                                                                    <ul className="list-inline">
                                                                        <li className="pull-right">
                                                                            <a href="#abc" title="Xem bình luận hoạt động này" className="link-black text-sm" onClick={() => this.handleShowChildComment(item._id)}>
                                                                                <i className="fa fa-comments-o margin-r-5" /> Bình luận({commentTasks.filter(child => child.parent === item._id).reduce(sum => sum + 1, 0)}) &nbsp;
                                                                            {showChildComment === item._id ? <i className="fa fa-angle-up" /> : <i className="fa  fa-angle-down" />}
                                                                            </a>
                                                                        </li>
                                                                    </ul>
                                                                    {showChildComment === item._id &&
                                                                        <div className="comment-content-child">
                                                                            {
                                                                                commentTasks.map(child => {
                                                                                    if (child.parent === item._id) return <div className="col-sm-12 form-group margin-bottom-none" key={child._id}>
                                                                                        <div className="col-sm-1 user-block" style={{ width: "4%", marginTop: "2%" }}>
                                                                                            <img className="img-circle img-bordered-sm"
                                                                                                src="adminLTE/dist/img/user3-128x128.jpg" alt="user avatar"
                                                                                                style={{ height: "30px", width: "30px" }} />
                                                                                        </div>
                                                                                        <div className="col-sm-11" >
                                                                                            <p style={{ marginBottom: "-2px" }}>&nbsp;{child.content}</p>
                                                                                            <span className="description">19:30 19-11-2019</span>
                                                                                            {child.creator._id === this.state.currentUser &&
                                                                                                <div className="action-comment" style={{ display: "inline-block" }}>
                                                                                                    <a href="#abc" title="Sửa bình luận" className="edit" onClick={this.handleEditComment}><i className="material-icons">edit</i></a>
                                                                                                    <a href="#abc" title="Xóa bình luận" className="delete" onClick={() => this.props.deleteComment(child._id)}><i className="material-icons">delete</i></a>
                                                                                                </div>
                                                                                            }
                                                                                        </div>
                                                                                    </div>;
                                                                                    return true;
                                                                                })
                                                                            }
                                                                            <div className="comment-child-action">
                                                                                <form className="form-horizontal">
                                                                                    <div className="col-sm-12 margin-bottom-none">
                                                                                        <div className="col-sm-1 user-block" style={{ width: "4%", marginTop: "1%" }}>
                                                                                            <img className="img-circle img-bordered-sm"
                                                                                                src="adminLTE/dist/img/user3-128x128.jpg" alt="user avatar"
                                                                                                style={{ height: "30px", width: "30px" }} />
                                                                                        </div>
                                                                                        <div className="col-sm-11" >
                                                                                            <textarea placeholder="Hãy nhập nội dung bình luận"
                                                                                                style={{ width: '100%', height: 40, fontSize: 13, border: '1px solid #dddddd' }} ref={input => this.contentComment[item._id] = input} />
                                                                                            <div className="row action-post">
                                                                                                <button type="submit" style={{ width: "20%", marginRight: "2%" }} className="col-xs-2 col-xs-offset-7 btn btn-success btn-sm" onClick={(e) => this.submitComment(e, item._id, item._id)}>Gửi bình luận</button>
                                                                                                <button style={{ width: "16%" }} className="col-xs-2 btn btn-default btn-sm" onClick={this.handleComment}>Hủy bỏ</button>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </form>
                                                                            </div>
                                                                        </div>}
                                                                </React.Fragment>
                                                            }
                                                        </div>
                                                    </div>;
                                                return true;
                                            }) : null
                                        }
                                        {this.props.role === "responsible" &&
                                            <form className="form-horizontal" style={{ paddingTop: "2%" }}>
                                                <div className="form-group margin-bottom-none">
                                                    <div className="col-sm-2 user-block" style={{ width: "4%", marginTop: "1%" }}>
                                                        <img className="img-circle img-bordered-sm" src="adminLTE/dist/img/user3-128x128.jpg" alt="user avatar" />
                                                    </div>
                                                    <div className="col-sm-8" >
                                                        <textarea placeholder="Hãy nhập nội dung hoạt động"
                                                            style={{ width: '70%', height: 65, fontSize: 13, border: '1px solid #dddddd' }}
                                                            onClick={this.handleComment} ref={input => this.contentComment[0] = input} />
                                                        {comment &&
                                                            <div className="row action-post" style={{ width: "72%" }}>
                                                                <input className="col-xs-8" type="file" name="file" onChange={this.onHandleChangeFile} />
                                                                <button type="submit" style={{ width: "18%", marginRight: "2%" }} className="col-xs-2 btn btn-success btn-sm" onClick={(e) => this.submitComment(e, null, 0)}>Thêm hoạt động</button>
                                                                <button style={{ width: "13%" }} className="col-xs-2 btn btn-default btn-sm" onClick={this.handleComment}>Hủy bỏ</button>
                                                            </div>}
                                                    </div>
                                                </div>
                                            </form>}
                                    </div>
                                    <div className={selected === "commentTask" ? "active tab-pane" : "tab-pane"} id="commentTask">
                                        {/* Post */}
                                        <div className="post">
                                            <div className="user-block">
                                                <img className="img-circle img-bordered-sm" src="adminLTE/dist/img/user1-128x128.jpg" alt="user avatar" />
                                                <span className="username">
                                                    <a href="#abc">Jonathan Burke Jr.</a>
                                                    <a href="#abc" className="pull-right btn-box-tool"><i className="fa fa-times" /></a>
                                                </span>
                                                <span className="description">Shared publicly - 7:30 PM today</span>
                                            </div>
                                            {/* /.user-block */}
                                            <p>Lorem ipsum represents a long-held tradition for designers,
                                                typographers and the like. Some people hate it and argue for
                                                its demise, but others ignore the hate as they create awesome
                                                tools to help create filler text for everyone from bacon lovers
                                                to Charlie Sheen fans.</p>
                                            <ul className="list-inline">
                                                <li><a href="#abc" className="link-black text-sm"><i className="fa fa-share margin-r-5" /> Share</a></li>
                                                <li><a href="#abc" className="link-black text-sm"><i className="fa fa-thumbs-o-up margin-r-5" /> Like</a>
                                                </li>
                                                <li className="pull-right">
                                                    <a href="#abc" className="link-black text-sm"><i className="fa fa-comments-o margin-r-5" /> Comments(5)
                                                    </a>
                                                </li>
                                            </ul>
                                            <input className="form-control input-sm" type="text" placeholder="Type a comment" />
                                        </div>
                                        {/* /.post */}
                                        {/* Post */}
                                        <div className="post clearfix">
                                            <div className="user-block">
                                                <img className="img-circle img-bordered-sm" src="adminLTE/dist/img/user7-128x128.jpg" alt="user avatar" />
                                                <span className="username">
                                                    <a href="#abc">Sarah Ross</a>
                                                    <a href="#abc" className="pull-right btn-box-tool"><i className="fa fa-times" /></a>
                                                </span>
                                                <span className="description">Sent you a message - 3 days ago</span>
                                            </div>
                                            {/* /.user-block */}
                                            <p>
                                                Lorem ipsum represents a long-held tradition for designers,
                                                typographers and the like. Some people hate it and argue for
                                                its demise, but others ignore the hate as they create awesome
                                                tools to help create filler text for everyone from bacon lovers
                                                to Charlie Sheen fans.
        </p>
                                            <form className="form-horizontal">
                                                <div className="form-group margin-bottom-none">
                                                    <div className="col-sm-9">
                                                        <input className="form-control input-sm" placeholder="Response" />
                                                    </div>
                                                    <div className="col-sm-3">
                                                        <button type="submit" className="btn btn-danger pull-right btn-block btn-sm">Send</button>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                        {/* /.post */}
                                    </div>
                                    <div className={selected === "documentTask" ? "active tab-pane" : "tab-pane"} id="documentTask">
                                        {/* <div id="content"> */}
                                        <input type="file" name="files[]" id="filer_input2" multiple="multiple" />
                                        {/* </div> */}
                                    </div>
                                    <div className={selected === "subTask" ? "active tab-pane" : "tab-pane"} id="subTask"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        );
    }
}

function mapState(state) {
    const { tasks, performtasks } = state;
    return { tasks, performtasks };
}

const actionCreators = {
    getResponsibleTaskByUser: taskManagementActions.getResponsibleTaskByUser,
    getCommentTask: performTaskAction.getCommentTask,
    getTaskById: taskManagementActions.getTaskById,
    addComment: performTaskAction.addCommentTask,
    editComment: performTaskAction.editCommentTask,
    deleteComment: performTaskAction.deleteCommentTask,
    startTimer: performTaskAction.startTimerTask,
    pauseTimer: performTaskAction.pauseTimerTask,
    continueTimer: performTaskAction.continueTimerTask,
    stopTimer: performTaskAction.stopTimerTask,
    getLogTimer: performTaskAction.getLogTimerTask,
    getStatusTimer: performTaskAction.getTimerStatusTask
};
const connectedModalPerformTask = connect(mapState, actionCreators)(ModalPerformTask);
export { connectedModalPerformTask as ModalPerformTask };