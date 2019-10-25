import { jobTitleConstants } from "../redux-constants/JobTitleConstants";
import { jobTitleService } from "../service/CombineService";
export const jobTitleActions = {
    getAll
};
function getAll() {
    return dispatch => {
        dispatch(request());

        jobTitleService.getAll()
            .then(
                jobtitles => dispatch(success(jobtitles)),
                error => dispatch(failure(error.toString()))
            );
    };

    function request() { return { type: jobTitleConstants.GETALL_REQUEST} }
    function success(jobtitles) { return { type: jobTitleConstants.GETALL_SUCCESS, jobtitles } }
    function failure(error) { return { type: jobTitleConstants.GETALL_FAILURE, error } }
}