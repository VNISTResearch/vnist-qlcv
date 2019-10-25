import { history } from "../helpers/History";
import { taskTemplateConstants } from "../redux-constants/TaskTemplateConstants";
import { alertActions } from "./AlertActions";
import { taskTemplateService } from "../service/CombineService";
export const taskTemplateActions = {
    addNewTemplate,
};

function addNewTemplate(newTemplate) {
    return dispatch => {
        dispatch(request(newTemplate));

        taskTemplateService.addNewTemplate(newTemplate)
            .then(
                taskTemplate => {
                    dispatch(success(taskTemplate));
                    history.push('/tasktemplate');
                },
                error => {
                    dispatch(failure(error.toString()));
                    dispatch(alertActions.error(error.toString()));
                }
            )
    }
    function request(taskTemplate) { return { type: taskTemplateConstants.ADDNEWTEMPLATE_REQUEST, taskTemplate } }
    function success(taskTemplate) { return { type: taskTemplateConstants.ADDNEWTEMPLATE_SUCCESS, taskTemplate } }
    function failure(error) { return { type: taskTemplateConstants.ADDNEWTEMPLATE_FAILURE, error } }
}