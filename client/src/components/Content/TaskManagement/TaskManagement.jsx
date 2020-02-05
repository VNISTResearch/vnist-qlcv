import React, { Component } from 'react';
import { TabTaskContent } from './TabTaskContent';

class TaskManagement extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentTab: "responsible",
        };
    }
    handleChangeTab = async (role) => {
        let script = document.createElement('script');
        script.src = 'main/js/GridTableVers1.js';
        script.async = true;
        script.defer = true;
        document.body.appendChild(script);
        await this.setState(state => {
            return {
                ...state,
                currentTab: role
            }
        })
    }
    render() {
        const { currentTab } = this.state
        return (
            <div className="content-wrapper">
                <section className="content-header">
                    <h1>
                        Danh sách công việc
                    </h1>
                    <ol className="breadcrumb">
                        <li><a href="/"><i className="fa fa-dashboard" /> Trang chủ</a></li>
                        <li><a href="/task-management">Quản lý công việc</a></li>
                    </ol>
                </section>
                <section className="content">
                    <div className="nav-tabs-custom">
                        <ul className="nav nav-tabs">
                            <li className="active"><a href="#responsible" data-toggle="tab" onClick={() => this.handleChangeTab("responsible")}>Thực hiện chính</a></li>
                            <li><a href="#accountable" data-toggle="tab" onClick={() => this.handleChangeTab("accountable")}>Phê duyệt</a></li>
                            <li><a href="#consulted" data-toggle="tab" onClick={() => this.handleChangeTab("consulted")}>Hỗ trợ thực hiện</a></li>
                            <li><a href="#creator" data-toggle="tab" onClick={() => this.handleChangeTab("creator")}>Thiết lập</a></li>
                            <li><a href="#informed" data-toggle="tab" onClick={() => this.handleChangeTab("informed")}>Quan sát</a></li>
                        </ul>
                        <div className="tab-content">
                            <div className="active tab-pane" id="responsible">
                                {currentTab === "responsible" && <TabTaskContent role="responsible" />}
                            </div>
                            <div className="tab-pane" id="accountable">
                                {currentTab === "accountable" && <TabTaskContent role="accountable" />}
                            </div>
                            <div className="tab-pane" id="consulted">
                                {currentTab === "consulted" && <TabTaskContent role="consulted" />}
                            </div>
                            <div className="tab-pane" id="creator">
                                {currentTab === "creator" && <TabTaskContent role="creator" />}
                            </div>
                            <div className="tab-pane" id="informed">
                                {currentTab === "informed" && <TabTaskContent role="informed" />}
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}
export { TaskManagement };
