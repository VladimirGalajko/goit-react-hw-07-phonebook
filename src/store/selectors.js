import { createSelector } from '@reduxjs/toolkit';

export const selectContacts = ({ contacts }) => contacts.items;
export const selectFilter = ({ filter }) => filter;


export const selectVisibleContacts = createSelector(
  [selectContacts, selectFilter],
  (contacts, filter) => {
    const filteredContacts = contacts.filter(({ name }) =>
      name.toLowerCase().trim().includes(filter.toLowerCase())
    );

    return filteredContacts;
  }
);

