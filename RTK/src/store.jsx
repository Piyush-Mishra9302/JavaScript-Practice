import { configureStore } from "@reduxjs/toolkit";
import colorReducer from "./colorSlice";

const store = configureStore({
  reducer: {
    myColor: colorReducer,   // ✅ connected reducer
  },
});

export default store;

// import { configureStore } from "@reduxjs/toolkit";
// import counterReducer from "./counterSlice"; // <- add this import (path as per your folders)

// const store = configureStore({
//   reducer: {
//     counter: counterReducer
//   }
// });

// export default store;
