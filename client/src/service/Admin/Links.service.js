import { authHeader } from '../../helpers/AuthHeader';
import { LOCAL_SERVER_API } from '../../redux-constants/config';
import axios from 'axios';

export const linksService = {
    get,
    getById,
    create,
    addRoleToLink
};

function get() {
    const requestOptions = {
        url: `${LOCAL_SERVER_API}/links`,
        method: 'GET',
        headers: authHeader()
    };

    return axios(requestOptions);
}

function getById(id) {
    const requestOptions = {
        url: `${LOCAL_SERVER_API}/links/${id}`,
        method: 'GET',
        headers: authHeader()
    };

    return axios(requestOptions);
}

function create(url, description) {
    const requestOptions = {
        url: `${LOCAL_SERVER_API}/links`,
        method: 'POST',
        data: { url, description },
        headers: authHeader()
    };

    return axios(requestOptions);
}

function addRoleToLink(url, role) {
    const requestOptions = {
        url: `${LOCAL_SERVER_API}/links/add-role`,
        method: 'POST',
        data: { url, role },
        headers: authHeader()
    };

    return axios(requestOptions);
}