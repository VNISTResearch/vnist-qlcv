import { userService } from "../../service/User/User.service";
import { userConstants } from "../../redux-constants/User/UserConstants";
// import { errConstants } from "../../redux-constants/Err/ErrConstants";

export const userActions = {
    getRoleSameDepartment,
    getAllUserOfCompany,
    getAllUserOfDepartment,
    getAllUserSameDepartment
};
export const getRoles = () => {
    return dispatch => {
        userService.getRoles()
            .then(res => {
                let roles = [];
                res.data.forEach(data => {
                    roles.push({
                        id: data.id_role._id,
                        name: data.id_role.name
                    })
                });
                dispatch({
                    type: userConstants.GET_USER_ROLES_SUCCESS,
                    payload: roles
                })
            })
            .catch(err => {
                console.log("ERROR ROLES");
            })
    }
}

export const getLinkOfRole = () => {
    return dispatch => {
        userService.getLinkOfRole()
            .then(res => {
                dispatch({
                    type: userConstants.GET_LINK_OF_ROLE_SUCCESS,
                    payload: res.data
                })
            })
            .catch(err => {
                console.log("ERROR ROLES");
            })
    }
}

function getRoleSameDepartment(currentRole) {
    return dispatch => {
        dispatch(request(currentRole));

        userService.getRoleSameDepartmentOfUser(currentRole)
            .then(
                roleDepartment => dispatch(success(roleDepartment)),
                error => dispatch(failure(error.toString()))
            );
    };

    function request(currentRole) { return { type: userConstants.GETROLE_SAMEDEPARTMENT_REQUEST, currentRole } }
    function success(roleDepartment) { return { type: userConstants.GETROLE_SAMEDEPARTMENT_SUCCESS, roleDepartment } }
    function failure(error) { return { type: userConstants.GETROLE_SAMEDEPARTMENT_FAILURE, error } }
}

function getAllUserOfCompany() {
    return dispatch => {
        userService.getAllUserOfCompany()
            .then(
                users => dispatch(success(users)),
                error => dispatch(failure(error.toString()))
            );
    };
    function success(users) { return { type: userConstants.GETALLUSER_OFCOMPANY_SUCCESS, users } }
    function failure(error) { return { type: userConstants.GETALLUSER_OFCOMPANY_FAILURE, error } }
}

function getAllUserOfDepartment() {
    return dispatch => {
        userService.getAllUserOfDepartment()
            .then(
                users => dispatch(success(users)),
                error => dispatch(failure(error.toString()))
            );
    };
    function success(users) { return { type: userConstants.GETALLUSER_OFDEPARTMENT_SUCCESS, users } }
    function failure(error) { return { type: userConstants.GETALLUSER_OFDEPARTMENT_FAILURE, error } }
}

function getAllUserSameDepartment(currentRole) {
    return dispatch => {
        userService.getAllUserSameDepartment(currentRole)
            .then(
                users => dispatch(success(users)),
                error => dispatch(failure(error.toString()))
            );
    };
    function success(users) { return { type: userConstants.GETALLUSER_SAMEDEPARTMENT_SUCCESS, users } }
    function failure(error) { return { type: userConstants.GETALLUSER_SAMEDEPARTMENT_FAILURE, error } }
}

