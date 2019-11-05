import { employeeConstants } from '../redux-constants/CombineConstants';

export function employees (state = {}, action) {
    switch (action.type) {
        case employeeConstants.GETALL_REQUEST:
            return {
                loadingMany: true
            };
        case employeeConstants.GETALL_SUCCESS:
            return {
                ...state,
                items: action.employees
            };
        case employeeConstants.GETALL_FAILURE:
            return {
                error: action.error
            };
        case employeeConstants.ADDEMPLOYEE_REQUEST:
            return {
                ...state,
                adding:true
            };
        case employeeConstants.ADDEMPLOYEE_SUCCESS:
            return {
                ...state,
                items: action.employee
            };
        case employeeConstants.ADDEMPLOYEE_FAILURE:
            return {
                error: action.error
            }
        default:
            return state
    }
}