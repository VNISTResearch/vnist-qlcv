import {handleResponse} from '../helpers/HandleResponse';
export const taskManagementService = {
    getAll,
    getById,
    getAllTaskByRole,
    addNewTask,
    editTask,
    deleteTaskById
};
// get all task
function getAll() {
    const requestOptions = {
        method: 'GET',
    };

    return fetch('/tasks', requestOptions).then(handleResponse);
}

// get a task by id 
function getById(id) {
    const requestOptions = {
        method: 'GET',
    };

    return fetch(`/tasks/${id}`, requestOptions).then(handleResponse);
}

// get all task by Role
function getAllTaskByRole(id, role) {
    const requestOptions = {
        method: 'GET',
    };

    return fetch(`/tasks/role/${id}/${role}`, requestOptions).then(handleResponse);
}

// add new task
function addNewTask(newTask) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newTask)
    };

    return fetch(`/tasks/create`, requestOptions).then(handleResponse);
}

// edit a task
function editTask(id, newTask) {
    const requestOptions = {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newTask)
    };

    return fetch(`/tasks/${id}`, requestOptions).then(handleResponse);
}

// delete a task
function deleteTaskById(id) {
    const requestOptions = {
        method: 'DELETE',
    };

    return fetch(`/tasks/${id}`, requestOptions).then(handleResponse);
}