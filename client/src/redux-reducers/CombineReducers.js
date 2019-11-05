import { IntlReducer as Intl } from 'react-redux-multilingual'
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
import { errors } from './Err/ErrReducer';
import { aUsers } from './Admin/UsersReducer';
import { auth } from './Auth/AuthReducer';
import { user } from './User/UserReducer';
import { aDepartments} from './Admin/DepartmentsReducer';
import { roles} from './Admin/RolesReducer';
import { links} from './Admin/LinksReducer';
import { tasks} from './TaskManagementReducers';

const rootReducer = combineReducers(Object.assign({
  authentication,
  registration,
  users,
  alert,
  jobtitles,
  tasktemplates,
  departments,
  kpiunits,
  kpipersonals,
  errors,
  auth,
  user,
  //State of admin page-------------------//
  aUsers,
  aDepartments,
  roles,
  links,
  tasks
}, { Intl }));

export default rootReducer;