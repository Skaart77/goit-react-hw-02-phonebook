import PropTypes from 'prop-types';
import React from 'react';

const ContactList = ({ contacts, onDeleteContacts }) => {
  return (
    <ul>
      {contacts.map(({ id, name }) => (
        <li key={id}>
          <p>{name}</p>
          <button onClick={() => onDeleteContacts(id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    })
  ),
};

export default ContactList;
