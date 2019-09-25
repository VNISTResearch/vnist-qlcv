import React, { Component } from 'react';
import ModalThemCongViec from './ModalThemCongViec';
// import './css/modal.css'
class WorkTemplate extends Component {
  constructor(props) {
    super(props);

    this.state = {
      bodyText: 'This text can be updated in modal 1'
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }
  render() {
    const { bodyText } = this.state;
    return (
      <div classname="content-wrapper">
        <div className="content-wrapper">
          {/* Content Header (Page header) */}
          <section className="content-header">
            <h1>
              Quản lý mẫu công việc
        <small>mẫu công việc</small>
            </h1>
            <ol className="breadcrumb">
              <li><a href="#abc"><i className="fa fa-dashboard" /> Home</a></li>
              <li><a href="#abc">WorkTemplate</a></li>
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
                        <button type="button" className="btn btn-success" data-toggle="modal" data-target="#myModalHorizontal">Thêm mẫu công việc</button>
                        <ModalThemCongViec/>
                      </div>
                    </div>
                  </div>
                  {/* /.box-header */}
                  <div className="box-body">
                    <table id="example2" className="table table-bordered table-hover">
                      <thead>
                        <tr>
                          <th>Rendering engine</th>
                          <th>Browser</th>
                          <th>Platform(s)</th>
                          <th>Engine version</th>
                          <th>CSS grade</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>Trident</td>
                          <td>Internet
                            Explorer 4.0
                    </td>
                          <td>Win 95+</td>
                          <td> 4</td>
                          <td>X</td>
                        </tr>
                        <tr>
                          <td>Trident</td>
                          <td>Internet
                            Explorer 5.0
                    </td>
                          <td>Win 95+</td>
                          <td>5</td>
                          <td>C</td>
                        </tr>
                        <tr>
                          <td>Trident</td>
                          <td>Internet
                            Explorer 5.5
                    </td>
                          <td>Win 95+</td>
                          <td>5.5</td>
                          <td>A</td>
                        </tr>
                        <tr>
                          <td>Trident</td>
                          <td>Internet
                            Explorer 6
                    </td>
                          <td>Win 98+</td>
                          <td>6</td>
                          <td>A</td>
                        </tr>
                        <tr>
                          <td>Trident</td>
                          <td>Internet Explorer 7</td>
                          <td>Win XP SP2+</td>
                          <td>7</td>
                          <td>A</td>
                        </tr>
                        <tr>
                          <td>Trident</td>
                          <td>AOL browser (AOL desktop)</td>
                          <td>Win XP</td>
                          <td>6</td>
                          <td>A</td>
                        </tr>
                        <tr>
                          <td>Gecko</td>
                          <td>Firefox 1.0</td>
                          <td>Win 98+ / OSX.2+</td>
                          <td>1.7</td>
                          <td>A</td>
                        </tr>
                      </tbody>
                      <tfoot>
                        <tr>
                          <th>Rendering engine</th>
                          <th>Browser</th>
                          <th>Platform(s)</th>
                          <th>Engine version</th>
                          <th>CSS grade</th>
                        </tr>
                      </tfoot>
                    </table>
                  </div>
                  {/* /.box-body */}
                </div>
                {/* /.box */}
              </div>
              {/* /.col */}
            </div>
            {/* /.row */}
          </section>
          {/* /.content */}
        </div>
      </div>

    );
  }
}

export { WorkTemplate };