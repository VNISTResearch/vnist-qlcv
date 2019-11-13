import {handleResponse} from '../helpers/HandleResponse';
export const taskTemplateService = {
    getAll,
    getById,
    getAllTaskTemplateByRole,
    getAllTaskTemplateByUser,
    addNewTaskTemplate,
    editTaskTemplate,
    deleteTaskTemplateById
};
// get all task template
function getAll() {
    const requestOptions = {
        method: 'GET',
    };

    return fetch('/tasktemplates', requestOptions).then(handleResponse);
}

// get a task template by id 
function getById(id) {
    const requestOptions = {
        method: 'GET',
    };

    return fetch(`/tasktemplates/${id}`, requestOptions).then(handleResponse);
}

// get all task template by Role
function getAllTaskTemplateByRole(id) {
    const requestOptions = {
        method: 'GET',
    };

    return fetch(`/tasktemplates/role/${id}`, requestOptions).then(handleResponse);
}

// get all task template by User
function getAllTaskTemplateByUser(id, pageNumber) {
    const requestOptions = {
        method: 'GET',
    };

    return fetch(`/tasktemplates/user/${id}/${pageNumber}`, requestOptions).then(handleResponse);
}

// add new task template
function addNewTaskTemplate(newTaskTemplate) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newTaskTemplate)
    };

    return fetch(`/tasktemplates/create`, requestOptions).then(handleResponse);
}

// edit a task template
function editTaskTemplate(id, newTaskTemplate) {
    const requestOptions = {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newTaskTemplate)
    };

    return fetch(`/tasktemplates/${id}`, requestOptions).then(handleResponse);
}

// delete a task template
function deleteTaskTemplateById(id) {
    const requestOptions = {
        method: 'DELETE',
    };

    return fetch(`/tasktemplates/${id}`, requestOptions).then(handleResponse);
}