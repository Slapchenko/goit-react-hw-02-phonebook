import PropTypes from 'prop-types';
import { Contact } from './Contact';
import { ContactListGroup, СontactСard } from './ContactList.styled';

export const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <ContactListGroup>
      {contacts.map(({ id, name, number }) => (
        <СontactСard key={id}>
          <Contact
            name={name}
            number={number}
            onDeleteContact={() => onDeleteContact(id)}
          />
        </СontactСard>
      ))}
    </ContactListGroup>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.array,
  onDeleteContact: PropTypes.func.isRequired,
};
