import { taskTemplateConstants } from "../redux-constants/TaskTemplateConstants";

export function tasktemplates(state = {}, action) {
    switch (action.type) {
        case taskTemplateConstants.ADDNEWTEMPLATE_REQUEST:
            return { adding: true };
        case taskTemplateConstants.ADDNEWTEMPLATE_SUCCESS:
            return {};
        case taskTemplateConstants.ADDNEWTEMPLATE_FAILURE:
            return {};
        default:
            return state
    }
}