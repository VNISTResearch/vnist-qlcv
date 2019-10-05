import {handleResponse} from '../helpers/HandleResponse';
export const jobTitleService = {
    getAll
};
function getAll() {
    const requestOptions = {
        method: 'GET',
    };

    return fetch('/jobtitles', requestOptions).then(handleResponse);
}

