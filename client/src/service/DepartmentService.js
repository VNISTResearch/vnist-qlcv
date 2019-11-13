import {handleResponse} from '../helpers/HandleResponse';
export const departmentService = {
    getAll,
    getDepartmentOfUser
};
function getAll() {
    const requestOptions = {
        method: 'GET',
    };

    return fetch('/departments', requestOptions).then(handleResponse);
}
function getDepartmentOfUser(id) {
    const requestOptions = {
        method: 'GET',
    };

    return fetch(`/departments/department-of-user/${id}`, requestOptions).then(handleResponse);
}

