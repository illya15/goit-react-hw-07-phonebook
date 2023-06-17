import { useState } from 'react';
import css from './Form.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { setContacts } from 'redux/contactsSlice';
import { nanoid } from 'nanoid';

export const Form = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const {
    contacts: { contacts },
  } = useSelector(state => state);

  const dispatch = useDispatch();

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        break;
    }
  };

  const addContact = e => {
    e.preventDefault();
    const duplicate = contacts.find(
      contact => contact.name.toLocaleLowerCase() === name.toLocaleLowerCase()
    );

    if (duplicate) {
      alert('A customer already exists');
      return;
    }

    dispatch(setContacts({ id: nanoid(), name, number }));
    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <form className={css.form} onSubmit={addContact}>
      <label>
        Name
        <br />
        <input
          type="text"
          name="name"
          pattern="^[A-Za-z\u0080-\uFFFF ']+$"
           title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={handleChange}
          value={name}
        />
      </label>
      <br />
      <label>
        Number <br />
        <input
          type="tel"
          name="number"
          pattern="^(\+?[0-9.\(\)\-\s]*)$"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          onChange={handleChange}
          value={number}
        />
      </label>
      <br />
      <button type="submit">Add contact</button>
    </form>
  );
};
