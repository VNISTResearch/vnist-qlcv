import { errConstants } from "../../redux-constants/Err/ErrConstants";

export function errors (state = {}, action) {
    switch (action.type) {
        case errConstants.GET_USERS_ERROR:
            return {
                ...state,
                type: 'alert-danger',
                tag: action.payload.tag,
                message: action.payload.message
            };

        default:
            return {...state};
    }
}