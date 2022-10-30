import { Component } from 'react';
import { Section } from './Section';
import { nanoid } from 'nanoid';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
    name: '',
    number: '',
  };

  // reset = () => {
  //   this.setState({ name: '', number: '' });
  // };

  handleSubmit = e => {
    e.preventDefault();
    const { contacts, name, number } = this.state;
    this.setState({ contacts: [...contacts, { id: nanoid(), name, number }] });
    // this.reset();
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
          <form onSubmit={this.handleSubmit}>
            <label>
              Name
              <input
                type="text"
                name="name"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
                autoComplete="off"
                onChange={this.handleChange}
              />
            </label>
            <br />
            <label>
              Number
              <input
                type="tel"
                name="number"
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                required
                onChange={this.handleChange}
              />
            </label>
            <br />
            <button type="submit">Add contact</button>
          </form>
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
