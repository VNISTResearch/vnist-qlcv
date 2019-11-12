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

export function companies(state = {}, action) {
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

        default:
            return state;
    }
}