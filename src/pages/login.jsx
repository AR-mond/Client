import React from 'react';
import LoginMain from '../components/login_main/login_main';
import LoginFooter from '../components/login_footer/login_footer';
import Header from '../components/header/header';

const Login = () => {
  return (
    <>
      <Header />
      <LoginMain />
      <LoginFooter />
    </>
  );
};

export default Login;
