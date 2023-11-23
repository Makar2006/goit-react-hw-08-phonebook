import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { getContacts, addContact, deleteContact } from './contactsOperations';

const contactsInitialState = {
  items: [],
  isLoading: false,
  error: null,
};

const getActions = type =>
  isAnyOf(getContacts[type], addContact[type], deleteContact[type]);

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,
  extraReducers: builder => {
    builder
      .addCase(getContacts.fulfilled, (state, action) => {
        state.items = action.payload;
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.items.unshift(action.payload);
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.items = state.items.filter(
          contact => contact.id !== action.payload.id
        );
      })
      .addMatcher(getActions('pending'), state => {
        state.isLoading = true;
      })

      .addMatcher(getActions('rejected'), (state, action) => {
        state.isLoading = false;
        state.error = true;
      })
      .addMatcher(getActions('fulfilled'), state => {
        state.isLoading = false;
        state.error = null;
      });
  },
});

export const contactsReducer = contactsSlice.reducer;
