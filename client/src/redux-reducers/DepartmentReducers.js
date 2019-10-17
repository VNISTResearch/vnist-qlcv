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
    default:
      return state
  }
}