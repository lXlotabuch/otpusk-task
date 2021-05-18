import { REMOVE_TICKETS, SET_TICKETS } from './action';

const initialState = {
  tickets: [],
};

export const MODULE_NAME = 'tickets';

export const selectTickets = state => state[MODULE_NAME].tickets;

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_TICKETS:
      return {
        ...state,
        tickets: payload,
      };

    case REMOVE_TICKETS:
      return {
        ...state,
        tikets: {},
      };
    default:
      return state;
  }
};
