import { kpiUnitConstants } from "../redux-constants/CombineConstants";
import { kpiUnitService } from "../service/CombineService";
export const kpiUnitActions = {
    getAllKPIUnit,
    getCurrentKPIUnit,
    getChildTargetOfCurrentTarget,
    getKPIParent,
    addKPIUnit,
    addTargetKPIUnit,
    editKPIUnit,
    editStatusKPIUnit,
    evaluateKPIUnit,
    editTargetKPIUnit,
    deleteKPIUnit,
    deleteTargetKPIUnit
};

// lấy tất cả các KPI của đơn vị
function getAllKPIUnit(id) {
    return dispatch => {
        dispatch(request(id));

        kpiUnitService.getAllKPIUnit(id)
            .then(
                kpis => dispatch(success(kpis)),
                error => dispatch(failure(error.toString()))
            );
    };

    function request(id) { return { type: kpiUnitConstants.GETALL_KPIUNIT_REQUEST, id } }
    function success(kpis) { return { type: kpiUnitConstants.GETALL_KPIUNIT_SUCCESS, kpis } }
    function failure(error) { return { type: kpiUnitConstants.GETALL_KPIUNIT_FAILURE, error } }
}

// lấy kpi đơn vị hiện tại
function getCurrentKPIUnit(id) {
    return dispatch => {
        dispatch(request(id));

        kpiUnitService.getCurrentKPIUnit(id)
            .then(
                currentKPI => dispatch(success(currentKPI)),
                error => dispatch(failure(error.toString()))
            );
    };

    function request(id) { return { type: kpiUnitConstants.GETCURRENT_KPIUNIT_REQUEST, id } }
    function success(currentKPI) { return { type: kpiUnitConstants.GETCURRENT_KPIUNIT_SUCCESS, currentKPI } }
    function failure(error) { return { type: kpiUnitConstants.GETCURRENT_KPIUNIT_FAILURE, error } }
}

// lấy mục tiêu con của mục tiêu hiện tại
function getChildTargetOfCurrentTarget(id) {
    return dispatch => {
        dispatch(request(id));

        kpiUnitService.getChildTargetOfCurrentTarget(id)
            .then(
                childtarget => dispatch(success(childtarget)),
                error => dispatch(failure(error.toString()))
            );
    };

    function request(id) { return { type: kpiUnitConstants.GETCHILDTARGET_CURRENTTARGET_REQUEST, id } }
    function success(childtarget) { return { type: kpiUnitConstants.GETCHILDTARGET_CURRENTTARGET_SUCCESS, childtarget } }
    function failure(error) { return { type: kpiUnitConstants.GETCHILDTARGET_CURRENTTARGET_FAILURE, error } }
}

// lấy kpi đơn vị cha
function getKPIParent(currentRole) {
    return dispatch => {
        dispatch(request(currentRole));

        kpiUnitService.getKPIParent(currentRole)
            .then(
                parentKPI => dispatch(success(parentKPI)),
                error => dispatch(failure(error.toString()))
            );
    };

    function request(currentRole) { return { type: kpiUnitConstants.GETPARENT_KPIUNIT_REQUEST, currentRole } }
    function success(parentKPI) { return { type: kpiUnitConstants.GETPARENT_KPIUNIT_SUCCESS, parentKPI } }
    function failure(error) { return { type: kpiUnitConstants.GETPARENT_KPIUNIT_FAILURE, error } }
}

// Khởi tạo KPI đơn vị
function addKPIUnit(newKPI) {
    return dispatch => {
        dispatch(request(newKPI));

        kpiUnitService.addKPIUnit(newKPI)
            .then(
                newKPI => { 
                    dispatch(success(newKPI));
                },
                error => {
                    dispatch(failure(error.toString()));
                }
            );
    };

    function request(newKPI) { return { type: kpiUnitConstants.ADD_KPIUNIT_REQUEST, newKPI } }
    function success(newKPI) { return { type: kpiUnitConstants.ADD_KPIUNIT_SUCCESS, newKPI } }
    function failure(error) { return { type: kpiUnitConstants.ADD_KPIUNIT_FAILURE, error } }
}

// Thêm mục tiêu cho KPI đơn vị
function addTargetKPIUnit(newTarget) {
    return dispatch => {
        dispatch(request(newTarget));

        kpiUnitService.addTargetKPIUnit(newTarget)
            .then(
                newKPI => { 
                    dispatch(success(newKPI));
                },
                error => {
                    dispatch(failure(error.toString()));
                }
            );
    };

    function request(newTarget) { return { type: kpiUnitConstants.ADDTARGET_KPIUNIT_REQUEST, newTarget } }
    function success(newKPI) { return { type: kpiUnitConstants.ADDTARGET_KPIUNIT_SUCCESS, newKPI } }
    function failure(error) { return { type: kpiUnitConstants.ADDTARGET_KPIUNIT_FAILURE, error } }
}
// Chỉnh sửa kpi đơn vị
function editKPIUnit(id, newKPI) {
    return dispatch => {
        dispatch(request(id));

        kpiUnitService.editKPIUnit(id, newKPI)
            .then(
                newKPI => { 
                    dispatch(success(newKPI));
                },
                error => {
                    dispatch(failure(error.toString()));
                }
            );
    };

    function request(id) { return { type: kpiUnitConstants.EDIT_KPIUNIT_REQUEST, id } }
    function success(newKPI) { return { type: kpiUnitConstants.EDIT_KPIUNIT_SUCCESS, newKPI } }
    function failure(error) { return { type: kpiUnitConstants.EDIT_KPIUNIT_FAILURE, error } }
}
// Chỉnh sửa mục tiêu của kpi đơn vị
function editTargetKPIUnit(id, newTarget) {
    return dispatch => {
        dispatch(request(id));

        kpiUnitService.editTargetKPIUnit(id, newTarget)
            .then(
                newTarget => { 
                    dispatch(success(newTarget));
                },
                error => {
                    dispatch(failure(error.toString()));
                }
            );
    };

    function request(id) { return { type: kpiUnitConstants.EDITTARGET_KPIUNIT_REQUEST, id } }
    function success(newTarget) { return { type: kpiUnitConstants.EDITTARGET_KPIUNIT_SUCCESS, newTarget } }
    function failure(error) { return { type: kpiUnitConstants.EDITTARGET_KPIUNIT_FAILURE, error } }
}
// Chỉnh sửa trạng thái KPI đơn vị
function editStatusKPIUnit(id, status) {
    return dispatch => {
        dispatch(request(id));

        kpiUnitService.editStatusKPIUnit(id, status)
            .then(
                newKPI => { 
                    dispatch(success(newKPI));
                },
                error => {
                    dispatch(failure(error.toString()));
                }
            );
    };

    function request(id) { return { type: kpiUnitConstants.EDITSTATUS_KPIUNIT_REQUEST, id } }
    function success(newKPI) { return { type: kpiUnitConstants.EDITSTATUS_KPIUNIT_SUCCESS, newKPI } }
    function failure(error) { return { type: kpiUnitConstants.EDITSTATUS_KPIUNIT_FAILURE, error } }
}
// Cập nhật dữ liệu cho kpi đơn vị
function evaluateKPIUnit(id) {
    return dispatch => {
        dispatch(request(id));

        kpiUnitService.evaluateKPIUnit(id)
            .then(
                newKPI => { 
                    dispatch(success(newKPI));
                },
                error => {
                    dispatch(failure(error.toString()));
                }
            );
    };

    function request(id) { return { type: kpiUnitConstants.EVALUATE_KPIUNIT_REQUEST, id } }
    function success(newKPI) { return { type: kpiUnitConstants.EVALUATE_KPIUNIT_SUCCESS, newKPI } }
    function failure(error) { return { type: kpiUnitConstants.EVALUATE_KPIUNIT_FAILURE, error } }
}


// Xóa KPI đơn vị
function deleteKPIUnit(id) {
    return dispatch => {
        dispatch(request(id));

        kpiUnitService.deleteKPIUnit(id)
            .then(
                kpiUnit => dispatch(success(id)),
                error => dispatch(failure(id, error.toString()))
            );
    };

    function request(id) { return { type: kpiUnitConstants.DELETE_KPIUNIT_REQUEST, id } }
    function success(id) { return { type: kpiUnitConstants.DELETE_KPIUNIT_SUCCESS, id } }
    function failure(id, error) { return { type: kpiUnitConstants.DELETE_KPIUNIT_FAILURE, id, error } }
}
// Xóa mục tiêu KPI đơn vị
function deleteTargetKPIUnit(id, kpiunit) {
    return dispatch => {
        dispatch(request(id));

        kpiUnitService.deleteTargetKPIUnit(id, kpiunit)
            .then(
                newKPI => dispatch(success(newKPI)),
                error => dispatch(failure(id, error.toString()))
            );
    };

    function request(id) { return { type: kpiUnitConstants.DELETETARGET_KPIUNIT_REQUEST, id } }
    function success(newKPI) { return { type: kpiUnitConstants.DELETETARGET_KPIUNIT_SUCCESS, newKPI } }
    function failure(id, error) { return { type: kpiUnitConstants.DELETETARGET_KPIUNIT_FAILURE, id, error } }
}