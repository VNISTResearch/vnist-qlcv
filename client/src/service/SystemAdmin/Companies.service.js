import { authHeader } from '../../helpers/AuthHeader';
import { LOCAL_SERVER_API } from '../../redux-constants/config';
import axios from 'axios';

export const companiesService = {
    get,
    create,
};

function get() {
    const requestOptions = {
        url: `${LOCAL_SERVER_API}/companies`,
        method: 'GET',
        headers: authHeader()
    };

    return axios(requestOptions);
}

function create(data) {
    const requestOptions = {
        url: `${LOCAL_SERVER_API}/companies`,
        method: 'POST',
        data: data,
        headers: authHeader()
    };

    return axios(requestOptions);
}