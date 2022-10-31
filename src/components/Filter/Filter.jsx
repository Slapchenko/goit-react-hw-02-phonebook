import PropTypes from 'prop-types';

export const Filter = ({ value, onChange }) => {
  return (
    <label>
      Find contacts by name <br />
      <input type="text" name="filter" value={value} onChange={onChange} />
    </label>
  );
};

Filter.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string,
};
