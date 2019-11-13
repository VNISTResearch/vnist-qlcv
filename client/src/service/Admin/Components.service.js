import { authHeader } from '../../helpers/AuthHeader';
import { LOCAL_SERVER_API } from '../../redux-constants/config';
import axios from 'axios';

export const componentsService = {
    get,
    create
};

function get() {
    const requestOptions = {
        url: `${LOCAL_SERVER_API}/components`,
        method: 'GET',
        headers: authHeader()
    };

    return axios(requestOptions);
}

function create(name, description, role) {
    const requestOptions = {
        url: `${LOCAL_SERVER_API}/components`,
        method: 'POST', 
        data: { name, description, role },
        headers: authHeader()
    };

    return axios(requestOptions);
}