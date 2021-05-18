import { InputBase, List, fade, makeStyles } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getFlights } from '../../sdk';
import { setTickets } from '../../store/tickets/action';
import { selectTickets } from '../../store/tickets/reducer';
import { debounce } from '../../utils/debounce';
import { sortData } from '../../utils/sortData';
import { Ticket } from '../Ticket/Ticket';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
    display: 'flex',
    flexDirection: 'column',
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.primary.light, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.primary.light, 0.25),
    },
    margin: '0 auto 10px',
    width: '50%',
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

export const Tickets = () => {
  const classes = useStyles();

  const tickets = useSelector(selectTickets);
  const token = localStorage.getItem('token');
  const dispatch = useDispatch();

  const handleSearch = async e => {
    const value = e.target.value.toLowerCase();

    const res = await getFlights(token);
    const { data } = await res.json();

    if (res.status === 200) {
      const newData = sortData(data).filter(ticket => {
        if (ticket.company.name.toLowerCase().includes(value)) {
          return true;
        }
        for (let name of ticket.company.alternativeNames) {
          console.log(name.toLowerCase().includes(value));
          if (name.toLowerCase().includes(value)) {
            return true;
          }
        }
        return false;
      });
      dispatch(setTickets(newData));
    }
  };

  const debounceHandleSearch = debounce(handleSearch, 1000);

  const getFlight = useCallback(async () => {
    if (token) {
      const res = await getFlights(token);
      const { data } = await res.json();
      if (res.status === 200) {
        const newData = sortData(data);
        dispatch(setTickets(newData));
      }
    }
  }, [token, dispatch]);

  useEffect(() => {
    getFlight();
  }, [getFlight]);

  return (
    <List className={classes.root}>
      <div className={classes.search}>
        <div className={classes.searchIcon}>
          <SearchIcon />
        </div>
        <InputBase
          placeholder='Search…'
          classes={{
            root: classes.inputRoot,
            input: classes.inputInput,
          }}
          onChange={e => debounceHandleSearch(e)}
          inputProps={{ 'aria-label': 'search' }}
        />
      </div>
      {tickets.map(ticket => (
        <Ticket key={ticket.id} ticket={ticket} />
      ))}
    </List>
  );
};
