import { authHeader } from '../../helpers/AuthHeader';
import { LOCAL_SERVER_API } from '../../redux-constants/config';
import axios from 'axios';

export const linksService = {
    get,
    getById,
    create,
    edit,
    // addRoleToLink,
    destroy
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

function create(url, description, role) {
    const requestOptions = {
        url: `${LOCAL_SERVER_API}/links`,
        method: 'POST', 
        data: { url, description, role },
        headers: authHeader()
    };

    return axios(requestOptions);
}

function edit(id, url, description, role) {
    const requestOptions = {
        url: `${LOCAL_SERVER_API}/links/${id}`,
        method: 'PATCH', 
        data: { url, description, role },
        headers: authHeader()
    };

    return axios(requestOptions);
}

// function addRoleToLink(url, role) {
//     const requestOptions = {
//         url: `${LOCAL_SERVER_API}/links/${id}`,
//         method: 'POST',
//         data: { url, role },
//         headers: authHeader()
//     };

//     return axios(requestOptions);
// }

//Delete link
function destroy(id) {
    const requestOptions = {
        url: `${LOCAL_SERVER_API}/links/${id}`,
        method: 'DELETE',
        headers: authHeader()
    };

    return axios(requestOptions);
}