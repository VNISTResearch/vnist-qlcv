import { usersService } from "../../service/Admin/Users.service";
import { usersConstants } from "../../redux-constants/Admin/UsersConstants";
import { errConstants } from "../../redux-constants/Err/ErrConstants";

export const get = () => {
    return dispatch => {
        usersService.get()
            .then(res => {
                console.log("Users: ",res.data)
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