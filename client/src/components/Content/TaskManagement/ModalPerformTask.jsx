import React, { Component } from 'react';

class ModalPerformTask extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: "actionTask",
            extendDescription: false,
            editDescription: false,
            extendInformation: true
        }
    }
    componentDidMount() {
        this.handleLoadJS();
    }
    handleLoadJS = () => {
        let script = document.createElement('script');
        script.src = 'main/js/CoCauToChuc.js';
        script.async = true;
        script.defer = true;
        document.body.appendChild(script);
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
    render() {
        const { selected, extendDescription, editDescription, extendInformation } = this.state;
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
                                <label className="col-sm-2 control-label" style={{ width: "21%", fontWeight: "500", marginTop: "5px", marginLeft: "-4%" }}>Tạo bởi Lê Thị Phương</label>
                                <div className="col-sm-1" style={{ marginTop: "5px", marginLeft: "-3%" }}><a href="#abc" className="timer" title="Bắt đầu bấm giờ"><i className="material-icons">timer</i></a></div>
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
                                    <button className="col-sm-8 btn btn-success" style={{ width: "119%", marginLeft: "-32%", height: "32px" }}>Yêu cầu phê duyệt</button>
                                </div>
                                <button type="button" className="col-sm-1 close" style={{ marginTop: "-3%", paddingLeft: "6%" }} data-dismiss="modal">
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
                                            <h4 style={{ display: "inline" }}><b>Mô tả công việc:</b></h4>
                                            <a href="#abc" className="edit" title="Bắt đầu bấm giờ" onClick={this.handleChangeEditDesciption}><i className="material-icons">edit</i></a>
                                        </label>
                                        {extendDescription ?
                                            (editDescription ?
                                                <textarea className="form-control" rows={5} value="Công việc chưa bắt đâu vào thực hiện. Nếu thực hiện trước hãy cập nhật lại thời gian thực hiện" style={{ width: "50%", height: "65px", marginLeft: "5%" }} />
                                                : <label className="control-label" style={{ textAlign: 'left', width: "40%", marginTop: "5px", marginLeft: "5%", fontWeight: "500" }}>Công việc chưa bắt đâu vào thực hiện. Nếu thực hiện trước hãy cập nhật lại thời gian thực hiện</label>)
                                            : null
                                        }
                                    </div>
                                    <div className="col-sm-12" style={{ marginBottom: "20px" }} >
                                        <label className="control-label" style={{ textAlign: 'left', marginTop: "5px" }}>
                                            <a href="#abc" className="default" title={extendDescription ? "Rút gọn" : "Mở rộng xem thông tin công việc"} onClick={this.handleChangeExtendInformation}><i className={extendInformation ? "fa fa-chevron-circle-up" : "fa fa-chevron-circle-down"}></i></a>
                                            <h4 style={{ display: "inline" }}><b>Thông tin công việc:</b></h4>
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
                                                <div className="col-sm-4">
                                                    <button className="btn btn-success">Lưu thông tin</button>
                                                </div>
                                            </div>
                                        </React.Fragment>}
                                </div>
                            </form>
                            <div className="nav-tabs-custom">
                                <ul className="nav nav-tabs" style={{ borderTop: "solid", borderWidth: "thin", borderColor: "aliceblue" }}>
                                    <li className="active"><a href="#actionTask" onClick={() => this.handleChangeContent("actionTask")} data-toggle="tab">Hoạt động</a></li>
                                    <li><a href="#subTask" onClick={() => this.handleChangeContent("subTask")} data-toggle="tab">Công việc con</a></li>
                                    <li><a href="#commentTask" onClick={() => this.handleChangeContent("commentTask")} data-toggle="tab">Trao đổi</a></li>
                                    <li><a href="#documentTask" onClick={() => this.handleChangeContent("documentTask")} data-toggle="tab">Tài liệu</a></li>
                                </ul>
                                <div className="tab-content">
                                    <div className={selected === "actionTask" ? "active tab-pane" : "tab-pane"} id="actionTask">
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
                                            <p>
                                                Lorem ipsum represents a long-held tradition for designers,
                                                typographers and the like. Some people hate it and argue for
                                                its demise, but others ignore the hate as they create awesome
                                                tools to help create filler text for everyone from bacon lovers
                                                to Charlie Sheen fans.
        </p>
                                            <ul className="list-inline">
                                                <li><a href="#abc" className="link-black text-sm"><i className="fa fa-share margin-r-5" /> Share</a></li>
                                                <li><a href="#abc" className="link-black text-sm"><i className="fa fa-thumbs-o-up margin-r-5" /> Like</a>
                                                </li>
                                                <li className="pull-right">
                                                    <a href="#abc" className="link-black text-sm"><i className="fa fa-comments-o margin-r-5" /> Comments
              (5)</a></li>
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
                                    <div className={selected === "subTask" ? "active tab-pane" : "tab-pane"} id="subTask"></div>
                                    <div className={selected === "commentTask" ? "active tab-pane" : "tab-pane"} id="commentTask">
                                        <ul className="timeline timeline-inverse">
                                            <li className="time-label">
                                                <span className="bg-red">
                                                    10 Feb. 2014
                                        </span>
                                            </li>
                                            <li>
                                                <i className="fa fa-envelope bg-blue" />
                                                <div className="timeline-item">
                                                    <span className="time"><i className="fa fa-clock-o" /> 12:05</span>
                                                    <h3 className="timeline-header"><a href="#abc">Support Team</a> sent you an email</h3>
                                                    <div className="timeline-body">
                                                        Etsy doostang zoodles disqus groupon greplin oooj voxy zoodles,
                                                        weebly ning heekya handango imeem plugg dopplr jibjab, movity
                                                        jajah plickers sifteo edmodo ifttt zimbra. Babblely odeo kaboodle
                                                        quora plaxo ideeli hulu weebly balihoo...
            </div>
                                                    <div className="timeline-footer">
                                                        <a href="#abc" className="btn btn-primary btn-xs">Read more</a>
                                                        <a href="#abc" className="btn btn-danger btn-xs">Delete</a>
                                                    </div>
                                                </div>
                                            </li>
                                            {/* END timeline item */}
                                            {/* timeline item */}
                                            <li>
                                                <i className="fa fa-user bg-aqua" />
                                                <div className="timeline-item">
                                                    <span className="time"><i className="fa fa-clock-o" /> 5 mins ago</span>
                                                    <h3 className="timeline-header no-border"><a href="#abc">Sarah Young</a> accepted your friend request
            </h3>
                                                </div>
                                            </li>
                                            {/* END timeline item */}
                                            {/* timeline item */}
                                            <li>
                                                <i className="fa fa-comments bg-yellow" />
                                                <div className="timeline-item">
                                                    <span className="time"><i className="fa fa-clock-o" /> 27 mins ago</span>
                                                    <h3 className="timeline-header"><a href="#abc">Jay White</a> commented on your post</h3>
                                                    <div className="timeline-body">
                                                        Take me to your leader!
                                                        Switzerland is small and neutral!
                                                        We are more like Germany, ambitious and misunderstood!
            </div>
                                                    <div className="timeline-footer">
                                                        <a href="#abc" className="btn btn-warning btn-flat btn-xs">View comment</a>
                                                    </div>
                                                </div>
                                            </li>
                                            {/* END timeline item */}
                                            {/* timeline time label */}
                                            <li className="time-label">
                                                <span className="bg-green">
                                                    3 Jan. 2014
          </span>
                                            </li>
                                            {/* /.timeline-label */}
                                            {/* timeline item */}
                                            <li>
                                                <i className="fa fa-camera bg-purple" />
                                                <div className="timeline-item">
                                                    <span className="time"><i className="fa fa-clock-o" /> 2 days ago</span>
                                                    <h3 className="timeline-header"><a href="#abc">Mina Lee</a> uploaded new photos</h3>
                                                    <div className="timeline-body">
                                                        <img src="http://placehold.it/150x100" alt="..." className="margin" />
                                                        <img src="http://placehold.it/150x100" alt="..." className="margin" />
                                                        <img src="http://placehold.it/150x100" alt="..." className="margin" />
                                                        <img src="http://placehold.it/150x100" alt="..." className="margin" />
                                                    </div>
                                                </div>
                                            </li>
                                            {/* END timeline item */}
                                            <li>
                                                <i className="fa fa-clock-o bg-gray" />
                                            </li>
                                        </ul>
                                    </div>
                                    <div className={selected === "documentTask" ? "active tab-pane" : "tab-pane"} id="documentTask">
                                        <form className="form-horizontal">
                                            <div className="form-group">
                                                <label htmlFor="inputName" className="col-sm-2 control-label">Name</label>
                                                <div className="col-sm-10">
                                                    <input type="email" className="form-control" id="inputName" placeholder="Name" />
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="inputEmail" className="col-sm-2 control-label">Email</label>
                                                <div className="col-sm-10">
                                                    <input type="email" className="form-control" id="inputEmail" placeholder="Email" />
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="inputName" className="col-sm-2 control-label">Name</label>
                                                <div className="col-sm-10">
                                                    <input type="text" className="form-control" id="inputName" placeholder="Name" />
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="inputExperience" className="col-sm-2 control-label">Experience</label>
                                                <div className="col-sm-10">
                                                    <textarea className="form-control" id="inputExperience" placeholder="Experience" defaultValue={""} />
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="inputSkills" className="col-sm-2 control-label">Skills</label>
                                                <div className="col-sm-10">
                                                    <input type="text" className="form-control" id="inputSkills" placeholder="Skills" />
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <div className="col-sm-offset-2 col-sm-10">
                                                    <div className="checkbox">
                                                        <label>
                                                            <input type="checkbox" /> I agree to the <a href="#abc">terms and conditions</a>
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <div className="col-sm-offset-2 col-sm-10">
                                                    <button type="submit" className="btn btn-danger">Submit</button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
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