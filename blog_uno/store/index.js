import { configureStore } from "@reduxjs/toolkit";
import user from './slices/user.Slice'

const store = configureStore({
reducer :{
   user
}
});

export default store;