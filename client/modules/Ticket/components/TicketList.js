import React from 'react';
import PropTypes from 'prop-types';

// Import Components
import TcketListItem from './TcketListItem/TcketListItem';

function TcketList(props) {
  return (
    <div className="listView">
      {
        props.tickets.map(ticket => (
          <TcketListItem
            ticket={ticket}
            key={ticket.cuid}
            onDelete={() => props.handleDeleteTicket(ticket.cuid)}
          />
        ))
      }
    </div>
  );
}

TcketList.propTypes = {
  tickets: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    cuid: PropTypes.string.isRequired,
  })).isRequired,
  handleDeleteTcket: PropTypes.func.isRequired,
};

export default TcketList;
