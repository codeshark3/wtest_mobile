import { configureStore, combineReducers } from "@reduxjs/toolkit";

// import registerReducer from "./registerSlice"
// import docDetailsReducer from "./docDetailsSlice"
import authReducer from "./features/auth/authSlice";
import testReducer from "./features/tests/testSlice";
// import watchlistReducer from "./features/watchlist/watchlistSlice";
// import homeReducer from "./features/home/homeSlice";
const rootReducer = combineReducers({
  test: testReducer,

  // home: homeReducer,
  auth: authReducer,
  //  register:registerReducer,
  //  details:docDetailsReducer
});

export const store = configureStore({
  reducer: rootReducer,
});
