// import { useState } from 'react';
// import css from './Form.module.css';
// import { useDispatch, useSelector } from 'react-redux';
// import { setContacts } from 'redux/contactsSlice';
// import { nanoid } from 'nanoid';

// export const Form = () => {
//   const [name, setName] = useState('');
//   const [number, setNumber] = useState('');
//   const {
//     contacts: { contacts },
//   } = useSelector(state => state);

//   const dispatch = useDispatch();

//   const handleChange = ({ target: { name, value } }) => {
//     switch (name) {
//       case 'name':
//         setName(value);
//         break;
//       case 'number':
//         setNumber(value);
//         break;
//       default:
//         break;
//     }
//   };

//   const addContact = e => {
//     e.preventDefault();
//     const duplicate = contacts.find(
//       contact => contact.name.toLocaleLowerCase() === name.toLocaleLowerCase()
//     );

//     if (duplicate) {
//       alert('A customer already exists');
//       return;
//     }

//     dispatch(setContacts({ id: nanoid(), name, number }));
//     reset();
//   };

//   const reset = () => {
//     setName('');
//     setNumber('');
//   };

//   return (
//     <form className={css.form} onSubmit={addContact}>
//       <label>
//         Name
//         <br />
//         <input
//           type="text"
//           name="name"
//           pattern="^[A-Za-z\u0080-\uFFFF ']+$"
//            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//           required
//           onChange={handleChange}
//           value={name}
//         />
//       </label>
//       <br />
//       <label>
//         Number <br />
//         <input
//           type="tel"
//           name="number"
//           pattern="^(\+?[0-9.\(\)\-\s]*)$"
//           title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//           required
//           onChange={handleChange}
//           value={number}
//         />
//       </label>
//       <br />
//       <button type="submit">Add contact</button>
//     </form>
//   );
// };


// import { FormStyle } from './Form.styled';
import { useDispatch, useSelector } from 'react-redux';
import css from './Form.module.css';
import { postContactsThunk } from 'redux/metods';
import { getContactsSelector } from 'redux/selector';

// import toast, { Toaster } from 'react-hot-toast';

// const notify = () => toast.success('Your contact has been successfully added');

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
    const duplicate = items.find(item => item.name === newContact.name);

    if (duplicate) {
      alert('This name is already created in your contact book');
      return;
    }
    dispatch(postContactsThunk(newContact));
    // notify();
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
          pattern="^(\+?[0-9.\(\)\-\s]*)$"
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
      {/* <Toaster /> */}
    </form>
  );
};

