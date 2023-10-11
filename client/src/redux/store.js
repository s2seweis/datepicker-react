// import { createStore, applyMiddleware  , combineReducers } from 'redux';
// import { composeWithDevTools } from 'redux-devtools-extension';
// import thunk from 'redux-thunk';
// import { alertsReducer } from './reducers/alertsReducer';
// import { carsReducer } from './reducers/carsReducer';
// import { bookingsReducer } from './reducers/bookingsReducer';
// import { usersReducer } from './reducers/usersReducer';
// const composeEnhancers = composeWithDevTools({});

// const rootReducer = combineReducers({
//    carsReducer,
//    alertsReducer,
//    bookingsReducer,
//    usersReducer
// })

// const store = createStore(
//   rootReducer,
//   composeEnhancers(
//     applyMiddleware(thunk)
   
//   )
// );

// export default store

import {configureStore} from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import {combineReducers} from "redux";
import { persistReducer } from 'redux-persist';
import thunk from 'redux-thunk';

import { alertsReducer } from './reducers/alertsReducer';
import { carsReducer } from './reducers/carsReducer';
import { bookingsReducer } from './reducers/bookingsReducer';
import { usersReducer } from './reducers/usersReducer';



const rootReducer = combineReducers({
   carsReducer,
   alertsReducer,
   bookingsReducer,
   usersReducer
})




const persistConfig = {
    key: 'root',
    storage,
    // whitelist: ['usersReducer' ]
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
    reducer: persistedReducer,
    
    devTools: process.env.NODE_ENV !== 'production',
    middleware: [thunk]
});

export default store;