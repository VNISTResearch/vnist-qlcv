import React, { Component } from 'react';
import CanvasJSReact from '../TaskManagement/Chart/canvasjs.react';
class ModalViewReport extends Component {
    constructor() {
        super();
        this.toggleDataSeries = this.toggleDataSeries.bind(this);
    }
    componentDidMount() {
        let script = document.createElement('script');
        script.src = '/main/js/Table.js';
        script.async = true;
        script.defer = true;
        document.body.appendChild(script);
    }
    toggleDataSeries(e) {
        if (typeof (e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
            e.dataSeries.visible = false;
        }
        else {
            e.dataSeries.visible = true;
        }
        this.chart.render();
    }
    render() {
        const options = {
            animationEnabled: true,
            exportEnabled: true,
            title: {
                text: "Thống kê số lượng sản phẩm thuốc nước kiểm thử theo tháng",
                fontFamily: "verdana"
            },
            axisY: {
                title: "Số lượng sản phẩm",
                includeZero: false,
                fontWight: 13
            },
            axisX: {
                title: "Thời gian",
                includeZero: false,
                fontWight: 13
            },
            toolTip: {
                shared: true,
                reversed: true
            },
            legend: {
                verticalAlign: "center",
                horizontalAlign: "right",
                reversed: true,
                cursor: "pointer",
                itemclick: this.toggleDataSeries
            },
            width: 850,
            height: 250,
            data: [
                {
                    type: "stackedColumn",
                    name: "Số lượng đạt tiêu chuẩn",
                    showInLegend: true,
                    yValueFormatString: "#,###k",
                    dataPoints: [
                        { label: "1-2019", y: 13 },
                        { label: "2-2019", y: 13 },
                        { label: "3-2019", y: 15 },
                        { label: "4-2019", y: 16 },
                        { label: "5-2019", y: 17 },
                        { label: "6-2019", y: 17 },
                        { label: "7-2019", y: 18 },
                        { label: "8-2019", y: 18 },
                        { label: "9-2019", y: 17 },
                        { label: "10-2019", y: 18 },
                        { label: "11-2019", y: 18 },
                        { label: "12-2019", y: 18 }
                    ]
                },
                {
                    type: "stackedColumn",
                    name: "Số lượng sản phẩm lỗi",
                    showInLegend: true,
                    yValueFormatString: "#,###k",
                    dataPoints: [
                        { label: "1-2019", y: 14 },
                        { label: "2-2019", y: 8 },
                        { label: "3-2019", y: 6 },
                        { label: "4-2019", y: 6 },
                        { label: "5-2019", y: 5 },
                        { label: "6-2019", y: 5 },
                        { label: "7-2019", y: 6 },
                        { label: "8-2019", y: 3 },
                        { label: "9-2019", y: 9 },
                        { label: "10-2019", y: 5 },
                        { label: "11-2019", y: 8 },
                        { label: "12-2019", y: 2 },
                    ]
                },
                {
                    type: "stackedColumn",
                    name: "Số lượng sản chưa kiểm thử",
                    showInLegend: true,
                    yValueFormatString: "#,###k",
                    dataPoints: [
                        { label: "1-2019", y: 13 },
                        { label: "2-2019", y: 13 },
                        { label: "3-2019", y: 15 },
                        { label: "4-2019", y: 15 },
                        { label: "5-2019", y: 15 },
                        { label: "6-2019", y: 15 },
                        { label: "7-2019", y: 16 },
                        { label: "8-2019", y: 17 },
                        { label: "9-2019", y: 17 },
                        { label: "10-2019", y: 18 },
                        { label: "11-2019", y: 19 },
                        { label: "12-2019", y: 20 },
                    ]
                }]
        }
        return (
            <div className="modal modal-full fade" id={`viewreporttask${this.props.id}`} tabIndex={-1} role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                <div className="modal-dialog-full">
                    <div className="modal-content">
                        {/* Modal Header */}
                        <div className="modal-header">
                            <button type="button" className="close" data-dismiss="modal">
                                <span aria-hidden="true">×</span>
                                <span className="sr-only">Close</span>
                            </button>
                            <h3 className="modal-title" id="myModalLabel">Báo cáo kiểm thử sản phẩm thuốc nước tháng 12</h3>
                        </div>
                        {/* Modal Body */}
                        <div className="modal-body modal-body-perform-task" >
                            <form className="form-horizontal">
                                <div className="row">
                                    <div className="col-sm-12">
                                        <div className="col-sm-8">
                                            <CanvasJSReact options={options} onRef={ref => this.chart = ref} />
                                        </div>
                                        <div className="col-sm-4" style={{ background: "beige" }}>
                                            <div className='form-group'>
                                                <label className="col-sm-5 control-label" style={{ width: '100%', textAlign: 'left' }}>Đơn vị: Phòng đảm bảo chất lượng</label>
                                            </div>
                                            <div className='form-group' style={{ marginTop: "-5%" }}>
                                                <label className="col-sm-5 control-label" style={{ width: '100%', textAlign: 'left' }}>Người thực hiện: Phan Thanh Hùng</label>
                                            </div>
                                            <div className='form-group' style={{ marginTop: "-5%" }}>
                                                <label className="col-sm-5 control-label" style={{ width: '100%', textAlign: 'left' }}>Thời gian tạo: 02-01-2020</label>
                                            </div>
                                            <div className='form-group'>
                                                <button className="btn btn-success" style={{ marginLeft: "10%" }} title="Xuất dữ liệu của biểu đồ ra file excel">Xuất file excel từ biểu đồ</button>
                                            </div>
                                            <div className='form-group'>
                                                <button className="btn btn-success" style={{ marginLeft: "10%" }} title="Xuất dữ liệu của bảng ra file excel">Xuất file excel từ bảng</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-12">
                                        <table className="table table-bordered table-striped"  id="example4">
                                            <thead>
                                                <tr>
                                                    <th>Tên công việc</th>
                                                    <th>Người thực hiện</th>
                                                    <th>Người phê duyệt</th>
                                                    <th>Người điểm hệ thống tính</th>
                                                    <th>Số lượng cần kiểm thử</th>
                                                    <th>Số lượng đã kiểm thử</th>
                                                    <th>Số lượng đạt tiêu chuẩn</th>
                                                </tr>
                                            </thead>
                                            <tbody className="task-table">
                                                <tr>
                                                    <td>Công việc số 1</td>
                                                    <td>Phan Thanh Hùng</td>
                                                    <td>Lê Thị Phương</td>
                                                    <td>85</td>
                                                    <td>20</td>
                                                    <td>20</td>
                                                    <td>18</td>
                                                </tr>
                                                <tr>
                                                    <td>Công việc số 2</td>
                                                    <td>Nguyễn Thị Thư</td>
                                                    <td>Lê Thị Phương</td>
                                                    <td>85</td>
                                                    <td>20</td>
                                                    <td>20</td>
                                                    <td>18</td>
                                                </tr>
                                                <tr>
                                                    <td>Công việc số 3</td>
                                                    <td>Đinh Thanh Hải</td>
                                                    <td>Lê Thị Phương</td>
                                                    <td>90</td>
                                                    <td>20</td>
                                                    <td>18</td>
                                                    <td>18</td>
                                                </tr>
                                                <tr>
                                                    <td>Công việc số 4</td>
                                                    <td>Phan Thanh Hùng</td>
                                                    <td>Nguyễn Viết Thái</td>
                                                    <td>95</td>
                                                    <td>20</td>
                                                    <td>20</td>
                                                    <td>28</td>
                                                </tr>
                                                <tr>
                                                    <td>Công việc số 5</td>
                                                    <td>Bùi Văn Huy</td>
                                                    <td>Lê Thị Phương</td>
                                                    <td>90</td>
                                                    <td>10</td>
                                                    <td>10</td>
                                                    <td>10</td>
                                                </tr>
                                                <tr>
                                                    <td>Công việc số 6</td>
                                                    <td>Phan Thanh Hùng</td>
                                                    <td>Lê Thị Phương</td>
                                                    <td>85</td>
                                                    <td>20</td>
                                                    <td>20</td>
                                                    <td>18</td>
                                                </tr>
                                                <tr>
                                                    <td>Công việc số 7</td>
                                                    <td>Nguyễn Thị Thư</td>
                                                    <td>Lê Thị Phương</td>
                                                    <td>85</td>
                                                    <td>20</td>
                                                    <td>20</td>
                                                    <td>18</td>
                                                </tr>
                                                <tr>
                                                    <td>Công việc số 8</td>
                                                    <td>Đinh Thanh Hải</td>
                                                    <td>Lê Thị Phương</td>
                                                    <td>90</td>
                                                    <td>20</td>
                                                    <td>18</td>
                                                    <td>18</td>
                                                </tr>
                                                <tr>
                                                    <td>Công việc số 9</td>
                                                    <td>Phan Thanh Hùng</td>
                                                    <td>Nguyễn Viết Thái</td>
                                                    <td>95</td>
                                                    <td>20</td>
                                                    <td>20</td>
                                                    <td>28</td>
                                                </tr>
                                                <tr>
                                                    <td>Công việc số 10</td>
                                                    <td>Bùi Văn Huy</td>
                                                    <td>Lê Thị Phương</td>
                                                    <td>90</td>
                                                    <td>10</td>
                                                    <td>10</td>
                                                    <td>10</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div >
        );
    }
}

export { ModalViewReport };