import { combineReducers } from 'redux';
import { authentication } from './AuthenticationReducer';
import { registration } from './RegistrationReducer';
import { users } from './UsersReducer';
import { alert } from './AlertReducers';
import { jobtitles } from './JobTitleReducers';
import { tasktemplates } from './TaskTemplateReducers';

const rootReducer = combineReducers({
  authentication,
  registration,
  users,
  alert,
  jobtitles,
  tasktemplates,
});

export default rootReducer;