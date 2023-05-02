import PropTypes from 'prop-types';
import { Li, Button } from './contacts.styled';

export const ContactsItem = ({ name, number, id, onDeleteContacts }) => {
  return (
    <Li key={id}>
      <p>{name}:</p>
      <p>{number}</p>
      <Button type="button" onClick={() => onDeleteContacts(id)}>
        Delete
      </Button>
    </Li>
  );
};

ContactsItem.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};
