import Ticket from '../models/ticket';
import cuid from 'cuid';
import slug from 'limax/lib/limax';
import sanitizeHtml from 'sanitize-html';

/**
 * Get all tickets
 * @param req
 * @param res
 * @returns void
 */
export function getTickets(req, res) {
  Ticket.find().sort('-dateAdded').exec((err, tickets) => {
    if (err) {
      res.status(500).send(err);
    }
    // res.json({ tickets });
    res.json([0, 1, 2]);
  });
}

/**
 * Save a ticket
 * @param req
 * @param res
 * @returns void
 */
export function addTicket(req, res) {
  console.log(req.body);
  if (!req.body.ticket.title || !req.body.ticket.content) {
    res.status(403).end();
  }

  const newTicket = new Ticket(req.body.ticket);

  // Let's sanitize inputs
  newTicket.title = sanitizeHtml(newTicket.title);
  // newTicket.name = sanitizeHtml(newTicket.name);
  newTicket.content = sanitizeHtml(newTicket.content);

  newTicket.slug = slug(newTicket.title.toLowerCase(), { lowercase: true });
  newTicket.cuid = cuid();
  newTicket.save((err, saved) => {
    if (err) {
      res.status(500).send(err);
    }
    res.json({ ticket: saved });
  });
}

/**
 * Get a single ticket
 * @param req
 * @param res
 * @returns void
 */
export function getTicket(req, res) {
  Ticket.findOne({ cuid: req.params.cuid }).exec((err, ticket) => {
    if (err) {
      res.status(500).send(err);
    }
    res.json({ ticket });
  });
}

/**
 * Delete a ticket
 * @param req
 * @param res
 * @returns void
 */
export function deleteTicket(req, res) {
  Ticket.findOne({ cuid: req.params.cuid }).exec((err, ticket) => {
    if (err) {
      res.status(500).send(err);
    }

    ticket.remove(() => {
      res.status(200).end();
    });
  });
}
