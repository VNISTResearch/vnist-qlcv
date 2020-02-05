import { kpiPersonalConstants } from "../redux-constants/CombineConstants";
import { kpiPersonalService } from "../service/CombineService";
export const kpiPersonalActions = {
    getAllKPIPersonalOfUnit,
    getAllKPIPersonalByMember,
    getAllKPIPersonalOfResponsible,
    getCurrentKPIPersonal,
    getKPIMemberByMonth,
    getKPIPersonalById,
    createKPIPersonal,
    editKPIPersonal,
    editStatusKPIPersonal,
    approveKPIPersonal,
    deleteKPIPersonal,
    addNewTargetPersonal,
    editTargetKPIPersonal,
    editStatusTarget,
    evaluateTarget,
    deleteTarget
};

// Lấy tất cả KPI cá nhân
function getAllKPIPersonalOfUnit(infosearch) {
    return dispatch => {
        dispatch(request(infosearch));

        kpiPersonalService.getAllKPIPersonalOfUnit(infosearch)
            .then(
                kpipersonals => dispatch(success(kpipersonals)),
                error => dispatch(failure(error.toString()))
            );
    };

    function request(infosearch) { return { type: kpiPersonalConstants.GETALL_KPIPERSONAL_OfUNIT_REQUEST, infosearch } }
    function success(kpipersonals) { return { type: kpiPersonalConstants.GETALL_KPIPERSONAL_OfUNIT_SUCCESS, kpipersonals } }
    function failure(error) { return { type: kpiPersonalConstants.GETALL_KPIPERSONAL_OfUNIT_FAILURE, error } }
}
// Lấy tất cả KPI cá nhân
function getAllKPIPersonalByMember(member) {
    return dispatch => {
        dispatch(request(member));

        kpiPersonalService.getAllKPIPersonalByMember(member)
            .then(
                kpipersonals => dispatch(success(kpipersonals)),
                error => dispatch(failure(error.toString()))
            );
    };

    function request(member) { return { type: kpiPersonalConstants.GETALL_KPIPERSONAL_REQUEST, member } }
    function success(kpipersonals) { return { type: kpiPersonalConstants.GETALL_KPIPERSONAL_SUCCESS, kpipersonals } }
    function failure(error) { return { type: kpiPersonalConstants.GETALL_KPIPERSONAL_FAILURE, error } }
}
// Lấy tất cả KPI cá nhân
function getAllKPIPersonalOfResponsible(member) {
    return dispatch => {
        dispatch(request(member));

        kpiPersonalService.getAllKPIPersonalOfTask(member)
            .then(
                kpipersonals => dispatch(success(kpipersonals)),
                error => dispatch(failure(error.toString()))
            );
    };

    function request(member) { return { type: kpiPersonalConstants.GETALL_KPIPERSONAL_OFTASK_REQUEST, member } }
    function success(kpipersonals) { return { type: kpiPersonalConstants.GETALL_KPIPERSONAL_OFTASK_SUCCESS, kpipersonals } }
    function failure(error) { return { type: kpiPersonalConstants.GETALL_KPIPERSONAL_OFTASK_FAILURE, error } }
}

// Lấy KPI cá nhân theo id
function getKPIPersonalById(id) {
    return dispatch => {
        dispatch(request(id));

        kpiPersonalService.getKPIPersonalById(id)
            .then(
                kpipersonal => dispatch(success(kpipersonal)),
                error => dispatch(failure(error.toString()))
            );
    };

    function request(id) { return { type: kpiPersonalConstants.GET_KPIPERSONAL_BYID_REQUEST, id } }
    function success(kpipersonal) { return { type: kpiPersonalConstants.GET_KPIPERSONAL_BYID_SUCCESS, kpipersonal } }
    function failure(error) { return { type: kpiPersonalConstants.GET_KPIPERSONAL_BYID_FAILURE, error } }
}

// Lấy KPI cá nhân theo id
function getKPIMemberByMonth(id, time) {
    return dispatch => {
        dispatch(request(id));

        kpiPersonalService.getKPIMemberByMonth(id, time)
            .then(
                kpipersonal => dispatch(success(kpipersonal)),
                error => dispatch(failure(error.toString()))
            );
    };

    function request(id) { return { type: kpiPersonalConstants.GET_KPIPERSONAL_BYMONTH_REQUEST, id } }
    function success(kpipersonal) { return { type: kpiPersonalConstants.GET_KPIPERSONAL_BYMONTH_SUCCESS, kpipersonal } }
    function failure(error) { return { type: kpiPersonalConstants.GET_KPIPERSONAL_BYMONTH_FAILURE, error } }
}

// Lấy KPI cá nhân hiện tại
function getCurrentKPIPersonal(id) {
    return dispatch => {
        dispatch(request(id));

        kpiPersonalService.getCurrentKPIPersonal(id)
            .then(
                kpipersonal => dispatch(success(kpipersonal)),
                error => dispatch(failure(error.toString()))
            );
    };

    function request(id) { return { type: kpiPersonalConstants.GETCURRENT_KPIPERSONAL_REQUEST, id } }
    function success(kpipersonal) { return { type: kpiPersonalConstants.GETCURRENT_KPIPERSONAL_SUCCESS, kpipersonal } }
    function failure(error) { return { type: kpiPersonalConstants.GETCURRENT_KPIPERSONAL_FAILURE, error } }
}

// Khởi tạo KPI cá nhân
function createKPIPersonal(newKPI) {
    return dispatch => {
        dispatch(request(newKPI));

        kpiPersonalService.createKPIPersonal(newKPI)
            .then(
                newKPI => { 
                    dispatch(success(newKPI));
                },
                error => {
                    dispatch(failure(error.toString()));
                }
            );
    };

    function request(newKPI) { return { type: kpiPersonalConstants.ADD_KPIPERSONAL_REQUEST, newKPI } }
    function success(newKPI) { return { type: kpiPersonalConstants.ADD_KPIPERSONAL_SUCCESS, newKPI } }
    function failure(error) { return { type: kpiPersonalConstants.ADD_KPIPERSONAL_FAILURE, error } }
}

// Chỉnh sửa KPI cá nhân
function editKPIPersonal(id, kpipersonal) {
    return dispatch => {
        dispatch(request(id));

        kpiPersonalService.editKPIPersonal(id, kpipersonal)
            .then(
                kpipersonal => { 
                    dispatch(success(kpipersonal));
                },
                error => {
                    dispatch(failure(error.toString()));
                }
            );
    };

    function request(id) { return { type: kpiPersonalConstants.EDIT_KPIPERSONAL_REQUEST, id } }
    function success(kpipersonal) { return { type: kpiPersonalConstants.EDIT_KPIPERSONAL_SUCCESS, kpipersonal } }
    function failure(error) { return { type: kpiPersonalConstants.EDIT_KPIPERSONAL_FAILURE, error } }
}

// Chỉnh sửa trạng thái KPI cá nhân
function editStatusKPIPersonal(id, status) {
    return dispatch => {
        dispatch(request(id));
        kpiPersonalService.editStatusKPIPersonal(id, status)
            .then(
                newKPI => { 
                    dispatch(success(newKPI));
                },
                error => {
                    dispatch(failure(error.toString()));
                }
            );
    };

    function request(id) { return { type: kpiPersonalConstants.EDITSTATUS_KPIPERSONAL_REQUEST, id } }
    function success(newKPI) { return { type: kpiPersonalConstants.EDITSTATUS_KPIPERSONAL_SUCCESS, newKPI } }
    function failure(error) { return { type: kpiPersonalConstants.EDITSTATUS_KPIPERSONAL_FAILURE, error } }
}

// Phê duyệt toàn bộ KPI cá nhân
function approveKPIPersonal(id) {
    return dispatch => {
        dispatch(request(id));

        kpiPersonalService.approveKPIPersonal(id)
            .then(
                newKPI => { 
                    dispatch(success(newKPI));
                },
                error => {
                    dispatch(failure(error.toString()));
                }
            );
    };

    function request(id) { return { type: kpiPersonalConstants.APPROVE_KPIPERSONAL_REQUEST, id } }
    function success(newKPI) { return { type: kpiPersonalConstants.APPROVE_KPIPERSONAL_SUCCESS, newKPI } }
    function failure(error) { return { type: kpiPersonalConstants.APPROVE_KPIPERSONAL_FAILURE, error } }
}


// Xóa KPI cá nhân
function deleteKPIPersonal(id) {
    return dispatch => {
        dispatch(request(id));

        kpiPersonalService.deleteKPIPersonal(id)
            .then(
                target => dispatch(success(id)),
                error => dispatch(failure(id, error.toString()))
            );
    };

    function request(id) { return { type: kpiPersonalConstants.DELETE_KPIPERSONAL_REQUEST, id } }
    function success(id) { return { type: kpiPersonalConstants.DELETE_KPIPERSONAL_SUCCESS, id } }
    function failure(id, error) { return { type: kpiPersonalConstants.DELETE_KPIPERSONAL_FAILURE, id, error } }
}

// thêm mục tiêu KPI cá nhân
function addNewTargetPersonal(newTarget) {
    console.log(newTarget);
    return dispatch => {
        dispatch(request(newTarget));

        kpiPersonalService.addNewTargetPersonal(newTarget)
            .then(
                newKPI => { 
                    dispatch(success(newKPI));
                },
                error => {
                    dispatch(failure(error.toString()));
                }
            );
    };

    function request(newTarget) { return { type: kpiPersonalConstants.ADDTARGET_KPIPERSONAL_REQUEST, newTarget } }
    function success(newKPI) { return { type: kpiPersonalConstants.ADDTARGET_KPIPERSONAL_SUCCESS, newKPI } }
    function failure(error) { return { type: kpiPersonalConstants.ADDTARGET_KPIPERSONAL_FAILURE, error } }
}

// Chỉnh sửa mục tiêu KPI cá nhân
function editTargetKPIPersonal(id, newTarget) {
    return dispatch => {
        dispatch(request(id));

        kpiPersonalService.editTargetKPIPersonal(id, newTarget)
            .then(
                newTarget => { 
                    dispatch(success(newTarget));
                },
                error => {
                    dispatch(failure(error.toString()));
                }
            );
    };

    function request(id) { return { type: kpiPersonalConstants.EDITTARGET_KPIPERSONAL_REQUEST, id } }
    function success(newTarget) { return { type: kpiPersonalConstants.EDITTARGET_KPIPERSONAL_SUCCESS, newTarget } }
    function failure(error) { return { type: kpiPersonalConstants.EDITTARGET_KPIPERSONAL_FAILURE, error } }
}

// Chỉnh sửa trạng thái mục tiêu KPI cá nhân
function editStatusTarget(id, status) {
    return dispatch => {
        dispatch(request(id));

        kpiPersonalService.editStatusTarget(id, status)
            .then(
                newTarget => { 
                    dispatch(success(newTarget));
                },
                error => {
                    dispatch(failure(error.toString()));
                }
            );
    };

    function request(id) { return { type: kpiPersonalConstants.EDITSTATUS_TARGET_KPIPERSONAL_REQUEST, id } }
    function success(newKPI) { return { type: kpiPersonalConstants.EDITSTATUS_TARGET_KPIPERSONAL_SUCCESS, newKPI } }
    function failure(error) { return { type: kpiPersonalConstants.EDITSTATUS_TARGET_KPIPERSONAL_FAILURE, error } }
}

// Đánh giá mục tiêu KPI cá nhân
function evaluateTarget(id, result) {
    return dispatch => {
        dispatch(request(id));

        kpiPersonalService.evaluateTarget(id, result)
            .then(
                newTarget => { 
                    dispatch(success(newTarget));
                },
                error => {
                    dispatch(failure(error.toString()));
                }
            );
    };

    function request(id) { return { type: kpiPersonalConstants.EVALUATETARGET_KPIPERSONAL_REQUEST, id } }
    function success(newTarget) { return { type: kpiPersonalConstants.EVALUATETARGET_KPIPERSONAL_SUCCESS, newTarget } }
    function failure(error) { return { type: kpiPersonalConstants.EVALUATETARGET_KPIPERSONAL_FAILURE, error } }
}

// Xóa mục tiêu KPI cá nhân
function deleteTarget(id, kpipersonal) {
    return dispatch => {
        dispatch(request(id));

        kpiPersonalService.deleteTarget(id, kpipersonal)
            .then(
                newKPI => dispatch(success(newKPI)),
                error => dispatch(failure(id, error.toString()))
            );
    };

    function request(id) { return { type: kpiPersonalConstants.DELETETARGET_KPIPERSONAL_REQUEST, id } }
    function success(newKPI) { return { type: kpiPersonalConstants.DELETETARGET_KPIPERSONAL_SUCCESS, newKPI } }
    function failure(id, error) { return { type: kpiPersonalConstants.DELETETARGET_KPIPERSONAL_FAILURE, id, error } }
}
