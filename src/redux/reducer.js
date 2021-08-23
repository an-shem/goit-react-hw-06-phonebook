import { createReducer, combineReducers } from '@reduxjs/toolkit';
import { addContact, deleteContact, filterContact } from './action';

const items = createReducer([], {
  [addContact]: (state, { payload }) => [...state, payload],
  [deleteContact]: (state, { payload }) =>
    state.filter(contact => contact.id !== payload),
});

const filter = createReducer('', {
  [filterContact]: (_, { payload }) => payload,
});

const contacts = combineReducers({
  items,
  filter,
});

export default contacts;
