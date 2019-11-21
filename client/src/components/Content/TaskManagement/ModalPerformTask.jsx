import React, { Component } from 'react';
import Swal from 'sweetalert2';

class ModalPerformTask extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: "actionTask",
            time: 0,
            timeStart: 0,
            extendDescription: false,
            editDescription: false,
            extendInformation: true,
            extendRBAC: false,
            comment: false,
            editComment: false,
            startTimer: false,
            pauseTimer: false,
            showChildComment: false,
            member: [
                {
                    _id: "abcdef123456789987654321",
                    name: "Trần Văn Dũng",
                    parent: ""
                },
                {
                    _id: "abcdef123456789987654322",
                    name: "Lê Việt Anh",
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
            ]
        };
    }
    componentDidMount() {
        // this.handleLoadJS();
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
        const extendDes = this.state.extendDescription;
        if (extendDes) {
            await this.setState(state => {
                return {
                    ...state,
                    editDescription: !state.editDescription
                }
            })
        }
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
    handleEditComment = async () => {
        await this.setState(state => {
            return {
                ...state,
                editComment: !state.editComment
            }
        })
    }
    startTimer = async () => {
        //Chỉnh giao diện
        document.getElementById("start-timer-task").style.width = "20%";
        document.getElementById("btn-approve").style.marginLeft = "50%";
        //Chỉnh trạng thái bấm giờ và update database
        await this.setState({
          time: this.state.time,
          timeStart: Date.now() - this.state.time,
          startTimer: true,
          pauseTimer: false
        })
        // Setup thời thời gian chạy
        this.timer = setInterval(() => this.setState({
          time: Date.now() - this.state.timeStart
        }), 1);
      }
    stopTimer = async () => {
        // Chỉnh giao diện
        document.getElementById("start-timer-task").style.width = "9%";
        document.getElementById("btn-approve").style.marginLeft = "80%";
        Swal.fire({
            title: "Thời gian đã làm: "+this.convertTime(this.state.time),
            type: 'success',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Lưu'
        }).then((res) => {
            // Update dữ liệu: Thời gian kết thúc, time = oldTime + newTime
            console.log("okokokok");
        });
        // reset trạng thái timer
        await this.setState(state => {
            return {
                ...state,
                time: 0,
                startTimer: false
            }
        })
        
    }
    pauseTimer = async () => {
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
    }
    convertTime = (duration) => {
        var milliseconds = parseInt((duration % 1000) / 100),
          seconds = Math.floor((duration / 1000) % 60),
          minutes = Math.floor((duration / (1000 * 60)) % 60),
          hours = Math.floor((duration / (1000 * 60 * 60)) % 24);
      
        hours = (hours < 10) ? "0" + hours : hours;
        minutes = (minutes < 10) ? "0" + minutes : minutes;
        seconds = (seconds < 10) ? "0" + seconds : seconds;
      
        return hours + ":" + minutes + ":" + seconds;
      }
    handleShowChildComment = async () => {
        await this.setState(state => {
            return {
                ...state,
                showChildComment: !state.showChildComment
            }
        })
    }
    render() {
        const { selected, extendDescription, editDescription, extendInformation, comment, editComment, startTimer, showChildComment, member, extendRBAC, time, pauseTimer} = this.state;
        return (
            <div className="modal modal-full fade" data-backdrop="false" id={`modelPerformTask${this.props.id}`} tabIndex={-1} role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                <div className="modal-dialog-full">
                    <div className="modal-content">
                        {/* Modal Header */}
                        <div className="modal-header">
                            <div className="col-sm-4">
                                <h3 className="modal-title" id="myModalLabel"><input style={{ border: "none", height: "6%", width: "100%" }} defaultValue="Công việc 1.2" /></h3>
                            </div>
                            <div className="col-sm-8" style={{ marginTop: "-6px" }}>
                                {/* <label className="col-sm-2 control-label" style={{ width: "21%", fontWeight: "500", marginTop: "5px", marginLeft: "-4%" }}>Tạo bởi Lê Thị Phương</label> */}
                                <div id="start-timer-task" className="col-sm-3" style={{ marginLeft: "-3%" , width: "9%"}}>
                                    {
                                        startTimer?
                                        <div className="run-timer" style={{border: "1px solid #d0d0d0", borderRadius:"50px", boxSizing: "border-box", zIndex: "6", boxShadow: "1px 1px 3px #ccc", width: "130px", height:"30px"}}>
                                            <a href="#abc" className="delete" title="Kết thúc" onClick={this.stopTimer}><i className="fa fa-stop" style={{fontSize: "10px", marginLeft: "6px", marginTop:"9px"}}></i></a>
                                            {pauseTimer?<a href="#abc" className="edit" title="Tiếp tục bấm giờ" onClick={this.startTimer}><i className="fa fa-play" style={{fontSize: "10px", marginLeft: "-7px"}}></i></a>
                                            :<a href="#abc" className="edit" title="Tạm dừng" onClick={this.pauseTimer}><i className="fa fa-pause" style={{fontSize: "10px", marginLeft: "-7px"}}></i></a>}
                                            <input value={this.convertTime(time)} style={{width: "60px", border: "none", background: "none", marginLeft: "-15px"}} disabled/>
                                        </div>:<a href="#abc" className="timer" title="Bắt đầu bấm giờ" onClick={this.startTimer}><i className="material-icons" style={{marginTop: "5px"}}>timer</i></a>
                                    }
                                </div>
                                <div className="col-sm-1" style={{ marginTop: "5px", marginLeft: "-5%" }}><a href="#abc" className="default" title="Xóa công việc này"><i className="material-icons">delete</i></a></div>
                                <div className="col-sm-3">
                                    <label className="col-sm-2 control-label" style={{ width: '61%', textAlign: 'left', marginTop: "5px", fontWeight: "500", marginLeft: "-25%" }}>Mức ưu tiên:</label>
                                    <div className="col-sm-10" style={{ width: '79%', marginLeft: "-15%" }}>
                                        <select defaultValue="Cao" className="form-control" ref={input => this.priority = input}>
                                            <option value="Cao">Cao</option>
                                            <option value="Trung bình">Trung bình</option>
                                            <option value="Thấp">Thấp</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="col-sm-4" style={{ marginLeft: "-6%" }}>
                                    <label className="col-sm-4 control-label" style={{ textAlign: 'left', width: "40%", marginTop: "5px", fontWeight: "500" }}>Trạng thái:</label>
                                    <div className="col-sm-10" style={{ width: '70%', marginLeft: "-12%" }}>
                                        <select defaultValue="Cao" className="form-control" ref={input => this.priority = input}>
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
                                    <button id="btn-approve" className="col-sm-8 btn btn-success" style={{ width: "119%", marginLeft: "80%", height: "32px" }}>Yêu cầu phê duyệt</button>
                                </div>
                                <button type="button" className="col-sm-1 close" style={{paddingLeft: "6%" }} data-dismiss="modal">
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
                                            <a href="#abc" className="default" title={extendDescription ? "Rút gọn" : "Mở rộng để xem nội dung mô tả"} onClick={this.handleChangeExtendDesciption}><i className={extendDescription ? "fa fa-chevron-circle-up" : "fa fa-chevron-circle-down"}></i></a>
                                            <h4 style={{ display: "inline" }}><b>Mô tả công việc</b></h4>
                                            <a href="#abc" className="edit" title="Bắt đầu bấm giờ" onClick={this.handleChangeEditDesciption}><i className="material-icons">edit</i></a>
                                        </label>
                                        {extendDescription ?
                                            (editDescription ?
                                                <textarea className="form-control" rows={5} value="Công việc chưa bắt đâu vào thực hiện. Nếu thực hiện trước hãy cập nhật lại thời gian thực hiện" style={{ width: "50%", height: "65px", marginLeft: "5%" }} />
                                                : <label className="control-label" style={{ textAlign: 'left', width: "40%", marginTop: "5px", marginLeft: "5%", fontWeight: "500" }}>Công việc chưa bắt đâu vào thực hiện. Nếu thực hiện trước hãy cập nhật lại thời gian thực hiện</label>)
                                            : null
                                        }
                                    </div>
                                    <div className="col-sm-12">
                                        <label className="control-label" style={{ textAlign: 'left', marginTop: "5px" }}>
                                            <a href="#abc" className="default" title={extendDescription ? "Rút gọn" : "Mở rộng xem thông tin phân định trách nhiệm"} onClick={this.handleChangeExtendRBAC}><i className={extendRBAC ? "fa fa-chevron-circle-down" : "fa fa-chevron-circle-up"}></i></a>
                                            <h4 style={{ display: "inline" }}><b>Phân định trách nhiệm (RBAC)</b></h4>
                                        </label>
                                    </div>
                                    <div className="col-sm-12">
                                        <div className='col-sm-12' style={{paddingTop: "10px"}}>
                                            <label className="col-sm-2 control-label" style={{ width: '12%', textAlign: 'left', fontWeight: "500" }}>Người tạo*</label>
                                            <div className="col-sm-8" style={{ width: '88%' }}>
                                                <select className="form-control select2" defaultValue={["abcdef123456789987654321"]} multiple="multiple" data-placeholder="Hãy chọn người thực hiện" style={{ width: '100%' }} ref={input => this.responsible = input}>
                                                    {member &&
                                                        member.map(x => {
                                                            return <option key={x._id} value={x._id}>{x.name}</option>
                                                        })}
                                                </select>
                                            </div>
                                        </div>
                                        <div className='col-sm-12' style={{paddingTop: "10px"}}>
                                            <label className="col-sm-2 control-label" style={{ width: '12%', textAlign: 'left', fontWeight: "500" }}>Người thực hiện*</label>
                                            <div className="col-sm-8" style={{ width: '88%' }}>
                                                <select className="form-control select2" defaultValue={["abcdef123456789987654321", "abcdef123456789987654322"]} multiple="multiple" data-placeholder="Hãy chọn người thực hiện" style={{ width: '100%' }} ref={input => this.responsible = input}>
                                                    {member &&
                                                        member.map(x => {
                                                            return <option key={x._id} value={x._id}>{x.name}</option>
                                                        })}
                                                </select>
                                            </div>
                                        </div>
                                        <div className='col-sm-12' style={{paddingTop: "10px"}}>
                                            <label className="col-sm-2 control-label" style={{ width: '12%', textAlign: 'left', fontWeight: "500" }}>Người phê duyệt*</label>
                                            <div className="col-sm-8" style={{ width: '88%' }}>
                                                <select className="form-control select2" defaultValue={["abcdef123456789987654323"]} multiple="multiple" data-placeholder="Hãy chọn người phê duyệt" style={{ width: '100%' }} ref={input => this.accounatable = input}>
                                                    {member &&
                                                        member.map(x => {
                                                            return <option key={x._id} value={x._id}>{x.name}</option>
                                                        })}
                                                </select>
                                            </div>
                                        </div>
                                        <div className='col-sm-12' style={{paddingTop: "10px"}}>
                                            <label className="col-sm-2 control-label" style={{ width: '12%', textAlign: 'left', fontWeight: "500" }}>Người hỗ trợ</label>
                                            <div className="col-sm-8" style={{ width: '88%' }}>
                                                <select className="form-control select2" defaultValue={["abcdef123456789987654324"]} multiple="multiple" data-placeholder="Hãy chọn người hỗ trợ" style={{ width: '100%' }} ref={input => this.consulted = input}>
                                                    {member &&
                                                        member.map(x => {
                                                            return <option key={x._id} value={x._id}>{x.name}</option>
                                                        })}
                                                </select>
                                            </div>
                                        </div>
                                        <div className='col-sm-12' style={{paddingTop: "10px"}}>
                                            <label className="col-sm-2 control-label" style={{ width: '12%', textAlign: 'left', fontWeight: "500" }}>Người quan sát</label>
                                            <div className="col-sm-8" style={{ width: '88%' }}>
                                                <select className="form-control select2" defaultValue={["abcdef123456789987654324"]} multiple="multiple" data-placeholder="Hãy chọn người quan sát" style={{ width: '100%' }} ref={input => this.informed = input}>
                                                    {member &&
                                                        member.map(x => {
                                                            return <option key={x._id} value={x._id}>{x.name}</option>
                                                        })}
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-12" style={{ marginBottom: "20px" }} >
                                        <label className="control-label" style={{ textAlign: 'left', marginTop: "5px", fontWeight: "500" }}>
                                            <a href="#abc" className="default" title={extendDescription ? "Rút gọn" : "Mở rộng xem thông tin công việc"} onClick={this.handleChangeExtendInformation}><i className={extendInformation ? "fa fa-chevron-circle-up" : "fa fa-chevron-circle-down"}></i></a>
                                            <h4 style={{ display: "inline" }}><b>Thông tin công việc</b></h4>
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
                                                        <input type="text" className="form-control" ref={input => this.startdate = input} name="time" id="datepicker4" data-date-format="dd-mm-yyyy" />
                                                    </div>
                                                </div>
                                                <div className="col-sm-4">
                                                    <label className="col-sm-2 control-label" style={{ width: '46%', textAlign: 'left', marginLeft: "-14px", fontWeight: "500" }}>Ngày kết thúc:</label>
                                                    <div className={'input-group date has-feedback col-sm-8'} style={{ width: '57%' }}>
                                                        <div className="input-group-addon">
                                                            <i className="fa fa-calendar" />
                                                        </div>
                                                        <input type="text" className="form-control" ref={input => this.startdate = input} name="time" id="datepicker5" data-date-format="dd-mm-yyyy" />
                                                    </div>
                                                </div>
                                                <div className="col-sm-4">
                                                    <div className='form-group has-feedback'>
                                                        <label className="col-sm-2 control-label" style={{ width: '40%', textAlign: 'left', fontWeight: "500" }}>Thời gian quá hạn:</label>
                                                        <div className="col-sm-8" style={{ width: '60%' }}>
                                                            <input type="Name" className="form-control" id="inputName3" placeholder="15h" ref={input => this.name = input} />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-sm-12">
                                                <div className="col-sm-4">
                                                    <div className='form-group has-feedback'>
                                                        <label className="col-sm-2 control-label" style={{ width: '40%', textAlign: 'left', fontWeight: "500" }}>Mức độ hoàn thành:</label>
                                                        <div className="col-sm-8" style={{ width: '60%' }}>
                                                            <input type="Name" className="form-control" id="inputName3" placeholder="0%" ref={input => this.name = input} />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-sm-4">
                                                    <div className='form-group has-feedback'>
                                                        <label className="col-sm-2 control-label" style={{ width: '40%', textAlign: 'left', fontWeight: "500" }}>Thời gian làm việc:</label>
                                                        <div className="col-sm-8" style={{ width: '60%' }}>
                                                            <input type="Name" className="form-control" id="inputName3" placeholder="15h" ref={input => this.name = input} />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-sm-4">
                                                    <div className='form-group has-feedback'>
                                                        <label className="col-sm-2 control-label" style={{ width: '40%', textAlign: 'left', fontWeight: "500" }}>Điểm tự đánh giá:</label>
                                                        <div className="col-sm-8" style={{ width: '60%' }}>
                                                            <input type="Name" className="form-control" id="inputName3" placeholder="80" ref={input => this.name = input} />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-sm-12">
                                                <div className="col-sm-4">
                                                    <div className='form-group has-feedback'>
                                                        <label className="col-sm-2 control-label" style={{ width: '40%', textAlign: 'left', fontWeight: "500" }}>Điểm hệ thống tính:</label>
                                                        <div className="col-sm-8" style={{ width: '60%' }}>
                                                            <input type="Name" className="form-control" id="inputName3" placeholder="75" ref={input => this.name = input} disabled />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-sm-4">
                                                    <div className='form-group has-feedback'>
                                                        <label className="col-sm-2 control-label" style={{ width: '40%', textAlign: 'left', fontWeight: "500" }}>Điểm quản lý chấm:</label>
                                                        <div className="col-sm-8" style={{ width: '60%' }}>
                                                            <input type="Name" className="form-control" id="inputName3" placeholder="80" ref={input => this.name = input} disabled />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-sm-1" style={{marginLeft: "22%"}}>
                                                    <button className="btn btn-success">Lưu thông tin</button>
                                                </div>
                                            </div>
                                        </React.Fragment>}
                                </div>
                            </form>
                            <div className="nav-tabs-custom">
                                <ul className="nav nav-tabs" style={{ borderTop: "solid", borderWidth: "thin", borderColor: "aliceblue" }}>
                                    <li className="active"><a href="#actionTask" onClick={() => this.handleChangeContent("actionTask")} data-toggle="tab">Hoạt động</a></li>
                                    <li><a href="#commentTask" onClick={() => this.handleChangeContent("commentTask")} data-toggle="tab">Trao đổi</a></li>
                                    <li><a href="#documentTask" onClick={() => this.handleChangeContent("documentTask")} data-toggle="tab">Tài liệu</a></li>
                                    <li><a href="#subTask" onClick={() => this.handleChangeContent("subTask")} data-toggle="tab">Công việc con</a></li>
                                </ul>
                                <div className="tab-content">
                                    <div className={selected === "actionTask" ? "active tab-pane" : "tab-pane"} id="actionTask">
                                        <div className="post">
                                            <div className="user-block" style={{ display: "inline-block" }}>
                                                <img className="img-circle img-bordered-sm" src="adminLTE/dist/img/user3-128x128.jpg" alt="user avatar" />
                                                <span className="username">
                                                    <a href="#abc">Lê Thị Phương</a>
                                                </span>
                                                <span className="description">19:30 19-11-2019</span>
                                            </div>
                                            <div className="action-comment" style={{ display: "inline-block" }}>
                                                <a href="#abc" title="Sửa hành động" className="edit" onClick={this.handleEditComment}><i className="material-icons">edit</i></a>
                                                <a href="#abc" title="Xóa hành động" className="delete"><i className="material-icons">delete</i></a>
                                            </div>
                                            <div className="comment-content" style={{ width: "fit-content", maxWidth: "70%" }}>
                                                {editComment?
                                                    <React.Fragment>
                                                        <textarea
                                                    style={{ width: '100%', height: 65, fontSize: 13, border: '1px solid #dddddd' }}
                                                    value="Lorem ipsum represents a long-held tradition for designers,
                                                    typographers and the like. Some people hate it and argue for
                                                    its demise, but others ignore the hate as they create awesome
                                                    tools to help create filler text for everyone from bacon lovers
                                                    to Charlie Sheen fans."
                                                    />
                                                    <div className="row action-post">
                                                        <input className="col-xs-8" type="file" name="attack-file" multiple="multiple" />
                                                        <button type="submit" style={{ width: "15%", marginRight: "2%" }} className="col-xs-2 btn btn-success btn-sm">Gửi chỉnh sửa</button>
                                                        <button type="cancel" style={{ width: "15%" }} className="col-xs-2 btn btn-default btn-sm" onClick={this.handleEditComment}>Hủy bỏ</button>
                                                    </div>
                                                    </React.Fragment>:
                                                    <React.Fragment>
                                                    <p>Em đã lập xong kế hoạch kiểm định chất lượng sản phẩm theo lô. Em gửi sếp tài liệu ạ.</p>
                                                    <div className="attach-file" style={{marginTop: "-10px"}}>
                                                        <a href="#abc">tailieu1v1.docx</a>
                                                    </div>
                                                    <ul className="list-inline">
                                                    <li className="pull-right">
                                                        <a href="#abc" className="link-black text-sm" onClick={this.handleShowChildComment}><i className="fa fa-comments-o margin-r-5" /> Comments(1)
                                                        </a>
                                                    </li>
                                                    </ul>
                                                    {showChildComment && 
                                                        <div className="comment-content-child" style={{marginLeft: "20px"}}>
                                                            <div className="form-group margin-bottom-none">
                                                                <div className="col-sm-2 user-block" style={{ width: "4%", marginTop: "2%" }}>
                                                                    <img className="img-circle img-bordered-sm" 
                                                                    src="adminLTE/dist/img/user3-128x128.jpg" alt="user avatar" 
                                                                    style={{height: "30px", width: "30px"}}/>
                                                                </div>
                                                                <div className="col-sm-9" >
                                                                    <p style={{marginBottom:"-2px"}}>Em gửi lại bản đã chỉnh sửa ạ</p>
                                                                    <div className="attach-file" style={{width: "fit-content", display: "inline-block"}}>
                                                                        <a href="#abc">tailieu1v2.docx</a>
                                                                    </div>
                                                                    <span className="description">19:30 19-11-2019</span>
                                                                    <div className="action-comment" style={{display: "inline-block"}}>
                                                                        <a href="#abc" title="Sửa hành động" className="edit" onClick={this.handleEditComment}><i className="material-icons">edit</i></a>
                                                                        <a href="#abc" title="Xóa hành động" className="delete"><i className="material-icons">delete</i></a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="comment-child-action" style={{marginLeft: "15px"}}>
                                                                <form className="form-horizontal" style={{ paddingTop: "12%" }}>
                                                                    <div className="form-group margin-bottom-none">
                                                                        <div className="col-sm-2 user-block" style={{ width: "4%", marginTop: "1%" }}>
                                                                            <img className="img-circle img-bordered-sm" 
                                                                            src="adminLTE/dist/img/user3-128x128.jpg" alt="user avatar" 
                                                                            style={{height: "30px", width: "30px"}}/>
                                                                        </div>
                                                                        <div className="col-sm-9" >
                                                                            <textarea placeholder="Hãy nhập nội dung"
                                                                                style={{ width: '127%', height: 40, fontSize: 13, border: '1px solid #dddddd' }}/>
                                                                                <div className="row action-post" style={{width: "133%"}}>
                                                                                    <input className="col-xs-7" type="file" name="attack-file" multiple="multiple" />
                                                                                    <button type="submit" style={{ width: "20%", marginRight: "2%" }} className="col-xs-2 btn btn-success btn-sm">Gửi bình luận</button>
                                                                                    <button type="cancel" style={{ width: "16%" }} className="col-xs-2 btn btn-default btn-sm" onClick={this.handleComment}>Hủy bỏ</button>
                                                                                </div>
                                                                        </div>
                                                                    </div>
                                                                </form>
                                                            </div>
                                                        </div>}
                                                    </React.Fragment>
                                                    }
                                            </div>
                                        </div>
                                        <form className="form-horizontal" style={{ paddingTop: "2%" }}>
                                            <div className="form-group margin-bottom-none">
                                                <div className="col-sm-2 user-block" style={{ width: "4%", marginTop: "1%" }}>
                                                    <img className="img-circle img-bordered-sm" src="adminLTE/dist/img/user3-128x128.jpg" alt="user avatar" />
                                                </div>
                                                <div className="col-sm-8" >
                                                    <textarea placeholder="Hãy nhập nội dung"
                                                        style={{ width: '100%', height: 65, fontSize: 13, border: '1px solid #dddddd' }}
                                                        onClick={this.handleComment} />
                                                    {comment &&
                                                        <div className="row action-post">
                                                            <input className="col-xs-8" type="file" name="attack-file" multiple="multiple" />
                                                            <button type="submit" style={{ width: "15%", marginRight: "2%" }} className="col-xs-2 btn btn-success btn-sm">Gửi bình luận</button>
                                                            <button type="cancel" style={{ width: "15%" }} className="col-xs-2 btn btn-default btn-sm" onClick={this.handleComment}>Hủy bỏ</button>
                                                        </div>}
                                                </div>
                                            </div>
                                        </form>
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
                        {/* <div className="modal-footer">
                            <button type="cancel" className="btn btn-primary" data-dismiss="modal">Đóng</button>
                        </div> */}
                        {/* Modal Footer */}
                    </div>
                </div>
            </div>
        );
    }
}

export { ModalPerformTask };