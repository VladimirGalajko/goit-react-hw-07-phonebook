import { configureStore } from '@reduxjs/toolkit';


import contactsReducer from './contactListSlise/contactListSlise';
import filterReducer from './filterSlise/filterSlise';


export const store = configureStore({
    reducer: {
        contacts: contactsReducer,
        filter: filterReducer,
    },
  });