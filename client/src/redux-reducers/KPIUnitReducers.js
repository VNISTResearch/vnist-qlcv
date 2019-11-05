import { kpiUnitConstants } from "../redux-constants/CombineConstants";

export function kpiunits(state = {}, action) {
  switch (action.type) {
    case  kpiUnitConstants.GETALLTARGET_BYIDUNIT_REQUEST:
      return {
        loadingMany: true
      };
    case kpiUnitConstants.GETALLTARGET_BYIDUNIT_SUCCESS:
      return {
        ...state,
        items: action.targets.content
      };
    case kpiUnitConstants.GETALLTARGET_BYIDUNIT_FAILURE:
      return { 
        error: action.error
      };
    case  kpiUnitConstants.GETALL_PARENTTARGET_REQUEST:
      return {
        loading: true
      };
    case kpiUnitConstants.GETALL_PARENTTARGET_SUCCESS:
      return {
        ...state,
        parents: action.targets.content
      };
    case kpiUnitConstants.GETALL_PARENTTARGET_FAILURE:
      return { 
        error: action.error
      };
    case  kpiUnitConstants.GETTARGET_BYID_REQUEST:
      return {
        loadingOne: true
      };
    case kpiUnitConstants.GETTARGET_BYID_SUCCESS:
      return {
        ...state,
        items: action.departments
      };
    case kpiUnitConstants.GETTARGET_BYID_FAILURE:
      return { 
        error: action.error
      };
    case  kpiUnitConstants.ADDTARGET_REQUEST:
      return {
        ...state,
        adding: true
      };
    case kpiUnitConstants.ADDTARGET_SUCCESS:
      return {
          ...state,
          items: [
            ...state.items,
            action.target.kpiunit
          ]
      };
    case kpiUnitConstants.ADDTARGET_FAILURE:
      return { 
        error: action.error
      };
    case  kpiUnitConstants.EDITTARGET_REQUEST:
      return {
        ...state,
        items: state.items.map(kpiunit =>
          kpiunit._id === action.id
            ? { ...kpiunit, editing: true }
            : kpiunit
        )
      };
    case kpiUnitConstants.EDITTARGET_SUCCESS:
      return {
        ...state,
        items: state.items.map(kpiunit =>
          kpiunit._id === action.target.kpiunit._id
            ? action.target.kpiunit:kpiunit
            )
      };
    case kpiUnitConstants.EDITTARGET_FAILURE:
      return { 
        error: action.error
      };
    case  kpiUnitConstants.CONFIRM_REQUEST:
      return {
        confirming: true
      };
    case kpiUnitConstants.CONFIRM_SUCCESS:
      return {
        items: action.departments
      };
    case kpiUnitConstants.CONFIRM_FAILURE:
      return { 
        error: action.error
      };
    case  kpiUnitConstants.DELETETARGET_REQUEST:
      return {
        ...state,
        items: state.items.map(kpiunit =>
          kpiunit._id === action.id
            ? { ...kpiunit, deleting: true }
            : kpiunit
        )
      };
    case kpiUnitConstants.DELETETARGET_SUCCESS:
      return {
        ...state,
        items: state.items.filter(kpiunit => kpiunit._id !== action.id)
      };
    case kpiUnitConstants.DELETETARGET_FAILURE:
      return { 
        error: action.error
      };
    default:
      return state
  }
}