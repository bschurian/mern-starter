import callApi from '../../util/apiCaller';

// Export Constants
export const ADD_TICKET = 'ADD_TICKET';
export const ADD_TICKETS = 'ADD_TICKETS';
export const DELETE_TICKET = 'DELETE_TICKET';

// Export Actions
export function addTicket(ticket) {
  return {
    type: ADD_TICKET,
    ticket,
  };
}

export function addTicketRequest(ticket) {
  return (dispatch) => {
    return callApi('tickets', 'ticket', {
      ticket: {
        name: ticket.name,
        title: ticket.title,
        content: ticket.content,
      },
    }).then(res => dispatch(addTicket(res.ticket)));
  };
}

export function addTickets(tickets) {
  return {
    type: ADD_TICKETS,
    tickets,
  };
}

export function fetchTickets() {
  return (dispatch) => {
    return callApi('tickets').then(res => {
      dispatch(addTickets(res.tickets));
    });
  };
}

export function fetchTicket(cuid) {
  return (dispatch) => {
    return callApi(`tickets/${cuid}`).then(res => dispatch(addTicket(res.ticket)));
  };
}

export function deleteTicket(cuid) {
  return {
    type: DELETE_TICKET,
    cuid,
  };
}

export function deleteTicketRequest(cuid) {
  return (dispatch) => {
    return callApi(`tickets/${cuid}`, 'delete').then(() => dispatch(deleteTicket(cuid)));
  };
}
