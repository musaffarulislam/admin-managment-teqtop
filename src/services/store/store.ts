import { configureStore, Middleware } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';
import { rootReducer } from './rootReducer';

const persistConfig = {
    key: 'root',
    storage,
  };
  

const persistedReducer = persistReducer(persistConfig, rootReducer);

export type RootState = ReturnType<typeof store.getState>;

const middleware: Middleware[] = [thunk];

export const store = configureStore({
    reducer: persistedReducer,
    middleware,
});
  
export const persistor = persistStore(store);