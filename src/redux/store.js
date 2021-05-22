import {applyMiddleware, compose, createStore} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import {persistStore, persistReducer} from 'redux-persist';

//import FilesystemStorage from 'redux-persist-filesystem-storage';

//import storage from 'redux-persist/lib/storage';

import AsyncStorage from '@react-native-async-storage/async-storage';

const composeEnchancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  timeout: 0,
  whitelist: ['initial'],
};

const initialState = {};
const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(
  persistedReducer,
  initialState,
  composeEnchancer(applyMiddleware(thunk)),
);

let persistor = persistStore(store);

export default {store, persistor};
export {store, persistor};

// export default function configureStore() {
//   const initialState = {};

//   const enchacer = compose(applyMiddleware(thunk));
//   const persistedReducer = persistedReducer(persistConfig, rootReducer);
//   const store = createStore(persistedReducer, initialState, enchacer);
//   const persistor = persistStore(store);
//   return {store, persistor};
// }
