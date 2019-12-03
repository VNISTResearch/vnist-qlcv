import { performTaskConstants } from "../redux-constants/CombineConstants";

export function performtasks(state = {}, action) {
    switch (action.type) {
        case performTaskConstants.GET_COMMENTTASK_REQUEST:
            return {
                ...state,
                loading: true
            };
        case performTaskConstants.GET_COMMENTTASK_SUCCESS:
            return {
                ...state,
                commenttasks: action.commentTasks
            };
        case performTaskConstants.GET_COMMENTTASK_FAILURE:
            return {
                error: action.error
            };
        case performTaskConstants.ADDNEW_COMMENTTASK_REQUEST:
            return {
                ...state,
                adding: true
            };
        case performTaskConstants.ADDNEW_COMMENTTASK_SUCCESS:
            return {
                ...state,
                commenttasks: [
                    ...state.commenttasks,
                    action.newComment.commentTask
                ]
            };
        case performTaskConstants.ADDNEW_COMMENTTASK_FAILURE:
            return {
                error: action.error
            };
        case performTaskConstants.EDIT_COMMENTTASK_REQUEST:
            return {
                ...state,
                items: state.items.map(task =>
                    task._id === action.id
                        ? { ...task, editing: true }
                        : task
                )
            };
        case performTaskConstants.EDIT_COMMENTTASK_SUCCESS:
            return {
                ...state,
                items: state.items.map(task =>
                    task._id === action.task.task._id
                        ? action.task.task : task
                )
            };
        case performTaskConstants.EDIT_COMMENTTASK_FAILURE:
            return {
                error: action.error
            };
        case performTaskConstants.DELETE_COMMENTTASK_REQUEST:
            return {
                ...state,
                items: state.items.map(task =>
                    task._id === action.id
                        ? { ...task, deleting: true }
                        : task
                )
            };
        case performTaskConstants.DELETE_COMMENTTASK_SUCCESS:
            return {
                ...state,
                items: state.items.filter(task => task._id !== action.id)
            };
        case performTaskConstants.DELETE_COMMENTTASK_FAILURE:
            return {
                error: action.error
            };
        default:
            return state
    }
}