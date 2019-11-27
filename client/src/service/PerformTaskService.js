import {handleResponse} from '../helpers/HandleResponse';
import { authHeader } from '../helpers/AuthHeader';
export const performTaskService = {
    getLogTimerTask,
    getTimerStatusTask,
    startTimerTask,
    stopTimerTask,
    pauseTimerTask,
    addCommentTask,
    deleteCommentTask,
    editCommentTask,
    getCommentTask
};
// get all log timer task
function getLogTimerTask(task) {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };

    return fetch(`/performtask/log-timer/${task}`, requestOptions).then(handleResponse);
}

// get current status task
function getTimerStatusTask(task) {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };

    return fetch(`/performtask/log-timer/currentTimer/${task}`, requestOptions).then(handleResponse);
}

// start timer task
function startTimerTask(newTimer) {
    const requestOptions = {
        method: 'POST',
        body: JSON.stringify(newTimer),
        headers: authHeader()
    };

    return fetch(`/performtask/log-timer/start-timer`, requestOptions).then(handleResponse);

}
// stop timer task
function stopTimerTask(id) {
    const requestOptions = {
        method: 'PUT',
        headers: authHeader()
    };

    return fetch(`/performtask/log-timer/stop-timer/${id}`, requestOptions).then(handleResponse);
}

// pause timer task
function pauseTimerTask(id) {
    const requestOptions = {
        method: 'PUT',
        headers: authHeader()
    };

    return fetch(`/performtask/log-timer/pause-timer/${id}`, requestOptions).then(handleResponse);
}

// get all comment task
function getCommentTask(task) {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };

    return fetch(`/performtask/comment-task/${task}`, requestOptions).then(handleResponse);
}

// add comment task
function addCommentTask(newComment) {
    const requestOptions = {
        method: 'POST',
        headers: authHeader(),
        body: JSON.stringify(newComment)
    };

    return fetch(`/performtask/comment-task/create`, requestOptions).then(handleResponse);
}

// edit comment task
function editCommentTask(id, newComment) {
    const requestOptions = {
        method: 'PUT',
        headers: authHeader(),
        body: JSON.stringify(newComment)
    };

    return fetch(`/performtask/comment-task/${id}`, requestOptions).then(handleResponse);
}

// delete comment task
function deleteCommentTask(id) {
    const requestOptions = {
        method: 'DELETE',
        headers: authHeader()
    };

    return fetch(`/performtask/comment-task/${id}`, requestOptions).then(handleResponse);
}