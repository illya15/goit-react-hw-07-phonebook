// import { Form } from './Form/Form';
// import { Filter } from './Filter/Filter';
// import { ContactList } from './ContactList/ContactList';

// export const App = () => {
//   return (
//     <div
//       style={{
//         display: 'flex',
//         flexDirection: 'column',
//         justifyContent: 'center',
//         alignItems: 'center',
//         // color: '#010101',
//       }}
//     >
//       <h1>Phonebook</h1>
//       <Form />
//       <h2>Contacts</h2>
//       <Filter />
//       <ContactList />
//     </div>
//   );
// };


import { Form } from './Form/Form';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';

import { useDispatch } from 'react-redux';

import { useEffect } from 'react';
import { getContactsThunk } from 'redux/metods';

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getContactsThunk());
  }, [dispatch]);

  return (
    <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
             color: '#010101',
          }}
    >
      <h1>Phonebook</h1>
      <Form />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );
};

