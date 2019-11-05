import { usersConstants } from "../../redux-constants/Admin/UsersConstants";

export function aUsers(state = {}, action) {
    switch (action.type) {

        case usersConstants.GET_USERS_SUCCESS:
            return {
                ...state,
                list: action.payload //array users
            }

        case usersConstants.CREATE_USER_SUCCESS:
            return {
                ...state,
                list: [
                    ...state.list,
                    action.payload.user
                ]
            }

        default:
            return state;
    }
}