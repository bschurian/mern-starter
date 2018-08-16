import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
import { FormattedMessage } from 'react-intl';

// Import Style
import styles from './TicketListItem.css';

function TicketListItem(props) {
  return (
    <div className={styles['single-ticket']}>
      <h3 className={styles['ticket-title']}>
        <Link to={`/tickets/${props.ticket.slug}-${props.ticket.cuid}`} >
          {props.ticket.title}
        </Link>
      </h3>
      {/* <p className={styles['author-name']}><FormattedMessage id="by" /> {props.ticket.name}</p> */}
      <p className={styles['ticket-desc']}>{props.ticket.content}</p>
      <p className={styles['ticket-action']}><a href="#" onClick={props.onDelete}><FormattedMessage id="deleteTicket" /></a></p>
      <hr className={styles.divider} />
    </div>
  );
}

TicketListItem.propTypes = {
  ticket: PropTypes.shape({
    // name: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    cuid: PropTypes.string.isRequired,
  }).isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default TicketListItem;
