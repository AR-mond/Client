import React from 'react';
import LoginMain from '../login_main/login_main';
import LoginFooter from '../login_footer/login_footer';
import HomeHeader from '../home_header/home_header';

const Login = () => {
  return(
    <>
      <HomeHeader />
      <LoginMain />
      <LoginFooter />
    </>
  );
};

export default Login;
