import axios from 'axios';

export const postContacts = async newContact => {
  const { data } = await axios.post(
    'https://648cb7048620b8bae7ed4b34.mockapi.io/api/v1/contacts',
    newContact
  );

  return data;
  };