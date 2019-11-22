import {
    employeeConstants
} from '../redux-constants/CombineConstants';

export function employees(state = {}, action) {
    switch (action.type) {
        case employeeConstants.GETALL_REQUEST:
            return {
                ...state,
                loadingMany: true
            };
        case employeeConstants.GETALL_SUCCESS:
            return {
                ...state,
                allEmployee: action.employees.content.allEmployee
            };
        case employeeConstants.GETALL_FAILURE:
            return {
                error: action.error
            };
        case employeeConstants.GETLIST_EMPLOYEE_REQUEST:
            return {
                ...state,
                loadingList: true
            };
        case employeeConstants.GETLIST_EMPLOYEE_SUCCESS:
            return {
                ...state,
                chiefDepartment: action.employees.content.chiefDepartment,
                    deputyDepartment: action.employees.content.deputyDepartment,
                    listEmployee: action.employees.content.listEmployee,

            };
        case employeeConstants.GETLIST_EMPLOYEE_FAILURE:
            return {
                error: action.error
            };
        case employeeConstants.ADDEMPLOYEE_REQUEST:
            return {
                ...state,
                adding: true
            };
        case employeeConstants.ADDEMPLOYEE_SUCCESS:
            return {
                ...state,
                items: action.employee
            };
        case employeeConstants.ADDEMPLOYEE_FAILURE:
            return {
                error: action.error
            };
        case employeeConstants.GETINFORMATIONEMPLOYEE_REQUEST:
            return {
                ...state,
                loadding: true
            };
        case employeeConstants.GETINFORMATIONEMPLOYEE_SUCCESS:
            return {
                ...state,
                employee: action.employee.content.employee,
                    employeeContact: action.employee.content.employeeContact
            };
        case employeeConstants.GETINFORMATIONEMPLOYEE_FAILURE:
            return {
                error: action.error
            };
        case employeeConstants.UPDATE_INFORMATION_REQUEST:
            return {
                ...state,
                updatting: true
            };
        case employeeConstants.UPDATE_INFORMATION_SUCCESS:
            return {
                ...state,
                content: action.informationEmployee.content
            };
        case employeeConstants.UPDATE_INFORMATION_FAILURE:
            return {
                error: action.error
            };
        default:
            return state
    }
}