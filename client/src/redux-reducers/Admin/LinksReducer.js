import { linksConstants } from "../../redux-constants/Admin/LinksConstants";

export function links(state = {}, action) {
    switch (action.type) {

        case linksConstants.GET_LINKS_SUCCESS:
            return {
                ...state,
                list: action.payload
            };

        case linksConstants.CREATE_LINK_SUCCESS:
            return {
                ...state,
                list: [
                    ...state.list,
                    action.payload.url
                ]
            };
        case linksConstants.GET_LINK_INFO_SUCCESS:
            console.log("link info:",action.payload);
            return {
                ...state,
                item: {
                    id: action.payload.id,
                    url: action.payload.url,
                    role: action.payload.role
                }
            };

        case linksConstants.ADD_ROLE_TO_LINK_SUCCESS:
            return {
                ...state,
                item: action.payload
            };

        default:
            return state;
    }
}