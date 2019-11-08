import { componentsService } from "../../service/Admin/Components.service";
import { componentsConstants } from "../../redux-constants/Admin/ComponentsConstants";

export const get = () => {
    return dispatch => {
        componentsService.get()
            .then(res => {
                dispatch({
                    type: componentsConstants.GET_COMPONENTS_SUCCESS,
                    payload: res.data
                })
            })
            .catch(err => {
                console.log(err)
            })
    }
}

export const create = (name, description, role) => {
    return dispatch => {
        componentsService.create(name, description, role)
            .then(res => {
                dispatch({
                    type: componentsConstants.CREATE_COMPONENT_SUCCESS,
                    payload: res.data
                })
            })
            .catch(err => {
                console.log(err)
            })
    }
}