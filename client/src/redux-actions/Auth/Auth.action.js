import { authService } from "../../service/Auth/Auth.service";
import { authConstants } from "../../redux-constants/Auth/AuthConstants";
import { errConstants } from "../../redux-constants/Err/ErrConstants";

export const login = (user) => {
    return dispatch => {
        authService.login(user)
            .then(res => {

                //Store in localstorage-----------------------
                localStorage.setItem('id', res.data.id);
                localStorage.setItem('token', res.data.token);
                localStorage.setItem('name', res.data.name);
                localStorage.setItem('email', res.data.email);
                if(res.data.roles.length > 0) localStorage.setItem('currentRole', res.data.roles[0].id_role);

                //Send data to auth reducer--------------------
                dispatch({
                    type: authConstants.LOGIN_SUCCESS,
                    payload: res.data
                })
            })
            .catch(err => {
                dispatch({
                    type: errConstants.LOGIN_ERROR,
                    payload: typeof(err.response) !== 'undefined' ? err.response.data : err
                })
            })
    }
}

export const logout = () => {
    localStorage.clear();
    return dispatch => {
        dispatch({
            type: authConstants.LOGOUT
        })
    }
}