import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LoginPage from './features/auth/containers/LoginPage';
import ProtectedRoute from './features/auth/components/ProtectedRoute';
import { useDispatch } from 'react-redux';
import { fetchCurrentUser } from './features/auth/slices/currentUser'

export default function SocialApp() {
    const dispatch = useDispatch();
    const [hasUserRequested, setUserRequested] = useState(false)

    useEffect(() => {
        dispatch(fetchCurrentUser())
            .then(() => setUserRequested(true))
            .catch(() => setUserRequested(true))
    }, [dispatch]);
    
    if(!hasUserRequested) return null;
    return (
        <div className='social-app'>
            <Router>
                <Switch>
                    <Route exact path="/">
                        Home Page
                    </Route>
                    <Route exact path="/login">
                        <LoginPage />
                    </Route>
                    <ProtectedRoute exact path="/posts">
                        Posts Page
                    </ProtectedRoute>
                </Switch>
            </Router>
        </div>
    )
}
