import PropTypes from 'prop-types';
import React from 'react';
import { ContactsItem } from './contactsItem';

const ContactList = ({ contacts, onDeleteContacts }) => {
  return (
    <ul>
      {contacts.map(({ id, name, number }) => (
        <ContactsItem
          key={id}
          name={name}
          number={number}
          onDeleteContacts={onDeleteContacts}
          id={id}
        />
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};

export default ContactList;
