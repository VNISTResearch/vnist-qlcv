import { rolesConstants } from "../../redux-constants/Admin/RolesConstants";

var findIndex = (array, id) => {
    var result = -1;
    array.forEach((value, index) => {
        if(value._id === id){
            result = index;
        }
    });
    return result;
}

export function roles(state = {}, action) {
    var index = -1;

    switch (action.type) {
        
        case rolesConstants.GET_ROLES_SUCCESS:
            return {
                ...state,
                list: action.payload
            };

        case rolesConstants.GET_ROLE_BY_ID_SUCCESS:
            return {
                ...state,
                item: action.payload
            };

        case rolesConstants.CREATE_ROLE_SUCCESS:
            return {
                ...state,
                list: [
                    ...state.list,
                    action.payload
                ]
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
        
        case rolesConstants.ASSIGN_ROLE_TO_USER_SUCCESS:
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

        case rolesConstants.DELETE_ROLE_SUCCESS:
            index = findIndex(state.list, action.payload.id);
            state.list.splice(index, 1);
            return {...state};

        default:
            return state;
    }
}
