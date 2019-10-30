import { kpiPersonalConstants } from "../redux-constants/CombineConstants";
import { alertActions } from "./AlertActions";
import { kpiPersonalService } from "../service/CombineService";
export const kpiPersonalActions = {
    getAllTargetByUser,
    getAllParentTarget,
    addTarget,
    editTarget,
    confirm,
    delete: _delete,
};

// Get all target of a user
function getAllTargetByUser(id) {
    return dispatch => {
        dispatch(request(id));

        kpiPersonalService.getAllTargetPersonalByUserId(id)
            .then(
                targets => dispatch(success(targets)),
                error => dispatch(failure(error.toString()))
            );
    };

    function request(id) { return { type: kpiPersonalConstants.GETALLTARGET_BYIDUSER_REQUEST, id } }
    function success(targets) { return { type: kpiPersonalConstants.GETALLTARGET_BYIDUSER_SUCCESS, targets } }
    function failure(error) { return { type: kpiPersonalConstants.GETALLTARGET_BYIDUSER_FAILURE, error } }
}

// Get all target of a Unit by Unit id
function getAllParentTarget(id) {
    return dispatch => {
        dispatch(request(id));

        kpiPersonalService.getAllParentTarget(id)
            .then(
                targets => dispatch(success(targets)),
                error => dispatch(failure(error.toString()))
            );
    };

    function request(id) { return { type: kpiPersonalConstants.GETALL_PARENTTARGET_REQUEST, id } }
    function success(targets) { return { type: kpiPersonalConstants.GETALL_PARENTTARGET_SUCCESS, targets } }
    function failure(error) { return { type: kpiPersonalConstants.GETALL_PARENTTARGET_FAILURE, error } }
}

// Add a new target of unit
function addTarget(target) {
    return dispatch => {
        dispatch(request(target));

        kpiPersonalService.addNewTargetPersonal(target)
            .then(
                target => { 
                    dispatch(success(target));
                    dispatch(alertActions.success('Add target successful'));
                },
                error => {
                    dispatch(failure(error.toString()));
                    dispatch(alertActions.error(error.toString()));
                }
            );
    };

    function request(target) { return { type: kpiPersonalConstants.ADDTARGET_REQUEST, target } }
    function success(target) { return { type: kpiPersonalConstants.ADDTARGET_SUCCESS, target } }
    function failure(error) { return { type: kpiPersonalConstants.ADDTARGET_FAILURE, error } }
}

// Edit a target of unit
function editTarget(id, target) {
    return dispatch => {
        dispatch(request(id));

        kpiPersonalService.editTargetPersonal(id, target)
            .then(
                target => { 
                    dispatch(success(target));
                    dispatch(alertActions.success('Edit target successful'));
                },
                error => {
                    dispatch(failure(error.toString()));
                    dispatch(alertActions.error(error.toString()));
                }
            );
    };

    function request(id) { return { type: kpiPersonalConstants.EDITTARGET_REQUEST, id } }
    function success(target) { return { type: kpiPersonalConstants.EDITTARGET_SUCCESS, target } }
    function failure(error) { return { type: kpiPersonalConstants.EDITTARGET_FAILURE, error } }
}

// confirm kpi unit final
function confirm(id) {
    return dispatch => {
        dispatch(request(id));

        kpiPersonalService.comfirmKPIUnit(id)
            .then(
                target => { 
                    dispatch(success(id));
                    dispatch(alertActions.success('Confirm KPI Unit successful'));
                },
                error => {
                    dispatch(failure(error.toString()));
                    dispatch(alertActions.error(error.toString()));
                }
            );
    };

    function request(id) { return { type: kpiPersonalConstants.CONFIRM_REQUEST, id } }
    function success(id) { return { type: kpiPersonalConstants.CONFIRM_SUCCESS, id } }
    function failure(error) { return { type: kpiPersonalConstants.CONFIRM_FAILURE, error } }
}

// prefixed function name with underscore because delete is a reserved word in javascript
function _delete(id) {
    return dispatch => {
        dispatch(request(id));

        kpiPersonalService.deleteTargetById(id)
            .then(
                target => dispatch(success(id)),
                error => dispatch(failure(id, error.toString()))
            );
    };

    function request(id) { return { type: kpiPersonalConstants.DELETETARGET_REQUEST, id } }
    function success(id) { return { type: kpiPersonalConstants.DELETETARGET_SUCCESS, id } }
    function failure(id, error) { return { type: kpiPersonalConstants.DELETETARGET_FAILURE, id, error } }
}