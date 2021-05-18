import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsLogin, selectUserEmail } from '../../store/auth/reducer';
import { logOut } from '../../store/auth/action';
import { removeTickets } from '../../store/tickets/action';

const useStyles = makeStyles(() => ({
  title: {
    flexGrow: 1,
  },
  link: {
    color: '#FFFFFF',
    textDecoration: 'none',
  },
}));

export const Header = () => {
  const classes = useStyles();
  const isLogin = useSelector(selectIsLogin);
  const userEmail = useSelector(selectUserEmail);
  const dispatch = useDispatch();

  const handleLogOut = () => {
    localStorage.removeItem('token');
    dispatch(logOut());
    dispatch(removeTickets());
  };

  return (
    <AppBar position='static'>
      <Toolbar>
        <Typography variant='h6' className={classes.title}>
          <NavLink to='/' className={classes.link}>
            Otpusk.ua
          </NavLink>
        </Typography>
        <Typography variant='h6' color='inherit'>
          {userEmail}
        </Typography>
        {isLogin && (
          <Button onClick={handleLogOut} color='inherit'>
            Logout
          </Button>
        )}
      </Toolbar>
    </AppBar>
  );
};
