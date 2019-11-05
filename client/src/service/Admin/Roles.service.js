import { authHeader } from '../../helpers/AuthHeader';
import { LOCAL_SERVER_API } from '../../redux-constants/config';
import axios from 'axios';

export const rolesService = {
    getSuperRole,
    getAdmin,
    addAdmin
};

function getSuperRole() { //lấy các super role
    const requestOptions = {
        url: `${LOCAL_SERVER_API}/roles/super-role`,
        method: 'GET',
        headers: authHeader()
    };

    return axios(requestOptions);
}

function getAdmin() { //lấy những user có role là Admin
    const requestOptions = {
        url: `${LOCAL_SERVER_API}/roles/admin`,
        method: 'GET',
        headers: authHeader()
    };

    return axios(requestOptions);
}

function addAdmin(email) {
    const requestOptions = {
        url: `${LOCAL_SERVER_API}/roles/admin/add`,
        method: 'POST',
        data: {email: email},
        headers: authHeader()
    };

    return axios(requestOptions);
}