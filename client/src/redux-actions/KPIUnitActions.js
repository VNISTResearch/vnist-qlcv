import { kpiUnitConstants } from "../redux-constants/CombineConstants";
import { alertActions } from "./AlertActions";
import { kpiUnitService } from "../service/CombineService";
export const kpiUnitActions = {
    getAllTargetByUnitId,
    addTarget,
    editTarget,
    confirm,
    delete: _delete,
};

// Get all target of a Unit by Unit id
function getAllTargetByUnitId(id) {
    return dispatch => {
        dispatch(request(id));

        kpiUnitService.getAllTargetUnitByIdUnit(id)
            .then(
                targets => dispatch(success(targets)),
                error => dispatch(failure(error.toString()))
            );
    };

    function request(id) { return { type: kpiUnitConstants.GETALLTARGET_BYIDUNIT_REQUEST, id } }
    function success(targets) { return { type: kpiUnitConstants.GETALLTARGET_BYIDUNIT_SUCCESS, targets } }
    function failure(error) { return { type: kpiUnitConstants.GETALLTARGET_BYIDUNIT_FAILURE, error } }
}

// Add a new target of unit
function addTarget(target) {
    return dispatch => {
        dispatch(request(target));

        kpiUnitService.addNewTargetUnit(target)
            .then(
                target => { 
                    dispatch(success(target));
                    dispatch(alertActions.success('Add target successful'));
                    // window.location.reload();
                },
                error => {
                    dispatch(failure(error.toString()));
                    dispatch(alertActions.error(error.toString()));
                }
            );
    };

    function request(target) { return { type: kpiUnitConstants.ADDTARGET_REQUEST, target } }
    function success(target) { return { type: kpiUnitConstants.ADDTARGET_SUCCESS, target } }
    function failure(error) { return { type: kpiUnitConstants.ADDTARGET_FAILURE, error } }
}

// Edit a target of unit
function editTarget(id, target) {
    return dispatch => {
        dispatch(request(id));

        kpiUnitService.editTargetUnit(id, target)
            .then(
                target => { 
                    dispatch(success(target));
                    dispatch(alertActions.success('Edit target successful'));
                    // window.location.reload();
                },
                error => {
                    dispatch(failure(error.toString()));
                    dispatch(alertActions.error(error.toString()));
                }
            );
    };

    function request(id) { return { type: kpiUnitConstants.EDITTARGET_REQUEST, id } }
    function success(target) { return { type: kpiUnitConstants.EDITTARGET_SUCCESS, target } }
    function failure(error) { return { type: kpiUnitConstants.EDITTARGET_FAILURE, error } }
}

// confirm kpi unit final
function confirm(id) {
    return dispatch => {
        dispatch(request(id));

        kpiUnitService.confirm(id)
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

    function request(id) { return { type: kpiUnitConstants.CONFIRM_REQUEST, id } }
    function success(id) { return { type: kpiUnitConstants.CONFIRM_SUCCESS, id } }
    function failure(error) { return { type: kpiUnitConstants.CONFIRM_FAILURE, error } }
}

// prefixed function name with underscore because delete is a reserved word in javascript
function _delete(id) {
    return dispatch => {
        dispatch(request(id));

        kpiUnitService.deleteTargetById(id)
            .then(
                target => dispatch(success(id)),
                error => dispatch(failure(id, error.toString()))
            );
    };

    function request(id) { return { type: kpiUnitConstants.DELETETARGET_REQUEST, id } }
    function success(id) { return { type: kpiUnitConstants.DELETETARGET_SUCCESS, id } }
    function failure(id, error) { return { type: kpiUnitConstants.DELETETARGET_FAILURE, id, error } }
}