import { taskManagementConstants } from "../redux-constants/TaskManagementConstants";
import { alertActions } from "./AlertActions";
import { taskManagementService } from "../service/CombineService";
export const taskManagementActions = {
    getAll,
    getAllTaskByRole,
    getResponsibleTaskByUser,
    getAccounatableTaskByUser,
    getConsultedTaskByUser,
    getInformedTaskByUser,
    getCreatorTaskByUser,
    getTaskById,
    addTask,
    editTask,
    _delete
};

// Get all task
function getAll() {
    return dispatch => {
        dispatch(request());

        taskManagementService.getAll()
            .then(
                tasks => dispatch(success(tasks)),
                error => dispatch(failure(error.toString()))
            );
    };

    function request() { return { type: taskManagementConstants.GETALL_TASK_REQUEST } }
    function success(tasks) { return { type: taskManagementConstants.GETALL_TASK_SUCCESS, tasks } }
    function failure(error) { return { type: taskManagementConstants.GETALL_TASK_FAILURE, error } }
}

// Get all task by role and creator
function getAllTaskByRole(id, role) {
    return dispatch => {
        dispatch(request(id));

        taskManagementService.getAllTaskByRole(id, role)
            .then(
                tasks => dispatch(success(tasks)),
                error => dispatch(failure(error.toString()))
            );
    };

    function request(id) { return { type: taskManagementConstants.GETTASK_BYROLE_REQUEST, id } }
    function success(tasks) { return { type: taskManagementConstants.GETTASK_BYROLE_SUCCESS, tasks } }
    function failure(error) { return { type: taskManagementConstants.GETTASK_BYROLE_FAILURE, error } }
}

// Get all task by user
function getResponsibleTaskByUser(user, unit, number, perpage, status, priority, specical, name) {
    return dispatch => {
        dispatch(request(user));

        taskManagementService.getResponsibleTaskByUser(user, unit, number, perpage, status, priority, specical, name)
            .then(
                taskResponsibles => dispatch(success(taskResponsibles)),
                error => dispatch(failure(error.toString()))
            );
    };

    function request(user) { return { type: taskManagementConstants.GETTASK_RESPONSIBLE_BYUSER_REQUEST, user } }
    function success(taskResponsibles) { return { type: taskManagementConstants.GETTASK_RESPONSIBLE_BYUSER_SUCCESS, taskResponsibles } }
    function failure(error) { return { type: taskManagementConstants.GETTASK_RESPONSIBLE_BYUSER_FAILURE, error } }
}

// Get all task by user
function getAccounatableTaskByUser(user, unit, number, perpage, status, priority, specical, name) {
    return dispatch => {
        dispatch(request(user));

        taskManagementService.getAccounatableTaskByUser(user, unit, number, perpage, status, priority, specical, name)
            .then(
                taskAccounatables => dispatch(success(taskAccounatables)),
                error => dispatch(failure(error.toString()))
            );
    };

    function request(user) { return { type: taskManagementConstants.GETTASK_ACCOUNATABLE_BYUSER_REQUEST, user } }
    function success(taskAccounatables) { return { type: taskManagementConstants.GETTASK_ACCOUNATABLE_BYUSER_SUCCESS, taskAccounatables } }
    function failure(error) { return { type: taskManagementConstants.GETTASK_ACCOUNATABLE_BYUSER_FAILURE, error } }
}

// Get all task by user
function getConsultedTaskByUser(user, unit, number, perpage, status, priority, specical, name) {
    return dispatch => {
        dispatch(request(user));

        taskManagementService.getConsultedTaskByUser(user, unit, number, perpage, status, priority, specical, name)
            .then(
                taskConsulteds => dispatch(success(taskConsulteds)),
                error => dispatch(failure(error.toString()))
            );
    };

    function request(user) { return { type: taskManagementConstants.GETTASK_CONSULTED_BYUSER_REQUEST, user } }
    function success(taskConsulteds) { return { type: taskManagementConstants.GETTASK_CONSULTED_BYUSER_SUCCESS, taskConsulteds } }
    function failure(error) { return { type: taskManagementConstants.GETTASK_CONSULTED_BYUSER_FAILURE, error } }
}

// Get all task by user
function getInformedTaskByUser(user, unit, number, perpage, status, priority, specical, name) {
    return dispatch => {
        dispatch(request(user));

        taskManagementService.getInformedTaskByUser(user, unit, number, perpage, status, priority, specical, name)
            .then(
                taskInformeds => dispatch(success(taskInformeds)),
                error => dispatch(failure(error.toString()))
            );
    };

    function request(user) { return { type: taskManagementConstants.GETTASK_INFORMED_BYUSER_REQUEST, user } }
    function success(taskInformeds) { return { type: taskManagementConstants.GETTASK_INFORMED_BYUSER_SUCCESS, taskInformeds } }
    function failure(error) { return { type: taskManagementConstants.GETTASK_INFORMED_BYUSER_FAILURE, error } }
}

// Get all task by user
function getCreatorTaskByUser(user, unit, number, perpage, status, priority, specical, name) {
    return dispatch => {
        dispatch(request(user));

        taskManagementService.getCreatorTaskByUser(user, unit, number, perpage, status, priority, specical, name)
            .then(
                taskCreators => dispatch(success(taskCreators)),
                error => dispatch(failure(error.toString()))
            );
    };

    function request(user) { return { type: taskManagementConstants.GETTASK_CREATOR_BYUSER_REQUEST, user } }
    function success(taskCreators) { return { type: taskManagementConstants.GETTASK_CREATOR_BYUSER_SUCCESS, taskCreators } }
    function failure(error) { return { type: taskManagementConstants.GETTASK_CREATOR_BYUSER_FAILURE, error } }
}

// Get task template by id
function getTaskById(id) {
    return dispatch => {
        dispatch(request(id));

        taskManagementService.getById(id)
            .then(
                task=> dispatch(success(task)),
                error => dispatch(failure(error.toString()))
            );
    };

    function request(id) { return { type: taskManagementConstants.GETTASK_BYID_REQUEST, id } }
    function success(task, id) { return { type: taskManagementConstants.GETTASK_BYID_SUCCESS, task, id } }
    function failure(error) { return { type: taskManagementConstants.GETTASK_BYID_FAILURE, error } }
}

// Add a new task of user
function addTask(task) {
    return dispatch => {
        dispatch(request(task));

        taskManagementService.addNewTask(task)
            .then(
                task => { 
                    dispatch(success(task));
                    dispatch(alertActions.success('Add task successful'));
                },
                error => {
                    dispatch(failure(error.toString()));
                    dispatch(alertActions.error(error.toString()));
                }
            );
    };

    function request(task) { return { type: taskManagementConstants.ADDNEW_TASK_REQUEST, task } }
    function success(task) { return { type: taskManagementConstants.ADDNEW_TASK_SUCCESS, task } }
    function failure(error) { return { type: taskManagementConstants.ADDNEW_TASK_FAILURE, error } }
}

// Edit a task
function editTask(id, task) {
    return dispatch => {
        dispatch(request(id));

        taskManagementService.editTaskTemplate(id, task)
            .then(
                task => { 
                    dispatch(success(task));
                    dispatch(alertActions.success('Edit target successful'));
                },
                error => {
                    dispatch(failure(error.toString()));
                    dispatch(alertActions.error(error.toString()));
                }
            );
    };

    function request(id) { return { type: taskManagementConstants.EDIT_TASK_REQUEST, id } }
    function success(task) { return { type: taskManagementConstants.EDIT_TASK_SUCCESS, task } }
    function failure(error) { return { type: taskManagementConstants.EDIT_TASK_FAILURE, error } }
}

// prefixed function name with underscore because delete is a reserved word in javascript
function _delete(id) {
    return dispatch => {
        dispatch(request(id));

        taskManagementService.deleteTaskById(id)
            .then(
                taskTemplate => dispatch(success(id)),
                error => dispatch(failure(id, error.toString()))
            );
    };

    function request(id) { return { type: taskManagementConstants.DELETE_TASK_REQUEST, id } }
    function success(id) { return { type: taskManagementConstants.DELETE_TASK_SUCCESS, id } }
    function failure(id, error) { return { type: taskManagementConstants.DELETE_TASK_FAILURE, id, error } }
}