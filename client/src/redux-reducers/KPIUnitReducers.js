import { kpiUnitConstants } from "../redux-constants/CombineConstants";

export function kpiunits(state = {}, action) {
  switch (action.type) {
    case kpiUnitConstants.GETALL_KPIUNIT_REQUEST:
      return {
        loading: true
      };
    case kpiUnitConstants.GETALL_KPIUNIT_SUCCESS:
      return {
        ...state,
        loading: false,
        kpis: action.kpis.content
      };
    case kpiUnitConstants.GETALL_KPIUNIT_FAILURE:
      return {
        error: action.error
      };
    case kpiUnitConstants.GETCURRENT_KPIUNIT_REQUEST:
      return {
        ...state,
        loading: true
      };
    case kpiUnitConstants.GETCURRENT_KPIUNIT_SUCCESS:
      return {
        ...state,
        loading: false,
        currentKPI: action.currentKPI.content
      };
    case kpiUnitConstants.GETCURRENT_KPIUNIT_FAILURE:
      return {
        error: action.error
      };
    case kpiUnitConstants.GETCHILDTARGET_CURRENTTARGET_REQUEST:
      return {
        ...state,
        loading: true
      };
    case kpiUnitConstants.GETCHILDTARGET_CURRENTTARGET_SUCCESS:
      return {
        ...state,
        loading: false,
        childtarget: action.childtarget.content
      };
    case kpiUnitConstants.GETCHILDTARGET_CURRENTTARGET_FAILURE:
      return {
        error: action.error
      };
    case kpiUnitConstants.GETPARENT_KPIUNIT_REQUEST:
      return {
        ...state,
        loading: true
      };
    case kpiUnitConstants.GETPARENT_KPIUNIT_SUCCESS:
      return {
        ...state,
        loading: false,
        parent: action.parentKPI.content
      };
    case kpiUnitConstants.GETPARENT_KPIUNIT_FAILURE:
      return {
        error: action.error
      };
    case kpiUnitConstants.ADD_KPIUNIT_REQUEST:
      return {
        ...state,
        adding: true
      };
    case kpiUnitConstants.ADD_KPIUNIT_SUCCESS:
      return {
        ...state,
        adding: false,
        currentKPI: action.newKPI.kpiunit
      };
    case kpiUnitConstants.ADD_KPIUNIT_FAILURE:
      return {
        error: action.error
      };
    case kpiUnitConstants.EDIT_KPIUNIT_REQUEST:
      return {
        ...state,
        editing: true
      };
    case kpiUnitConstants.EDIT_KPIUNIT_SUCCESS:
      return {
        ...state,
        editing: false,
        currentKPI: action.newKPI.kpiunit
      };
    case kpiUnitConstants.EDIT_KPIUNIT_FAILURE:
      return {
        error: action.error
      };
    case kpiUnitConstants.EDITSTATUS_KPIUNIT_REQUEST:
      return {
        ...state,
        editing: true
      };
    case kpiUnitConstants.EDITSTATUS_KPIUNIT_SUCCESS:
      return {
        ...state,
        editing: false,
        currentKPI: action.newKPI.kpiunit
      };
    case kpiUnitConstants.EDITSTATUS_KPIUNIT_FAILURE:
      return {
        error: action.error
      };
    case kpiUnitConstants.EVALUATE_KPIUNIT_REQUEST:
      return {
        ...state,
        kpis: state.kpis.map(kpiunit =>
          kpiunit._id === action.id
            ? {...kpiunit, evaluating: true} : kpiunit)
      };
    case kpiUnitConstants.EVALUATE_KPIUNIT_SUCCESS:
      return {
        ...state,
        kpis: state.kpis.map(kpiunit =>
          kpiunit._id === action.newKPI.kpiunit._id
            ? action.newKPI.kpiunit : kpiunit)
      };
    case kpiUnitConstants.EVALUATE_KPIUNIT_FAILURE:
      return {
        error: action.error
      };
    case kpiUnitConstants.DELETE_KPIUNIT_REQUEST:
      return {
        ...state,
        deleting: true
      };
    case kpiUnitConstants.DELETE_KPIUNIT_SUCCESS:
      return {
        ...state,
        deleting: false,
        currentKPI: null
      };
    case kpiUnitConstants.DELETE_KPIUNIT_FAILURE:
      return {
        error: action.error
      };
    case kpiUnitConstants.ADDTARGET_KPIUNIT_REQUEST:
      return {
        ...state,
        adding: true
      };
    case kpiUnitConstants.ADDTARGET_KPIUNIT_SUCCESS:
      return {
        ...state,
        currentKPI: action.newKPI.kpiunit
      };
    case kpiUnitConstants.ADDTARGET_KPIUNIT_FAILURE:
      return {
        error: action.error
      };
    case kpiUnitConstants.EDITTARGET_KPIUNIT_REQUEST:
      return {
        ...state,
        currentKPI: {
          ...state.currentKPI,
          listtarget: state.currentKPI.listtarget.map(target =>
            target._id === action.id
              ? { ...target, editing: true }
              : target)
        }
      };
    case kpiUnitConstants.EDITTARGET_KPIUNIT_SUCCESS:
      return {
        ...state,
        currentKPI: {
          ...state.currentKPI,
          listtarget: state.currentKPI.listtarget.map(target =>
            target._id === action.newTarget.target._id
              ? action.newTarget.target : target)
        }
      };
    case kpiUnitConstants.EDITTARGET_KPIUNIT_FAILURE:
      return {
        error: action.error
      };
    case kpiUnitConstants.DELETETARGET_KPIUNIT_REQUEST:
      return {
        ...state,
        currentKPI: {
          ...state.currentKPI,
          listtarget: state.currentKPI.listtarget.map(target =>
            target._id === action.id
              ? { ...target, deleting: true }
              : target)
        }
      };
    case kpiUnitConstants.DELETETARGET_KPIUNIT_SUCCESS:
      return {
        ...state,
        currentKPI: action.newKPI.kpiunit
      };
    case kpiUnitConstants.DELETETARGET_KPIUNIT_FAILURE:
      return {
        error: action.error
      };
    default:
      return state
  }
}