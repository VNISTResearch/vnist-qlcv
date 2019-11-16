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

var unflatten = (arr) => {
    var tree = [],
        mappedArr = {},
        arrElem,
        mappedElem;

    for(var i = 0, len = arr.length; i < len; i++) {
        arrElem = arr[i];
        mappedArr[arrElem._id] = arrElem;
        mappedArr[arrElem._id]['nodes'] = [];
    }

    for (var _id in mappedArr) {
        if (mappedArr.hasOwnProperty(_id)) {
            mappedElem = mappedArr[_id];
            if (mappedElem.parent) {
                mappedArr[mappedElem['parent']]['nodes'].push(mappedElem);
            }
            else {
                tree.push(mappedElem);
            }
        }
    }
    return tree;
}

const initState = {
    success: null
}

export function aDepartments(state = initState, action) {
    var index = -1;
    switch (action.type) {

        case departmentsConstants.GET_DEPARTMENTS_SUCCESS:
            var arr = action.payload.map( item => {
                return {
                    _id: item._id,
                    value: item.name,
                    parent: item.parent
                }
            });
            var tree = unflatten(arr);
            return {
                ...state,
                list: action.payload, //array users
                tree: tree
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
