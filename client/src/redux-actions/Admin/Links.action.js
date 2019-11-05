import { linksService } from "../../service/Admin/Links.service";
import { linksConstants } from "../../redux-constants/Admin/LinksConstants";

export const get = () => {
    return dispatch => {
        linksService.get()
            .then(res => {
                dispatch({
                    type: linksConstants.GET_LINKS_SUCCESS,
                    payload: res.data
                })
            })
            .catch(err => {
                console.log(err)
            })
    }
}

export const getById = (id) => {
    return dispatch => {
        linksService.getById(id)
            .then(res => {
                dispatch({
                    type: linksConstants.GET_LINK_INFO_SUCCESS,
                    payload: res.data
                })
            })
            .catch(err => {
                console.log(err)
            })
    }
}

export const create = (url, description) => {
    return dispatch => {
        linksService.create(url, description)
            .then(res => {
                dispatch({
                    type: linksConstants.CREATE_LINK_SUCCESS,
                    payload: res.data
                })
            })
            .catch(err => {
                console.log(err)
            })
    }
}

export const addRoleToLink = (url, role) => {
    return dispatch => {
        linksService.addRoleToLink(url, role)
            .then(res => {
                dispatch({
                    type: linksConstants.ADD_ROLE_TO_LINK_SUCCESS,
                    payload: res.data
                })
            })
            .catch(err => {
                console.log(err)
            })
    }
}