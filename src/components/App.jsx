import { Component } from 'react';
import { Section } from './Section';
import { ContactForm } from './ContactForm';
import { Filter } from './Filter';
import { ContactList } from './ContactList';
import { nanoid } from 'nanoid';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  addContact = ({ name, number }) => {
    const { contacts } = this.state;
    const savedNamesList = contacts.map(contact => contact.name);
    
    if (savedNamesList.includes(name)) {
      return alert(`${name} is already in contacts`);
    }

    this.setState({ contacts: [...contacts, { id: nanoid(), name, number }] });
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  getVisibleContacts = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  render() {
    const visibleContacts = this.getVisibleContacts();

    return (
      <>
        <Section title="Phonebook">
          <ContactForm onSubmit={this.addContact} />
        </Section>
        <Section title="Contacts">
          <Filter value={this.state.filter} onChange={this.handleChange} />
          <ContactList contacts={visibleContacts} />
        </Section>
      </>
    );
  }
}

/*   handleSubmit = e => {
    e.preventDefault();
    const { contacts, name, number } = this.state;

    const isUniqueName = contacts.map(value =>
      value.name === name ? false : true
    );

    console.log(isUniqueName);

    this.setState(() =>
      isUniqueName
        ? {
            contacts: [...contacts, { id: nanoid(), name, number }],
          }
        : contacts
    );
  }; */

// handleSubmit = e => {
//   e.preventDefault();
//   const { contacts, name, number } = this.state;

//   const isUniqueName = contacts.map(value => {
//     if (value.name === name) {
//       return alert('ты уже есть');
//     }
//   });

//   this.setState({ contacts: [...contacts, { id: nanoid(), name, number }] });
// };
