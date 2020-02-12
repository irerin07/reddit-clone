import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import LoginPage from '../pages/LoginPage';
import PostListPage from '../pages/PostListPage';
import RegisterPage from '../pages/RegisterPage';
import UserProfile from '../pages/UserProfile';
import UserSetting from '../pages/UserSetting';
import WritePage from '../pages/WritePage';

const Routes = () => {
    return (
        <Router>
            <Route component={PostListPage} path="/" exact />
            <Route component={LoginPage} path="/login" />
            <Route component={RegisterPage} path="/register" />
            <Route component={UserProfile} path="/user/:username" />
            <Route component={UserSetting} path="/settings" />
            <Route component={WritePage} path="/write" />
        </Router>
    );
};

export default Routes;