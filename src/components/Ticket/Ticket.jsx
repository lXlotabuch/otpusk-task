import { ListItem, ListItemText, makeStyles } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles(() => ({
  root: {
    width: '90%',
    border: '1px solid black',
    marginBottom: 10,
    alignSelf: 'center',
  },
}));

export const Ticket = ({ ticket }) => {
  const classes = useStyles();
  return (
    <ListItem className={classes.root}>
      <ListItemText
        primary={`Company: ${ticket.company.name}`}
        secondary={`Date: ${ticket.date}`}
      />
    </ListItem>
  );
};
