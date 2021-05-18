import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { selectIsLogin } from '../../store/auth/reducer';
import { Form } from '../Form/Form';
import { SecretRoute } from '../SecretRoute/SecretRoute';
import { Tickets } from '../Tickets/Tickets';

export const Router = () => {
  const isLogin = useSelector(selectIsLogin);
  return (
    <Switch>
      <Route exact path='/'>
        <SecretRoute flag={!isLogin} pathTo='/auth'>
          <Tickets />
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
