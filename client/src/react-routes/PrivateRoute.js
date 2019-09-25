import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { userService } from '../service/CombineService';


export const PrivateRoute = ({ component: Component, layout: Layout, access, ...rest }) => (
    <Route {...rest} render={props => {
        const currentUser = userService.currentUserValue;
        if(!currentUser) {
            return <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
        }
        console.log(currentUser);
        if (access && access.indexOf(currentUser.user.has[0].role.permission.url[0]) === -1) {
            return <Redirect to={{ pathname: '/'}} />
        }
        return <Layout><Component {...props}/></Layout>
    }} />
)