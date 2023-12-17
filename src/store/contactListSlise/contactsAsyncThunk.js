import { createAsyncThunk } from '@reduxjs/toolkit';

import * as api from './../../myApi/apiContacts';

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (data, { rejectWithValue }) => {
    try {
      const { data: result } = await api.addOneContact(data);
      return result;
    } catch (e) {
      alert(`${e.message}`);
      return rejectWithValue(`Errore: ${e.message}`);
    }
  }
);
export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await api.getAllContacts();
      return data;
    } catch (e) {
      return rejectWithValue(`Errore: ${e.message}`);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (id, { rejectWithValue }) => {
    try {
      await api.deleteContact(id);
      return id;
    } catch (e) {
      return rejectWithValue(`Errore: ${e.message}`);
    }
  }
);
