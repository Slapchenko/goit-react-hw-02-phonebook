import { ContactListItem } from './ContactListItem';

export const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <ul>
      {contacts.map(contact => (
        <li key={contact.id}>
          <ContactListItem name={contact.name} number={contact.number} onDeleteContact={onDeleteContact} id={contact.id} />
        </li>
      ))}
    </ul>
  );
};
