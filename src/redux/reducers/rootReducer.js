import dataReducer from "./dataReducer";
import cartReducer from "./cartReducer";
import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const rootReducer = combineReducers({
  data: dataReducer,
  cart: cartReducer,
});

const persistConfig = {
  key: "root",
  storage: storage,
  whitelist: ["cart"],
};

export default persistReducer(persistConfig, rootReducer);
