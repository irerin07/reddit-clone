import React, { useState } from 'react';
import HeaderContainer from './containers/auth/HeaderContainer'
import Routes from './routes'

const App = () => {
  return (
    <>
      <HeaderContainer />
      <Routes />
    </>
  );
}

export default App;
