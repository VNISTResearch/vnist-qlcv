import { userService } from "../../service/User/User.service";
import { userConstants } from "../../redux-constants/User/UserConstants";
// import { errConstants } from "../../redux-constants/Err/ErrConstants";

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