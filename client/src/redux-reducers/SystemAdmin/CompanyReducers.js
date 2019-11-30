import { companiesConstants } from "../../redux-constants/SystemAdmin/CompaniesConstants";

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
    list: []
}

export function companies(state = initState, action) {
    var index = -1;
    switch (action.type) {

        case companiesConstants.GET_COMPANIES_SUCCESS:
            
            return {
                ...state,
                list: action.payload
            };

        case companiesConstants.CREATE_COMPANY_SUCCESS:
            return {
                ...state,
                list: [
                    ...state.list,
                    action.payload.company
                ]
            };

        case companiesConstants.EDIT_COMPANY_SUCCESS:
            index = findIndex(state.list, action.payload.company._id);
            if(index !== -1){
                state.list[index].name = action.payload.company.name;
                state.list[index].description = action.payload.company.description;
            }
            return {...state};

        default:
            return state;
    }
}