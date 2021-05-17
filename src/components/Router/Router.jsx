import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { selectIsLogin } from '../../store/auth/reducer';
import { Form } from '../Form/Form';
import { SecretRoute } from '../SecretRoute/SecretRoute';

export const Router = () => {
  const isLogin = useSelector(selectIsLogin);
  return (
    <Switch>
      <Route exact path='/'>
        <SecretRoute flag={!isLogin} pathTo='/auth'>
          <h1>Home Page</h1>
        </SecretRoute>
      </Route>
      <Route exact path='/auth'>
        <SecretRoute flag={isLogin} pathTo='/'>
          <Form />
        </SecretRoute>
      </Route>
    </Switch>
  );
};
