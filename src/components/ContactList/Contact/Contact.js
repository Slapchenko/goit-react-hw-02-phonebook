import PropTypes from 'prop-types';
import { ContactInfo, Button } from './Contact.styled';

export const Contact = ({ name, number, onDeleteContact }) => {
  return (
    <>
      <ContactInfo>
        😄 {name}: {number}
      </ContactInfo>
      <Button type="button" onClick={onDeleteContact}>
        delete
      </Button>
    </>
  );
};

Contact.propTypes = {
  name: PropTypes.string,
  number: PropTypes.string,
  onDeleteContact: PropTypes.func.isRequired,
};
