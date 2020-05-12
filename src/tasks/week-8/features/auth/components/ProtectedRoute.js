import React from 'react';
import { Route, Redirect } from 'react-router-dom'
import { useSelector } from 'react-redux';

export default function ProtectedRoute({ childred, ...rest }) {
    const currentUser = useSelector(state => state.currentUser);
    const isAuth = !!currentUser;
    return (
        <Route
            {...rest}
            render={props => 
                isAuth 
                ? childred 
                : <Redirect to={{pathname: '/login', state: { from: props.location }}}/> }
        />
            
        
    )
}
