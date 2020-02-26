import React, { useState } from 'react';
import HeaderContainer from './containers/layout/HeaderContainer'
import { Route } from 'react-router-dom';
import PostListPage from './pages/PostListPage';
import UserProfile from './pages/UserProfile';
import UserSetting from './pages/UserSetting';
import WritePage from './pages/WritePage';
//import Routes from './routes'

const App = () => {
  return (
    <>
      <HeaderContainer />
      <Route component={PostListPage} path="/" exact />
      <Route component={UserProfile} path="/user/:username" />
      <Route component={UserSetting} path="/settings" />
      <Route component={WritePage} path="/write" />
    </>
  );
}

export default App;
