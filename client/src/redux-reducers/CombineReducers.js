import { combineReducers } from 'redux';
import { authentication } from './AuthenticationReducer';
import { registration } from './RegistrationReducer';
import { users } from './UsersReducer';
import { alert } from './AlertReducers';
import { jobtitles } from './JobTitleReducers';
import { tasktemplates } from './TaskTemplateReducers';
import { departments } from './DepartmentReducers';
import { kpiunits } from './KPIUnitReducers';
import { kpipersonals } from './KPIPersonalReducer';
import { employees } from './EmployeeReducers';

const rootReducer = combineReducers({
  authentication,
  registration,
  users,
  alert,
  jobtitles,
  tasktemplates,
  departments,
  kpiunits,
  kpipersonals,
  employees
});

export default rootReducer;