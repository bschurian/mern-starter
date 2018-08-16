import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// Import Components
import TicketList from '../../components/TicketList';
import TicketCreateWidget from '../../components/TicketCreateWidget/TicketCreateWidget';

// Import Actions
import { addTicketRequest, fetchTickets, deleteTicketRequest } from '../../TicketActions';
import { toggleAddTicket } from '../../../App/AppActions';

// Import Selectors
import { getShowAddTicket } from '../../../App/AppReducer';
import { getTickets } from '../../TicketReducer';

class TicketListPage extends Component {
  componentDidMount() {
    this.props.dispatch(fetchTickets());
  }

  handleDeleteTicket = ticket => {
    if (confirm('Do you want to delete this ticket')) { // eslint-disable-line
      this.props.dispatch(deleteTicketRequest(ticket));
    }
  };

  handleAddTicket = (name, title, content) => {
    this.props.dispatch(toggleAddTicket());
    this.props.dispatch(addTicketRequest({ name, title, content }));
  };

  render() {
    return (
      <div>
        <TicketCreateWidget addTicket={this.handleAddTicket} showAddTicket={this.props.showAddTicket} />
        <TicketList handleDeleteTicket={this.handleDeleteTicket} tickets={this.props.tickets} />
      </div>
    );
  }
}

// Actions required to provide data for this component to render in sever side.
TicketListPage.need = [() => { return fetchTickets(); }];

// Retrieve data from store as props
function mapStateToProps(state) {
  return {
    showAddTicket: getShowAddTicket(state),
    tickets: getTickets(state),
  };
}

TicketListPage.propTypes = {
  tickets: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
  })).isRequired,
  showAddTicket: PropTypes.bool.isRequired,
  dispatch: PropTypes.func.isRequired,
};

TicketListPage.contextTypes = {
  router: PropTypes.object,
};

export default connect(mapStateToProps)(TicketListPage);
