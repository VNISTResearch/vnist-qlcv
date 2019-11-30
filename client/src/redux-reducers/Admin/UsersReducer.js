import { usersConstants } from "../../redux-constants/Admin/UsersConstants";

var findIndex = (array, id) => {
    var result = -1;
    array.forEach((value, index) => {
        if(value._id === id){
            result = index;
        }
    });
    return result;
}

export function aUsers(state = {}, action) {
    var index = -1;
    switch (action.type) {
        case usersConstants.GET_USERS_REQUEST:
            return {
                ...state,
                isLoading: true
            }

        case usersConstants.GET_USERS_SUCCESS:
            return {
                ...state,
                list: action.payload, //array users
                isLoading: false
            }

        case usersConstants.CREATE_USER_REQUEST:
                return {
                    ...state,
                    isLoading: true,
                }

        case usersConstants.CREATE_USER_SUCCESS:
            return {
                ...state,
                list: [
                    ...state.list,
                    action.payload.user
                ],
                isLoading: false
            }

        case usersConstants.EDIT_USER_REQUEST:
                return {
                    ...state,
                    isLoading: true,
                }

        case usersConstants.EDIT_USER_SUCCESS:
            index = findIndex(state.list, action.payload.user._id);
            if(index !== -1){
                state.list[index].name = action.payload.user.name;
                state.list[index].active = action.payload.user.active;
            }
            return {
                ...state,
                isLoading: false,
            };

        case usersConstants.BLOCK_USER_REQUEST:
            return {
                ...state,
                isLoading: true,
            }

        case usersConstants.BLOCK_USER_SUCCESS:
            return {
                ...state,
                isLoading: false
            }

        case usersConstants.DELETE_USER_SUCCESS:
            index = findIndex(state.list, action.payload.id);
            state.list.splice(index, 1);
            return {...state};

        default:
            return state;
    }
}