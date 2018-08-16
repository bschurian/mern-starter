import { ADD_POST, ADD_POSTS, DELETE_POST } from './TicketActions';

// Initial State
const initialState = { data: [] };

const TicketReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST :
      return {
        data: [action.ticket, ...state.data],
      };

    case ADD_POSTS :
      return {
        data: action.tickets,
      };

    case DELETE_POST :
      return {
        data: state.data.filter(ticket => ticket.cuid !== action.cuid),
      };

    default:
      return state;
  }
};

/* Selectors */

// Get all tickets
export const getTickets = state => state.tickets.data;

// Get ticket by cuid
export const getTicket = (state, cuid) => state.tickets.data.filter(ticket => ticket.cuid === cuid)[0];

// Export Reducer
export default TicketReducer;
