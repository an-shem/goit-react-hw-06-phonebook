import { configureStore } from '@reduxjs/toolkit';
import contacts from './reducer.js';

export const store = configureStore({
  reducer: {
    contacts,
  },
  devTools: process.env.NODE_ENV !== 'production',
});
