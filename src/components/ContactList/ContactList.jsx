import PropTypes from 'prop-types';
import { ContactListItem } from './ContactListItem';

export const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <ul>
      {contacts.map(({ id, name, number }) => (
        <li key={id}>
          <ContactListItem
            name={name}
            number={number}
            onDeleteContact={() => onDeleteContact(id)}
          />
        </li>
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.array,
  onDeleteContact: PropTypes.func.isRequired,
};
