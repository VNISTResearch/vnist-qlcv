import { companiesService } from "../../service/SystemAdmin/Companies.service";
import { companiesConstants } from "../../redux-constants/SystemAdmin/CompaniesConstants";

export const get = () => {
    return dispatch => {
        companiesService.get()
            .then(res => {
                dispatch({
                    type: companiesConstants.GET_COMPANIES_SUCCESS,
                    payload: res.data
                })
            })
            .catch(err => {
                dispatch({
                    type: companiesConstants.GET_COMPANIES_ERROR,
                    payload: err.response.data
                })
            })
    }
}

export const create = (data) => {
    return dispatch => {
        companiesService.create(data)
            .then(res => {
                dispatch({
                    type: companiesConstants.CREATE_COMPANY_SUCCESS,
                    payload: res.data
                })
            })
            .catch(err => {
                dispatch({
                    type: companiesConstants.CREATE_COMPANY_ERROR,
                    payload: err.response.data
                })
            })
    }
}
