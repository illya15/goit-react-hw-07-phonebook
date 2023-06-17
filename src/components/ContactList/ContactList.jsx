import { useDispatch, useSelector } from 'react-redux';
import css from './ContactList.module.css';
import { deleteContacts } from 'redux/contactsSlice';

export const ContactList = () => {
  const {
    contacts: { contacts },
    filter,
  } = useSelector(state => state);

  const dispatch = useDispatch();
  const filterName = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  const deleteContact = id => {
    dispatch(deleteContacts(id));
  };

  return (
    <ul children={css.list}>
      {filterName.map(contact => (
        <li className={css.item} key={contact.id}>
          <p>
            {contact.name}: {contact.number}
          </p>
          <button
            className={css.button}
            type="button"
            onClick={() => deleteContact(contact.id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};
