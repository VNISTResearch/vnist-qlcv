import { authHeader } from '../../helpers/AuthHeader';
import { LOCAL_SERVER_API } from '../../redux-constants/config';
import axios from 'axios';

export const usersService = {
    get,
    create
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