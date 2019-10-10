import React, { Component } from 'react';
import { KPITarget, KPIInfo, DataTable, ItemSelectMember } from '../KPIItems/CombineKPIItems';

class KPIPersonal extends Component {
    render() {
        return (
            <div className="content-wrapper">
                <section className="content-header">
                    <h1>
                        KPI cá nhân
                        <small>Preview</small>
                    </h1>
                    <ol className="breadcrumb">
                        <li><a href="/"><i className="fa fa-dashboard" /> Home</a></li>
                        <li><a href="/">Forms</a></li>
                        <li className="active">Advanced Elements</li>
                    </ol>
                </section>
                <section className="content">
                    <div className="box box-default">
                        <div className="box-header with-border">
                            <h3 className="box-title">Thêm KPI</h3>
                            <div className="box-tools pull-right">
                                <button type="button" className="btn btn-box-tool" data-widget="collapse"><i className="fa fa-minus" /></button>
                            </div>
                        </div>
                        <div className="box-body">
                            <form name="form">
                                <div className="row">
                                    <KPITarget type="2" />
                                    <KPIInfo />
                                    <div name="action" className="col-xs-6">
                                        <div className="col-xs-4 col-xs-offset-4">
                                            <button type="submit" className="btn btn-success btn-block btn-flat">Lưu</button>
                                        </div>
                                        <div className="col-xs-4">
                                            <button type="cancel" className="btn btn-primary btn-block btn-flat">Hủy</button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="box box-default">
                        <div className="box-header with-border">
                            <h3 className="box-title">Danh sách KPI</h3>
                            <div className="box-tools pull-right">
                                <button type="button" className="btn btn-box-tool" data-widget="collapse"><i className="fa fa-minus" /></button>
                            </div>
                        </div>
                        <div className="box-body">
                            <div className="row">
                                {/* <div className="col-sm-3">
                                    <ItemSelectMember />
                                </div> */}
                                {/* <div className="form-group col-sm-3">
                                    <label className="col-sm-4 control-label" htmlFor="inputUsername3" style={{ width: '100%', textAlign: 'left' }}>Nhân viên:</label>
                                    <div className="col-sm-10" style={{ width: '100%' }}>
                                        
                                    </div>
                                </div> */}
                            </div>
                            <DataTable />
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export { KPIPersonal };