import { authHeader } from '../../helpers/AuthHeader';
import { LOCAL_SERVER_API } from '../../redux-constants/config';
import axios from 'axios';

export const rolesService = {
    get,
    getById,
    getSuperRole,
    getAdmin,
    addAdmin,
    assignRoleToUser,
    create,
    destroy,
    deleteRoleOfUser
};

function get() { //lấy các super role
    const requestOptions = {
        url: `${LOCAL_SERVER_API}/roles`,
        method: 'GET',
        headers: authHeader()
    };

    return axios(requestOptions);
}

function getById(id) { //lấy các super role
    const requestOptions = {
        url: `${LOCAL_SERVER_API}/roles/info/${id}`,
        method: 'GET',
        headers: authHeader()
    };

    return axios(requestOptions);
}

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

function create(name, abstract) {
    const requestOptions = {
        url: `${LOCAL_SERVER_API}/roles`,
        method: 'POST',
        data: {name, abstract},
        headers: authHeader()
    };

    return axios(requestOptions);
}

function destroy(id) {
    const requestOptions = {
        url: `${LOCAL_SERVER_API}/roles/${id}`,
        method: 'DELETE',
        headers: authHeader()
    };

    return axios(requestOptions);
}

function deleteRoleOfUser(role, user) {
    const requestOptions = {
        url: `${LOCAL_SERVER_API}/roles/admin/add`,
        method: 'DELETE',
        data: {role,user},
        headers: authHeader()
    };

    return axios(requestOptions);
}

function assignRoleToUser(id, email) {
    const requestOptions = {
        url: `${LOCAL_SERVER_API}/roles/${id}/add-user`,
        method: 'POST',
        data: {email},
        headers: authHeader()
    };

    return axios(requestOptions);
}
