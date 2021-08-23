import { configureStore, combineReducers } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import contacts from './reducer.js';

const persistConfig = {
  key: 'contacts',
  storage,
  blacklist: ['filter'],
};

const rootPersistConfig = {
  key: 'root',
  storage,
  blacklist: ['contacts'],
};

const rootReducer = combineReducers({
  contacts: persistReducer(persistConfig, contacts),
});

// const persistedReducer = persistReducer(persistConfig, contacts);
const persistedReducer = persistReducer(rootPersistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  devTools: process.env.NODE_ENV !== 'production',
});

export const persistor = persistStore(store);
