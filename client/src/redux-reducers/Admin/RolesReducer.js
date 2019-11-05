import { rolesConstants } from "../../redux-constants/Admin/RolesConstants";

export function roles(state = {}, action) {
    switch (action.type) {

        case rolesConstants.GET_ROLE_ADMIN_SUCCESS:
            return action.payload.admins;

        case rolesConstants.ADD_ADMIN_SUCCESS:
            return {
                ...state,
                id_user: [
                    ...state.id_user,
                    action.payload.user
                ]
            }
        case rolesConstants.GET_SUPER_ROLE_SUCCESS:
            return {
                ...state,
                super: action.payload
            }

        default:
            return state;
    }
}