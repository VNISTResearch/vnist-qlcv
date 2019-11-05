import {handleResponse} from '../helpers/HandleResponse';
export const kpiUnitService = {
    getAll,
    getById,
    getAllTargetUnitByIdUnit,
    getAllParentTargetUnitByIdUnit,
    addNewTargetUnit,
    editTargetUnit,
    comfirmKPIUnit,
    deleteTargetById
};
// get all target of aff unit
function getAll() {
    const requestOptions = {
        method: 'GET',
    };

    return fetch('/kpiunits', requestOptions).then(handleResponse);
}

// get a target of unit by id target 
function getById(id) {
    const requestOptions = {
        method: 'GET',
    };

    return fetch(`/kpiunits/${id}`, requestOptions).then(handleResponse);
}

// get all target of one unit
function getAllTargetUnitByIdUnit(id) {
    const requestOptions = {
        method: 'GET',
    };

    return fetch(`/kpiunits/unit/${id}`, requestOptions).then(handleResponse);
}

// get all parent target of one unit
function getAllParentTargetUnitByIdUnit(id) {
    const requestOptions = {
        method: 'GET',
    };

    return fetch(`/kpiunits/parent/${id}`, requestOptions).then(handleResponse);
}

// add new target of one unit 
function addNewTargetUnit(newTarget) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newTarget)
    };

    return fetch(`/kpiunits/create`, requestOptions).then(handleResponse);
}

// edit a target of unit by id
function editTargetUnit(id, newTarget) {
    const requestOptions = {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newTarget)
    };

    return fetch(`/kpiunits/${id}`, requestOptions).then(handleResponse);
}

// confirm final KPI unit
function comfirmKPIUnit(id) {
    const requestOptions = {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
    };

    return fetch(`/kpiunits/unit/${id}`, requestOptions).then(handleResponse);
}

// delete a target of unit
function deleteTargetById(id) {
    const requestOptions = {
        method: 'DELETE',
    };

    return fetch(`/kpiunits/${id}`, requestOptions).then(handleResponse);
}