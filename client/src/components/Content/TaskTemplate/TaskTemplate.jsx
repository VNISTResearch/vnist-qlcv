import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ModalAddTaskTemplate } from './ModalAddTaskTemplate';
import { taskTemplateActions } from '../../../redux-actions/CombineActions';

class TaskTemplate extends Component {
    UNSAFE_componentWillMount() {
        this.props.getTaskTemplateByRole(localStorage.getItem('currentRole'));
        let script = document.createElement('script');
        script.src = 'main/js/Table.js';
        script.async = true;
        script.defer = true;
        document.body.appendChild(script);
    }

    constructor(props) {
        super(props);
        this.state = {
            forms: []
        };
    }

    render() {
        var list;
        const { tasktemplates } = this.props;
        if (tasktemplates.items) list = tasktemplates.items;
        console.log(list);
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
                                        <div className="col-xs-2">
                                            {/* {
                                                this.getPermision().createForm && */}
                                            <button type="button" className="btn btn-success" data-toggle="modal" data-target="#myModalHorizontal" data-backdrop="static" data-keyboard="false" style={{ marginLeft: "-12%" }}>Thêm 1 mẫu công việc</button>
                                            {/* } */}
                                            <ModalAddTaskTemplate />
                                        </div>
                                    </div>
                                </div>
                                {/* /.box-header */}
                                <div className="box-body">
                                    <table className="table table-bordered table-striped">
                                        <thead>
                                            <tr>
                                                <th>Tên mẫu công việc</th>
                                                <th>Mô tả</th>
                                                <th>Số lần sử dụng</th>
                                                <th>Người tạo mẫu</th>
                                                <th>Hoạt động</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                (typeof list !== 'undefined' && list.length !== 0) ?
                                                    list.map(item =>
                                                        <tr key={item.resource._id}>
                                                            <td>{item.resource.name}</td>
                                                            <td>{item.resource.description}</td>
                                                            <td>{item.resource.count}</td>
                                                            <td>{item.resource.creator.name}</td>
                                                            <td>
                                                                <a href="#abc" className="edit" title="Edit"><i className="material-icons"></i></a>
                                                                <a href="#abc" className="delete" title="Delete"><i className="material-icons"></i></a>
                                                            </td>
                                                        </tr>
                                                    ) : null
                                            }
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

function mapState(state) {
    const { tasktemplates } = state;
    return { tasktemplates };
}

const actionCreators = {
    getTaskTemplateByRole: taskTemplateActions.getAllTaskTemplateByRole
};
const connectedTaskTemplate = connect(mapState, actionCreators)(TaskTemplate);
export { connectedTaskTemplate as TaskTemplate };