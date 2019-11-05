import { taskManagementConstants } from "../redux-constants/CombineConstants";

export function tasks(state = {}, action) {
    switch (action.type) {
        case taskManagementConstants.GETALL_TASK_REQUEST:
            return {
                loading: true
            };
        case taskManagementConstants.GETALL_TASK_SUCCESS:
            return {
                ...state,
                items: action.tasks
            };
        case taskManagementConstants.GETALL_TASK_FAILURE:
            return {
                error: action.error
            };
        case taskManagementConstants.GETTASK_BYID_REQUEST:
            return {
                loading: true
            };
        case taskManagementConstants.GETTASK_BYID_SUCCESS:
            return {
                ...state,
                task: action.task
            };
        case taskManagementConstants.GETTASK_BYID_FAILURE:
            return {
                error: action.error
            };
        case taskManagementConstants.GETTASK_BYROLE_REQUEST:
            return {
                loadingMany: true
            };
        case taskManagementConstants.GETTASK_BYROLE_SUCCESS:
            return {
                ...state,
                items: action.tasks
            };
        case taskManagementConstants.GETTASK_BYROLE_FAILURE:
            return {
                error: action.error
            };
        case taskManagementConstants.ADDNEW_TASK_REQUEST:
            return {
                ...state,
                adding: true
            };
        case taskManagementConstants.ADDNEW_TASK_SUCCESS:
            return {
                ...state,
                items: [
                    ...state.items,
                    action.task.data
                ]
            };
        case taskManagementConstants.ADDNEW_TASK_FAILURE:
            return {
                error: action.error
            };
        case taskManagementConstants.EDIT_TASK_REQUEST:
            return {
                ...state,
                items: state.items.map(task =>
                    task._id === action.id
                        ? { ...task, editing: true }
                        : task
                )
            };
        case taskManagementConstants.EDIT_TASK_SUCCESS:
            return {
                ...state,
                items: state.items.map(task =>
                    task._id === action.task.task._id
                        ? action.task.task : task
                )
            };
        case taskManagementConstants.EDIT_TASK_FAILURE:
            return {
                error: action.error
            };
        case taskManagementConstants.DELETE_TASK_REQUEST:
            return {
                ...state,
                items: state.items.map(task =>
                    task._id === action.id
                        ? { ...task, deleting: true }
                        : task
                )
            };
        case taskManagementConstants.DELETE_TASK_SUCCESS:
            return {
                ...state,
                items: state.items.filter(task => task._id !== action.id)
            };
        case taskManagementConstants.DELETE_TASK_FAILURE:
            return {
                error: action.error
            };
        default:
            return state
    }
}