import axios from 'axios';

export const getContacts = async () => {
  const { data } = await axios(
    'https://648cb7048620b8bae7ed4b34.mockapi.io/contacts'
  );
  return data;
};
