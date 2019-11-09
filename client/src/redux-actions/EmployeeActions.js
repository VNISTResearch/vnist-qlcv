import {
    employeeConstants
} from "../redux-constants/CombineConstants";
//import { alerActions } from "./AlertActions";
import {
    employeeService
} from "../service/CombineService";
export const employeeActions = {
    getAllEmployee,
    addNewEmployee,
    getInformationEmployee,
    updateInformationEmployee,
};

// get all list employee
function getAllEmployee() {
    return dispatch => {
        dispatch(request());

        employeeService.getAll()
            .then(
                employees => dispatch(success(employees)),
                error => dispatch(failure(error.toString()))
            );
    };

    function request() {
        return {
            type: employeeConstants.GETALL_REQUEST
        };
    };

    function success(employees) {
        return {
            type: employeeConstants.GETALL_SUCCESS,
            employees
        };
    };

    function failure(error) {
        return {
            type: employeeConstants.GETALL_FAILURE,
            error
        };
    };
}

// get information employee by employeeNumber
function getInformationEmployee(employeeNumber) {
    return dispatch => {
        dispatch(request());

        employeeService.getByEmployeeNumber(employeeNumber)
            .then(
                employee => dispatch(success(employee)),
                error => dispatch(failure(error.toString()))

            );
    }

    function request() {
        return {
            type: employeeConstants.GETINFORMATIONEMPLOYEE_REQUEST,
        };
    };

    function success(employee) {
        return {
            type: employeeConstants.GETINFORMATIONEMPLOYEE_SUCCESS,
            employee
        };
    };

    function failure(error) {
        return {
            type: employeeConstants.GETINFORMATIONEMPLOYEE_FAILURE,
            error
        };
    };
}

// create a new employee
function addNewEmployee(employee) {
    return dispatch => {
        dispatch(request(employee));

        employeeService.addNewEmployee(employee)
            .then(
                employee => {
                    dispatch(success(employee));
                },
                error => {
                    dispatch(failure(error.toString()));
                }
            );
    };

    function request(employee) {
        return {
            type: employeeConstants.ADDEMPLOYEE_REQUEST,
            employee
        }
    };

    function success(employee) {
        return {
            type: employeeConstants.ADDEMPLOYEE_SUCCESS,
            employee
        }
    };

    function failure(error) {
        return {
            type: employeeConstants.ADDEMPLOYEE_FAILURE,
            error
        }
    };
}

// update information employee

function updateInformationEmployee(id, informationEmployee) {
    return dispatch => {
        dispatch(request(informationEmployee));

        employeeService.updateInformationEmpoyee(id, informationEmployee)
            .then(
                informationEmployee => {
                    dispatch(success(informationEmployee));
                },
                error => {
                    dispatch(failure(error).toString());
                }
            );
    };

    function request(informationEmployee) {
        return {
            type: employeeConstants.UPDATE_INFORMATION_REQUEST,
            informationEmployee
        }
    };

    function success(informationEmployee) {
        return {
            type: employeeConstants.UPDATE_INFORMATION_SUCCESS,
            informationEmployee
        }
    };

    function failure(error) {
        return {
            type: employeeConstants.GETINFORMATIONEMPLOYEE_FAILURE,
            error
        }
    };

}