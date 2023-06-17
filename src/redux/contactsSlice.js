import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

const initStateContacts = [
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
] ;
 

const contactsSlice = createSlice({
  name: 'SETCONTACTS',
  initialState: { contacts:initStateContacts },
  reducers: {
    setContacts: (state, { payload: { name, number } }) => {
      state.contacts.push({ id: nanoid(), name, number })
    },
    deleteContacts: (state, { payload }) => {
      state.contacts = state.contacts.filter(contact => contact.id !== payload);
    },
  },
});

export const contactsReducer = contactsSlice.reducer;
export const { setContacts, deleteContacts } = contactsSlice.actions;
