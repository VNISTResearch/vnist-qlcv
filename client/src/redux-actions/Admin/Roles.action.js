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

export const getById = (id) => {
    return dispatch => {
        rolesService.getById(id)
            .then(res => {
                dispatch({
                    type: rolesConstants.GET_ROLE_BY_ID_SUCCESS,
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

export const create = (name, abstract) => {
    return dispatch => {
        rolesService.create(name, abstract)
            .then(res => {
                console.log("role vua tao moi: ",res.data);
                dispatch({
                    type: rolesConstants.CREATE_ROLE_SUCCESS,
                    payload: res.data
                })
            })
            .catch(err => {
                console.log(err);
            })
    }
}

export const destroy = (id) => { //id cua role
    return dispatch => {
        rolesService.destroy(id)
            .then(res => {
                dispatch({
                    type: rolesConstants.DELETE_ROLE_SUCCESS,
                    payload: {
                        id,
                        msg: res.data.msg
                    }
                })
            })
            .catch(err => {
                console.log(err);
            })
    }
}