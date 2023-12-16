

import storage from 'redux-persist/lib/storage'
import { persistReducer } from 'redux-persist'
import { contactReducer } from './contactListSlise/contactListSlise'


const persistConfig = {
	key: 'contacts',
	storage,
	withelist: ['contacts'],
}

const persistedReducer = persistReducer(persistConfig, contactReducer)

export const reducer = {
	contacts: persistedReducer
}