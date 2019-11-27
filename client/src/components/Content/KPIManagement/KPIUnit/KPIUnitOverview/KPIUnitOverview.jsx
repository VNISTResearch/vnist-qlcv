import React, { Component } from 'react';
import { ModalDetailKPI } from './ModalDetailKPI';

class KPIUnitOverview extends Component {
    UNSAFE_componentWillMount(){
            let script = document.createElement('script');
            script.src = '/main/js/Table.js';
            script.async = true;
            script.defer = true;
            document.body.appendChild(script);
            this.showChart();
            this.handleResizeColumn();
    }
    handleResizeColumn = () => {
        window.$(function () {
            var pressed = false;
            var start = undefined;
            var startX, startWidth;

            window.$("table thead tr th:not(:last-child)").mousedown(function (e) {
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
    showChart = () => {
        window.$(function () {
            /*
             * BAR CHART
             * ---------
             */
        
            var bar_data = {
                data: [['5-2019', 90], ['6-2019', 90], ['7-2019', 95], ['8-2019', 90], ['9-2019', 85], ['10-2019', 95]],
                color: '#3c8dbc'
            }
            window.$.plot('#bar-chart', [bar_data], {
                grid: {
                    borderWidth: 1,
                    borderColor: '#f3f3f3',
                    tickColor: '#f3f3f3'
                },
                series: {
                    bars: {
                        show: true,
                        barWidth: 0.5,
                        align: 'center'
                    }
                },
                xaxis: {
                    mode: 'categories',
                    tickLength: 0
                }
            })
            /* END BAR CHART */
        
            /*
             * DONUT CHART
             * -----------
             */
        
            var donutData = [
                { label: 'Mục tiêu 1', data: 30, color: '#3c8dbc' },
                { label: 'Mục tiêu 2', data: 20, color: '#0073b7' },
                { label: 'Mục tiêu 3', data: 20, color: '#00c0ef' },
                { label: 'Mục tiêu 4', data: 30, color: '#B1D1E4' }
            ]
            window.$.plot('#donut-chart', donutData, {
                series: {
                    pie: {
                        show: true,
                        radius: 1,
                        innerRadius: 0.5,
                        label: {
                            show: true,
                            radius: 2 / 3,
                            formatter: labelFormatter,
                            threshold: 0.1
                        }
        
                    }
                },
                legend: {
                    show: false
                }
            })
            /*
             * END DONUT CHART
             */
        
            /*
            * Custom Label formatter
            * ----------------------
            */
            function labelFormatter(label, series) {
                return '<div style="font-size:13px; text-align:center; padding:2px; color: #fff; font-weight: 600;">'
                    + label
                    + '<br>'
                    + Math.round(series.percent) + '%</div>'
            }
        })
        
        window.$(function () {
            /* ChartJS
             * -------
             * Here we will create a few charts using ChartJS
             */
            //-------------
            //- PIE CHART -
            //-------------
            // Get context with jQuery - using jQuery's .get() method.
            var pieChartCanvas = window.$('#pieChart').get(0).getContext('2d');
            var pieChart       = new window.Chart(pieChartCanvas);
            var PieData        = [
              {
                value    : 20,
                color    : '#f56954',
                highlight: '#f56954',
                label    : 'Thực hiện đúng quy định chung của công ty'
              },
              {
                value    : 30,
                color    : '#00a65a',
                highlight: '#00a65a',
                label    : 'Đảm bảo chất lượng sản phẩm theo lô'
              },
              {
                value    : 30,
                color    : '#f39c12',
                highlight: '#f39c12',
                label    : 'Hoàn thành các khóa đào đạo bắt buộc'
              },
              {
                value    : 20,
                color    : '#00c0ef',
                highlight: '#00c0ef',
                label    : 'Đảm bảo chất lượng sản phẩm'
              }
            //   },
            //   {
            //     value    : 300,
            //     color    : '#3c8dbc',
            //     highlight: '#3c8dbc',
            //     label    : 'Opera'
            //   },
            //   {
            //     value    : 100,
            //     color    : '#d2d6de',
            //     highlight: '#d2d6de',
            //     label    : 'Navigator'
            //   }
            ]
            var pieOptions     = {
              //Boolean - Whether we should show a stroke on each segment
              segmentShowStroke    : true,
              //String - The colour of each segment stroke
              segmentStrokeColor   : '#fff',
              //Number - The width of each segment stroke
              segmentStrokeWidth   : 2,
              //Number - The percentage of the chart that we cut out of the middle
              percentageInnerCutout: 50, // This is 0 for Pie charts
              //Number - Amount of animation steps
              animationSteps       : 100,
              //String - Animation easing effect
              animationEasing      : 'easeOutBounce',
              //Boolean - Whether we animate the rotation of the Doughnut
              animateRotate        : true,
              //Boolean - Whether we animate scaling the Doughnut from the centre
              animateScale         : false,
              //Boolean - whether to make the chart responsive to window resizing
              responsive           : true,
              // Boolean - whether to maintain the starting aspect ratio or not when responsive, if set to false, will take up entire container
              maintainAspectRatio  : true,
              //String - A legend template
              legendTemplate       : '<ul class="<%=name.toLowerCase()%>-legend"><% for (var i=0; i<segments.length; i++){%><li><span style="background-color:<%=segments[i].fillColor%>"></span><%if(segments[i].label){%><%=segments[i].label%><%}%></li><%}%></ul>'
            }
            //Create pie or douhnut chart
            // You can switch between pie and douhnut using the method below.
            pieChart.Doughnut(PieData, pieOptions)
          })
    }
    render() {
        return (
            <div className="table-wrapper">
                <div className="content-wrapper">
                    <section className="content-header">
                        <h1>
                            Tổng quan KPI đơn vị
                        </h1>
                        <ol className="breadcrumb">
                            <li><a href="/"><i className="fa fa-dashboard" /> Trang chủ</a></li>
                            <li><a href="/">Quản lý kpi</a></li>
                            <li className="active">Kpi đơn vị</li>
                            <li className="active">Tổng quan kpi đơn vị</li>
                        </ol>
                    </section>
                    <section className="content">
                        <div className="row">
                            <div className="col-xs-6">
                                {/* Bar chart */}
                                <div className="box box-primary">
                                    <div className="box-header with-border">
                                        <i className="fa fa-bar-chart-o" />
                                        <h3 className="box-title">Kết quả KPI 6 tháng gần nhất</h3>
                                        <div className="box-tools pull-right">
                                            <button type="button" className="btn btn-box-tool" data-widget="collapse"><i className="fa fa-minus" />
                                            </button>
                                        </div>
                                    </div>
                                    <div className="box-body">
                                        <div id="bar-chart" style={{ height: 300 }} />
                                    </div>
                                    {/* /.box-body*/}
                                </div>
                                {/* /.box */}
                            </div>
                            <div className="col-xs-6">
                                <div className="box box-danger">
                                    <div className="box-header with-border">
                                        <h3 className="box-title">Phân bố nhân lực theo mục tiêu tháng 11
                                        <small>Di chuyển chuột vào từng vùng để xem</small>
                                        </h3>
                                        <div className="box-tools pull-right">
                                            <button type="button" className="btn btn-box-tool" data-widget="collapse"><i className="fa fa-minus" />
                                            </button>
                                        </div>
                                    </div>
                                    <div className="box-body" style={{ height: "300px"}}>
                                        <canvas id="pieChart" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-xs-12">
                                <div className="box">
                                    <div className="box-header">
                                        <h3 className="box-title">Bảng danh sách kpi đơn vị hàng tháng</h3>
                                    </div>
                                    <div className="box-body">
                                        <table id="example1" className="table table-bordered table-striped">
                                            <thead>
                                                <tr>
                                                    <th title="Người tạo">Người tạo</th>
                                                    <th title="Thời gian">Thời gian</th>
                                                    <th title="Số lượng mục tiêu">Số lượng mục tiêu</th>
                                                    <th title="Kết quả đánh giá">Kết quả đánh giá</th>
                                                    <th>Hành động</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>Lê Thị Phương</td>
                                                    <td>11-2019</td>
                                                    <td>4</td>
                                                    <td>0</td>
                                                    <td>
                                                        <a href={`#dataResultTask1`} data-toggle="modal" title="Xem chi tiết KPI tháng này" ><i className="material-icons">view_list</i></a>
                                                        <ModalDetailKPI id={1}/>
                                                        <a href="#abc" className="copy" title="Thiết lập kpi tháng 12 từ kpi tháng này"><i className="material-icons">content_copy</i></a>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>Lê Thị Phương</td>
                                                    <td>10-2019</td>
                                                    <td>4</td>
                                                    <td>95</td>
                                                    <td>
                                                        <a href="#myModalHorizontal1" data-toggle="modal" title="Xem chi tiết KPI tháng này" data-target="#myModalHorizontal1"><i className="material-icons">view_list</i></a>
                                                        <a href="#abc" className="copy" title="Thiết lập kpi tháng 12 từ kpi tháng này" data-toggle="tooltip"><i className="material-icons">content_copy</i></a>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>Lê Thị Phương</td>
                                                    <td>09-2019</td>
                                                    <td>5</td>
                                                    <td>90</td>
                                                    <td>
                                                        <a href="#myModalHorizontal1" data-toggle="modal" title="Xem chi tiết KPI tháng này" data-target="#myModalHorizontal1"><i className="material-icons">view_list</i></a>
                                                        <a href="#abc" className="copy" title="Thiết lập kpi tháng 12 từ kpi tháng này" data-toggle="tooltip"><i className="material-icons">content_copy</i></a>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>Lê Thị Phương</td>
                                                    <td>08-2019</td>
                                                    <td>4</td>
                                                    <td>95</td>
                                                    <td>
                                                        <a href="#myModalHorizontal1" data-toggle="modal" title="Xem chi tiết KPI tháng này" data-target="#myModalHorizontal1"><i className="material-icons">view_list</i></a>
                                                        <a href="#abc" className="copy" title="Thiết lập kpi tháng 12 từ kpi tháng này" data-toggle="tooltip"><i className="material-icons">content_copy</i></a>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>Lê Thị Phương</td>
                                                    <td>07-2019</td>
                                                    <td>5</td>
                                                    <td>90</td>
                                                    <td>
                                                        <a href="#myModalHorizontal1" data-toggle="modal" title="Xem chi tiết KPI tháng này" data-target="#myModalHorizontal1"><i className="material-icons">view_list</i></a>
                                                        <a href="#abc" className="copy" title="Thiết lập kpi tháng 12 từ kpi tháng này" data-toggle="tooltip"><i className="material-icons">content_copy</i></a>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>Lê Thị Phương</td>
                                                    <td>06-2019</td>
                                                    <td>4</td>
                                                    <td>95</td>
                                                    <td>
                                                        <a href="#myModalHorizontal1" data-toggle="modal" title="Xem chi tiết KPI tháng này" data-target="#myModalHorizontal1"><i className="material-icons">view_list</i></a>
                                                        <a href="#abc" className="copy" title="Thiết lập kpi tháng 12 từ kpi tháng này" data-toggle="tooltip"><i className="material-icons">content_copy</i></a>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>Lê Thị Phương</td>
                                                    <td>05-2019</td>
                                                    <td>4</td>
                                                    <td>95</td>
                                                    <td>
                                                        <a href="#myModalHorizontal1" data-toggle="modal" title="Xem chi tiết KPI tháng này" data-target="#myModalHorizontal1"><i className="material-icons">view_list</i></a>
                                                        <a href="#abc" className="copy" title="Thiết lập kpi tháng 12 từ kpi tháng này" data-toggle="tooltip"><i className="material-icons">content_copy</i></a>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>Lê Thị Phương</td>
                                                    <td>04-2019</td>
                                                    <td>4</td>
                                                    <td>80</td>
                                                    <td>
                                                        <a href="#myModalHorizontal1" data-toggle="modal" title="Xem chi tiết KPI tháng này" data-target="#myModalHorizontal1"><i className="material-icons">view_list</i></a>
                                                        <a href="#abc" className="copy" title="Thiết lập kpi tháng 12 từ kpi tháng này" data-toggle="tooltip"><i className="material-icons">content_copy</i></a>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>Lê Thị Phương</td>
                                                    <td>10-2019</td>
                                                    <td>4</td>
                                                    <td>95</td>
                                                    <td>
                                                        <a href="#myModalHorizontal1" data-toggle="modal" title="Xem chi tiết KPI tháng này" data-target="#myModalHorizontal1"><i className="material-icons">view_list</i></a>
                                                        <a href="#abc" className="copy" title="Thiết lập kpi tháng 12 từ kpi tháng này" data-toggle="tooltip"><i className="material-icons">content_copy</i></a>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>Lê Thị Phương</td>
                                                    <td>10-2019</td>
                                                    <td>4</td>
                                                    <td>95</td>
                                                    <td>
                                                        <a href="#myModalHorizontal1" data-toggle="modal" title="Xem chi tiết KPI tháng này" data-target="#myModalHorizontal1"><i className="material-icons">view_list</i></a>
                                                        <a href="#abc" className="copy" title="Thiết lập kpi tháng 12 từ kpi tháng này" data-toggle="tooltip"><i className="material-icons">content_copy</i></a>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>Lê Thị Phương</td>
                                                    <td>10-2019</td>
                                                    <td>4</td>
                                                    <td>95</td>
                                                    <td>
                                                        <a href="#myModalHorizontal1" data-toggle="modal" title="Xem chi tiết KPI tháng này" data-target="#myModalHorizontal1"><i className="material-icons">view_list</i></a>
                                                        <a href="#abc" className="copy" title="Thiết lập kpi tháng 12 từ kpi tháng này" data-toggle="tooltip"><i className="material-icons">content_copy</i></a>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>Lê Thị Phương</td>
                                                    <td>10-2019</td>
                                                    <td>4</td>
                                                    <td>95</td>
                                                    <td>
                                                        <a href="#myModalHorizontal1" data-toggle="modal" title="Xem chi tiết KPI tháng này" data-target="#myModalHorizontal1"><i className="material-icons">view_list</i></a>
                                                        <a href="#abc" className="copy" title="Thiết lập kpi tháng 12 từ kpi tháng này" data-toggle="tooltip"><i className="material-icons">content_copy</i></a>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        );
    }
}

export { KPIUnitOverview };