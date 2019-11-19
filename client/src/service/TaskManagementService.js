import {handleResponse} from '../helpers/HandleResponse';
import { authHeader } from '../helpers/AuthHeader';
export const taskManagementService = {
    getAll,
    getById,
    getAllTaskByRole,
    getAllTaskByUser,
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
function getAllTaskByUser(user, unit, number) {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };

    return fetch(`/tasks/user/${unit}/${user}/${number}`, requestOptions).then(handleResponse);
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