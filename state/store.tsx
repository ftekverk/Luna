import { applyMiddleware } from 'redux';
import { configureStore } from '@reduxjs/toolkit'

import thunk from 'redux-thunk';

import reducers from '../reducers/userReducer';
import { persistStore, persistReducer } from 'redux-persist';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Configure persisted data
const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    stateReconciler: autoMergeLevel2,
}
const persistedReducer = persistReducer(persistConfig, reducers); // TODO: fix type code

// Configure store
const store = configureStore({
    reducer: persistedReducer,
    devTools: process.env.NODE_ENV !== 'production', // TODO: 
    middleware: [thunk]
})
const persistor = persistStore(store);

type RootState = ReturnType<typeof store.getState>
export { store, persistor, RootState };
