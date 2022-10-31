import PropTypes from 'prop-types';

export const ContactListItem = ({ name, number, onDeleteContact }) => {
  return (
    <>
      <p>
        {name}: {number}
      </p>
      <button type="button" onClick={onDeleteContact}>delete</button>
    </>
  );
};

ContactListItem.propTypes = {
  name: PropTypes.string,
  number: PropTypes.string,
  onDeleteContact: PropTypes.func.isRequired,
};
