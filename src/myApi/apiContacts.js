import axios from 'axios';

const contactsInstance = axios.create({
  baseURL: 'https://657d6820853beeefdb9ab1f3.mockapi.io/contacts',
});

export const getAllContacts = () => contactsInstance.get('/');

export const deleteContact = id => {
  return contactsInstance.delete(`/${id}`);
};

export const addOneContact = data => {
  return contactsInstance.post('/', data);
};
