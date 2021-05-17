import React from 'react';
import { Redirect } from 'react-router';

export const SecretRoute = ({ flag, pathTo, children }) => {
  return flag ? <Redirect to={pathTo} /> : children;
};
