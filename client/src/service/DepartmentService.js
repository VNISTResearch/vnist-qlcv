import {handleResponse} from '../helpers/HandleResponse';
export const departmentService = {
    getAll
};
function getAll() {
    const requestOptions = {
        method: 'GET',
    };

    return fetch('/departments', requestOptions).then(handleResponse);
}

