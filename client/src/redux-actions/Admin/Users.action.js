import { usersService } from "../../service/Admin/Users.service";
import { usersConstants } from "../../redux-constants/Admin/UsersConstants";
import { errConstants } from "../../redux-constants/Err/ErrConstants";

export const get = () => {
    
    return dispatch => {
        dispatch({ type: usersConstants.GET_USERS_REQUEST});
        usersService
            .get()
            .then(res => {
                dispatch({
                    type: usersConstants.GET_USERS_SUCCESS,
                    payload: res.data
                })
            })
            .catch(err => {
                dispatch({
                    type: errConstants.GET_USERS_ERROR,
                    payload: err.response.data
                })
            })
    }
}

export const create = (user) => {

    return dispatch => {
        dispatch({ type: usersConstants.CREATE_USER_REQUEST});
        usersService.create(user)
            .then(res => {
                dispatch({
                    type: usersConstants.CREATE_USER_SUCCESS,
                    payload: res.data
                })
            })
            .catch(err => {
                console.log("ERROR CREATE USER");
            })
    }
}

export const edit = (user) => {

    return dispatch => {
        dispatch({ type: usersConstants.EDIT_USER_REQUEST});
        usersService.edit(user)
            .then(res => {
                dispatch({
                    type: usersConstants.EDIT_USER_SUCCESS,
                    payload: res.data
                })
            })
            .catch(err => {
                console.log("ERROR EDIT USER");
            })
    }
}

export const destroy = (id) => {
    return dispatch => {
        usersService.destroy(id)
            .then(res => {
                dispatch({
                    type: usersConstants.DELETE_USER_SUCCESS,
                    payload: {
                        id,
                        msg: res.data.msg
                    }
                })
            })
            .catch(err => {
                console.log("ERROR ROLES");
            })
    }
}

export const block = (id) => {

    return dispatch => {
        dispatch({ type: usersConstants.BLOCK_USER_REQUEST});
        usersService.block(id)
            .then(res => {
                dispatch({
                    type: usersConstants.BLOCK_USER_SUCCESS,
                    payload: res.data
                })
            })
            .catch(err => {
                console.log("ERROR CREATE USER");
            })
    }
}