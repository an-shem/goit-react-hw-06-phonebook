import { createSlice } from '@reduxjs/toolkit';

const itemsSlice = createSlice({
  name: 'items',
  initialState: [],
  reducers: {
    addContact: (state, { payload }) => [...state, payload],
    deleteContact: (state, { payload }) =>
      state.filter(contact => contact.id !== payload),
  },
});

export const { addContact, deleteContact } = itemsSlice.actions;
export default itemsSlice.reducer;
