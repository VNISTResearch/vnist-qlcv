import { departmentConstants } from "../redux-constants/CombineConstants";

export function departments(state = {}, action) {
  switch (action.type) {
    case departmentConstants.GETALL_REQUEST:
      return {
        loading: true
      };
    case departmentConstants.GETALL_SUCCESS:
      return {
        items: action.departments
      };
    case departmentConstants.GETALL_FAILURE:
      return { 
        error: action.error
      };
    case departmentConstants.GETDEPARTMENT_OFUSER_REQUEST:
      return {
        loading: true
      };
    case departmentConstants.GETDEPARTMENT_OFUSER_SUCCESS:
      return {
        ...state,
        unitofuser: action.departments
      };
    case departmentConstants.GETDEPARTMENT_OFUSER_FAILURE:
      return { 
        error: action.error
      };
    default:
      return state
  }
}