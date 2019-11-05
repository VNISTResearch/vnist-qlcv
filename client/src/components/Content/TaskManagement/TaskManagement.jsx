import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ModalAddTask } from './ModalAddTask';
import { taskManagementActions } from '../../../redux-actions/CombineActions';

class TaskManagement extends Component {
    UNSAFE_componentWillMount() {
        this.props.getTaskByRole(localStorage.getItem('id'), localStorage.getItem('currentRole'))
        let script = document.createElement('script');
        script.src = 'main/js/GridTable.js';
        script.async = true;
        script.defer = true;
        document.body.appendChild(script);
    }
    constructor(props) {
        super(props);
        this.state = {
            role: []
        };
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

    list_to_tree = (list) => {
        var map = {}, node, roots = [], i, newarr = [];
        for (i = 0; i < list.length; i += 1) {
            map[list[i]._id] = i; // initialize the map
            list[i].children = []; // initialize the children
        }
        // console.log(map);
        for (i = 0; i < list.length; i += 1) {
            node = list[i];
            if (node.parent !== "") {
                // if you have dangling branches check that map[node.parentId] exists
                list[map[node.parent]].children.push(node);
            } else {
                roots.push(node);
            }
        }
        let change = (arr) => {
            arr.map(item => {
                newarr.push(item);
                change(item.children);
                return true;
            });
            return newarr;
        }
        let flat = change(roots).map(x => delete x.children && x);
        console.log(flat);
        return flat;
    }

    render() {
        var listTasks;
        const { tasks } = this.props;
        if (tasks.items) listTasks = tasks.items;
        console.log(listTasks);
        return (
            <div className="content-wrapper">
                <section className="content-header">
                    <h1>
                        Danh sách công việc
                    </h1>
                    <ol className="breadcrumb">
                        <li><a href="#abc"><i className="fa fa-dashboard" /> Home</a></li>
                        <li><a href="#abc">TaskTemplate</a></li>
                        <li className="active">Data tables</li>
                    </ol>
                </section>
                <section className="content">
                    <div className="nav-tabs-custom">
                        <ul className="nav nav-tabs">
                            <li className="active"><a href="#all" data-toggle="tab">Tất cả</a></li>
                            <li><a href="#timeline" data-toggle="tab">Ưu tiên</a></li>
                            <li><a href="#activity" data-toggle="tab">Đang thực hiện</a></li>
                            <li><a href="#settings" data-toggle="tab">Theo quy trình</a></li>
                            <li><a href="#settings" data-toggle="tab">Chờ</a></li>
                            <li><a href="#settings" data-toggle="tab">Quá hạn</a></li>
                            <li><a href="#settings" data-toggle="tab">Hoàn thành</a></li>
                            <li><a href="#settings" data-toggle="tab">Tạm dừng</a></li>
                            <li><a href="#settings" data-toggle="tab">Đã hủy</a></li>
                            <li><a href="#settings" data-toggle="tab">Kho lưu</a></li>
                        </ul>
                        <div className="tab-content">
                            <div className="active tab-pane" id="all">
                                <div className="form-group">
                                    <label className="col-sm-12 control-label">Vai trò của bạn:</label>
                                    <div style={{ marginLeft: "5%" }}>
                                        <div className="col-sm-10">
                                            <label className="col-sm-3 control-label" style={{ width: "18%", fontWeight: "400" }}>Người tạo</label>
                                            <input type="checkbox" className="flat-red col-sm-8" defaultChecked />
                                        </div>
                                        <div className="col-sm-10">
                                            <label className="col-sm-3 control-label" style={{ width: "18%", fontWeight: "400" }}>Người thực hiện</label>
                                            <input type="checkbox" className="flat-red col-sm-8" defaultChecked />
                                        </div>
                                        <div className="col-sm-10">
                                            <label className="col-sm-3 control-label" style={{ width: "18%", fontWeight: "400" }}>Người phê duyệt</label>
                                            <input type="checkbox" className="flat-red col-sm-8" defaultChecked />
                                        </div>
                                        <div className="col-sm-10">
                                            <label className="col-sm-3 control-label" style={{ width: "18%", fontWeight: "400" }}>Người quan sát</label>
                                            <input type="checkbox" className="flat-red col-sm-8" defaultChecked />
                                        </div>
                                        <div className="col-sm-2">
                                            <button type="button" className="btn btn-success" data-toggle="modal" data-target="#myModalHorizontal" data-backdrop="static" data-keyboard="false" style={{ marginTop: "-25%" }}>Thêm công việc</button>
                                            <ModalAddTask />
                                        </div>
                                    </div>
                                </div>
                                <table id="tree-table" className="table table-hover table-bordered">
                                    <thead>
                                        <tr>
                                            <th style={{ width: "20%" }}>Tên công việc</th>
                                            <th>Trạng thái</th>
                                            <th>Tiến độ</th>
                                            <th>Độ ưu tiên</th>
                                            <th>Bắt đầu</th>
                                            <th>Kết thúc</th>
                                            <th>Thời gian</th>
                                            <th style={{width: "15%"}}><center>Hành động</center></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            (typeof listTasks !== 'undefined' && listTasks.length !== 0) ?
                                                this.list_to_tree(listTasks).map(item =>
                                                    <tr key={item._id} data-id={item._id} data-parent={item.parent} data-level={item.level}>
                                                        <td data-column="name">{item.name}</td>
                                                        <td>{item.status === 1 ? "Đang chờ" : "Đang thực hiện"}</td>
                                                        <td>0%</td>
                                                        <td>{item.priority}</td>
                                                        <td>{this.formatDate(item.startdate)}</td>
                                                        <td>{this.formatDate(item.enddate)}</td>
                                                        <td>0</td>
                                                        <td>
                                                            <a href="#abc" className="star" title="Ưu tiên"><i className="material-icons">star</i></a>
                                                            <a href="#abc" className="timer" title="Bấm giờ"><i className="material-icons">timer</i></a>
                                                            <a href="#abc" className="add_circle" title="Thêm mới"><i className="material-icons">add_circle</i></a>
                                                            <a href="#abc" className="all_inbox" title="Kho"><i className="material-icons">all_inbox</i></a>
                                                        </td>
                                                    </tr>
                                                ) : null
                                        }
                                    </tbody>
                                </table>
                            </div>
                            <div className="tab-pane" id="activity">
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
                                {/* Post */}
                                <div className="post">
                                    <div className="user-block">
                                        <img className="img-circle img-bordered-sm" src="adminLTE/dist/img/user6-128x128.jpg" alt="user avatar" />
                                        <span className="username">
                                            <a href="#abc">Adam Jones</a>
                                            <a href="#abc" className="pull-right btn-box-tool"><i className="fa fa-times" /></a>
                                        </span>
                                        <span className="description">Posted 5 photos - 5 days ago</span>
                                    </div>
                                    {/* /.user-block */}
                                    <div className="row margin-bottom">
                                        <div className="col-sm-6">
                                            <img className="img-responsive" src="adminLTE/dist/img/photo1.png" alt="hình ảnh" />
                                        </div>
                                        {/* /.col */}
                                        <div className="col-sm-6">
                                            <div className="row">
                                                <div className="col-sm-6">
                                                    <img className="img-responsive" src="adminLTE/dist/img/photo2.png" alt="hình ảnh" />
                                                    <br />
                                                    <img className="img-responsive" src="adminLTE/dist/img/photo3.jpg" alt="hình ảnh" />
                                                </div>
                                                {/* /.col */}
                                                <div className="col-sm-6">
                                                    <img className="img-responsive" src="adminLTE/dist/img/photo4.jpg" alt="hình ảnh" />
                                                    <br />
                                                    <img className="img-responsive" src="adminLTE/dist/img/photo1.png" alt="hình ảnh" />
                                                </div>
                                                {/* /.col */}
                                            </div>
                                            {/* /.row */}
                                        </div>
                                        {/* /.col */}
                                    </div>
                                    {/* /.row */}
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
                            </div>
                            {/* /.tab-pane */}
                            <div className="tab-pane" id="timeline">
                                {/* The timeline */}
                                <ul className="timeline timeline-inverse">
                                    {/* timeline time label */}
                                    <li className="time-label">
                                        <span className="bg-red">
                                            10 Feb. 2014
          </span>
                                    </li>
                                    {/* /.timeline-label */}
                                    {/* timeline item */}
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
                            {/* /.tab-pane */}
                            <div className="tab-pane" id="settings">
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
                            {/* /.tab-pane */}
                        </div>
                        {/* /.tab-content */}
                    </div>
                    {/* /.nav-tabs-custom */}

                </section>
            </div>
        );
    }
}

function mapState(state) {
    const { tasks } = state;
    return { tasks };
}

const actionCreators = {
    getTaskByRole: taskManagementActions.getAllTaskByRole
};
const connectedTaskManagement = connect(mapState, actionCreators)(TaskManagement);
export { connectedTaskManagement as TaskManagement };