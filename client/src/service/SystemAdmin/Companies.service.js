import { authHeader } from '../../helpers/AuthHeader';
import { LOCAL_SERVER_API } from '../../redux-constants/config';
import axios from 'axios';

export const companiesService = {
    get,
    create,
    edit
};

function get() {
    const requestOptions = {
        url: `${LOCAL_SERVER_API}/companies`,
        method: 'GET',
        headers: authHeader()
    };

    return axios(requestOptions);
}

function create(company) {
    const requestOptions = {
        url: `${LOCAL_SERVER_API}/companies`,
        method: 'POST',
        data: company,
        headers: authHeader()
    };

    return axios(requestOptions);
}

function edit(id, company) {
    const requestOptions = {
        url: `${LOCAL_SERVER_API}/companies/${id}`,
        method: 'PATCH',
        data: company,
        headers: authHeader()
    };

    return axios(requestOptions);
}