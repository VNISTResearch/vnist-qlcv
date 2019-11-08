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

export const create = (url, description, role) => {
    return dispatch => {
        linksService.create(url, description, role)
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

export const edit = (id, url, description, role) => {
    return dispatch => {
        linksService.edit(id, url, description, role)
            .then(res => {
                dispatch({
                    type: linksConstants.EDIT_LINK_SUCCESS,
                    payload: {
                        id,
                        link: res.data
                    }
                })
            })
            .catch(err => {
                console.log(err)
            })
    }
}

export const destroy = (id) => {
    return dispatch => {
        linksService.destroy(id)
            .then(res => {
                dispatch({
                    type: linksConstants.DELETE_LINK_SUCCESS,
                    payload: {
                        id,
                        msg: res.data.msg
                    }
                })
            })
            .catch(err => {
                console.log(err)
            })
    }
}