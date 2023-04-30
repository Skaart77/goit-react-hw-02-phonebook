import React from 'react';
import { nanoid } from 'nanoid';
import Form from './Form/form';
// import ContactList from './Contacts/contacts';

class App extends React.Component {
  state = {
    contacts: [],
  };

  nameInputId = nanoid();

  deletedContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  formSubmitHandler = data => {
    data.id = nanoid();
    this.setState(({ contacts }) => ({ contacts: [data, ...contacts] }));
  };

  render() {
    return (
      <>
        <h1>Phonebook</h1>
        <Form onSubmit={this.formSubmitHandler} />
        <h2>Contacts</h2>
        {/* <ContactList onDeleteContacts={this.deletedContact} /> */}
      </>
    );
  }
}

export default App;
