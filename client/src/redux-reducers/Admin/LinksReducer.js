import { linksConstants } from "../../redux-constants/Admin/LinksConstants";

var findIndex = (array, id) => {
    var result = -1;
    array.forEach((value, index) => {
        if(value._id === id){
            result = index;
        }
    });
    return result;
}

export function links(state = {}, action) {
    var index = -1;
    switch (action.type) {

        case linksConstants.GET_LINKS_SUCCESS:
            var list = []; //khởi tạo mảng link
            var linkArr = action.payload;
            linkArr.forEach(item => {
                list.push({
                    id: item._id,
                    url: item.url,
                    description: item.description
                });
            });
            return {
                ...state,
                list
            };

        case linksConstants.GET_LINK_INFO_SUCCESS:
            console.log("link info:",action.payload);
            var data = action.payload;
            return {
                ...state,
                item: {
                    id: data.id,
                    url: data.url,
                    description: data.description,
                    role: data.role
                }
            };

        case linksConstants.CREATE_LINK_SUCCESS:
            return {
                ...state,
                list: [
                    ...state.list,
                    action.payload.link
                ]
            };

        case linksConstants.EDIT_LINK_SUCCESS:
            index = findIndex(state.list, action.payload.id);
            if(index !== -1){
                state.list[index].id = action.payload.link._id;
                state.list[index].url = action.payload.link.url;
                state.list[index].description = action.payload.link.description;
            }
            return {...state};

        case linksConstants.DELETE_LINK_SUCCESS:
            index = findIndex(state.list, action.payload.id);
            state.list.splice(index, 1);
            return {...state};

        default:
            return state;
    }
}