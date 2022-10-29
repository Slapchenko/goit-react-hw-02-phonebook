import { Component } from 'react';
import { Section } from './Section';
import { nanoid } from 'nanoid';
// * ресет после отправки формы
// * не работает фун-я ресет

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
    name: '',
    number: '',
  };

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

  // reset = () => {
  //   this.setState({ name: '', number: '' });
  // };

  // getVisibleContacts = () => {
  //   const { filter, contacts } = this.state;
  //   const normalizedFilter = filter.toLowerCase();

  //   return contacts.filter(contact =>
  //     contact.text.toLowerCase().includes(normalizedFilter)
  //   );
  // };

  render() {
    // const visibleContacts = this.getVisibleContacts();
    // console.log(visibleContacts);

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

            <button type="submit">Add contact</button>
          </form>
        </Section>
        <Section title="Contacts">
          <label>
            Find contacts by name
            <input type="text" onChange={this.handleChange} />
          </label>
          <ul>
            {this.state.contacts.map(contact => (
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

/*   <label>
    Фильтр по имени
    <input type="text" value={value} onChange={onChange} />
  </label>; */
