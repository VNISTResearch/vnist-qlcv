import {handleResponse} from '../helpers/HandleResponse';
import { authHeader } from '../helpers/AuthHeader';
export const taskManagementService = {
    getAll,
    getById,
    getAllTaskByRole,
    getResponsibleTaskByUser,
    addNewTask,
    editTask,
    deleteTaskById
};
// get all task
function getAll() {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };

    return fetch('/tasks', requestOptions).then(handleResponse);
}

// get a task by id 
function getById(id) {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };

    return fetch(`/tasks/${id}`, requestOptions).then(handleResponse);
}

// get all task by Role
function getAllTaskByRole(id, role) {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };

    return fetch(`/tasks/role/${id}/${role}`, requestOptions).then(handleResponse);

}
// get all task by Role
function getResponsibleTaskByUser(user, unit, number, perpage, status, priority, specical, name) {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };

    return fetch(`/tasks/user/task-responsible/${unit}/${user}/${number}/${perpage}/${status}/${priority}/${specical}/${name}`, requestOptions).then(handleResponse);
}

// add new task
function addNewTask(newTask) {
    const requestOptions = {
        method: 'POST',
        headers: authHeader(),
        body: JSON.stringify(newTask)
    };

    return fetch(`/tasks/create`, requestOptions).then(handleResponse);
}

// edit a task
function editTask(id, newTask) {
    const requestOptions = {
        method: 'PUT',
        headers: authHeader(),
        body: JSON.stringify(newTask)
    };

    return fetch(`/tasks/${id}`, requestOptions).then(handleResponse);
}

// delete a task
function deleteTaskById(id) {
    const requestOptions = {
        method: 'DELETE',
        headers: authHeader()
    };

    return fetch(`/tasks/${id}`, requestOptions).then(handleResponse);
}