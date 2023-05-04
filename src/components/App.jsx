import React from 'react';
import { nanoid } from 'nanoid';
import Form from './Form/form';
import ContactList from './Contacts/contacts';
import Filter from './Filter/filter';
import { Div, H1, H2 } from './app.styled';
class App extends React.Component {
  state = {
    contacts: [],
    filter: '',
  };

  deletedContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  formSubmitHandler = data => {
    data.id = nanoid();
    const { contacts } = this.state;
    contacts.some(contact => contact.name === data.name)
      ? alert(`${data.name} is already in the phonebook`)
      : this.setState(({ contacts }) => ({
          contacts: [data, ...contacts],
        }));
  };

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  filterContacts = () => {
    const { contacts, filter } = this.state;
    const filterContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
    return filterContacts;
  };

  render() {
    const { filter } = this.state;

    return (
      <Div>
        <H1>Phonebook</H1>
        <Form onSubmit={this.formSubmitHandler} />
        <H2>Contacts</H2>
        <Filter value={filter} onChange={this.changeFilter} />
        <ContactList
          contacts={this.filterContacts()}
          onDeleteContacts={this.deletedContact}
        />
      </Div>
    );
  }
}

export default App;
