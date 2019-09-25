import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { userService } from '../service/CombineService';


export const PrivateRoute = ({ component: Component, layout: Layout, roles, ...rest }) => (
    <Route {...rest} render={props => {
        const currentUser = userService.currentUserValue;
        if(!currentUser) {
            return <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
        }
        if (roles && roles.indexOf(currentUser.user.id_group[0].name_group) === -1) {
            return <Redirect to={{ pathname: '/'}} />
        }
        return <Layout><Component {...props}/></Layout>
    }} />
)