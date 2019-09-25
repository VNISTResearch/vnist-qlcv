import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { userService } from '../service/CombineService';


export const PrivateRoute = ({ component: Component, layout: Layout, access, ...rest }) => (
    <Route {...rest} render={props => {
        const currentUser = userService.currentUserValue;
        if(!currentUser) {
            return <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
        }
        let result = false;
        currentUser.user.has.map((u) => {
            if(u.role.name === "NV"){
                console.log("Role::::",currentUser.currentRole);
                u.role.permission.url.map((link) => {
                    if(link === rest.path){
                        result = true;
                    }
                })
            }
        });
        if(result === false)
            return <Redirect to={{ pathname: '/'}} />
    
        return <Layout><Component {...props}/></Layout>
    }} />
)