import { ContactListItem } from './ContactListItem';

export const ContactList = ({ contacts }) => {
  return (
    <ul>
      {contacts.map(contact => (
        <li key={contact.id}>
          <ContactListItem name={contact.name} number={contact.number} />
        </li>
      ))}
    </ul>
  );
};
