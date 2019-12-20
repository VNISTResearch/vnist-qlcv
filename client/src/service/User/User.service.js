import { authHeader } from '../../helpers/AuthHeader';
import { LOCAL_SERVER_API } from '../../redux-constants/config';
import axios from 'axios';

export const userService = {
    getRoles,
    getLinkOfRole,
    getAllUserOfCompany,
    getAllUserOfDepartment,
    getAllUserSameDepartment,
    getRoleSameDepartmentOfUser
};

function getRoles() {
    const id = localStorage.getItem('id');
    const requestOptions = {
        url: `${LOCAL_SERVER_API}/roles/${id}`,
        method: 'GET',
        headers: authHeader()
    };

    return axios(requestOptions);
}

function getLinkOfRole() {
    const currentRole = localStorage.getItem('currentRole');
    const requestOptions = {
        url: `${LOCAL_SERVER_API}/links/role/${currentRole}`,
        method: 'GET',
        headers: authHeader()
    };

    return axios(requestOptions);
}
// Lấy tất cả các vai trò cùng phòng ban với người dùng
function getRoleSameDepartmentOfUser(currentRole) {
    const requestOptions = {
        url: `${LOCAL_SERVER_API}/roles/same-department/${currentRole}`,
        method: 'GET',
        headers: authHeader()
    };

    return axios(requestOptions);
}

// Lấy tất cả nhân viên của công ty
function getAllUserOfCompany() {
    const requestOptions = {
        url: `${LOCAL_SERVER_API}/users`,
        method: 'GET',
        headers: authHeader()
    };

    return axios(requestOptions);
}

// Lấy tất cả nhân viên của một phòng ban kèm theo vai trò của họ
function getAllUserOfDepartment(id) {
    const requestOptions = {
        url: `${LOCAL_SERVER_API}/users/users-of-department/${id}`,
        method: 'GET',
        headers: authHeader()
    };

    return axios(requestOptions);
}

// Lấy tất cả nhân viên của một phòng ban kèm theo vai trò của họ
function getAllUserSameDepartment(id) {
    const requestOptions = {
        url: `${LOCAL_SERVER_API}/users/same-department/${id}`,
        method: 'GET',
        headers: authHeader()
    };

    return axios(requestOptions);
}

