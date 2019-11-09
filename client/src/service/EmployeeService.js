import {
    handleResponse
} from '../helpers/HandleResponse';
export const employeeService = {
    getAll,
    addNewEmployee,
    getByEmployeeNumber,
    updateInformationEmpoyee
    
}

// get all imformaltion employee
function getAll() {
    const requestOptions = {
        method: 'GET',
    }

    return fetch(`/employees/`, requestOptions).then(handleResponse);
}

// get information employee by employeeNumber
function getByEmployeeNumber(id) {
    const requestOptions = {
        method: 'GET',
    }
    return fetch(`/employees/${id}`, requestOptions).then(handleResponse);
}

// add new employee
function addNewEmployee(newEmployee) {
    const requestOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newEmployee)
    };

    return fetch(`/employees/create`, requestOptions).then(handleResponse)

}

// update information employee

function updateInformationEmpoyee(id, information) {
    const requestOptions = {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(information)
    };
    return fetch(`employees/${id}`,requestOptions).then(handleResponse)
}