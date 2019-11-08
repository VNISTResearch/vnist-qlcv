import { rolesConstants } from "../../redux-constants/Admin/RolesConstants";

export function roles(state = {}, action) {
    switch (action.type) {
        
        case rolesConstants.GET_ROLES_SUCCESS:
            return {
                ...state,
                list: action.payload
            };

        case rolesConstants.GET_ROLE_ADMIN_SUCCESS:
            return {
                ...state,
                admins: action.payload.id_user //array user has role admin
            };

        case rolesConstants.ADD_ADMIN_SUCCESS:
            return {
                ...state,
                admins: [
                    ...state.admins,
                    action.payload.user
                ]
            };

        case rolesConstants.GET_SUPER_ROLE_SUCCESS:
            return {
                ...state,
                super: action.payload
            };

        default:
            return state;
    }
}