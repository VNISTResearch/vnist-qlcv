import React from 'react';
import { Route, Redirect } from 'react-router-dom';

export const PrivateRoute = ({ component: Component, roles, ...rest }) => (
    <Route {...rest} render={props => {
        const currentUser = localStorage.getItem('user');
        const currentUserObj = JSON.parse(currentUser);
        if(!currentUser) {
            return <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
        }
        if (roles && roles.indexOf(currentUserObj.user.id_group[0].name_group) === -1) {
            return <Redirect to={{ pathname: '/'}} />
        }
        return <Component {...props} />
    }} />
)