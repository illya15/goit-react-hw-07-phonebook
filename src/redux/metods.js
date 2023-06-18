import { createAsyncThunk } from '@reduxjs/toolkit';
import { getContacts } from './api/getContacts';
import { postContacts } from './api/postContacts';
import { deleteContacts } from './api/deleteContacts';

export const getContactsThunk = createAsyncThunk(
  'contacts/getContacts',
  async () => {
    return await getContacts();
  }
);

export const postContactsThunk = createAsyncThunk(
  'contacts/postContacts',
  async newContact => {
    return await postContacts(newContact);
  }
);

export const deleteContactsThunk = createAsyncThunk(
  'contacts/deleteContacts',
  async idContacts => {
    return await deleteContacts(idContacts);
  }
);
