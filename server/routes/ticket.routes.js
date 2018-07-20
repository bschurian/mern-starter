import { Router } from 'express';
import * as TicketController from '../controllers/ticket.controller';
const router = new Router();

// Get all Tickets
router.route('/tickets').get(TicketController.getTickets);

// Get one post by cuid
// router.route('/tickets/:cuid').get(TicketController.getTicket);

// Add a new Ticket
router.route('/tickets').post(TicketController.addTicket);

// Delete a post by cuid
// router.route('/tickets/:cuid').delete(TicketController.deleteTicket);

export default router;
