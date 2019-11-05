import { kpiPersonalConstants } from "../redux-constants/CombineConstants";

export function kpipersonals(state = {}, action) {
  switch (action.type) {
    case  kpiPersonalConstants.GETALLTARGET_BYIDUSER_REQUEST:
      return {
        loadingMany: true
      };
    case kpiPersonalConstants.GETALLTARGET_BYIDUSER_SUCCESS:
      return {
        ...state,
        items: action.targets.content
      };
    case kpiPersonalConstants.GETALLTARGET_BYIDUSER_FAILURE:
      return { 
        error: action.error
      };
    case  kpiPersonalConstants.GETALL_PARENTTARGET_REQUEST:
      return {
        loading: true
      };
    case kpiPersonalConstants.GETALL_PARENTTARGET_SUCCESS:
      return {
        ...state,
        parents: action.targets.content
      };
    case kpiPersonalConstants.GETALL_PARENTTARGET_FAILURE:
      return { 
        error: action.error
      };
    case  kpiPersonalConstants.GETTARGET_BYID_REQUEST:
      return {
        loadingOne: true
      };
    case kpiPersonalConstants.GETTARGET_BYID_SUCCESS:
      return {
        ...state,
        items: action.departments
      };
    case kpiPersonalConstants.GETTARGET_BYID_FAILURE:
      return { 
        error: action.error
      };
    case  kpiPersonalConstants.ADDTARGET_REQUEST:
      return {
        ...state,
        adding: true
      };
    case kpiPersonalConstants.ADDTARGET_SUCCESS:
      return {
          ...state,
          items: [
            ...state.items,
            action.target.kpipersonal
          ]
      };
    case kpiPersonalConstants.ADDTARGET_FAILURE:
      return { 
        error: action.error
      };
    case  kpiPersonalConstants.EDITTARGET_REQUEST:
      return {
        ...state,
        items: state.items.map(kpipersonal =>
          kpipersonal._id === action.id
            ? { ...kpipersonal, editing: true }
            : kpipersonal
        )
      };
    case kpiPersonalConstants.EDITTARGET_SUCCESS:
      return {
        ...state,
        items: state.items.map(kpipersonal =>
          kpipersonal._id === action.target.kpipersonal._id
            ? action.target.kpipersonal:kpipersonal
            )
      };
    case kpiPersonalConstants.EDITTARGET_FAILURE:
      return { 
        error: action.error
      };
    case  kpiPersonalConstants.CONFIRM_REQUEST:
      return {
        ...state,
        confirming: true
      };
    case kpiPersonalConstants.CONFIRM_SUCCESS:
      return {
        ...state,
        items: state.items.map(kpipersonal => ({
            ...kpipersonal, confirm: true
        }))
      };
    case kpiPersonalConstants.CONFIRM_FAILURE:
      return { 
        error: action.error
      };
    case  kpiPersonalConstants.DELETETARGET_REQUEST:
      return {
        ...state,
        items: state.items.map(kpipersonal =>
          kpipersonal._id === action.id
            ? { ...kpipersonal, deleting: true }
            : kpipersonal
        )
      };
    case kpiPersonalConstants.DELETETARGET_SUCCESS:
      return {
        ...state,
        items: state.items.filter(kpipersonal => kpipersonal._id !== action.id)
      };
    case kpiPersonalConstants.DELETETARGET_FAILURE:
      return { 
        error: action.error
      };
    default:
      return state
  }
}