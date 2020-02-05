import { userConstants } from "../../redux-constants/User/UserConstants";

export function user(state = {}, action) {
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
        case userConstants.GETROLE_SAMEDEPARTMENT_REQUEST:
            return {
                ...state,
                loading: true
            };
        case userConstants.GETROLE_SAMEDEPARTMENT_SUCCESS:
            return {
                ...state,
                roledepartments: action.roleDepartment.data
            };
        case userConstants.GETALLUSER_OFDEPARTMENT_REQUEST:
            return {
                ...state,
                loading: true,
                userdepartments: null
            };
        case userConstants.GETALLUSER_OFDEPARTMENT_SUCCESS:
            return {
                ...state,
                loading: false,
                userdepartments: action.users.data
            };
        case userConstants.GETALLUSER_OFDEPARTMENT_FAILURE:
            return {
                error: action.error
            };
        case userConstants.GETALLUSER_SAMEDEPARTMENT_REQUEST:
            return {
                ...state,
                loading: true,
                userdepartments: null
            };
        case userConstants.GETALLUSER_SAMEDEPARTMENT_SUCCESS:
            return {
                ...state,
                loading: false,
                userdepartments: action.users.data
            };
        case userConstants.GETALLUSER_SAMEDEPARTMENT_FAILURE:
            return {
                error: action.error
            };
        case userConstants.GETALLUSER_OFCOMPANY_SUCCESS:
            return {
                ...state,
                usercompanys: action.users.data
            };
        case userConstants.GETALLUSER_OFCOMPANY_FAILURE:
            return {
                error: action.error
            };
        default:
            return state;
    }
}