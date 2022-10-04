import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'
import storage from 'redux-persist/lib/storage';
import contactsReduser from './contactsSlice'
import filterReduser from './filterSlice'
import {
  persistStore,
  persistReducer,
} from 'redux-persist';


const rootReducer = combineReducers({
  contacts: contactsReduser,
  filter: filterReduser,
})

const persistConfig = {
  key: 'contacts',
  storage,
  blacklist: ['filter'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer
})

export const persistor = persistStore(store);