import { authHeader } from '../../helpers/AuthHeader';
import { LOCAL_SERVER_API } from '../../redux-constants/config';
import axios from 'axios';

export const departmentsService = {
    get,
    create,
    getDepartmentInfo,
    addUserWithRole,
    deleteD
};

function get() {
    const requestOptions = {
        url: `${LOCAL_SERVER_API}/departments`,
        method: 'GET',
        headers: authHeader()
    };

    return axios(requestOptions);
}

function create(department) {
    const requestOptions = {
        url: `${LOCAL_SERVER_API}/departments/create`,
        method: 'POST',
        data: department,
        headers: authHeader()
    };

    return axios(requestOptions);
}

function getDepartmentInfo(id) {
    const requestOptions = {
        url: `${LOCAL_SERVER_API}/departments/info/${id}`,
        method: 'GET',
        headers: authHeader()
    };

    return axios(requestOptions);
}

function addUserWithRole(email, id) {
    const requestOptions = {
        url: `${LOCAL_SERVER_API}/departments/add/${id}`, //id của role
        method: 'POST',
        data: {email},
        headers: authHeader()
    };

    return axios(requestOptions);
}

function deleteD(id) {
    const requestOptions = {
        url: `${LOCAL_SERVER_API}/departments/${id}`,
        method: 'DELETE',
        headers: authHeader()
    };

    return axios(requestOptions);
}