import {handleResponse} from '../helpers/HandleResponse';
export const kpiPersonalService = {
    getAll,
    getById,
    getAllTargetPersonalByUserId,
    getAllParentTarget,
    addNewTargetPersonal,
    editTargetPersonal,
    comfirmKPIPersonal,
    deleteTargetById
};
// get all target of aff personal
function getAll() {
    const requestOptions = {
        method: 'GET',
    };

    return fetch('/kpipersonals', requestOptions).then(handleResponse);
}

// get a target of Personal by id target 
function getById(id) {
    const requestOptions = {
        method: 'GET',
    };

    return fetch(`/kpipersonals/${id}`, requestOptions).then(handleResponse);
}

// get all target of one Personal
function getAllTargetPersonalByUserId(id) {
    const requestOptions = {
        method: 'GET',
    };

    return fetch(`/kpipersonals/personal/${id}`, requestOptions).then(handleResponse);
}

// get all parent target of one Personal
function getAllParentTarget(id) {
    const requestOptions = {
        method: 'GET',
    };

    return fetch(`/kpipersonals/parent/${id}`, requestOptions).then(handleResponse);
}

// add new target of one Personal 
function addNewTargetPersonal(newTarget) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newTarget)
    };

    return fetch(`/kpipersonals/create`, requestOptions).then(handleResponse);
}

// edit a target of Personal by id
function editTargetPersonal(id, newTarget) {
    const requestOptions = {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newTarget)
    };

    return fetch(`/kpipersonals/${id}`, requestOptions).then(handleResponse);
}

// confirm final KPI Personal
function comfirmKPIPersonal(id) {
    const requestOptions = {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
    };

    return fetch(`/kpipersonals/personal/${id}`, requestOptions).then(handleResponse);
}

// delete a target of Personal
function deleteTargetById(id) {
    const requestOptions = {
        method: 'DELETE',
    };

    return fetch(`/kpipersonals/${id}`, requestOptions).then(handleResponse);
}