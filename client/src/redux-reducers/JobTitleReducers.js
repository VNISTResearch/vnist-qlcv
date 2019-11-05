import { jobTitleConstants } from "../redux-constants/CombineConstants";

export function jobtitles(state = {}, action) {
  switch (action.type) {
    case jobTitleConstants.GETALL_REQUEST:
      return {
        loading: true
      };
    case jobTitleConstants.GETALL_SUCCESS:
      return {
        items: action.jobtitles
      };
    case jobTitleConstants.GETALL_FAILURE:
      return { 
        error: action.error
      };
    default:
      return state
  }
}