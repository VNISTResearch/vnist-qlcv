import { componentsConstants } from "../../redux-constants/Admin/ComponentsConstants";

// var findIndex = (array, id) => {
//     var result = -1;
//     array.forEach((value, index) => {
//         if(value._id === id){
//             result = index;
//         }
//     });
//     return result;
// }

export function components(state = {}, action) {
    // var index = -1;
    switch (action.type) {

        case componentsConstants.GET_COMPONENTS_SUCCESS:
            var list = []; //khởi tạo mảng link
            var arr = action.payload;
            arr.forEach(item => {
                list.push({
                    id: item._id,
                    name: item.name,
                    description: item.description
                });
            });
            return {
                ...state,
                list
            };

        case componentsConstants.CREATE_COMPONENT_SUCCESS:
            return {
                ...state,
                list: [
                    ...state.list,
                    action.payload.link
                ]
            };

        default:
            return state;
    }
}