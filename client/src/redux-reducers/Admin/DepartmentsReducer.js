import { departmentsConstants } from "../../redux-constants/Admin/DepartmentsConstants";

var findIndex = (array, id) => {
    var result = -1;
    array.forEach((value, index) => {
        if(value._id === id){
            result = index;
        }
    });
    return result;
}

const initState = {
    success: null
}

export function aDepartments(state = initState, action) {
    var index = -1;
    switch (action.type) {

        case departmentsConstants.GET_DEPARTMENTS_SUCCESS:
            return {
                ...state,
                list: action.payload //array users
            }

        case departmentsConstants.CREATE_DEPARTMENTS_SUCCESS:
            return {
                ...state,
                list: [
                    ...state.list,
                    action.payload.department,
                ],
                success: action.payload.msg
            }

        case departmentsConstants.GET_DEPARTMENT_INFO_SUCCESS:
            return {
                name: action.payload.name,
                dean: action.payload.dean,
                vice_dean: action.payload.vice_dean,
                employee: action.payload.employee,
                deans: action.payload.deans ? action.payload.deans.id_user : [],
                vice_deans: action.payload.vice_deans ? action.payload.vice_deans.id_user : [],
                employees: action.payload.employees ? action.payload.employees.id_user : [],
            };

        case departmentsConstants.ADD_USER_WITH_ROLE_SUCCESS:
            if(action.payload.role.id_role === state.dean._id){
                return {
                    ...state,
                    deans: [
                        ...state.deans,
                        action.payload.user
                    ]
                }
            }else if(action.payload.role.id_role === state.vice_dean._id){
                return {
                    ...state,
                    vice_deans: [
                        ...state.vice_deans,
                        action.payload.user
                    ]
                }
            }else if(action.payload.role.id_role === state.employee._id){
                return {
                    ...state,
                    employees: [
                        ...state.employees,
                        action.payload.user
                    ]
                }
            }
            return {...state};

        case departmentsConstants.DELETE_DEPARTMENT_SUCCESS:
            index = findIndex(state.list, action.payload.id);
            state.list.splice(index, 1);
            return {...state};

        default:
            return state
    }
}
