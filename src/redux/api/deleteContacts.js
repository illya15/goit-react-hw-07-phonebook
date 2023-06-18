import axios from 'axios';

export const deleteContacts = async contactId => {
  const { data } = await axios.delete(
    `https://648cb7048620b8bae7ed4b34.mockapi.io/api/v1/contacts/${contactId}`
  );

  return data;
};
