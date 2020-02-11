import React from 'react';
import { Route } from 'react-router-dom';
import PostListPage from './pages/PostListPage'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage';
import UserProfile from './pages/UserProfile';
import UserSetting from './pages/UserSetting'
import WritePage from './pages/WritePage'

const App = () => {
  return (
    <>
      <Route component={PostListPage} path="/" exact />
      <Route component={LoginPage} path="/login" />
      <Route component={RegisterPage} path="/register" />
      <Route component={UserProfile} path="/user/:username" />
      <Route component={UserSetting} path="/settings" />
      <Route component={WritePage} path="/write" />
    </>
  );
}

export default App;
