import React, { Component } from 'react';
import { DataTable, KPITarget, KPIInfo } from '../KPIItems/CombineKPIItems';

class KPIUnit extends Component {
    constructor(props) {
        super(props);

        this.state = {
            newTemplate: {
                role: '',
            },
            submitted: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const { name, value } = event.target;
        const { newTemplate } = this.state;
        this.setState({
            newTemplate: {
                ...newTemplate,
                [name]: value
            }
        });
        console.log(this.state.newTemplate);
    }

    handleSubmit(event) {
        event.preventDefault();

        this.setState({ submitted: true });
        const { newTemplate } = this.state;
        if (newTemplate.name && newTemplate.read !== [] && newTemplate.description) {
            this.props.addNewTemplate(newTemplate);
        }
    }
    render() {
        return (
            <div className="content-wrapper">
                <section className="content-header">
                    <h1>
                        KPI đơn vị
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
                            <div className="row">
                                <KPITarget/>
                                <KPIInfo/>
                            </div>
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
                            <DataTable/>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export { KPIUnit };