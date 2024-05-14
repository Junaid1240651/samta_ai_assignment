import { combineReducers, configureStore } from "@reduxjs/toolkit";
import toDoList from "./toDoList";
import playerData from "./playerActivity";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

// Configuration for redux-persist
const persistConfig = {
  key: "root",
  storage, // storage type (localStorage, sessionStorage, etc.)
  blacklist: [], // list of reducers to exclude from persistence
};

// Root reducer combining all reducers
const rootReducer = combineReducers({
  toDoList: toDoList, // Assuming `toDoList` is a reducer
  playerData: playerData,
});

// Create a persisted reducer by wrapping rootReducer with persistConfig
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Configure the Redux store
const store = configureStore({
  reducer: persistedReducer, // Pass the persisted reducer to the store
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;
