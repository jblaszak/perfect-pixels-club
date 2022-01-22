import { configureStore } from "@reduxjs/toolkit";
import statusSlice from "./status-slice";
import mintSlice from "./mint-slice";

const store = configureStore({
  reducer: {
    status: statusSlice.reducer,
    mint: mintSlice.reducer,
  },
});

export default store;
