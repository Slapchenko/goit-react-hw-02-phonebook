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

// export const ContactListItem = ({ name, number, onDeleteContact, id }) => {
//   return (
//     <>
//       <p>
//         {name}: {number}
//       </p>
//       <button type="button" onClick={() => onDeleteContact(id)}>delete</button>
//     </>
//   );
// };