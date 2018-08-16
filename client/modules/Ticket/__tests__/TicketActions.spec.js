import test from 'ava';
import { actionTest } from 'redux-ava';

import {
  ADD_TICKET,
  DELETE_TICKET,
  ADD_TICKETS,
  addTicket,
  deleteTicket,
  addTickets,
} from '../TicketActions';

const ticket = { name: 'Prashant', title: 'Hello Mern', cuid: 'f34gb2bh24b24b2', content: "All cats meow 'mern!'", slug: 'hello-mern', _id: 1 };

test('should return the correct type for addTicket', actionTest(
  addTicket,
  ticket,
  { type: ADD_TICKET, ticket },
));

test('should return the correct type for deleteTicket', actionTest(
  deleteTicket,
  ticket.cuid,
  { type: DELETE_TICKET, cuid: ticket.cuid },
));

test('should return the correct type for addTickets', actionTest(
  addTickets,
  [ticket],
  { type: ADD_TICKETS, tickets: [ticket] },
));
