import { createSlice, nanoid } from '@reduxjs/toolkit';

const contactListSlise = createSlice({
  name: 'contactList',
  initialState: {
    contacts: [],
    filter: '',
  },
  reducers: {
    addContactAction: {
      prepare: contacts => {
        return { payload: { ...contacts, id: nanoid() } };
      },

      reducer: (state, action) => {
        return { ...state, contacts: [...state.contacts, action.payload] };
        // state.contacts.push(action.payload)
      },
    },
    delContactAction: (state, action) => {
      return {
        ...state,
        contacts: state.contacts.filter(el => el.id !== action.payload),
      };
      //state.contacts = state.contacts.filter((el) => el.id !== action.payload)
    },

    setFilterAction: (state, action) => {
      state.filter = action.payload;
    },
  },
});

export const { addContactAction, delContactAction, setFilterAction } =
  contactListSlise.actions;

export const contactReducer = contactListSlise.reducer;
