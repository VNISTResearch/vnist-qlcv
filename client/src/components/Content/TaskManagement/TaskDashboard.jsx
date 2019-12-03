import React, { Component } from 'react';
import CanvasJSReact from './Chart/canvasjs.react';

class TaskDashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userID: "",
        };
    }
    componentDidMount() {
        this.handleLoadDataCalendar();
    }
    handleLoadDataCalendar = () => {
        window.$(function () {

            // /* initialize the external events
            //  -----------------------------------------------------------------*/
            // function init_events(ele) {
            //   ele.each(function () {

            //     // create an Event Object (http://arshaw.com/fullcalendar/docs/event_data/Event_Object/)
            //     // it doesn't need to have a start or end
            //     var eventObject = {
            //       title: window.$.trim(window.$(this).text()) // use the element's text as the event title
            //     }

            //     // store the Event Object in the DOM element so we can get to it later
            //     window.$(this).data('eventObject', eventObject)

            //     // make the event draggable using jQuery UI
            //     // window.$(this).draggable({
            //     //   zIndex        : 1070,
            //     //   revert        : true, // will cause the event to go back to its
            //     //   revertDuration: 0  //  original position after the drag
            //     // })

            //   })
            // }

            // init_events(window.$('#external-events div.external-event'))

            /* initialize the calendar
             -----------------------------------------------------------------*/
            //Date for the calendar events (dummy data)
            var date = new Date()
            var d = date.getDate(),
                m = date.getMonth(),
                y = date.getFullYear()
            window.$('#calendarTask').fullCalendar({
                header: {
                    left: 'prev,next today',
                    center: 'title',
                    right: 'month,agendaWeek,agendaDay'
                },
                buttonText: {
                    today: 'today',
                    month: 'month',
                    week: 'week',
                    day: 'day'
                },
                //Random default events
                events: [
                    {
                        title: 'Hoàn thành quy trình kiểm thử',
                        start: new Date(y, m, 1),
                        backgroundColor: '#f56954', //red
                        borderColor: '#f56954' //red
                    },
                    {
                        title: 'Long Event',
                        start: new Date(y, m, d - 5),
                        end: new Date(y, m, d - 2),
                        backgroundColor: '#f39c12', //yellow
                        borderColor: '#f39c12' //yellow
                    },
                    {
                        title: 'Meeting',
                        start: new Date(y, m, d, 10, 30),
                        allDay: false,
                        backgroundColor: '#0073b7', //Blue
                        borderColor: '#0073b7' //Blue
                    },
                    {
                        title: 'Lunch',
                        start: new Date(y, m, d, 12, 0),
                        end: new Date(y, m, d, 14, 0),
                        allDay: false,
                        backgroundColor: '#00c0ef', //Info (aqua)
                        borderColor: '#00c0ef' //Info (aqua)
                    },
                    {
                        title: 'Birthday Party',
                        start: new Date(y, m, d + 1, 19, 0),
                        end: new Date(y, m, d + 1, 22, 30),
                        allDay: false,
                        backgroundColor: '#00a65a', //Success (green)
                        borderColor: '#00a65a' //Success (green)
                    },
                    {
                        title: 'Click for Google',
                        start: new Date(y, m, 28),
                        end: new Date(y, m, 29),
                        url: 'http://google.com/',
                        backgroundColor: '#3c8dbc', //Primary (light-blue)
                        borderColor: '#3c8dbc' //Primary (light-blue)
                    }
                ],
                editable: false,
                droppable: false, // this allows things to be dropped onto the calendar !!!
                drop: function (date, allDay) { // this function is called when something is dropped

                    // // retrieve the dropped element's stored Event Object
                    // var originalEventObject = window.$(this).data('eventObject')

                    // // we need to copy it, so that multiple events don't have a reference to the same object
                    // var copiedEventObject = window.$.extend({}, originalEventObject)

                    // // assign it the date that was reported
                    // copiedEventObject.start           = date
                    // copiedEventObject.allDay          = allDay
                    // copiedEventObject.backgroundColor = window.$(this).css('background-color')
                    // copiedEventObject.borderColor     = window.$(this).css('border-color')

                    // // render the event on the calendar
                    // // the last `true` argument determines if the event "sticks" (http://arshaw.com/fullcalendar/docs/event_rendering/renderEvent/)
                    // window.$('#calendarTask').fullCalendar('renderEvent', copiedEventObject, true)

                    // // is the "remove after drop" checkbox checked?
                    // if (window.$('#drop-remove').is(':checked')) {
                    //   // if so, remove the element from the "Draggable Events" list
                    //   window.$(this).remove()
                    // }

                }
            })

            // /* ADDING EVENTS */
            // var currColor = '#3c8dbc' //Red by default
            // //Color chooser button
            // var colorChooser = window.$('#color-chooser-btn')
            // window.$('#color-chooser > li > a').click(function (e) {
            //   e.preventDefault()
            //   //Save color
            //   currColor = window.$(this).css('color')
            //   //Add color effect to button
            //   window.$('#add-new-event').css({ 'background-color': currColor, 'border-color': currColor })
            // })
            // window.$('#add-new-event').click(function (e) {
            //   e.preventDefault()
            //   //Get value and make sure it is not null
            //   var val = window.$('#new-event').val()
            //   if (val.length == 0) {
            //     return
            //   }

            //   //Create events
            //   var event = window.$('<div />')
            //   event.css({
            //     'background-color': currColor,
            //     'border-color'    : currColor,
            //     'color'           : '#fff'
            //   }).addClass('external-event')
            //   event.html(val)
            //   window.$('#external-events').prepend(event)

            //   //Add draggable funtionality
            // //   init_events(event)

            //   //Remove event from text input
            //   window.$('#new-event').val('')
            // })
        })
    }
    generateDataPoints(noOfDps) {
		var xVal = 1, yVal = 100;
		var dps = [];
		for(var i = 0; i < noOfDps; i++) {
			yVal = yVal +  Math.round(5 + Math.random() *(-5-5));
			dps.push({x: xVal,y: yVal});	
			xVal++;
		}
		return dps;
	}
    render() {
        const options1 = {
            animationEnabled: true,
            exportEnabled: true,
            theme: "light2", //"light1", "dark1", "dark2"
            title: {
                text: "Simple Column Chart with Index Labels"
            },
            data: [{
                type: "column", //change type to bar, line, area, pie, etc				
                indexLabelFontColor: "#5A5757",
                indexLabelPlacement: "outside",
                dataPoints: [
                    { x: 10, y: 71 },
                    { x: 20, y: 55 },
                    { x: 30, y: 50 },
                    { x: 40, y: 65 },
                    { x: 50, y: 71 },
                    { x: 60, y: 68 },
                    { x: 70, y: 38 },
                    { x: 80, y: 92, indexLabel: "Highest" },
                    { x: 90, y: 54 },
                    { x: 100, y: 60 },
                    { x: 110, y: 21 },
                    { x: 120, y: 49 },
                    { x: 130, y: 36 }
                ]
            }]
        }
        const options2 = {
            animationEnabled: true,
            title: {
                text: "Daily High Temperature at Different Beaches"
            },
            axisX: {
                valueFormatString: "DD MMM,YY"
            },
            axisY: {
                title: "Temperature (in °C)",
                includeZero: false,
                suffix: " °C"
            },
            legend: {
                cursor: "pointer",
                fontSize: 16,
                itemclick: window.toggleDataSeries
            },
            toolTip: {
                shared: true
            },
            data: [{
                name: "Myrtle Beach",
                type: "spline",
                yValueFormatString: "#0.## °C",
                showInLegend: true,
                dataPoints: [
                    { x: new Date(2017, 6, 24), y: 31 },
                    { x: new Date(2017, 6, 25), y: 31 },
                    { x: new Date(2017, 6, 26), y: 29 },
                    { x: new Date(2017, 6, 27), y: 29 },
                    { x: new Date(2017, 6, 28), y: 31 },
                    { x: new Date(2017, 6, 29), y: 30 },
                    { x: new Date(2017, 6, 30), y: 29 }
                ]
            },
            {
                name: "Martha Vineyard",
                type: "spline",
                yValueFormatString: "#0.## °C",
                showInLegend: true,
                dataPoints: [
                    { x: new Date(2017, 6, 24), y: 20 },
                    { x: new Date(2017, 6, 25), y: 20 },
                    { x: new Date(2017, 6, 26), y: 25 },
                    { x: new Date(2017, 6, 27), y: 25 },
                    { x: new Date(2017, 6, 28), y: 25 },
                    { x: new Date(2017, 6, 29), y: 25 },
                    { x: new Date(2017, 6, 30), y: 25 }
                ]
            },
            {
                name: "Nantucket",
                type: "spline",
                yValueFormatString: "#0.## °C",
                showInLegend: true,
                dataPoints: [
                    { x: new Date(2017, 6, 24), y: 22 },
                    { x: new Date(2017, 6, 25), y: 19 },
                    { x: new Date(2017, 6, 26), y: 23 },
                    { x: new Date(2017, 6, 27), y: 24 },
                    { x: new Date(2017, 6, 28), y: 24 },
                    { x: new Date(2017, 6, 29), y: 23 },
                    { x: new Date(2017, 6, 30), y: 23 }
                ]
            }]
        }
        const options3 = {
			theme: "light2", // "light1", "dark1", "dark2"
			animationEnabled: true,
			zoomEnabled: true,
			title: {
				text: "Try Zooming and Panning"
			},
			axisY: {
				includeZero: false
			},
			data: [{
				type: "area",
				dataPoints: this.generateDataPoints(500)
			}]
		}
        const options4 = {
            theme: "light2", // "light1", "light2", "dark1", "dark2"
            exportEnabled: true,
            animationEnabled: true,
            title: {
                text: "Desktop Browser Market Share in 2016"
            },
            data: [{
                type: "pie",
                startAngle: 25,
                toolTipContent: "<b>{label}</b>: {y}%",
                showInLegend: "true",
                legendText: "{label}",
                indexLabelFontSize: 16,
                indexLabel: "{label} - {y}%",
                dataPoints: [
                    { y: 51.08, label: "Chrome" },
                    { y: 27.34, label: "Internet Explorer" },
                    { y: 10.62, label: "Firefox" },
                    { y: 5.02, label: "Microsoft Edge" },
                    { y: 4.07, label: "Safari" },
                    { y: 1.22, label: "Opera" },
                    { y: 0.44, label: "Others" }
                ]
            }]
        }
        const options5 = {
            title: {
                text: "Weekly Weather Forecast"
            },
            axisY: {
                includeZero: false,
                suffix: " °C",
                maximum: 40,
                gridThickness: 0
            },
            toolTip: {
                shared: true,
                content: "{name} </br> <strong>Temperature: </strong> </br> Min: {y[0]} °C, Max: {y[1]} °C"
            },
            data: [{
                type: "rangeSplineArea",
                fillOpacity: 0.1,
                color: "#91AAB1",
                indexLabelFormatter: window.formatter,
                dataPoints: [
                    { label: "Monday", y: [15, 26], name: "rainy" },
                    { label: "Tuesday", y: [15, 27], name: "rainy" },
                    { label: "Wednesday", y: [13, 27], name: "sunny" },
                    { label: "Thursday", y: [14, 27], name: "sunny" },
                    { label: "Friday", y: [15, 26], name: "cloudy" },
                    { label: "Saturday", y: [17, 26], name: "sunny" },
                    { label: "Sunday", y: [16, 27], name: "rainy" }
                ]
            }]
        }
        return (
            <div className="table-wrapper">
                <div className="content-wrapper">
                    <section className="content-header">
                        <h1>
                            Dashboard công việc
                        </h1>
                        <ol className="breadcrumb">
                            <li><a href="/"><i className="fa fa-dashboard" /> Home</a></li>
                            <li><a href="/">Forms</a></li>
                            <li className="active">Advanced Elements</li>
                        </ol>
                    </section>
                    <section className="content">
                        <div className="row">
                            <div className="col-md-3 col-sm-6 col-xs-12">
                                <div className="info-box">
                                    <span className="info-box-icon bg-aqua"><i className="ion ion-ios-gear-outline" /></span>
                                    <div className="info-box-content">
                                        <span className="info-box-text">Đã tạo</span>
                                        <span className="info-box-number">7/7</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 col-sm-6 col-xs-12">
                                <div className="info-box">
                                    <span className="info-box-icon bg-green"><i className="ion ion-ios-people-outline" /></span>
                                    <div className="info-box-content">
                                        <span className="info-box-text">Cần thực hiện</span>
                                        <span className="info-box-number">7/7</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 col-sm-6 col-xs-12">
                                <div className="info-box">
                                    <span className="info-box-icon bg-red"><i className="fa fa-thumbs-o-up" /></span>
                                    <div className="info-box-content">
                                        <span className="info-box-text">Cần phê duyệt</span>
                                        <span className="info-box-number">0/7</span>
                                    </div>
                                </div>
                            </div>
                            <div className="clearfix visible-sm-block" />
                            <div className="col-md-3 col-sm-6 col-xs-12">
                                <div className="info-box">
                                    <span className="info-box-icon bg-yellow"><i className="fa fa-comments-o" /></span>
                                    <div className="info-box-content">
                                        <span className="info-box-text">Cần hỗ trợ</span>
                                        <span className="info-box-number">0/7</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xs-6">
                                <div className="box box-primary">
                                    <CanvasJSReact options={options1} />
                                </div>
                            </div>
                            <div className="col-xs-6">
                                <div className="box box-primary">
                                    <CanvasJSReact options={options2} />
                                </div>
                            </div>
                            <div className="col-xs-6">
                                <div className="box box-primary">
                                    <CanvasJSReact options={options3} />
                                </div>
                            </div>
                            <div className="col-xs-6">
                                <div className="box box-primary">
                                    <CanvasJSReact options={options4} />
                                </div>
                            </div>
                            <div className="col-xs-6">
                                <div className="box box-primary">
                                    <CanvasJSReact options={options5} />
                                </div>
                            </div>
                            <div className="col-xs-6">
                                <div className="box box-primary">
                                    <div className="box-header">
                                        <i className="ion ion-clipboard" />
                                        <h3 className="box-title">Danh sách công việc</h3>
                                        <div className="box-tools pull-right">
                                            <ul className="pagination pagination-sm inline">
                                                <li><a href="#abc">«</a></li>
                                                <li><a href="#abc">1</a></li>
                                                <li><a href="#abc">2</a></li>
                                                <li><a href="#abc">3</a></li>
                                                <li><a href="#abc">»</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    {/* /.box-header */}
                                    <div className="box-body">
                                        {/* See dist/js/pages/dashboard.js to activate the todoList plugin */}
                                        <ul className="todo-list">
                                            <li>
                                                {/* drag handle */}
                                                <span className="handle">
                                                    <i className="fa fa-ellipsis-v" />
                                                    <i className="fa fa-ellipsis-v" />
                                                </span>
                                                {/* checkbox */}
                                                <input type="checkbox" defaultValue />
                                                {/* todo text */}
                                                <span className="text">Hoàn thành kế hoạch kiểm thử</span>
                                                {/* Emphasis label */}
                                                <small className="label label-danger"><i className="fa fa-clock-o" /> 2 mins</small>
                                                {/* General tools such as edit or delete*/}
                                                <div className="tools">
                                                    <i className="fa fa-edit" />
                                                    <i className="fa fa-trash-o" />
                                                </div>
                                            </li>
                                            <li>
                                                <span className="handle">
                                                    <i className="fa fa-ellipsis-v" />
                                                    <i className="fa fa-ellipsis-v" />
                                                </span>
                                                <input type="checkbox" defaultValue />
                                                <span className="text">Hoàn thành báo cáo kiểm thử</span>
                                                <small className="label label-info"><i className="fa fa-clock-o" /> 4 hours</small>
                                                <div className="tools">
                                                    <i className="fa fa-edit" />
                                                    <i className="fa fa-trash-o" />
                                                </div>
                                            </li>
                                            <li>
                                                <span className="handle">
                                                    <i className="fa fa-ellipsis-v" />
                                                    <i className="fa fa-ellipsis-v" />
                                                </span>
                                                <input type="checkbox" defaultValue />
                                                <span className="text">Phê duyệt công việc cho tổ kiểm thử</span>
                                                <small className="label label-warning"><i className="fa fa-clock-o" /> 1 day</small>
                                                <div className="tools">
                                                    <i className="fa fa-edit" />
                                                    <i className="fa fa-trash-o" />
                                                </div>
                                            </li>
                                            <li>
                                                <span className="handle">
                                                    <i className="fa fa-ellipsis-v" />
                                                    <i className="fa fa-ellipsis-v" />
                                                </span>
                                                <input type="checkbox" defaultValue />
                                                <span className="text">Hỗ trợ đội kiểm thử</span>
                                                <small className="label label-success"><i className="fa fa-clock-o" /> 3 days</small>
                                                <div className="tools">
                                                    <i className="fa fa-edit" />
                                                    <i className="fa fa-trash-o" />
                                                </div>
                                            </li>
                                            <li>
                                                <span className="handle">
                                                    <i className="fa fa-ellipsis-v" />
                                                    <i className="fa fa-ellipsis-v" />
                                                </span>
                                                <input type="checkbox" defaultValue />
                                                <span className="text">Phân công công việc cho nhân viên</span>
                                                <small className="label label-primary"><i className="fa fa-clock-o" /> 1 week</small>
                                                <div className="tools">
                                                    <i className="fa fa-edit" />
                                                    <i className="fa fa-trash-o" />
                                                </div>
                                            </li>
                                            <li>
                                                <span className="handle">
                                                    <i className="fa fa-ellipsis-v" />
                                                    <i className="fa fa-ellipsis-v" />
                                                </span>
                                                <input type="checkbox" defaultValue />
                                                <span className="text">Hoàn thành chương trình kiểm thử sản phẩm theo lô</span>
                                                <small className="label label-default"><i className="fa fa-clock-o" /> 1 month</small>
                                                <div className="tools">
                                                    <i className="fa fa-edit" />
                                                    <i className="fa fa-trash-o" />
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                    {/* /.box-body */}
                                    <div className="box-footer clearfix no-border">
                                        <button type="button" className="btn btn-default pull-right"><i className="fa fa-plus" /> Thêm công việc</button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xs-6">
                                <div className="box box-primary">
                                    <div className="box-header with-border">
                                        <h3 className="box-title">Danh sách các thông báo</h3>
                                        <div className="box-tools pull-right">
                                            <button type="button" className="btn btn-box-tool" data-widget="collapse"><i className="fa fa-minus" />
                                            </button>
                                            <button type="button" className="btn btn-box-tool" data-widget="remove"><i className="fa fa-times" /></button>
                                        </div>
                                    </div>
                                    {/* /.box-header */}
                                    <div className="box-body">
                                        <ul className="products-list product-list-in-box">
                                            <li className="item">
                                                <div className="product-img">
                                                    <img src="/adminLTE/dist/img/user1-128x128.jpg" alt="Avatar User" />
                                                </div>
                                                <div className="product-info">
                                                    <a href="#abc" className="product-title">Hoàn thành kế hoạch kiểm thử
                                                    <span className="label label-warning pull-right">today</span></a>
                                                    <span className="product-description">
                                                        Em cần sửa lại phần quy trình cho đảm bảo ...
                                                    </span>
                                                </div>
                                            </li>
                                            {/* /.item */}
                                            <li className="item">
                                                <div className="product-img">
                                                    <img src="/adminLTE/dist/img/user2-160x160.jpg" alt="Avatar User" />
                                                </div>
                                                <div className="product-info">
                                                    <a href="#abc" className="product-title">Kiểm thử lô hàng số 18
                                                        <span className="label label-info pull-right">week</span></a>
                                                    <span className="product-description">
                                                        Sếp ơi duyệt hộ em công việc này với ạ
                                                    </span>
                                                </div>
                                            </li>
                                            {/* /.item */}
                                            <li className="item">
                                                <div className="product-img">
                                                    <img src="/adminLTE/dist/img/user4-128x128.jpg" alt="Avatar User" />
                                                </div>
                                                <div className="product-info">
                                                    <a href="#abc" className="product-title">Kiểm thử lô hàng số 20 <span className="label label-danger pull-right">now</span></a>
                                                    <span className="product-description">
                                                        Em đã sửa lại theo ý của anh. Anh check lại giúp em với ạ.
                                                    </span>
                                                </div>
                                            </li>
                                            {/* /.item */}
                                            <li className="item">
                                                <div className="product-img">
                                                    <img src="/adminLTE/dist/img/user6-128x128.jpg" alt="Avatar User" />
                                                </div>
                                                <div className="product-info">
                                                    <a href="#abc" className="product-title">Xây dựng mô hình kiểm thử chuẩn abc
                                                        <span className="label label-success pull-right">18h30'</span></a>
                                                    <span className="product-description">
                                                        Em cần hoàn thiện lại trong ngày mai nhé!
                                                    </span>
                                                </div>
                                            </li>
                                            {/* /.item */}
                                        </ul>
                                    </div>
                                    {/* /.box-body */}
                                    <div className="box-footer text-center">
                                        <a href="#abc" className="uppercase">Xem tất cả các bình luận</a>
                                    </div>
                                    {/* /.box-footer */}
                                </div>

                            </div>
                            <div className="col-xs-12">
                                {/* <div className="col-md-3">
                                    <div className="box box-solid">
                                        <div className="box-header with-border">
                                            <h4 className="box-title">Draggable Events</h4>
                                        </div>
                                        <div className="box-body">
                                            <div id="external-events">
                                                <div className="external-event bg-green">Lunch</div>
                                                <div className="external-event bg-yellow">Go home</div>
                                                <div className="external-event bg-aqua">Do homework</div>
                                                <div className="external-event bg-light-blue">Work on UI design</div>
                                                <div className="external-event bg-red">Sleep tight</div>
                                                <div className="checkbox">
                                                    <label htmlFor="drop-remove">
                                                        <input type="checkbox" id="drop-remove" />
                                                        remove after drop
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="box box-solid">
                                        <div className="box-header with-border">
                                            <h3 className="box-title">Create Event</h3>
                                        </div>
                                        <div className="box-body">
                                            <div className="btn-group" style={{ width: '100%', marginBottom: 10 }}>
                                                <button type="button" id="color-chooser-btn" class="btn btn-info btn-block dropdown-toggle" data-toggle="dropdown">Color <span class="caret"></span></button>
                                                <ul className="fc-color-picker" id="color-chooser">
                                                    <li><a className="text-aqua" href="#abc"><i className="fa fa-square" /></a></li>
                                                    <li><a className="text-blue" href="#abc"><i className="fa fa-square" /></a></li>
                                                    <li><a className="text-light-blue" href="#abc"><i className="fa fa-square" /></a></li>
                                                    <li><a className="text-teal" href="#abc"><i className="fa fa-square" /></a></li>
                                                    <li><a className="text-yellow" href="#abc"><i className="fa fa-square" /></a></li>
                                                    <li><a className="text-orange" href="#abc"><i className="fa fa-square" /></a></li>
                                                    <li><a className="text-green" href="#abc"><i className="fa fa-square" /></a></li>
                                                    <li><a className="text-lime" href="#abc"><i className="fa fa-square" /></a></li>
                                                    <li><a className="text-red" href="#abc"><i className="fa fa-square" /></a></li>
                                                    <li><a className="text-purple" href="#abc"><i className="fa fa-square" /></a></li>
                                                    <li><a className="text-fuchsia" href="#abc"><i className="fa fa-square" /></a></li>
                                                    <li><a className="text-muted" href="#abc"><i className="fa fa-square" /></a></li>
                                                    <li><a className="text-navy" href="#abc"><i className="fa fa-square" /></a></li>
                                                </ul>
                                            </div>
                                            <div className="input-group">
                                                <input id="new-event" type="text" className="form-control" placeholder="Event Title" />
                                                <div className="input-group-btn">
                                                    <button id="add-new-event" type="button" className="btn btn-primary btn-flat">Add</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div> */}
                                <div className="col-md-12">
                                    <div className="box box-primary">
                                        <div className="box-body no-padding">
                                            <div id="calendarTask" />
                                        </div>
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

export { TaskDashboard };