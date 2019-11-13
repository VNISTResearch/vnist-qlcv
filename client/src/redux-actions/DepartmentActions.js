import { departmentConstants } from "../redux-constants/DepartmentConstants";
import { departmentService } from "../service/DepartmentService";
export const departmentActions = {
    getAll,
    getDepartmentOfUser
};
function getAll() {
    return dispatch => {
        dispatch(request());

        departmentService.getAll()
            .then(
                departments => dispatch(success(departments)),
                error => dispatch(failure(error.toString()))
            );
    };

    function request() { return { type: departmentConstants.GETALL_REQUEST} }
    function success(departments) { return { type: departmentConstants.GETALL_SUCCESS, departments } }
    function failure(error) { return { type: departmentConstants.GETALL_FAILURE, error } }
}
function getDepartmentOfUser(id) {
    return dispatch => {
        dispatch(request());

        departmentService.getDepartmentOfUser(id)
            .then(
                departments => dispatch(success(departments)),
                error => dispatch(failure(error.toString()))
            );
    };

    function request() { return { type: departmentConstants.GETDEPARTMENT_OFUSER_REQUEST} }
    function success(departments) { return { type: departmentConstants.GETDEPARTMENT_OFUSER_SUCCESS, departments } }
    function failure(error) { return { type: departmentConstants.GETDEPARTMENT_OFUSER_FAILURE, error } }
}