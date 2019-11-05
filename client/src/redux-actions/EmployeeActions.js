import { employeeConstants } from "../redux-constants/CombineConstants";
//import { alerActions } from "./AlertActions";
import { employeeService } from "../service/CombineService";
export const employeeActions = {
    getAllEmployee,
    addNewEmployee,
};

function getAllEmployee() {
    return dispatch => {
        dispatch(request());

        employeeService.getAll()
        .then(
            employees =>dispatch(success(employees)),
            error =>dispatch(failure(error.toString()))
        );
    };
    function request() { return { type: employeeConstants.GETALL_REQUEST } }
    function success(employees) { return { type: employeeConstants.GETALL_SUCCESS, employees } };
    function failure(error) {return { type: employeeConstants.GETALL_FAILURE, error } };
}

function addNewEmployee(employee) {
    return dispatch => {
        dispatch(request());

        employeeService.addNewEmployee(employee)
        .then (
            employee => {
                dispatch(success(employee));
            },
            error => {
                dispatch(failure(error.toString()));
            }
        );
    };

    function request(employee) { return {type: employeeConstants.ADDEMPLOYEE_REQUEST,employee} };
    function success(employee) { return {type: employeeConstants.ADDEMPLOYEE_SUCCESS, employee} };
    function failure(error) { return {type: employeeConstants.ADDEMPLOYEE_FAILURE, error} }; 
}