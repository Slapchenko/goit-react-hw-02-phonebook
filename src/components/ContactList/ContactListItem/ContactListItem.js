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