import { kpiPersonalConstants } from "../redux-constants/CombineConstants";

export function kpipersonals(state = {}, action) {
  switch (action.type) {
    case  kpiPersonalConstants.GETALL_KPIPERSONAL_OfUNIT_REQUEST:
      return {
        loading: true
      };
    case kpiPersonalConstants.GETALL_KPIPERSONAL_OfUNIT_SUCCESS:
      return {
        ...state,
        loading: false,
        kpipersonals: action.kpipersonals.content
      };
    case kpiPersonalConstants.GETALL_KPIPERSONAL_OfUNIT_FAILURE:
      return { 
        error: action.error
      };
    case  kpiPersonalConstants.GETALL_KPIPERSONAL_REQUEST:
      return {
        ...state,
        loading: true
      };
    case kpiPersonalConstants.GETALL_KPIPERSONAL_SUCCESS:
      return {
        ...state,
        loading: false,
        kpipersonals: action.kpipersonals.content
      };
    case kpiPersonalConstants.GETALL_KPIPERSONAL_FAILURE:
      return { 
        error: action.error
      };
    case  kpiPersonalConstants.GETALL_KPIPERSONAL_OFTASK_REQUEST:
      return {
        ...state,
        loading: true
      };
    case kpiPersonalConstants.GETALL_KPIPERSONAL_OFTASK_SUCCESS:
      return {
        ...state,
        loading: false,
        kpipersonals: action.kpipersonals.content
      };
    case kpiPersonalConstants.GETALL_KPIPERSONAL_OFTASK_FAILURE:
      return { 
        error: action.error
      };
    case  kpiPersonalConstants.GET_KPIPERSONAL_BYID_REQUEST:
      return {
        ...state,
        loading: true
      };
    case kpiPersonalConstants.GET_KPIPERSONAL_BYID_SUCCESS:
      return {
        ...state,
        loading: false,
        currentKPI: action.kpipersonal.content
      };
    case kpiPersonalConstants.GET_KPIPERSONAL_BYID_FAILURE:
      return { 
        error: action.error
      };
    case  kpiPersonalConstants.GET_KPIPERSONAL_BYMONTH_REQUEST:
      return {
        ...state,
        loading: true
      };
    case kpiPersonalConstants.GET_KPIPERSONAL_BYMONTH_SUCCESS:
      return {
        ...state,
        loading: false,
        kpimember: action.kpipersonal.content
      };
    case kpiPersonalConstants.GET_KPIPERSONAL_BYMONTH_FAILURE:
      return { 
        error: action.error
      };
    case  kpiPersonalConstants.GETCURRENT_KPIPERSONAL_REQUEST:
      return {
        loading: true
      };
    case kpiPersonalConstants.GETCURRENT_KPIPERSONAL_SUCCESS:
      return {
        ...state,
        loading: false,
        currentKPI: action.kpipersonal.content
      };
    case kpiPersonalConstants.GETCURRENT_KPIPERSONAL_FAILURE:
      return { 
        error: action.error
      };
    case  kpiPersonalConstants.ADD_KPIPERSONAL_REQUEST:
      return {
        adding: true
      };
    case kpiPersonalConstants.ADD_KPIPERSONAL_SUCCESS:
      return {
        ...state,
        adding: false,
        currentKPI: action.newKPI.kpipersonal
      };
    case kpiPersonalConstants.ADD_KPIPERSONAL_FAILURE:
      return { 
        error: action.error
      };
    case  kpiPersonalConstants.EDIT_KPIPERSONAL_REQUEST:
      return {
        ...state,
        adding: true
      };
    case kpiPersonalConstants.EDIT_KPIPERSONAL_SUCCESS:
      return {
          ...state,
          items: [
            ...state.items,
            action.target.kpipersonal
          ]
      };
    case kpiPersonalConstants.EDIT_KPIPERSONAL_FAILURE:
      return { 
        error: action.error
      };
    case  kpiPersonalConstants.EDITSTATUS_KPIPERSONAL_REQUEST:
      return {
        ...state,
        editing: true
      };
    case kpiPersonalConstants.EDITSTATUS_KPIPERSONAL_SUCCESS:
      return {
        ...state,
        editing: false,
        currentKPI: action.newKPI.kpipersonal
      };
    case kpiPersonalConstants.EDITSTATUS_KPIPERSONAL_FAILURE:
      return { 
        error: action.error
      };
    case  kpiPersonalConstants.APPROVE_KPIPERSONAL_REQUEST:
      return {
        ...state,
        confirming: true
      };
    case kpiPersonalConstants.APPROVE_KPIPERSONAL_SUCCESS:
      return {
        ...state,
        currentKPI: action.newKPI.kpipersonal,
        kpipersonals: state.kpipersonals.map(item=>
          item._id===action.newKPI.kpipersonal._id?action.newKPI.kpipersonal:item)
      };
    case kpiPersonalConstants.APPROVE_KPIPERSONAL_FAILURE:
      return { 
        error: action.error
      };
    case  kpiPersonalConstants.DELETE_KPIPERSONAL_REQUEST:
      return {
        ...state,
        deleting: true
      };
    case kpiPersonalConstants.DELETE_KPIPERSONAL_SUCCESS:
      return {
        ...state,
        deleting: false,
        currentKPI: null
      };
    case kpiPersonalConstants.DELETE_KPIPERSONAL_FAILURE:
      return { 
        error: action.error
      };
      case  kpiPersonalConstants.ADDTARGET_KPIPERSONAL_REQUEST:
      return {
        loading: true
      };
    case kpiPersonalConstants.ADDTARGET_KPIPERSONAL_SUCCESS:
      return {
        ...state,
        currentKPI: action.newKPI.kpipersonal
      };
    case kpiPersonalConstants.ADDTARGET_KPIPERSONAL_FAILURE:
      return { 
        error: action.error
      };
      case  kpiPersonalConstants.EDITTARGET_KPIPERSONAL_REQUEST:
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
    case kpiPersonalConstants.EDITTARGET_KPIPERSONAL_SUCCESS:
      return {
          ...state,
          currentKPI: {
            ...state.currentKPI,
            listtarget: state.currentKPI.listtarget.map(target =>
              target._id === action.newTarget.target._id
                ? action.newTarget.target : target)
          }
      };
    case kpiPersonalConstants.EDITTARGET_KPIPERSONAL_FAILURE:
      return { 
        error: action.error
      };
    case  kpiPersonalConstants.EDITSTATUS_TARGET_KPIPERSONAL_REQUEST:
      return {
        ...state,
        editing: true
      };
    case kpiPersonalConstants.EDITSTATUS_TARGET_KPIPERSONAL_SUCCESS:
      return {
        ...state,
        editing: false,
        currentKPI: action.newKPI.newKPI,
        kpipersonals: state.kpipersonals.map(item=>
          item._id===action.newKPI.newKPI._id?action.newKPI.newKPI:item)
      };
    case kpiPersonalConstants.EDITSTATUS_TARGET_KPIPERSONAL_FAILURE:
      return { 
        error: action.error
      };
      case  kpiPersonalConstants.DELETETARGET_KPIPERSONAL_REQUEST:
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
    case kpiPersonalConstants.DELETETARGET_KPIPERSONAL_SUCCESS:
      return {
        ...state,
        currentKPI: action.newKPI.kpipersonal
      };
    case kpiPersonalConstants.DELETETARGET_KPIPERSONAL_FAILURE:
      return { 
        error: action.error
      };
    default:
      return state
  }
}