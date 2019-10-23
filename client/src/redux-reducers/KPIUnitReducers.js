import { kpiUnitConstants } from "../redux-constants/CombineConstants";

export function kpiunits(state = {}, action) {
  switch (action.type) {
    case  kpiUnitConstants.GETALLTARGET_BYIDUNIT_REQUEST:
      return {
        loadingMany: true
      };
    case kpiUnitConstants.GETALLTARGET_BYIDUNIT_SUCCESS:
      return {
        items: action.departments
      };
    case kpiUnitConstants.GETALLTARGET_BYIDUNIT_FAILURE:
      return { 
        error: action.error
      };
    case  kpiUnitConstants.GETTARGET_BYID_REQUEST:
      return {
        loadingOne: true
      };
    case kpiUnitConstants.GETTARGET_BYID_SUCCESS:
      return {
        items: action.departments
      };
    case kpiUnitConstants.GETTARGET_BYID_FAILURE:
      return { 
        error: action.error
      };
    case  kpiUnitConstants.ADDTARGET_REQUEST:
      return {
        adding: true
      };
    case kpiUnitConstants.ADDTARGET_SUCCESS:
      return {
        items: action.departments
      };
    case kpiUnitConstants.ADDTARGET_FAILURE:
      return { 
        error: action.error
      };
    case  kpiUnitConstants.EDITTARGET_REQUEST:
      return {
        editing: true
      };
    case kpiUnitConstants.EDITTARGET_SUCCESS:
      return {
        items: action.departments
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
        deleting: true
      };
    case kpiUnitConstants.DELETETARGET_SUCCESS:
      return {
        items: action.departments
      };
    case kpiUnitConstants.DELETETARGET_FAILURE:
      return { 
        error: action.error
      };
    default:
      return state
  }
}