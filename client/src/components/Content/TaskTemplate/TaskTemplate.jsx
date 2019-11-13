import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ModalAddTaskTemplate } from './ModalAddTaskTemplate';
import { taskTemplateActions } from '../../../redux-actions/CombineActions';

class TaskTemplate extends Component {
    componentDidMount() {
        this.props.getTaskTemplateByUser(localStorage.getItem('id'), 1);
        let script = document.createElement('script');
        script.src = 'main/js/sortingTable.js';
        script.async = true;
        script.defer = true;
        document.body.appendChild(script);
        this.handleResizeColumn();
    }

    constructor(props) {
        super(props);
        this.state = {
            currentPage: 5
        };
    }

    handleResizeColumn = () => {
        window.$(function () {
            var pressed = false;
            var start = undefined;
            var startX, startWidth;

            window.$("table thead tr th").mousedown(function (e) {
                start = window.$(this);
                pressed = true;
                startX = e.pageX;
                startWidth = window.$(this).width();
                window.$(start).addClass("resizing");
            });

            window.$(document).mousemove(function (e) {
                if (pressed) {
                    window.$(start).width(startWidth + (e.pageX - startX));
                }
            });

            window.$(document).mouseup(function () {
                if (pressed) {
                    window.$(start).removeClass("resizing");
                    pressed = false;
                }
            });
        });
    }
    myFunction = () => {
        var input, filter, table, tr, td, i, txtValue;
        input = document.getElementById("myInput");
        filter = input.value.toLowerCase();
        table = document.getElementById("myTable");
        tr = table.getElementsByTagName("tr");
        for (i = 0; i < tr.length; i++) {
            td = tr[i].getElementsByTagName("td")[0];
            if (td) {
                txtValue = td.textContent || td.innerText;
                if (txtValue.toLowerCase().indexOf(filter) > -1) {
                    tr[i].style.display = "";
                } else {
                    tr[i].style.display = "none";
                }
            }
        }
    }

    updateCurrentPage = (number) => {
        this.setState(state => {
            return {
                ...state,
                currentPage: number
            }
        })
    }
    handleGetDataPagination = async (index) => {
        var oldCurrentPage = this.state.currentPage;
        await this.updateCurrentPage(index);
        if (oldCurrentPage !== index) this.props.getTaskTemplateByUser(localStorage.getItem('id'), index);
    }
    nextPage = async (pageTotal) => {
        var oldCurrentPage = this.state.currentPage;
        await this.setState(state => {
            return {
                ...state,
                currentPage: state.currentPage === pageTotal ? pageTotal : state.currentPage + 1
            }
        })
        var newCurrentPage = this.state.currentPage;
        if (oldCurrentPage !== newCurrentPage) this.props.getTaskTemplateByUser(localStorage.getItem('id'), this.state.currentPage);
    }
    backPage = async () => {
        var oldCurrentPage = this.state.currentPage;
        await this.setState(state => {
            return {
                ...state,
                currentPage: state.currentPage === 1 ? 1 : state.currentPage - 1
            }
        })
        var newCurrentPage = this.state.currentPage;
        if (oldCurrentPage !== newCurrentPage) this.props.getTaskTemplateByUser(localStorage.getItem('id'), this.state.currentPage);
    }
    render() {
        var list, pageTotal;
        const { tasktemplates } = this.props;
        const { currentPage } = this.state;
        if (tasktemplates.items) list = tasktemplates.items;
        if (tasktemplates.pageTotal) pageTotal = tasktemplates.pageTotal;
        const items = [];
        if (pageTotal > 5) {
            if (currentPage < 3) {
                for (let i = 0; i < 5; i++) {
                    items.push(<li key={i + 1} className={currentPage === i + 1 ? "active" : ""}><a href="#abc" onClick={() => this.handleGetDataPagination(i + 1)}>{i + 1}</a></li>);
                }
                items.push(<li className="disable" key={pageTotal}><a href="#abc">...</a></li>);
            } else if (currentPage >= pageTotal - 3) {
                items.push(<li className="disable" key={0}><a href="#abc">...</a></li>);
                for (let i = pageTotal - 5; i < pageTotal; i++) {
                    items.push(<li key={i + 1} className={currentPage === i + 1 ? "active" : ""}><a href="#abc" onClick={() => this.handleGetDataPagination(i + 1)}>{i + 1}</a></li>);
                }
            } else {
                items.push(<li className="disable" key={0}><a href="#abc">...</a></li>);
                for (let i = currentPage - 2; i < currentPage + 3; i++) {
                    items.push(<li key={i + 1} className={currentPage === i + 1 ? "active" : ""}><a href="#abc" onClick={() => this.handleGetDataPagination(i + 1)}>{i + 1}</a></li>);
                }
                items.push(<li className="disable" key={pageTotal + 1}><a href="#abc">...</a></li>);
            }
        } else {
            for (let i = 0; i < pageTotal; i++) {
                items.push(<li key={i + 1} className={currentPage === i + 1 ? "active" : ""}><a href="#abc" onClick={() => this.handleGetDataPagination(i + 1)}>{i + 1}</a></li>);
            }
        }
        return (
            <div className="content-wrapper">
                <section className="content-header">
                    <h1>
                        Quản lý mẫu công việc
                    </h1>
                    <ol className="breadcrumb">
                        <li><a href="#abc"><i className="fa fa-dashboard" /> Home</a></li>
                        <li><a href="#abc">TaskTemplate</a></li>
                        <li className="active">Data tables</li>
                    </ol>
                </section>
                {/* Main content */}
                <section className="content">
                    <div className="row">
                        <div className="col-xs-12">
                            <div className="box">
                                <div className="box-header">
                                    <div className="row">
                                        <div className="col-xs-10">
                                            <h3 className="box-title">Bảng danh sách mẫu công việc</h3>
                                        </div>

                                    </div>
                                </div>
                                {/* /.box-header */}
                                <div className="box-body">
                                    <div style={{ paddingBottom: "5%" }}>
                                        <div className="col-xs-3 input-container">
                                            <i className="fa fa-search icon-search"></i>
                                            <input className="form-control" id="myInput" type="text" placeholder="Tìm kiếm theo tên" onKeyUp={() => this.myFunction()} />
                                        </div>
                                        <div>
                                            <select id="multiselect" multiple="multiple">
                                                <option value="http://ipv4.download.thinkbroadband.com/5MB.zip">Option 1</option>
                                                <option value="http://ipv4.download.thinkbroadband.com/10MB.zip">Option 2</option>
                                                <option value="http://ipv4.download.thinkbroadband.com/20MB.zip">Option 3</option>
                                                <option value="http://ipv4.download.thinkbroadband.com/50MB.zip">Option 4</option>
                                            </select>
                                        </div>
                                        <div className="col-xs-2 col-xs-offset-7">
                                            {/* {
                                                this.getPermision().createForm && */}
                                            <button type="button" className="btn btn-success" data-toggle="modal" data-target="#myModalHorizontal" data-backdrop="static" data-keyboard="false" style={{ marginLeft: "-12%" }}>Thêm 1 mẫu công việc</button>
                                            {/* } */}
                                            <ModalAddTaskTemplate />
                                        </div>
                                    </div>

                                    <table className="table table-bordered table-striped" id="myTable">
                                        <thead>
                                            <tr>
                                                <th>Tên mẫu công việc</th>
                                                <th>Mô tả</th>
                                                <th>Số lần sử dụng</th>
                                                <th>Người tạo mẫu</th>
                                                <th>Đơn vị</th>
                                                <th>Hoạt động</th>
                                            </tr>
                                        </thead>
                                        <tbody id="people">
                                            {
                                                (typeof list !== 'undefined' && list.length !== 0) ?
                                                    list.map(item =>
                                                        <tr key={item.resource._id}>
                                                            <td>{item.resource.name}</td>
                                                            <td>{item.resource.description}</td>
                                                            <td>{item.resource.count}</td>
                                                            <td>{item.resource.creator.name}</td>
                                                            <td>{item.resource.unit.name}</td>
                                                            <td>
                                                                <a href="#abc" className="edit" title="Edit"><i className="material-icons"></i></a>
                                                                <a href="#abc" className="delete" title="Delete"><i className="material-icons"></i></a>
                                                            </td>
                                                        </tr>
                                                    ) : null
                                            }
                                        </tbody>
                                    </table>
                                    <div className="row pagination-new">
                                        <ul className="pagination" style={{ margin: "auto" }}>
                                            <li><a href="#abc" onClick={() => this.backPage()}>«</a></li>
                                            {items}
                                            <li><a href="#abc" onClick={() => this.nextPage(pageTotal)}>»</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div >
        );
    }
}

function mapState(state) {
    const { tasktemplates } = state;
    return { tasktemplates };
}

const actionCreators = {
    getTaskTemplateByUser: taskTemplateActions.getAllTaskTemplateByUser
};
const connectedTaskTemplate = connect(mapState, actionCreators)(TaskTemplate);
export { connectedTaskTemplate as TaskTemplate };