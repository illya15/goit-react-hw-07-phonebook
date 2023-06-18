// import { createSlice } from '@reduxjs/toolkit';
// import { nanoid } from 'nanoid';

// const initStateContacts = [
//   { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
//   { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//   { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//   { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
// ] ;
 

// const contactsSlice = createSlice({
//   name: 'SETCONTACTS',
//   initialState: { contacts:initStateContacts },
//   reducers: {
//     setContacts: (state, { payload: { name, number } }) => {
//       state.contacts.push({ id: nanoid(), name, number })
//     },
//     deleteContacts: (state, { payload }) => {
//       state.contacts = state.contacts.filter(contact => contact.id !== payload);
//     },
//   },
// });

// export const contactsReducer = contactsSlice.reducer;
// export const { setContacts, deleteContacts } = contactsSlice.actions;


import { createSlice } from '@reduxjs/toolkit';

import {
  getContactsThunk,
  postContactsThunk,
  deleteContactsThunk,
} from './metods';

export const initialState = {
  contacts: {
    items: [],
    isLoading: false,
    isAdding: false,
    isDeleting: false,
    error: null,
  },
};

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(getContactsThunk.pending, state => {
        state.contacts.isLoading = true;
      })
      .addCase(getContactsThunk.fulfilled, (state, { payload }) => {
        state.contacts.isLoading = false;
        state.contacts.error = '';
        state.contacts.items = payload;
      })
      .addCase(getContactsThunk.rejected, (state, { payload }) => {
        state.contacts.isLoading = false;
        state.contacts.error = payload;
      })
      .addCase(postContactsThunk.pending, state => {
        state.contacts.isAdding = true;
      })
      .addCase(postContactsThunk.fulfilled, (state, { payload }) => {
        state.contacts.isAdding = false;
        state.contacts.error = '';
        state.contacts.items.push(payload);
      })
      .addCase(postContactsThunk.rejected, (state, { payload }) => {
        state.contacts.isAdding = false;
        state.contacts.error = payload;
      })
      .addCase(deleteContactsThunk.pending, state => {
        state.contacts.isDeleting = true;
      })
      .addCase(deleteContactsThunk.fulfilled, (state, { payload }) => {
        state.contacts.isDeleting = false;
        state.contacts.error = '';
        state.contacts.items = state.contacts.items.filter(
          contact => contact.id !== payload.id
        );
      })
      .addCase(deleteContactsThunk.rejected, (state, { payload }) => {
        console.log(payload);
        state.contacts.isDeleting = false;
        state.contacts.error = payload;
      });
  },
});

export const contactsReducer = contactsSlice.reducer;
