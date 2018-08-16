import React from 'react';
import test from 'ava';
import sinon from 'sinon';
import TicketListItem from '../../components/TicketListItem/TicketListItem';
import { mountWithIntl, shallowWithIntl } from '../../../../util/react-intl-test-helper';

const ticket = { name: 'Prashant', title: 'Hello Mern', slug: 'hello-mern', cuid: 'f34gb2bh24b24b2', content: "All cats meow 'mern!'" };
const props = {
  ticket,
  onDelete: () => {},
};

test('renders properly', t => {
  const wrapper = shallowWithIntl(
    <TicketListItem {...props} />
  );

  t.truthy(wrapper.hasClass('single-ticket'));
  t.is(wrapper.find('Link').first().prop('children'), ticket.title);
  t.regex(wrapper.find('.author-name').first().text(), new RegExp(ticket.name));
  t.is(wrapper.find('.ticket-desc').first().text(), ticket.content);
});

test('has correct props', t => {
  const wrapper = mountWithIntl(
    <TicketListItem {...props} />
  );

  t.deepEqual(wrapper.prop('ticket'), props.ticket);
  t.is(wrapper.prop('onClick'), props.onClick);
  t.is(wrapper.prop('onDelete'), props.onDelete);
});

test('calls onDelete', t => {
  const onDelete = sinon.spy();
  const wrapper = shallowWithIntl(
    <TicketListItem ticket={ticket} onDelete={onDelete} />
  );

  wrapper.find('.ticket-action > a').first().simulate('click');
  t.truthy(onDelete.calledOnce);
});
