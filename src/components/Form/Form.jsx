import { Button, Grid, Paper, TextField } from '@material-ui/core';
import React, { useState } from 'react';
import { validation } from '../../utils/validation';
import { authenticateUser } from '../../sdk.js';
import { useHistory } from 'react-router';

export const Form = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const history = useHistory();

  const paperStyle = {
    padding: 20,
    height: '40vh',
    width: 280,
    margin: '20px auto',
  };

  const handleSubmite = async e => {
    e.preventDefault();
    const values = { email, password };

    const { isValid, errors } = validation(values);

    if (!isValid) {
      setErrors(errors);
    } else {
      const res = await authenticateUser(values);
      const data = await res.json();
      if (res.status === 200) {
        history.push('/');
      }
    }
  };

  const handleChange = e => {
    const { name, value } = e.target;
    if (name === 'email') {
      setEmail(value);
      if (errors.email) {
        setErrors(prev => {
          const { email, ...current } = prev;
          return current;
        });
      }
    }
    if (name === 'password') {
      setPassword(value);
      if (errors.password) {
        setErrors(prev => {
          const { password, ...current } = prev;
          return current;
        });
      }
    }
  };

  return (
    <Grid>
      <Paper elevation={10} style={paperStyle}>
        <Grid align='center'>
          <h2>Sign In</h2>
        </Grid>
        <form onSubmit={handleSubmite}>
          <TextField
            label='Email'
            placeholder='Enter email'
            name='email'
            fullWidth
            type='text'
            value={email}
            onChange={handleChange}
            error={!!errors.email}
            helperText={errors?.email}
          />
          <TextField
            value={password}
            onChange={handleChange}
            label='Password'
            name='password'
            placeholder='Enter password'
            type='password'
            error={!!errors.password}
            helperText={errors?.password}
            fullWidth
          />
          <Button
            type='submite'
            color='primary'
            variant='contained'
            style={{ margin: '8px 0' }}>
            Sign in
          </Button>
        </form>
      </Paper>
    </Grid>
  );
};
