import { rolesService } from "../../service/Admin/Roles.service";
import { rolesConstants } from "../../redux-constants/Admin/RolesConstants";

export const get = () => {
    return dispatch => {
        rolesService.get()
            .then(res => {
                dispatch({
                    type: rolesConstants.GET_ROLES_SUCCESS,
                    payload: res.data
                })
            })
            .catch(err => {
                console.log(err);
            })
    }
}

export const getSuperRole = () => {
    return dispatch => {
        rolesService.getSuperRole()
            .then(res => {
                dispatch({
                    type: rolesConstants.GET_SUPER_ROLE_SUCCESS,
                    payload: res.data
                })
            })
            .catch(err => {
                console.log(err);
            })
    }
}

export const getAdmin = () => {
    return dispatch => {
        rolesService.getAdmin()
            .then(res => {
                dispatch({
                    type: rolesConstants.GET_ROLE_ADMIN_SUCCESS,
                    payload: res.data
                })
            })
            .catch(err => {
                console.log(err);
            })
    }
}

export const addAdmin = (email) => {
    return dispatch => {
        rolesService.addAdmin(email)
            .then(res => {
                dispatch({
                    type: rolesConstants.ADD_ADMIN_SUCCESS,
                    payload: res.data
                })
            })
            .catch(err => {
                console.log(err);
            })
    }
}