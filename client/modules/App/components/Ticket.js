import React, { Component } from 'react';
import ticket from '../../../static/imgs/ticket.png';
import Collapsible from 'react-collapsible';
// import fibonacci from '../controller/fibonacci';
import styles from './../App.css';


const lorem = 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.'.replace(',', '');

const fibonacci = x => x + 1;

class Ticket extends Component {
	render() {
		return (
			<li>
				<div className={styles.ticket} onClick={() => 1 + 41}>
					Ticket #{this.props.i}
					<br />
					fib({this.props.i}) = {fibonacci(this.props.i)}
					<br />
					tags: {lorem.split(' ').slice(this.props.text, this.props.text + 5).join(', ')}
					<Collapsible trigger={<button>More</button>} lazyRender={true} triggerWhenOpen=''>
						<img src={ticket} alt='QR-Representation of the ticket' className='qr-small' />
						created 1.1.2018
          <br />
						{lorem.slice(0, 50)}
					</Collapsible>
				</div>
			</li>
		);
	}
}

export default Ticket;
