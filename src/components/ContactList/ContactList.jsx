// import { useDispatch, useSelector } from 'react-redux';
// import css from './ContactList.module.css';
// import { deleteContacts } from 'redux/contactsSlice';

// export const ContactList = () => {
//   const {
//     contacts: { contacts },
//     filter,
//   } = useSelector(state => state);

//   const dispatch = useDispatch();
//   const filterName = contacts.filter(contact =>
//     contact.name.toLowerCase().includes(filter.toLowerCase())
//   );

//   const deleteContact = id => {
//     dispatch(deleteContacts(id));
//   };

//   return (
//     <ul children={css.list}>
//       {filterName.map(contact => (
//         <li className={css.item} key={contact.id}>
//           <p>
//             {contact.name}: {contact.number}
//           </p>
//           <button
//             className={css.button}
//             type="button"
//             onClick={() => deleteContact(contact.id)}
//           >
//             Delete
//           </button>
//         </li>
//       ))}
//     </ul>
//   );
// };


import { useDispatch, useSelector } from 'react-redux';

import css from './ContactList.module.css';
import { getContactsSelector } from 'redux/selector';
import { deleteContactsThunk } from 'redux/metods';
// import toast, { Toaster } from 'react-hot-toast';
// const notify = () =>
//   toast.success('Your contact has been successfully deleted');
export const ContactList = () => {
  const {
    contacts: { contacts },
  } = useSelector(getContactsSelector);
  const { filter } = useSelector(getContactsSelector);

  const dispatch = useDispatch();

  const filterName = contacts.items.filter(item =>
    item.name.toLowerCase().includes(filter.toLowerCase())
  );

  const deleteContact = id => {
    // notify();
    dispatch(deleteContactsThunk(id));
  };

  return (
    <ul children={css.list}>
      {contacts.isLoading && <p>Loading...</p>}
      {contacts.error && (
        <p>Oops!Something went wrong. Error: {contacts.error}</p>
      )}
      {filterName.map(item => (
        <li className={css.item} key={item.id}>
          <p>
            {item.name}: {item.phone}
          </p>
          <button
            className={css.button}
            type="button"
            onClick={() => deleteContact(item.id)}
            disabled={contacts.isDeleting}
          >
            {contacts.isDeleting ? 'Deleting...' : 'Delete'}
          </button>
        </li>
      ))}
      {/* <Toaster /> */}
    </ul>
  );
};
