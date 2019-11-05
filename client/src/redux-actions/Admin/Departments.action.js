import { departmentsService } from "../../service/Admin/Departments.service";
import { departmentsConstants } from "../../redux-constants/Admin/DepartmentsConstants";
import { errConstants } from "../../redux-constants/Err/ErrConstants";

export const get = () => {
    return dispatch => {
        departmentsService.get()
            .then(res => {
                dispatch({
                    type: departmentsConstants.GET_DEPARTMENTS_SUCCESS,
                    payload: res.data
                })
            })
            .catch(err => {
                dispatch({
                    type: errConstants.GET_DEPARTMENTS_ERROR,
                    payload: err.response.data
                })
            })
    }
}

export const create = (department) => {
    return dispatch => {
        departmentsService.create(department)
            .then(res => {
                dispatch({
                    type: departmentsConstants.CREATE_DEPARTMENTS_SUCCESS,
                    payload: res.data
                })
            })
            .catch(err => {
                dispatch({
                    type: errConstants.CREATE_DEPARTMENTS_ERROR,
                    payload: err.response.data
                })
            })
    }
}

export const getDepartmentInfo = (id) => {
    return dispatch => {
        departmentsService.getDepartmentInfo(id)
            .then(res => {
                dispatch({
                    type: departmentsConstants.GET_DEPARTMENT_INFO_SUCCESS,
                    payload: res.data
                })
            })
            .catch(err => {
                console.log(err);
            })
    }
}

export const addUserWithRole = (email, id) => {
    return dispatch => {
        departmentsService.addUserWithRole(email, id)
            .then(res => {
                dispatch({
                    type: departmentsConstants.ADD_USER_WITH_ROLE_SUCCESS,
                    payload: res.data
                })
            })
            .catch(err => {
                console.log(err);
            })
    }
}

export const deleteD = (id) => {
    return dispatch => {
        departmentsService.deleteD(id)
            .then(res => {
                dispatch({
                    type: departmentsConstants.DELETE_DEPARTMENT_SUCCESS,
                    payload: {
                        id,
                        message: res.data.message
                    }
                })
            })
            .catch(err => {
                console.log(err);
            })
    }
}