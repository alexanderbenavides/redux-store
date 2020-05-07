import { combineReducers } from "redux";
import modalsReducer from "./modalsReducer";
import validationsReducer from "./validationsReducer";
import productsReducer from "./productsReducer";

export default combineReducers({
  modals: modalsReducer,
  validations: validationsReducer,
  products: productsReducer,
});
