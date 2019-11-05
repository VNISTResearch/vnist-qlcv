import { userConstants } from "../../redux-constants/User/UserConstants";

export function user (state = {}, action) {
    switch (action.type) {
        case userConstants.GET_USER_ROLES_SUCCESS:
            return {
                ...state,
                roles: action.payload
            };
        
        case userConstants.GET_LINK_OF_ROLE_SUCCESS:
            return {
                ...state,
                links: action.payload
            }

        default:
            return {...state};
    }
}