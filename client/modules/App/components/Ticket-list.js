import React, { Component } from 'react';
import QRExample from './QRExample';
import Ticket from './Ticket';

class TicketList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nums: [1],
      text: 'abcdef'
    };
  }
  componentDidMount() {
    this.updateTickets();
  }
  updateTickets() {
    fetch('api/tickets')
      .then(res => res.json())
      .then(tickets => this.setState({ nums: tickets }));
  }
  postTicket() {
    fetch('api/tickets', {
      method: 'POST',
      body: JSON.stringify({ ticket: { content: 'Bahnticket vom 1.2 Zug 9485', title: 'Bahn 1' } })
    }).then(this.updateTickets());
  }
  handleClick() {
    this.setState({ text: (Math.random() * 255 | 0).toString() });
    this.setState({ nums: this.state.nums.concat([9, 8, 7]) });
  }
  render() {
    return (
      <div>
        <QRExample />
        <button onClick={() => this.postTicket()}>Create New Ticket</button>
        <p>{this.state.text}</p><br />
        <button onClick={() => this.handleClick()}>More Tickets</button>
        <ul>
          {this.state.nums.map(index => { return { i: index, tOffset: index }; })
            // [{ "i": 0, "tOffset": 0 }, { "i": 1, "tOffset": 1 }, { "i": 2, "tOffset": 2 }, { "i": 3, "tOffset": 3 }, { "i": 4, "tOffset": 4 }, { "i": 5, "tOffset": 5 }, { "i": 6, "tOffset": 6 }]
            .map(json => <Ticket key={json.i} i={json.i} text={json.tOffset} />)
          }
        </ul>
      </div>
    );
  }
}

export default TicketList;
