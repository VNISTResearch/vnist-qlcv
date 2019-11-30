import { authHeader } from '../../helpers/AuthHeader';
import { LOCAL_SERVER_API } from '../../redux-constants/config';
import axios from 'axios';

export const usersService = {
    get,
    create,
    edit,
    destroy,
    block
};

function get() {
    const requestOptions = {
        url: `${LOCAL_SERVER_API}/users`,
        method: 'GET',
        headers: authHeader()
    };

    return axios(requestOptions);
}

function create(user) {
    const requestOptions = {
        url: `${LOCAL_SERVER_API}/users/create`,
        method: 'POST',
        data: user,
        headers: authHeader()
    };

    return axios(requestOptions);
}

function edit(user) {
    const requestOptions = {
        url: `${LOCAL_SERVER_API}/users/${user.id}`,
        method: 'PATCH',
        data: { name: user.name, active: user.active},
        headers: authHeader()
    };

    return axios(requestOptions);
}

function destroy(id) {
    const requestOptions = {
        url: `${LOCAL_SERVER_API}/users/${id}`,
        method: 'DELETE',
        headers: authHeader()
    };

    return axios(requestOptions);
}

function block(id) {
    const requestOptions = {
        url: `${LOCAL_SERVER_API}/users/block/${id}`,
        method: 'POST',
        headers: authHeader()
    };

    return axios(requestOptions);
}