import { Component } from 'react';
import { Section } from './Section';
import { ContactForm } from './ContactForm';
import { nanoid } from 'nanoid';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  addContact = ({ name, number }) => {
    const { contacts } = this.state;
    this.setState({ contacts: [...contacts, { id: nanoid(), name, number }] });
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
          <label>
            Find contacts by name <br />
            <input type="text" name="filter" onChange={this.handleChange} />
          </label>
          <ul>
            {visibleContacts.map(contact => (
              <li key={contact.id}>
                {contact.name}: {contact.number}
              </li>
            ))}
          </ul>
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
