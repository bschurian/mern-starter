import React from 'react';
import test from 'ava';
import sinon from 'sinon';
import { FormattedMessage } from 'react-intl';
import { TicketCreateWidget } from '../../components/TicketCreateWidget/TicketCreateWidget';
import { mountWithIntl, shallowWithIntl } from '../../../../util/react-intl-test-helper';

const props = {
  addTicket: () => {},
  showAddTicket: true,
};

test('renders properly', t => {
  const wrapper = shallowWithIntl(
    <TicketCreateWidget {...props} />
  );

  t.truthy(wrapper.hasClass('form'));
  t.truthy(wrapper.hasClass('appear'));
  t.truthy(wrapper.find('h2').first().containsMatchingElement(<FormattedMessage id="createNewTicket" />));
  t.is(wrapper.find('input').length, 2);
  t.is(wrapper.find('textarea').length, 1);
});

test('hide when showAddTicket is false', t => {
  const wrapper = mountWithIntl(
    <TicketCreateWidget {...props} />
  );

  wrapper.setProps({ showAddTicket: false });
  t.falsy(wrapper.hasClass('appear'));
});

test('has correct props', t => {
  const wrapper = mountWithIntl(
    <TicketCreateWidget {...props} />
  );

  t.is(wrapper.prop('addTicket'), props.addTicket);
  t.is(wrapper.prop('showAddTicket'), props.showAddTicket);
});

test('calls addTicket', t => {
  const addTicket = sinon.spy();
  const wrapper = mountWithIntl(
    <TicketCreateWidget addTicket={addTicket} showAddTicket />
  );

  wrapper.ref('name').value = 'David';
  wrapper.ref('title').value = 'Some Title';
  wrapper.ref('content').value = 'Bla Bla Bla';

  wrapper.find('a').first().simulate('click');
  t.truthy(addTicket.calledOnce);
  t.truthy(addTicket.calledWith('David', 'Some Title', 'Bla Bla Bla'));
});

test('empty form doesn\'t call addTicket', t => {
  const addTicket = sinon.spy();
  const wrapper = mountWithIntl(
    <TicketCreateWidget addTicket={addTicket} showAddTicket />
  );

  wrapper.find('a').first().simulate('click');
  t.falsy(addTicket.called);
});
