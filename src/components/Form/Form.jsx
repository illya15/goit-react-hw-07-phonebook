import { useDispatch, useSelector } from 'react-redux';
import css from './Form.module.css';
import { postContactsThunk } from 'redux/metods';
import { getContactsSelector } from 'redux/selector';

export const Form = () => {
  const dispatch = useDispatch();
  const {
    contacts: {
      contacts: { items, isAdding },
    },
  } = useSelector(getContactsSelector);

  const handleSubmit = e => {
    e.preventDefault();

    const newContact = {
      name: e.target.elements.name.value,
      phone: e.target.elements.number.value,
    };
    const duplicate = items.find(
      item =>
        item.name.toLocaleLowerCase() === newContact.name.toLocaleLowerCase()
    );

    if (duplicate) {
      alert('A customer already exists');
      return;
    }
    dispatch(postContactsThunk(newContact));

    e.target.reset();
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <label>
        Name
        <br />
        <input
          type="text"
          name="name"
          pattern="^[A-Za-z\u0080-\uFFFF ']+$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
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
        />
      </label>
      <br />
      <button type="submit" disabled={isAdding}>
        {isAdding ? 'Adding...' : 'Add contact'}
      </button>
    </form>
  );
};
