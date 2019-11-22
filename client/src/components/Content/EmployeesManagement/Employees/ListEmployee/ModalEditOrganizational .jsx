import React, { Component } from 'react';

class ModalEditOrganizational extends Component {
    render() {
        var department = this.props.department;
        return (
            <div className="modal fade" id="modal-editOrganizational">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">×</span></button>
                            <h4 className="modal-title">Thay đổi cơ cấu tổ chức {department}:</h4>
                        </div>
                        <div className="modal-body">
                            <p>One fine body…</p>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-default pull-left" data-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary">Save changes</button>
                        </div>
                    </div>
                    {/* /.modal-content */}
                </div>
                {/* /.modal-dialog */}
            </div>

        )
    }
};

export { ModalEditOrganizational };