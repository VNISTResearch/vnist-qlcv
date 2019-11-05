import { authConstants } from "../../redux-constants/Auth/AuthConstants";

const token = localStorage.getItem('token');
const name = localStorage.getItem('name');
const email = localStorage.getItem('email');

const initState = {
    loggedIn: token ? true : false,
    name: name ? name : null,
    email: email ? email : null
}

export function auth(state = initState, action) {
    switch (action.type) {
        case authConstants.LOGIN_SUCCESS:
            return {
                ...state,
                loggedIn: true,
                name: action.payload.name,
                email: action.payload.email
            };

        case authConstants.LOGOUT:
                return {
                    ...state,
                    loggedIn: false,
                    name: null,
                    email: null
                };

        default:
            return {...state};
    }
}