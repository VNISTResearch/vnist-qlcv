import { LOCAL_SERVER_API } from '../../redux-constants/config';
import axios from 'axios';

export const authService = {
    login
};

function login(user) {
    const requestOptions = {
        url: `${LOCAL_SERVER_API}/users/login`,
        method: 'POST',
        data: user
    };

    return axios(requestOptions);
}
