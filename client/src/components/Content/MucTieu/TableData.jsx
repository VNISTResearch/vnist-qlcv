import React, { Component } from 'react';

class TableData extends Component {
    render() {
        return (
            <div className="box">
                <div className="box-header">
                    <h3 className="box-title">{this.props.title}</h3>
                    <div className="box-tools">
                        <ul className="pagination pagination-sm no-margin pull-right">
                            <li><a href="#abc">«</a></li>
                            <li><a href="#abc">1</a></li>
                            <li><a href="#abc">2</a></li>
                            <li><a href="#abc">3</a></li>
                            <li><a href="#abc">»</a></li>
                        </ul>
                    </div>
                </div>
                {/* /.box-header */}
                <div className="box-body no-padding">
                    <table className="table">
                        <tbody>
                            <tr>
                                <th style={{ width: 10 }}>#</th>
                                <th>Task</th>
                                <th>Progress</th>
                                <th style={{ width: 40 }}>Label</th>
                            </tr>
                            <tr>
                                <td>1.</td>
                                <td>Update software</td>
                                <td>
                                    <div className="progress progress-xs">
                                        <div className="progress-bar progress-bar-danger" style={{ width: '55%' }} />
                                    </div>
                                </td>
                                <td><span className="badge bg-red">55%</span></td>
                            </tr>
                            <tr>
                                <td>2.</td>
                                <td>Clean database</td>
                                <td>
                                    <div className="progress progress-xs">
                                        <div className="progress-bar progress-bar-yellow" style={{ width: '70%' }} />
                                    </div>
                                </td>
                                <td><span className="badge bg-yellow">70%</span></td>
                            </tr>
                            <tr>
                                <td>3.</td>
                                <td>Cron job running</td>
                                <td>
                                    <div className="progress progress-xs progress-striped active">
                                        <div className="progress-bar progress-bar-primary" style={{ width: '30%' }} />
                                    </div>
                                </td>
                                <td><span className="badge bg-light-blue">30%</span></td>
                            </tr>
                            <tr>
                                <td>4.</td>
                                <td>Fix and squish bugs</td>
                                <td>
                                    <div className="progress progress-xs progress-striped active">
                                        <div className="progress-bar progress-bar-success" style={{ width: '90%' }} />
                                    </div>
                                </td>
                                <td><span className="badge bg-green">90%</span></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                {/* /.box-body */}
            </div>
        );
    }
}

export default TableData;