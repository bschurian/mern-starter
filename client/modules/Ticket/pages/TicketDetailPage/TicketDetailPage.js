import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { FormattedMessage } from 'react-intl';

// Import Style
import styles from '../../components/TicketListItem/TicketListItem.css';

// Import Actions
import { fetchTicket } from '../../TicketActions';

// Import Selectors
import { getTicket } from '../../TicketReducer';

export function TicketDetailPage(props) {
  return (
    <div>
      <Helmet title={props.ticket.title} />
      <div className={`${styles['single-ticket']} ${styles['ticket-detail']}`}>
        <h3 className={styles['ticket-title']}>{props.ticket.title}</h3>
        <p className={styles['author-name']}><FormattedMessage id="by" /> {props.ticket.name}</p>
        <p className={styles['ticket-desc']}>{props.ticket.content}</p>
      </div>
    </div>
  );
}

// Actions required to provide data for this component to render in server side.
TicketDetailPage.need = [params => {
  return fetchTicket(params.cuid);
}];

// Retrieve data from store as props
function mapStateToProps(state, props) {
  return {
    ticket: getTicket(state, props.params.cuid),
  };
}

TicketDetailPage.propTypes = {
  ticket: PropTypes.shape({
    name: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    cuid: PropTypes.string.isRequired,
  }).isRequired,
};

export default connect(mapStateToProps)(TicketDetailPage);
