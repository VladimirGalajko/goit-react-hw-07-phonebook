import { createSlice} from '@reduxjs/toolkit';
import {
  addContact,
  fetchContacts,
  deleteContact,
} from './../../store/contactListSlise/contactsAsyncThunk';
import {
  getItems,
  setItems,
  setFulStatus,
  setPendStatus,
  setRejStatus,
  delOneItem,
} from './stateFunction';


const initialState = {
  items: [],
  isLoading: false,
  error: null,
};

const contactListSlise = createSlice({
  name: 'contacts',
  initialState: initialState,
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.fulfilled, getItems)
      .addCase(addContact.fulfilled, setItems)
      .addCase(deleteContact.fulfilled, delOneItem)
      .addMatcher((action) => action.type.endsWith('pending'), setPendStatus)
      .addMatcher((action) => action.type.endsWith('rejected'), setRejStatus)
			.addMatcher((action) => action.type.endsWith('fulfilled'), setFulStatus)

  },
});

export default contactListSlise.reducer;
