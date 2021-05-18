export const SET_TICKETS = 'SET_TICKETS';
export const REMOVE_TICKETS = 'REMOVE_TICKETS';

export const setTickets = payload => ({
  type: SET_TICKETS,
  payload,
});

export const removeTickets = () => ({
  type: REMOVE_TICKETS,
});
