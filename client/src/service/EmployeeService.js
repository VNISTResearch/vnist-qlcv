import {handleResponse} from '../helpers/HandleResponse';
export const employeeService = {
    getAll,
    addNewEmployee,
    getByID,
}

// get all imformaltion employee
function getAll() {
    const requestOptions = {
        method: 'GET',
    }

    return fetch(`/employees/`,requestOptions).then(handleResponse);
}

// add new employee
function addNewEmployee(newEmployee) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type' : 'application/json'},
        body: JSON.stringify(newEmployee)
    };

    return fetch(`/employees/create`, requestOptions).then(handleResponse);


}

function getByID() {
    
}

